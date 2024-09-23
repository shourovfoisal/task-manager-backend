import { RequestHandler } from "express";

export const logger: RequestHandler = (req, res, next) => {
  console.log("🚀 ~ logger.ts ~ request url:", req.originalUrl);
  next();
};
