import React, { useState } from "react";

import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const CheckoutForm = ({ onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);

  const handlePayment = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      // Show error to your customer
      setErrorMessage(submitError.message);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
      // alert("I AM HERE");
      onSuccess();
    }
  };



  return (
      <PaymentElement onChange={(e) => console.log(e) } />
  );
};

export default CheckoutForm;
