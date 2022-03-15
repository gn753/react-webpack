import { configureStore } from "@reduxjs/toolkit";

import newsformatReducer from "./news/newsformatSlice";
import newsListReducer from "./news/newsListSlice";
import newsSortReducer from "./news/newsSortSlice";
import useInfoReducer from "./user/useInfoSlice";
export const store = configureStore({
  reducer: {
    newsList: newsListReducer,
    formats: newsformatReducer,
    newsSorts: newsSortReducer,
    userInfos: useInfoReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
