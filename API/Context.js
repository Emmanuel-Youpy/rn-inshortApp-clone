import React, { createContext, useState, useEffect } from "react";
import { getNewsAPI, getSourceAPI } from "./api";
import axios from "axios";

export const NewsContext = createContext();

const Context = ({ children }) => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("General");
  const [index, setIndex] = useState(1);
  const [source, setSource] = useState();
  const [darkTheme, setDarkTheme] = useState(true);

  const fetchNews = async (reset = category) => {
    const { data } = await axios.get(getNewsAPI(reset));

    setNews(data);
    setIndex(1);
  };

  const fetchNewsfromSource = async () => {
    try {
      const { data } = await axios.get(getSourceAPI(source));
      setNews(data);
      setIndex(1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNewsfromSource();
  }, [source]);

  useEffect(() => {
    fetchNews();
  }, [category]);

  return (
    <NewsContext.Provider
      value={{
        darkTheme,
        setDarkTheme,
        news,
        index,
        setIndex,
        fetchNews,
        setCategory,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default Context;
