const { Router } = require("express");
const { getItems } = require("../controllers/ItemController");
const router = Router();

router.get("/get", getItems);

module.exports = router;
