(function() {
    let style = 
`<style>

.loop-holder {
    display: flex;
    white-space: nowrap;
    overflow: hidden;
  }
.loop-holder__text {
    animation: textLoop 10s linear infinite;
    font-size: 100%;
    padding-right: .35em;
    resize: none;
    color: red;
    font-weight: bold;
}
@keyframes textLoop {
    0% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }
    100% {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0)
    }
}
#new-panel .partition.left, #settings-panel .partition.left canvas {
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
}

#huds #chat-room div .nick #legend {
    animation: colorRotate 5s linear 0s infinite;
}
@keyframes colorRotate {
    from {
      color: #6666ff;
    }
    10% {
      color: #0099ff;
    }
    50% {
      color: #00ff00;
    }
    75% {
      color: #ff3399;
    }
    100% {
      color: #6666ff;
    }
}
#menu .main-menu #EXT-locked-name {
    color: #4bff00;
    font-weight: 800;
    font-size: 18px;
    position: relative;
    top: 5px;
    right: 60px;
    width: 0px;
}
#Extended-Version {
    animation: colorRotate 5s linear 0s infinite;
    font-weight: 800;
    font-size: 16.4px;
    position: relative;
    bottom: 193px;
    left: 21px;
    height: 0px;
}
#new-panel .partition.right .setting.opt-toggle1 .name, #settings-panel .partition.right .setting.opt-toggle1 .name {
    font-weight: 500;
    font-size: 18px;
    width: 250px;
    display: inline-block;
}
#new-panel .partition.right .setting.opt-toggle1 .toggle-btn, #settings-panel .partition.right .setting.opt-toggle1 .toggle-btn {
    width: 35px;
    height: 20px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    left: 274px;
}
#new-panel .partition.right .setting.opt-toggle1 .toggle-btn .slide, #settings-panel .partition.right .setting.opt-toggle1 .toggle-btn .slide {
    height: 12px;
    border-radius: 5px;
    background: #555;
    width: 35px;
    position: absolute;
    top: 7px;
    transition: all .5s;
}
#new-panel .partition.right .setting.opt-toggle1 .toggle-btn .ball, #settings-panel .partition.right .setting.opt-toggle1 .toggle-btn .ball {
    border-radius: 50%;
    width: 18px;
    height: 18px;
    background: #fff;
    position: absolute;
    top: 4px;
    left: 0;
    transition: all .5s;
}
#new-panel .partition.right .setting.opt-toggle1 .dropdown-box, #settings-panel .partition.right .setting.opt-toggle1 .dropdown-box {
    width: 200px;
    text-align: right;
    font-weight: 500;
    font-size: 18px;
    display: inline-block;
    white-space: nowrap;
    position: relative;
    cursor: pointer;
}
#new-panel .partition.right .setting.opt-toggle1 .dropdown-box .selected, #settings-panel .partition.right .setting.opt-toggle1 .dropdown-box .selected {
    display: inline-block;
    width: 175px;
}
#new-panel .partition.right .setting.opt-toggle1 .dropdown-box i, #settings-panel .partition.right .setting.opt-toggle1 .dropdown-box i {
    width: 20px;
    margin-left: 5px;
}
#new-panel .partition.right .setting.opt-toggle1 .dropdown-box .dropdown-list, #settings-panel .partition.right .setting.opt-toggle1 .dropdown-box .dropdown-list {
    display: none;
    position: absolute;
    background: #444;
    min-width: 100px;
    top: 20px;
    right: 0;
    text-align: center;
    z-index: 1;
}
#new-panel .partition.right .setting.opt-toggle1 .dropdown-box .dropdown-list .dropdown-item, #settings-panel .partition.right .setting.opt-toggle1 .dropdown-box .dropdown-list .dropdown-item {
    padding: 4px 8px;
}
#new-panel .partition.right .setting, #settings-panel .partition.right .setting {
    padding: 16px;
    transition: all .5s;
}
#huds #emoji_tab_button {
    position: fixed;
    bottom: 50px;
    left: 270px;
    width: 45px;
    height: 45px;
}
#huds #emoji_tab_list {
    width: 225px;
    height: 342px;
    position: fixed;
    bottom: 50px;
    left: 270px;
    transform-origin: left;
    background: rgba(10,10,10,.3);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5px;
    grid-auto-rows: 36px;
}
#huds .leaderboard-hud #leaderboard-positions {
    font-weight: 600;
}
#huds #chat-room div {
    font-weight: 600;
}
.emoji_text:hover {
    transform: scale(1.3);
    }
#menu .main-menu .panel.right .list-container .list-row:hover {
    background: #ffffff3d;
}
#menu .main-menu .panel.right .region-selectors .tab.active {
    background: #3330;
}
#ad-slot-center-panel, #main-left-panel {
    background-color: #3330;
}
#menu .main-menu .panel.center .input-field {
    background: #28282857;
}
#menu .main-menu .panel.right .region-selectors .tab {
    background: #3330;
}

#menu .main-menu .panel.right .list-container {
    background: #3330;
}
.account-profile .account-panel {
    background-color: #3330;
}
#menu .main-menu .panel.right .list-container #server-list {
    background: #3330;
}
#account-panel #pf-avatar {
    border: 6px solid #3330;
    background-color: #3330;
}
#new-panel .partition.left .tab:hover,#settings-panel .partition.left .tab:hover {
    background: #222
}
#menu .main-menu {
    background-image: url();
    background-size: 1015px 539px;
}
</style>`;
    document.head.insertAdjacentHTML("beforeend", style);
})();

