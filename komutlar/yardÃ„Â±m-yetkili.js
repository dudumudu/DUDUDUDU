const Discord = require('discord.js'); 
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix

module.exports.run = async(client, message, args) => {
 
  let sayfalar = [`
      > **<a:ayarlar:797756953873874944> • Yetkili Komutları**
      
      > <a:developer:797032355976970251> [${prefix}ban @kullanıcı](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
      > **• Sunucudan banlamak istediğiniz kişiyi etiketleyip banlarsınız.**
      > <a:developer:797032355976970251> [${prefix}unban](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Sunucudaki kişilerin banını geri açarsınız..**
      > <a:developer:797032355976970251> [${prefix}oylama](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Sunucuda oylama yaparsınız.**  
      > <a:developer:797032355976970251> [${prefix}mute](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Sunucdaki kişileri süreli bir şekilde susturabilirsiniz.**
      > <a:developer:797032355976970251> [${prefix}unmute](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Susturulan kişinin mutesini açabilirsiniz.**
      > <a:developer:797032355976970251> [${prefix}slowmode](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Sunucuda yavaş modu açarsınız. İnsanların spam yapmasına önler getirmiş olursunuz.**
      > <a:developer:797032355976970251> [${prefix}kick @kullanıcı](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Sunucudaki istedğiniz kişileri sunucudan atabilirsiniz.**  
      
      > <a:ayarlar:797756953873874944> •\`\Yetkili Komutların Devamı İçin Emojiye\`\ <a:RainbowOkGif:797033472274464779> \`\Tıklayın\`\ `,`
      > **<a:developer:797032355976970251> • Yetkili Komutları**
      
      > <a:developer:797032355976970251> [${prefix}giriş-çıkış-ayarla](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Resimli giriş çıkış kanalını ayarlarsınız.**
      > <a:developer:797032355976970251> [${prefix}giriş-çıkış-sıfırla](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Resimli giriş çıkış kanalını sıfırlarsınız.**
      > <a:developer:797032355976970251> [${prefix}mod-log #kanal](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Mod-Log kanalını ayarlarsınız bu sayede silinen rol, mesaj vb görebilirsiniz.**
      > <a:developer:797032355976970251> [${prefix}mod-log-sıfırla](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Mod-Log kanalını sıfırlarsınız.**
      
      > <a:ayarlar:797756953873874944> •\`\Yetkili Komutların Devamı İçin Emojiye\`\ <a:RainbowOkGif:797033472274464779> \`\Tıklayın\`\ `, `
      > **<a:developer:797032355976970251> • Yetkili Komutları**
      
      > <a:developer:797032355976970251> [${prefix}ototag-ayarla](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Sunucuya girenlere verilecek ototag ayarlarsınız..**
       > <a:developer:797032355976970251> [${prefix}ototag-kanal](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Ototag Kanalını Ayarlarsınız**
      > <a:developer:797032355976970251> [${prefix}prefix-ayarla](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Botun prefixi değiştirebilirsiniz.**
      > <a:developer:797032355976970251> [${prefix}prefix-sıfırla](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Botun prefixi eski haline getirirsiniz.**
      > <a:developer:797032355976970251> [${prefix}capslock-engelle](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Sunucuda büyük harf kullanımını engeller. Kimse büyük harf kullanamaz.**
      > <a:developer:797032355976970251> [${prefix}küfür-engelle](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Sunucuda küfür etmelerini engeller. Kimse küfür edemez.**
      > <a:developer:797032355976970251> [${prefix}reklam-engelle](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Sunucuda reklam yapmalarını engeller. Kimse reklam yapamaz.**
      > <a:developer:797032355976970251> [${prefix}toplam-komut](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Botun İçinde Kac Komut Oldugunu Gösterir.**
      
      > <a:ayarlar:797756953873874944> •\`\Diğer Sistemlere Gitmek İçin Emojiye\`\ <a:RainbowOkGif:797033472274464779> \`\Tıklayın\`\ `];
   let page = 1;
  const embed = new Discord.MessageEmbed()
    .setTitle("İmparatorBot Yetkili Menüsü") 
    .setColor("#ffe200")
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
        embed.setTitle("İmparatorBot Yetkili Menüsü")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setColor("#ffe200")
        embed.setTimestamp()
        embed.setImage('https://cdn.discordapp.com/attachments/810242693740625921/831529964062507018/logo.jpg')
        msg.edit(embed) 
      })
     
      forwards.on('collect', r => { 
        if (page === sayfalar.length) return; 
        page++; 
        embed.setTitle("İmparatorBot Yetkili Menüsü")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setColor("#ffe200") 
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
  aliases: ["yetkili listesi","yetkili menüsü","yetkili-listesi","yetkili-menüsü"],
  permLevel: 0
};

module.exports.help = {
  name: 'yetkili',
  description: 'Yetkili komutlarını gösterir.',
  usage: 'yetkili'
};