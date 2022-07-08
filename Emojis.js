        //---------------------------Emoji links-----------------------------\\
    var kitty =         'https://emoji.gg/assets/emoji/9553-cat-smile.png'
    var cock =          'https://c.tenor.com/9QMTL4kgC5UAAAAC/dead-emoji.gif'
    var sad_cat =       'https://emoji.discord.st/emojis/1685a79a-23f8-4307-9487-a1a5cb59302f.png'
    var doggo_dance =   'https://emoji.discord.st/emojis/d3897e57-3a33-4136-a6bb-882343233261.gif'
    var shaky_shaky =   'https://cdn.discordapp.com/attachments/931966555976245279/937783980118397008/shakyshaky.gif'
    var ban_ban =       'https://emoji.discord.st/emojis/73e3dd54-6b57-46ef-b9de-3ed3914bbd0b.png'
    var joy_abel =      'https://emoji.discord.st/emojis/JoyRow.gif'
    var doggo =         'https://cdn.discordapp.com/emojis/913426535443210270.webp?size=96&quality=lossless'
    var mad_blob =      'https://emoji.discord.st/emojis/3c09050d-653c-45e5-836d-8847002dc6dc.gif'
    var flame =         'https://emoji.discord.st/emojis/78a303da-784c-48ab-b97d-692c14c37347.gif'
    var gg =            'https://emoji.discord.st/emojis/73aa155b-1952-4fed-86e4-22a2950cdb7a.png'
    var clappin_cheeks ='https://emoji.gg/assets/emoji/1403-assslap.gif'
    var dababy =        'https://emoji.discord.st/emojis/22e67c14-a37c-4ad3-92f4-721df22e8a06.jpeg'
    var peaceout =      'https://emoji.discord.st/emojis/aed6a6c0-9b80-48e5-8170-ee6c1f0a415e.gif'
    var wut =           'https://emoji.discord.st/emojis/b88a98c3-878d-4007-97df-afeb85c31449.png'
    var ez =            'https://emoji.discord.st/emojis/EZ.png'
    var twerk =         'https://emoji.discord.st/emojis/ac216976-90ff-4b42-8006-fafdaab6fab1.gif'
    var stare =         'https://emoji.discord.st/emojis/74aa6827-fd4b-4ef1-bafd-d224ff8b42fe.png'
    var hakcan =        'https://emoji.discord.st/emojis/0dcfa262-39b8-4d96-b7cf-b1926ad8e9cc.gif'
    var thonk =         'https://emoji.discord.st/emojis/thonk.png'
    var awana =         'https://emoji.discord.st/emojis/c2ad2f8b-9263-4e2e-964a-f42741a33d01.gif'
    var clapp =         'https://emoji.discord.st/emojis/1b454d04-3ba8-425e-b379-3e4a69554970.gif'
    var amongus =       'https://emoji.discord.st/emojis/8c137b4f-d1af-4a61-a3d1-b2709aa50daf.gif'
    var vibing =        'https://emoji.discord.st/emojis/a21ddac1-3f6b-47ec-838b-3a330bb2f5ae.gif'
    var eri =           'https://emoji.discord.st/emojis/9b48b483-f8a9-45bd-8bcf-f5b64ed01945.webp'
    var sheeesh =       'https://emoji.discord.st/emojis/da4e55ab-16e2-494c-b2be-be54d71b841c.png'
    var mcdonalds =     'https://emoji.discord.st/emojis/c580ab93-b37d-49d7-9fd5-9f8db08fbb34.png'
    var fourK =         'https://emoji.gg/assets/emoji/1309-caughtin4k.gif'
    var fourweird =     'https://emoji.gg/assets/emoji/2060-4weird.png'
    var kekw      =     'https://emoji.discord.st/emojis/d5fd8082-f98c-41df-9163-d08cb3c5c135.png'
    var kekyou    =     'https://emoji.discord.st/emojis/757ccf41-e1f1-4243-82dc-0b662a324b94.png'
    var feelsgaymen =   'https://emoji.discord.st/emojis/6141be0a-24c9-47ad-a359-68ed18cba592.png'
    var shinekiss =     'https://emoji.gg/assets/emoji/6256-chickkiss.gif'
    var kissy =         'https://emoji.gg/assets/emoji/4403-kisses.gif'
    var egirlkiss =     'https://c.tenor.com/4N4IjHnN_ckAAAAd/tik-tok-egirl.gif'
