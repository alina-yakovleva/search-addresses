import { ISuggestion } from "./types";

const url =
  "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";

const token = "f1fb14c7beaea6516e9e7c10cb71009954e17905";

type IGetDataResponse = {
  suggestions: ISuggestion[];
};

export const getSuggestions = (query?: string) =>
  fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Token " + token,
    },
    body: JSON.stringify({ query }),
  })
    .then((response) => response.json() as Promise<IGetDataResponse>)
    .then((data) => data.suggestions);
