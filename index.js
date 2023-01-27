const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.send("Hello World!");
  console.log(response);
});

app.get("/date", (request, response) => {
  let present = new Date();
  response.send(`Today date is ${present}`);
});
app.get("/page", (request, response) => {
  response.sendFile("/page.html", { root: __dirname });
});
app.listen(3000);
