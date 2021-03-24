import styled from 'styled-components'

/* Homepage */
export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
  padding-top: 30px;
  margin-left: 40px;
`;

/* Topic */
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 0 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 10px;
  padding-right: 10px;
  font-size: 14px;
  background: #f7f7f7;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

/* List */
export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`

export const ListInfo = styled.div`
  width: 458px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;  
    margin-bottom: 8px;
  }
  .meta {
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    color: #b4b4b4;
  }
  &.no-image {
    width: 625px;
  }
`

export const AuthorMeta = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #b4b4b4;
  overflow: hidden;
  div {
    float: left;
    line-height: 14px;
    margin-right: 10px;
  }
  .iconfont {
    font-size: 12px;
    margin-right: 1px;
  }
`

/* Recommendation */
export const BannerItem = styled.div`
  img {
    width: 100%;
    min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
  }
`

/* QRCode */
export const QRItem = styled.div`
  margin-bottom: 30px;
  padding: 10px 22px;
  width: 234px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  position: relative;
  cursor: pointer;
  .qr-code {
    width: 60px;
    height: 60px;
    opacity: .85;
  }
  .info {
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    position: absolute;
    top: 30%;
  }
  .title {
    font-size: 15px;
    color: #333;
  }
  .description {
    margin-top: 4px;
    font-size: 13px;
    color: #999;
  }
  .popup {
    position: absolute;
    width: 180px;
    height: 180px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    background: white;
    border-radius: 4px;
    top: -190px;
    left: 50px;
  }
  .popup img{
    margin: 10px;
  }
`