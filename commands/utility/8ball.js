const Discord = module.require("discord.js");

module.exports = {
  name: "8ball",
  aliases: ["8b"],

  run: async (client, message, args) => {
    if(!args[0]) return message.reply({ content: 'Please enter a question', allowedMentions: {repliedUser: false}})

    var fortunes = [
      "Yes.",
      "It is certain.",
      "It is decidedly so.",
      "Without a doubt.",
      "Yes definelty.",
      "You may rely on it.",
      "As I see it, yes.",
      "Most likely.",
      "Outlook good.",
      "Signs point to yes.",
      "Reply hazy, try again.",
      "Ask again later.",
      "Better not tell you now...",
      "Cannot predict now.",
      "Concentrate and ask again.",
      "Don't count on it.",
      "My reply is no.",
      "My sources say no.",
      "Outlook not so good...",
      "Very doubtful.",
    ];

    const decision = fortunes[Math.floor(Math.random() * fortunes.length)]
    message.reply({ content: decision, allowedMentions: {repliedUser: false}})
  },
};