import React from 'react';

class CheckoutButton extends React.Component {

    render() {
        return (
            <button className="btn btn-block btn-success" onClick={() => {
                this.props.hideCart();
                this.props.checkout('payment');
            }}>Checkout</button>
        )
    }

}

export default CheckoutButton;