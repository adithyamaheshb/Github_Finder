import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name] : value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { text } = this.state;
        const { searchUsers, setAlert } = this.props;
        if(text === '') {
            setAlert('Please enter something', 'light')
        }
        else {
            searchUsers(text);
            this.setState({ text: '' });
        }
    }

    render() {
        const { showClear, clearUsers } = this.props;
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit} className="form">
                    <input type="text"
                        name="text"
                        onChange={this.handleChange}
                        placeholder="Search Users..." />
                    <input type="submit"
                        value="Search"
                        className="btn btn-dark btn-block" />
                </form>
                {showClear && <button className="btn btn-light btn-block" onClick={ clearUsers}>Clear</button>}
            </Fragment>
        )
    }
}

export default Search
