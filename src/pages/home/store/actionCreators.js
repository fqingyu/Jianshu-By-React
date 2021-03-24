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
            const data = res.data;
            dispatch(initialArticleList(data.data))
        }).catch((e) => {
            console.log(e)
        })
    }
};

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
});