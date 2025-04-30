// src/components/SearchPage.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from '../utils/axios';
import MovieRow from './MovieRow';

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await axios.get(`/search?q=${encodeURIComponent(query)}`);
        setResults(res.data);
      } catch (err) {
        console.error('Search error:', err);
      }
    };

    if (query) fetchResults();
  }, [query]);

  return (
    <div className="search-page">
      <h2>Search Results for: {query}</h2>
      {results.length > 0 ? (
        <MovieRow title="Results" items={results} />
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchPage;
