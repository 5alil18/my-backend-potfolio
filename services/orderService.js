const Order = require("../models/orderModel");

///////////////createOrder

const createOrder = async (data) => {
  const { name, email, subject, message } = data;
  if (!name || !email || !subject || !message) {
    throw new Error("all filed are required");
  }
  const create = await Order.create({
    name,
    email,
    subject,
    message,
  });
  return create;
};


module.exports = createOrder;
