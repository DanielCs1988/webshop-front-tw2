import React from "react";

class Alert extends React.Component {
    render() {
        const alert = this.props.message && <div className="alert alert-success" role="alert">{this.props.message}</div>
        return(
            <div>
                {alert}
            </div>
        )
    }
}

export default Alert;