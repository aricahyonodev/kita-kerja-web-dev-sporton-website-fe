import OrderConfirmed from "../../components/order-status/order-confirmed";
import OrderRejected from "../../components/order-status/order-rejected";
import OrderSubmitted from "../../components/order-status/order-submitted";
import { getTransactionById } from "@/app/services/transaction.service";

type TOrderStatusId = {
  params: Promise<{ id: string }>;
};

const OrderStatus = async ({ params }: TOrderStatusId) => {
   const { id } = await params;
   const transaction = await getTransactionById(id);
   console.log("transaction", transaction);

  return (
    <main className="bg-gray-100 min-h-[80vh] pb-28">
      <div className="max-w-5xl mx-auto pt-20 pb-16">
        <h1 className="text-5xl font-bold text-center mt-24">Order Status</h1>
      </div>
      {transaction.status === "pending" && <OrderSubmitted />}
      {transaction.status === "paid" && <OrderConfirmed />}
      {transaction.status === "rejected" && <OrderRejected />}
    </main>
  );
};

export default OrderStatus;
