import React, { useEffect } from "react";
import { fetchProducts } from "./redux";
// import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

// const mapStateToProps = (state) => {
//   return {
//     products: state.product,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchProducts: () => dispatch(fetchProducts()),
//   };
// };
const ProductContainer = () => {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      {products.loading && <p>Loadding...</p>}
      {products.error && <p>{products.error}</p>}
      {products.products.length > 0 && (
        <p>
          {products.products.map((title) => (
            <p key={title}>{title}</p>
          ))}
        </p>
      )}
    </div>
  );
};
export default ProductContainer;
// export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
