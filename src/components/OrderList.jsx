import React from "react";
import { ORDER_CLASS_TYPE } from "../share/type";

import { GoX } from "react-icons/go";

const OrderList = (props) => {
  const { data } = props;
  return (
    <div className={`${ORDER_CLASS_TYPE.order_list}`}>
      <div className={`${ORDER_CLASS_TYPE.order_list_name}`}>{data.name}</div>
      <div className={`${ORDER_CLASS_TYPE.order_list_unitName}`}>
        {data.unitName}
      </div>
      <div className={`${ORDER_CLASS_TYPE.order_list_unitPrice}`}>
        {data.unitPrice}
      </div>
      <div className={`${ORDER_CLASS_TYPE.order_list_count}`}>
        <input
          className="order_list_count_input"
          type="number"
          value={data.count}
        ></input>
      </div>
      <div className={`${ORDER_CLASS_TYPE.order_list_etc}`}>
        <button className="order_list_btn">
          <GoX size="19" fill="#fff" />
        </button>
      </div>
    </div>
  );
};

export default OrderList;
