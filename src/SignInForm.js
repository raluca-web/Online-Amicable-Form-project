import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignInForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            password: ''
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
                <form className="FormFields" onSubmit={this.handleSubmit}>
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
                        <button className="formField-button mr-20">Intra in cont</button>
                        <Link to="/forget-password" className="formField-link">Ai uitat parola?</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignInForm;