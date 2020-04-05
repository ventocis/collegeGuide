import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar';
import MainOrg from './mainOrg';
import { BrowserRouter } from 'react-router-dom';

function Main() {

  return (
    <div>
    <MainOrg />
    </div>
  )
}

ReactDOM.render(
  <Main/>,
  document.getElementById("main")
);