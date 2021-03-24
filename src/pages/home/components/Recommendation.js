import React, { Component, Fragment } from "react";
import { BannerItem } from '../style'
import { connect } from "react-redux"

class Recommendation extends Component {
    render() {
        const { bannerList } = this.props;
        return (
            <Fragment>
                {
                    bannerList.map((item) => (
                        <BannerItem key={item.get('name')}>
                            <img src={item.get('imgUrl')} alt={item.get('name')}/>
                        </BannerItem>
                    ))
                }
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    bannerList: state.getIn(['home', 'bannerList'])
})

export default connect(mapStateToProps, null)(Recommendation);