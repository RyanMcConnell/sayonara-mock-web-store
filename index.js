
// THIS APPLICATION WILL BE A SHOPPING APPLICATION FOR
// BUYING MERCHANDISE FOR SAYONARA

// express
const express = require("express");

// express
const app = express();

// fixed pathing
const path = require("path");

// mongoose
const mongoose = require("mongoose");

// requires the product element we created from
// the models.js file.
const Product = require("./models/products")

// used for fixing the problem of not allowing put/patch
// requests. Using this, now we can like you'll see below
// for updating our products.
const methodOverride = require("method-override")

// connects to mongo database
mongoose.connect('mongodb://localhost:27017/shoppingApplication', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN")
    })
    .catch (err => {
        console.log("Oh no! Mongo Connection Error!")
        console.log(err)
});

// sets the path for the views path
app.set("views" , path.join(__dirname, "views"));
app.set("view engine" , "ejs");

// initiates static files
app.use(express.static(__dirname + '/public'));

// this is a middleware usually required with express that parses 
// incoming requests. 
app.use(express.urlencoded({extended: true}));

// used for fixing the problem of not allowing put/patch
// requests. Using this, now we can like you'll see below
// for updating our products.
app.use(methodOverride("_method"))

// opens the server on port 3000
app.listen(3000 , () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})

// home route
app.get("/" , async (req, res) => {
    const allProducts = await Product.find({});
    console.log("It worked! Sent to /home");
    res.render("home" , { allProducts });
})

// shop route
app.get("/shop" , async (req, res) => {
    const allProducts = await Product.find({});
    console.log("It worked! Sent to /shop");
    res.render("shop" , { allProducts });
})

// item route 
app.get("/shop/item/:id" , async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    // TESTING PURPOSES
    console.log(`Name: ${product.name}`)
    console.log(`ID: ${product.id}`);
    console.log(`Onsale: ${product.onSale}`)
    console.log(`imageKey: ${product.imageKey}`)
    console.log("It worked! Sent to /item")
    res.render("item" , { product })
})