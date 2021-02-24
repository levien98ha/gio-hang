import React, { Component } from 'react';
import NavigationIcon from '@material-ui/icons/Navigation';
import './backToTop.scss';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import { withStyles, Theme, makeStyles } from '@material-ui/core/styles';

const BackToTopTooltip = withStyles((theme) => ({
    tooltip: {
      boxShadow: theme.shadows[1],
      fontSize: 14,
    },
  }))(Tooltip);

class BackToTop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }
    }

    componentDidMount() {
        let scrollComponent = this;
        document.addEventListener("scroll", function(e) {
            scrollComponent.toggleVisibility();
        })
    }

    toggleVisibility() {
        if (window.pageYOffset > 300) {
          this.setState({
            isVisible: true
          });
        } else {
          this.setState({
            isVisible: false
          });
        }
      }

    backToTop = () => {
        const body = document.querySelector('#root');

        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
    }

    render() {
        const { isVisible } = this.state;
        return (
            <>
            {isVisible && 
                <BackToTopTooltip title="Back To Top" placement="top" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
                    <div className="back-to-top-container" onClick={() => this.backToTop()}>
                        <div className="back-to-top-icon">
                            <NavigationIcon fontSize="small"/>
                        </div>
                    </div>
                </BackToTopTooltip>
            }
            </>
        );
    }
}

export default BackToTop;