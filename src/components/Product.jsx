import React from "react";

const Product = (props) => {
  const { data, onProductClick } = props;
  return (
    <>
      {data &&
        data.map((item) => (
          <React.Fragment key={item.id}>
            <button
              className="product_item product_check"
              onClick={() => onProductClick(item)}
            >
              {item.name}
            </button>
          </React.Fragment>
        ))}
    </>
  );
};

export default Product;
