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
    focused: false
});

const reducer = (state=defaultState, action) => {
    switch (action.type) {
        case constants.INITIAL_ARTICLE_LIST:
            return state.set('articleList', action.data);
        case constants.MOUSE_ENTER:
            return state.set('focused', true);
        case constants.MOUSE_LEAVE:
            return state.set('focused', false);
        default:
            return state;
    }
}

export default reducer;
