import * as express from "express";
import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

const app = express();
const port = process.env.PORT2 || 8004;

// use body-parser middleware to parse JSON requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// for routes
app.get("/order-food", (req, res) => {
  res.send("Order Micro-Service is running!");
});

app.listen(port, () => {
  console.log(`Order Micro-Service is running on port ==> ${port}`);
});
