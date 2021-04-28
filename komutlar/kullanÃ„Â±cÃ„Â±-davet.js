const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor('#ff4400')
  .setThumbnail(client.user.avatarURL({dynamic: true}))
  .setAuthor('İmparatorBot Davet Bilgi', client.user.avatarURL({dynamic: true}))
  .setDescription(`
  <a:sarionay:797756996337270824>Botun Davet Link<a:sarionay:797756996337270824> 
  » <a:yr_trnctac:797757061353963540>[Davet Linkim](https://discord.com/oauth2/authorize?client_id=831541813701509182&permissions=8&scope=bot)<a:yr_trnctac:797757061353963540> 
  <a:yr_trnctac:797757061353963540>Botun Destek Sunucusu<a:yr_trnctac:797757061353963540> 
  » <a:sarionay:797756996337270824>[Destek Sunucum](https://discord.com/invite/NRUErmqWQC)<a:sarionay:797756996337270824>
 <a:KalpGif:797756735708332063>Bota Oy Vermek İçin Tıkla<a:KalpGif:797756735708332063> 
  » <a:yr_trnctac:797757061353963540>[Oy Ver](Yakında)<a:yr_trnctac:797757061353963540>`)
.setFooter(`Komutu ${message.author.username} kullanıcı istedi .`, message.author.avatarURL({dynamic: true}))
  message.channel.send(davet)
  };


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet','davet-et'],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: 'Botun Davet Linkini Gönderir.',
  usage: 'davet'
};