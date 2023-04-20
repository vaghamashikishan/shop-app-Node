const express = require("express");
const app = express();
const morgan = require("morgan");

const productRoutes = require("./api/routes/product");
const orderRoutes = require("./api/routes/orders");

// Third party middleware
app.use(morgan("dev"));

// express's middleware to convert incoming data to JSON
// urlencoded() middleware can convert FORM data into JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// for CORS handling
app.use((req, res, next) => {
    // we are allowing all origins to have access to our server
    res.header("Access-Control-Allow-Origin", "*");

    // we are allowing a variety of headers to be sent with the requests
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    // The next code block is for the preflight request. When the browser sees that the request is a POST, it sends a preflight request to the server to check if it is allowed to do the POST request. The server then responds with the header "Access-Control-Allow-Methods" which includes all the methods that the server allows. The browser then executes the POST request.
    if (req.method === "OPTIONS") {
        res.status(200).header("Access-Control-Allow-Methods", "PUT, POST, DELETE, PATCH");
    }
    next();
});

// Routes
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

// For error handling
app.use((req, res, next) => {
    const error = new Error("Not Found.");
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({ error: { message: error.message } });
});

module.exports = app;
