module.exports = {

	async execute(interaction) {
		await interaction.reply({
			content: "There was an issue while fetching this select menu option! Please contact support <#982941079169024000>",
			ephemeral: true,
		});
		return;
	},
};