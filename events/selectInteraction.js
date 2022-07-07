module.exports = {
	name: "interactionCreate",

	run: async(interaction) => {
		const { client } = interaction;

		if (!interaction.isSelectMenu()) return;

		const command = client.selectCommands.get(interaction.customId);

		if (!command) {
			await require("../messages/defaultSelectError").execute(interaction);
			return;
		}

		try {
			await command.run(interaction);
			return;
		} catch (err) {
			console.error(err);
			await interaction.reply({
				content: "There was an issue while executing that select menu option! Please contact support <#982941079169024000>",
				ephemeral: true,
			});
			return;
		} finally {
			client.logger.log(`ID : ${interaction.member.id} | User : ${interaction.member.tag} | menu | ${command.name}`, "info");
		}
	},
};