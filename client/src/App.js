import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Alert from "./components/layout/alert";
import Home from "./components/pages/Home";
import OrderForm from "./components/pages/OrderForm";
import EditForm from "./components/pages/EditForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getProducts, getUser } from "./actions/productAction";
//redux
import store from "./store";
import { Provider } from "react-redux";

function App() {
  useEffect(() => {
    store.dispatch(getProducts());
    store.dispatch(getUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/order" component={OrderForm} />
          <Route exact path="/editorder" component={EditForm} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
