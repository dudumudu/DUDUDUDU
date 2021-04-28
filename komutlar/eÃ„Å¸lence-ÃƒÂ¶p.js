const Discord = require("discord.js");
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async (client, message, args) => { 

  let mesaj = args.slice(0).join(" ");
  if (mesaj.length < 1) return message.channel.send("Kimi Hackleyecen?");

const EmbedNeonDevelopments = new Discord.MessageEmbed()

    .setAuthor(" ")
    .setColor(`ORANGE`)
    .setDescription(
      message.author.username +
        ` **adlı kullanıcı, ${mesaj} adlı kullanıcıyı Hackledi.**`
    )

    .setImage(
      `https://cdn.discordapp.com/attachments/810242693740625921/831584889714901002/tenor.gif`
    );
  return message.channel.send(EmbedNeonDevelopments);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: "hackle",
  description: "İstediğiniz kişiyi Hacklersiniz.",
  usage: "hackle"
};
