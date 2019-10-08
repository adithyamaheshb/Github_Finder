import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import './App.css';
import { Navbar } from './components/layout/Navbar';
import Users from './components/users/Users'

class App extends React.Component {
  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true });

    let res = await axios.get('https://api.github.com/users');
    console.log(res.data);
    this.setState({ users: res.data, loading: false })
  }

  render() {
    const { loading, users} = this.state;
    return (
      <div className="App">
        <Navbar title = "Navbar title" icon = "fa fa-github"/>
        <div className="container">
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
