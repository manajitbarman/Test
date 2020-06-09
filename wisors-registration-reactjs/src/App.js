import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListUserAccountComponent from "./component/user/ListUserAccountComponent";
import AddUserAccountComponent from "./component/user/AddUserAccountComponent";
import EditUserAccountComponent from "./component/user/EditUserAccountComponent";

function App() {
  return (
      <div className="container">
          <Router>
              <div className="col-md-6">
                  <h1 className="text-center" style={style}>Wisors Registration</h1>
                  <Switch>
                      <Route path="/" exact component={ListUserAccountComponent} />
                      <Route path="/users" component={ListUserAccountComponent} />
                      <Route path="/add-user" component={AddUserAccountComponent} />
                      <Route path="/edit-user" component={EditUserAccountComponent} />
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;
