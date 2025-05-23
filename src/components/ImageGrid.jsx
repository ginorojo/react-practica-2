
//Renderiza la galería de imágenes.

function ImageGrid({ images }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.urls.small}
          alt={image.alt_description}
          className="w-full h-48 object-cover rounded-lg shadow-md"
        />
      ))}
    </div>
  );
}

export default ImageGrid;
