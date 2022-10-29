import { useEffect, useState } from "react";

import { getSuggestions } from "../../api";
import { ISuggestion } from "../../types";

import "./index.scss";

import { ReactComponent as SearchIcon } from "../../assets/search.svg";

const Search = () => {
  const [suggestions, setSuggestions] = useState<ISuggestion[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getSuggestions().then(setSuggestions);
  }, []);

  const getSuggestiosBySearch = () => {
    getSuggestions(search).then(setSuggestions);
  };

  const disabled = search.length < 3;
  return (
    <div className="search">
      <div className="search_heading">Поиск адресов</div>
      <div className="search_text">Введите интересующий вас адрес</div>
      <div className="search__input">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Введите интересующий вас адрес"
        />

        <button
          onClick={getSuggestiosBySearch}
          disabled={disabled}
          className="button"
        >
          <SearchIcon />
          <span>Поиск</span>
        </button>
      </div>
      {suggestions.length !== 0 && (
        <div className="suggestions">
          {suggestions.map((item) => (
            <div key={item.value} className="suggestions-item">
              {item.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Search;