//▼▼ Removing useless shit / setting default values for mod / adding small details ▼▼
document.getElementsByClassName("advertisement-informer")[0].remove();
document.getElementsByClassName("partition right")[0].remove();
document.getElementsByClassName("close-button")[0].remove();
document.getElementById("ad-slot-center-panel").remove();
document.getElementsByClassName("banner")[0].remove();
document.getElementsByClassName("info-text")[0].outerHTML = '<div class="loop-holder"><div class="loop-holder__text">丨Modded By Veky and Shine丨</div><div class="loop-holder__text">丨Modded By Veky and Shine丨</div><div class="loop-holder__text">丨Modded By Veky and Shine丨</div>'
document.getElementById('chat-box').placeholder = '殺ExtendedSenpaす: Send message..'
document.getElementsByClassName("main-menu")[0].style.setProperty("border", "#ffffff00")
document.getElementById('chat-room').style['height'] = '360px'
document.getElementById('chat-room').style['width'] = '260px'
var mod_version = '0.3.1'

//▼▼ DBug console log [Only used for Dbugging code (devs work) ignore if your normal user] ▼▼
//Use to activate dbugging without need to change code
//ExtDbug.innerHTML = 'true'                  | basic functions as save-all, get-all, new stuff created
//ExtDbugRole.innerHTML = 'true'              | special roles (Vip+,Dev,etc..)  [NOTE : SPAM CONSOLE]
document.getElementById('root').appendChild(document.createElement('div'))
document.getElementById('root').lastChild.outerHTML = '<div id=Extended_Senpa></div>'
var root = document.getElementById('Extended_Senpa')
root.appendChild(document.createElement('div'))
root.appendChild(document.createElement('div'))
root.children[0].outerHTML = '<div id=Extended-Dbug></div>'
root.children[1].outerHTML = '<div id=Extended-Dbug-roles></div>'
var extensionDbug = document.body.appendChild(document.createElement('script'))
extensionDbug.innerHTML = 'var ExtDbug = document.getElementById("Extended-Dbug"); var ExtDbugRole = document.getElementById("Extended-Dbug-roles");'
var DBug = document.getElementById('Extended-Dbug');           DBug.style.display = 'none'; DBug.innerHTML = 'false'
var DBugRole = document.getElementById('Extended-Dbug-roles'); DBugRole.style.display = 'none'; DBugRole.innerHTML = 'false' 
function DBug_save_bg_color()   {if(DBug.innerHTML == 'true'){console.log('殺ExtendedSenpaす: Saved new background color value')}}
function DBug_save_bg_border()  {if(DBug.innerHTML == 'true'){console.log('殺ExtendedSenpaす: Saved new background border value')}}
function DBug_save_main_color() {if(DBug.innerHTML == 'true'){console.log('殺ExtendedSenpaす: Saved main primary color value')}}
function DBug_save_logo_color() {if(DBug.innerHTML == 'true'){console.log('殺ExtendedSenpaす: Saved senpa logo color value')}}
function DBug_save_xpbutton_pos(){if(DBug.innerHTML == 'true'){console.log('殺ExtendedSenpaす: Saved xp button position')}}
function DBug_save_disc_button(){if(DBug.innerHTML == 'true'){console.log('殺ExtendedSenpaす: Saved hide discord id button position')}}
function DBug_save_bg_link()    {if(DBug.innerHTML == 'true'){console.log('殺ExtendedSenpaす: Saved background link value')}}
function DBug_save_bg_button()  {if(DBug.innerHTML == 'true'){console.log('殺ExtendedSenpaす: Saved background button position')}}
function DBug_get_bg_color()    {if(DBug.innerHTML == 'true'){console.log('殺ExtendedSenpaす: Get background color value')}}
function DBug_get_bg_border()   {if(DBug.innerHTML == 'true'){console.log('殺ExtendedSenpaす: Get background border value')}}
function DBug_get_main_color()  {if(DBug.innerHTML == 'true'){console.log('殺ExtendedSenpaす: Get main primary color value')}}
function DBug_get_logo_color()  {if(DBug.innerHTML == 'true'){console.log('殺ExtendedSenpaす: Get senpa logo color value')}}
function DBug_get_xpbutton_pos(){if(DBug.innerHTML == 'true'){console.log('殺ExtendedSenpaす: Get xp button position')}}
function Dbug_get_discord_pos() {if(DBug.innerHTML == 'true'){console.log('殺ExtendedSenpaす: Get discord id button position')}}
function DBug_get_bg_link()     {if(DBug.innerHTML == 'true'){console.log('殺ExtendedSenpaす: Get background link value')}}
function DBug_get_bg_button()   {if(DBug.innerHTML == 'true'){console.log('殺ExtendedSenpaす: Get background button position')}}
function DBug_create_lockName() {if(DBug.innerHTML == 'true'){console.log('殺ExtendedSenpaす: Created Locked Name div(html)')}}
function DBug_create_ext_sett() {if(DBug.innerHTML == 'true'){console.log('殺ExtendedSenpaす: Created option Extended Mod in settings')}}
function DBug_create_user_sett(){if(DBug.innerHTML == 'true'){console.log('殺ExtendedSenpaす: Created user settings inside Extended Mod')}}
function Dbug_add_events_list() {if(DBug.innerHTML == 'true'){console.log('殺ExtendedSenpaす: Adding event listeners')}}
function DBug_closed_endgame()  {if(DBug.innerHTML == 'true'){console.log('殺ExtendedSenpaす: Closing deth screen menu')}}
function DBug_Dev_Role()        {if(DBugRole.innerHTML == 'true'){console.log('殺ExtendedSenpaす: Last user has role Dev')}}
function DBug_Legend_Role()     {if(DBugRole.innerHTML == 'true'){console.log('殺ExtendedSenpaす: Last user has role Legend')}}
function DBug_Goat_Role()       {if(DBugRole.innerHTML == 'true'){console.log('殺ExtendedSenpaす: Last user has role Goat')}}
function DBug_Vip_Role()        {if(DBugRole.innerHTML == 'true'){console.log('殺ExtendedSenpaす: Last user has role Vip+')}}
function DBug_User_Has_Role()   {if(DBugRole.innerHTML == 'true'){console.log('殺ExtendedSenpaす: User has role')}}
function DBug_User_No_Role()    {if(DBugRole.innerHTML == 'true'){console.log('殺ExtendedSenpaす: User does not have role')}}
function DBug_Special_User()    {if(DBugRole.innerHTML == 'true'){console.log('殺ExtendedSenpaす: Special user detected')}}

