import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "components/shared/Payment/CheckoutForm";
import { createSubscription } from "api/stripe.js";

const STRIPE_PUBLISHABLE_KEY = "pk_test_51PPeLCGqrPXMTFdhleIoJQ9QjiR0iRQgZKvIyOHCpehmRK8kWiHNhTcW05NPtCwXxT7f2oZLPd9Zj48JyO9snBNx001eZUGZ6f"
const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

const PaymentOptions = ({ newUser, onClose }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const options = {
    clientSecret,
  };

  const onPurchaseOrderClick = async () => {
    // const updates = {
    //   payment: {
    //     ...newUser.payment,
    //     quantity: Number(newUser.payment.quantity),
    //   },
    // };
    // updateCurrentUser(updates);
    onClose();
  };

  useEffect(
    () => {
      (async () => {
        try {
          const data = {
            email: newUser.email,
            name: newUser.displayName,
            priceId: newUser.payment.plan,
            quantity: newUser.payment.quantity,
          };

          const subscription = await createSubscription(data);
          setClientSecret(subscription.data?.clientSecret);
          setErrorMessage(
            subscription.success
              ? null
              : "Secret key not generated. Please try again."
          );

          // TODO: Delete me
          console.log("Payment subscription ======>", subscription);
        } catch (err) {
          console.log(err);
          setClientSecret(null);
          setErrorMessage('');
        }
      })();
    },
    // eslint-disable-next-line
    [newUser?.email]
  );

  return (
    <div>
      <>
        {clientSecret ? (
          <Elements stripe={stripePromise} options={options} key={clientSecret}>
            <CheckoutForm onSuccess={onPurchaseOrderClick} />
          </Elements>
        ) : (
          <>
            {!!errorMessage && (
              <div>{errorMessage}</div>
            )}
          </>
        )}
      </>
    </div>
  );
};

export default PaymentOptions;
