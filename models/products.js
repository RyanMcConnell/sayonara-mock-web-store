const mongoose = require("mongoose");

// creates the product schema (format for
// how each product will look)
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String
        // We would use enum if we wanted to directly specify certain array
        // values
        // enum: ["fruit" , "vegetable" , "dairy"]
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    }, 
    onSale: {
        type: Boolean
    },
    description: {
        type: String
    },
    imageKey: {
        type: String
    }, 
    collectionGroup: {
        type: Number,
        required: true
    }
})

// initializes the product model
const Product = mongoose.model("Product" , productSchema);

// exports the module so that we can use Product
// throughout the application and directory.
module.exports = Product;