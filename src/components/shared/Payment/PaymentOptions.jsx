import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "components/shared/Payment/CheckoutForm";
import { createSubscription } from "api/stripe.js";
import { updateCurrentUser } from "api/auth";

const STRIPE_PUBLISHABLE_KEY = "pk_test_51PPeLCGqrPXMTFdhleIoJQ9QjiR0iRQgZKvIyOHCpehmRK8kWiHNhTcW05NPtCwXxT7f2oZLPd9Zj48JyO9snBNx001eZUGZ6f"
const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

const PaymentOptions = ({ currentUser, psychologistId }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const options = {
    clientSecret,
  };

  const onSuccess = async () => {
    const updates = {
      payments: {
        ...currentUser.payments,
        [psychologistId]: true,
      },
    };
    updateCurrentUser(currentUser.uid, updates).then(() => window.location.reload());
  };

  useEffect(
    () => {
      (async () => {
        try {
          const data = {
            email: currentUser.email,
            name: currentUser.displayName,
            priceId: "price_1PPq5bGqrPXMTFdhvgSEObra",
            quantity: 1,
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
    [currentUser?.email]
  );

  return (
    <div>
      <>
        {clientSecret ? (
          <Elements stripe={stripePromise} options={options} key={clientSecret}>
            <CheckoutForm onSuccess={onSuccess} />
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
