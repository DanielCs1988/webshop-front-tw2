import React from 'react';
import '../../css/login.css';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            error: null
        };
        this.onUserChange.bind(this);
        this.onPasswordChange.bind(this);
        this.sendUserData.bind(this);
    }

    sendUserData(event){
        event.preventDefault();
        console.log(this.state.username);

        let formBody = [];
        for (let property in this.state) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(this.state[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }

        formBody = formBody.join("&");

        fetch('/webshop/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',

            },
            body:  formBody
        }).then(response => response.json())
            .then(data => {localStorage.setItem("username", data.name);
                localStorage.setItem("userid", data.id);
            this.setState({error: "Succesfully signed in"});
            this.props.setbtns(); this.props.hidelogin();
            this.props.setLogIn("Logged in as " + localStorage.getItem("username"));
            }).catch(() =>{
                this.setState({error: "Invalid username or password"});
                this.setState({username: ""});
                this.setState({password: ""});
        });
    }

    onUserChange(event) {
        this.setState({username: event.target.value});
    }

    onPasswordChange(event) {
        this.setState({password: event.target.value});
    }

    render(){

        if (!this.props.visible) return null;

        return (
            <div>
                <form onSubmit={this.sendUserData.bind(this)} method="post" id="login" className="navbar-form" role="form">
                    <i>{this.state.error}</i>
                    <div className="input-group">
                        <input id="userName" type="userName" className="form-control" name="userName"
                                placeholder="Username"
                                onChange={e => this.onUserChange(e)}
                                value={this.state.username}/>
                    </div>

                    <div className="input-group">
                        <input id="password" type="password" className="form-control" name="password"
                               placeholder="Password"
                               onChange={e => this.onPasswordChange(e)}
                               value={this.state.password}/>
                    </div>

                    <button type="submit" className="btn btn-primary">Login</button>
                </form>

            </div>

        )
    }

}

export default Login;