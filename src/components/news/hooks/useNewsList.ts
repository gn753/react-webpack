import { useEffect } from "react";
import type { RootState } from "../../../redux/store";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export function useNewsList() {
  const test = useAppSelector(state => state.newsList)
  const userSavedKeywords = useAppSelector(
    (state: RootState) => state.memberDatas.userSavedKeywords
  );
  const userCurrentTab = useAppSelector(
    (state: RootState) => state.memberDatas.userCurrentTab
  );

  const dispatch = useAppDispatch();
  useEffect(() => {}, [dispatch]);

  return {
    userSavedKeywords,
    userCurrentTab,
  };
}
