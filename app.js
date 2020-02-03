const express = require("express");
const connectDB = require("./config/db");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const path = require("path");
const product = require("./routes/product.jsx");
const auth = require("./routes/auth");
const config = require("config");
const User = require("./models/User");
const cookiesession = require("cookie-session");
const app = express();

connectDB();

//Init middleware(bodyparser)
app.use(express.json({ extended: false }));

//define routes

app.use(
  cookiesession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [config.get("cookieKey")]
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id).then(function(User) {
    done(null, User);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: config.get("clientId"),
      clientSecret: config.get("clientSecret"),
      callbackURL: "/auth/google/callback",
      proxy: true
      //  passReqToCallback: true
    },
    async function(accessToken, refreshToken, profile, done) {
      const existinguser = await User.findOne({ userId: profile.id });
      if (existinguser) {
        console.log("user already exists");
        done(null, existinguser);
      } else {
        const user = await new User({
          userId: profile.id,
          image: profile.photos[0].value,
          name: profile.displayName,
          email: profile.emails[0].value
        }).save();

        done(null, user);
      }
    }
  )
);

app.use(product);
app.use(auth);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("orders app has started on port " + port);
});
