import React, { useContext } from "react";
import { UserItem } from "./UserItem";
import styled from "styled-components";
import Spinner from "./../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

const UserStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <UserStyle>
        {users.map((user, index) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </UserStyle>
    );
  }
};

export default Users;
