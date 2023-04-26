// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const cartroute = require("./routes/reviewroute");
// //Creating an express app
// const app = express();
// app.use(express.json({ limit: "100mb" }));
// app.use(express.urlencoded({ limit: "100mb", extended: true }));
// app.use(cors());

// const PORT = process.env.PORT;
// const URI = process.env.DB_URI;

// //Server and Database connection
// mongoose
//   .connect(URI, { useUnifiedTopology: true })
//   .then(() => {
//     console.log("Connection to MongoDB successful");
//     app.listen(PORT, () => {
//       console.log(`Server is running on ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });


// app.use("/", cartroute);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const reviewroute = require("./routes/reviewroute");

//Creating an express app
const app = express();
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT;
const URI = process.env.DB_URI;

//Server and Database connection
mongoose
  .connect(URI, { useUnifiedTopology: true })
  .then(() => {
    console.log("Connection to MongoDB successful");
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

// Create a new review
app.post("/review", async (req, res) => {
  const { userId, productId, review } = req.body;

  const newreview = new review({
    userId,
    productId,
    review,
  });

  try {
    const savedreview = await newreview.save();
    res.status(201).json(savedreview);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

app.use("/", reviewroute);
