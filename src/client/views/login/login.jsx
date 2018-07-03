import React from 'react';
import './login.scss';

export default class Signup extends React.Component{
    render(){
        return (
            <div className="container" id="signup-form">
                <form className='light-green accent-3 z-depth-5' action='/api/login' method='post'>
                    <div className="input-field">
                        <input type="email" name="email" aria-describedby="emailHelp" className="validate" id="email" placeholder="Enter email"/>
                    </div>
                    <div className="input-field">
                        <input type="password" id="password" name="password" placeholder="Password"/>
                    </div>
                    <button className="waves-effect waves-light btn-small" type="submit">Login</button>
                </form>
            </div>
        );
    }
}