import React, {useState,  useEffect} from 'react';
import Yelp from '../api/Yelp';
export default () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchApi = async (searchTerm) => {
    setLoading(true);
    setResults([]);
    try {
      const response = await Yelp.get("/search", {
        // this will append ?limit=50 to the search URL
        params: {
          limit: 50,
          term:searchTerm,
          location: "los angeles"
        }
      });
      setResults(response.data.businesses);
      setLoading(false); 
    } catch(err) {
      setLoading(false);
      setError(`${err}`);
    }
  };

  useEffect(() => {
    searchApi('pasta')
  }, []);

  return [loading, error, searchApi, results]
};