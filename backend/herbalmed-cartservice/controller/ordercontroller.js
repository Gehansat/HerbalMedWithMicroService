const order = require("../models/ordermodel");

const ordercreate = async (req, res) => {
  try {
    let newOrder = new order({
      order_status: req.body.order_status,
      user_id: req.body.user_id,
      products: req.body.products,
      buyer_name: req.body.buyer_name,
      buyer_email: req.body.buyer_email,
      buyer_phone: req.body.buyer_phone,
      payment_value: req.body.payment_value,
      payment_type: req.body.payment_type,
      payment_status: req.body.payment_status,
      delivery_type: req.body.delivery_type,
      delivery_address: req.body.delivery_address,
      delivery_status: req.body.delivery_status,
    });
    let savetheorder = await newOrder.save();
    if (savetheorder) {
      return res
        .status(200)
        .json({ message: "Order created Successfully", errorMessage: "null" });
    } else {
      return res.status(400).json({ message: "Error !!!! Failed creating order" });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Error !!!! Failed creating order" });
  }
};
const gettingorderdetails = async (req, res) => {
  try {
    let detailsofOrder = await order.findById(req.params.id);
    if (detailsofOrder) {
      return res.status(200).json(detailsofOrder);
    } else {
      return res.status(400).json({ message: "Error !!!! Order not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Order not found" });
  }
};

module.exports = { 
    gettingorderdetails,
    ordercreate
};