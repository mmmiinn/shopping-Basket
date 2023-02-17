import axios from "axios";
import React, { useEffect, useState } from "react";

import Product from "../components/Product";
import OrderContent from "../components/OrderContent";
import OrderList from "../components/OrderList";

const MainPage = () => {
  const [productData, setProductData] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/data/items.json", {
          header: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        setProductData(response.data);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  const handleProductClick = (list) => {
    const selectIndex = orders.findIndex((order) => order.id === list.id);

    if (selectIndex !== -1) return;

    const updateOrders = [...orders, { ...list, count: 1 }];
    setOrders(updateOrders);
  };

  const handleOrderChange = (list, value) => {
    const selectIndex = orders.findIndex((order) => order.id === list.id);
    const baseOrders = { ...orders, [selectIndex]: { ...list, count: value } };

    setOrders(Object.values(baseOrders));
  };

  const handleOrdersRemove = (id) => {
    const newOrders = orders.reduce((res, cur) => {
      if (id === cur.id) {
        return res;
      }
      return [...res, cur];
    }, []);

    setOrders(newOrders);
  };

  return (
    <div className="mainPage">
      <div className="product">
        <Product data={productData} onProductClick={handleProductClick} />
      </div>
      <div className="order">
        <h3 className="order_title">주문 목록</h3>
        <OrderContent />
        <div className="order_listContainer">
          {orders.length ? (
            <>
              {orders.map((order) => (
                <OrderList
                  key={order.id}
                  data={order}
                  onRemove={handleOrdersRemove}
                  onUpdate={handleOrderChange}
                />
              ))}
            </>
          ) : (
            <div className="order_empty">상품을 추가해주세요.</div>
          )}
        </div>
        <div className="order_result"></div>
      </div>
    </div>
  );
};

export default MainPage;
