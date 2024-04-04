import { reactive } from "vue";

export const store = reactive({
  // apiUrl:
  //   "`https://api.themoviedb.org/3/search/movie?api_key=${ key }&query=ritorno+al+futuro`",
  // key: "b67c97a35d3e4e84ab9ea6b569a41bf8",
  apiUrl: "https://api.themoviedb.org/3/search/",
  queryparams: {
    api_key: "b67c97a35d3e4e84ab9ea6b569a41bf8",
    language: "it-IT",
    query: "",
  },
  movie: [],
  tv: [],
  toSearch: "",
});
