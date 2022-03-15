import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
const HeaderModal = () => {
  return (
    <Modal>
      <Link to="/myPage">마이 페이지</Link>
      <Link to="/myPage">키워드 관리</Link>
      <Link to="/myPage">로그아웃</Link>
    </Modal>
  );
};

export default HeaderModal;

const Modal = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 183px;
  box-shadow: 0px 4px 7px rgba(196, 195, 195, 0.25);
  border-radius: 5px;
  background-color: #fff;
  a {
    display: block;
    padding: 15px 0;
    border-bottom: 1px solid #d9d9d9;
    color: #000;
    text-decoration: none;
  }
  a:last-child {
    border: none;
  }
`;
