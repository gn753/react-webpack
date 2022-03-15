import React from "react";
import styled from "@emotion/styled";
import CommonContainer from "@/components/layout/CommonContainer";
import NewsTabList from "@/components/news/nav/NewsTabList";

const PersonalizeNav = () => {
  return (
    <Wrap>
      <CommonContainer>
        <div className="pt-31">
        </div>
        <NewsTabList />
      </CommonContainer>
    </Wrap>
  );
};

export default PersonalizeNav;

const Wrap = styled.section`
  background-image: linear-gradient(
    179deg,
    #fff -207%,
    #dff8f4 6%,
    #fdddd2 185%
  );
  height: 345px;
  .pt-31 {
    padding-top: 31px;
  }
`;
