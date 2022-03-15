import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { useNewsList } from "@/components/news/hooks/useNewsList";
import dummyData from "@/components/news/common/dummyData.json";
import CommonContainer from "@/components/layout/CommonContainer";
import TextArticleList from "@/components/news/main/cardList/TextArticleList";
import ImageArticleList from "@/components/news/main/cardList/ImageArticleList";

const FormatView = () => {
  const { newsFormats } = useNewsList();

  useEffect(() => {}, []);

  return (
    <CommonContainer>
      <Content>
        {(function test() {
          switch (true) {
            case newsFormats === "Image":
              return <ImageArticleList dummyData={dummyData} />;
            case newsFormats === "Text":
              return <TextArticleList dummyData={dummyData} />;
            default:
              return null;
          }
        })()}
      </Content>
    </CommonContainer>
  );
};

export default FormatView;

const Content = styled.div`
  column-count: 3;
  column-gap: 20px;
  padding-bottom: 280px;
`;

//데이터를 [0]번째 인덱스만 출력하게해라
