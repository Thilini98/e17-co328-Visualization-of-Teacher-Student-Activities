const express = require("express");
const submitted_submission = require("../models/submitted_submission");
const summary_submission = require("../models/summary_submission");
const router = express.Router();


router.get("/", async (req, res) => {
    try {
        let submitted_submissions = await submitted_submission.find();
        res.status(200).json({
            status: 200,
            data: submitted_submissions,
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.get("/summary", async (req, res) => {
    try {
        let summary_submissions = await summary_submission.find();
        res.status(200).json({
            status: 200,
            data: summary_submissions,
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});


module.exports = router;