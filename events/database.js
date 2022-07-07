const mongoose = require("mongoose")
const config = require("../config.json")
const chalk = require("chalk")

module.exports = {
	name: "ready",
	once: true,

	run: async(client) => {
        await mongoose.connect(config.mongooseConnectionString).catch(console.log)

        client.logger.log(`Loaded Mongo DB`, "success")
	},
};