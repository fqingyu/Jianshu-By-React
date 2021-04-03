import React, { PureComponent} from "react";
import { WriterWrapper, WriterTitle, WriterTitleSwitch, WriterSection, WriterItem } from '../style'
import { connect } from "react-redux"
import {actionCreators} from "../store";

class Writer extends PureComponent {

    componentDidMount() {
        const { handleInitialAuthorInfo } = this.props;
        handleInitialAuthorInfo();
    }

    getAuthorListArea = () => {
        const { page, writerList } = this.props;
        const newList = writerList.toJS();
        const list = [];
        for (let i = (page - 1) * 5; i < page * 5; i++) {
            if (newList[i]) {
                list.push(
                    <WriterItem key={newList[i]['id']}>
                        <img className="avatar" alt="Writer Avatar" src={newList[i]['imgUrl']} />
                        <div className="follow">
                            <span className="iconfont">&#xe867;</span>
                            关注
                        </div>
                        <div className="writer-name">{newList[i]['name']}</div>
                        <p>写了{newList[i]['count']}k字 · {newList[i]['likes']}喜欢</p>
                    </WriterItem>
                )
            }
        }
        return list;
    }

    render() {
        const {  page, totalPage, handlePageChange } = this.props;
        return (
            <WriterWrapper>
                <WriterTitle>
                    <span>
                        推荐作者
                    </span>
                    <WriterTitleSwitch onClick={() => handlePageChange(page, totalPage, this.spinIcon)}>
                        <span ref={(spin) => {this.spinIcon = spin}} className="iconfont spin">&#xe606;</span>
                        换一批
                    </WriterTitleSwitch>
                    <WriterSection>
                        {
                            this.getAuthorListArea()
                        }
                    </WriterSection>

                </WriterTitle>
            </WriterWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        writerList: state.getIn(['home', 'writerList']),
        page: state.getIn(['home', 'page']),
        totalPage: state.getIn(['home', 'totalPage'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInitialAuthorInfo() {
            dispatch(actionCreators.getAuthorInfo())
        },

        handlePageChange(page, totalPage, spin) {
            const originAngle = +spin.style.transform.replace(/[^0-9]/ig, '');
            spin.style.transform = `rotate(${originAngle + 360}deg)`
            if (page < totalPage) {
                page += 1
            }
            else {
                page = 1
            }
            dispatch(actionCreators.pageChange(page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Writer);