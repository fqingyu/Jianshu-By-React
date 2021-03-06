import React, { PureComponent } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { PageWrapper, DetailWrapper, Header, Content } from "./style";
import { actionCreators } from './store'

class Detail extends PureComponent {
    render() {
        const { title, content } = this.props;
        return (
            <PageWrapper>
                <DetailWrapper>
                    <Header>
                        { title }
                    </Header>
                    <Content dangerouslySetInnerHTML={{__html: content}} />
                </DetailWrapper>
            </PageWrapper>

        )
    }

    componentDidMount() {
        const { getDetail } = this.props;
        getDetail(this.props.match.params.id);
    }
}

const mapStateToProps = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

const mapDispatchToProps = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));