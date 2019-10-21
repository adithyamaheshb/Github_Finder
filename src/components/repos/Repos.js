import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
    return repos.map((repo, r) => {
        return <RepoItem key={r} repo={repo} />
    });
}

Repos.propTypes = {
    repos: PropTypes.array.isRequired
}

export default Repos
