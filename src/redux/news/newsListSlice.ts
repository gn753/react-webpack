import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { NewsType, SearchPayload } from "../../api/newsListApi";
import { QuaryStringType } from "../../api/newsListApi";
import axios from "axios";
export const fetchNewList = createAsyncThunk(
  "newlist/fetchNewsList",
  async (searchPayload: SearchPayload) => {
    const { identifiers, timeFilter, language } = searchPayload;
    console.log(identifiers, timeFilter, language);
    let payload: QuaryStringType = {
      identifier_type: "assets",
      identifiers: identifiers,
      time_filter: timeFilter,
      categories: "mp,op",
      min_cityfalcon_score: 0,
      languages: language,
      order_by: "top",
      access_token:
        "ea67d29c683a69e808a26cc6dc5a1445df84876e9e2d7aaf3d6f084210dce775"
    };
    const NEWS_API_URL = `https://api.cityfalcon.com/v0.2/stories?identifier_type=${payload.identifier_type}&identifiers=${payload.identifiers}&time_filter=${payload.time_filter}&categories=${payload.categories}&languages=${payload.languages}&min_cityfalcon_score=${payload.min_cityfalcon_score}&order_by=${payload.order_by}&access_token=${payload.access_token}`;
    const response = await axios.get(NEWS_API_URL);
    if (response.status !== 200) {
      console.log("error");
    }
    return await response.data;
  }
);

type NewsListState = {
  newListData: NewsType[];
  loading: boolean;
  error: any;
};

const initialState: NewsListState = {
  newListData: [],
  loading: false,
  error: null
};

const NewsListSlice = createSlice({
  name: "newsList",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchNewList.pending, state => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchNewList.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.newListData.push(...state.newListData, ...action.payload.stories);
    });

    builder.addCase(fetchNewList.rejected, (state, action: any) => {
      console.log(action);
      state.loading = false;
      state.error = action.error.message;
    });
  }
});

export default NewsListSlice.reducer;
