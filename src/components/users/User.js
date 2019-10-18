import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Spinner from './../layout/Spinner';
import { Link } from 'react-router-dom';

export class User extends Component {

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
    }

    render() {
        const { name, avatar_url, location, bio, blog, login, html_url,
            followers, following, public_repos, public_gists, hireable } = this.props.user;
        const { loading } = this.props;
        if(loading) { return <Spinner />; }
        console.log(hireable);
        return (
            <Fragment>
                <Link to='/' className="btn btn-light">Back To Search</Link> 
                Hireable: {' '}
                {hireable ? <i className="fa fa-check text-success"/> : <i classname="fa fa-times-circle text-danger" />}
            </Fragment>
        )
    }
}

export default User
