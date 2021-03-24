import React, { Component } from "react";
import { QRItem } from '../style'
import { connect } from 'react-redux'
import {actionCreators} from "../store";

class QRCode extends Component {
    getLargeQR = () => {
        const { focused } = this.props;
        if (focused) {
            return (
                <div className="popup">
                    <img width="160" alt="Download index side qrcode" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png" />
                </div>
            )
        }
        else {
            return null
        }
    }
    render() {
        const { handleMouseEnter, handleMouseLeave } = this.props;
        return (
            <QRItem
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img className="qr-code" alt="Download index side qrcode" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png" />
                <div className="info">
                    <div className="title">下载简书手机App</div>
                    <div className="description">随时随地发现和创作内容</div>
                </div>
                {this.getLargeQR()}
            </QRItem>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['home', 'focused'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },

        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QRCode);