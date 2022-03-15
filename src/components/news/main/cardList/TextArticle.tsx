import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";
import { NewsFeatures } from "@/components/news/common/NewsCommon"
import { ArticleBody } from "./ImageArticle";

interface Props {
  newsTitle: string;
  newsContent: string;
}

const TextArticle = ({ newsTitle, newsContent }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  function showContent() {
    setIsActive(!isActive);
  }

  return (
    <Wrap>
      <NewsFeatures></NewsFeatures>
      <Title>{newsTitle}</Title>
      <ArticleFooter>
        <i className="Jounal-mark"></i>
        <div className="article-time">3 minutes ago</div>
        <i className="nav-btn" role="button" onClick={showContent}>
          미리 보기
        </i>
      </ArticleFooter>
      {isActive === true ? (
        <ArticleContent>{newsContent}</ArticleContent>
      ) : null}
    </Wrap>
  );
};

export default TextArticle;

const Wrap = styled.article`
  width: 100%;
`;

const Title = styled.h2`
  font-family: NotoSans-Display;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 14px;
`;

const ArticleFooter = styled.footer`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  box-sizing: content-box;
  .ImageFormatView {
    display: flex;
    justify-items: space-between;
    align-items: center;
  }
  .Jounal-mark {
    display: block;
    width: 30px;
    height: 30px;
    background-color: #c4c4c4;
    border-radius: 50%;
  }
  .article-time {
    font-size: 14px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.86;
    letter-spacing: normal;
    text-align: left;
    color: #313131;
    margin-right: 70px;
  }
  .nav-btn {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background-image: url("/images/icon-navi-bottom.svg");
    background-size: cover;
    font-size: 0;
    cursor: pointer;
  }
`;
const ArticleContent = styled(ArticleBody)`
  transition: 0.5s;
`;
