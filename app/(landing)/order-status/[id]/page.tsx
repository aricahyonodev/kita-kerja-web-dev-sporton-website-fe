"use client";

import { useState } from "react";
import OrderConfirmed from "../../components/order-status/order-confirmed";
import OrderSubmitted from "../../components/order-status/order-submitted";

const OrderStatus = () => {
  const [isConfirmed, setIsConfirmed] = useState(true);

  return (
    <main className="bg-gray-100 min-h-[80vh] pb-28">
      <div className="max-w-5xl mx-auto pt-20 pb-16">
        <h1 className="text-5xl font-bold text-center ">Order Status</h1>
      </div>
      {isConfirmed ? <OrderConfirmed /> : <OrderSubmitted />}
    </main>
  );
};

export default OrderStatus;
