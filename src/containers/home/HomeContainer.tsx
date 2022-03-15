import React from "react";
import Intro from "@/components/home/Intro";
import KeywordSelectContainer from "./KeywordSelectContainer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { fetchNewList } from "@/redux/news/newsListSlice";
import Search from "@/components/home/Search";

const HomeContainer = () => {
  const dispatch = useAppDispatch();
  const newsList = useAppSelector((state) => state.newsList);

  const [isOpendKeywordList, setIsOpendKeywordList] = useState(false);
  const [language, setLanguage] = useState("en");
  const [timeFilter, setTimeFilter] = useState("m5");
  const [identifiers, setIdentifiers] = useState("");

  function openKeywordList(isOpend: boolean) {
    setIsOpendKeywordList(isOpend);
  }

  function setIdentifiersString(Identifier: string) {
    setIdentifiers(Identifier);
  }
  const setLanguageCode = (langCode: string) => {
    setLanguage(langCode);
  };
  const setTimeFilterCode = (timeCode: string) => {
    setTimeFilter(timeCode);
  };

  const searchNews = () => {
    const searchPayload = {
      identifiers,
      language,
      timeFilter,
    };
    dispatch(fetchNewList(searchPayload));
  };
  console.log(newsList);
  useEffect(() => {}, []);
  return (
    <>
      <Intro />
      <Search
        openKeywordList={openKeywordList}
        setLanguageCode={setLanguageCode}
        setTimeFilterCode={setTimeFilterCode}
        setIdentifiersString={setIdentifiersString}
        searchNews={searchNews}
      />
      {isOpendKeywordList && (
        <KeywordSelectContainer selectKeyword={setIdentifiersString} />
      )}
    </>
  );
};

export default HomeContainer;