setInterval(function() {
    try {
        var private_chat = document.getElementById("chat-party-room").lastElementChild.getElementsByClassName("message")[0].innerHTML
        var private = document.getElementById("chat-party-room").lastElementChild.getElementsByClassName("message")[0]
        var public_chat = document.getElementById("chat-all-room").lastElementChild.getElementsByClassName("message")[0].innerHTML
        var public = document.getElementById("chat-all-room").lastElementChild.getElementsByClassName("message")[0]
        var chat = []
        var emoji_width =  24;
        var emoji_height = 24;
//---------------------------------------------[kitty]---------------------------------------------\\
        if (private_chat.includes(":kitty:")){chat = private_chat.replace(':kitty:', '<img src="'+kitty+'"width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":kitty:")){chat = public_chat.replace  (':kitty:', '<img src="'+kitty+'"width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[cock]---------------------------------------------\\    
        if (private_chat.includes(":cock:")){chat = private_chat.replace(':cock:', '<img src="'+cock+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":cock:")){chat = public_chat.replace  (':cock:', '<img src="'+cock+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[sadcat]---------------------------------------------\\   
        if (private_chat.includes(":sadcat:")){chat = private_chat.replace(':sadcat:', '<img src="'+sad_cat+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":sadcat:")){chat = public_chat.replace  (':sadcat:', '<img src="'+sad_cat+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[doggodance]---------------------------------------------\\
        if (private_chat.includes(":doggodance:")){chat = private_chat.replace(':doggodance:', '<img src="'+doggo_dance+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":doggodance:")){chat = public_chat.replace  (':doggodance:', '<img src="'+doggo_dance+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[shakyshaky]---------------------------------------------\\
        if (private_chat.includes(":shakyshaky:")){chat = private_chat.replace(':shakyshaky:', '<img src="'+shaky_shaky+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":shakyshaky:")){chat = public_chat.replace  (':shakyshaky:', '<img src="'+shaky_shaky+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[ban]---------------------------------------------\\
        if (private_chat.includes(":ban:")){chat = private_chat.replace(':ban:', '<img src="'+ban_ban+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":ban:")){chat = public_chat.replace  (':ban:', '<img src="'+ban_ban+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[joyabel]---------------------------------------------\\
        if (private_chat.includes(":joyabel:")){chat = private_chat.replace(':joyabel:', '<img src="'+joy_abel+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":joyabel:")){chat = public_chat.replace  (':joyabel:', '<img src="'+joy_abel+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[dazelaugh]---------------------------------------------\\
        if (private_chat.includes(":doggo:")){chat = private_chat.replace(':doggo:', '<img src="'+doggo+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":doggo:")){chat = public_chat.replace  (':doggo:', '<img src="'+doggo+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[madblob]---------------------------------------------\\             
        if (private_chat.includes(":madblob:")){chat = private_chat.replace(':madblob:', '<img src="'+mad_blob+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":madblob:")){chat = public_chat.replace  (':madblob:', '<img src="'+mad_blob+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[flame]---------------------------------------------\\                     
        if (private_chat.includes(":flame:")){chat = private_chat.replace(':flame:', '<img src="'+flame+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":flame:")){chat = public_chat.replace  (':flame:', '<img src="'+flame+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[gg]---------------------------------------------\\                              
        if (private_chat.includes(":gg:")){chat = private_chat.replace(':gg:', '<img src="'+gg+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":gg:")){chat = public_chat.replace  (':gg:', '<img src="'+gg+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[clappincheeks]---------------------------------------------\\                                     
        if (private_chat.includes(":clappincheeks:")){chat = private_chat.replace(':clappincheeks:', '<img src="'+clappin_cheeks+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":clappincheeks:")){chat = public_chat.replace  (':clappincheeks:', '<img src="'+clappin_cheeks+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[dababy]---------------------------------------------\\
        if (private_chat.includes(":dababy:")){chat = private_chat.replace(':dababy:', '<img src="'+dababy+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":dababy:")){chat = public_chat.replace  (':dababy:', '<img src="'+dababy+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[peaceout]---------------------------------------------\\      
        if (private_chat.includes(":peaceout:")){chat = private_chat.replace(':peaceout:', '<img src="'+peaceout+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":peaceout:")){chat = public_chat.replace  (':peaceout:', '<img src="'+peaceout+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[wut]---------------------------------------------\\      
        if (private_chat.includes(":wut:")){chat = private_chat.replace(':wut:', '<img src="'+wut+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":wut:")){chat = public_chat.replace  (':wut:', '<img src="'+wut+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[ez]---------------------------------------------\\     
        if (private_chat.includes(":ez:")){chat = private_chat.replace(':ez:', '<img src="'+ez+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":ez:")){chat = public_chat.replace  (':ez:', '<img src="'+ez+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[twerk]---------------------------------------------\\      
        if (private_chat.includes(":twerk:")){chat = private_chat.replace(':twerk:', '<img src="'+twerk+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":twerk:")){chat = public_chat.replace  (':twerk:', '<img src="'+twerk+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[stare]---------------------------------------------\\    
        if (private_chat.includes(":stare:")){chat = private_chat.replace(':stare:', '<img src="'+stare+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":stare:")){chat = public_chat.replace  (':stare:', '<img src="'+stare+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[hakcan]---------------------------------------------\\      
        if (private_chat.includes(":hakcan:")){chat = private_chat.replace(':hakcan:', '<img src="'+hakcan+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":hakcan:")){chat = public_chat.replace  (':hakcan:', '<img src="'+hakcan+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[thonk]---------------------------------------------\\     
        if (private_chat.includes(":thonk:")){chat = private_chat.replace(':thonk:', '<img src="'+thonk+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":thonk:")){chat = public_chat.replace  (':thonk:', '<img src="'+thonk+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[awana]---------------------------------------------\\   
        if (private_chat.includes(":awana:")){chat = private_chat.replace(':awana:', '<img src="'+awana+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":awana:")){chat = public_chat.replace  (':awana:', '<img src="'+awana+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[clapp]---------------------------------------------\\
        if (private_chat.includes(":clapp:")){chat = private_chat.replace(':clapp:', '<img src="'+clapp+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":clapp:")){chat = public_chat.replace  (':clapp:', '<img src="'+clapp+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[amongus]---------------------------------------------\\
        if (private_chat.includes(":amongus:")){chat = private_chat.replace(':amongus:', '<img src="'+amongus+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":amongus:")){chat = public_chat.replace  (':amongus:', '<img src="'+amongus+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[vibing]---------------------------------------------\\
        if (private_chat.includes(":vibing:")){chat = private_chat.replace(':vibing:', '<img src="'+vibing+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":vibing:")){chat = public_chat.replace  (':vibing:', '<img src="'+vibing+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[eri]---------------------------------------------\\
        if (private_chat.includes(":eri:")){chat = private_chat.replace(':eri:', '<img src="'+eri+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":eri:")){chat = public_chat.replace  (':eri:', '<img src="'+eri+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[sheeesh]---------------------------------------------\\           
        if (private_chat.includes(":sheeesh:")){chat = private_chat.replace(':sheeesh:', '<img src="'+sheeesh+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":sheeesh:")){chat = public_chat.replace  (':sheeesh:', '<img src="'+sheeesh+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[mcdonalds]---------------------------------------------\\
        if (private_chat.includes(":mcdonalds:")){chat = private_chat.replace(':mcdonalds:', '<img src="'+mcdonalds+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":mcdonalds:")){chat = public_chat.replace  (':mcdonalds:', '<img src="'+mcdonalds+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[caught4k]---------------------------------------------\\           
        if (private_chat.includes(":caught4k:")){chat = private_chat.replace(':caught4k:', '<img src="'+fourK+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":caught4k:")){chat = public_chat.replace  (':caught4k:', '<img src="'+fourK+'" width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[4wierd]---------------------------------------------\\
        if (private_chat.includes(":4weird:")){chat = private_chat.replace(':4weird:', '<img src="'+fourweird+'"width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":4weird:")){chat = public_chat.replace  (':4weird:', '<img src="'+fourweird+'"width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[kekw]---------------------------------------------\\
        if (private_chat.includes(":kekw:")){chat = private_chat.replace(':kekw:', '<img src="'+kekw+'"width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":kekw:")){chat = public_chat.replace  (':kekw:', '<img src="'+kekw+'"width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[kekyou]---------------------------------------------\\
        if (private_chat.includes(":kekyou:")){chat = private_chat.replace(':kekyou:', '<img src="'+kekyou+'"width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":kekyou:")){chat = public_chat.replace  (':kekyou:', '<img src="'+kekyou+'"width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[feelsgaymen]---------------------------------------------\\
        if (private_chat.includes(":feelsgaymen:")){chat = private_chat.replace(':feelsgaymen:', '<img src="'+feelsgaymen+'"width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":feelsgaymen:")){chat = public_chat.replace  (':feelsgaymen:', '<img src="'+feelsgaymen+'"width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[shinekiss]---------------------------------------------\\
        if (private_chat.includes(":shinekiss:")){chat = private_chat.replace(':shinekiss:', '<img src="'+shinekiss+'"width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":shinekiss:")){chat = public_chat.replace  (':shinekiss:', '<img src="'+shinekiss+'"width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[kissy]---------------------------------------------\\
        if (private_chat.includes(":kissy:")){chat = private_chat.replace(':kissy:', '<img src="'+kissy+'"width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":kissy:")){chat = public_chat.replace  (':kissy:', '<img src="'+kissy+'"width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------------------------------------[egirlkiss]---------------------------------------------\\
        if (private_chat.includes(":egirlkiss:")){chat = private_chat.replace(':egirlkiss:', '<img src="'+egirlkiss+'"width="'+emoji_width+'" height="'+emoji_height+'"></img>');private.innerHTML = chat;}
        if (public_chat.includes(":egirlkiss:")){chat = public_chat.replace  (':egirlkiss:', '<img src="'+egirlkiss+'"width="'+emoji_width+'" height="'+emoji_height+'"></img>');public.innerHTML = chat;}
//---------------Error shit---------------//
    } catch (error) {
        if (error.name.toString() == "TypeError") {
}}},);
const emoji_button = document.createElement("div")
emoji_button.id = 'emoji_tab_button'
document.getElementById("huds").appendChild(emoji_button)
document.getElementById('emoji_tab_button').innerHTML = '<img class="emoji_button" src="https://emoji.gg/assets/emoji/4261-cooldoggo.gif" alt="logo" width="45" height="45">'
document.getElementById('emoji_tab_button').addEventListener('click', emoji_list_show)
const emoji_list_a = document.createElement("div")
emoji_list_a.id = 'emoji_tab_list'
document.getElementById("huds").appendChild(emoji_list_a)
function emoji_list_show(){
        const boxes = document.getElementsByClassName('emoji_text');

        if (document.getElementById('emoji_tab_list').style.display === 'none'){
                document.getElementById('emoji_tab_list').style.display = 'grid'
                document.getElementById('emoji_tab_button').style.left = "495px";
        for (const box of boxes) {
                box.style.display = 'block';
        }}
        else {
        document.getElementById('emoji_tab_list').style.display = 'none'
        document.getElementById('emoji_tab_button').style.left = "270px";
        for (const box of boxes) {
                box.style.display = 'none';
        }}
}
// '<img class="emoji_text" src="'+emoji+'" width="35" height="35"></img>'+ //
var emoji_list = document.getElementById('emoji_tab_list')
emoji_list.style.display = 'none'
emoji_list.innerHTML =  '<img class="emoji_text" src="'+kitty+'" width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+cock+'" width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+sad_cat+'" width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+doggo_dance+'" width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+shaky_shaky+'" width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+ban_ban+'" width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+joy_abel+'" width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+doggo+'" width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+mad_blob+'" width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+flame+'" width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+gg+'" width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+clappin_cheeks+'" width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+dababy+'"width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+peaceout+'"width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+wut+'"width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+ez+'"width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+twerk+'"width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+stare+'"width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+hakcan+'"width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+thonk+'"width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+awana+'"width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+clapp+'"width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+amongus+'"width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+vibing+'"width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+eri+'"width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+sheeesh+'"width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+mcdonalds+'"width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+fourK+'"width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+fourweird+'" width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+kekw+'" width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+kekyou+'" width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+feelsgaymen+'" width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+shinekiss+'" width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+kissy+'" width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+egirlkiss+'" width="35" height="35"></img>'
var textbar = document.getElementById("chat-box")
var textbox = []
emoji_list.children[0].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':kitty:';          textbar.value = textbox})
emoji_list.children[1].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':cock:';           textbar.value = textbox})
emoji_list.children[2].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':sadcat:';         textbar.value = textbox})
emoji_list.children[3].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':doggodance:';     textbar.value = textbox})
emoji_list.children[4].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':shakyshaky:';     textbar.value = textbox})
emoji_list.children[5].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':ban:';            textbar.value = textbox})
emoji_list.children[6].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':joyabel:';        textbar.value = textbox})
emoji_list.children[7].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':doggo:';          textbar.value = textbox})
emoji_list.children[8].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':madblob:';        textbar.value = textbox})
emoji_list.children[9].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':flame:';          textbar.value = textbox})
emoji_list.children[10].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':gg:';            textbar.value = textbox})
emoji_list.children[11].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':clappincheeks:'; textbar.value = textbox})
emoji_list.children[12].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':dababy:';        textbar.value = textbox})
emoji_list.children[13].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':peaceout:';      textbar.value = textbox})
emoji_list.children[14].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':wut:';           textbar.value = textbox})
emoji_list.children[15].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':ez:';            textbar.value = textbox})
emoji_list.children[16].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':twerk:';         textbar.value = textbox})
emoji_list.children[17].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':stare:';         textbar.value = textbox})
emoji_list.children[18].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':hakcan:';        textbar.value = textbox})
emoji_list.children[19].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':thonk:';         textbar.value = textbox})
emoji_list.children[20].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':awana:';         textbar.value = textbox})
emoji_list.children[21].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':clapp:';         textbar.value = textbox})
emoji_list.children[22].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':amongus:';       textbar.value = textbox})
emoji_list.children[23].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':vibing:';        textbar.value = textbox})
emoji_list.children[24].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':eri:';           textbar.value = textbox})
emoji_list.children[25].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':sheeesh:';       textbar.value = textbox})
emoji_list.children[26].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':mcdonalds:';     textbar.value = textbox})
emoji_list.children[27].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':caught4k:';      textbar.value = textbox})
emoji_list.children[28].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':4weird:';        textbar.value = textbox})
emoji_list.children[29].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':kekw:';          textbar.value = textbox})
emoji_list.children[30].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':kekyou:';        textbar.value = textbox})
emoji_list.children[31].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':feelsgaymen:';   textbar.value = textbox})
emoji_list.children[32].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':shinekiss:';     textbar.value = textbox})
emoji_list.children[33].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':kissy:';         textbar.value = textbox})
emoji_list.children[34].addEventListener('click', function(){textbox = textbar.value; textbox = textbox + ':egirlkiss:';     textbar.value = textbox})

const boxes = document.getElementsByClassName('emoji_text');
for (const box of boxes) {
        box.style.display = 'none';
}
