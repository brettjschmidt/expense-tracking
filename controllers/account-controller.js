const Account = require("../models/account-model");
const mongoose = require("mongoose");

// Get all accounts
const getAccounts = async (req, res) => {
    const accounts = await Account.find({}).sort({ createdAt: -1 });

    res.status(200).json(accounts);
};

// Get a single account
const getAccount = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no account" });
    }

    const account = await Account.findById(id);

    if (!account) {
        return res.status(404).json({ error: "No account" });
    }

    res.status(200).json(account);
};

// Create a new account
const createAccount = async (req, res) => {
    const { category, amount } = req.body;

    let emptyFields = []

    if(!category) {
        emptyFields.push("category")
    }
    if(!amount) {
        emptyFields.push("amount")
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: "Please fill in all fields", emptyFields })
    }

    try {
        const account = await Account.create({ category, amount });
        res.status(200).json(account);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete an account
const deleteAccount = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no account" });
    }

    const account = await Account.findOneAndDelete({ _id: id });

    if (!account) {
        return res.status(404).json({ error: "Can't delete account" });
    }

    res.status(200).json(account);
};

// update an account
const updateAccount = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        returnres.status(404).json({ error: "Sorry can't find account" });
    }

    const account = await Account.findOneAndUpdate(
        { _id: id },
        { ...req.body }
    );

    if (!account) {
        return res.status(400).json({ error: "No such account" });
    }

    res.status(200).json(account);
};

module.exports = {
    getAccounts,
    getAccount,
    createAccount,
    deleteAccount,
    updateAccount,
};
