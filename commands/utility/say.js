module.exports = {
  name: "say",

  run: async (client, message, args) => {
    message.delete()
    message.channel.send({ content: `${args}`})  },
};