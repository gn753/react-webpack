import styled from "@emotion/styled";
import React from "react";

const Home = () => {
  return (
    <HomeWrap>
      <InnerWrap>
        <Introduction>글로벌 경제 금융 정보검색 서비스, 모야</Introduction>
      </InnerWrap>
    </HomeWrap>
  );
};
export default Home;

const HomeWrap = styled.div`
  background: linear-gradient(
    211.86deg,
    #ffffff -2.13%,
    rgba(244, 253, 251, 0.896614) 19.27%,
    rgba(223, 248, 244, 0.7) 49.34%,
    rgba(253, 221, 210, 0.7) 94.11%
  );
`;

const InnerWrap = styled.div`
  width: 1240px;
  margin: 0 auto;
`;

const Introduction = styled.div`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 64px;
  color: ${(props) => props.theme.primaryColor};
`;
