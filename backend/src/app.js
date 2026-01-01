import express from "express";
import cors from "cors";
import morgan from "morgan";
import { connectRoute } from "./routes/contact.route.js";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));

app.use("/api/contact", connectRoute);

export { app };
