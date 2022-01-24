const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1/todoz");
  } catch (error) {
    console.error(error);
  }
}

module.exports = { connect };
