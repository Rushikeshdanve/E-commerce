
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/Auth");
const productRoutes = require("./routes/Product");
const orderRoutes = require("./routes/Order");
const cartRoutes = require("./routes/Cart");
const brandRoutes = require("./routes/Brand");
const categoryRoutes = require("./routes/Category");
const userRoutes = require("./routes/User");
const addressRoutes = require("./routes/Address");
const reviewRoutes = require("./routes/Review");
const wishlistRoutes = require("./routes/Wishlist");

const { connectToDB } = require("./database/db");


// Server init
const server = express();


// Database connection
connectToDB();


// CORS
server.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
        exposedHeaders: ["X-Total-Count"],
        methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"]
    })
);


// Middlewares
server.use(express.json());
server.use(cookieParser());
server.use(morgan("tiny"));


// Routes
server.use("/auth", authRoutes);
server.use("/users", userRoutes);
server.use("/products", productRoutes);
server.use("/orders", orderRoutes);
server.use("/cart", cartRoutes);
server.use("/brands", brandRoutes);
server.use("/categories", categoryRoutes);
server.use("/address", addressRoutes);
server.use("/reviews", reviewRoutes);
server.use("/wishlist", wishlistRoutes);


// Home route
server.get("/", (req, res) => {
    res.status(200).json({
        message: "running"
    });
});


// Start server
server.listen(8000, () => {
    console.log("server [STARTED] ~ http://localhost:8000");
});


