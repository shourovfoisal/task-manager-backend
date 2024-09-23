export const logger = (req, res, next) => {
    console.log("🚀 ~ logger.ts ~ request url:", req.originalUrl);
    next();
};
