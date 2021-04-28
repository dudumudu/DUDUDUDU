const Discord = require("discord.js");
const db = require('quick.db');


const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {  
   const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.MessageEmbed()
  .setColor("#ff4400")
  .setThumbnail('https://media.discordapp.net/attachments/785558053902745611/786143739499642880/static_3.png?width=205&height=205', bot.user.avatarURL({dynamic: true}), true)
  .setTitle('İmparatorBot \\\ Buyur Benim İstatistiklerim', bot.user.avatarURL({dynamic: true}))
  .addField("<a:yr_trnctac:797757061353963540> » Bot Sahibi", "• <@779983912515403776>", true) 
  .addField("<a:developer:797032355976970251> » **Geliştirici** ","<@779983912515403776>", true)
  .addField("<a:gifland_hype:798438643176964116> » **Bellek Kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("<a:ayarlar:797756953873874944> » **Çalışma Durumu**", seksizaman, true)
  .addField("<a:ayarlar:797756953873874944> » **Kullanıcı Sayısı**" , bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("<a:ayarlar:797756953873874944> » **Sunucu Sayısı**", bot.guilds.cache.size.toLocaleString(), true)
  .addField("<a:ayarlar:797756953873874944> » **Kanal Sayısı**", bot.channels.cache.size.toLocaleString(), true)
  .addField("<a:ayarlar:797756953873874944> » **Ping Durumu**", bot.ws.ping+" ms", true)
  .addField("<a:gifland_hype:798438643176964116> » **Discord.js Sürümü**", `${Discord.version}`, true)
  .addField("<a:yr_trnctac:797757061353963540> » **Beni Sunucuna**", " [Eklemeyi Unutma](https://discord.com/oauth2/authorize?client_id=831541813701509182&permissions=8&scope=bot)", true)
  .addField("<a:bildirim:797756868213866498> » **Destek Sunucum**", "[Katılmayı Unutma](https://discord.com/invite/NRUErmqWQC)", true)
  .addField("<a:tadaaa:797757216929087499> » **Bota Oy Ver**", "[YAKINDA](Yakında)", true)
 return message.channel.send(istatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i','bilgi', 'istatistik', 'bot-bilgi', 'bot-istatistik'],
  permLevel: 0
};

exports.help = {
  name: "bilgi",
  description: "Bot i",
  usage: "bilgi"
};