import React, { useState, useContext, Fragment } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { users, searchUsers, clearUsers } = githubContext;
  const { setAlert } = alertContext;

  const [text, setText] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="text"
          value={text}
          onChange={handleChange}
          placeholder="Search Users..."
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </Fragment>
  );
};

export default Search;
