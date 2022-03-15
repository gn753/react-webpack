import styled from "@emotion/styled";
import React, { useState } from "react";
import { useNewsFilter } from "@/components/news/hooks/useNewsFilter";
import { MouseEvent } from "react";
const options: string[] = ["top" ,"latest" , "populer"];

interface Props {
  newsCurOption: String;
  setNewsCurOption: React.Dispatch<React.SetStateAction<String>>;
}

const SortOptionList = ({ newsCurOption, setNewsCurOption }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const { reportOptionToAPI } = useNewsFilter();

  function showDropDown(option: string) {
    setNewsCurOption(option);
    setIsActive(!isActive);
  }
  return (
    <ListWrap>
      <DropDownBtn onClick={(e: MouseEvent) => setIsActive(!isActive)}>
        {newsCurOption}
        <i className='nav-bottom'></i>
      </DropDownBtn>
      <DropDownList>
        {isActive &&
          options.map((option) => (
            <li
              className='dropdown-item'
              onClick={(e: MouseEvent) => {
                showDropDown(option);
                reportOptionToAPI(option);
              }}
            >
              {option}
            </li>
          ))}
      </DropDownList>
    </ListWrap>
  );
};

export default SortOptionList;

const ListWrap = styled.div`
  position: relative;
`;
const DropDownBtn = styled.div`
  width: 160px;
  height: 40px;
  line-height: 40px;
  padding-left: 20px;
  border: 1px solid #dadada;
  box-sizing: border-box;
  position: relative;
  background-color: #fff;
  cursor: pointer;
  .nav-bottom {
    position: absolute;
    top: 20px;
    right: 10px;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background-image: url("public/images/icon-navi-bottom.svg");
    background-size: cover;
  }
`;
const DropDownList = styled.ul`
  position: absolute;
  top: 100%;
  background-color: #fff;
  .dropdown-item {
    width: 160px;
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    border: 1px solid #dadada;
    box-sizing: border-box;
  }
  .sort-item {
    cursor: pointer;
  }
`;
