import type { RootState } from "../../../redux/store";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { MouseEvent } from "react";
import { album, text } from "@/redux/news/newsformatSlice";

export const useNewsFormats = () => {
  const dispatch = useAppDispatch();

  const { NewsFormats } = useAppSelector((state: RootState) => state.formats);
  
  const changeToImgFormat = (event: MouseEvent<HTMLElement>): void => {
    dispatch(album());
  };

  const changeToTextFormat = (event: MouseEvent<HTMLElement>): void => {
    dispatch(text());
  };
  return {
    NewsFormats,
    changeToTextFormat,
    changeToImgFormat,
  };
};
