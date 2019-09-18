import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Link, NavLink, BrowserRouter } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import Footer from "./Footer";
import ForgetPassword from "./ForgetPassword";
import Questions from "./Questions";
import Instructions from "./Instructions";



class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <div className="app-left">
                        <h1>CONSTATARE AMIABILA DE ACCIDENT</h1>
                        <div className="app-left-btn">
                            <button className={"main-btn"}>Firme partenere</button>
                            <NavLink className={"link"} to={"instructions"}>
                                <button className={"main-btn"}>Instructiuni de completare</button>
                            </NavLink>
                            <NavLink className={"link"} to={"/questions"}>
                                <button className={"main-btn"}>Intrebari frecvente</button>
                            </NavLink>
                        </div>
                    </div>

                    <div className="app-right">
                        <div className="formTitle">
                            <NavLink to="/sign-in" activeClassName="formTitle-link-active" className="formTitle-link">Intra in cont</NavLink> sau
                            <NavLink exact to="/" activeClassName="formTitle-link-active" className="formTitle-link">Creeaza cont</NavLink>
                        </div>
                        <div className={"flag"}>
                            <img src="/img/img.jpeg" alt={"Logo"} className= {"logo"}/>
                        </div>

                    <Switch>
                        <Route exact path="/" component={SignUpForm}>
                        </Route>
                        <Route path="/sign-in" component={SignInForm}>
                        </Route>
                        <Route path={"/forget-password"} component={ForgetPassword}>
                        </Route>
                        <Route path={"/questions"} component={Questions}>
                        </Route>
                        <Route path={"/instructions"} component={Instructions}>
                        </Route>

                    </Switch>


                    </div>
                </div>
                <Footer/>
            </BrowserRouter>
        );
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <BrowserRouter>
            <Route path = '/' component = {App}/>
        </BrowserRouter>,

        document.getElementById('app')
    );
});

