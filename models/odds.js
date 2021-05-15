const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const oddsSchema = new Schema({
  name: { type: String, required: true },
  selected: {type: Boolean, default: false },
  // username : [{type: Schema.Types.ObjectId, ref: 'Users' }] //trying to get user view to work
  username: {type: String}
});

const Odds = mongoose.model("Odds", OddsSchema);

module.exports = Odds;