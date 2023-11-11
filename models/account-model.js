const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const accountSchema = new Schema(
    {
        category: {
            type: String,
            enum: {
                values: ["Paycheck", "Side Hustle", "Gift"],
                require: true,
            },
        },
        amount: {
            type: Number,
            require: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Account", accountSchema);
