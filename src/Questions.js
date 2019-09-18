import React from 'react';
import ReactDOM from 'react-dom';
import {Link, NavLink} from "react-router-dom";

class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: false
        }
    }

    toggleHidden () {
        this.setState({
            isHidden: !this.state.isHidden
            })
    }


    render() {
        return (<header className="frequentQuestions">
            <div className="row">
                <div className="firstSection">
                    <span>INTREBARI FRECVENTE</span>
                </div>
            </div>
            <div className="row">
                <div className="col span-1-of-2">
                    <p className="question">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt?
                        <br/>
                        <a onClick={this.toggleHidden.bind(this)} className="show-btn" href="#">Vezi raspunsul</a>
                    </p>
                    <br/>
                    {this.state.isHidden && <Child/>}
                </div>
                <div className="col span-1-of-2">
                    <p className="question">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt?
                        <br/>
                        <a onClick={this.toggleHidden.bind(this)} className="show-btn" href="#">Vezi raspunsul</a>
                    </p>
                    <br/>
                    {this.state.isHidden && <Child/>}
                </div>
            </div>
        </header>

        )
    }
}

const Child = () => (
    <p className="answer">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
);

export default Questions;