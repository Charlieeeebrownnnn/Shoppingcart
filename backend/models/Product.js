const mongoose = require("mongoose");
/* 創建schema */
const productSchema = mongoose.Schema({
  /* 我有一個標本腳做productSchema */
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("product", productSchema);
/*  */
module.exports = Product;
