const createOrder = require("../services/orderService");
const transporter = require("../config/mailer");

/////////////// createOrderClient

const createOrderConroller = async (req, res) => {
  try {
    const create = await createOrder(req.body);
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New message: ${create.subject}`,
      text: `
            Name: ${create.name}
            Email: ${create.email}
            Subject: ${create.subject}
            Message:
            ${create.message} `,
    });
    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: create,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = createOrderConroller;
