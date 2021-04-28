const Discord = require('discord.js'); 
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix

module.exports.run = async(client, message, args) => {
 
 let sayfalar = [`
      > **<a:ayarlar:797756953873874944> • Sunucu Komutları**
      
      > <a:yr_discord:798438310648610818> [${prefix}açıklama](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
      > **• Sunucuda kanalların açıklamasını emojili, sembollü yapabilirsiniz.**
      > <a:yr_discord:798438310648610818> [${prefix}çek](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Sesli kanala istediğiniz kişiyi kolay bir şekilde çekebilirsiniz.**
      > <a:yr_discord:798438310648610818> [${prefix}git](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Sesli kanalinda İstediğiniz Kişinin Yanına Gidebilirsiniz.**
      > <a:yr_discord:798438310648610818> [${prefix}emoji-ekle](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
      > **• Sunucuya hızlı bir şekilde emoji yükleyebilirsiniz.**
      > <a:yr_discord:798438310648610818> [${prefix}kategori-oluştur](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
      > **• Sunucuda kategori oluşturabilirsiniz.**
      > <a:yr_discord:798438310648610818> [${prefix}sunucu-panel](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Sunucunun istatistiklerini gösteren panel kurarsınız.**
      > <a:yr_discord:798438310648610818> [${prefix}sunucu-kur](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Gelişmiş bir sunucu kurarsınız.**
      > <a:yr_discord:798438310648610818> [${prefix}sayaç](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Sayaç Kurarsınız.**
      > <a:yr_discord:798438310648610818> [${prefix}emoji-info](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
      > **• Emojinin Linkini Ve İd Sini Gorebilirsiniz.**`];
  let page = 1; 
 
  const embed = new Discord.MessageEmbed()
    .setTitle("İmparatorBot Sunucu Komutları") 
    .setTitle("İmparatorBot Sunucu Komutları") 
    .setColor("#501c67")
    .setFooter(`Sayfa ${page} - ${sayfalar.length}`) 
    .setDescription(sayfalar[page-1])
    .setTimestamp()
   .setImage('https://cdn.discordapp.com/attachments/810242693740625921/831529964062507018/logo.jpg')
 
  message.channel.send(embed).then(msg => { 
   
     msg.react('797033410484109323').then( r => { 
      msg.react('797033472274464779') 
     
      const backwardsFilter = (reaction, user) => reaction.emoji.name === 'sol' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === 'RainbowOkGif' && user.id === message.author.id; 
     
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
     
      
      backwards.on('collect', r => { 
        if (page === 1) return; 
        page--; 
        embed.setTitle("İmparatorBot Sunucu Komutları")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setColor("#501c67")
        embed.setTimestamp()
        embed.setImage('https://cdn.discordapp.com/attachments/810242693740625921/831529964062507018/logo.jpg')
        msg.edit(embed) 
      })
     
      forwards.on('collect', r => { 
        if (page === sayfalar.length) return; 
        page++; 
        embed.setTitle("İmparatorBot Sunucu Komutları")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setTimestamp()
        embed.setColor("#501c67")
        embed.setImage('https://cdn.discordapp.com/attachments/810242693740625921/831529964062507018/logo.jpg')
        msg.edit(embed) 
      })
   
    })
 
  })
 
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu-menüsü","sunucu listesi","sunucu menüsü","sunucu-listesi"],
  permLevel: 0
};

module.exports.help = {
  name: 'sunucu',
  description: 'Sunucu komutlarını gösterir.',
  usage: 'sunucu'
};