import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const apiKey = '1531a0331d9c475283986f3815e4f326';
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('blog');

  // Function to fetch top posts
  const fetchTopPosts = () => {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;
    axios
      .get(apiUrl)
      .then((res) => {
        setData(res.data.articles);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    if (!selectedCategory) {
      // Fetch top posts when no category is selected
      fetchTopPosts();
    } else {
      // Fetch posts based on selected category
      const apiUrl = `https://newsapi.org/v2/everything?q=${selectedCategory}&apiKey=${apiKey}`;
      axios
        .get(apiUrl)
        .then((res) => {
          setData(res.data.articles);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [selectedCategory]);

  return (
    <DataContext.Provider value={{ data, setSelectedCategory }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
