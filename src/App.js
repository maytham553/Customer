import "./App.css";
import React from "react";
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  render() {
    return <div className="App">

      <Home/>
    </div>;
  }
}

