import { constants } from '../store';
import { fromJS} from "immutable";

const defaultState = fromJS({
    title: '适合90%团队的简易需求文档（PRD）模版',
    content: '<img alt="desc" src="//upload-images.jianshu.io/upload_images/3095874-06edb5465e2c818e.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp" /><p>这世上有许多纯属偶然的事，譬如我与《两地书》的遇见。它像一粒飞来的石子，令我心中起了涟漪，在静夜中，这涟漪又无声地一圈圈扩散——化作思想的火花，化作旷野中的玫瑰，化作穿透黑暗的微光……</p><p>这世上有许多纯属偶然的事，譬如我与《两地书》的遇见。它像一粒飞来的石子，令我心中起了涟漪，在静夜中，这涟漪又无声地一圈圈扩散——化作思想的火花，化作旷野中的玫瑰，化作穿透黑暗的微光……</p><p>这世上有许多纯属偶然的事，譬如我与《两地书》的遇见。它像一粒飞来的石子，令我心中起了涟漪，在静夜中，这涟漪又无声地一圈圈扩散——化作思想的火花，化作旷野中的玫瑰，化作穿透黑暗的微光……</p><p>这世上有许多纯属偶然的事，譬如我与《两地书》的遇见。它像一粒飞来的石子，令我心中起了涟漪，在静夜中，这涟漪又无声地一圈圈扩散——化作思想的火花，化作旷野中的玫瑰，化作穿透黑暗的微光……</p>'
})

const changeDetail = (state, action) => {
    return state.merge({
        title: action.title,
        content: action.content
    })
}

const reducer = (state=defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_DETAIL:
            return changeDetail(state, action);
        default:
            return state;
    }
}

export default reducer;