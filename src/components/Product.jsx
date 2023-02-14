import React from "react";

const Product = (props) => {
  const { data, onProductClick } = props;
  return (
    <>
      {data &&
        data.map((list) => (
          <React.Fragment key={list.id}>
            <button
              className="product_item"
              onClick={() => onProductClick(list)}
            >
              {list.name}
            </button>
          </React.Fragment>
        ))}
    </>
  );
};

export default Product;
