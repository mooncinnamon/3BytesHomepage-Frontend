import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Header from './SubHeader';
import {withRouter} from 'react-router-dom';
import {registerUser} from '../actions/auth';
import classname from 'classnames';

class Register extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
            password_confirm: '',
            secretcode: '',
            errors: false
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
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm,
            secretcode: this.state.secretcode
        }
        this.props.registerUser(user, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    render() {
        const {errors} = this.state;
        return (
            <React.Fragment>
                <Header/>
                <section id={"three"}>
                    <div className="container" style={{marginTop: '50px', width: '700px'}}>
                        <header>
                            <h2 style={{marginBottom: '40px'}}>Registration</h2>
                        </header>
                        <form onSubmit={this.handleSubmit}>
                            <p>
                                <div className="field">
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
                                <div className="field">
                                    <label htmlFor="name">EMAIL</label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className={classname('form-control form-control-lg', {
                                            'is-invalid': errors.email
                                        })}
                                        name="email"
                                        onChange={this.handleInputChange}
                                        value={this.state.email}
                                    />
                                    {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                                </div>
                            </p>
                            <div className="field half first">
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
                            <div className="field half">
                                <label htmlFor="name">Confirm Password</label>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className={classname('form-control form-control-lg', {
                                        'is-invalid': errors.password_confirm
                                    })}
                                    name="password_confirm"
                                    onChange={this.handleInputChange}
                                    value={this.state.password_confirm}
                                />
                                {errors.password_confirm && (
                                    <div className="invalid-feedback">{errors.password_confirm}</div>)}
                            </div>
                            <p>
                                <div className="form-group">
                                    <label htmlFor="name">CODE</label>
                                    <input
                                        type="text"
                                        placeholder="Code"
                                        className={classname('form-control form-control-lg', {
                                            'is-invalid': errors.secretcode
                                        })}
                                        name="secretcode"
                                        onChange={this.handleInputChange}
                                        value={this.state.secretcode}
                                    />
                                    {errors.secretcode && (<div className="invalid-feedback">{errors.secretcode}</div>)}
                                </div>
                            </p>
                            <ul className="actions">
                                <li>
                                    <button type="submit">
                                        Register User
                                    </button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {registerUser})(withRouter(Register))