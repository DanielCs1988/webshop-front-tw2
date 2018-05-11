import React from 'react';
import SupplierMenu from "./SupplierMenu";


class ProductCategoryMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: []
        };
    }

    componentDidMount(){
        fetch('/webshop/product-category')
            .then(result => result.json())
            .then(jsonResult => this.setState({ categories: jsonResult }));
    }

    render() {
        const categories = this.state.categories.map(item => {
            return (
                <div className="list-item" key={item.id}>
                    <h5 onClick={() => {this.props.applyCategoryFilter(item.id)}}>
                        <a className="arrow arrow-right" title="Next" href="javascript:void(0)" />
                        {item.name}
                    </h5>
                </div>
            );
        });

        return (
            <div className="main-menu">
                <ul className="list-group">
                    {categories}
                </ul>
                <SupplierMenu applySupplierFilter={this.props.applySupplierFilter} className="supplier-menu" />
            </div>
        );
    }

}

export default ProductCategoryMenu;