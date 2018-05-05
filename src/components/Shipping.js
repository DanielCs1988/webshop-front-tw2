import React from 'react';

class Shipping extends React.Component {

    constructor(props) {
        super(props);
        this.submitShippingDetails = this.submitShippingDetails.bind(this);
    }

    submitShippingDetails() {
        this.props.saveInfo({
            'billingAddress': {
                'zipcode': this.zip.value,
                'country': this.country.value,
                'city': this.city.value,
                'address': this.address.value
            },
            'shippingAddress': {
                'zipcode': this.billZip.value,
                'country': this.billCountry.value,
                'city': this.billCity.value,
                'address': this.billAddress.value
            }
        })
    }

    render() {
        return (
            <div className="panel">
                <h2 className="text-center">Shipping Address</h2>
                <div className="form-group my-3">
                    <label htmlFor="zip">Zip Code</label>
                    <input type="text" id="zip" className="form-control" ref={(zip) => this.zip = zip}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="country">Country</label>
                    <input type="text" id="country" className="form-control" ref={(country) => this.country = country}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" className="form-control" ref={(city) => this.city = city}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" className="form-control" ref={(address) => this.address = address}/>
                </div>

                <h2 className="text-center">Billing Address</h2>
                <div className="form-group my-3">
                    <label htmlFor="billZip">Zip Code</label>
                    <input type="text" id="billZip" className="form-control" ref={(billZip) => this.billZip= billZip}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="country">Country</label>
                    <input type="billCountry" id="billCountry" className="form-control" ref={(billCountry) => this.billCountry = billCountry}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="billCity">City</label>
                    <input type="text" id="billCity" className="form-control" ref={(billCity) => this.billCity = billCity}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="billAddress">Address</label>
                    <input type="text" id="billAddress" className="form-control" ref={(billAddress) => this.billAddress = billAddress}/>
                </div>
                <button className="btn btn-block btn-success" type="button" onClick={this.submitShippingDetails}>
                    Accept
                </button>
            </div>
        )
    }

}

export default Shipping;