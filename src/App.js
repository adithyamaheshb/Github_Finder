import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import './App.css';
import { Navbar } from './components/layout/Navbar';
import Users from './components/users/Users'
import Search from './components/users/Search';
import Alert from './components/layout/Alert';

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }

  //Loading Users on mounting
  async componentDidMount() {
    this.setState({ loading: true });
    let res = await axios.get(`https://api.github.com/users?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`);
    this.setState({ users: res.data, loading: false })
  }

  //Search for Github Users on clicking search
  searchUsers = async (text) => {
    this.setState({ loading: true });
    let res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`);
    console.log(res.data);
    this.setState({ users: res.data.items, loading: false })
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
    const { loading, users, alert} = this.state;
    return (
      <div className="App">
        <Navbar title = "Navbar title" icon = "fa fa-github"/>
        <div className="container">
          <Alert alert={alert} />
          <Search searchUsers={this.searchUsers} 
            clearUsers={this.clearUsers} 
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert} />
          <Users loading={loading} users={users}/>
        </div>
      </div>
    );
  }
}

App.propsTypes = {
  users: PropTypes.array.isRequired,
}

export default App;
