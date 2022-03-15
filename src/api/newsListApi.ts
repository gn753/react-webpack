import axios from "axios";

export type NewsType = {
  additionalData: {};
  assetTags: [];
  category: String;
  cityfalconScore: Number;
  cityfalcon_permalink: String;
  description: String;
  duplicatesCount: Number;
  imageUrls: [];
  lang: String;
  paywall: boolean;
  publishTime: String;
  registrationRequired: boolean;
  searchTags: [];
  source: {};
  title: String;
  url: String;
  uuid: String;
};

type NewsListType = {
  nextPageToken: string;
  stories: NewsType[];
};

export type QuaryStringType = {
  identifier_type: "assets" | "tickers" | "full_tickers" | "legal_id";
  identifiers: String;
  time_filter: String;
  categories: String;
  min_cityfalcon_score?: Number;
  languages: string;
  order_by: "top" | "latest" | "populer";
  access_token: String;
};

export type SearchPayload = {
  identifiers: string;
  language: string;
  timeFilter: string;
  categories: string;
};

export async function getNewList(searchPayload: SearchPayload) {
  let payload: QuaryStringType = {
    identifier_type: "assets",
    identifiers: searchPayload.identifiers,
    time_filter: searchPayload.timeFilter,
    categories: searchPayload.categories,
    min_cityfalcon_score: 0,
    languages: searchPayload.language,
    order_by: "top",
    access_token:
      "ea67d29c683a69e808a26cc6dc5a1445df84876e9e2d7aaf3d6f084210dce775",
  };

  const {
    identifier_type,
    identifiers,
    time_filter,
    categories,
    min_cityfalcon_score,
    languages,
    order_by,
    access_token,
  } = payload;

  const NEWS_API_URL = `https://api.cityfalcon.com/v0.2/stories?identifier_type=${identifier_type}&identifiers=${identifiers}&time_filter=${time_filter}&categories=${categories}&languages=${languages}&min_cityfalcon_score=${min_cityfalcon_score}&order_by=${order_by}&access_token=${access_token}`;
  const response = await axios.get(NEWS_API_URL);
  console.log(response);
  return response;
}
