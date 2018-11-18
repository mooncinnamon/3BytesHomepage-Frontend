import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import PropTypes from 'prop-types'

class Header extends Component {
    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history)
    }

    render() {
        const {isAuthenticated} = this.props.auth;

        const authLinks = (
            <React.Fragment>
                <a className='nav-link' onClick={this.onLogout.bind(this)}>
                    Logout
                </a>
                <Link to='/slack'>Slack</Link>
            </React.Fragment>
        )

        const guestLinks = (
            <React.Fragment>
                <Link to='/regist'>Sign Up</Link>
                <Link to='/login'>Sign In</Link>
            </React.Fragment>
        )

        return (
            <header id="header">
                <div className="inner">
                    <Link to="/" className="logo"><strong>3Bytes</strong> by Hongik</Link>
                    <nav id="nav">
                        <Link to='/'>Home</Link>
                        {isAuthenticated ? authLinks : guestLinks}
                    </nav>
                </div>
            </header>
        )
    }
}

Header.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logoutUser})(withRouter(Header))
