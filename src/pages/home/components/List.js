import React, { PureComponent, Fragment } from "react";
import { ListItem, ListInfo, AuthorMeta, LoadMore } from '../style';
import { actionCreators } from '../store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class List extends PureComponent {
    componentDidMount() {
        const { handleGetArticleInfo } = this.props;
        handleGetArticleInfo();
    }

    render() {
        const { list, getMoreList, page } = this.props;
        return (
            <Fragment>
                {
                    list.map((item, index) => {
                        const image = item.get("imgUrl");
                        return (
                            <Link key={index} to={'/detail/' + item.get('id')}>
                                <ListItem>
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
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(["home", "articleList"]),
    page: state.getIn(['home', 'articlePage'])
})

const mapDispatchToProps = (dispatch) => {
    return {
        handleGetArticleInfo() {
            dispatch(actionCreators.getArticleInfo());
        },

        getMoreList(page) {
            dispatch(actionCreators.getMoreList(page));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);