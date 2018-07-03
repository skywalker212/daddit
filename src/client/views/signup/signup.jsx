import React from 'react';
import './signup.scss';

export default class Signup extends React.Component{
    render(){
        return (
            <div className="container" id="signup-form">
                <form className='blue lighten-4 z-depth-5' action='/api/signup' method='post'>
                    <div className="input-field">
                        <input type="email" name="email" aria-describedby="emailHelp" className="validate" id="email" placeholder="Enter email"/>
                    </div>
                    <div className="input-field">
                        <input type="password" id="password" name="password" placeholder="Password"/>
                    </div>
                    <div className="input-field">
                        <input type="password" id="re-password" name="re_password" placeholder="Re-enter Password"/>
                    </div>
                    <button className="waves-effect waves-light btn-small" type="submit">Signup</button>
                </form>
            </div>
        );
    }
}