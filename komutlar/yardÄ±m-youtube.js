const Discord = require('discord.js'); 
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix

module.exports.run = async(client, message, args) => {
 
 let sayfalar = [`
      > **<a:ayarlar:797756953873874944> • Youtube Komutları**
      
      > <a:tadaaa:797757216929087499> [${prefix}abone](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
      > **• Abone Rolu Verirsiniz.**
      > <a:tadaaa:797757216929087499> [${prefix}abone-mesaj](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Abone Mesajinin Nereye Gitceğini Belirlersiniz.**
      > <a:tadaaa:797757216929087499> [${prefix}abone-sorumlusu @rol](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Abone Sorumlusunun Rolunu Ayarlayabilirsin.**
      > <a:tadaaa:797757216929087499> [${prefix}abone-rol @rol](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
      > **• Abone Rolunu Ayarlarsınız.**`]; 
  let page = 1; 
 
  const embed = new Discord.MessageEmbed()
    .setTitle("İmparatorBot Youtube Komutları") 
    .setTitle("İmparatorBot Youtube Komutları") 
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
  aliases: ["yardım-youtube","youtube",],
  permLevel: 0
};

module.exports.help = {
  name: 'youtube',
  description: 'Sunucu komutlarını gösterir.',
  usage: 'youtube'
};