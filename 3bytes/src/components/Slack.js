import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classname from "classnames";
import {connect} from 'react-redux';
import {slack} from "../actions/slack";
import {logoutUser} from "../actions/auth";
import Header from "./SubHeader";

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
            <React.Fragment>
                <Header/>
                <section id={"three"}>
                    <div className="container" style={{marginTop: '50px', width: '700px'}}>
                        <header>
                            <h1>Send Slack Email</h1>
                            <h3>You can come to our place</h3>
                        </header>
                        <form onSubmit={this.handleSubmit}>
                            <p>
                            <div className="form-group">
                                <label htmlFor="name">EMail</label>
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
                            </p>
                            <ul className="actions">
                                <li>
                                    <button type="submit">
                                        Send Mail
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

Slack.propTypes = {
    slack: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    slack: state.slack,
    errors: state.errors
});

export default connect(mapStateToProps, {slack})(Slack)