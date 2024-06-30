const express = require("express");
const router = express.Router();
const {
    getRestaurants,
    createRestaurant,
    getRestaurantById,
    updateRestaurant,
    deleteRestaurant,
} = require("../controllers/restaurantController");
router.route("/").get(getRestaurants);
router.route("/create").post(createRestaurant);
router
    .route("/:id")
    .get(getRestaurantById)
    .put(updateRestaurant)
    .delete(deleteRestaurant);

module.exports = router;