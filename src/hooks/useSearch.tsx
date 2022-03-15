import React, { useState } from "react";
import { fetchNewList } from "@/redux/news/newsListSlice";
import { useAppDispatch } from '@/redux/hooks';

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

  const searchNews = (str?: string) => {
    const identifier = str ? str : identifiers;
    const searchPayload = {
      identifiers: identifier,
      language,
      timeFilter,
      categories,
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
