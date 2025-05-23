import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import ImageGrid from './components/ImageGrid';
import Pagination from './components/Pagination';

const API_URL = 'https://api.unsplash.com/search/photos';
const IMAGES_PER_PAGE = 20;

function App() {
  const searchInput = useRef(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [totalPages, setTotalPages] = useState(0);

  const fetchImages = async (searchQuery, pageNumber = 1) => {
    try {
      setLoading(true);
      setErrorMsg('');
      const response = await axios.get(API_URL, {
        params: {
          query: searchQuery,
          page: pageNumber,
          per_page: IMAGES_PER_PAGE,
          client_id: import.meta.env.VITE_API_KEY,
        },
      });
      setImages(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error(error);
      setErrorMsg('Error fetching images. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const inputValue = searchInput.current.value.trim();
    if (inputValue) {
      setQuery(inputValue);
      setPage(1);
      fetchImages(inputValue, 1);
    }
  };

  useEffect(() => {
    if (query) {
      fetchImages(query, page);
    }
  }, [page]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-4">
      <h1 className="text-4xl text-center font-bold pt-20 pb-10">Image Search</h1>

      <SearchForm
        searchInput={searchInput}
        handleSearch={handleSearch}
        setQuery={setQuery}
        setPage={setPage}
        fetchImages={fetchImages}
      />

      {loading && <p className="text-center">Loading...</p>}
      {errorMsg && <p className="text-center text-red-500">{errorMsg}</p>}

      <ImageGrid images={images} />

      {images.length > 0 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          setPage={setPage}
        />
      )}
    </div>
  );
}

export default App;
