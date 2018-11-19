import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Footer from './Footer';
import {loginUser} from '../actions/auth';

import classname from 'classnames';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            errors: {},
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password,
        };
        this.props.loginUser(user);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
            console.log('componentDidMount', 'go to home');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/');
            console.log('componentWillReceiveProps', 'go to home');
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        const {errors} = this.state;
        return (
            <React.Fragment>
                <header id="header">
                    <div className="inner">
                        <a href="/">
                            <h1>3Bytes</h1>
                        </a>
                    </div>
                </header>
                <section id={"three"}>
                    <div className="container" style={{marginTop: '50px', width: '700px'}}>
                        <header>
                            <h2 style={{marginBottom: '40px'}}>Login</h2>
                        </header>
                        <form onSubmit={this.handleSubmit}>
                            <p>
                                <div className="field half">
                                    <label htmlFor="name">ID</label>
                                    <input
                                        type="text"
                                        placeholder="username"
                                        className={classname('form-control form-control-lg', {
                                            'is-invalid': errors.username
                                        })}
                                        name="username"
                                        onChange={this.handleInputChange}
                                        value={this.state.username}
                                    />
                                    {errors.username && (<div className="invalid-feedback">{errors.username}</div>)}
                                </div>
                            </p>
                            <p>
                                <div className="field half">
                                    <label htmlFor="name">Password</label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className={classname('form-control form-control-lg', {
                                            'is-invalid': errors.password
                                        })}
                                        name="password"
                                        onChange={this.handleInputChange}
                                        value={this.state.password}
                                    />
                                    {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                                </div>
                            </p>
                            <ul className="actions">
                                <li>
                                    <button type="submit">Sign In</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {loginUser})(Login)