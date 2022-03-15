import React from "react";
import { useEffect } from "react";
import { useNewsList } from '@/components/news/hooks/useNewsList';
import FormatView from "@/components/news/main/cardList/FormatView"
import styled from "@emotion/styled";


const NewsList = () => {
  const { newsSorts } = useNewsList();

  // useEffect( ()=>{
  //   if(newsSorts === 인기순 쿼리) {
  //     dispatch()
  //   }
  // },[])
  
  return (
    <ViewFilter>
      {(function viewList() {
        if (newsSorts === "정렬순") {
          return <FormatView />;
        } else if (newsSorts === "인기순") {
          return <div>2</div>;
        } else if (newsSorts === "최신순") {
          return <div>3</div>;
        } else {
          return null;
        }
      })()}
    </ViewFilter>
  );
};

export default NewsList;

const ViewFilter = styled.div``;
