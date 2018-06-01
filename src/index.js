import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page from "./components/Page/Page";
import store from "./store/store";
import {Provider} from "react-redux";

function App() {
  return (
    <Router>
      <Route exact path="/" name="Home Page" component={Page}/>
    </Router>
  )
}

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));
};

render();