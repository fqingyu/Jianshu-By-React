import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from "./style";
import { GlobalFontStyle } from "./statics/iconfont/iconfont";

ReactDOM.render(
    <Fragment>
        <meta name="referrer" content="no-referrer" />
        <GlobalFontStyle />
        <GlobalStyle />
        <App />
    </Fragment>
    ,
    document.getElementById('root')
);

