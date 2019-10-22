import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';

const Search = ({ showClear, clearUsers, searchUsers, setAlert }) => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setText(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text === '') {
            setAlert('Please enter something', 'light')
        }
        else {
            searchUsers(text);
            setText('');
        }
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit} className="form">
                <input type="text"
                    name="text"
                    value={text} 
                    onChange={handleChange}
                    placeholder="Search Users..." />
                <input type="submit"
                    value="Search"
                    className="btn btn-dark btn-block" />
            </form>
            {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
        </Fragment>
    )
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
};

export default Search
