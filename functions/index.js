const functions = require("firebase-functions");

// TODO: mv to variable
const STRIPE_SECRET_KEY =
  process.env.STRIPE_SECRET_KEY ||
  "sk_test_51PPeLCGqrPXMTFdhQ11oEFZgYhkWWpCE4NjojJQe1NCEomllkt8DoRCfQiCAeZCviSoYISXckRm4YmCDi6tZiGKO00LZjB97gJ";
const stripe = require("stripe")(STRIPE_SECRET_KEY);

const getCustomer = async (email, name) => {
  const searchRes = await stripe.customers.search({
    query: `email:'${email}'`,
  });

  const customers = searchRes.data;
  if (customers && customers.length > 0) {
    functions.logger.log("-----customer get--------- " + customers[0].id);
    return customers[0];
  }

  // create a stripe customer
  const customer = await stripe.customers.create({
    name: name,
    email: email,
  });

  functions.logger.log(
    "-----customer created--------- " + customer.id + " - 1 -  " + customer
  );
  return customer;
};

const createSubscription = async (data) => {
  const { email, name, priceId, quantity: itemsCount } = data;
  const quantity = itemsCount || 1;
  functions.logger.log(
    "============ START ===========: createSubscription: " + priceId
  );
  const customer = await getCustomer(email.trim(), name.trim());
  if (!customer) {
    return null;
  }

  // TODO: add update subscriptions when only quantity is changed or customer has muching subsciption
  const subscription = await stripe.subscriptions.create({
    customer: customer.id,
    items: [
      {
        price: priceId,
        quantity,
      },
    ],
    payment_behavior: "default_incomplete",
    payment_settings: {
      save_default_payment_method: "on_subscription",
      payment_method_types: ["card"],
    },
    expand: ["latest_invoice.payment_intent"],
  });

  // functions.logger.log(
  //   "============ END ===========: createSubscription: " +
  //     subscription.latest_invoice.payment_intent.client_secret
  // );

  functions.logger.log(
    "============ subscription ===========: createSubscription: ",
      subscription
  );
  return {
    clientSecret: subscription.latest_invoice.payment_intent.client_secret,
    data: {
      id: subscription.id,
      object: subscription.object,
    },
  };
};

exports.createStripeSubscription = functions.https.onCall(async (data) => {
  const result = await createSubscription(data);
  if (result) {
    return { success: true, data: result };
  }
  return {
    success: false,
    data: {
      message: `Failed to create customer with ${data.email} email and ${data.name} name`,
    },
  };
});
