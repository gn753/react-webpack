import React from "react";
import styled from "@emotion/styled";

export const NewsFeatures = () => {
  return (
    <Feautres>
      <button className="translate">번역</button>
      <div>
        <i role="button" className="bookmark"></i>
        <i role="button" className="share"></i>
      </div>
    </Feautres>
  );
};

//NewsFeatures Style
const Feautres = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  margin: 20px 0;
  .translate {
    width: 70px;
    height: 100%;
    background-color: #4d4d4d;
    color: white;
    border: none;
    outline: none;
  }
  div {
    display: flex;
    height: 100%;
    .bookmark {
      width: 40px;
      height: 100%;
      background-image: url("public/images/icon-Bookmark-outline.svg");
      background-size: cover;
      background-repeat: no-repeat;
    }
    .share {
      width: 40px;
      height: 100%;
      background-image: url("public/images/icon-Share-outline.svg");
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
`;

//ArticleFooter Style
