import React from "react";
import { Key } from "react";
import { useAppSelector } from "@/redux/hooks";
import ImageArticle from "./ImageArticle";
import InfiniteScroll from "react-infinite-scroll-component";
import dummyData from "@/components/news/common/dummyData.json";

interface Props {
  uuid: Key | null | undefined;
  title: string;
  description: string;
  imageUrls: string[] | null;
}

const ImageArticleList = () => {
  const { newListData } = useAppSelector((state) => state.newsList);
  console.log(newListData, "이미지 기사 출력");
  return (
    <>
      {newListData.map((article: any) => (
        <ImageArticle
          key={article.uuid}
          newsTitle={article.title}
          newsContent={article.description}
          newsimageUrls={article.imageUrls}
        />
      ))}
    </>
  );
};
export default ImageArticleList;
