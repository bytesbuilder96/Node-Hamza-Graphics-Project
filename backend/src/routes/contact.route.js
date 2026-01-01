import { Router } from "express";
import { placeOrder } from "../controller/Contact.controller.js";

const connectRoute = Router();

connectRoute.post("/", placeOrder);

export { connectRoute };
