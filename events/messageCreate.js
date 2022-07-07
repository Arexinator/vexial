const discord = require("discord.js")
const config = require("../config.json");
const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "messageCreate",
    
	run: async(message) => {
		const { client } = message
		let prefix = config.prefix
	
		let teag = new discord.MessageEmbed()
		.setColor(config.color)
		.setDescription(`Hey **${message.author}**, My prefix is: \`${prefix}\``)

		if (message.content === `<@!${client.user.id}>` || message.content === `<@${client.user.id}>`)
		return message.channel.send({ embeds: [teag] })
	
		if (!message.content.startsWith(prefix) || message.author.bot || message.channel.type === 'dm') return;
	
		const args = message.content.slice(prefix.length).trim().split(/ +/g);
		const cmda = args.shift().toLowerCase();
		let command = client.commands.get(cmda) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmda));
		if (!command) return

		const e4 = new MessageEmbed()
        .setDescription(`> <:e_dot:985270306308489356>**User**: ${message.author}\n> <:e_dot:985270306308489356>**ID**: ${message.author.id}\n> <:e_dot:985270306308489356>**Command**: ${command.name}\n> <:e_dot:985270306308489356>**Time**: <t:${Math.round((new Date()).getTime() / 1000)}:F>`)
		.setColor("#36393E")
	
		try {
			command.run(client, message, args);
		} catch (error) {
			console.error(error);
			message.reply({
				content: "There was an error trying to execute that command!",
			});
		} finally {
			client.logger.log(`ID : ${message.author.id} | User : ${message.author.tag} | command | ${command.name}`, "info");
			client.channels.cache.get("990817912229101568").send({ embeds: [e4] })
		}
	},
};