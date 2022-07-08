const fs = require("fs");
const { Client, Collection } = require("discord.js");
const { token } = require("./config.json");

const client = new Client({
    intents: 32767,
    presence: { status: "dnd" },
    allowedMentions: {
        repliedUser: true,
        parse: ["users", "roles"]
    },
});

// Event Handler

const eventFiles = fs
	.readdirSync("./events")
	.filter((file) => file.endsWith(".js"));

	for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.run(...args, client));
	} else {
		client.on(
			event.name,
			async (...args) => await event.run(...args, client)
		);
	}
}

client.commands = new Collection();
client.slashCommands = new Collection();
client.buttonCommands = new Collection();
client.selectCommands = new Collection();
client.logger = require("./utils/logger")

// Registration of Message-Based Legacy Commands.

const commandFolders = fs.readdirSync("./commands");

for (const folder of commandFolders) {
	const commandFiles = fs
		.readdirSync(`./commands/${folder}`)
		.filter((file) => file.endsWith(".js"));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
		client.logger.log(`Loaded ${command.name} from the ${command.category} category`, "cmd")
	}
}

// Registration of Button-Command Interactions.

const buttonCommands = fs.readdirSync("./interactions/buttons");

for (const module of buttonCommands) {
	const commandFiles = fs
		.readdirSync(`./interactions/buttons/${module}`)
		.filter((file) => file.endsWith(".js"));

	for (const commandFile of commandFiles) {
		const command = require(`./interactions/buttons/${module}/${commandFile}`);
		client.buttonCommands.set(command.id, command);
		client.logger.log(`Loaded ${command.id}`, "button")
	}
}

// Registration of select-menus Interactions

const selectMenus = fs.readdirSync("./interactions/select-menus");

for (const module of selectMenus) {
	const commandFiles = fs
		.readdirSync(`./interactions/select-menus/${module}`)
		.filter((file) => file.endsWith(".js"));
	for (const commandFile of commandFiles) {
		const command = require(`./interactions/select-menus/${module}/${commandFile}`);
		client.selectCommands.set(command.id, command);
		client.logger.log(`Loaded ${command.id}`, "menu")
	}
}

client.login(token);