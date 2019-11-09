const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = '.'
var token = 'NjE3NDk1MjYxODcwMTYxOTI1.Xa7vtQ.iPTm3tI89F3i8PiAtXvXCKitDpA'

// Log dans la console : bot co

// lien pour invite le bot : https://discordapp.com/oauth2/authorize?client_id=617495261870161925&permissions=8&scope=bot
client.login(token);

client.on('ready', () => { 
console.log(`Connecté sous le nom de ${client.user.tag} !`); 
client.user.setActivity(`.help | ${client.users.size} membres`);

// Log dans la console : bot déco
client.on('message' , function(message){
	if(message.content.includes(prefix + 'déco')){
            message.channel.send('**Le bot a bien été déconnecté**')
            message.delete().then(client.destroy())
            console.log(`${client.user.tag} a été déconnecté !`)
    }
})

// Commande help

client.on('message' , function(message){
	if(message.content.includes(prefix + 'help')){
		message.channel.send('Voici toutes les commandes : (prefix = t.) prefix + salut, prefix + cava, prefix + bg, prefix + moche, prefix + jtm, prefix + jtmpa')
    }
})

// Commande chatbot n°1

client.on('message' , function(message){
	if(message.content.includes(prefix + 'salut')){
            message.channel.send('Salut ! Ça va ?')
    }
})

// Commande chatbot n°2

client.on('message' , function(message){
	if(message.content.includes(prefix + 'cava')){
            message.channel.send('Super et toi ? :3')
    }
})

// Commande chatbot n°3

client.on('message' , function(message){
	if(message.content.includes(prefix + 'moche')){
            message.channel.send('Tes bg là arette >:O')
    }
})

// Commande Osef

client.on('message' , function(message){
	if(message.content.includes(prefix + 'bg')){
            message.channel.send('Petit narcissique va >:)')           
    }
})

// Osef total ;-;

client.on('message' , function(message){
	if(message.content.includes(prefix + 'senorita')){
            message.channel.send('Ce monde serait moche sans toi, et jrefuse le paradis si ty est pas~ Senorita~')
    }
})

// Commande troll

client.on('message' , function(message){
	if(message.content.includes(prefix + 'jtm')){
            message.channel.send('Et bien moi je taime pas >:)')
    }
})

// Commande troll

client.on('message' , function(message){
	if(message.content.includes(prefix + 'jtempa')){
            message.channel.send('Et bien moi je taime <3')
    }
})

// Commande sendFile (non fonctionel :( )

client.on('message' , function(message){
	if(message.content.includes(prefix + 'tk')){
		sendFile('/storage/emulated/0/BotDiscord/Photos/','tk.jpg', content, options)
    }
})

client.on('message' , function(message){
	if(message.content.includes(prefix + 'info')){
            message.channel.send('Voici les infos sur moi : Mon createur : Momo, Ma date de sortie : samedi 18 octobre 2019, Mon interet : Quasiment aucun ;-;')
            console.log(`Des infos sur ${client.user.tag} on été demandées !`)
    }
})

// commande random

client.on('message' , function(message){
	if(message.content.includes(prefix + 'boéboé')){
            message.channel.send('Didine ché le boéboé de Momo UnU')
    }
})

// commande TROLL

client.on('message' , function(message){
	if(message.content.includes(prefix + 'loulou')){
            message.channel.send('Louis ché le loulou de didineuuuh ~~#louisxdidine~~')
    }
})

// commande pur troll ;-;

client.on('message' , function(message){
	if(message.content.includes(prefix + 'louisxdidine')){
            message.channel.send('**prend la tête de Louis et de Amandine et les fais sembrasser** :sunglasses:')
    }
})

//commande troll

client.on('message' , function(message){
	if(message.content.includes(prefix + 'slapmomo')){
            message.channel.send('**met une bonne claque sa mère a momo** :cry:')
    }
})

// commande troll

client.on('message' , function(message){
	if(message.content.includes(prefix + 'bb')){
            message.channel.send('Moi jtaime Universe :hearth:')
    }
})

// commande troll

client.on('message' , function(message){
	if(message.content.includes(prefix + 'mechant')){
            message.channel.send('Je suis trop mechant :smiling_imp: :middle_finger:')
    }
})

// commande random 

client.on('message' , function(message){
	if(message.content.includes(prefix + 'jtebez')){
            message.channel.send('ALERTE PEDOPHILE LES ENFANTS')
    }
})

// commande pour nounours...

client.on('message' , function(message){
	if(message.content.includes(prefix + 'nounours')){
            message.channel.send('Courage petit nounours...')
    }
})

// commande random

client.on('message' , function(message){
	if(message.content.includes(prefix + 'universe')){
            message.channel.send('Ché UNIVERSE et pas AKEMI Ù^Ú')
    }
})

// commande kop1

client.on('message' , function(message){
	if(message.content.includes(prefix + 'kop1')){
            message.channel.send('Mon kop1 rage po ;-;')
    }
})

// commande fuck le serv

client.on('message' , function(message){
	if(message.content.includes(prefix + 'ping')){
            message.channel.send('@everyone Momo ché le best <3')
    }
})

// commande ping

client.on('message' , function(message){
	if(message.content.includes(prefix + 'jvuzem')){
            message.channel.send('@everyone ché les best <3')
    }
})

// commande raid relou

client.on('message' , function(message){
	if(message.content.includes(prefix + 'raid')){
            message.channel.send('FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS ! FUCKED BY ATSUKO BANDE DE SOUMIS !')
    }
})

// 2eme commande raid
client.on('message' , function(message){
	if(message.content.includes(prefix + 'spam')){
            message.channel.send('t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid t.raid ')
    }
 })
})

// commande pain au chocolat 

client.on('message' , function(message){
	if(message.content.includes(prefix + 'con')){
            message.channel.send('PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT PAIN AU CHOCOLAT ')
    }
})

// commande mon gars sûr mdrrr

client.on('message' , function(message){
	if(message.content.includes(prefix + 'bejai')){
            message.channel.send('Cest mon gars sûr lui : https://cdn.discordapp.com/attachments/596439914569269266/636192215030300672/JPEG_20191021_204030.jpg')
    }
})

