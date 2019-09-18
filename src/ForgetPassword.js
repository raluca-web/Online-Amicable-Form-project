import React, { Component } from 'react';
import {HashRouter as Router, Link} from 'react-router-dom';
import ReactDOM from "react-dom";

class ForgetPassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
            <div className="formCenter">
                <h2>Pentru recuperarea parolei, va rugam introduceti adresa dvs de e-mail</h2>
                <form onSubmit={this.handleSubmit} className="FormFields">
                    <div className="formField">
                        <label className="formField-label" htmlFor="email">Adresa de e-mail</label>
                        <input type="email"
                               id="email"
                               className="formField-input"
                               placeholder="Introdu adresa de e-mail"
                               name="email" value={this.state.email}
                               onChange={this.handleChange} />
                    </div>
                    <div className="formField">
                        <button className="formField-button mr-20">Recupereaza parola</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ForgetPassword;