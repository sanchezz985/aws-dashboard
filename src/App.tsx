import React from 'react';
import 'bootswatch/dist/solar/bootstrap.min.css';
import "./assets/styles/App.scss";
import MainContainer from './components/containers/Main';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <MainContainer/>
    </Router>
  );
}

export default App;
