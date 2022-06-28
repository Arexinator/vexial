const Discord = module.require("discord.js");

module.exports = {
  name: "choose",
  aliases: ["c"],


  run: async (client, message, args) => {
    let m = args.join(" ")
    if (!m) return message.reply({ content: "Please separate the choices with \`,\`", allowedMentions: {repliedUser: false}})
    let choice = args.join(" ").split(",")
    const choice2 = choice[Math.floor(Math.random() * choice.length)]
    message.channel.send(choice2)
  },
};