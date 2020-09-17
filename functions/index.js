const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51HS0S4Lae8dODZwu0KhaE0sfwmCofDEspFStykKnqo5xEvgeIUXx7etgsrBGtOqgOwkStVrNm8WKMFqflbzs3lbX00tEDeyaAB'
);

// app confing
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// api routes
app.get('/', (req, res) => res.status(200).send('hello world'));
app.post('/payments/create', async (req, res) => {
  const total = req.query.total;

  console.log('payment request recieved!!! for this amount >>>', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd'
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret
  });
});

// listen command
exports.api = functions.https.onRequest(app);

//example endpoint -> http://localhost:5001/clone-60d22/us-central1/api
