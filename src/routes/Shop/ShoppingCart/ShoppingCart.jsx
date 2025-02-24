import { AdditionalService } from "./AdditionalService";
import { Delivery } from "./Delivery";
import { Order } from "./Order";
import { PaymentForm } from "./PaymentForm";
import { PaymentSummary } from "./PaymentSummary";

export function ShoppingCart() {
  // const [selectedServices, setSelectedServices] = useState({
  //   care_package: 0,
  //   environment_friendly: 0,
  //   golden_guard: 0,
  // });

  return (
    <section>
      <h2 className="bg-clip-text bg-gradient-to-b from-teal-300 to-teal-600 mb-10 w-full font-bold text-transparent text-4xl text-center">
        Your cart:
      </h2>
      <div className="gap-16 grid grid-cols-1 2xl:grid-cols-[2fr_1fr] m-auto w-[95%] md:w-8/12 2xl:w-[1268px]">
        <Order />
        <PaymentSummary className="order-4 2xl:order-2" />
        <Delivery className="order-3 2xl:order-3" />
        <AdditionalService className="order-2 2xl:order-4" />
        <PaymentForm className="order-5 2xl:order-5" />
      </div>
    </section>
  );
}
