import React, { Component } from "react";
import Navbar from "../navbar/navbar";
import "./header.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { withStyles, createStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const StyledBadge = withStyles((theme) =>
  createStyles({
    badge: {
      right: -3,
      top: 5,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  })
)(Badge);
class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-top">
          <div className="header-top-container">
            <div className="header-logo-container"></div>
            <div className="header-menu-container">
              <div className="search-field">
                <input
                  className="header-field-search"
                  placeholder="Search..."
                ></input>
                <svg
                  className="MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </svg>
              </div>
              <div className="header-shopping-cart">
                  <StyledBadge badgeContent={this.props.cart.length} color= "secondary">
                    <ShoppingCartIcon />
                  </StyledBadge>
                <span className={"header-cart-title " + (this.props.cart.length > 0 ? 'header-margin-left-20px' : 'header-margin-left-5px')}>Giỏ hàng</span>
              </div>
              <div className="header-question-container">
                <span>Hỏi đáp</span>
              </div>
              <div className="header-blog-container">
                <span>Blog Công nghệ</span>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <Navbar />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        cart: state.products.cart
    }
}

export default connect(mapStateToProps, null)(Header);
