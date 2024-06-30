const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();
const cors = require("cors");
const restaurantRoutes = require("./routes/restaurantRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
dotenv.config();
connectDB();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.send("API is running..");
});

app.use("/api/restaurants", restaurantRoutes);

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT);
