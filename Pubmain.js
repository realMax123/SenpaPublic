//Setting up default values for css of page
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
#huds #emoji_tab_button {
    position: fixed;
    bottom: 50px;
    left: 235px;
    width: 45px;
    height: 45px;
}
#huds #emoji_tab_list {
    width: 225px;
    height: 283px;
    position: fixed;
    bottom: 50px;
    left: 238px;
    transform-origin: left;
    background: rgba(10,10,10,.3);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5px;
    grid-auto-rows: 36px;
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
var senpa_log_error = '殺ExtendedSenpaす: Saved changes'
document.getElementsByClassName("main-menu")[0].style.setProperty("border", "#ffffff00")
document.getElementById('chat-room').style['height'] = '360px'
document.getElementById('chat-room').style['width'] = '260px'

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

//▼▼ Creating Menu and Chat in extended mod settings ▼▼
var tab_row = extension.children[0]
var settings_list = extension.children[1]
tab_row.appendChild(document.createElement('div'))
tab_row.children[0].outerHTML = '<div class="tab" type="tab" target-container="settings-list-menu" target-name="menu" active="4">Menu</div>'
settings_list.appendChild(document.createElement('div'))
settings_list.children[0].outerHTML = '<div class="sub-list" data-name="menu" active="true">'

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

//▼▼ Adding user settings to [Menu] tab ▼▼
var extension_menu = document.getElementsByClassName('sub-list')[16]
extension_menu.appendChild(document.createElement('div'))
extension_menu.appendChild(document.createElement('div'))
extension_menu.appendChild(document.createElement('div'))
extension_menu.appendChild(document.createElement('div'))
extension_menu.appendChild(document.createElement('div'))
extension_menu.appendChild(document.createElement('div'))
extension_menu.appendChild(document.createElement('div'))
extension_menu.children[0].outerHTML = '<div class="setting opt-colorpicker" id="menu_bg_color"><div class="name">Menu background color</div><div class="minicolors minicolors-theme-default minicolors-position-bottom minicolors-position-right"><input class="text minicolors-input" value="" size="7" placeholder="Hex Code"></div>'
extension_menu.children[1].outerHTML = '<div class="setting opt-colorpicker" id="menu_border_color"><div class="name">Menu border glow color</div><div class="minicolors minicolors-theme-default minicolors-position-bottom minicolors-position-right"><input class="text minicolors-input" value="" size="7" placeholder="Hex Code"></div>'
extension_menu.children[2].outerHTML = '<div class="setting opt-colorpicker" id="primary_color"><div class="name">Primary color</div><div class="minicolors minicolors-theme-default minicolors-position-bottom minicolors-position-right"><input class="text minicolors-input" value="" size="7" placeholder="Hex Code"></div>'
extension_menu.children[3].outerHTML = '<div class="setting opt-dropdown" id="senpa_logo_color"><div class="name">Logo color</div><div class="dropdown-box"><div class="selected">Pink</div><i class="fas fa-chevron-down"></i><div class="dropdown-list"></div></div></div>'
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
extension_menu.children[4].outerHTML = '<div class="setting opt-toggle" id="xp_bar"><div class="name">Hide user level xp</div><div class="toggle-btn"><div class="slide"></div><div class="ball"></div></div></div>'
extension_menu.children[5].outerHTML = '<div class="setting opt-toggle" id="use_menu_background"><div class="name">Use menu background image</div><div class="toggle-btn"><div class="slide"></div><div class="ball"></div></div></div>'
extension_menu.children[6].outerHTML = '<div class="setting opt-input" id="background_link_placeholder"><div class="name">Background image URL</div><input class="text" placeholder="Must be google link | https:// |"></div>'
extension_menu.children[6].style.display = "none"

//Creating def variables [Menu]
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
var menu_background_color = document.getElementsByClassName("text minicolors-input")[16]
var menu_border_color = document.getElementsByClassName("text minicolors-input")[17]
var main_primary_color = document.getElementsByClassName("text minicolors-input")[18]
var background_image = document.getElementsByClassName("text")[69]
var toggle_button = document.getElementsByClassName("toggle-btn")
var main_menu = document.getElementsByClassName("main-menu")[0]

//▼▼ Addind event listeners for changing, saving user data [Menu] ▼▼
document.getElementById('xp_bar').children[1].addEventListener("click", use_xp_bar)
document.getElementById('use_menu_background').children[1].addEventListener("click", use_background_button)
menu_background_color.addEventListener('change', function(){change_background_color(); save_background_color();})
menu_border_color.addEventListener('change', function(){change_border_color(); save_background_border();})
main_primary_color.addEventListener('change', function(){change_primary_color(); save_main_primary_color();})
background_image.addEventListener('change', save_background_link)

//▼▼ Creating functions for settings [Menu] ▼▼
function change_background_color(){main_menu.style.setProperty("background", menu_background_color.value)}
function change_border_color(){main_menu.style.boxShadow = '0 0 30px'+menu_border_color.value}
function use_xp_bar(){
    if  (toggle_button[32].className === 'toggle-btn')
        {toggle_button[32].className = 'toggle-btn active'}
    else{toggle_button[32].className = 'toggle-btn'}
    save_xp_button();}
