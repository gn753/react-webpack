import React from "react";
import { useEffect } from "react";
import { useNewsFilter } from "@/components/news/hooks/useNewsFilter";
import FormatView from "@/components/news/main/cardList/FormatView";
import styled from "@emotion/styled";

const NewsList = () => {
  const { newsSortState } = useNewsFilter();

  // useEffect( ()=>{
  //   if(newsSorts === 인기순 쿼리) {
  //     dispatch()
  //   }
  // },[])

  return (
    <ViewFilter>
      {(function viewList() {
        if (newsSortState === "top") {
          return <FormatView />;
        } else if (newsSortState === "latest") {
          return <FormatView />;
        } else if (newsSortState === "populer") {
          return <FormatView />;
        } else {
          return null;
        }
      })()}
    </ViewFilter>
  );
};

export default NewsList;

const ViewFilter = styled.div``;
