import React from 'react';
import creditCard from '../../img/credit_card.png';
import paypal from '../../img/paypal.png';

class PaymentDetails extends React.Component {

    render() {
        return (
            <div id="payment-types">
                <img src={creditCard} className="img-fluid" alt="Pay via credit card"
                     onClick={() => this.props.choose('creditCard')}/>
                <img src={paypal} className="img-fluid" alt="Pay via paypal"
                     onClick={() => this.props.choose('paypal')}/>
            </div>
        )
    }

}

export default PaymentDetails;