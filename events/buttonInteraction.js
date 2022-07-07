module.exports = {
	name: "interactionCreate",

	run: async(interaction) => {
		const { client } = interaction;

		if (!interaction.isButton()) return;

		const command = client.buttonCommands.get(interaction.customId);

		if (!command) {
			await require("../messages/defaultButtonError").execute(interaction);
			return;
		}

		try {
			await command.execute(interaction);
			return;
		} catch (err) {
			console.error(err);
			await interaction.reply({
				content: "There was an issue while executing that button! Please contact support <#982941079169024000>",
				ephemeral: true,
			});
			return;
		} finally {
			client.logger.log(`ID : ${interaction.member.id} | User : ${interaction.member.tag} | buttons | ${command.name}`, "info");
		}
	},
};