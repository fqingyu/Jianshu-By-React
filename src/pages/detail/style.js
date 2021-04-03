import styled from 'styled-components'

export const PageWrapper = styled.div`
  background: #f9f9f9;
  height: 100vh;
  overflow: auto;
`

export const DetailWrapper = styled.div`
  width: 666px;
  margin: 24px auto 24px auto;
  overflow: hidden;
  padding: 32px;
  background: #fff;
`;

export const Header = styled.div`
  margin: 50px 0 20px 0;
  line-height: 44px;
  font-size: 34px;
  color: #333;
  font-weight: bold;
`

export const Content = styled.div`
  color: #2f2f2f;
  img {
    width: 100%;
  }
  p {
    margin: 25px 0;
    font-size: 16px;
    line-height: 30px;
  }
`