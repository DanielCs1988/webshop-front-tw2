import React from 'react';
import '../../css/creditcard.css';
import Visa from '../../img/visa.jpg';
import Amex from '../../img/amex.jpg';
import Mastercard from '../../img/mastercard.jpg';


class CreditCardPayment extends React.Component {

    render() {
        return (
            <div className="panel creditCardForm">
                <div className="heading">
                    <h1>Confirm Purchase</h1>
                    <h3 className="my-3">Total price: {this.props.totalPrice}</h3>
                </div>
                <div className="payment">
                    <div className="form-group owner">
                        <label htmlFor="owner">Owner</label>
                        <input type="text" className="form-control" id="owner" />
                    </div>
                    <div className="form-group CVV">
                        <label htmlFor="cvv">CVV</label>
                        <input type="text" className="form-control" id="cvv" />
                    </div>
                    <div className="form-group" id="card-number-field">
                        <label htmlFor="cardNumber">Card Number</label>
                        <input type="text" className="form-control" id="cardNumber" />
                    </div>
                    <div className="form-group" id="expiration-date">
                        <label>Expiration Date</label>
                        <select>
                            <option value="01">January</option>
                            <option value="02">February</option>
                            <option value="03">March</option>
                            <option value="04">April</option>
                            <option value="05">May</option>
                            <option value="06">June</option>
                            <option value="07">July</option>
                            <option value="08">August</option>
                            <option value="09">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                        <select>
                            <option value="16"> 2018</option>
                            <option value="17"> 2019</option>
                            <option value="18"> 2020</option>
                            <option value="19"> 2021</option>
                            <option value="20"> 2022</option>
                            <option value="21"> 2023</option>
                        </select>
                    </div>
                    <div className="form-group" id="credit_cards">
                        <img src={Visa} id="visa" alt="visa" />
                            <img src={Mastercard} id="mastercard" alt="mastercard" />
                                <img src={Amex} id="amex" alt="amex" />
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

export default CreditCardPayment;