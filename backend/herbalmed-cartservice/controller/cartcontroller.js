const cartmodel = require("../models/cartmodel");

const createnewcart = async (req, res) => {
    const user_id = req.body.user_id;
    const productlist = req.body.productlist;
    const quantity = Number(req.body.quantity);
    const oneprice = Number(req.body.oneprice);
    const totalprice = (quantity * oneprice);
  
    const newcart = new cartmodel({
        user_id,
        productlist,
      quantity,
      oneprice,
      totalprice,
    });
  
    // Saving the new cart and display message
    await newcart
      .save()
      .then(() => {
        res.json("Cart Successfully Added");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Retrieving the data of single cart by passing id
const getcart = async (req, res) => {
    
    let cartID = req.params.cartID;
    console.log(cartID);
  
    await cartmodel.findById(cartID)
      .then((cart) => {
        res.json(cart);
      })
      .catch((err) => {
        console.log(err.message);
        res
          .status(500)
          .send({ status: "Error when retrieving cart details", error: err.message });
      });
  };

  // Delete cart with cart id
const deletecart = async (req, res) => {
    let cartID = req.params.cartID;
  
    // Find the cart object with id
    await cartmodel.findByIdAndDelete(cartID)
      .then(() => {
        res.status(200).send({ status: "cart deleted successfully" });
      })
      .catch((err) => {
        console.log(err.message);
        res
          .status(500)
          .send({ status: "Error when deleting the cart", error: err.message });
      });
  };
  
  const updatecart = async (req, res) => {
    let cartID = req.params.cartID;
    const { productlist, user_id, quantity, oneprice, totalprice } = req.body;
  
    const updateCart = {
      productlist,
      user_id,
      quantity,
      oneprice,
      totalprice,
    };
  
    const update = await cartmodel.findByIdAndUpdate(cartID, updatecart)
      .then(() => {
        res.status(200).send({ Status: "Cart updated Successfully", cartmodel: update });
      })
      .catch((err) => {
        res.status(500).send({ status: "Error When Updating Cart" });
      });
  };
  


  module.exports = {
    createnewcart,
    getcart,
    deletecart,
    updatecart
  };