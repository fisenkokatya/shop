function ProductCard({ id, name, images }) {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  const handleBuy = () => {
    console.log(id, name);
  };

  return (
    <div className="card">
      <img src={randomImage} alt={name} className="card-img" />
      <h3>{name}</h3>
      <button onClick={handleBuy}>Buy now</button>
    </div>
  );
}

export default ProductCard;
