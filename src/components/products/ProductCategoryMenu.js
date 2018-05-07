import React from 'react';
import SupplierMenu from './SupplierMenu';


class ProductCategoryMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryList: [],
            supplierList: [],
            isHoveringUl: false,
            hoveringCategorySuppliersId: null,
            hoveringCategoryId: null,
        };
        this.handleMouseHoverUl = this.handleMouseHoverUl.bind(this);
    }

    componentDidMount() {
        this.getCategoryList();
        this.getSupplierList();

    }

    getCategoryList(){
        fetch('/webshop/product-category')
            .then(result => result.json())
            .then(jsonResult => this.setState({ categoryList: jsonResult }));
    }

    getSupplierList(){
        fetch('/webshop/supplier')
            .then(result => result.json())
            .then(jsonResult => this.setState({ supplierList: jsonResult }));
    }


    handleMouseHoverUl(suppliersId, categoryId) {
        this.setState(prevState => ({
            'isHoveringUl': !prevState.isHoveringUl,
            'hoveringCategoryId': categoryId
        }));
        if(suppliersId != null){
            // TODO
            this.setState({'hoveringCategorySuppliersId': suppliersId});
        }
    }

    renderSupplierMenu(){
        if(this.state.isHoveringUl){
            return <SupplierMenu hoveringCategoryId={this.state.hoveringCategoryId}
                                 applyFilter={this.props.applyFilter}
                                 handleMouseHoverUl={this.handleMouseHoverUl}
                                 hoveringCategorySuppliersId={this.state.hoveringCategorySuppliersId}
                                 supplierList={this.state.supplierList} />
        }
    }

    render() {
        const categories = this.state.categoryList.map(item => {
            return (
                <div className="list-item" key={item.id}>
                    <h5 onClick={() => {this.props.applyFilter(null, item.id)}}
                        onMouseEnter={() => {this.handleMouseHoverUl(item.suppliers, item.id)}}
                        onMouseLeave={() => {this.handleMouseHoverUl()}}>
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
            {this.renderSupplierMenu()}
            </div>
        );
    }

}

export default ProductCategoryMenu;