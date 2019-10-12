import React from 'react'
import { UserItem } from './UserItem';
import styled from 'styled-components';
import Spinner from './../layout/Spinner';
import PropTypes from 'prop-types';

const UserStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
`;

const Users = ({ users, loading }) => {
    if(loading) {
        return <Spinner />
    }
    else {
        return (
            <UserStyle>
                {users.map((user, index) => {
                    return <UserItem key={user.id} user={user} />
                })}
            </UserStyle>
        )
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default Users
