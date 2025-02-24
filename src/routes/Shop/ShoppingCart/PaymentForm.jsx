import toast from "react-hot-toast";

export function PaymentForm({ className }) {
  const handlePayment = (e) => {
    e.preventDefault();

    const form = e.target;
    const nameInput = form.elements.name_input.value.trim();
    const cardInput = form.elements.card_input.value;
    const expiryInput = form.elements.expiry_input.value;
    const cvvInput = form.elements.cvv_input.value;

    if (!nameInput || !cardInput || !expiryInput || !cvvInput) {
      toast.error("All fields are required");
      return;
    }

    if (!nameInput.includes(" ")) {
      toast.error("Invalid name format");
      return;
    }

    if (cardInput.length !== 19) {
      toast.error("Invalid credit card number");
      return;
    }

    if (expiryInput.length !== 5) {
      toast.error("Invalid expiry date");
      return;
    }

    if (cvvInput.length !== 3) {
      toast.error("Invalid CVV");
      return;
    }

    toast.promise(makePayment(), {
      loading: "Processing...",
      success: <b>Payment successful!</b>,
      error: <b>Could not pay.</b>,
    });
  };

  const makePayment = () => {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <div className={className}>
      <span className="block mb-5 font-medium text-2xl">Payment</span>
      <form
        onSubmit={handlePayment}
        className="gap-2 gap-x-6 grid grid-cols-2 bg-white shadow-md p-9 rounded-xl 2xl:w-[500px]"
      >
        <span className="col-span-2 font-medium">First and Last Name</span>
        <input
          type="text"
          name="name_input"
          placeholder="ivan ivanov..."
          maxLength="30"
          className="col-span-2 p-2 border focus:border-blue-500 rounded-xl placeholder:tracking-wide focus:outline-none uppercase"
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[^a-zA-Z ]/g, ""); // Remove non-letters
          }}
        />

        <span className="col-span-2 mt-2 font-medium">Credit Card Number</span>
        <input
          type="text"
          name="card_input"
          placeholder="xxxx xxxx xxxx xxxx"
          maxLength="19"
          className="col-span-2 p-2 border focus:border-blue-500 rounded-xl placeholder:tracking-[2px] focus:outline-none"
          onInput={(e) => {
            e.target.value = e.target.value
              .replace(/\D/g, "") // Remove non-digits
              .replace(/(.{4})/g, "$1 ") // Add space every 4 digits
              .trim(); // Remove trailing space
          }}
        />

        <span className="mt-2 font-medium">Expiry date </span>
        <span className="mt-2 font-medium">CVV </span>

        <input
          type="text"
          name="expiry_input"
          placeholder="mm / yy"
          maxLength="5"
          className="p-2 border focus:border-blue-500 rounded-xl placeholder:tracking-[2px] focus:outline-none"
          onInput={(e) => {
            e.target.value = e.target.value
              .replace(/[^0-9]/g, "") // Remove non-numeric characters
              .replace(/^([2-9])$/, "0$1") // Prefix single-digit months with 0 except 1
              .replace(/^([1][3-9])/, "12") // Limit months to 01-12
              .replace(/(\d{2})(\d{2})/, "$1/$2"); // Add slash after the first 2 digits
          }}
        />
        <input
          type="text"
          name="cvv_input"
          placeholder="xxx"
          maxLength="3"
          className="p-2 border focus:border-blue-500 rounded-xl placeholder:tracking-[2px] focus:outline-none"
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
          }}
        />

        <button className="col-span-2 bg-blue-600 hover:bg-blue-700 mt-6 p-4 rounded-xl font-medium text-white text-xl">
          Make payment
        </button>
      </form>
    </div>
  );
}
