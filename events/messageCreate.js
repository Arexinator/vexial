const discord = require("discord.js");
const settings = require("../settings.json");

module.exports = async (client, message) => {
    
    let prefix = settings.prefix;

    let teag = new discord.MessageEmbed()
        .setColor(settings.color)
        .setDescription(`👋 | Hey **${message.author}**, My prefix for this guild is: \`${prefix}\``)
    if (message.content === `<@!${client.user.id}>` || message.content === `<@${client.user.id}>`)
    return message.channel.send({ embeds: [teag] })

    if (!message.content.startsWith(prefix) || message.author.bot || message.channel.type === 'dm') return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmda = args.shift().toLowerCase();
    let command = client.commands.get(cmda) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmda));
    if (!command) return;

    if (!client.cooldowns.has(command.name)) {
        client.cooldowns.set(command.name, new discord.Collection());
    }

    let now = Date.now();
    let timeStamp = client.cooldowns.get(command.name) || new Collection();

    timeStamp.set(message.author.id, now);
    client.cooldowns.set(command.name, timeStamp);
    try {
        command.run(client, message, args)
    } catch (error) {
        client.logger.log(error, "error");
        message.reply({ content: `there was an error trying to execute that command!` });
    } finally {
        client.logger.log(`> ID : ${message.author.id} | User : ${message.author.tag} | command | ${command.name}`, "info");
    }
};