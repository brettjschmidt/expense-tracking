const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const balanceSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },

        category: {
            type: String,
            enum: {
                values: [
                    "Cell Phone",
                    "Emergency Funds",
                    "Entertainment",
                    "Food/Groceries",
                    "Personal Grooming",
                    "Housing/Rent",
                    "Insurance",
                    "Miscellaneous",
                    "School",
                    "Subscriptions",
                    "Transportation",
                    "Utility Bills",
                ],
                required: true,
                // message: "value is not supported",
            },
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Balance", balanceSchema);
