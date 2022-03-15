import styled from "@emotion/styled";
import React, { useState, DragEvent } from "react";

interface Props {
  title: string;
}

const NewsTab = ({ title }: Props) => {
  return (
    <Wrap>
      <KeywordItem>{title}</KeywordItem>
    </Wrap>
  );
};

export default NewsTab;

const Wrap = styled.div`
  height: 100%;
`;

const KeywordItem = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 19px 30px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 600;
  background-color: ${props => props.theme.BlueGreenColor};
  color: white;
  border-radius: 5px 0 0 0px;
`;
