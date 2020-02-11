import React, { Component } from 'react';
import CoolButton from './CoolButton'



class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar is-transparent">
                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-start">
                        <a className="navbar-item" href=".">
                            Home
                        </a>
                        </div>
                        <div className="navbar-end">
                        <div className="navbar-item">
                        <CoolButton name= "Sign Up" styling ="button is-rounded my-class is-danger is-small"/>
                        <CoolButton name= "Log In" styling="button is-small is-success"/>
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Navbar;



  
