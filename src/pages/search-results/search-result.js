import "./search-result.scss";
import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { searchContext } from "../../context/search";

import SearchBar from "../../common/search-bar/search-bar";
import FilterBar from "../../common/filter-bar/filter-bar";
import IntroComponentAnimation from "../../common/containers/animation/intro-animation/IntroComponentAnimation";
import Card from "../../components/card/card";
import NavBar from "../../components/navbar/navbar";

const SearchResult = () => {
  const { searchKey, searchResults, setSearchResults } =
    useContext(searchContext);

  const [newestValue, setNewestValue] = useState("");
  const [printValue, setPrintValue] = useState("");
  const [freeValue, setFreeValue] = useState("");
  const [paidValue, setPaidValue] = useState("");
  const [change, setChange] = useState(true);
  const filterItemHandler = () => {
    setChange(false);
    setTimeout(() => {
      setChange(true);
    }, 680);
  };

  const baseUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchKey}&maxResults=40${printValue}${newestValue}${freeValue}${paidValue}`;

  useEffect(() => {
    if (searchKey) {
      const getResults = async () => {
        try {
          const response = await fetch(baseUrl);
          const data = await response.json();
          setSearchResults(data.items);
        } catch (error) {
          console.log(error.message);
        }
      };
      getResults();
    }
  }, [baseUrl, searchKey, setSearchResults]);

  return (
    <>
      <NavBar />
      <div className="header">
        <h1>Search Results for: {searchKey}</h1>
        <SearchBar filterItemHandler={filterItemHandler} />
        <FilterBar
          control={{
            setNewestValue,
            setPrintValue,
            setFreeValue,
            setPaidValue,
          }}
        />
      </div>
      <IntroComponentAnimation isVisible={change}>
        <div className="results">
          {searchResults ? (
            searchResults.map((result, i) => <Card key={i} item={result} />)
          ) : (
            <h1>No search results for this keyword</h1>
          )}
        </div>
      </IntroComponentAnimation>
    </>
  );
};
export default SearchResult;
