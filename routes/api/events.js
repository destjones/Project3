const router = require("express").Router();
const eventController = require("../../controllers/eventController");

// Matches with "/api/events"
router.route("/")
  .get(eventController.findAll)
  .post(eventController.create);

router.route("/:username")
  .get(eventController.getUserEvents);

router.route("/one/:eventId")
  .get(eventController.getSavedEvent);

router.route("/user")
  .post(eventController.pushToUser);

module.exports = router;