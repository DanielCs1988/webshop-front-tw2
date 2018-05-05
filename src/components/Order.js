import React from 'react';
import '../css/order.css';


class Order extends React.Component {

    render() {
        const currency = this.props.order.defaultCurrency;
        return (
            [<div className="order">
                <div className="dropOrder" onClick={() => this.props.dropProduct(this.props.order)}>X</div>
                <div className="orderName">{this.props.order.name}</div>
                {this.props.order.quantity > 1 && <span className="orderQuantity">{this.props.order.quantity} pc</span>}
                <div className="orderPrice">
                    {this.props.order.defaultPrice} {currency} / {this.props.order.defaultPrice * this.props.order.quantity} {currency}
                </div>
                <button className="incQuantity" onClick={() => this.props.addProduct(this.props.order)}>+</button>
                {this.props.order.quantity > 1 && <button className="decQuantity"
                                                          onClick={() => this.props.removeProduct(this.props.order)}>-</button>}
            </div>,
            <div className="separator"/>]

        )
    }

}

export default Order;