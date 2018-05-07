import React from 'react';
import ShoppingCart from './ShoppingCart';


class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cartVisible: false
        };
        this.cartBtnClicked = this.cartBtnClicked.bind(this);
    }

    cartBtnClicked() {
        this.setState(state => ({'cartVisible': !state.cartVisible}));
    }

    render() {
        const productQuantity = this.props.orders.reduce((a,b) => a+b.quantity,0);
        return (
            [<nav className="navbar">
                <div className="navbar-brand" onClick={() => this.props.checkout('product-list')}>
                    Codeberg Webshop
                </div>
                <button className="btn" onClick={this.cartBtnClicked}>
                    Cart
                    {productQuantity > 0 &&
                    <span id="product-counter">
                        {productQuantity}
                    </span>}
                </button>
            </nav>,
            <ShoppingCart visible={this.state.cartVisible} orders={this.props.orders} checkout={this.props.checkout}
                          hideCart={this.cartBtnClicked} addProduct={this.props.addProduct} totalPrice={this.props.totalPrice}
                          removeProduct={this.props.removeProduct} dropProduct={this.props.dropProduct} />]
        )
    }

}

export default Navbar;