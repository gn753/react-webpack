import React from "react";
import styled from "@emotion/styled";
import { NewsFeatures } from "../../common/NewsCommon";

interface Props {
  newsTitle: string;
  newsContent: string;
  newsimageUrls: string[] | null;
}

const ImageArticle = ({ newsTitle, newsContent, newsimageUrls }: Props) => {
  return (
    <Wrap>
      <Inner>
        {newsimageUrls !== null ? (
          <Figure>
            <img src={`${newsimageUrls}`} alt="기사1" />
          </Figure>
        ) : null}
        <NewsFeatures />
        <Title>{newsTitle}</Title>
        <ArticleBody>{newsContent}</ArticleBody>
        <ArticleFooter>
          <i className="Jounal-mark"></i>
          <div className="article-time">3 minutes ago</div>
        </ArticleFooter>
      </Inner>
    </Wrap>
  );
};

export default ImageArticle;

const Wrap = styled.article`
  display: inline-block;
  width: 400px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
`;
const Inner = styled.div`
  padding-top: 20px;
  padding-bottom: 0;
  padding-left: 20px;
  padding-right: 20px;
`;
const Figure = styled.figure`
  img {
    width: 360px;
    height: 300px;
    margin: 0;
  }
`;

export const ArticleBody = styled.p`
  color: #7a7a7a;
  font-family: NotoSans-Display;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 1.5rem;
  letter-spacing: -0.16px;
`;
const Title = styled.h2`
  font-family: NotoSans-Display;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 14px;
`;

const ArticleFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  box-sizing: content-box;
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
  }
`;
