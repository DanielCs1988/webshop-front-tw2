import React from "react";
import "../../css/alert.css";

class Alert extends React.Component {
    render() {
        if (!this.props.message) {
            return null;
        }

        return(
            <div id="alert" role="alert">
                {this.props.message}
            </div>
        );
    }
}

export default Alert;