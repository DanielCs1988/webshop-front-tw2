import React from "react";

class UserInfo extends React.Component {

    constructor(props) {
        super(props);
        this.submitUserInfo = this.submitUserInfo.bind(this);
    }

    submitUserInfo() {
        this.props.saveInfo({
            'name': this.nameInput.value,
            'email': this.emailInput.value,
            'phone': this.phoneInput.value
        })
    }

    render() {
        return (
                [<div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" className="form-control" placeholder="Enter your name here"
                           ref={(name) => this.nameInput = name} />
                </div>,

                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" className="form-control" placeholder="Enter email"
                           ref={(email) => this.emailInput = email} />
                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>,

                <div id="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" id="phone" className="form-control" placeholder="Enter your phone number"
                           ref={(phone) => this.phoneInput = phone} />
                </div>,
                <button className="btn btn-block" type="button" onClick={this.submitUserInfo}>
                    Accept
                </button>]
        );
    }

}

export default UserInfo;