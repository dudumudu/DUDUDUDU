const Discord = require('discord.js'); 
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix

module.exports.run = async(client, message, args) => {
 
  let sayfalar = [`
      > **<a:developer:797032355976970251> • Kullanıcı Komutları**
      
      > <a:yr_trnctac:797757061353963540> [${prefix}afk](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
      > **• Sunucunuzda bu komutu kullanarak afk olduğunuzu belirtip etiketlenince size bildirim gelmez.**
      > <a:yr_trnctac:797757061353963540> [${prefix}bizkimiz](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
      > **• Botun ekibi hakkında bilgi verir.**
      > <a:yr_trnctac:797757061353963540> [${prefix}bug-bildir](https://discord.com/oauth2/authorize?client_id=831541813701509182&permissions=8&scope=bot)
      > **• Botta herhangi bir bug olduğunu anladığınız kesinleştirdiğiniz zaman bize iletebilirsiniz.**
      > <a:yr_trnctac:797757061353963540> [${prefix}davet](https://discord.com/oauth2/authorize?client_id=831541813701509182&permissions=8&scope=bot) 
      > **• Botumuzun davet linki, destek sunucu linkini gösterir.**
      > <a:yr_trnctac:797757061353963540> [${prefix}profil](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Sizin veya kullanıcı hakkında bilgi verir.**
      > <a:yr_trnctac:797757061353963540> [${prefix}canlı-destek](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Botta ayarlayamadığınız komutları veya çalışmayan komutları bize canlı destek sayesinde ayarlarız.**
      > <a:yr_trnctac:797757061353963540> [${prefix}istatistik](https://discord.com/oauth2/authorize?client_id=831541813701509182&permissions=8&scope=bot)
      > **• Bot hakkında bilgi verir.**`,`
      
      > **<a:developer:797032355976970251> • Kullanıcı Komutları**
      
      > <a:yr_trnctac:797757061353963540> [${prefix}korona <ülke>](https://bit.ly/3smfu3C) 
      > **• Covid19 hakkında bilgi verir.**
      > <a:yr_trnctac:797757061353963540> [${prefix}davetlerim](https://bit.ly/3smfu3C) 
      > **• Kaç Davet Yaptiğin Hakkında Bilgi Verir.**
      > <a:yr_trnctac:797757061353963540> [${prefix}ping](https://bit.ly/3smfu3C) 
      > **• Botun pingini gösterir.**
      > <a:yr_trnctac:797757061353963540> [${prefix}rol-bilgi](https://bit.ly/3smfu3C) 
      > **• Sunucudaki herhangi bir rolün bilgisini verir.**
      > <a:yr_trnctac:797757061353963540> [${prefix}sunucu-bilgi](https://bit.ly/3smfu3C) 
      > **• Sunucu hakkın bilgiler verir.**
      > <a:yr_trnctac:797757061353963540> [${prefix}sunucu-tanıt](https://bit.ly/3smfu3C) 
      > **• Kendi sunucunu botun destek sunucusunda tanıtırsın.**
      > <a:yr_trnctac:797757061353963540> [${prefix}yılbaşı](https://bit.ly/3smfu3C) 
      > **• Yılbaşına kalan zamanı gösterir.**
      > <a:yr_trnctac:797757061353963540> [${prefix}oneri](https://bit.ly/3smfu3C) 
      > **• Bot hakkında önerilerinizi bize iletebilirsiniz.**
      > <a:yr_trnctac:797757061353963540> [${prefix}sikayet](https://bit.ly/3smfu3C) 
      > **• Bot hakkında şikayetlerinizi bize iletebilirsiniz.**
      
      > <a:ayarlar:797756953873874944> •\`\Geri Dönmek İçin Emojiye\`\ <a:sol:797033410484109323> \`\Tıklayın\`\ `]; 
  let page = 1; 
 
  const embed = new Discord.MessageEmbed()
    .setTitle("İmparatorBot Kullanıcı Menüsü") 
    .setColor("#ff4400")
    .setFooter(`Sayfa ${page} - ${sayfalar.length}`) 
    .setDescription(sayfalar[page-1])
    .setTimestamp()
 
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
        embed.setTitle("İmparatorBot Kullanıcı Menüsü")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setColor("#ff4400")
        embed.setTimestamp()
        embed.setImage('https://cdn.discordapp.com/attachments/810242693740625921/831529964062507018/logo.jpg')
        msg.edit(embed)
      })
     forwards.on('collect', r => { 
        if (page === sayfalar.length) return; 
        page++; 
        embed.setTitle("İmparatorBot Ayarlanabilir Sistemler")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setColor("#084e0d")
        embed.setTimestamp()
        embed.setImage('https://cdn.discordapp.com/attachments/810242693740625921/831529964062507018/logo.jpg')
        msg.edit(embed)
     })
   
    })
 
  })
 
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kullanıcı listesi","kullanıcı menüsü","kullanıcı-listesi","yardım kullanıcı"],
  permLevel: 0
};

module.exports.help = {
  name: 'kullanıcı',
  description: 'Kullanıcı komutlarını gösterir.',
  usage: 'kullanıcı'
};