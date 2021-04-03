import React, { PureComponent } from "react";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style"
import Topic from "./components/Topic";
import List from "./components/List";
import Recommendation from "./components/Recommendation";
import QRCode from "./components/QRCode";
import Writer from "./components/Writer";
import { connect } from 'react-redux';
import { actionCreators } from './store'

class Home extends PureComponent {

    // shouldComponentUpdate

    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    render() {
        const { showScroll } = this.props;
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMorgr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540"/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommendation />
                    <QRCode />
                    <Writer />
                </HomeRight>
                { showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.bindEvents();
    }

    componentWillUnmount() {
        const { changeScrollTopShow } = this.props;
        window.removeEventListener('scroll', changeScrollTopShow)
    }

    bindEvents() {
        const { changeScrollTopShow } = this.props;
        window.addEventListener('scroll', changeScrollTopShow)
    }
}

const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) => {
    return {
        changeScrollTopShow() {
            if (document.documentElement.scrollTop > 100) {
                dispatch(actionCreators.toggleTopShow(true))
            }
            else {
                dispatch(actionCreators.toggleTopShow(false))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);