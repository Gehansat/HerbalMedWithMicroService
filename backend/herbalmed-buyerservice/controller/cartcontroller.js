const Cart = require("../models/cartmodel");


const updatecart = async (req, res) => {
  var cart = await Cart.findOne({ user_id: req.user._id });
  if (!cart) {
    Cart = new Cart({
      user_id: req.body._id,
      products: req.body.products,
      total_price: req.body.total_price,
    });
  } else {
    cart.products = req.body.products;
    cart.total_price = req.body.total_price;
  }
  await cart.save();
  res.json(cart);
};


const getcart = async (req, res) => {
  try {
    var cart = await Cart.findOne({ user_id: req.user._id });
    // if the cart exist and if the cart has products, get the products rom the cart
    if (cart && cart.products.length > 0) {
      for (var index = 0; index < cart.products.length; index++) {
        try {
          // add all the product data
          cart.products[index].data = await Product.findById(
            cart.products[index].id
          );
        } catch (error) {
          console.log(error);
        }
      }
    }
    return res.status(200).json(cart ? cart : {});
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "User cart not found" });
  }
};

module.exports = { updatecart, getcart };
