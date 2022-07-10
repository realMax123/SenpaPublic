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
const mod_version = '0.4.3'
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
document.getElementById('importBtn').parentElement.appendChild(document.createElement('div'))
document.getElementById('importBtn').parentElement.lastChild.outerHTML = '<div class="extended_no_imp_exp" style="padding: 25px;font-size: 18px;">This is senpa settings only, it wont grab any settings set in extended mod options, there will be extended import / export settings in future</div>'

//▼▼ Setting up sleep function ▼▼
function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}

//▼▼ DBug console log [Only used for Dbugging code] ▼▼
document.getElementById('root').appendChild(document.createElement('div'))
document.getElementById('root').lastChild.outerHTML = '<div id=Extended_Senpa></div>'
const root = document.getElementById('Extended_Senpa')
root.appendChild(document.createElement('div'))
root.appendChild(document.createElement('div'))
root.children[0].outerHTML = '<div id=Extended-Dbug></div>'
root.children[1].outerHTML = '<div id=Extended-Dbug-roles></div>'
const debugging = document.body.appendChild(document.createElement('script'))
debugging.innerHTML = 'const debug = document.getElementById("Extended-Dbug"); const debug1 = document.getElementById("Extended-Dbug-roles");'

//Use to activate dbugging without need to change code
var DB = document.getElementById('Extended-Dbug');        DB.style.display = 'none';  DB.innerHTML = 1;
var DBr = document.getElementById('Extended-Dbug-roles'); DBr.style.display = 'none'; DBr.innerHTML = 0;
async function ext_error(code, numb){
    const console_reset = '\u001B[0m'
    const console_ext = '\u001b[1;35m 殺' + '\u001b[1;34m ExtendedSenpa' + '\u001b[1;35m す' + console_reset
    const console_data = console_ext + '\033[32m [Data]' + console_reset + ': '
    const console_info = console_ext + '\033[33m [Info]' + console_reset + ': '
    const console_role = console_ext + '\033[36m [Role]' + console_reset + ': '
    if      (code == 1 && DB.innerHTML == 1) ( () => {console.log(console_info + 'Current mod version is '+numb+'')} )();
    else if (code == 2 && DB.innerHTML == 1) ( () => {console.log(console_data + 'Saved new background border value')} )();
    else if (code == 3 && DB.innerHTML == 1) ( () => {console.log(console_data + 'Saved main primary color value')} )();
    else if (code == 4 && DB.innerHTML == 1) ( () => {console.log(console_data + 'Saved senpa logo color value')} )();
    else if (code == 5 && DB.innerHTML == 1) ( () => {console.log(console_data + 'Saved xp button position')} )();
    else if (code == 6 && DB.innerHTML == 1) ( () => {console.log(console_data + 'Saved hide discord id button position')} )();
    else if (code == 7 && DB.innerHTML == 1) ( () => {console.log(console_data + 'Saved background link value')} )();
    else if (code == 8 && DB.innerHTML == 1) ( () => {console.log(console_data + 'Saved background button position')} )();
    else if (code == 9 && DB.innerHTML == 1) ( () => {console.log(console_data + 'Get background border value')} )();
    else if (code == 10 && DB.innerHTML == 1) ( () => {console.log(console_data + 'Get main primary color value')} )();
    else if (code == 11 && DB.innerHTML == 1) ( () => {console.log(console_data + 'Get senpa logo color value')} )();
    else if (code == 12 && DB.innerHTML == 1) ( () => {console.log(console_data + 'Get xp button position')} )();
    else if (code == 13 && DB.innerHTML == 1) ( () => {console.log(console_data + 'Get discord id button position')} )();
    else if (code == 14 && DB.innerHTML == 1) ( () => {console.log(console_data + 'Get background link value')} )();
    else if (code == 15 && DB.innerHTML == 1) ( () => {console.log(console_data + 'Loading user data')} )();
    else if (code == 16 && DB.innerHTML == 1) ( () => {console.log(console_data + 'Get background button position')} )();
    else if (code == 17 && DB.innerHTML == 1) ( () => {console.log(console_info + 'Created Locked Name div (html)')} )();
    else if (code == 18 && DB.innerHTML == 1) ( () => {console.log(console_info + 'Created option Extended Mod in settings (html)')} )();
    else if (code == 19 && DB.innerHTML == 1) ( () => {console.log(console_info + 'Created user settings inside Extended Mod (html)')} )();
    else if (code == 20 && DB.innerHTML == 1) ( () => {console.log(console_info + 'Adding event listeners')} )();
    else if (code == 21 && DB.innerHTML == 1) ( () => {console.log(console_info + 'Closing deth screen menu')} )();
    else if (code == 22 && DB.innerHTML == 1) ( () => {console.log(console_info + 'Created all default variables')} )();
    else if (code == 23 && DB.innerHTML == 1) ( () => {console.log(console_data + 'Loaded all user data')} )();
    else if (code == 24 && DB.innerHTML == 1) ( () => {console.log(console_data + 'Data was successfully loaded stopping loop function')} )();
    else if (code == 25 && DB.innerHTML == 1) ( () => {console.log(console_data + 'Data didnt load correctly or your cache is empty trying '+numb+' more times')} )();
    else if (code == 26 && DBr.innerHTML == 1) ( () => {console.log(console_role + 'Last user has role Dev')} )();
    else if (code == 27 && DBr.innerHTML == 1) ( () => {console.log(console_role + 'Last user has role Legend')} )();
    else if (code == 28 && DBr.innerHTML == 1) ( () => {console.log(console_role + 'Last user has role Goat')} )();
    else if (code == 29 && DBr.innerHTML == 1) ( () => {console.log(console_role + 'Last user has role Vip+')} )();
    else if (code == 30 && DBr.innerHTML == 1) ( () => {console.log(console_role + 'User has role')} )();
    else if (code == 31 && DBr.innerHTML == 1) ( () => {console.log(console_role + 'User does not have role')} )();
    else if (code == 32 && DBr.innerHTML == 1) ( () => {console.log(console_role + 'Special user detected')} )();
    else if (code == 33 && DB.innerHTML == 1) ( () => {console.log(console_data + 'Save chat message limit value')} )();
    else if (code == 34 && DB.innerHTML == 1) ( () => {console.log(console_data + 'Get chat message limit value')} )();
    else if (code == 35 && DB.innerHTML == 1) ( () => {console.log(console_data + 'Save clear console button position')} )();
    else if (code == 36 && DB.innerHTML == 1) ( () => {console.log(console_data + 'Get clear console button position')} )();
}

