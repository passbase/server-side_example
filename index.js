const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();
const port = 5000;
const {
  PassbaseClient,
  PassbaseConfiguration,
  ResponseFormats,
} = require("@passbase/node");

app.use(bodyParser.json());
app.use(cors());

const apiKey = "SECRET_API_KEY";

// call the Passbase API getIdentity endpoint with Passbase Node.js server-side library
const config = new PassbaseConfiguration({
  apiKey,
  format: ResponseFormats.Json,
});

const callPassbaseAPI = async (identityAccessKey) => {
  const client = new PassbaseClient(config);

  const identity = await client.getIdentityById(identityAccessKey);
  console.log("IDENTITY INFO HERE: ", identity);
  console.log(identity.resources)
  
};

// call the Passbase API getIdentity endpoint with Axios
// const callWithAxios = (id) => {
//     var config = {
//         method: 'get',
//         url: `https://api.passbase.com/verification/v1/identities/${id}`,
//         headers: {
//             'X-API-KEY': apiKey
//         }
//     };
//     return new Promise((resolve, reject) => {
//         axios(config)
//             .then((response) => {
//                 resolve(response.data)
//             })
//             .catch((error) => {
//                 console.log(error);
//                 reject(error)
//             });
//     });
// }

// Receive Passbase webhook events
app.post("/passbase-webhooks", async (req, res) => {
  const webhook = req.body;

  switch (webhook.event) {
    case "VERIFICATION_REVIEWED":
      console.log("VERIFICATION_REVIEWED");
      callPassbaseAPI(webhook.key);
      break;
    case "IDENTITY_AUTHENTICATED":
      console.log("IDENTITY_AUTHENTICATED");
      callPassbaseAPI(webhook.key);
      break;
    case "VERIFICATION_COMPLETED":
      console.log("VERIFICATION_COMPLETED");
      callPassbaseAPI(webhook.key);
      break;
    default:
      console.log("Couldn't process webhook event");
  }
  res.status(200).send("Success");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
