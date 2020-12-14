const fetch = require("node-fetch");

exports.handler = async function(event, context) {
  // your server-side functionality
  const api_key = process.env.GATSBY_API_KEY;
  const user_name = process.env.GATSBY_username;
  const API_ENDPOINT = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user_name}&api_key=${api_key}&format=json`;

  return fetch(API_ENDPOINT, {
    headers: {
      "Accept": "application/json",
      "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Headers": "ws.audioscrobbler.com",
    },
  })
    .then((response) => response.json())
    .then((data) => ({
      statusCode: 200,
      body: JSON.stringify({
        result: data,
      }),
    }))
    .catch((error) => ({ statusCode: 422, body: String(error) }));
};
