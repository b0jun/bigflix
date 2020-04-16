import { Kor } from "./language";

export const movieApi = {
  popularMovie: () => Kor.get("movie/popular"),
  topRatedMovie: () => Kor.get("movie/top_rated"),
  movieDetail: (id) =>
    Kor.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),

  getGenre: () => Kor.get("genre/movie/list"),
};

export const tvApi = {
  popularTV: () => Kor.get("tv/popular"),
  topRatedTV: () => Kor.get("tv/top_rated"),
  airingTodayTV: () => Kor.get("tv/airing_today"),
  tvDetail: (id) =>
    Kor.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  getGenre: () => Kor.get("genre/tv/list"),
};

export const multiApi = {
  search: (term) =>
    Kor.get(`search/multi?${term}`, {
      params: {
        query: term,
      },
    }),
};
