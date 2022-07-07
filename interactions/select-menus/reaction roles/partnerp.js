const r1 = ('982922698508341278')
const r2 = ('982922699212984340')

module.exports = {
	id: "partnerp",

	run: async(interaction) => {
        let choice = interaction.values[0] 
        const member = interaction.member
        if(choice == 'o1'){
            if (member.roles.cache.some(role => role.id == r1)) {
                interaction.reply({content: `<a:ec_no:990478311752859650> <@&${r1}>` , ephemeral: true})
                member.roles.remove(r1).catch(console.log)
            }
            else{
                member.roles.add(r1).catch(console.log)
                await interaction.reply({ content: `<a:ec_yes:990478257851858974> <@&${r1}>`, ephemeral: true })}
            }
            else if(choice == 'o2'){
                if (member.roles.cache.some(role => role.id == r2)) {
                    interaction.reply({content: `<a:ec_no:990478311752859650> <@&${r2}>`, ephemeral: true})
                    member.roles.remove(r2).catch(console.log)
                }
                else{
                    member.roles.add(r2).catch(console.log)
                    await interaction.reply({ content: `<a:ec_yes:990478257851858974> <@&${r2}>`, ephemeral: true })}
                }
	},
};