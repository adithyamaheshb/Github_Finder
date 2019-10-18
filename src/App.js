import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import './App.css';
import { Navbar } from './components/layout/Navbar';
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

class App extends React.Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  }

  //Loading Users on mounting
  async componentDidMount() {
    this.setState({ loading: true });
    let res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: res.data, loading: false })
  }

  //Search for Github Users on clicking search
  searchUsers = async (text) => {
    this.setState({ loading: true });
    let res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: res.data.items, loading: false })
  }

  //Get Single Github User
  getUser = async (username) => {
    this.setState({ loading: true });
    let res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ user: res.data, loading: false })
  } 

  //clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  }

  //set alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null}), 5000);
  }

  render() {
    const { loading, users, alert, user} = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar title = "Navbar title" icon = "fa fa-github"/>
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <Search searchUsers={this.searchUsers} 
                    clearUsers={this.clearUsers} 
                    showClear={users.length > 0}
                    setAlert={this.setAlert} />
                  <Users loading={loading} users={users}/>
                </Fragment>
              )} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" render={props => (
                <User {...props} getUser={this.getUser} user={user} loading={loading} />
              )}  />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

App.propsTypes = {
  users: PropTypes.array.isRequired,
}

export default App;