function use_background_button(){
    if  (toggle_button[33].className === 'toggle-btn')
        {toggle_button[33].className = 'toggle-btn active'}
    else{toggle_button[33].className = 'toggle-btn'}
    save_background_button();}
function change_logo_color(){
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

setInterval(function() {
    var bg_link = document.getElementById("background_link_placeholder")
    try{
        if (toggle_button[33].className === 'toggle-btn active'){
            bg_link.style.display = "block"
            main_menu.style.setProperty("background-image", "url("+background_image.value+")")
        }
        else{bg_link.style.display = "none"
            main_menu.style.setProperty("background-image", "")
        }
        if (toggle_button[32].className === 'toggle-btn active'){
            document.getElementsByClassName("exp-area")[0].style.display = "none"
        }
        else{document.getElementsByClassName("exp-area")[0].style.display = ""
        }
    } catch (error) {
        if (error.name.toString() == "TypeError") {}
    }
},100);
//▼▼ Saving all user data settings to google client [cache] for [Menu] ▼▼ 
function save_background_color()    {chrome.storage.sync.set({'bg_color': menu_background_color.value},function(){console.log(senpa_log_error)})}
function save_background_border()   {chrome.storage.sync.set({'border_color': menu_border_color.value},function(){console.log(senpa_log_error)})}
function save_main_primary_color()  {chrome.storage.sync.set({'main_color': main_primary_color.value},function(){console.log(senpa_log_error)})}
function save_logo_color()          {chrome.storage.sync.set({'senpa_logo_color': logo.textContent},function(){console.log(senpa_log_error)})}
function save_xp_button()           {chrome.storage.sync.set({'user_xp_button': toggle_button[32].className},function(){console.log(senpa_log_error)})}
function save_background_button()   {chrome.storage.sync.set({'use_menu_bg_button': toggle_button[33].className},function(){console.log(senpa_log_error)})}
function save_background_link()     {chrome.storage.sync.set({'background_link': background_image.value},function(){console.log(senpa_log_error)})}

//▼▼ Load user data from google client [cache] for [Menu] ▼▼
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
        if (data.senpa_logo_color === 'Pink')       {logo.textContent = 'Pink', change_logo_color()}})
    chrome.storage.sync.get(['bg_color'],           function(data){menu_background_color.value = data.bg_color, change_background_color();})
    chrome.storage.sync.get(['border_color'],       function(data){menu_border_color.value = data.border_color, change_border_color();})
    chrome.storage.sync.get(['main_color'],         function(data){main_primary_color.value = data.main_color, change_primary_color();})
    chrome.storage.sync.get(['background_link'],    function(data){background_image.value = data.background_link})
    chrome.storage.sync.get(['user_xp_button'],     function(data){if (data.user_xp_button === 'toggle-btn active'){toggle_button[32].className = 'toggle-btn active'}else{toggle_button[32].className = 'toggle-btn'}})
    chrome.storage.sync.get(['use_menu_bg_button'], function(data){if (data.use_menu_bg_button === 'toggle-btn active'){toggle_button[33].className = 'toggle-btn active';} else{toggle_button[33].className = 'toggle-btn'}})
}

// ▼▼Setting up sleep function ▼▼
function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}

// ▼▼Creating auto remove endgame screen [deth screen] and adding devs to chat ▼▼
setInterval(async function() {
    try {
        var end_game = document.getElementById("endGame")
        var nick_all = document.getElementById("chat-all-room")
        var nick_private = document.getElementById("chat-party-room")
        if(end_game.getAttribute('style').includes("block")) {
            document.getElementById("ad-button-continue").click()
            await sleep(150);
            document.getElementById("endGame").style = ''
        if (nick_all.lastElementChild.getElementsByClassName("nick")[0].innerHTML === ('<span style="color: yellow">[VIP]</span> Shine :')) {nick_all.lastElementChild.getElementsByClassName("nick")[0].innerHTML = ('<span style="color: blue">[DEV]</span> Shine :');}
        if (nick_all.lastElementChild.getElementsByClassName("nick")[0].innerHTML === ('<span style="color: yellow">[VIP]</span> Vekk :')) {nick_all.lastElementChild.getElementsByClassName("nick")[0].innerHTML = ('<span style="color: blue">[DEV]</span> Vekk :');} 
        if (nick_private.lastElementChild.getElementsByClassName("nick")[0].innerHTML === ('<span style="color: yellow">[VIP]</span> Shine :')) {nick_private.lastElementChild.getElementsByClassName("nick")[0].innerHTML = ('<span style="color: blue">[DEV]</span> Shine :');}
        if (nick_private.lastElementChild.getElementsByClassName("nick")[0].innerHTML === ('<span style="color: yellow">[VIP]</span> Vekk :')) {nick_private.lastElementChild.getElementsByClassName("nick")[0].innerHTML = ('<span style="color: blue">[DEV]</span> Vekk :');}
        }
    } catch (e) {
        if (e.name.toString() == "TypeError") {
        }}
},);
function change_primary_color(){
    main_color = main_primary_color.value
    let style = 
`<style>
    .loop-holder__text {
    color: `+main_color+`;
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
