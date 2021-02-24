import React, { Component } from 'react';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import LaptopIcon from '@material-ui/icons/Laptop';
import TabletAndroidIcon from '@material-ui/icons/TabletAndroid';
import HeadsetIcon from '@material-ui/icons/Headset';
import WatchIcon from '@material-ui/icons/Watch';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import './navbar.scss';
class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            isHover: false
        }
        this.toggleHover = this.toggleHover.bind(this);
    }

    toggleHover() {
        this.setState(prevState => ({isHover: !prevState.isHover}))
    }

    render() {
        return (
            <div className="nav-container">
                <div className="nav-item">
                    <SmartphoneIcon />
                    <span>Điện thoại</span>
                </div>
                <div className="nav-item">
                    <LaptopIcon />
                    <span>Laptop</span>
                </div>
                <div className="nav-item">
                    <TabletAndroidIcon />
                    <span>Tablet</span>
                </div>
                <div className="nav-item" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                    <HeadsetIcon />
                    <span>Phụ kiện</span>
                    { this.state.isHover ? 
                        <ArrowDropDownIcon className="header-dropdown-icon" fontSize="large"/>
                        :
                        <ArrowDropUpIcon className="header-dropdown-icon" fontSize="large"/>
                    }
                </div>
                <div className="nav-item">
                    <WatchIcon />
                    <span>Đồng hồ</span>
                </div>
            </div>
        );
    }
}

export default Navbar;