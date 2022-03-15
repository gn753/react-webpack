import React from "react";
import { Key } from "react";
import ImageArticle from "./ImageArticle";

interface Props {
  uuid: Key | null | undefined;
  title: string;
  description: string;
  imageUrls: string[] | null;
}

const ImageArticleList = ({ dummyData }: any) => {
  return (
    <>
      {dummyData.map((article:Props) => (
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
