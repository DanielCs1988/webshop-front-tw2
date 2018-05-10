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
            registerVisible: false,
            loginAndRegisterBtnVisible: true,
            loggedIn: null
        };
        this.cartBtnClicked = this.cartBtnClicked.bind(this);
        this.loginBtnClicked = this.loginBtnClicked.bind(this);
        this.registerBtnClicked = this.registerBtnClicked.bind(this);
        this.setBtns = this.setBtns.bind(this);
        this.setLoggedIn = this.setLoggedIn.bind(this);


    }

    componentDidMount(){
        if(localStorage.getItem("username") != null){
            this.setBtns();
            this.state.loggedIn = "Logged in as " + localStorage.getItem("username");
        }
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

    setBtns(){
        this.setState(state => ({'loginAndRegisterBtnVisible': !state.loginAndRegisterBtnVisible}));
    }

    setLoggedIn(username){
        this.setState(state => ({'loggedIn': username}));
    }

    renderBtns(){
        if(this.state.loginAndRegisterBtnVisible){
            return ([<button className="btn"  onClick={this.registerBtnClicked}>
                Register
            </button>,
                <button className="btn"  onClick={this.loginBtnClicked}>
                    Login
                </button>])
                ;
        }
    }

    render() {
        const productQuantity = this.props.orders.reduce((a,b) => a+b.quantity,0);
        return (
            [<nav className="navbar">
                <div className="navbar-brand" onClick={() => this.props.checkout('product-list')}>
                    Codeberg Webshop
                </div>

                <div>
                    <i>{this.state.loggedIn}</i>
                    {this.renderBtns()}
                    <button className="btn" onClick={this.cartBtnClicked}>
                        Cart
                        {productQuantity > 0 &&
                        <span id="product-counter">
                        {productQuantity}
                    </span>}
                    </button>
                </div>

            </nav>,
            <Login visible={this.state.loginVisible} setbtns={this.setBtns} hidelogin={this.loginBtnClicked} setLogIn={this.setLoggedIn}/>,
            <Register visible={this.state.registerVisible}/>,
            <ShoppingCart visible={this.state.cartVisible} orders={this.props.orders} checkout={this.props.checkout}
                          hideCart={this.cartBtnClicked} addProduct={this.props.addProduct} totalPrice={this.props.totalPrice}
                          removeProduct={this.props.removeProduct} dropProduct={this.props.dropProduct} />]
        )
    }

}

export default Navbar;