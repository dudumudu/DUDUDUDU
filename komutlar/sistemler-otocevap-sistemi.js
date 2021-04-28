const Discord = require('discord.js');
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
exports.run = (client, message, args) => {    
  let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix//! yerine kendi prefixini yaz!
  let yazılar = db.fetch(`${message.guild.id}.otocevap.yazılar`)
  let cevaplar = db.fetch(`${message.guild.id}.otocevap.cevaplar`)
  let footer = db.fetch("footer")
  let efemm = args.slice(1).join(' ')
  let efemmm = args.slice(2).join(' ')
  let bilmefe = efemm.split(" | ")
  let bilmefee = efemmm.split(" | ")
  let ifefe = message.content.includes(" | ")
  var ekle = ["ekle","+","add"]
  var sil = ["sil","-","remove", "delete", "rm"]
  var list = ["liste","list"]
  var edit = ["edit","düzenle"]
if (list.includes(args[0])) {
  var efe = ""
  let xefe = db.fetch(`${message.guild.id}.otocevap.yazılar`).filter(a=> a !== null).length
  for (var i = 0; i < (db.fetch(`${message.guild.id}.otocevap.yazılar`) ? db.fetch(`${message.guild.id}.otocevap.yazılar`).length : 0); i++) {
    efe += `${i +1}) *${yazılar[i]}* - **${cevaplar[i]}** \n`
  }
      if (!db.fetch(`${message.guild.id}.otocevap.yazılar`)) {
      efe += "<a:XTik:798277028050501642> Eklenmiş hiç bir otomatik olarak cevap verilecek mesaj yok."
    }
     if (db.fetch(`${message.guild.id}.otocevap.yazılar`).length == 0) {
      efe += "<a:XTik:798277028050501642> Eklenmiş hiç bir otomatik olarak cevap verilecek mesaj yok."
    }
const basarili = new Discord.MessageEmbed()
.setAuthor(`${message.author.username},`, message.author.avatarURL({ dynamic: true }))
.setDescription(efe)
.setColor("GREEN")
.setFooter(footer)
message.channel.send(basarili)
} else if (ekle.includes(args[0])) {
    if (!efemm)
    return message.channel.send(
      new Discord.MessageEmbed()
      .setDescription("<a:XTik:798277028050501642> Yanlış bir biçimde kullandın. Örnek kullanım: " + prefix +"otocevap düzenle <otocevapmesajı> <cevaplanacakmesaj> | <cevap>"))
    if (!ifefe) 
      return message.channel.send(
      new Discord.MessageEmbed()
      .setDescription("<a:XTik:798277028050501642> Kelimelerin arasında boşluk bırak örnek `sa | Aleyküm Selam Hoşgeldin.` koyman gerekiyor ve `<cevaplanıcakmesaj> | <cevap>` şeklinde kullanmalısın."))  
    if (!bilmefe[0]) 
      return message.channel.send(
      new Discord.MessageEmbed()
      .setDescription("<a:XTik:798277028050501642> Kelimelerin arasında boşluk bırak örnek `sa | Aleyküm Selam Hoşgeldin.` koyman gerekiyor ve `<cevaplanıcakmesaj> | <cevap>` şeklinde kullanmalısın."))      
  if (!bilmefe[1]) 
    return message.channel.send(
      new Discord.MessageEmbed()
      .setDescription("<a:XTik:798277028050501642> Kelimelerin arasında boşluk bırak örnek `sa | Aleyküm Selam Hoşgeldin.` koyman gerekiyor ve `<cevaplanıcakmesaj> | <cevap>` şeklinde kullanmalısın."))  
  if (yazılar ? yazılar.includes(bilmefe[0]) : 0) 
    return message.channel.send(
      new Discord.MessageEmbed()
      .setDescription("<a:XTik:798277028050501642> Bu otocevap zaten sistemde ekli."))
 db.push(`${message.guild.id}.otocevap.yazılar`, bilmefe[0]) 
 db.push(`${message.guild.id}.otocevap.cevaplar`, bilmefe[1]) 
const basarili = new Discord.MessageEmbed()
.setAuthor(`${message.author.username},`, message.author.avatarURL({ dynamic: true }))
.setDescription("<a:tik1:798276995011051530> Başarılı bir şekilde cevaplanacak mesaj `" + bilmefe[0] + "` olarak, cevap ise `" + bilmefe[1] + "` olarak eklendi.")
.setColor("GREEN")
.setFooter("Replace Bot Otocevap Sistemi")
message.channel.send(basarili)
} else if (sil.includes(args[0])) {
  if (!yazılar) 
    return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription("<a:XTik:798277028050501642> Görünülürde eklenmiş bir otocevap yok!"))
  if (!args[1]) 
    return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription("<a:XTik:798277028050501642> Otocevap silinmesi için bir otocevap ismi yazmalısın!"))
  if (!yazılar.includes(efemm)) 
    return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription("<a:XTik:798277028050501642> Yazılan otocevap ismi otocevaplar arasında bulunamadı."))
    for (var i = 0; i < (db.fetch(`${message.guild.id}.otocevap.yazılar`) ? db.fetch(`${message.guild.id}.otocevap.yazılar`).length : 0); i++) {
    if (efemm == yazılar[i]) {
        const basarili = new Discord.MessageEmbed()
       .setAuthor(`${message.author.username},`, message.author.avatarURL({ dynamic: true }))
       .setDescription("<a:tik1:798276995011051530> Başarılı bir şekilde cevaplanacak mesaj `" + yazılar[i] + "` olarak, cevap ise `" + cevaplar[i] + "` olarak **silindi**.")
       .setColor("GREEN")
       .setFooter("Replace Bot Otocevap Sistemi")
      const asd = db.fetch(`${message.guild.id}.otocevap.yazılar`)
      asd.splice(i,1)
      db.set(`${message.guild.id}.otocevap.yazılar`, asd);
      const asdd = db.fetch(`${message.guild.id}.otocevap.cevaplar`)
      asdd.splice(i,1)
      db.set(`${message.guild.id}.otocevap.cevaplar`, asdd);
      message.channel.send(basarili)
  }}
} else if (edit.includes(args[0])) {
  if (!yazılar) 
    return message.channel.send(
    new Discord.MessageEmbed()
   .setDescription("<a:XTik:798277028050501642> Görülünürde eklenmiş bir otocevap bulunamadı!"));
  if (!args[1]) 
    return message.channel.send(
    new Discord.MessageEmbed()
   .setDescription("<a:XTik:798277028050501642> Otocevap düzenlemek için otocevap ismi yazmalısın!"))  
  if (!yazılar.includes(args[1])) 
    return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription("<a:XTik:798277028050501642> Yazılan otocevap ismi otocevaplar arasında bulunamadı."))
      if (!efemmm) 
        return message.channel.send(
        new Discord.MessageEmbed()
        .setDescription("<a:XTik:798277028050501642> Yanlış bir biçimde kullandın. Örnek kullanım: " + prefix +"otocevap düzenle <otocevapmesajı> <cevaplanacakmesaj> | <cevap>"))
    if (!ifefe) 
      return message.channel.send(
      new Discord.MessageEmbed()
      .setDescription("<a:XTik:798277028050501642> Kelimelerin arasında boşluk bırak örnek `sa | Aleyküm Selam Hoşgeldin.` koyman gerekiyor ve `<cevaplanıcakmesaj> | <cevap>` şeklinde kullanmalısın."))
    if (!bilmefee[0]) 
      return message.channel.send(
      new Discord.MessageEmbed()
      .setDescription("<a:XTik:798277028050501642> Kelimelerin arasında boşluk bırak örnek `sa | Aleyküm Selam Hoşgeldin.` koyman gerekiyor ve `<cevaplanıcakmesaj> | <cevap>` şeklinde kullanmalısın."))                       
  if (!bilmefee[1]) 
    return message.channel.send(
      new Discord.MessageEmbed()
      .setDescription("<a:XTik:798277028050501642> Kelimelerin arasında boşluk bırak örnek `sa | Aleyküm Selam Hoşgeldin.` koyman gerekiyor ve `<cevaplanıcakmesaj> | <cevap>` şeklinde kullanmalısın."))
  for (var i = 0; i < (db.fetch(`${message.guild.id}.otocevap.yazılar`) ? db.fetch(`${message.guild.id}.otocevap.yazılar`).length : 0); i++) {
    if (args[1] == yazılar[i]) {
        const basarili = new Discord.MessageEmbed()
       .setAuthor(`${message.author.username},`, message.author.avatarURL({ dynamic: true }))
        .setColor("GREEN")
       .setDescription("<a:tik1:798276995011051530> Başarılı bir şekilde cevaplanacak mesaj `" + yazılar[i] + "` **" + bilmefee[0] + "** olarak, cevap ise `" + cevaplar[i] + "` **" + bilmefee[1] + "** olarak değiştirildi.")
       .setFooter("Replace Bot Otocevap Sistemi")
      const asd = db.fetch(`${message.guild.id}.otocevap.yazılar`)
      asd.splice(i,1)
      db.set(`${message.guild.id}.otocevap.yazılar`, asd);
      db.push(`${message.guild.id}.otocevap.yazılar`, bilmefee[0])
      const asdd = db.fetch(`${message.guild.id}.otocevap.cevaplar`)
      asdd.splice(i,1)
      db.set(`${message.guild.id}.otocevap.cevaplar`, asdd);
      db.push(`${message.guild.id}.otocevap.cevaplar`, bilmefee[1])
      message.channel.send(basarili)
  }}
} else {
  const embed = new Discord.MessageEmbed()
.setAuthor(`${message.author.username},`, message.author.avatarURL({ dynamic: true }))
.setDescription(`
Bu komutu kullanırken bilmen gerekenler:

<:r_warning:785437716690108426> Eğer ${prefix}${message.content.split(" ")[0].slice(ayarlar.prefix.length)}'dan sonra

<a:r_sar:785875299233300530> **${prefix}otocevap ${ekle.join(", ")}** yazarsan yeni bir otocevap ekler.
<a:r_sar:785875299233300530> **${prefix}otocevap ${sil.join(", ")}** yazarsan bir otocevabı siler.
<a:r_sar:785875299233300530> **${prefix}otocevap ${list.join(", ")}** yazarsan sunucudaki otocevapları listeler.
<a:r_sar:785875299233300530> **${prefix}otocevap ${edit.join(", ")}** yazarsan bir otocevabı editlersin.

:pencil: Ek Bilgiler:
<:r_warning:785437716690108426> Bir otocevap eklerken veya editlerken **cevap** verilecek kısımda

<a:r_sar:785875299233300530> **{sunucuadı}** yazarsanız {sunucuadı} yazılan kısımda sunucunun adı gözükecektir.
<a:r_sar:785875299233300530> **{üyesayı}** yazarsanız {üyesayı} yazılan kısımda sunucudaki üye sayısı gözükecektir.
<a:r_sar:785875299233300530> **{roller}** yazarsanız {roller} yazılan kısımda sunucudaki rolleri gözükücektir.
<a:r_sar:785875299233300530> **{sunucuid}** yazarsanız {sunucuid} yazılan kısımda sunucunun idsi gözükecektir.
<a:r_sar:785875299233300530> **{sunucubölge}** yazarsanız {sunucubölge} yazılan kısımda sunucunun bölgesi gözükecektir.
<a:r_sar:785875299233300530> **{sunucutarih}** yazarsanız {sunucutarih} yazılan kısımda sunucu ne zaman kurulduğu yazıcaktır.
<a:r_sar:785875299233300530> Eklenmesini istediğiniz başka şeyler varsa ${prefix}öneri ile bize iletebilirsiniz.`)
.setColor("GREEN")
.setFooter('Otocevap Sistemi')
  message.channel.send(embed) 
}}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["otocevap-sistemi"],
  permLevel: 3,
  kategori: "moderasyon"
};
exports.help = {
  name: 'otocevap',
  description: 'Otomatik cevaplayıcı komutu.',
  usage: 'otocevap'
};