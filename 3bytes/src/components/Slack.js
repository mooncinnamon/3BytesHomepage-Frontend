import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classname from "classnames";
import {connect} from 'react-redux';
import {slack} from "../actions/slack";
import {logoutUser} from "../actions/auth";

class Slack extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
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
        const email = {
            email: this.state.email,
        };
        this.props.slack(email);
    }

    componentDidMount() {
        console.log('componentDidMount', 'go to home');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', 'go to home');
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        const {errors} = this.state;
        return (
            <div className="container" style={{marginTop: '50px', width: '700px'}}>
                <h1>Send Slack Email</h1>
                <h3>You can come to our place</h3>
                <h2 style={{marginBottom: '40px'}}>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="EMail"
                            className={classname('form-control form-control-lg', {
                                'is-invalid': errors.email
                            })}
                            name="email"
                            onChange={this.handleInputChange}
                            value={this.state.email}
                        />
                        {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Send Mail User
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

Slack.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    slack: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    slack: state.slack,
    errors: state.errors
});

export default connect(mapStateToProps, {slack},{logoutUser})(Slack);