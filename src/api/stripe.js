import { httpsCallable, getFunctions } from "firebase/functions";

export const createSubscription = async (data) => {
  const functions = getFunctions();
  const createStripeSubscription = httpsCallable(
    functions,
    "createStripeSubscription"
  );
  const result = await createStripeSubscription(data);
  return result?.data;
};
