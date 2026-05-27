const express = require("express");
const router = express.Router();
const {
  getSimulations,
  createSimulation,
  updateSimulation,
  deleteSimulation
} = require(
  "../controllers/simulationController"
);
router.get(
  "/",
  getSimulations
);
router.post(
  "/",
  createSimulation
);
router.put(
  "/:id",
  updateSimulation
);
router.delete(
  "/:id",
  deleteSimulation
);
module.exports = router;