import React, { Component } from 'react'
import { connect } from 'react-redux';
import  { CSSTransition } from "react-transition-group";
import  { actionCreators }  from './store'
import {
    HeaderWrapper,
    HeaderCenter,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoList,
    SearchInfoSwitch,
    SearchInfoItem,
    Addition,
    Button,
    SearchWrapper
} from "./style";

class Header extends Component {
    getListArea = (show) => {
        if (show) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                    </SearchInfoList>
                </SearchInfo>
            )
        }
        else {
            return null
        }
    }

    render() {
        return (
            <HeaderWrapper>
                <HeaderCenter>
                    <Logo href='/' />
                    <Nav>
                        <NavItem className='left active'>首页</NavItem>
                        <NavItem className='left'>下载App</NavItem>
                        <NavItem className='right'>登录</NavItem>
                        <NavItem className='right'>
                            <span className="iconfont">&#xe636;</span>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in={this.props.focused}
                                timeout={200}
                                classNames="slide"
                            >
                                <NavSearch
                                    className = {this.props.focused ? 'focused': ''}
                                    onFocus = {this.props.handleInputFocus}
                                    onBlur = {this.props.handleInputBlur}
                                />
                            </CSSTransition>
                            <span className = {this.props.focused ? 'focused iconfont': 'iconfont'}>&#xe687;</span>
                            {this.getListArea(this.props.focused)}
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Button className='writing'><span className="iconfont">&#xe615;</span>写文章</Button>
                        <Button className='reg'>注册</Button>
                    </Addition>
                </HeaderCenter>
            </HeaderWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },

        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Header);

