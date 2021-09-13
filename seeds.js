// this file is simply for development purposes to add
// data into the database for testing purposes.
const mongoose = require("mongoose");
// requires the product element we created from
// the models.js file.
const Product = require("./models/products")

// connects to mongo database
mongoose.connect('mongodb://localhost:27017/shoppingApplication', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN")
    })
    .catch(err => {
        console.log("Oh no! Mongo Connection Error!")
        console.log(err)
});

const fakeProducts = [
    {
        name: "'Sayonara' Official Wristband",
        price: 7.99,
        category: "accessories",
        quantity: 20,
        onSale: true,
        description: "Official merchandise of the first clothing drop for 'Sayonara' apparel!",
        imageKey: "sayonara-wristband-collection-1"
    }
]

// if anything doesn't pass validation, nothing
// will be inserted.
Product.insert(fakeProducts)
.then(res => {
    console.log(res)
})
.catch(e => {
    console.log(e)
})