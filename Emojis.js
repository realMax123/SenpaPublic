    //---------------------------Emoji links-----------------------------\\
    // -- '<img src="" width="20" height="20"></img>'
    var kitty =         'https://emoji.gg/assets/emoji/9553-cat-smile.png'
    var cock =          'https://c.tenor.com/9QMTL4kgC5UAAAAC/dead-emoji.gif'
    var sad_cat =       'https://emoji.discord.st/emojis/1685a79a-23f8-4307-9487-a1a5cb59302f.png'
    var doggo_dance =   'https://emoji.discord.st/emojis/d3897e57-3a33-4136-a6bb-882343233261.gif'
    var shaky_shaky =   'https://cdn.discordapp.com/attachments/931966555976245279/937783980118397008/shakyshaky.gif'
    var ban_ban =       'https://emoji.discord.st/emojis/73e3dd54-6b57-46ef-b9de-3ed3914bbd0b.png'
    var joy_abel =      'https://emoji.discord.st/emojis/JoyRow.gif'
    var daze_laugh =    'https://emoji.discord.st/emojis/972d318f-0fd3-4201-827a-bec816a02707.gif'
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

setInterval(function() {
    try {

        var private_chat = document.getElementById("chat-party-room").lastElementChild.getElementsByClassName("message")[0].innerHTML
        var public_chat = document.getElementById("chat-all-room").lastElementChild.getElementsByClassName("message")[0].innerHTML
        var private = 'chat-party-room'
        var public = 'chat-all-room'

        //---------------------------------------------[Kitty]---------------------------------------------\\

        if (private_chat.includes(":kitty:")){          
            var chat = private_chat.replace(':kitty:', '<img src="'+kitty+'"width="20" height="20"></img>');
            document.getElementById(private).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        } 
        else if (public_chat.includes(":kitty:")){           
            var chat = public_chat.replace(':kitty:', '<img src="'+kitty+'"width="20" height="20"></img>');
            document.getElementById(public).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        //---------------------------------------------[cock]---------------------------------------------\\  
        
        if (private_chat.includes(":cock:")){
            var chat = private_chat.replace(':cock:', '<img src="'+cock+'" width="20" height="20"></img>');
            document.getElementById(private).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        else if (public_chat.includes(":cock:")){
            var chat = public_chat.replace(':cock:', '<img src="'+cock+'" width="20" height="20"></img>');
            document.getElementById(public).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        //---------------------------------------------[sadcat]---------------------------------------------\\
        
        if (private_chat.includes(":sadcat:")){
            var chat = private_chat.replace(':sadcat:', '<img src="'+sad_cat+'" width="20" height="20"></img>');
            document.getElementById(private).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        else if (public_chat.includes(":sadcat:")){
            var chat = public_chat.replace(':sadcat:', '<img src="'+sad_cat+'" width="20" height="20"></img>');
            document.getElementById(public).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        //---------------------------------------------[doggodance]---------------------------------------------\\

        if (private_chat.includes(":doggodance:")){
            var chat = private_chat.replace(':doggodance:', '<img src="'+doggo_dance+'" width="20" height="20"></img>');
            document.getElementById(private).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        else if (public_chat.includes(":doggodance:")){
            var chat = public_chat.replace(':doggodance:', '<img src="'+doggo_dance+'" width="20" height="20"></img>');
            document.getElementById(public).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }

        //---------------------------------------------[shakyshaky]---------------------------------------------\\

        if (private_chat.includes(":shakyshaky:")){
            var chat = private_chat.replace(':shakyshaky:', '<img src="'+shaky_shaky+'" width="20" height="20"></img>');
            document.getElementById(private).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        else if (public_chat.includes(":shakyshaky:")){
            var chat = public_chat.replace(':shakyshaky:', '<img src="'+shaky_shaky+'" width="20" height="20"></img>');
            document.getElementById(public).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        //---------------------------------------------[ban]---------------------------------------------\\

        if (private_chat.includes(":ban:")){
            var chat = private_chat.replace(':ban:', '<img src="'+ban_ban+'" width="20" height="20"></img>');
            document.getElementById(private).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        else if (public_chat.includes(":ban:")){
            var chat = public_chat.replace(':ban:', '<img src="'+ban_ban+'" width="20" height="20"></img>');
            document.getElementById(public).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        //---------------------------------------------[joyabel]---------------------------------------------\\

        if (private_chat.includes(":joyabel:")){
            var chat = private_chat.replace(':joyabel:', '<img src="'+joy_abel+'" width="20" height="20"></img>');
            document.getElementById(private).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        else if (public_chat.includes(":joyabel:")){
            var chat = public_chat.replace(':joyabel:', '<img src="'+joy_abel+'" width="20" height="20"></img>');
            document.getElementById(public).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        //---------------------------------------------[dazelaugh]---------------------------------------------\\
        
        if (private_chat.includes(":dazelaugh:")){
            var chat = private_chat.replace(':dazelaugh:', '<img src="'+daze_laugh+'" width="20" height="20"></img>');
            document.getElementById(private).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        else if (public_chat.includes(":dazelaugh:")){
            var chat = public_chat.replace(':dazelaugh:', '<img src="'+daze_laugh+'" width="20" height="20"></img>');
            document.getElementById(public).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        //---------------------------------------------[madblob]---------------------------------------------\\
                        
        if (private_chat.includes(":madblob:")){
            var chat = private_chat.replace(':madblob:', '<img src="'+mad_blob+'" width="20" height="20"></img>');
            document.getElementById(private).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        else if (public_chat.includes(":madblob:")){
            var chat = public_chat.replace(':madblob:', '<img src="'+mad_blob+'" width="20" height="20"></img>');
            document.getElementById(public).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        //---------------------------------------------[flame]---------------------------------------------\\
                                
        if (private_chat.includes(":flame:")){
            var chat = private_chat.replace(':flame:', '<img src="'+flame+'" width="20" height="20"></img>');
            document.getElementById(private).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        else if (public_chat.includes(":flame:")){
            var chat = public_chat.replace(':flame:', '<img src="'+flame+'" width="20" height="20"></img>');
            document.getElementById(public).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        //---------------------------------------------[gg]---------------------------------------------\\
                                        
        if (private_chat.includes(":gg:")){
            var chat = private_chat.replace(':gg:', '<img src="'+gg+'" width="20" height="20"></img>');
            document.getElementById(private).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        else if (public_chat.includes(":gg:")){
            var chat = public_chat.replace(':gg:', '<img src="'+gg+'" width="20" height="20"></img>');
            document.getElementById(public).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        //---------------------------------------------[clappincheeks]---------------------------------------------\\
                                                
        if (private_chat.includes(":clappincheeks:")){
            var chat = private_chat.replace(':clappincheeks:', '<img src="'+clappin_cheeks+'" width="20" height="20"></img>');
            document.getElementById(private).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        else if (public_chat.includes(":clappincheeks:")){
            var chat = public_chat.replace(':clappincheeks:', '<img src="'+clappin_cheeks+'" width="20" height="20"></img>');
            document.getElementById(public).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }

        //---------------------------------------------[dababy]---------------------------------------------\\

        if (private_chat.includes(":dababy:")){
            var chat = private_chat.replace(':dababy:', '<img src="'+dababy+'" width="20" height="20"></img>');
            document.getElementById(private).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        else if (public_chat.includes(":dababy:")){
            var chat = public_chat.replace(':dababy:', '<img src="'+dababy+'" width="20" height="20"></img>');
            document.getElementById(public).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }

        //---------------------------------------------[peaceout]---------------------------------------------\\
                
        if (private_chat.includes(":peaceout:")){
            var chat = private_chat.replace(':peaceout:', '<img src="'+peaceout+'" width="20" height="20"></img>');
            document.getElementById(private).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        else if (public_chat.includes(":peaceout:")){
            var chat = public_chat.replace(':peaceout:', '<img src="'+peaceout+'" width="20" height="20"></img>');
            document.getElementById(public).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }

        //---------------------------------------------[wut]---------------------------------------------\\
                
        if (private_chat.includes(":wut:")){
            var chat = private_chat.replace(':wut:', '<img src="'+wut+'" width="20" height="20"></img>');
            document.getElementById(private).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        else if (public_chat.includes(":wut:")){
            var chat = public_chat.replace(':wut:', '<img src="'+wut+'" width="20" height="20"></img>');
            document.getElementById(public).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }

        //---------------------------------------------[ez]---------------------------------------------\\
                
        if (private_chat.includes(":ez:")){
            var chat = private_chat.replace(':ez:', '<img src="'+ez+'" width="20" height="20"></img>');
            document.getElementById(private).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        else if (public_chat.includes(":ez:")){
            var chat = public_chat.replace(':ez:', '<img src="'+ez+'" width="20" height="20"></img>');
            document.getElementById(public).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }

        //---------------------------------------------[twerk]---------------------------------------------\\
                
        if (private_chat.includes(":twerk:")){
            var chat = private_chat.replace(':twerk:', '<img src="'+twerk+'" width="20" height="20"></img>');
            document.getElementById(private).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        else if (public_chat.includes(":twerk:")){
            var chat = public_chat.replace(':twerk:', '<img src="'+twerk+'" width="20" height="20"></img>');
            document.getElementById(public).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }

        //---------------------------------------------[stare]---------------------------------------------\\
                
        if (private_chat.includes(":stare:")){
            var chat = private_chat.replace(':stare:', '<img src="'+stare+'" width="20" height="20"></img>');
            document.getElementById(private).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        else if (public_chat.includes(":stare:")){
            var chat = public_chat.replace(':stare:', '<img src="'+stare+'" width="20" height="20"></img>');
            document.getElementById(public).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }

        //---------------------------------------------[hakcan]---------------------------------------------\\
                
        if (private_chat.includes(":hakcan:")){
            var chat = private_chat.replace(':hakcan:', '<img src="'+hakcan+'" width="20" height="20"></img>');
            document.getElementById(private).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        else if (public_chat.includes(":hakcan:")){
            var chat = public_chat.replace(':hakcan:', '<img src="'+hakcan+'" width="20" height="20"></img>');
            document.getElementById(public).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }

        //---------------------------------------------[thonk]---------------------------------------------\\
                
        if (private_chat.includes(":thonk:")){
            var chat = private_chat.replace(':thonk:', '<img src="'+thonk+'" width="20" height="20"></img>');
            document.getElementById(private).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        else if (public_chat.includes(":thonk:")){
            var chat = public_chat.replace(':thonk:', '<img src="'+thonk+'" width="20" height="20"></img>');
            document.getElementById(public).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }

        //---------------------------------------------[awana]---------------------------------------------\\
                
        if (private_chat.includes(":awana:")){
            var chat = private_chat.replace(':awana:', '<img src="'+awana+'" width="20" height="20"></img>');
            document.getElementById(private).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        else if (public_chat.includes(":awana:")){
            var chat = public_chat.replace(':awana:', '<img src="'+awana+'" width="20" height="20"></img>');
            document.getElementById(public).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }

        //---------------------------------------------[clapp]---------------------------------------------\\
                        
        if (private_chat.includes(":clapp:")){
            var chat = private_chat.replace(':clapp:', '<img src="'+clapp+'" width="20" height="20"></img>');
            document.getElementById(private).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        else if (public_chat.includes(":clapp:")){
            var chat = public_chat.replace(':clapp:', '<img src="'+clapp+'" width="20" height="20"></img>');
            document.getElementById(public).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }

        //---------------------------------------------[amongus]---------------------------------------------\\
                        
        if (private_chat.includes(":amongus:")){
            var chat = private_chat.replace(':amongus:', '<img src="'+amongus+'" width="20" height="20"></img>');
            document.getElementById(private).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        else if (public_chat.includes(":amongus:")){
            var chat = public_chat.replace(':amongus:', '<img src="'+amongus+'" width="20" height="20"></img>');
            document.getElementById(public).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }

        //---------------------------------------------[vibing]---------------------------------------------\\
                        
        if (private_chat.includes(":vibing:")){
            var chat = private_chat.replace(':vibing:', '<img src="'+vibing+'" width="20" height="20"></img>');
            document.getElementById(private).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        else if (public_chat.includes(":vibing:")){
            var chat = public_chat.replace(':vibing:', '<img src="'+vibing+'" width="20" height="20"></img>');
            document.getElementById(public).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }

        //---------------------------------------------[eri]---------------------------------------------\\
                        
        if (private_chat.includes(":eri:")){
            var chat = private_chat.replace(':eri:', '<img src="'+eri+'" width="20" height="20"></img>');
            document.getElementById(private).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        else if (public_chat.includes(":eri:")){
            var chat = public_chat.replace(':eri:', '<img src="'+eri+'" width="20" height="20"></img>');
            document.getElementById(public).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }

        //---------------------------------------------[sheeesh]---------------------------------------------\\
                        
        if (private_chat.includes(":sheeesh:")){
            var chat = private_chat.replace(':sheeesh:', '<img src="'+sheeesh+'" width="20" height="20"></img>');
            document.getElementById(private).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        else if (public_chat.includes(":sheeesh:")){
            var chat = public_chat.replace(':sheeesh:', '<img src="'+sheeesh+'" width="20" height="20"></img>');
            document.getElementById(public).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }

        //---------------------------------------------[mcdonalds]---------------------------------------------\\
                        
        if (private_chat.includes(":mcdonalds:")){
            var chat = private_chat.replace(':mcdonalds:', '<img src="'+mcdonalds+'" width="20" height="20"></img>');
            document.getElementById(private).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        else if (public_chat.includes(":mcdonalds:")){
            var chat = public_chat.replace(':mcdonalds:', '<img src="'+mcdonalds+'" width="20" height="20"></img>');
            document.getElementById(public).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }

        //---------------------------------------------[something]---------------------------------------------\\
                        
        if (private_chat.includes(":caught4k:")){
            var chat = private_chat.replace(':caught4k:', '<img src="'+fourK+'" width="20" height="20"></img>');
            document.getElementById(private).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }
        else if (public_chat.includes(":caught4k:")){
            var chat = public_chat.replace(':caught4k:', '<img src="'+fourK+'" width="20" height="20"></img>');
            document.getElementById(public).lastElementChild.getElementsByClassName("message")[0].innerHTML = chat;
        }

        //---------------------------------------------[something]---------------------------------------------\\
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
    if (document.getElementById('emoji_tab_list').style.display === 'none'){
        document.getElementById('emoji_tab_list').style.display = 'grid'
        document.getElementById('emoji_tab_button').style.left = "466px";
    }else {
        document.getElementById('emoji_tab_list').style.display = 'none'
        document.getElementById('emoji_tab_button').style.left = "235px";
    }
}
var emoji_list = document.getElementById('emoji_tab_list')
emoji_list.style.display = 'none'
emoji_list.innerHTML =  '<img class="emoji_text" src="'+kitty+'" width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+cock+'" width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+sad_cat+'" width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+doggo_dance+'" width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+shaky_shaky+'" width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+ban_ban+'" width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+joy_abel+'" width="35" height="35"></img>'+
                        '<img class="emoji_text" src="'+daze_laugh+'" width="35" height="35"></img>'+
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
                        '<img class="emoji_text" src="'+fourK+'"width="35" height="35"></img>'
var textbar = document.getElementById("chat-box")
emoji_list.children[0].addEventListener('click', function(){textbar.value = ':kitty:'})
emoji_list.children[1].addEventListener('click', function(){textbar.value = ':cock:'})
emoji_list.children[2].addEventListener('click', function(){textbar.value = ':sadcat:'})
emoji_list.children[3].addEventListener('click', function(){textbar.value = ':doggodance:'})
emoji_list.children[4].addEventListener('click', function(){textbar.value = ':shakyshaky:'})
emoji_list.children[5].addEventListener('click', function(){textbar.value = ':ban:'})
emoji_list.children[6].addEventListener('click', function(){textbar.value = ':joyabel:'})
emoji_list.children[7].addEventListener('click', function(){textbar.value = ':dazelaugh:'})
emoji_list.children[8].addEventListener('click', function(){textbar.value = ':madblob:'})
emoji_list.children[9].addEventListener('click', function(){textbar.value = ':flame:'})
emoji_list.children[10].addEventListener('click', function(){textbar.value = ':gg:'})
emoji_list.children[11].addEventListener('click', function(){textbar.value = ':clappincheeks:'})
emoji_list.children[12].addEventListener('click', function(){textbar.value = ':dababy:'})
emoji_list.children[13].addEventListener('click', function(){textbar.value = ':peaceout:'})
emoji_list.children[14].addEventListener('click', function(){textbar.value = ':wut:'})
emoji_list.children[15].addEventListener('click', function(){textbar.value = ':ez:'})
emoji_list.children[16].addEventListener('click', function(){textbar.value = ':twerk:'})
emoji_list.children[17].addEventListener('click', function(){textbar.value = ':stare:'})
emoji_list.children[18].addEventListener('click', function(){textbar.value = ':hakcan:'})
emoji_list.children[19].addEventListener('click', function(){textbar.value = ':thonk:'})
emoji_list.children[20].addEventListener('click', function(){textbar.value = ':awana:'})
emoji_list.children[21].addEventListener('click', function(){textbar.value = ':clapp:'})
emoji_list.children[22].addEventListener('click', function(){textbar.value = ':amongus:'})
emoji_list.children[23].addEventListener('click', function(){textbar.value = ':vibing:'})
emoji_list.children[24].addEventListener('click', function(){textbar.value = ':eri:'})
emoji_list.children[25].addEventListener('click', function(){textbar.value = ':sheeesh:'})
emoji_list.children[26].addEventListener('click', function(){textbar.value = ':mcdonalds:'})
emoji_list.children[27].addEventListener('click', function(){textbar.value = ':caught4k:'})
