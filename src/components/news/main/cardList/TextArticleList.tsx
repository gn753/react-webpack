import React from "react";
import { Key } from "react";
import TextArticle from "./TextArticle";

interface Props {
  uuid: Key | null | undefined;
  title: string;
  description: string;
  imageUrls: string[] | null;
}

const TextArticleList = ({ dummyData }: any) => {
  return (

      <div>
        {dummyData.map((article: Props) => (
          <TextArticle
            key={article.uuid}
            newsTitle={article.title}
            newsContent={article.description}
          />
        ))}
      </div>

  );
};

export default TextArticleList;
