import React from 'react';
import Order from './Order';
import CheckoutButton from './CheckoutButton';
import '../css/shopping_cart.css';


class ShoppingCart extends React.Component {

    render() {
        if (!this.props.visible) return null;

        const orders = this.props.orders
            .sort((a, b) => a.order - b.order)
            .map(order => {
            return <Order order={order} addProduct={this.props.addProduct} removeProduct={this.props.removeProduct}
                          dropProduct={this.props.dropProduct}/>
        });

        return (
            <div id="shopping-cart">
                <div className="cart-header">
                    <h2>Cart</h2>
                    <div id="sumprice">
                        Total:<br/>
                        {this.props.totalPrice}
                    </div>
                </div>
                <div id="order-list">
                    {orders}
                </div>
                {this.props.orders.length > 0 && <CheckoutButton hideCart={this.props.hideCart}
                                                                 checkout={this.props.checkout}/>}
            </div>
        )
    }

}

export default ShoppingCart;