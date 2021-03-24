import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./style"
import Topic from "./components/Topic";
import List from "./components/List";
import Recommendation from "./components/Recommendation";
import QRCode from "./components/QRCode";
import Writer from "./components/Writer";

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMorgr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540"/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommendation />
                    <QRCode />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;