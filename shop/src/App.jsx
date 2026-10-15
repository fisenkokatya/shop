import ProductCard from "./ProductCard";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import "./App.css";

const images = [img1, img2, img3, img4];

const products = [
  { id: 1, name: "iPhone 12" },
  { id: 2, name: "Наушники" },
  { id: 3, name: "Клавиатура" },
  { id: 4, name: "Монитор" },
];

function App() {
  return (
    <div className="shop">
      <h1>Интернет-магазин</h1>
      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            images={images}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
