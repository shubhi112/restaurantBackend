const mongoose = require("mongoose");
const restaurantSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true,
        },
        ratings: {
            type: Number,
            required: true,
        },
        timeToDeliver: {
            type: String,
            required: true,
        },
        deliveryFee: {
            type: Number,
            required: true,
        },
        cuisine: {
            type: Array,
            required: true,
        },
        menu: [
            {
                name: {
                    type: String,
                    required: true,
                },
                desc: {
                    type: String,
                    required: true,
                },
                price: {
                    type: Number,
                    required: true,
                }
            }
        ],
    },
    {
        timestamps: true,
    }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;
