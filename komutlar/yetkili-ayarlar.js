const Discord = require('discord.js'); 
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")

var prefix = ayarlar.prefix

module.exports.run = async(client, message, args) => {
  const modlog = await db.fetch(`modlogkanaly_${message.guild.id}`);
  const prefixx = await db.fetch(`prefix_${message.guild.id}`);
  const reklam = await db.fetch(`reklamengl_${message.guild.id}`);
  const küfür = await db.fetch(`küfürengl_${message.guild.id}`);
  const otocevapyazi = await db.fetch(`${message.guild.id}.otocevap.yazılar`);
  const otocevapcevap = await db.fetch(`${message.guild.id}.otocevap.cevaplar`);
  const capslock = await db.fetch(`capslockengl_${message.guild.id}`);
  const otorol = await db.fetch(`autoRole_${message.guild.id}`);
  const otorolkanal = await db.fetch(`autoRoleChannel_${message.guild.id}`)
  const sayac = await db.fetch(`sayac_${message.guild.id}`);
  const sayacK = await db.fetch(`sayacK_${message.guild.id}`);
  const girişçıkış = await db.fetch(`gçkanal_${message.guild.id}`);
  const güvenlik = await db.fetch(`güvenlik.${message.guild.id}`);
  
  let sayfalar = [`
> Sunucu Ayarları  
  
> **Prefix-Sistemi**: ${prefixx ? "<a:tik1:798276995011051530> **``| Ayarlandı``**" : '<a:XTik:798277028050501642> **``| Ayarlanmadı``**'}
> **Mod-Log-Sistemi**: ${modlog ? "<a:tik1:798276995011051530> **``| Ayarlandı``**" : '<a:XTik:798277028050501642> **``| Ayarlanmadı``**'}
> **Otocevap-Sistemi**: ${otocevapyazi + otocevapcevap ? "<a:tik1:798276995011051530> **``| Ayarlandı``**" : '<a:XTik:798277028050501642> **``| Ayarlanmadı``**'}
> **Güvenlik-Sistemi**: ${güvenlik ? "<a:tik1:798276995011051530> **``| Ayarlandı``" : '<a:XTik:798277028050501642> **``| Ayarlanmadı``**'}
> **Capslock-Engelle: ${capslock ? "<a:tik1:798276995011051530> **``| Ayarlandı``**" : '<a:XTik:798277028050501642> **``| Ayarlanmadı``**'}

> <a:ayarlar:797756953873874944> •\`\Sunucu Ayarları Devamı İçin Emojiye\`\ <a:RainbowOkGif:797033472274464779> \`\Tıklayın\`\ `, `
> **Reklam-Engelle**: ${reklam ? "<a:tik1:798276995011051530> **``| Ayarlandı``**" : '<a:XTik:798277028050501642> **``| Ayarlanmadı``**'}
> **Küfür-Engelle**: ${küfür ? "<a:tik1:798276995011051530> **``| Ayarlandı``**" : '<a:XTik:798277028050501642> **``| Ayarlanmadı``**'}
> **Sayaç-Sistemi**: ${sayac + sayacK ? "<a:tik1:798276995011051530> **``| Ayarlandı``**" : '<a:XTik:798277028050501642> **``| Ayarlanmadı``**'}
> **Otorol-Sistemi**: ${otorol + otorolkanal ? "<a:tik1:798276995011051530> **``| Ayarlandı``**" : '<a:XTik:798277028050501642> **``| Ayarlanmadı``**'}
> **Giriş-Çıkış-Sistemi**: ${girişçıkış ? "<a:tik1:798276995011051530> **``| Ayarlandı``**" : '<a:XTik:798277028050501642> **``| Ayarlanmadı``**'}

> <a:ayarlar:797756953873874944> •\`\Geri Dönmek İçin Emojiye\`\ <a:sol:797033410484109323> \`\Tıklayın\`\ `]; 
  let page = 1; 
 
  const embed = new Discord.MessageEmbed()
    .setTitle("İmparatorBot Sunucu Ayarlar Sistemi") 
    .setColor("#501c67")
    .setFooter(`Sayfa ${page} - ${sayfalar.length}`) 
    .setDescription(sayfalar[page-1])
 
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
        embed.setTitle("İmparatorBot Sunucu Ayarlar Sistemi")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setColor("#501c67") 
        msg.edit(embed) 
      })
     
      forwards.on('collect', r => { 
        if (page === sayfalar.length) return; 
        page++; 
        embed.setTitle("İmparatorBot Sunucu Ayarlar Sistemi")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setColor("#501c67") 
        msg.edit(embed) 
      })
   
    })
 
  })
 
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ayarlar-sistemi","ayarlar listesi","ayarlar menüsü","ayarlar-listesi"],
  permLevel: 0
};

module.exports.help = {
  name: 'ayarlar',
  description: 'Sunucu ayarlarını gösterir.',
  usage: 'ayarlar'
};