//▼▼ Adding locked name info ▼▼
document.getElementById('primary-inputs').appendChild(document.createElement('div'))
document.getElementById('primary-inputs').children[2].outerHTML = '<div id="EXT-locked-name">Locked</div>'
document.getElementById('EXT-locked-name').style.display = 'none'
DBug_create_lockName();

//▼▼ Creating Extension tab in settings ▼▼
var partition_left = document.getElementsByClassName("partition left")[0]
var partition_right = document.getElementsByClassName("partition right")[0]
partition_left.appendChild(document.createElement('div'))
partition_left.children[5].outerHTML = '<div class="tab" type="tab" target-container="settings-list" target-name="Extension"></i>▶ Extended Mod</div>' 
partition_right.appendChild(document.createElement('div'))
partition_right.children[11].outerHTML = '<div class="list" data-name="extensionopt"></div>'
var extension = document.getElementsByClassName("list")[4]
extension.appendChild(document.createElement('div'))
extension.appendChild(document.createElement('div'))
extension.children[0].outerHTML = '<div class="tab-row"></div>'
extension.children[1].outerHTML = '<div container-name="settings-list-extension"></div>'

//▼▼ Adding click function / can click and open up mod menu in settings ▼▼
var tab = document.getElementsByClassName("tab")
var list = document.getElementsByClassName("list")
tab[8].addEventListener("click", button_tab)
function button_tab(){
    tab[4].removeAttribute("active")
    tab[5].removeAttribute("active")
    tab[6].removeAttribute("active")
    tab[7].removeAttribute("active")
    tab[8].setAttribute("active", 4)
    list[0].removeAttribute("active")
    list[1].removeAttribute("active")
    list[2].removeAttribute("active")
    list[3].removeAttribute("active")
    list[4].setAttribute("active", 4)
}

//▼▼ Creating Tablist in extended mod settings ▼▼
var tab_row = extension.children[0]
var settings_list = extension.children[1]
tab_row.appendChild(document.createElement('div'))
tab_row.children[0].outerHTML = '<div class="tab" type="tab" target-container="settings-list-menu" target-name="menu" active="4">Menu</div>'
settings_list.appendChild(document.createElement('div'))
settings_list.children[0].outerHTML = '<div class="sub-list" data-name="menu" active>'
DBug_create_ext_sett();

