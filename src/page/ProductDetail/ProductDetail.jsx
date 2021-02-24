import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductDetail extends Component {

    render() {
        return (
            <div className="product-detail-container">
                {this.props.detail.id}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        detail: state.products.detail
    }
}

export default connect(mapStateToProps, null)(ProductDetail);