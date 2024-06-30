const asyncHandler = require("express-async-handler");
const Restaurant = require("../models/restaurantModel");

const getRestaurants = asyncHandler(async (req, res) => {
    const restaurants = await Restaurant.find()
    res.json(restaurants);
});

const getRestaurantById = asyncHandler(async (req, res) => {
    const restaurant = await Restaurant.findById(req.params.id);

    if (restaurant) {
        res.json(restaurant);
    } else {
        res.status(400);
        throw new Error("Restaurant not found");
    }
});

const createRestaurant = asyncHandler(async (req, res) => {
    const restaurant = req.body;
    if (!restaurant) {
        res.status(400);
        throw new Error("Please fill all the fields");
    } else {
        const restaurant = new Restaurant(req.body);
        const createdRestaurant = await restaurant.save();
        res.status(201).json(createdRestaurant);
    }
});

const updateRestaurant = asyncHandler(async (req, res) => {
    const { name, desc, location, ratings, timeToDeliver, deliveryFee, cuisine, menu } = req.body;

    const restaurant = await Restaurant.findById(req.params.id);

    if (restaurant) {
        restaurant.name = name;
        restaurant.desc = desc;
        restaurant.location = location;
        restaurant.ratings = ratings;
        restaurant.timeToDeliver = timeToDeliver;
        restaurant.deliveryFee = deliveryFee;
        restaurant.cuisine = cuisine;
        restaurant.menu = menu;
        const updatedRestaurant = await restaurant.save();
        res.json(updatedRestaurant);
    } else {
        res.status(404);
        throw new Error("Restaurant not found");
    }
});
const deleteRestaurant = asyncHandler(async (req, res) => {
    const restaurant = await Restaurant.findById(req.params.id);

    if (restaurant) {
        await restaurant.deleteOne({});
        res.json({ message: "Restaurant removed successfully" });
    } else {
        res.status(404);
        throw new Error("Restaurant not found");
    }
});
module.exports = { getRestaurants, createRestaurant, getRestaurantById, updateRestaurant, deleteRestaurant };
