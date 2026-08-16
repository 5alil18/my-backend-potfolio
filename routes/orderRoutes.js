const express = require("express");
const router = express.Router();

const createOrderController = require("../controllers/orderController");

/////////////// createOrderClient

router.post("/", createOrderController);

module.exports = router;
