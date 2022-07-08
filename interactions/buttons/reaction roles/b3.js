const r3 = ('982925223114469396')

module.exports = {
	id: "b3",

	run: async(interaction) => {
        if (interaction.member.roles.cache.some(role => role.id == r3)) {
            interaction.reply({content: `<a:ec_no:990478311752859650> <@&${r3}>`, ephemeral: true})
            interaction.member.roles.remove(r3).catch(console.log)
        }
        else{
            interaction.member.roles.add(r3).catch(console.log)
            await interaction.reply({ content: `<a:ec_yes:990478257851858974> <@&${r3}>`, ephemeral: true })
        }
	},
};