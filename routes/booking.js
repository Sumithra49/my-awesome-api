const express = require("express");

const bookRouter = express.Router();
const Booking = require("../models/Booking");

const eventRouter = express.Router();
const { Event } = require("../models/ Event");

bookRouter.get("/", (req, res) => {
  res.send("this is book router");
});

bookRouter.post("/", async (req, res) => {
  const { userId, eventId, tickets } = req.body;
  try {
    const booking = await Booking.create({ userId, eventId, tickets });
    return res.send(201).json({ mes: "booking created" });
  } catch (err) {
    return res.status(500).json({ mes: "booking not created" });
  }
});
module.exports = bookRouter;
