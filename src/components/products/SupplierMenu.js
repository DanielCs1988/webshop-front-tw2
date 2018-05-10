import React from 'react';


class SupplierMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            suppliers: []
        };
    }

    componentDidMount(){
        fetch('/webshop/supplier')
            .then(result => result.json())
            .then(jsonResult => this.setState({ suppliers: jsonResult }));
    }

    render(){
        const suppliers = this.state.suppliers.map(item => {
            return (
                <div className="menu-list-item" key={item.id} >
                    <h5 className="effect-shine" onClick={() => this.props.applySupplierFilter(item.id)}>
                        {item.name}
                    </h5>
                </div>
            );
        });

        return (
            <div className="supplier-menu">
                <ul className="list-group">
                    {suppliers}
                </ul>
            </div>
        )
    }
}

export default SupplierMenu;