import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.scss';
import Page from "./components/Page/Page";
import store from "./store/store";
import {Provider} from "react-redux";
import ReactGA from 'react-ga';


function App() {
  ReactGA.initialize('UA-36640942-8');
  ReactGA.pageview('/');

  return (
    <Router>
      <Route exact path="/" name="Home Page" component={Page}/>
    </Router>
  )
}

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <div id="App">
        <App />
      </div>
    </Provider>,
    document.getElementById('root'));
};

render();