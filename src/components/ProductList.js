import React from 'react';
import Product from './Product';


class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {itemList: []};
    }

    componentDidMount() {
        this.getItemList(this.props.filters);
    }

    componentWillReceiveProps(nextProps) {
        this.getItemList(nextProps.filters);
    }

    getItemList(filters){
        let callRoute = '/webshop/product-list';

        if (filters.productCategory != null && filters.supplier != null){
            callRoute = '/webshop/product-list?supplier=' + filters.supplier + "&product-category=" + filters.productCategory;
        } else if (filters.supplier != null){
            callRoute = '/webshop/product-list?supplier=' + filters.supplier;
        } else if (filters.productCategory != null){
            callRoute = '/webshop/product-list?product-category=' + filters.productCategory;
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