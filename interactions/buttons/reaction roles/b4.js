const r4 = ('982925223689060382')

module.exports = {
	id: "b4",

	run: async(interaction) => {
        if (interaction.member.roles.cache.some(role => role.id == r4)) {
            interaction.reply({content: `<a:ec_no:990478311752859650> <@&${r4}>`, ephemeral: true})
            interaction.member.roles.remove(r4).catch(console.log)
        }
        else{
            interaction.member.roles.add(r4).catch(console.log)
            await interaction.reply({ content: `<a:ec_yes:990478257851858974> <@&${r4}>`, ephemeral: true })
        }
	},
};