import React, { Component } from "react";
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from '../style'


class Topic extends Component {
    render() {
        return (
            <TopicWrapper>
                {
                    this.props.topicList.map((item) => (
                            <TopicItem key={item.get('id')}>
                                <img
                                    alt="pic"
                                    className='topic-pic'
                                    src={item.get('imgUrl')}
                                />
                                {item.get('title')}
                            </TopicItem>
                        )
                    )
                }
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    topicList: state.getIn(['home', 'topicList'])
});

export default connect(mapStateToProps, null)(Topic);