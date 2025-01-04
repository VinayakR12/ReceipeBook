import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Card from '../components/Header/Card';
const DB_API = import.meta.env.VITE_API_BASE_URL;
export default function Search() {
    const urlText=useParams()
    const[query,setQuery]=useState('');
    const[result,setResult]=useState([]);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState(null);

    useEffect(()=>{
        const params = new URLSearchParams(window.location.search);
        const queryParams=params.get('query');
        if(queryParams){
            setQuery(queryParams)
        }
    },[])

    useEffect(() => {
      const fetchItems = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`${DB_API}api/items`,{
            params : {q : query}
            
          });
          setResult(response.data);
          console.log('data is '+response);
        } catch (e) {
          setError(e.message || 'Error fetching data');
        } finally {
          setLoading(false);
        }
      };
  
      fetchItems();
    }, [query]);
    const handleSearch=(e)=>{
        setQuery(e.target.value)
    }

  return (
<div className="bg-gradient-to-r from-teal-100 to-blue-300 px-6 lg:px-12 py-20 min-h-screen">
  <h1 className="text-center text-4xl sm:text-6xl font-extrabold text-blue-800 py-10 sm:leading-relaxed transform hover:scale-110 transition duration-300">
    Search for Recipes
  </h1>

  <form className="flex items-center mx-auto max-w-2xl">
    <input
      type="text"
      onChange={handleSearch}
      value={query}
      name="query"
      required
      className="w-full px-4 py-2 rounded-md border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 hover:border-blue-400"
      placeholder="Search for Recipe.."
    />
    <button
      type="submit"
      className="ml-2 px-4 py-2 rounded-md bg-blue-700 text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105"
    >
      Search
    </button>
  </form>

  <div className="mt-12">
    {loading ? (
      <div className="text-center text-xl text-white">Loading...</div>
    ) : error ? (
      <div className="text-center text-xl text-red-500">{error}</div>
    ) : result && result.length > 0 ? (
      <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {result.map((item) => (
          <li key={item._id} className="transition transform hover:scale-105 hover:shadow-lg">
            <Card item={item} />
          </li>
        ))}
      </ul>
    ) : (
      <div className="text-center text-xl text-gray-600">No results found</div>
    )}
  </div>
</div>
  )
}
