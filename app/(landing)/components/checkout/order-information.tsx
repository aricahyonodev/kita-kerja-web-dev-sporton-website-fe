import { CustomerInfo } from "@/app/hooks/use-cart-store";
import CardWithHeader from "../ui/card-with-header";

type TOrderInformation = {
  formData: CustomerInfo;
  setFormData: React.Dispatch<React.SetStateAction<CustomerInfo>>;
};

const OrderInformation = ({ formData, setFormData }: TOrderInformation) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <CardWithHeader title="Order Information">
      <div className="p-5">
        <div className="input-group">
          <label htmlFor="full_name">Full Name</label>
          <input
            type="text"
            placeholder="Type your full name"
            id="full_name"
            name="customerName"
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="wa_number">Whatsapp Number</label>
          <input
            type="text"
            placeholder="Type your whatsapp number"
            id="wa_number"
            name="customerContact"
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="shipping_address">Shipping Address</label>
          <textarea
            placeholder="Type your shipping address"
            name="customerAddress"
            id="shipping_address"
            rows={7}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </CardWithHeader>
  );
};

export default OrderInformation;