//▼▼ Adding user settings to [Menu] tab ▼▼
var ext_menu = document.getElementsByClassName('sub-list')[16]
ext_menu.appendChild(document.createElement('div'))
ext_menu.appendChild(document.createElement('div'))
ext_menu.appendChild(document.createElement('div'))
ext_menu.appendChild(document.createElement('div'))
ext_menu.appendChild(document.createElement('div'))
ext_menu.appendChild(document.createElement('div'))
ext_menu.appendChild(document.createElement('div'))
ext_menu.children[0].outerHTML = '<div class="setting opt-colorpicker" id="menu_border_color"><div class="name">Menu border glow color</div><div class="minicolors minicolors-theme-default minicolors-position-bottom minicolors-position-right"><input class="text minicolors-input" value="" size="7" placeholder="Hex Code"></div>'
ext_menu.children[1].outerHTML = '<div class="setting opt-colorpicker" id="primary_color"><div class="name">Primary color</div><div class="minicolors minicolors-theme-default minicolors-position-bottom minicolors-position-right"><input class="text minicolors-input" value="" size="7" placeholder="Hex Code"></div>'
ext_menu.children[2].outerHTML = '<div class="setting opt-dropdown" id="senpa_logo_color"><div class="name">Logo color</div><div class="dropdown-box"><div class="selected">Pink</div><i class="fas fa-chevron-down"></i><div class="dropdown-list"></div></div></div>'
var logo_color = document.getElementsByClassName("dropdown-list")[8]
var logo = document.getElementsByClassName("selected")[8]
logo_color.appendChild(document.createElement('div')); logo_color.children[0].outerHTML = '<div class="dropdown-item" id="ownCellColoring">Red</div>';          logo_color.children[0].addEventListener('click', function(){logo.textContent = 'Red',       change_logo_color(); save_logo_color();}); 
logo_color.appendChild(document.createElement('div')); logo_color.children[1].outerHTML = '<div class="dropdown-item" id="ownCellColoring">Orange</div>';       logo_color.children[1].addEventListener('click', function(){logo.textContent = 'Orange',    change_logo_color(); save_logo_color();});   
logo_color.appendChild(document.createElement('div')); logo_color.children[2].outerHTML = '<div class="dropdown-item" id="ownCellColoring">Yellow</div>';       logo_color.children[2].addEventListener('click', function(){logo.textContent = 'Yellow',    change_logo_color(); save_logo_color();}); 
logo_color.appendChild(document.createElement('div')); logo_color.children[3].outerHTML = '<div class="dropdown-item" id="ownCellColoring">Green</div>';        logo_color.children[3].addEventListener('click', function(){logo.textContent = 'Green}',    change_logo_color(); save_logo_color();});
logo_color.appendChild(document.createElement('div')); logo_color.children[4].outerHTML = '<div class="dropdown-item" id="ownCellColoring">Dark Green</div>';   logo_color.children[4].addEventListener('click', function(){logo.textContent = 'Dark Green',change_logo_color(); save_logo_color();});
logo_color.appendChild(document.createElement('div')); logo_color.children[5].outerHTML = '<div class="dropdown-item" id="ownCellColoring">Cyan</div>';         logo_color.children[5].addEventListener('click', function(){logo.textContent = 'Cyan',      change_logo_color(); save_logo_color();});
logo_color.appendChild(document.createElement('div')); logo_color.children[6].outerHTML = '<div class="dropdown-item" id="ownCellColoring">Blue</div>';         logo_color.children[6].addEventListener('click', function(){logo.textContent = 'Blue',      change_logo_color(); save_logo_color();});
logo_color.appendChild(document.createElement('div')); logo_color.children[7].outerHTML = '<div class="dropdown-item" id="ownCellColoring">Dark Blue</div>';    logo_color.children[7].addEventListener('click', function(){logo.textContent = 'Dark Blue', change_logo_color(); save_logo_color();});
logo_color.appendChild(document.createElement('div')); logo_color.children[8].outerHTML = '<div class="dropdown-item" id="ownCellColoring">Purple</div>';       logo_color.children[8].addEventListener('click', function(){logo.textContent = 'Purple',    change_logo_color(); save_logo_color();});
logo_color.appendChild(document.createElement('div')); logo_color.children[9].outerHTML = '<div class="dropdown-item" id="ownCellColoring">Pink</div>';         logo_color.children[9].addEventListener('click', function(){logo.textContent = 'Pink',      change_logo_color(); save_logo_color();});
ext_menu.children[3].outerHTML = '<div class="setting opt-toggle" id="xp_bar"><div class="name">Hide user level xp</div><div class="toggle-btn"><div class="slide"></div><div class="ball"></div></div></div>'
ext_menu.children[4].outerHTML = '<div class="setting opt-toggle" id="discord_id_btn"><div class="name">Hide user discord id</div><div class="toggle-btn"><div class="slide"></div><div class="ball"></div></div></div>'
ext_menu.children[5].outerHTML = '<div class="setting opt-toggle" id="use_menu_background"><div class="name">Use menu background image</div><div class="toggle-btn"><div class="slide"></div><div class="ball"></div></div></div>'
ext_menu.children[6].outerHTML = '<div class="setting opt-input" id="background_link_placeholder"><div class="name">Background image URL</div><input class="text" placeholder="Must be google link | https:// |"></div>'
ext_menu.children[6].style.display = "none"
DBug_create_user_sett();

//Creating def variables
var menu_border_color = document.getElementsByClassName("text minicolors-input")[16]
var main_primary_color = document.getElementsByClassName("text minicolors-input")[17]
var background_image = document.getElementsByClassName("text")[68]
var toggle_button = document.getElementsByClassName("toggle-btn")
var main_menu = document.getElementsByClassName("main-menu")[0]
var xp_bar_button = document.getElementById('xp_bar').children[1]
var discord_id_button = document.getElementById('discord_id_btn').children[1]
var menu_background_button = document.getElementById('use_menu_background').children[1]
//▼▼ Addind event listeners for changing, saving user data ▼▼
document.getElementById('xp_bar').children[1].addEventListener('click', use_xp_bar)
document.getElementById('discord_id_btn').children[1].addEventListener('click', use_discord_btn)
document.getElementById('use_menu_background').children[1].addEventListener('click', use_background_button)
menu_border_color.addEventListener('change', function(){change_border_color(); save_background_border();})
main_primary_color.addEventListener('change', function(){change_primary_color(); save_main_primary_color();})
Dbug_add_events_list();

//▼▼ Creating functions for settings ▼▼
function change_border_color(){main_menu.style.boxShadow = '0 0 30px'+menu_border_color.value}
function use_xp_bar(){
    if  (xp_bar_button.className === 'toggle-btn')
        {xp_bar_button.className = 'toggle-btn active'}
    else{xp_bar_button.className = 'toggle-btn'}
    save_xp_button();}
function use_discord_btn(){
    if  (discord_id_button.className === 'toggle-btn')
        {discord_id_button.className = 'toggle-btn active'}
    else{discord_id_button.className = 'toggle-btn'}
    save_discord_btn();}
function use_background_button(){
    if  (menu_background_button.className === 'toggle-btn')
        {menu_background_button.className = 'toggle-btn active'}
    else{menu_background_button.className = 'toggle-btn'}
    save_background_button();}
