import axios from "axios";
import React, { useEffect, useState } from "react";

import Product from "../components/Product";
import OrderContent from "../components/OrderContent";
import OrderList from "../components/OrderList";

const MainPage = () => {
  const [productData, setProductData] = useState([]);
  const [orders, setOrders] = useState([]);
  console.log(orders);
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
    //const selectIndex = orders.findIndex((order) => order.id === list.id);
    const newOrders = [...orders, { ...list, count: 1 }];
    newOrders.sort((a, b) => a.id - b.id);
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
                <OrderList key={order.id} data={order} />
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
