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
};