function change_logo_color(){
    var link_red =      '<img src="https://i.imgur.com/LYwdFOc.png" alt="logo">'
    var link_orange =   '<img src="https://i.imgur.com/9XZUwmN.png" alt="logo">'
    var link_yellow =   '<img src="https://i.imgur.com/bRAwjZr.png" alt="logo">'
    var link_green =    '<img src="https://i.imgur.com/raQFhDP.png" alt="logo">'
    var link_darkgreen ='<img src="https://i.imgur.com/DoBJIsP.png" alt="logo">'
    var link_cyan =     '<img src="https://i.imgur.com/ajnGKuy.png" alt="logo">'
    var link_blue =     '<img src="https://i.imgur.com/W9FiqLl.png" alt="logo">'
    var link_darkblue = '<img src="https://i.imgur.com/JcK8S2f.png" alt="logo">'
    var link_purple =   '<img src="https://i.imgur.com/i8yhwmr.png" alt="logo">'
    var link_pink =     '<img src="https://i.imgur.com/D25DhfC.png" alt="logo">'
    var senpa_logo_link = document.getElementsByClassName("logo")[0]
        if (logo.textContent === 'Red')         {senpa_logo_link.innerHTML = link_red}
        if (logo.textContent === 'Orange')      {senpa_logo_link.innerHTML = link_orange}
        if (logo.textContent === 'Yellow')      {senpa_logo_link.innerHTML = link_yellow}
        if (logo.textContent === 'Green')       {senpa_logo_link.innerHTML = link_green}
        if (logo.textContent === 'Dark Green')  {senpa_logo_link.innerHTML = link_darkgreen}
        if (logo.textContent === 'Cyan')        {senpa_logo_link.innerHTML = link_cyan}
        if (logo.textContent === 'Blue')        {senpa_logo_link.innerHTML = link_blue}
        if (logo.textContent === 'Dark Blue')   {senpa_logo_link.innerHTML = link_darkblue}
        if (logo.textContent === 'Purple')      {senpa_logo_link.innerHTML = link_purple}
        if (logo.textContent === 'Pink')        {senpa_logo_link.innerHTML = link_pink}}

discordName = []
hidden_discord_id = []
setInterval(function() {
    var bg_link = document.getElementById("background_link_placeholder")
    try{    
        if (discordName == ''){discordName = document.getElementById('pf-name').innerHTML; discordName = discordName;}
        if (hidden_discord_id == '' || hidden_discord_id == 'undefined'){hidden_discord_id = discordName.replace(/[^a-zA-Z]/g,"");}
        if (menu_background_button.className === 'toggle-btn active'){
            bg_link.style.display = "block"
            main_menu.style.setProperty("background-image", "url("+background_image.value+")")
        }
        else{bg_link.style.display = "none"
            main_menu.style.setProperty("background-image", "")
        }
        if (xp_bar_button.className === 'toggle-btn active'){
            document.getElementsByClassName("exp-area")[0].style.display = "none"
        }
        else{document.getElementsByClassName("exp-area")[0].style.display = ""
        }
        if (discord_id_button.className === 'toggle-btn active'){
            document.getElementById('pf-name').innerHTML = hidden_discord_id;
        }
        else {document.getElementById('pf-name').innerHTML = discordName;
        }
    }   catch (error) {}
},100);

//▼▼ Saving all user data settings to google client [cache] ▼▼ 
function save_background_border()   {chrome.storage.sync.set({'border_color': menu_border_color.value}, function(){console.log(DBug_save_bg_border())})}
function save_main_primary_color()  {chrome.storage.sync.set({'main_color': main_primary_color.value}, function(){console.log(DBug_save_main_color())})}
function save_logo_color()          {chrome.storage.sync.set({'senpa_logo_color': logo.textContent}, function(){console.log(DBug_save_logo_color())})}
function save_xp_button()           {chrome.storage.sync.set({'user_xp_button': xp_bar_button.className}, function(){console.log(DBug_save_xpbutton_pos())})}
function save_discord_btn()         {chrome.storage.sync.set({'hide_discord_id': discord_id_button.className}, function(){console.log(DBug_save_disc_button())})}
function save_background_button()   {chrome.storage.sync.set({'use_menu_bg_button': menu_background_button.className}, function(){console.log(DBug_save_bg_button())})}
function save_background_link()     {chrome.storage.sync.set({'background_link': background_image.value}, function(){console.log(DBug_save_bg_link())})}

//▼▼ Load user data from google client [cache] ▼▼
window.onload = function(){
    console.log('殺ExtendedSenpaす: Loading data')
    chrome.storage.sync.get(['senpa_logo_color'], function(data){
        if (data.senpa_logo_color === 'Red')        {logo.textContent = 'Red', change_logo_color()}
        if (data.senpa_logo_color === 'Orange')     {logo.textContent = 'Orange', change_logo_color()}
        if (data.senpa_logo_color === 'Yellow')     {logo.textContent = 'Yellow', change_logo_color()}
        if (data.senpa_logo_color === 'Green')      {logo.textContent = 'Green', change_logo_color()}
        if (data.senpa_logo_color === 'Dark Green') {logo.textContent = 'Dark Green', change_logo_color()}
        if (data.senpa_logo_color === 'Cyan')       {logo.textContent = 'Cyan', change_logo_color()}
        if (data.senpa_logo_color === 'Blue')       {logo.textContent = 'Blue', change_logo_color()}
        if (data.senpa_logo_color === 'Dark Blue')  {logo.textContent = 'Dark Blue', change_logo_color()}
        if (data.senpa_logo_color === 'Purple')     {logo.textContent = 'Purple', change_logo_color()}
        if (data.senpa_logo_color === 'Pink')       {logo.textContent = 'Pink', change_logo_color()}
        DBug_get_logo_color()})
    chrome.storage.sync.get(['border_color'],       function(data){menu_border_color.value = data.border_color, change_border_color(); DBug_get_bg_border()})
    chrome.storage.sync.get(['main_color'],         function(data){main_primary_color.value = data.main_color, change_primary_color(); DBug_get_main_color()})
    chrome.storage.sync.get(['background_link'],    function(data){background_image.value = data.background_link, DBug_get_bg_link()})
    chrome.storage.sync.get(['user_xp_button'],     function(data){if (data.user_xp_button === 'toggle-btn active'){xp_bar_button.className = 'toggle-btn active'}else{xp_bar_button.className = 'toggle-btn'}; DBug_get_xpbutton_pos()})
    chrome.storage.sync.get(['hide_discord_id'],    function(data){if (data.hide_discord_id === 'toggle-btn active'){discord_id_button.className = 'toggle-btn active'}else{discord_id_button.className = 'toggle-btn'}; Dbug_get_discord_pos()})
    chrome.storage.sync.get(['use_menu_bg_button'], function(data){if (data.use_menu_bg_button === 'toggle-btn active'){menu_background_button.className = 'toggle-btn active';} else{menu_background_button.className = 'toggle-btn'}; DBug_get_bg_button()})
}

