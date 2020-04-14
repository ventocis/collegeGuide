import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar';
import MainOrg from './mainOrg';
import { BrowserRouter } from 'react-router-dom';

function Main() {
  const emptyUser = {
    fName: '',
    lName: '',
    email: ''
  };

  let [curUser, setCurUser] = React.useState(function getEmptyState() {
    return emptyUser;
  });
  return (
    <div>
      <MainOrg curUser={curUser} setCurUser={setCurUser} />
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById('main'));
