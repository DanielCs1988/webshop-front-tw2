import React from 'react';
import '../../css/creditcard.css';
import Paypal from '../../img/paypal-784404_960_720.png'


class PaypalPayment extends React.Component {

    render() {
        return (
            <div className="panel creditCardForm">
                <div className="heading">
                    <h1>Confirm Purchase</h1>
                    <h3 className="my-3">Total price: {this.props.totalPrice}</h3>
                </div>
                <div>
                    <img src={Paypal} id="paypal" alt="paypal" />
                </div>
                <div className="payment">
                    <div className="form-group owner">
                        <label htmlFor="owner">Email</label>
                        <input type="text" className="form-control" id="owner" />
                    </div>
                    <div className="form-group CVV">
                        <label htmlFor="cvv">PayPal password</label>
                        <input type="text" className="form-control" id="cvv" />
                    </div>
                    <div className="form-group" id="pay-now">
                        <button type="button" className="btn btn-default" id="confirm-purchase"
                                onClick={() => this.props.saveInfo(Math.floor(Math.random() * 900000) + 100000)}>
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}

export default PaypalPayment;