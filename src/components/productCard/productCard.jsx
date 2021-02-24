import React, { Component } from "react";
import { connect } from "react-redux";
import './productCard.scss';
import Rating from "@material-ui/lab/Rating";
import { Link } from 'react-router-dom';

class ProductCard extends Component {

    currencyFormat = (num) => {
        return num ? parseFloat(num).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' VND' : '0 VND';
     }

    render() {
        let {product} = this.props;
        return(
                <Link to={'products/' + product.id} className="product-card" style={{ textDecoration: 'none' }}>
                    <div className="product-sale">
                        <span className="product-sale-detail">Trả góp 0%</span>
                    </div>
                    <div className="product-img">
                        <img src={product.image[0]} alt={product.product_name}/>
                    </div>
                    <h3 className="product-name">{product.product_name}</h3>
                    <div className="product-price">
                        <strong>{this.currencyFormat(product.price)}</strong>
                    </div>
                    <div className="product-rate">
                        <Rating name="half-rating-read" size="small" defaultValue={product.rate} precision={0.1} readOnly />
                    </div>
                </Link>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        viewDetail: item => {
            dispatch({
                type: "VIEW_DETAIL",
                payload: item
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(ProductCard);