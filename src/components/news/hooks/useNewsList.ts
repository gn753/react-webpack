import { useEffect } from "react";
import type { RootState } from "../../../redux/store";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { MouseEvent } from "react";
import { album, text } from "../../../redux/news/newsformatSlice";
import { changeNewsOption } from "../../../redux/news/newsSortSlice";
// import { showUserTabReducer } from "../../../redux/user/useInfoSlice";

export function useNewsList() {
  const newsFormats = useAppSelector(
    (state: RootState) => state.formats.NewsFormats
  );
  const newsSorts = useAppSelector(
    (state: RootState) => state.newsSorts.newsSortState
  );
  const userSavedKeywords = useAppSelector(
    (state: RootState) => state.userInfos.userSavedKeywords
  );
  const userCurrentTab = useAppSelector(
    (state: RootState) => state.userInfos.userCurrentTab
  );

  const dispatch = useAppDispatch();
  useEffect(() => {}, [dispatch]);

  const reportOptionToAPI = (NewsSortoption: string) => {
    dispatch(changeNewsOption(NewsSortoption));
  };

  const changeToImgFormat = (event: MouseEvent<HTMLElement>): void => {
    dispatch(album());
  };

  const changeToTextFormat = (event: MouseEvent<HTMLElement>): void => {
    dispatch(text());
  };

  // function changeNewsTab(event: MouseEvent<HTMLElement>): void {
  //   dispatch(showUserTabReducer());
  // }

  return {
    newsFormats,
    newsSorts,
    userSavedKeywords,
    userCurrentTab,
    reportOptionToAPI,
    changeToImgFormat,
    changeToTextFormat
    // changeNewsTab
  };
}
