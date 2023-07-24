import * as express from "express";
// import { Request, Response, NextFunction } from "express";
import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";
// import zlib from "zlib";
import * as compression from "compression";
dotenv.config({ path: ".env" });
import { deliveryAgentServiceRoutes } from "./routes/routes";

const app = express();
const port = process.env.PORT1 || 8003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// for routes
app.use("/delivery-agent", deliveryAgentServiceRoutes);

app.use(compression({ threshold: 0 }));
app.listen(port, () => {
  console.log(`Delivery Micro-Service is running on port ==> ${port}`);
});
