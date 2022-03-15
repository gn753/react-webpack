import React from "react";
import styled from "@emotion/styled";

const Wrap = styled.ul`
color: rgba(255, 255, 255, 0.6);
padding: 0;
  li {
    list-style: none;
    font-size: 20px;
    font-weight: 600;
  }
  li + li {
    margin-top: 20px;
  }
`


export const SideNav = () => {
  return (
    <Wrap>
      <li>스크랩한 뉴스</li>
      <li>최근 본 뉴스</li>
      <li>자주 묻는 질문</li>
      <li>1:1 문의</li>
    </Wrap>
  )
}