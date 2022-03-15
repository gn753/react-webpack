import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useState } from "react";
import React, { MouseEvent } from "react";
import CommonContainer from "./CommonContainer";
import HeaderModal from "./HeaderModal";

const GlobalHeader = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  function viewModal(event: MouseEvent<HTMLElement>) {
    setIsActive(!isActive);
  }

  return (
    <section className='GlobalHeader'>
      <Wrap>
        <CommonContainer>
          <Inner>
            <Link to='/'>
              <Logo />
            </Link>
            <Member>
              <span className='MemberShip-join'>지금 멤버십 가입</span>
              <Profile>
                <i className='profile-icon'></i>
                <span className='user-name'>회원님</span>
                <i
                  role='button'
                  onClick={viewModal}
                  className='icon-arrow-bottom'
                ></i>
                {isActive === true ? <HeaderModal /> : null}
              </Profile>
            </Member>
            <NonMember>
              <div className='login'>
                <i className='icon-login'>로그인 아이콘</i>
                <span>로그인</span>
              </div>
              <div className='join'>
                <i className='icon-join'>회원가입 아이콘</i>
                <span>회원가입</span>
              </div>
            </NonMember>
          </Inner>
        </CommonContainer>
      </Wrap>
    </section>
  );
};

export default GlobalHeader;

const Wrap = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 68px;
  background-color: #fff;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
`;

const Logo = styled.div`
  width: 62.6px;
  height: 24px;
  background-image: url("public/images/icon-Moya-logo.svg");
  background-size: cover;
  background-repeat: no-repeat;
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  color: #575757;
  .MemberShip-join {
    font-size: 14px;
    margin-right: 22px;
    cursor: pointer;
    color: #575757;
  }
  & > span {
    flex-grow: 0;
    font-size: 12px;
    padding: 6px 8px 7px 7px;
    border-radius: 5px;
    border: 1px solid #b5b5b5;
    background-color: #fff;
    color: #575757;
  }
  .usename {
    font-size: 14px;
    color: #575757;
  }
`;

const Profile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 12px;
  .profile-icon {
    width: 16px;
    height: 16px;
    background-image: url("https://placeimg.com/16/16/any");
    background-size: cover;
    margin-right: 12px;
    border-radius: 50%;
    cursor: pointer;
  }
  .icon-arrow-bottom {
    width: 40px;
    height: 40px;
    background-image: url("public/images/icon-navi-bottom.svg");
    background-size: cover;
    cursor: pointer;
  }
`;

// 비회원

const NonMember = styled.div`
  /* display:flex; */
  display: none;
  align-items: center;
  height: 100%;
  .login,
  .join {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .icon-login {
    width: 40px;
    height: 40px;
    background-image: url("/images/icon-log-in.svg");
    background-repeat: no-repeat;
    background-size: cover;
    font-size: 0;
  }
  .icon-join {
    width: 40px;
    height: 40px;
    background-image: url("/images/icon-join.svg");
    background-repeat: no-repeat;
    background-size: cover;
    font-size: 0;
  }
`;
