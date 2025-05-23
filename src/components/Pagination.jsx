//Controla la navegación entre páginas
//Muestra los botones Previous y Next.

function Pagination({ page, totalPages, setPage }) {
  return (
    <div className="flex justify-center gap-4">
      {page > 1 && (
        <button
          onClick={() => setPage(page - 1)}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
        >
          ← Previous
        </button>
      )}
      {page < totalPages && (
        <button
          onClick={() => setPage(page + 1)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Next →
        </button>
      )}
    </div>
  );
}

export default Pagination;
