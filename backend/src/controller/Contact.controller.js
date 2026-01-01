import { order } from "../model/Contact.js";
import { sendEmail } from "../utils/sendEmail.util.js";

export const placeOrder = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    console.log("REQ BODY 👉", req.body);

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields required" });
    }

    // 1️⃣ Save to MongoDB
    const contact = await order.create({
      name,
      email,
      subject,
      message,
    });

    // 2️⃣ Send email to ADMIN
    await sendEmail({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: contact,
    });
  } catch (error) {
    console.error("CONTACT ERROR ❌", error);
    res.status(500).json({ message: "Message not sent" });
  }
};
