import React from 'react';
import ShoppingCart from './ShoppingCart';
import Login from './Login';
import Register from './Register';


class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cartVisible: false,
            loginVisible: false,
            registerVisible: false
        };
        this.cartBtnClicked = this.cartBtnClicked.bind(this);
        this.loginBtnClicked = this.loginBtnClicked.bind(this);
        this.registerBtnClicked = this.registerBtnClicked.bind(this);
    }

    cartBtnClicked() {
        this.setState(state => ({'cartVisible': !state.cartVisible}));
    }

    loginBtnClicked() {
        this.setState(state => ({'loginVisible': !state.loginVisible}));
    }

    registerBtnClicked() {
        this.setState(state => ({'registerVisible': !state.registerVisible}));
    }

    render() {
        const productQuantity = this.props.orders.reduce((a,b) => a+b.quantity,0);
        return (
            [<nav className="navbar">
                <div className="navbar-brand" onClick={() => this.props.checkout('product-list')}>
                    Codeberg Webshop
                </div>

                <div>
                    <button className="btn"  onClick={this.registerBtnClicked}>
                        Register
                    </button>
                    <button className="btn"  onClick={this.loginBtnClicked}>
                        Login
                    </button>
                    <button className="btn" onClick={this.cartBtnClicked}>
                        Cart
                        {productQuantity > 0 &&
                        <span id="product-counter">
                        {productQuantity}
                    </span>}
                    </button>
                </div>

            </nav>,
            <Login visible={this.state.loginVisible}/>,
            <Register visible={this.state.registerVisible}/>,
            <ShoppingCart visible={this.state.cartVisible} orders={this.props.orders} checkout={this.props.checkout}
                          hideCart={this.cartBtnClicked} addProduct={this.props.addProduct} totalPrice={this.props.totalPrice}
                          removeProduct={this.props.removeProduct} dropProduct={this.props.dropProduct} />]
        )
    }

}

export default Navbar;