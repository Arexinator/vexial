const discord = require("discord.js");
const settings = require("./settings.json");

const client = new discord.Client({
  intents: 32767,
  presence: { status: "dnd" },
  allowedMentions: {
      repliedUser: true,
      parse: ["users", "roles"]
  },
});

client.commands = new discord.Collection();
client.aliases = new discord.Collection();
client.cooldowns = new discord.Collection();
client.logger = require('./utils/logger.js');

["commands", "events"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on('error', error => client.logger.log(error, "error"));
client.on('warn', info => client.logger.log(info, "warn"));
process.on('unhandledRejection', error => client.logger.log("UNHANDLED_REJECTION\n" + error, "error"));
process.on('uncaughtException', error => {
    client.logger.log("UNCAUGHT_EXCEPTION\n" + error, "error");
    client.logger.log("Uncaught Exception is detected, restarting...", "info");
    process.exit(1);
});

client.on('guildMemberAdd', member => {
    const welcembed = {
      "description": `hey ${member.user.username}, hope you enjoy your stay here!\n\n<:dot:974223455987826719><#982936057052028958>\n<:dot:974223455987826719><#982936101897515038>\n<:dot:974223455987826719><#983032476077277184>\n<:dot:974223455987826719><#985867352631562270>\n\n__If you leave, you will receive a permanent ban__`,
      "color": 3553598,
      "title": "welcome to eclipse!",
      "footer": {
          "icon_url": "https://images-ext-2.discordapp.net/external/629Qulyd94xKTRRSrWVQ-w6O8-tLVVJM8Dy84f5Qk6k/%3Fsize%3D1024/https/cdn.discordapp.com/icons/982552981423652884/db6cc990f7b5296b1b6c948542c97494.png",
          "text": "eclipse"
      },
      "author": {
          "icon_url": `${member.user.avatarURL()}`,
          "name": `${member.user.tag}`
      }
    }

    member.send({ content: 'discord.gg/Ab4e9hSXEh\ndiscord.gg/8gDDRre5Mv', embeds: [welcembed] })
})

client.on('guildMemberRemove', member => {
    const e1 = new discord.MessageEmbed()
    .setColor("#00000")
    .setDescription(`<:e_dot:985270306308489356>**Offender**: ${member} (\`${member.id}\`)\n<:e_dot:985270306308489356>**Reason**: \`Left the server\`\n<:e_dot:985270306308489356>**DM Offender**: <a:ec_yes:990478257851858974>`)
    .setTitle("freeloader banned")
    const reason = "leaving the server"

    member.ban({ reason })
    client.channels.cache.get("386412293316935690").send({ embeds: [e1] })
})

client.login(settings.token).catch((error) => { client.logger.log(error, "warn") });
