import React from "react";
import { Key } from "react";
import TextArticle from "./TextArticle";
import { useAppSelector } from "@/redux/hooks";

interface Props {
  uuid: Key | null | undefined;
  title: string;
  description: string;
  imageUrls: string[] | null;
}

const TextArticleList = () => {
  const { newListData } = useAppSelector((state) => state.newsList);
  return (
    <>
      {newListData.map((article: any) => (
        <TextArticle
          key={article.uuid}
          newsTitle={article.title}
          newsContent={article.description}
        />
      ))}
    </>
  );
};

export default TextArticleList;
