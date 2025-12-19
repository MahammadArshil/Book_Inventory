const express = require("express");
const router = express.Router();
const controller = require("../controller/booksetController");

router.post("/create", controller.createBookSet);
router.get("/", controller.getBookSets);
router.put("/:id", controller.updateBookSet);
router.delete("/:id", controller.deleteBookSet);

module.exports = router;