//▼▼ Setting up sleep function ▼▼
function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}

//▼▼ Auto remove endgame screen [deth screen] ▼▼
setInterval(async function() {
    try {
        var end_game = document.getElementById("endGame")
        if(end_game.getAttribute('style').includes("block")) {
            document.getElementById("ad-button-continue").click()
            await sleep(150);
            document.getElementById("endGame").style = ''
            DBug_closed_endgame();
        }
    }catch (error) {}
},);
//▼▼ For thos who have extension roles and original [VIP] remove vip ▼▼
function checkVip(){
    try{
    var PrivateChat = document.getElementById("chat-party-room").lastElementChild.getElementsByClassName("nick")[0]
    var PublicChat = document.getElementById("chat-all-room").lastElementChild.getElementsByClassName("nick")[0]
    if (PrivateChat.children[1].innerHTML == '[VIP]'){PrivateChat.children[1].innerHTML = ''}
    if (PublicChat.children[1].innerHTML == '[VIP]'){PublicChat.children[1].innerHTML = ''}
    } catch(error){}
}
//▼▼ Give special roles to users ▼▼
//  https://invisible-characters.com
setInterval(function(){
    try{
        var nickname = []
        var ingamename = document.getElementById('name')
        var ExtLocked = document.getElementById('EXT-locked-name')
        var chat_box = document.getElementById('chat-box')
        var party_only = document.getElementById("chat-party-room")
        var public_only = document.getElementById("chat-all-room")
        var party_name = party_only.lastElementChild.getElementsByClassName("nick")[0]
        var public_name = public_only.lastElementChild.getElementsByClassName("nick")[0]
        var party_chat = party_only.lastElementChild.getElementsByClassName("message")[0].innerHTML
        var public_chat = public_only.lastElementChild.getElementsByClassName("message")[0].innerHTML
    //Main function
        if (!party_name.innerHTML.includes('[DEV]')){if (party_chat.includes('𝅺')){if (specialUser == 'true'){DBug_Dev_Role();
            if (party_name.innerHTML.includes('Veky')){nickname = party_name.innerHTML+ ' '; party_name.innerHTML = '<span style="color: blue">[DEV] </span>' +nickname; party_name.setAttribute('style','color: red')}
            if (party_name.innerHTML.includes('Shine')){nickname = party_name.innerHTML+ ' '; party_name.innerHTML = '<span style="color: blue">[DEV] </span>' +nickname; party_name.setAttribute('style','color: red')}
            checkVip();
        }}}
        if (!public_name.innerHTML.includes('[DEV]')){if (public_chat.includes('𝅺')){if (specialUser == 'true'){DBug_Dev_Role();
            if (public_name.innerHTML.includes('Veky')){nickname = public_name.innerHTML+ ' '; public_name.innerHTML = '<span style="color: blue">[DEV] </span>' +nickname; public_name.setAttribute('style','color: red')}
            if (public_name.innerHTML.includes('Shine')){nickname = public_name.innerHTML+ ' '; public_name.innerHTML = '<span style="color: blue">[DEV] </span>' +nickname; public_name.setAttribute('style','color: red')}
            checkVip();
        }}}
        if (!party_name.innerHTML.includes('[GOAT]')){if (party_chat.includes('𝅹')){if (specialUser == 'true'){DBug_Goat_Role();
            if(party_name.innerHTML.includes('Dizaster')){nickname = party_name.innerHTML+ ' '; party_name.innerHTML = '<span style="color: #A70000">[GOAT] </span>'+nickname}
            checkVip();
        }}}
        if (!public_name.innerHTML.includes('[GOAT]')){if (public_chat.includes('𝅹')){if (specialUser == 'true'){DBug_Goat_Role();
            if(public_name.innerHTML.includes('Dizaster')){nickname = public_name.innerHTML+ ' '; public_name.innerHTML = '<span style="color: #A70000">[GOAT] </span>'+nickname}
            checkVip();
        }}}
        if (!party_name.innerHTML.includes('[Legend]')){if (party_chat.includes('𝅷')){if (specialUser == 'true'){DBug_Legend_Role();
            if(party_name.innerHTML.includes('SukMyKuk')){nickname = party_name.innerHTML+ ' '; party_name.innerHTML = '<span id="legend" style="color: #FFFFFF">[Legend] </span>'+nickname;}
            checkVip();
        }}}
        if (!public_name.innerHTML.includes('[Legend]')){if (public_chat.includes('𝅷')){if (specialUser == 'true'){DBug_Legend_Role();
            if(public_name.innerHTML.includes('SukMyKuk')){ nickname = public_name.innerHTML+ ' '; public_name.innerHTML = '<span id="legend" style="color: #FFFFFF">[Legend] </span>'+nickname;}
            checkVip();
        }}}
        if (!party_name.innerHTML.includes('[VIP+]')){if (party_chat.includes('𝅸')){if (specialUser == 'true'){DBug_Vip_Role();
            if (party_name.innerHTML.includes('AppoX')){nickname = party_name.innerHTML + ' '; party_name.innerHTML = '<span style="color: yellow">[VIP+] </span>'+nickname; party_name.setAttribute('style','color: #3163F7')}
            if (party_name.innerHTML.includes('isabella')){nickname = party_name.innerHTML + ' '; party_name.innerHTML = '<span style="color: yellow">[VIP+] </span>'+nickname; party_name.setAttribute('style','color: #F131F7')}
            checkVip();
        }}}
        if (!public_name.innerHTML.includes('[VIP+]')){if (public_chat.includes('𝅸')){if (specialUser == 'true'){DBug_Vip_Role();
            if (public_name.innerHTML.includes('AppoX')){nickname = public_name.innerHTML + ' '; public_name.innerHTML = '<span style="color: yellow">[VIP+] </span>'+nickname; public_name.setAttribute('style','color: #3163F7')}
            if (public_name.innerHTML.includes('isabella')){nickname = public_name.innerHTML + ' '; public_name.innerHTML = '<span style="color: yellow">[VIP+] </span>'+nickname; public_name.setAttribute('style','color: #F131F7')}
            checkVip();
        }}}
        specialUser = 'false'
    //Devs -- 
        if (discordName == 'Veky#4504' && ingamename.value.includes('Veky'))                {DBug_User_Has_Role(); specialUser = 'true'; ExtLocked.style.display = 'block'; if (!chat_box.value.includes('𝅺')){if (chat_box.value != ''){chat_box.value = '𝅺' + chat_box.value}} return} else {DBug_User_No_Role(); ExtLocked.style.display = 'none'; specialUser = 'false'}
        if (discordName == 'Shine#6666' && ingamename.value.includes('Shine'))              {DBug_User_Has_Role(); specialUser = 'true'; ExtLocked.style.display = 'block'; if (!chat_box.value.includes('𝅺')){if (chat_box.value != ''){chat_box.value = '𝅺' + chat_box.value}} return} else {DBug_User_No_Role(); ExtLocked.style.display = 'none'; specialUser = 'false'}
    //Goat --
        if (discordName == 'diegointhedark#0001' && ingamename.value.includes('Dizaster'))  {DBug_User_Has_Role(); specialUser = 'true'; ExtLocked.style.display = 'block'; if (!chat_box.value.includes('𝅹')){if (chat_box.value != ''){chat_box.value = '𝅹' + chat_box.value}} return} else {DBug_User_No_Role(); ExtLocked.style.display = 'none'; specialUser = 'false'}
    //Legend --
        if (discordName == 'Veky#4504' && ingamename.value.includes('SukMyKuk'))            {DBug_User_Has_Role(); specialUser = 'true'; ExtLocked.style.display = 'block'; if (!chat_box.value.includes('𝅷')){if (chat_box.value != ''){chat_box.value = '𝅷' + chat_box.value}} return} else {DBug_User_No_Role(); ExtLocked.style.display = 'none'; specialUser = 'false'}
    //Vip+ --
        if (discordName == 'isabella#8718' && ingamename.value.includes('isabella'))        {DBug_User_Has_Role(); specialUser = 'true'; ExtLocked.style.display = 'block'; if (!chat_box.value.includes('𝅸')){if (chat_box.value != ''){chat_box.value = '𝅸' + chat_box.value}} return} else {DBug_User_No_Role(); ExtLocked.style.display = 'none'; specialUser = 'false'}
        if (discordName == 'Ognjen#5945' && ingamename.value.includes('AppoX'))             {DBug_User_Has_Role(); specialUser = 'true'; ExtLocked.style.display = 'block'; if (!chat_box.value.includes('𝅸')){if (chat_box.value != ''){chat_box.value = '𝅸' + chat_box.value}} return} else {DBug_User_No_Role(); ExtLocked.style.display = 'none'; specialUser = 'false'}
    } catch (error) {}
},1);
//▼▼ Add curent version of the extended mod ▼▼
document.getElementsByClassName('partition left')[0].appendChild(document.createElement('div'))
document.getElementsByClassName('partition left')[0].lastChild.outerHTML = '<div id="Extended-Version">Extended Version '+mod_version+'</div>'

