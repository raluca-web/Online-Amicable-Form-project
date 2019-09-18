import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            password1:'',
            hasAgreed: false
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
                <form onSubmit={this.handleSubmit} className="FormFields">
                    <div className="formField">
                        <label className="formField-label" htmlFor="name">Numar auto</label>
                        <input type="text"
                               id="name"
                               className="formField-input"
                               placeholder="Numarul de inmatriculare"
                               name="name"
                               value={this.state.name}
                               onChange={this.handleChange} />
                    </div>
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
                        <label className="formField-label" htmlFor="password">Parola</label>
                        <input type="password"
                               id="password"
                               className="formField-input"
                               placeholder="Introdu parola"
                               name="password"
                               value={this.state.password}
                               onChange={this.handleChange} />
                    </div>
                    <div className="formField">
                        <label className="formField-label" htmlFor="password1">Repeta parola</label>
                        <input type="password"
                               id="password1"
                               className="formField-input"
                               placeholder="Reintrodu parola"
                               name="password1"
                               value={this.state.password1}
                               onChange={this.handleChange} />
                    </div>

                    <div className="formField">
                        <label className="formField-checkboxLabel">
                            <input className="formField-checkbox"
                                   type="checkbox"
                                   name="hasAgreed"
                                   value={this.state.hasAgreed}
                                   onChange={this.handleChange} /> Sunt de acord cu
                            <a href="" className="formField-termsLink">termenii si conditiile.</a>
                        </label>
                    </div>

                    <div className="formField">
                        <button className="formField-button mr-20">Creeaza cont</button>
                        <Link to="/sign-in" className="formField-link">Sunt deja inregistrat</Link>
                    </div>
                </form>
            </div>
        );
    }
}
export default SignUpForm;