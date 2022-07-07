const r1 = ('982556390386192404')
const r2 = ('988784619522494545')
const r3 = ('982556390583304223')
const r4 = ('982556391921311794')
const r5 = ('982556391296368640')
const r6 = ('982556392730796072')
const r7 = ('982556393263472660')
const r8 = ('982729531737653289')
const r9 = ('982729532333256756')
const r10 = ('982729533121781810')

module.exports = {
	id: "colours",

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
                await interaction.reply({ content: `<a:ec_yes:990478257851858974> <@&${r1}>`, ephemeral: true })
            }
        }
        else if(choice == 'o2'){
            if (member.roles.cache.some(role => role.id == r2)) {
                interaction.reply({content: `<a:ec_no:990478311752859650> <@&${r2}>`, ephemeral: true})
                member.roles.remove(r2).catch(console.log)
            }
            else{
                member.roles.add(r2).catch(console.log)
                await interaction.reply({ content: `<a:ec_yes:990478257851858974> <@&${r2}>`, ephemeral: true })
            }
        }
        else if(choice == 'o3'){
            if (member.roles.cache.some(role => role.id == r3)) {
                interaction.reply({content: `<a:ec_no:990478311752859650> <@&${r3}>`, ephemeral: true})
                member.roles.remove(r3).catch(console.log)
            }
            else{
                member.roles.add(r3)
                await interaction.reply({ content: `<a:ec_yes:990478257851858974> <@&${r3}>`, ephemeral: true })
            }
        }
        else if(choice == 'o4'){
            if (member.roles.cache.some(role => role.id == r4)) {
                interaction.reply({content: `<a:ec_no:990478311752859650> <@&${r4}>`, ephemeral: true})
                member.roles.remove(r4).catch(console.log)
            }
            else{
                member.roles.add(r4).catch(console.log)
                await interaction.reply({ content: `<a:ec_yes:990478257851858974> <@&${r4}>`, ephemeral: true })
            }
        }
        else if(choice == 'o5'){
            if (member.roles.cache.some(role => role.id == r5)) {
                interaction.reply({content: `<a:ec_no:990478311752859650> <@&${r5}>`, ephemeral: true})
                member.roles.remove(r5).catch(console.log)
            }
            else{
                member.roles.add(r5).catch(console.log)
                await interaction.reply({ content: `<a:ec_yes:990478257851858974> <@&${r5}>`, ephemeral: true })
            }
        }
        else if(choice == 'o6'){
            if (member.roles.cache.some(role => role.id == r6)) {
                interaction.reply({content: `<a:ec_no:990478311752859650> <@&${r6}>`, ephemeral: true})
                member.roles.remove(r6).catch(console.log)
            }
            else{
                member.roles.add(r6).catch(console.log)
                await interaction.reply({ content: `<a:ec_yes:990478257851858974> <@&${r6}>`, ephemeral: true })
                }
        }
        else if(choice == 'o7'){
            if (member.roles.cache.some(role => role.id == r7)) {
                interaction.reply({content: `<a:ec_no:990478311752859650> <@&${r7}>`, ephemeral: true})
                member.roles.remove(r7).catch(console.log)
            }
            else{
                member.roles.add(r7).catch(console.log)
                await interaction.reply({ content: `<a:ec_yes:990478257851858974> <@&${r7}>`, ephemeral: true })
            }
        }
        else if(choice == 'o8'){
            if (member.roles.cache.some(role => role.id == r8)) {
                interaction.reply({content: `<a:ec_no:990478311752859650> <@&${r8}>`, ephemeral: true})
                member.roles.remove(r8).catch(console.log)
            }
            else{
                member.roles.add(r8).catch(console.log)
                await interaction.reply({ content: `<a:ec_yes:990478257851858974> <@&${r8}>`, ephemeral: true })
            }
        }
        else if(choice == 'o9'){
            if (member.roles.cache.some(role => role.id == r9)) {
                interaction.reply({content: `<a:ec_no:990478311752859650> <@&${r9}>`, ephemeral: true})
                member.roles.remove(r9).catch(console.log)
            }
            else{
                member.roles.add(r9).catch(console.log)
                await interaction.reply({ content: `<a:ec_yes:990478257851858974> <@&${r9}>`, ephemeral: true })
            }
        }
        else if(choice == 'o10'){
            if (member.roles.cache.some(role => role.id == r10)) {
                interaction.reply({content: `<a:ec_no:990478311752859650> <@&${r10}>`, ephemeral: true})
                member.roles.remove(r10).catch(console.log)
            }
            else{
                member.roles.add(r10).catch(console.log)
                await interaction.reply({ content: `<a:ec_yes:990478257851858974> <@&${r10}>`, ephemeral: true })
            }
        }
	},
};