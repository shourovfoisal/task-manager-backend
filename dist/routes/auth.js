import express from "express";
export const router = express.Router();
router.get("/login", (req, res) => {
    res.json({ user: "pass" });
});
