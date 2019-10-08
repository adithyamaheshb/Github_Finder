import React, { Component } from 'react'
import { UserItem } from './UserItem';
import styled from 'styled-components';

const UserStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
`;

export class Users extends Component {
    state = {
        users: [
            {
                id: 1,
                login: 'octocat',
                avatar_url: 'https://avatars1.githubusercontent.com/u/16808858?s=400&u=6a7778ced308a96d08e0e0d7865fc254fa4c40e0&v=4',
                html_url: 'https://github.com/octocat'
            },
            {
                id: 2,
                login: 'octocat',
                avatar_url: 'https://avatars1.githubusercontent.com/u/16808858?s=400&u=6a7778ced308a96d08e0e0d7865fc254fa4c40e0&v=4',
                html_url: 'https://github.com/octocat'
            },
            {
                id: 3,
                login: 'octocat',
                avatar_url: 'https://avatars1.githubusercontent.com/u/16808858?s=400&u=6a7778ced308a96d08e0e0d7865fc254fa4c40e0&v=4',
                html_url: 'https://github.com/octocat'
            }
        ]
    }
    render() {
        const { users } = this.props;
        return (
            <UserStyle>
                {users.map((user, index) => {
                    return <UserItem key={user.id} user={user} />
                })}
            </UserStyle>
        )
    }
}



export default Users
