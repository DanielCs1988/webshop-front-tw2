import React from 'react';
import UserInfo from './UserInfo';
import Shipping from "./Shipping";
import PaymentDetails from "./PaymentDetails";
import PaypalPayment from "./PaypalPayment";
import CreditCardPayment from "./CreditCardPayment";
import '../css/forms.css';


class CheckoutPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'currentPage': 'userInfo'
        };
        this.saveUserInfo = this.saveUserInfo.bind(this);
        this.saveShippingDetails = this.saveShippingDetails.bind(this);
        this.savePaymentInfo = this.savePaymentInfo.bind(this);
        this.choosePaymentType = this.choosePaymentType.bind(this);
    }


    saveUserInfo(userInfo) {
        this.setState({'currentPage': 'shipping', 'user': userInfo});
    }

    saveShippingDetails(shippingDetails) {
        const updatedUser = this.state.user;
        updatedUser.billingAddress = shippingDetails.billingAddress;
        updatedUser.shippingAddress = shippingDetails.shippingAddress;
        this.setState({'currentPage': 'paymentDetails', 'user': updatedUser});
    }

    savePaymentInfo(paymentInfo) {
        this.setState({'currentPage': 'success'});
        this.props.sendOrder({
            'user': this.state.user,
            'paymentId': paymentInfo
        })
    }

    choosePaymentType(choice) {
        this.setState({'currentPage': choice});
    }

    render() {
        let pageToRender;
        switch (this.state.currentPage) {
            case 'userInfo':
                pageToRender = <UserInfo saveInfo={this.saveUserInfo}/>;
                break;
            case 'shipping':
                pageToRender = <Shipping saveInfo={this.saveShippingDetails}/>;
                break;
            case 'paymentDetails':
                pageToRender = <PaymentDetails choose={this.choosePaymentType} />;
                break;
            case 'paypal':
                pageToRender = <PaypalPayment saveInfo={this.savePaymentInfo} totalPrice={this.props.totalPrice} />;
                break;
            case 'creditCard':
                pageToRender = <CreditCardPayment saveInfo={this.savePaymentInfo} totalPrice={this.props.totalPrice} />;
                break;
            default:
                pageToRender = null;
        }

        return (
            <div id="checkout-page">
                {pageToRender}
            </div>
        );
    }

}

export default CheckoutPage;