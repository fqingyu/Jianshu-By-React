import React, { Component, Fragment } from "react";
import { ListItem, ListInfo, AuthorMeta } from '../style'
import { actionCreators } from '../store'
import { connect } from 'react-redux'


class List extends Component {
    componentDidMount() {
        const { handleGetArticleInfo } = this.props;
        handleGetArticleInfo();
    }

    render() {
        const { list } = this.props;
        return (
            <Fragment>
                {
                    list.map((item) => {
                        const image = item.get("imgUrl");
                        return (
                            <ListItem key={item.get("id")}>
                                {image ? <img className="pic" alt="120" src={item.get("imgUrl")} /> : null}
                                <ListInfo className={image ? "":"no-image"}>
                                    <h3 className="title">{item.get("title")}</h3>
                                    <p className="desc">{item.get("desc")}</p>
                                    <AuthorMeta>
                                        <div>{item.get("author")}</div>
                                        <div>
                                            <span className="iconfont">&#xe770;</span>
                                            {item.get("comments")}
                                        </div>
                                        <div>
                                            <span className="iconfont">&#xe738;</span>
                                            {item.get("likes")}
                                        </div>
                                    </AuthorMeta>
                                </ListInfo>
                            </ListItem>
                        )
                    })
                }
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(["home", "articleList"])
})

const mapDispatchToProps = (dispatch) => {
    return {
        handleGetArticleInfo() {
            dispatch(actionCreators.getArticleInfo());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);