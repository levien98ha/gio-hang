import React, { Component } from "react";
import { connect } from 'react-redux';
import ProductCard from "../../components/productCard/productCard";
import './ListProduct.scss';

class ListProduct extends Component {

    getListProduct = () => {
        return this.props.listProduct.map((item, index) => {
            return <ProductCard product={item} key={index} id={item.id}/>
        })
    }

    render() {
        return(
            <div className="product-container">
                <div className="list-product">
                    {this.getListProduct()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listProduct: state.products.product
    }
}

export default connect(mapStateToProps, null)(ListProduct);