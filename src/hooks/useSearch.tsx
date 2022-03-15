import React, { useState } from "react";
import { fetchNewList } from "@/redux/news/newsListSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useNewsFilter } from "@/components/news/hooks/useNewsFilter";
import { useEffect } from "react";
export const useSearch = () => {
  const dispatch = useAppDispatch();

  const [isOpendKeywordList, setIsOpendKeywordList] = useState(false);
  const [language, setLanguage] = useState("en");
  const [timeFilter, setTimeFilter] = useState("m5");
  const [categories, setCategories] = useState("mp,op,r");
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
  const setCategoriesCode = (categoriesCode: string) => {
    setCategories(categoriesCode);
  };

  //test용 start 뉴스정렬상태 and useEffect 추후 삭제고민  //////
  const { newsSortState } = useNewsFilter();

  useEffect(() => {
    const searchNews = (str?: string) => {
      const identifier = str ? str : identifiers;
      let searchPayload = {
        identifiers: identifier,
        language,
        timeFilter,
        categories,
        order_by: newsSortState,
      };
      dispatch(fetchNewList(searchPayload));
      console.log(newsSortState);
    };
    searchNews(newsSortState);
  }, [newsSortState]);
  /// 여기까지 test end /////////////////

  const searchNews = (str?: string) => {
    const identifier = str ? str : identifiers;
    let searchPayload = {
      identifiers: identifier,
      language,
      timeFilter,
      categories,
      order_by: newsSortState, // "tops"
    };
    dispatch(fetchNewList(searchPayload));
  };

  return {
    isOpendKeywordList,
    openKeywordList,
    setIdentifiersString,
    setLanguageCode,
    setTimeFilterCode,
    setCategoriesCode,
    searchNews,
  };
};
