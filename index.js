const express = require("express");

const dotenv = require("dotenv");
const mongoose = require("mongoose");


dotenv.config();

// MongoDB connection URI
const DB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8ouim.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process with a failure code
  });

