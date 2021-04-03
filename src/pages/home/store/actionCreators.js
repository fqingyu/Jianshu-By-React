import { fromJS } from "immutable";
import axios from "axios";
import * as constants from "./constants";

const initialArticleList = (data) => ({
    type: constants.INITIAL_ARTICLE_LIST,
    data: fromJS(data)
});

export const getArticleInfo = () => {
    return (dispatch) => {
        axios.get('/api/articleInfo.json').then((res) => {
            const data = res.data.data;
            dispatch(initialArticleList(data))
        }).catch((e) => {
            console.log(e)
        })
    }
};

export const addMoreArticles = (list, nextPage) => ({
    type: constants.ADD_ARTICLES,
    list: fromJS(list),
    nextPage
});

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/moreArticle.json?page=' + page).then((res) => {
            const data = res.data.data;
            dispatch(addMoreArticles(data, page + 1))
        }).catch((e) => {
            console.log(e)
        })
    }
}

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
});

const initialAuthorList = (data) => ({
    type: constants.INITIAL_AUTHOR_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 5)
})

export const getAuthorInfo = () => {
    return (dispatch) => {
        axios.get('/api/authorInfo.json').then((res) => {
            const data = res.data;
            dispatch(initialAuthorList(data))
        }).catch((e) => {
            console.log(e)
        })
    }
}

export const pageChange = (page) => ({
    type: constants.PAGE_CHANGE,
    page
})

export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_SHOW,
    show
})