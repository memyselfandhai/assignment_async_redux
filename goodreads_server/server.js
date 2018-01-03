const config = require("./config.js");

// Set up Rollbar access using the access token stored in config
// const rollbar = require("rollbar");
// app.use(rollbar.errorHandler(config.ROLLBAR_ACCESS_TOKEN));

// server.js
// Require es6-promise polyfill and isomorphic-fetch
require("es6-promise").polyfill();
require("isomorphic-fetch");
const parseString = require("xml2js").parseString;

// Require and configure dotenv
// Then set const for our API key
require("dotenv").config();
const GOODREADS_KEY = process.env.KEY;
// const GOODREADS_SECRET = process.env.SECRET;
const baseUrl = "https://goodreads.com";

// Require express and set up app to use it
const express = require("express");
const app = express();

// Set development port to 3001
app.set("port", process.env.PORT || 3001);

// When in production, only serve static assets
// from the client/build folder
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Extract check status function for reuse
function checkStatus(response) {
  // If response not okay, throw an error
  if (!response.ok) {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

  // Otherwise just return the response
  return response;
}

// Extract fetch's json parsing function for reuse
function parseJSON(response) {
  return response.json();
}

app.get("/api/goodreads/author/:author", async (req, res, next) => {
  console.log("Requesting data from GoodReads author API...");
  try {
    let data = await fetch(
      `${baseUrl}/search/index.xml?key=${process.env.KEY}&q=${
        req.params.author
      }&search[field]=author`
    );
    data = await data.text();

    await parseString(data, (err, result) => {
      result = result.GoodreadsResponse.search;
      res.json(result);
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/goodreads/title/:title ", async (req, res, next) => {
  console.log("Requesting data from GoodReads title API...");
  try {
    let data = await fetch(
      `${baseUrl}/search/index.xml?key=${process.env.KEY}&q=${
        req.params.title
      }&search[field]=title`
    );
    data = await data.text();

    await parseString(data, (err, result) => {
      result = result.GoodreadsResponse.search;
      res.json(result);
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/goodreads/all/:searchterm", async (req, res, next) => {
  console.log("Requesting data from GoodReads author API...");
  try {
    let data = await fetch(
      `${baseUrl}/search/index.xml?key=${process.env.KEY}&q=${
        req.params.searchterm
      }&search[field]=author`
    );
    data = await data.text();

    await parseString(data, (err, result) => {
      result = result.GoodreadsResponse.search[0].results[0].work;
      res.json(result);
    });
  } catch (error) {
    console.log(error);
  }
});

// Defines next action for errors
function errorHandler(err, req, res, next) {
  console.error("Error: ", err.stack);
  res.status(err.response ? err.response.status : 500);
  res.json({ error: err.message });
}

app.use(errorHandler);

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});
