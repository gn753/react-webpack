import styled from "@emotion/styled";
import React from "react";
import CommonContainer from "@/components/layout/CommonContainer";
import SortOptionContainer from "@/components/news/main/options/SortOptionContainer";
import { useNewsList } from "../../hooks/useNewsList";
const Options = () => {
  const { changeToTextFormat, changeToImgFormat } = useNewsList();
  return (
    <CommonContainer>
      <Features>
        <SortOptionContainer />
        <TextSizeControl onClick={() => {}} />
        <ImageFormatViewBtn onClick={changeToImgFormat} />
        <TextFormatViewBtn onClick={changeToTextFormat} />
      </Features>
    </CommonContainer>
  );
};

export default Options;

const Features = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 99px;
  border-bottom: 1px solid #d9d9d9;
`;

const TextSizeControl = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("public/images/icon-Text-Size.svg");
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const ImageFormatViewBtn = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("public/images/icon-Grid-filled.svg");
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const TextFormatViewBtn = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("public/images/icon-Grid-list.svg");
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;
