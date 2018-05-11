import React from 'react';
import Navbar from './ordering/Navbar';
import ProductCategoryMenu from './products/ProductCategoryMenu';
import ProductList from './products/ProductList';
import CheckoutPage from './checkout/CheckoutPage';
import Alert from './checkout/Alert';
import SupplierMenu from "./products/SupplierMenu";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'currentPage': 'product-list',
            'categoryFilter': null,
            'supplierFilter': null,
            'numberOfPurchases': 0,
            'shoppingCart': []
        };
        this.addProduct = this.addProduct.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
        this.changePage = this.changePage.bind(this);
        this.sendOrder = this.sendOrder.bind(this);
        this.dropProduct = this.dropProduct.bind(this);
        this.getTotalPrice = this.getTotalPrice.bind(this);
        this.applyCategoryFilter = this.applyCategoryFilter.bind(this);
        this.applySupplierFilter = this.applySupplierFilter.bind(this);

    }

    addProduct(product) {
        const prevProduct = this.state.shoppingCart.find(item => item.id === product.id);
        if (prevProduct === undefined) {
            product.quantity = 1;
            product.order = this.state.numberOfPurchases;
            this.setState(prevState => ({
                'numberOfPurchases': prevState.numberOfPurchases + 1,
                'shoppingCart': [...prevState.shoppingCart, product]
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

    applyCategoryFilter(productCategory) {
        this.setState({"categoryFilter": productCategory});
    }

    applySupplierFilter(supplier) {
        this.setState({"supplierFilter": supplier});
    }

    changePage(pageName) {
        this.setState({'currentPage': pageName});
    }

    sendOrder(userInfo) {
        let orderQuantityMap = {};
        for (let order of this.state.shoppingCart) {
            orderQuantityMap[order.id] = order.quantity;
        }
        const shoppingCart = {
            'orders': orderQuantityMap,
            'paymentId': userInfo.paymentId,
            'user': userInfo.user
        };
        fetch('/webshop/checkout', {
            body: JSON.stringify(shoppingCart),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
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
            <ProductList categoryFilter={this.state.categoryFilter}
                         supplierFilter={this.state.supplierFilter}
                         addProduct={this.addProduct} /> :
            <CheckoutPage sendOrder={this.sendOrder}
                          totalPrice={this.getTotalPrice()} />;

        return (
            <div id="content-wrapper">
                <Navbar orders={this.state.shoppingCart} checkout={this.changePage} totalPrice={this.getTotalPrice()}
                         addProduct={this.addProduct} removeProduct={this.removeProduct} dropProduct={this.dropProduct}/>
                <Alert message={this.state.message}/>
                <ProductCategoryMenu applyCategoryFilter={this.applyCategoryFilter}
                                     applySupplierFilter={this.applySupplierFilter} />
                {pageToRender}
            </div>
        )
    }

}

export default App;