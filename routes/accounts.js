const express = require("express");
const {
    getAccounts,
    getAccount,
    createAccount,
    deleteAccount,
    updateAccount,
} = require("../controllers/account-controller");

const router = express.Router();

// Get all accounts
router.get("/", getAccounts);

// Get a single account
router.get("/:id", getAccount);

// Post a new account
router.post("/", createAccount);

// Delete a account
router.delete("/:id", deleteAccount);

// Update a account
router.patch("/:id", updateAccount);

module.exports = router;
