import React from 'react';
import '../../css/login.css';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    render(){

        if (!this.props.visible) return null;

        return (
            <div>
                <form action="/webshop/login" method="post" id="login" className="navbar-form" role="form">

                    <div className="input-group">
                        <input id="userName" type="userName" className="form-control" name="userName"
                                placeholder="Username"
                                onChange={e => this.onChange(e)}
                                value={this.state.username}/>
                    </div>

                    <div className="input-group">
                        <input id="password" type="password" className="form-control" name="password"
                               placeholder="Password"
                               onChange={e => this.onChange(e)}
                               value={this.state.password}/>
                    </div>

                    <button type="submit" className="btn btn-primary">Login</button>
                </form>

            </div>

        )
    }

}

export default Login;