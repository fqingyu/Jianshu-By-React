import { fromJS } from 'immutable'
import { constants } from '../store'

const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: "社会热点",
            imgUrl: "//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
        },
        {
            id: 2,
            title: "手绘",
            imgUrl: "//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
        }
    ],
    articleList: [],
    bannerList: [
        {
            name: "Daily Challenge",
            imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-daily-e6f6601abc495573ad37f2532468186f.png"
        },
        {
            name: "Club Member",
            imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
        },
        {
            name: "Serialize",
            imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
        },
        {
            name: "Authority",
            imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
        }
    ],
    focused: false,
    writerList: [],
    page: 1,
    totalPage: 1,
    articlePage: 1,
    showScroll: false
});

const initialArticleList = (state, action) => {
    return state.set('articleList', action.data);
}

const mouseEnter = (state) => {
    return state.set('focused', true);
}

const mouseLeave = (state) => {
    return state.set('focused', false);
}

const initialAuthorList = (state, action) => {
    return state.merge({
        totalPage: action.totalPage,
        writerList: action.data
    });
}

const addArticles = (state, action) => {
    return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage
    })
}

const pageChange = (state, action) => {
    return state.set('page', action.page);
}

const toggleScrollShow = (state, action) => {
    return state.set('showScroll', action.show);
}

const reducer = (state=defaultState, action) => {
    switch (action.type) {
        case constants.INITIAL_ARTICLE_LIST:
            return initialArticleList(state, action);
        case constants.MOUSE_ENTER:
            return mouseEnter(state);
        case constants.MOUSE_LEAVE:
            return mouseLeave(state);
        case constants.INITIAL_AUTHOR_LIST:
            return initialAuthorList(state, action);
        case constants.ADD_ARTICLES:
            return addArticles(state, action);
        case constants.PAGE_CHANGE:
            return pageChange(state, action);
        case constants.TOGGLE_SCROLL_SHOW:
            return toggleScrollShow(state, action);
        default:
            return state;
    }
}

export default reducer;
