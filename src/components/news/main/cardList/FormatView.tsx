import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { useNewsFormats } from "@/components/news/hooks/useNewsFormat";
import CommonContainer from "@/components/layout/CommonContainer";
import TextArticleList from "@/components/news/main/cardList/TextArticleList";
import ImageArticleList from "@/components/news/main/cardList/ImageArticleList";

const FormatView = () => {
  const { NewsFormats } = useNewsFormats();
  useEffect(() => {}, []);
  console.log(NewsFormats, "포맷");
  return (
    <CommonContainer>
      {(function test() {
        switch (true) {
          case NewsFormats === "Image":
            return (
              <ImageContent>
                <ImageArticleList />
              </ImageContent>
            );
          case NewsFormats === "Text":
            return (
              <TextContent>
                <TextArticleList />;
              </TextContent>
            );
          default:
            return null;
        }
      })()}
    </CommonContainer>
  );
};

export default FormatView;

const ImageContent = styled.div`
  column-count: 3;
  column-gap: 20px;
  padding-bottom: 280px;
`;
const TextContent = styled.div`
  width: 100%;
`;
//데이터를 [0]번째 인덱스만 출력하게해라
