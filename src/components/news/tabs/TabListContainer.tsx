import React from "react";
import NewsTabList from "@/components/news/tabs/NewsTabList";
import CommonContainer from "@/components/layout/CommonContainer";
import styled from "@emotion/styled";

const TabListContainer = () => {
  return (
    <PositionTop60>
      <CommonContainer>
        <NewsTabList />
      </CommonContainer>
    </PositionTop60>
  );
};

export default TabListContainer;
const PositionTop60 = styled.section`
  margin-top: -60px;
`;
