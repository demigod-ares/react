const express = require("express");
const router = express.Router();

const services = [
  { id: 1, name: "Service 1", description: "Desc for service 1" },
  { id: 2, name: "Service 2", description: "Desc for service 2" },
  { id: 3, name: "Service 3", description: "Desc for service 3" },
];
const bookings = [];

router.get("/services", (req, res) => {
  res.json(services || []);
});

router.get("/services/:id", (req, res) => {
  const serviceId = parseInt(req.params.id, 10);
  const service = services.find((s) => s.id === serviceId);
  if (service) {
    res.json(service);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

router.post("/bookings", (req, res) => {
  const { serviceId, date, userName } = req.body;
  if (( !serviceId || !userName || !date)) {
    res.status(400).json({ error: "missing parameters" });
  } else {
    const bookingId = Math.floor(Math.random() * 10000);
    const service = services.find((s) => s.id === serviceId);
    if (service) {
      const booking = { id: bookings.length + 1, userName, serviceId, bookingId, date };
      bookings.push(booking);
    } else {
      res.status(404).json({ error: " Service Not found" });
    }
  }
});

router.get("/bookings", (req, res) => {
  res.json(bookings || []);
});

module.exports = router;
