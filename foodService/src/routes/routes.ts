import * as express from "express";
const router = express.Router();

// import { reservedDeliveryAgent } from "../controller/deliveryServiceController";

router.get("/", (req: express.Request, res: express.Response) => {
  return res.status(200).json({ msg: "Food Order Microservices is running!" });
});
// router.post("/reserved-agent", reservedDeliveryAgent);
export const foodOrderServiceRoutes = router;
