const express = require("express");
const {
    getBalances,
    getBalance,
    createBalance,
    deleteBalance,
    updateBalance,
} = require("../controllers/balance-controller");


const router = express.Router();

// Get all balances
router.get("/", getBalances);

// Get a single balance
router.get("/:id", getBalance);

// Post a new balance
router.post("/", createBalance);

// Delete a balance
router.delete("/:id", deleteBalance);

// Update a balance
router.patch("/:id", updateBalance);

module.exports = router;
