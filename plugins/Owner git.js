const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════BotM2🙍═════╗*\n                 \n*😈═BotM2🙍═😈* \n\n   *owner WiNdro - http://Wa.me/+918606413490 \n* *\n🔰instagram:-https://www.instagram.com/invites/contact/?i=fy066zwe1xsf&utm_content=dnbhfg5* \n *╚══════♻️═════╝* \n\n *▷Creator: WiNDro SeR🐉*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═BotM2🙍 Owner WiNdro═💥*\n\n*💘https://github.com/windro-ser/BotM2*\n*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════JarviS🦇═════╗*\n                            \n *⚜═BOTEX🐉═⚜*                        \n\n*owner windro0 - http://Wa.me/+918606413490*\n *\n🔰instagram:-https://www.instagram.com/invites/contact/?i=fy066zwe1xsf&utm_content=dnbhfg5*            *\n*╚════♻️══♻️══♻️═══╝*\n\n*▷Creator: WiNDro*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "```Git links```\n           \n💥═BotexM2🙂 owner WiNDro═💥 \n\n 💘 https://github.com/windro-ser/BotM2 \n*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