ext_error(1, mod_version);
//▼▼ Adding locked name info ▼▼
document.getElementById('primary-inputs').appendChild(document.createElement('div'))
document.getElementById('primary-inputs').children[2].outerHTML = '<div id="EXT-locked-name">Locked</div>'
document.getElementById('EXT-locked-name').style.display = 'none'
ext_error(17);

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
tab[8].addEventListener("click", left_side_tab_btn)
function left_side_tab_btn(){
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
tab_row.appendChild(document.createElement('div'))
tab_row.children[0].outerHTML = '<div class="tab" type="tab" target-container="settings-list-menu" target-name="menu" active="4">Menu</div>'
tab_row.children[1].outerHTML = '<div class="tab" type="tab" target-container="settings-list-menu" target-name="extras">Extras</div>'
settings_list.appendChild(document.createElement('div'))
settings_list.appendChild(document.createElement('div'))
settings_list.children[0].outerHTML = '<div class="sub-list" data-name="menu" active>'
settings_list.children[1].outerHTML = '<div class="sub-list" data-name="extras">'
tab_row.children[0].addEventListener('click', (() => {tab_buttons(1)}) )
tab_row.children[1].addEventListener('click', (() => {tab_buttons(2)}) )
function tab_buttons(button){
    if     (button == 1)  ( () => {
        tab_row.children[0].setAttribute('active', 1) 
        tab_row.children[1].removeAttribute('active')
        settings_list.children[0].setAttribute('active', 1)
        settings_list.children[1].removeAttribute('active')
        } )();
    else if(button == 2)( () => {
        tab_row.children[1].setAttribute('active', 1)
        tab_row.children[0].removeAttribute('active')
        settings_list.children[1].setAttribute('active', 1)
        settings_list.children[0].removeAttribute('active')
        } )();
}
ext_error(18);
//▼▼ Adding user settings to [Menu] tab ▼▼
var ext_menu = document.getElementsByClassName('sub-list')[16]
var ext_extra = document.getElementsByClassName('sub-list')[17]
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
logo_color.appendChild(document.createElement('div')); logo_color.children[0].outerHTML = '<div class="dropdown-item" id="ownCellColoring">Red</div>';          logo_color.children[0].addEventListener('click', function(){logo.textContent = 'Red',       change_logo_color(); save(3);}); 
logo_color.appendChild(document.createElement('div')); logo_color.children[1].outerHTML = '<div class="dropdown-item" id="ownCellColoring">Orange</div>';       logo_color.children[1].addEventListener('click', function(){logo.textContent = 'Orange',    change_logo_color(); save(3);});   
logo_color.appendChild(document.createElement('div')); logo_color.children[2].outerHTML = '<div class="dropdown-item" id="ownCellColoring">Yellow</div>';       logo_color.children[2].addEventListener('click', function(){logo.textContent = 'Yellow',    change_logo_color(); save(3);}); 
logo_color.appendChild(document.createElement('div')); logo_color.children[3].outerHTML = '<div class="dropdown-item" id="ownCellColoring">Green</div>';        logo_color.children[3].addEventListener('click', function(){logo.textContent = 'Green',     change_logo_color(); save(3);});
logo_color.appendChild(document.createElement('div')); logo_color.children[4].outerHTML = '<div class="dropdown-item" id="ownCellColoring">Dark Green</div>';   logo_color.children[4].addEventListener('click', function(){logo.textContent = 'Dark Green',change_logo_color(); save(3);});
logo_color.appendChild(document.createElement('div')); logo_color.children[5].outerHTML = '<div class="dropdown-item" id="ownCellColoring">Cyan</div>';         logo_color.children[5].addEventListener('click', function(){logo.textContent = 'Cyan',      change_logo_color(); save(3);});
logo_color.appendChild(document.createElement('div')); logo_color.children[6].outerHTML = '<div class="dropdown-item" id="ownCellColoring">Blue</div>';         logo_color.children[6].addEventListener('click', function(){logo.textContent = 'Blue',      change_logo_color(); save(3);});
logo_color.appendChild(document.createElement('div')); logo_color.children[7].outerHTML = '<div class="dropdown-item" id="ownCellColoring">Dark Blue</div>';    logo_color.children[7].addEventListener('click', function(){logo.textContent = 'Dark Blue', change_logo_color(); save(3);});
logo_color.appendChild(document.createElement('div')); logo_color.children[8].outerHTML = '<div class="dropdown-item" id="ownCellColoring">Purple</div>';       logo_color.children[8].addEventListener('click', function(){logo.textContent = 'Purple',    change_logo_color(); save(3);});
logo_color.appendChild(document.createElement('div')); logo_color.children[9].outerHTML = '<div class="dropdown-item" id="ownCellColoring">Pink</div>';         logo_color.children[9].addEventListener('click', function(){logo.textContent = 'Pink',      change_logo_color(); save(3);});
ext_menu.children[3].outerHTML = '<div class="setting opt-toggle" id="xp_bar"><div class="name">Hide user level xp</div><div class="toggle-btn"><div class="slide"></div><div class="ball"></div></div></div>'
ext_menu.children[4].outerHTML = '<div class="setting opt-toggle" id="discord_id_btn"><div class="name">Hide user discord id</div><div class="toggle-btn"><div class="slide"></div><div class="ball"></div></div></div>'
ext_menu.children[5].outerHTML = '<div class="setting opt-toggle" id="use_menu_background"><div class="name">Use menu background image</div><div class="toggle-btn"><div class="slide"></div><div class="ball"></div></div></div>'
ext_menu.children[6].outerHTML = '<div class="setting opt-input" id="background_link_placeholder"><div class="name">Background image URL</div><input class="text" placeholder="Must be google link | https:// |"></div>'
ext_extra.appendChild(document.createElement('div'))
ext_extra.appendChild(document.createElement('div'))
ext_extra.children[0].outerHTML = '<div class="setting opt-colorpicker" id="extra_limit_chat"><div class="name">Limit how many messages are loaded in chat</div><div class="minicolors minicolors-theme-default minicolors-position-bottom minicolors-position-right"><input class="text minicolors-input" value="" size="7" placeholder="Default - 100"></div>'
ext_extra.children[1].outerHTML = '<div class="setting opt-toggle" id="extra_clear_cons"><div class="name">Clear console every few minutes</div><div class="toggle-btn"><div class="slide"></div><div class="ball"></div></div></div>'
ext_error(19);

//Creating def variables
var menu_border_color = document.getElementsByClassName('text minicolors-input')[16]
var main_primary_color = document.getElementsByClassName('text minicolors-input')[17]
var background_image = document.getElementsByClassName('text')[68]
var toggle_button = document.getElementsByClassName('toggle-btn')
var main_menu = document.getElementsByClassName('main-menu')[0]
var xp_bar_button = document.getElementById('xp_bar').children[1]
var discord_id_button = document.getElementById('discord_id_btn').children[1]
var menu_background_button = document.getElementById('use_menu_background').children[1]
var bg_link = document.getElementById('background_link_placeholder')
var limit_chat = document.getElementById('extra_limit_chat').children[1].children[0]
var clear_console_btn = document.getElementById('extra_clear_cons').children[1]
ext_error(22);

//▼▼ Addind event listeners for changing, saving user data ▼▼
document.getElementById('xp_bar').children[1].addEventListener('click', (() => {use_event_btn(1)}))
document.getElementById('discord_id_btn').children[1].addEventListener('click', (() => {use_event_btn(2)}))
document.getElementById('use_menu_background').children[1].addEventListener('click', (() => {use_event_btn(3)}))
menu_border_color.addEventListener('change', (() => {set_event_btn(4), save(1)}))
main_primary_color.addEventListener('change', (() => {change_primary_color(), save(2)}))
bg_link.addEventListener('change', (() => {set_event_btn(3), save(7)}))
limit_chat.addEventListener('change', (() => {save(8)}))
clear_console_btn.addEventListener('click', (()=> {use_event_btn(4)}))

ext_error(20);
//▼▼ Creating functions for settings ▼▼
function use_event_btn(option){
    if (option == 1) (() => {
        if (xp_bar_button.className === 'toggle-btn'){
            xp_bar_button.className = 'toggle-btn active'
        }else{xp_bar_button.className = 'toggle-btn'
        }save(4), set_event_btn(1)
    })();
    else if (option == 2) (() => {
        if (discord_id_button.className === 'toggle-btn'){
            discord_id_button.className = 'toggle-btn active'
        }else{discord_id_button.className = 'toggle-btn'
        }save(5), set_event_btn(2)
    })();
    else if (option == 3) (() => {
        if (menu_background_button.className === 'toggle-btn'){
            menu_background_button.className = 'toggle-btn active'
        }else{menu_background_button.className = 'toggle-btn'
        }save(6), set_event_btn(3)
    })();
    else if (option == 4) (() => {
        if (clear_console_btn.className === 'toggle-btn'){
            clear_console_btn.className = 'toggle-btn active'
        }else{
            clear_console_btn.className = 'toggle-btn'
        }save(9), set_event_btn(5)
    })();
}
loop_clear = []
function set_event_btn(option){
    if (option == 1) (() => {
        if (xp_bar_button.className === 'toggle-btn active'){
            document.getElementsByClassName('exp-area')[0].style.display = "none"
        }else{document.getElementsByClassName('exp-area')[0].style.display = ""
    }})();
    else if (option == 2) (() => {
        if (discord_id_button.className === 'toggle-btn active'){
            document.getElementById('pf-name').innerHTML = hidden_discord_id;
        }else {document.getElementById('pf-name').innerHTML = discordName;
    }})();
    else if (option == 3) (() => {
        if (menu_background_button.className === 'toggle-btn active'){
            bg_link.setAttribute('option', 'enabled')
            main_menu.style.setProperty("background-image", "url("+background_image.value+")")
        }else{bg_link.setAttribute('option', 'disabled')
            main_menu.style.setProperty("background-image", "")
    }})();
    else if (option == 4) (() => {
        main_menu.style.boxShadow = '0 0 30px'+menu_border_color.value
    })();
    else if (option == 5) (() => {
        if (clear_console_btn.className === 'toggle-btn active'){
            loop_clear = true
        }
        else{
            loop_clear = false
        }
    })();
}
function change_logo_color(){
    var senpa_logo_link = document.getElementsByClassName("logo")[0]
        if (logo.textContent === 'Red')         {senpa_logo_link.innerHTML = '<img src="https://i.imgur.com/LYwdFOc.png" alt="logo">'}
        if (logo.textContent === 'Orange')      {senpa_logo_link.innerHTML = '<img src="https://i.imgur.com/9XZUwmN.png" alt="logo">'}
        if (logo.textContent === 'Yellow')      {senpa_logo_link.innerHTML = '<img src="https://i.imgur.com/bRAwjZr.png" alt="logo">'}
        if (logo.textContent === 'Green')       {senpa_logo_link.innerHTML = '<img src="https://i.imgur.com/raQFhDP.png" alt="logo">'}
        if (logo.textContent === 'Dark Green')  {senpa_logo_link.innerHTML = '<img src="https://i.imgur.com/DoBJIsP.png" alt="logo">'}
        if (logo.textContent === 'Cyan')        {senpa_logo_link.innerHTML = '<img src="https://i.imgur.com/ajnGKuy.png" alt="logo">'}
        if (logo.textContent === 'Blue')        {senpa_logo_link.innerHTML = '<img src="https://i.imgur.com/W9FiqLl.png" alt="logo">'}
        if (logo.textContent === 'Dark Blue')   {senpa_logo_link.innerHTML = '<img src="https://i.imgur.com/JcK8S2f.png" alt="logo">'}
        if (logo.textContent === 'Purple')      {senpa_logo_link.innerHTML = '<img src="https://i.imgur.com/i8yhwmr.png" alt="logo">'}
        if (logo.textContent === 'Pink')        {senpa_logo_link.innerHTML = '<img src="https://i.imgur.com/D25DhfC.png" alt="logo">'}
}
setInterval(loop_console, 30000)
function loop_console(){
    if (loop_clear){console.clear();
    }
}
//▼▼ Saving all user data settings to google client [cache] ▼▼ 
function save(data){
    if      (data == 1) ( () => {chrome.storage.sync.set({'border_color': menu_border_color.value}, (() => {ext_error(2)}))} )();
    else if (data == 2) ( () => {chrome.storage.sync.set({'main_color': main_primary_color.value}, (() => {ext_error(3)}))} )();
    else if (data == 3) ( () => {chrome.storage.sync.set({'senpa_logo_color': logo.textContent}, (() => {ext_error(4)}))} )();
    else if (data == 4) ( () => {chrome.storage.sync.set({'user_xp_button': xp_bar_button.className}, (() => {ext_error(5)}))} )();
    else if (data == 5) ( () => {chrome.storage.sync.set({'hide_discord_id': discord_id_button.className}, (() => {ext_error(6)}))} )();
    else if (data == 6) ( () => {chrome.storage.sync.set({'use_menu_bg_button': menu_background_button.className}, (() => {ext_error(8)}))} )();
    else if (data == 7) ( () => {chrome.storage.sync.set({'background_link': background_image.value}, (() => {ext_error(7)}))} )();
    else if (data == 8) ( () => {chrome.storage.sync.set({'limit_chat': limit_chat.value}, (() => {ext_error(33)}))} )();
    else if (data == 9) ( () => {chrome.storage.sync.set({'console_clear_btn': clear_console_btn.className}, (() => {ext_error(35)}))} )();
}
//▼▼ Load user data from google client [cache] ▼▼
function load_all_data(){
    ext_error(15);
    chrome.storage.sync.get(['senpa_logo_color'],   function(data){logo.textContent = data.senpa_logo_color, ext_error(11)})
    chrome.storage.sync.get(['border_color'],       function(data){menu_border_color.value = data.border_color, ext_error(9)})
    chrome.storage.sync.get(['main_color'],         function(data){main_primary_color.value = data.main_color, ext_error(10)})
    chrome.storage.sync.get(['background_link'],    function(data){background_image.value = data.background_link, ext_error(14)})
    chrome.storage.sync.get(['user_xp_button'],     function(data){if (data.user_xp_button === 'toggle-btn active'){xp_bar_button.className = 'toggle-btn active'}else{xp_bar_button.className = 'toggle-btn'}; ext_error(12)})
    chrome.storage.sync.get(['hide_discord_id'],    function(data){if (data.hide_discord_id === 'toggle-btn active'){discord_id_button.className = 'toggle-btn active'}else{discord_id_button.className = 'toggle-btn'}; ext_error(13)})
    chrome.storage.sync.get(['use_menu_bg_button'], function(data){if (data.use_menu_bg_button === 'toggle-btn active'){menu_background_button.className = 'toggle-btn active';}else{menu_background_button.className = 'toggle-btn'}; ext_error(16)})
    chrome.storage.sync.get(['limit_chat'],         function(data){limit_chat.value = data.limit_chat, ext_error(34) })
    chrome.storage.sync.get(['console_clear_btn'],  function(data){if (data.console_clear_btn === 'toggle-btn active'){clear_console_btn.className = 'toggle-btn active'}else{clear_console_btn.className = 'toggle-btn'}; ext_error(36)})

    setTimeout(update_variables, 350)
}
//▼▼ function that updates / sets all changes to page (html) ▼▼
function update_variables(){
    change_logo_color();
    change_primary_color();
    set_event_btn(1);
    set_event_btn(2);
    set_event_btn(3);
    set_event_btn(4);
    set_event_btn(5);
    ext_error(23);
}
//▼▼ function that will loop the load_data if there was nothing loaded ▼▼
async function loop_load_data(){
    load_all_data();
    await sleep(400)
    var loopTime = 0;
    for (var i = 5; i > loopTime; i=i-1) {
        if (i == 5){}
        else if(!document.getElementsByClassName("text minicolors-input")[16].value == '' || !document.getElementsByClassName("text minicolors-input")[16].value == 'undefined' && 
                !document.getElementsByClassName("text minicolors-input")[17] == '' || !document.getElementsByClassName("text minicolors-input")[17] == 'undefined' &&
                !document.getElementsByClassName("text")[68] == '' || !document.getElementsByClassName("text")[68] == 'undefined'){
            loopTime = 5
            ext_error(24);
        }
        else{
            load_all_data();
            ext_error(25, i);
            await sleep(250)
        }
    }
}
window.onload = function(){setTimeout(loop_load_data, 50)}
//▼▼ Auto remove endgame screen [deth screen] and set discord id▼▼
discordName = []
hidden_discord_id = []
setInterval(async function() {
    try {
        if (discordName == ''){discordName = document.getElementById('pf-name').innerHTML; discordName = discordName;}
        if (hidden_discord_id == '' || hidden_discord_id == 'undefined'){hidden_discord_id = discordName.replace(/[^a-zA-Z]/g,"");}

        if (!limit_chat.value == '' || !limit_chat.value == undefined){
            if (document.getElementById("chat-all-room").children.length > limit_chat.value){
                document.getElementById("chat-all-room").firstChild.remove()
            }
        }
        else{
            if (document.getElementById("chat-all-room").children.length > 100){
                document.getElementById("chat-all-room").firstChild.remove()
            }
        }
        var end_game = document.getElementById("endGame")
        if(end_game.getAttribute('style').includes("block")) {
            document.getElementById("ad-button-continue").click()
            await sleep(150);
            document.getElementById("endGame").style = ''
            ext_error(21);
        }
    }catch (error) {}
},100);
//▼▼ For thos who have extension roles and payed [VIP], remove vip ▼▼
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
        if (!party_name.innerHTML.includes('[DEV]')){if (party_chat.includes('𝅺')){if (specialUser){ext_error(26);
            if (party_name.innerHTML.includes('Veky')){nickname = party_name.innerHTML+ ' '; party_name.innerHTML = '<span style="color: blue">[DEV] </span>' +nickname; party_name.setAttribute('style','color: red')}
            if (party_name.innerHTML.includes('Shine')){nickname = party_name.innerHTML+ ' '; party_name.innerHTML = '<span style="color: blue">[DEV] </span>' +nickname; party_name.setAttribute('style','color: red')}
            checkVip();
        }}}
        if (!public_name.innerHTML.includes('[DEV]')){if (public_chat.includes('𝅺')){if (specialUser){ext_error(26);
            if (public_name.innerHTML.includes('Veky')){nickname = public_name.innerHTML+ ' '; public_name.innerHTML = '<span style="color: blue">[DEV] </span>' +nickname; public_name.setAttribute('style','color: red')}
            if (public_name.innerHTML.includes('Shine')){nickname = public_name.innerHTML+ ' '; public_name.innerHTML = '<span style="color: blue">[DEV] </span>' +nickname; public_name.setAttribute('style','color: red')}
            checkVip();
        }}}
        if (!party_name.innerHTML.includes('[GOAT]')){if (party_chat.includes('𝅹')){if (specialUser){ext_error(28);
            if(party_name.innerHTML.includes('Dizaster')){nickname = party_name.innerHTML+ ' '; party_name.innerHTML = '<span style="color: #A70000">[GOAT] </span>'+nickname}
            checkVip();
        }}}
        if (!public_name.innerHTML.includes('[GOAT]')){if (public_chat.includes('𝅹')){if (specialUser){ext_error(28);
            if(public_name.innerHTML.includes('Dizaster')){nickname = public_name.innerHTML+ ' '; public_name.innerHTML = '<span style="color: #A70000">[GOAT] </span>'+nickname}
            checkVip();
        }}}
        if (!party_name.innerHTML.includes('[Legend]')){if (party_chat.includes('𝅷')){if (specialUser){ext_error(27);
            if(party_name.innerHTML.includes('SukMyKuk')){nickname = party_name.innerHTML+ ' '; party_name.innerHTML = '<span id="legend" style="color: #FFFFFF">[Legend] </span>'+nickname;}
            checkVip();
        }}}
        if (!public_name.innerHTML.includes('[Legend]')){if (public_chat.includes('𝅷')){if (specialUser){ext_error(27);
            if(public_name.innerHTML.includes('SukMyKuk')){ nickname = public_name.innerHTML+ ' '; public_name.innerHTML = '<span id="legend" style="color: #FFFFFF">[Legend] </span>'+nickname;}
            checkVip();
        }}}
        if (!party_name.innerHTML.includes('[VIP+]')){if (party_chat.includes('𝅸')){if (specialUser){ext_error(29);
            if (party_name.innerHTML.includes('Pthx')){nickname = party_name.innerHTML + ' '; party_name.innerHTML = '<span style="color: yellow">[VIP+] </span>'+nickname; party_name.setAttribute('style','color: #ffa86c')}
            if (party_name.innerHTML.includes('AppoX')){nickname = party_name.innerHTML + ' '; party_name.innerHTML = '<span style="color: yellow">[VIP+] </span>'+nickname; party_name.setAttribute('style','color: #3163F7')}
            if (party_name.innerHTML.includes('isabella')){nickname = party_name.innerHTML + ' '; party_name.innerHTML = '<span style="color: yellow">[VIP+] </span>'+nickname; party_name.setAttribute('style','color: #F131F7')}
            if (party_name.innerHTML.includes('乃卂几ᗪlㄒ')){nickname = party_name.innerHTML + ' '; party_name.innerHTML = '<span style="color: yellow">[VIP+] </span>'+nickname; party_name.setAttribute('style','color: black')}
            checkVip();
        }}}
        if (!public_name.innerHTML.includes('[VIP+]')){if (public_chat.includes('𝅸')){if (specialUser){ext_error(29);
            if (public_name.innerHTML.includes('Pthx')){nickname = public_name.innerHTML + ' '; public_name.innerHTML = '<span style="color: yellow">[VIP+] </span>'+nickname; public_name.setAttribute('style','color: #ffa86c')}
            if (public_name.innerHTML.includes('AppoX')){nickname = public_name.innerHTML + ' '; public_name.innerHTML = '<span style="color: yellow">[VIP+] </span>'+nickname; public_name.setAttribute('style','color: #3163F7')}
            if (public_name.innerHTML.includes('isabella')){nickname = public_name.innerHTML + ' '; public_name.innerHTML = '<span style="color: yellow">[VIP+] </span>'+nickname; public_name.setAttribute('style','color: #F131F7')}
            if (public_name.innerHTML.includes('乃卂几ᗪlㄒ')){nickname = public_name.innerHTML + ' '; public_name.innerHTML = '<span style="color: yellow">[VIP+] </span>'+nickname; public_name.setAttribute('style','color: black')}
            checkVip();
        }}}
        specialUser = false
    //Devs -- 
        if (discordName == 'Veky#4504' && ingamename.value.includes('Veky'))                {ext_error(30); specialUser = true; ExtLocked.style.display = 'block'; if (!chat_box.value.includes('𝅺')){if (chat_box.value != ''){chat_box.value = '𝅺' + chat_box.value}} return} else {ext_error(31); ExtLocked.style.display = 'none'; specialUser = false}
        if (discordName == 'Shine#6666' && ingamename.value.includes('Shine'))              {ext_error(30); specialUser = true; ExtLocked.style.display = 'block'; if (!chat_box.value.includes('𝅺')){if (chat_box.value != ''){chat_box.value = '𝅺' + chat_box.value}} return} else {ext_error(31); ExtLocked.style.display = 'none'; specialUser = false}
    //Goat --
        if (discordName == 'diegointhedark#0001' && ingamename.value.includes('Dizaster'))  {ext_error(30); specialUser = true; ExtLocked.style.display = 'block'; if (!chat_box.value.includes('𝅹')){if (chat_box.value != ''){chat_box.value = '𝅹' + chat_box.value}} return} else {ext_error(31); ExtLocked.style.display = 'none'; specialUser = false}
    //Legend --
        if (discordName == 'Veky#4504' && ingamename.value.includes('SukMyKuk'))            {ext_error(30); specialUser = true; ExtLocked.style.display = 'block'; if (!chat_box.value.includes('𝅷')){if (chat_box.value != ''){chat_box.value = '𝅷' + chat_box.value}} return} else {ext_error(31); ExtLocked.style.display = 'none'; specialUser = false}
    //Vip+ --
        if (discordName == 'yGlaive#0883' && ingamename.value.includes('Pthx'))             {ext_error(30); specialUser = true; ExtLocked.style.display = 'block'; if (!chat_box.value.includes('𝅸')){if (chat_box.value != ''){chat_box.value = '𝅸' + chat_box.value}} return} else {ext_error(31); ExtLocked.style.display = 'none'; specialUser = false}
        if (discordName == 'conon5#3218' && ingamename.value.includes('乃卂几ᗪlㄒ'))          {ext_error(30); specialUser = true; ExtLocked.style.display = 'block'; if (!chat_box.value.includes('𝅸')){if (chat_box.value != ''){chat_box.value = '𝅸' + chat_box.value}} return} else {ext_error(31); ExtLocked.style.display = 'none'; specialUser = false}
        if (discordName == 'isabella#8718' && ingamename.value.includes('isabella'))        {ext_error(30); specialUser = true; ExtLocked.style.display = 'block'; if (!chat_box.value.includes('𝅸')){if (chat_box.value != ''){chat_box.value = '𝅸' + chat_box.value}} return} else {ext_error(31); ExtLocked.style.display = 'none'; specialUser = false}
        if (discordName == 'Ognjen#5945' && ingamename.value.includes('AppoX'))             {ext_error(30); specialUser = true; ExtLocked.style.display = 'block'; if (!chat_box.value.includes('𝅸')){if (chat_box.value != ''){chat_box.value = '𝅸' + chat_box.value}} return} else {ext_error(31); ExtLocked.style.display = 'none'; specialUser = false}
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
