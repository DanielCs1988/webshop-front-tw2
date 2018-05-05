import React from 'react';


class SupplierMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            suppliersToRender: [],
            suppliersToRenderId: [],
            categoryId: null
        };
        this.getSupplier();
        this.state.categoryId = this.props.hoveringCategoryId;


    }

    getSupplier() {
        this.setState({'suppliersToRender': []});
        for (let supplier of this.props.supplierList) {
            for (let id of this.props.hoveringCategorySuppliersId){
                if (id === supplier.id){
                    this.state.suppliersToRender.push(supplier.name);
                    this.state.suppliersToRenderId.push(supplier.id);
                }
            }
        }
    }

    render(){
        const suppliers = this.state.suppliersToRender.map((item, i) => {
            return (
                <div className="menu-list-item" key={item.id} >
                    <h5 className="effect-shine" onClick={() => {
                        this.props.applyFilter(this.state.suppliersToRenderId[i], this.state.categoryId)
                    }}>
                        {item}
                    </h5>
                </div>
            );
        });

        return (
            <div onMouseEnter={() => {this.props.handleMouseHoverUl()}}
                 onMouseLeave={() => {this.props.handleMouseHoverUl()}} className="supplier-menu">
                <ul className="list-group">
                    {suppliers}
                </ul>
            </div>
        )
    }
}

export default SupplierMenu;