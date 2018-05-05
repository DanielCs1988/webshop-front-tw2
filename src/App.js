import React from 'react';
import Navbar from './components/Navbar';
import ProductCategoryMenu from './components/ProductCategoryMenu';
import ProductList from './components/ProductList';
import CheckoutPage from './components/CheckoutPage';
import Alert from './components/Alert';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'shoppingCart': [],
            'filters': {
                'supplier': null,
                'productCategory': null
            },
            'currentPage': 'product-list',
            'numberOfPurchases': 0
        };
        this.addProduct = this.addProduct.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
        this.applyFilter = this.applyFilter.bind(this);
        this.changePage = this.changePage.bind(this);
        this.sendOrder = this.sendOrder.bind(this);
        this.dropProduct = this.dropProduct.bind(this);
        this.getTotalPrice = this.getTotalPrice.bind(this);
    }

    addProduct(product) {
        const prevProduct = this.state.shoppingCart.find(item => item.id === product.id);
        if (prevProduct === undefined) {
            product.quantity = 1;
            product.order = this.state.numberOfPurchases;
            this.setState(prevState => ({
                'shoppingCart': [...prevState.shoppingCart, product],
                'numberOfPurchases': prevState.numberOfPurchases + 1
            }));
        } else {
            prevProduct.quantity += 1;
            const updatedCart = this.state.shoppingCart.filter(item => item.id !== prevProduct.id);
            this.setState({'shoppingCart': [...updatedCart, prevProduct]});
        }
    }

    removeProduct(product) {
        product.quantity --;
        const updatedCart = this.state.shoppingCart.filter(item => item.id !== product.id);
        this.setState({'shoppingCart': [...updatedCart, product]});
    }

    dropProduct(product) {
        const updatedCart = this.state.shoppingCart.filter(item => item.id !== product.id);
        this.setState({'shoppingCart': updatedCart});
    }

    applyFilter(supplier, productCategory) {
        this.setState({
            'filters': {
                'supplier' : supplier,
                'productCategory': productCategory
            }
        });
    }

    changePage(pageName) {
        this.setState({'currentPage': pageName});
    }

    sendOrder(userInfo) {
        let orderQuantityMap = {};
        for (let order of this.state.shoppingCart) {
            orderQuantityMap[order.id] = order.quantity;
        }
        const order = {
            'user': userInfo.user,
            'paymentId': userInfo.paymentId,
            'orders': orderQuantityMap
        };
        fetch('/webshop/checkout', {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => console.log('Order arrived!'));
        this.setState({
            'currentPage': 'product-list',
            'message': 'Your order has been processed!',
            'shoppingCart': []
        });
        setTimeout(() => this.setState({'message': ""}), 3000);
    }

    getTotalPrice() {
        const total = this.state.shoppingCart.reduce((a, b) => a + b.defaultPrice * b.quantity, 0);
        return Math.round(total) + ' USD';
    }

    render() {
        const pageToRender = this.state.currentPage === 'product-list' ?
            <ProductList filters={this.state.filters} addProduct={this.addProduct} /> :
            <CheckoutPage sendOrder={this.sendOrder}
                          totalPrice={this.getTotalPrice()} />;

        return (
            <div id="content-wrapper">
                <Navbar orders={this.state.shoppingCart} checkout={this.changePage} totalPrice={this.getTotalPrice()}
                         addProduct={this.addProduct} removeProduct={this.removeProduct} dropProduct={this.dropProduct}/>
                <Alert message={this.state.message}/>
                <ProductCategoryMenu applyFilter={this.applyFilter}/>
                {pageToRender}
            </div>
        )
    }

}

export default App;