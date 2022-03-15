import React from "react";
import Intro from "@/components/home/Intro";
import { useSearch } from "@/hooks/useSearch";
import KeywordSelectContainer from "@/containers/home/KeywordSelectContainer";
import Search from "@/components/home/Search";

const HomeContainer = () => {
  const {
    isOpendKeywordList,
    openKeywordList,
    setIdentifiersString,
    setLanguageCode,
    setTimeFilterCode,
    setCategoriesCode,
    searchNews,
  } = useSearch();

  return (
    <>
      <Intro />
      <Search
        openKeywordList={openKeywordList}
        setLanguageCode={setLanguageCode}
        setTimeFilterCode={setTimeFilterCode}
        setIdentifiersString={setIdentifiersString}
        setCategoriesCode={setCategoriesCode}
        searchNews={searchNews}
      />
      {isOpendKeywordList && (
        <KeywordSelectContainer
          setIdentifiersString={setIdentifiersString}
          searchNews={searchNews}
        />
      )}
    </>
  );
};

export default HomeContainer;