// ▼▼ Set main color for everything ▼▼
function change_primary_color(){
    main_color = main_primary_color.value
    let style = 
`<style>
    .loop-holder__text {
    color: `+main_color+`;
}
#huds .minimap-hud {
    border: 2px solid `+main_color+`;
}
#huds .timeleft {
    border: 2px solid `+main_color+`;
}
#account-panel button:hover {
    background: `+main_color+`;
    border-bottom: 4px solid `+main_color+`
}
.custom-games .main-menu .panel.center #play:hover,.custom-games .main-menu .panel.center #spectate:hover,.custom-games .main-menu .panel.center .btn:hover {
    background: `+main_color+`;
    border-bottom: 4px solid `+main_color+`
}
.custom-games .panel .btn:hover {
    background-color: `+main_color+`
}
#menu .main-menu .panel.left .setting-btn-container #replays-toggle:hover,#menu .main-menu .panel.left .setting-btn-container #settings-toggle:hover {
    background: `+main_color+`
}
#menu .main-menu .panel.center #play:hover,#menu .main-menu .panel.center #spectate:hover,#menu .main-menu .panel.center .btn:hover {
    background: `+main_color+`;
    border-bottom: 4px solid `+main_color+`
}
#skin-modal .content button:hover {
    background: `+main_color+`;
    border-bottom: 4px solid `+main_color+`
}
#menu .main-menu .panel.right .region-selectors .tab.active {
    border-top: 2px solid `+main_color+`;
}
#menu .main-menu .panel.left .profile-controls .skin-preview {
    border: 3px solid `+main_color+`;
}
.account-profile .exp-area {
    border: 2px solid `+main_color+`
}
.account-profile .exp-fill {
    background: `+main_color+`;
}
#account-panel button {
    background: `+main_color+`;
    border-bottom: 4px solid `+main_color+`;
}
#replays-panel .close-button {
    background: `+main_color+`;
}
#replays-panel .panel-taps .import-tap .icon {
    color: `+main_color+`
}
#replays-panel .panel-taps .import-tap:hover button {
    background: `+main_color+`
}
#replays-panel .ps__thumb-y {
    background-color: `+main_color+`
}
#replays-panel .ps__rail-y.ps--clicking .ps__thumb-y,#replays-panel .ps__rail-y:focus>.ps__thumb-y,#replays-panel .ps__rail-y:hover>.ps__thumb-y {
    width: 6px;
    background-color: `+main_color+`
}
.replay-slider::-webkit-slider-thumb {
    background: `+main_color+`;
}
.replay-slider::-moz-range-thumb {
    background: `+main_color+`;
}
.custom-games .main-menu .panel.center .btn {
    background: `+main_color+`;
    border-bottom: 4px solid `+main_color+`;
}
.custom-games .main-menu .panel.center #play,.custom-games .main-menu .panel.center #spectate {
    background: `+main_color+`;
    border-bottom: 4px solid `+main_color+`;
}
.custom-games .main-menu .panel.right .region-selectors .tab.active {
    border-top: 2px solid `+main_color+`
}
.custom-games .main-menu .panel.right .list-container .list-row.active {
    background: `+main_color+`
}
.custom-games .panel .btn {
    background-color: `+main_color+`;
    border-bottom: 2px solid `+main_color+`;
}
.custom-games .inner-content .close-button {
    background: `+main_color+`;
}
.custom-games .confirm-model .sw-btn input:checked+span {
    background-color: `+main_color+`
}
.custom-games .main-menu.host .room-container .title {
    color: `+main_color+`
}
#new-panel .close-button,#settings-panel .close-button {
    background: `+main_color+`;
}
#new-panel .partition.left .tab[active],#settings-panel .partition.left .tab[active] {
    background: `+main_color+`
}
#new-panel .partition.right .setting.opt-toggle .toggle-btn.active .slide,#settings-panel .partition.right .setting.opt-toggle .toggle-btn.active .slide {
    background: `+main_color+`
}
#new-panel .partition.right .setting.opt-button button,#settings-panel .partition.right .setting.opt-button button {
    background: `+main_color+`;
}
#new-panel .partition.right .setting.opt-range .range-box .fake-range .fill-outer,#settings-panel .partition.right .setting.opt-range .range-box .fake-range .fill-outer {
    border-left: 11px solid `+main_color+`;
}
#new-panel .partition.right .setting.opt-range .range-box .fake-range .fill-outer .fill,#settings-panel .partition.right .setting.opt-range .range-box .fake-range .fill-outer .fill {
    background: `+main_color+`
}
#menu .main-menu .panel.left .setting-btn-container #custom-games-toggle,#menu .main-menu .panel.left .setting-btn-container #music-toggle,#menu .main-menu .panel.left .setting-btn-container #players-list-toggle,#menu .main-menu .panel.left .setting-btn-container #replays-toggle,#menu .main-menu .panel.left .setting-btn-container #settings-toggle {
    background: `+main_color+`;
}
#menu .main-menu .panel.left .profile-controls .skin-preview:active,#menu .main-menu .panel.left .profile-controls .skin-preview:hover {
    border: 6px solid `+main_color+`
}
#menu .main-menu .panel.left .info-text a:active {
    color: `+main_color+`
}
#menu .main-menu .panel.center .btn {
    background: `+main_color+`;
    border-bottom: 4px solid `+main_color+`;
}
#menu .main-menu .panel.center #play,#menu .main-menu .panel.center #spectate {
    background: `+main_color+`;
    border-bottom: 4px solid `+main_color+`;
}
#menu .main-menu .panel.right .list-container .list-row.active {
    background: `+main_color+`
}
#endGame .adsPanel .btn {
    background: `+main_color+`;
    border-bottom: 4px solid `+main_color+`;
}
::-webkit-scrollbar-thumb {
    background: `+main_color+`;
}
::-webkit-scrollbar-thumb:hover {
    background: `+main_color+`;
}
#huds .leaderboard-hud #leaderboard-title {
    color: `+main_color+`;
}
#huds .teamplayers-hud #teamplayers-title {
    color: `+main_color+`;
}
#skin-modal .content .exit-button {
    background: `+main_color+`;
}
#skin-modal .content button {
    background: `+main_color+`;
    border-bottom: 4px solid `+main_color+`;
}
#skin-modal .content .tabs button:disabled {
    border-bottom-color: `+main_color+`
}
#skin-modal .content .tabContent .scrollview .grid-item img.selected {
    border: 5px solid `+main_color+`;
    box-shadow: 0 0 9px 4px `+main_color+`
}
#skin-modal .content .tabContent .scrollview .grid-item .icon:hover {
    color: `+main_color+`;
}
#skin-modal .content .tabContent .scrollview .grid-item .icon.selected {
    color: `+main_color+`;
}
#skin-modal .content .tabContent .pagination a.active {
    background-color: `+main_color+`;
}
</style>`;
    document.head.insertAdjacentHTML("beforeend", style);
};
