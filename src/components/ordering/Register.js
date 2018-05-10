import React from 'react';
import '../../css/register.css';

class Register extends React.Component {
    render(){

        if (!this.props.visible) return null;

        return (
            <div>
                <form id="register" className="navbar-form" role="form">

                    <div className="input-group">
                        <input id="userName" type="text" className="form-control" name="userName"
                               placeholder="Username"/>
                    </div>
                    <div className="input-group">
                        <input id="email" type="email" className="form-control" name="email"
                               placeholder="Email"/>
                    </div>
                    <div className="input-group">
                        <input id="phone" type="text" className="form-control" name="phone"
                               placeholder="Phone"/>
                    </div>

                    <div className="input-group">
                        <input id="password" type="password" className="form-control" name="password"
                               placeholder="Password"/>
                    </div>

                    <div className="input-group">
                        <input id="password" type="password" className="form-control" name="password"
                               placeholder="Verify password"/>
                    </div>

                    <button type="submit" className="btn btn-primary">Register</button>
                </form>

            </div>

        )
    }

}

export default Register;