import React from "react";
import { ORDER_CLASS_TYPE } from "../share/type";

import { GoX } from "react-icons/go";

const OrderList = (props) => {
  const { data, onRemove, onUpdate } = props;
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
          onChange={(e) => onUpdate(data, +e.target.value)}
        ></input>
      </div>
      <div className={`${ORDER_CLASS_TYPE.order_list_etc}`}>
        <button className="order_list_btn" onClick={() => onRemove(data.id)}>
          <GoX size="19" fill="#fff" />
        </button>
      </div>
    </div>
  );
};

export default OrderList;
