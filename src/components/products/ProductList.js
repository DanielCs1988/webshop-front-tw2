import React from 'react';
import Product from './Product';


class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {itemList: []};
    }

    componentDidMount() {
        this.getItemList(this.props.categoryFilter, this.props.supplierFilter);
    }

    componentWillReceiveProps(nextProps) {
        this.getItemList(nextProps.categoryFilter, nextProps.supplierFilter);
    }

    getItemList(categoryFilter, supplierFilter){
        let callRoute = '/webshop/product-list';

        if (categoryFilter != null && supplierFilter != null){
            callRoute = '/webshop/product-list?supplier=' + supplierFilter + "&product-category=" + categoryFilter;
        } else if (supplierFilter != null){
            callRoute = '/webshop/product-list?supplier=' + supplierFilter;
        } else if (categoryFilter != null){
            callRoute = '/webshop/product-list?product-category=' + categoryFilter;
        }
        fetch(callRoute)
            .then(result => result.json())
            .then(jsonResult => this.setState({ itemList: jsonResult }));

    }

    render() {
        const products = this.state.itemList.map(item => {
            return <Product key={item.id} product={item} addProduct={this.props.addProduct}/>;
        });
        return (
            <div id="product-list">
                {products}
            </div>
        )
    }

}

export default ProductList;