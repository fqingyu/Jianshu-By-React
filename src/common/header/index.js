import React, { Component } from 'react'
import { connect } from 'react-redux';
import  { CSSTransition } from "react-transition-group";
import  { actionCreators }  from './store'
import { actionCreators as loginActionCreators } from "../../pages/login/store"
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
import { Link } from "react-router-dom";

class Header extends Component {
    getListArea = () => {
        const { focused, list, page, totalPage, handleMouseEnter, handleMouseLeave, mouseIn, handleChangePage } = this.props;
        const newList = list.toJS();
        const pageList = [];
        for (let i = (page - 1) * 10; i < page * 10; i++) {
            if (newList[i]) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe606;</span>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        { pageList }
                    </SearchInfoList>
                </SearchInfo>
            )
        }
        else {
            return null
        }
    }

    render() {
        const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
        return (
            <HeaderWrapper>
                <HeaderCenter>
                    <Link to='/'>
                        <Logo/>
                    </Link>
                    <Nav>
                        <NavItem className='left active'>首页</NavItem>
                        <NavItem className='left'>下载App</NavItem>
                        {
                            login ?
                                <NavItem onClick={logout} className='right'>退出</NavItem> :
                                <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
                        }
                        <NavItem className='right'>
                            <span className="iconfont">&#xe636;</span>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in={focused}
                                timeout={200}
                                classNames="slide"
                            >
                                <NavSearch
                                    className = {focused ? 'focused': ''}
                                    onFocus = {() => handleInputFocus(list)}
                                    onBlur = {handleInputBlur}
                                />
                            </CSSTransition>
                            <span className = {this.props.focused ? 'focused iconfont zoom': 'iconfont zoom'}>&#xe687;</span>
                            {this.getListArea()}
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Link to='/write'>
                            <Button className='writing'><span className="iconfont">&#xe615;</span>写文章</Button>
                        </Link>
                        <Button className='reg'>注册</Button>
                    </Addition>
                </HeaderCenter>
            </HeaderWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },

        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },

        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },

        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },

        handleChangePage(page, totalPage, spin) {
            const originAngle = +spin.style.transform.replace(/[^0-9]/ig, '');
            spin.style.transform = `rotate(${originAngle + 360}deg)`
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page+1));
            }
            else {
                dispatch(actionCreators.changePage(1))
            }
        },

        logout() {
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Header);

