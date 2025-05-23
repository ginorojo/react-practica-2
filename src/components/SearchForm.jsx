function SearchForm({ searchInput, handleSearch, setQuery, setPage, fetchImages }) {
  const keywords = ['chile', 'nicaragua', 'lds', 'gatos'];


//Muestra el formulario de búsqueda y los botones de filtro.

return (
    <form onSubmit={handleSearch} className="max-w-md mx-auto mb-8">
      <div className="relative">
        <input
          type="search"
          ref={searchInput}
          className="block w-full p-4 ps-10 text-sm border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Search images..."
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        {keywords.map((keyword) => (
          <button
            key={keyword}
            type="button"
            onClick={() => {
              setQuery(keyword);
              setPage(1);
              fetchImages(keyword, 1);
            }}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          >
            {/* mostrar la palabra con la primera letra en mayúscula */}
            {keyword.charAt(0).toUpperCase() + keyword.slice(1)} 
          </button>
        ))}
      </div>
    </form>
  );
}

export default SearchForm;
