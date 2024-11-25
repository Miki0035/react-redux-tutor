import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productSlice";

const ProductView = () => {
  const product = useSelector((state) => state.product);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
      <h2>List of Products</h2>
      {product.loading && <h1>Loading..</h1>}
      {!product.loading && product.error && <h2>Error {product.error}</h2>}
      {product.products.map((title) => (
        <p key={title}>{title}</p>
      ))}
    </div>
  );
};

export default ProductView;
