import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(json({ limit: "16kb" }));
app.use(urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"))
app.use(cookieParser());

// import routes

// routes declaration

export { app };
