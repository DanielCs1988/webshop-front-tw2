import React from 'react';
import '../../css/product.css';


class Product extends React.Component {

    render() {
        const imagePath = require(`../../img/${this.props.product.imageName}`);
        // TODO: page dies if image cannot be found
        return (
            <div className="product">
                <img className="product-image" src={imagePath} alt={imagePath} />
                <div className="product-title-wrapper">
                    <h5 className="product-title">{this.props.product.name}</h5>
                </div>
                <p className="product-description">{this.props.product.description}</p>
                <button className="btn product-buy-btn" onClick={() => this.props.addProduct(this.props.product)}>
                    {this.props.product.defaultPrice} {this.props.product.defaultCurrency}
                </button>
            </div>
        )
    }

}

export default Product;