import React from "react";
import styled from "@emotion/styled";

const Usercard = styled.div`
  margin-bottom: 75px;
  padding-bottom: 75px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  color: rgba(255, 255, 255, 0.6);
h2 {
  font-size: 22px;
  font-weight: 600;
  color: #fff;
  }
h4 {
  margin-top: 0;
  margin-bottom: 10px;
}
p {
  margin-top: 0;
  margin-bottom: 20px;
}
`
const Profic = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50px;
  background-color: #fff;
  display: block;
  margin-top: 75px;
  margin-left: 8px;
  margin-bottom: 28px;
`
const EditBtn = styled.div`
  width: 118px;
  height: 37px;
  border-radius: 5px;
  border: solid 1px #48c0b7;
  color: #48c0b7;
  text-align: center;
  line-height: 2.3;
`
export const User = () => {
  return (
    <Usercard>
      <h2>마이페이지</h2>
      <Profic></Profic>
      <h4>kim hana</h4>
      <p>kimhana1234@gamil.com</p>
      <EditBtn>프로필 편집</EditBtn>
    </Usercard>
  )
}