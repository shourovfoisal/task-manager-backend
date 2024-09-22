import dotenv from "dotenv";
import type { Express, RequestHandler } from "express";
import express from "express";
import jwt from "jsonwebtoken";

dotenv.config();

const app: Express = express();

const auth: RequestHandler = (req, res, next) => {
  const token = req.headers["authorization"];
  const JwtSecret = process.env.JWT_SECRET;

  if (!JwtSecret) {
    return res.status(503).send("Could not verify");
  }
  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  try {
    const parsedValue = jwt.verify(token, JwtSecret);
    req.user = parsedValue;
    next();
  } catch (error) {
    return res.status(400).send("Invalid token");
  }
};

app.get("/api/protected", auth, (req, res) => {
  res.send("This is the protected route");
});

const port = process.env.PORT ?? 3000;
app.listen(port, () => {
  console.log("Server started");
});
