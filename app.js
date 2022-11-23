const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  const today = new Date();
  const days = addDays(
    new Date(today.getFullYear(), today.getMonth(), today.getDate()),
    100
  );
  response.send(
    `${days.getDate()}/${days.getMonth() + 1}/${days.getFullYear()}`
  );
});

module.exports = app;
