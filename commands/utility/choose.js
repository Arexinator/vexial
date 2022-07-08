module.exports = {
  name: "choose",
  aliases: ["c"],


  run: async (client, message, args) => {
    let m = args.join(" ")
    let choice = args.join(" ").split(",")
    const choice2 = choice[Math.floor(Math.random() * choice.length)]
    message.channel.send(choice2)
  },
};