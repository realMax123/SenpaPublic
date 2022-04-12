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
document.getElementsByClassName("advertisement-informer")[0].remove();
document.getElementsByClassName("partition right")[0].remove();
document.getElementsByClassName("close-button")[0].remove();
document.getElementById("ad-slot-center-panel").remove();
document.getElementsByClassName("banner")[0].remove();
document.getElementsByClassName("logo")[0].innerHTML = '<img src="https://i.imgur.com/LYwdFOc.png" alt="logo">'
document.getElementsByClassName("info-text")[0].outerHTML = '<div class="loop-holder"><div class="loop-holder__text">丨Modded By Veky and Shine丨</div><div class="loop-holder__text">丨Modded By Veky and Shine丨</div><div class="loop-holder__text">丨Modded By Veky and Shine丨</div>'
document.getElementById("endGame").style = ''
document.getElementById('chat-box').placeholder = '殺ExtendedSenpaす: Send message..'
const extensionTab = document.createElement("div")
extensionTab.className = "tab"
document.getElementsByClassName("partition left")[0].appendChild(extensionTab)
document.getElementsByClassName("tab")[8].outerHTML = '<div class="tab" type="tab" target-container="settings-list" target-name="Extension"></i>▶ Extended Mod</div>' 
const extensionOpt = document.createElement("div")
extensionOpt.className = "list"
document.getElementsByClassName("partition right")[0].appendChild(extensionOpt)
document.getElementsByClassName("list")[4].outerHTML = '<div class="list" data-name="extensionopt"></div>'
const tab_row_extension = document.createElement("div")
tab_row_extension.className = "tab-row"
document.getElementsByClassName("list")[4].appendChild(tab_row_extension)
const tab_menu = document.createElement("div")
tab_menu.className = "tab"
document.getElementsByClassName("tab-row")[3].appendChild(tab_menu)
document.getElementsByClassName("tab")[24].outerHTML = '<div class="tab" type="tab" target-container="settings-list-menu" target-name="menu">Menu</div>'
document.getElementsByClassName("tab")[24].setAttribute("active", 4)
document.getElementsByClassName("list")[4].appendChild(document.createElement("div"))
document.getElementsByClassName("list")[4].children[1].outerHTML = '<div container-name="settings-list-extension"></div>'
document.getElementsByClassName("list")[4].children[1].appendChild(document.createElement("div"))
document.getElementsByClassName('list')[4].children[1].children[0].outerHTML = '<div class="sub-list" data-name="menu" active="true">'
document.getElementsByClassName("tab")[8].addEventListener("click", button_tab)
function button_tab(){
    document.getElementsByClassName("tab")[4].removeAttribute("active")
    document.getElementsByClassName("tab")[5].removeAttribute("active")
    document.getElementsByClassName("tab")[6].removeAttribute("active")
    document.getElementsByClassName("tab")[7].removeAttribute("active")
    document.getElementsByClassName("tab")[8].setAttribute("active", 4)
    document.getElementsByClassName("list")[0].removeAttribute("active")
    document.getElementsByClassName("list")[1].removeAttribute("active")
    document.getElementsByClassName("list")[2].removeAttribute("active")
    document.getElementsByClassName("list")[3].removeAttribute("active")
    document.getElementsByClassName("list")[4].setAttribute("active", 4)
}
const main_menu_background_color = document.createElement("div")
const main_menu_background_border = document.createElement("div")
const primary_color = document.createElement("div")
const senpa_logo = document.createElement("div")
const xp_bar = document.createElement("div")
const use_menu_background = document.createElement("div")
const background_link_placeholder = document.createElement("div")
main_menu_background_color.className = "setting opt-colorpicker"
main_menu_background_color.id = "menu_bg_color"
main_menu_background_border.className = "setting opt-colorpicker"
main_menu_background_border.id = "menu_border_color"
primary_color.className = "setting opt-colorpicker"
primary_color.id = "primary_color"
senpa_logo.className = "setting opt-dropdown"
senpa_logo.id = "senpa_logo_color"
xp_bar.className= "setting opt-toggle"
xp_bar.id = "xp_bar"
use_menu_background.className= "setting opt-toggle"
use_menu_background.id = "use_menu_background"
background_link_placeholder.className = "setting opt-input"
background_link_placeholder.id = "background_link_placeholder"
var elements_tab = document.getElementsByClassName('sub-list')[16]
elements_tab.appendChild(main_menu_background_color)
elements_tab.appendChild(main_menu_background_border)
elements_tab.appendChild(primary_color)
elements_tab.appendChild(senpa_logo)
elements_tab.appendChild(xp_bar)
elements_tab.appendChild(use_menu_background)
elements_tab.appendChild(background_link_placeholder)
document.getElementById("menu_bg_color").outerHTML = '<div class="setting opt-colorpicker" id="menu_bg_color"><div class="name">Menu background color</div><div class="minicolors minicolors-theme-default minicolors-position-bottom minicolors-position-right"><input class="text minicolors-input" value="" size="7" placeholder="Hex Code"></div>'
document.getElementById("menu_border_color").outerHTML = '<div class="setting opt-colorpicker" id="menu_border_color"><div class="name">Menu border color</div><div class="minicolors minicolors-theme-default minicolors-position-bottom minicolors-position-right"><input class="text minicolors-input" value="" size="7" placeholder="Hex Code"></div>'
document.getElementById("primary_color").outerHTML = '<div class="setting opt-colorpicker" id="primary_color"><div class="name">Primary color</div><div class="minicolors minicolors-theme-default minicolors-position-bottom minicolors-position-right"><input class="text minicolors-input" value="" size="7" placeholder="Hex Code"></div>'
document.getElementById("senpa_logo_color").outerHTML = '<div class="setting opt-dropdown"><div class="name">Senpa logo color</div><div class="dropdown-box"><div class="selected">Red</div><i class="fas fa-chevron-down"></i><div class="dropdown-list">'+
    '<div class="dropdown-item" id="ownCellColoring">Red</div>'+
    '<div class="dropdown-item" id="ownCellColoring">Orange</div>'+
    '<div class="dropdown-item" id="ownCellColoring">Yellow</div>'+
    '<div class="dropdown-item" id="ownCellColoring">Green</div>'+
    '<div class="dropdown-item" id="ownCellColoring">Dark Green</div>'+
    '<div class="dropdown-item" id="ownCellColoring">Cyan</div>'+
    '<div class="dropdown-item" id="ownCellColoring">Blue</div>'+
    '<div class="dropdown-item" id="ownCellColoring">Dark Blue</div>'+
    '<div class="dropdown-item" id="ownCellColoring">Purple</div>'+
    '<div class="dropdown-item" id="ownCellColoring">Pink</div>'+   '</div></div></div>'
document.getElementById("xp_bar").outerHTML = '<div class="setting opt-toggle" id="xp_bar"><div class="name">Hide user level xp bar</div><div class="toggle-btn"><div class="slide"></div><div class="ball"></div></div></div>'
document.getElementById("use_menu_background").outerHTML = '<div class="setting opt-toggle" id="use_menu_background"><div class="name">Use main menu background image</div><div class="toggle-btn"><div class="slide"></div><div class="ball"></div></div></div>'
document.getElementById("background_link_placeholder").innerHTML = '<div class="name">Main menu background image link</div><input class="text" value="" placeholder="Must be google link | https://"></div>'
document.getElementById("background_link_placeholder").style.display = "none"
document.getElementsByClassName("slide")[32].addEventListener("click", use_xp_bar)
document.getElementsByClassName("ball")[32].addEventListener("click", use_xp_bar)
document.getElementsByClassName("slide")[33].addEventListener("click", use_menu_button)
document.getElementsByClassName("ball")[33].addEventListener("click", use_menu_button)
var menu_background_color = document.getElementsByClassName("text minicolors-input")[16]
var menu_border_color = document.getElementsByClassName("text minicolors-input")[17]
var main_primary_color = document.getElementsByClassName("text minicolors-input")[18]
var background_image = document.getElementsByClassName("text")[69]
var senpa_logo_value = document.getElementsByClassName("dropdown-list")[8]
document.getElementsByClassName("main-menu")[0].style.setProperty("border", "#ffffff00")
menu_background_color.addEventListener('change', save_background_color);
menu_border_color.addEventListener('change', save_background_border);
main_primary_color.addEventListener('change', save_main_primary_color);
main_primary_color.addEventListener('change', change_primary_color);
background_image.addEventListener('change', save_background_link);
senpa_logo_value.children[0].addEventListener('click', senpa_logo_red);
senpa_logo_value.children[1].addEventListener('click', senpa_logo_orange);
senpa_logo_value.children[2].addEventListener('click', senpa_logo_yellow);
senpa_logo_value.children[3].addEventListener('click', senpa_logo_green);
senpa_logo_value.children[4].addEventListener('click', senpa_logo_darkgreen);
senpa_logo_value.children[5].addEventListener('click', senpa_logo_cyan);
senpa_logo_value.children[6].addEventListener('click', senpa_logo_blue);
senpa_logo_value.children[7].addEventListener('click', senpa_logo_darkblue);
senpa_logo_value.children[8].addEventListener('click', senpa_logo_purple);
senpa_logo_value.children[9].addEventListener('click', senpa_logo_pink);
var senpa_logo_selected = document.getElementsByClassName("selected")[8]
var senpa_log_error = '殺ExtendedSenpaす: Saved changes'
var senpa_logo_link = document.getElementsByClassName("logo")[0]
var toggle_button = document.getElementsByClassName("toggle-btn")
function use_xp_bar(){
    if (toggle_button[32].className === 'toggle-btn'){
        toggle_button[32].className = 'toggle-btn active';chrome.storage.sync.set({'user_xp_button': 'toggle-btn active'},function(){console.log(senpa_log_error)})}
    else {toggle_button[32].className = 'toggle-btn';     chrome.storage.sync.set({'user_xp_button': 'toggle-btn'},function(){console.log(senpa_log_error)})}}
function use_menu_button(){
    if (toggle_button[33].className === 'toggle-btn'){
        toggle_button[33].className = 'toggle-btn active';chrome.storage.sync.set({'use_menu_bg_button': 'toggle-btn active'},function(){console.log(senpa_log_error)})}
    else{toggle_button[33].className = 'toggle-btn';      chrome.storage.sync.set({'use_menu_bg_button': 'toggle-btn'},function(){console.log(senpa_log_error)})}}
function senpa_logo_red(){
    senpa_logo_selected.textContent = 'Red'
    senpa_logo_link.innerHTML ='<img src="https://i.imgur.com/LYwdFOc.png" alt="logo">';chrome.storage.sync.set({'senpa_logo_color': 'Red'},function(){console.log(senpa_log_error)})}
function senpa_logo_orange(){
    senpa_logo_selected.textContent = 'Orange'
    senpa_logo_link.innerHTML ='<img src="https://i.imgur.com/9XZUwmN.png" alt="logo">';chrome.storage.sync.set({'senpa_logo_color': 'Orange'},function(){console.log(senpa_log_error)})}
function senpa_logo_yellow(){
    senpa_logo_selected.textContent = 'Yellow'
    senpa_logo_link.innerHTML ='<img src="https://i.imgur.com/bRAwjZr.png" alt="logo">';chrome.storage.sync.set({'senpa_logo_color': 'Yellow'},function(){console.log(senpa_log_error)})}
function senpa_logo_green(){
    senpa_logo_selected.textContent = 'Green'
    senpa_logo_link.innerHTML ='<img src="https://i.imgur.com/raQFhDP.png" alt="logo">';chrome.storage.sync.set({'senpa_logo_color': 'Green'},function(){console.log(senpa_log_error)})}
function senpa_logo_darkgreen(){
    senpa_logo_selected.textContent = 'Dark Green'
    senpa_logo_link.innerHTML ='<img src="https://i.imgur.com/DoBJIsP.png" alt="logo">';chrome.storage.sync.set({'senpa_logo_color': 'Dark Green'},function(){console.log(senpa_log_error)})}
function senpa_logo_cyan(){
    senpa_logo_selected.textContent = 'Cyan'
    senpa_logo_link.innerHTML ='<img src="https://i.imgur.com/ajnGKuy.png" alt="logo">';chrome.storage.sync.set({'senpa_logo_color': 'Cyan'},function(){console.log(senpa_log_error)})}
function senpa_logo_blue(){
    senpa_logo_selected.textContent = 'Blue'
    senpa_logo_link.innerHTML ='<img src="https://i.imgur.com/W9FiqLl.png" alt="logo">';chrome.storage.sync.set({'senpa_logo_color': 'Blue'},function(){console.log(senpa_log_error)})}
function senpa_logo_darkblue(){
    senpa_logo_selected.textContent = 'Dark Blue'
    senpa_logo_link.innerHTML ='<img src="https://i.imgur.com/JcK8S2f.png" alt="logo">';chrome.storage.sync.set({'senpa_logo_color': 'Dark Blue'},function(){console.log(senpa_log_error)})}
function senpa_logo_purple(){
    senpa_logo_selected.textContent = 'Purple'
    senpa_logo_link.innerHTML ='<img src="https://i.imgur.com/i8yhwmr.png" alt="logo">';chrome.storage.sync.set({'senpa_logo_color': 'Purple'},function(){console.log(senpa_log_error)})}
function senpa_logo_pink(){
    senpa_logo_selected.textContent = 'Pink'
    senpa_logo_link.innerHTML ='<img src="https://i.imgur.com/D25DhfC.png" alt="logo">';chrome.storage.sync.set({'senpa_logo_color': 'Pink'},function(){console.log(senpa_log_error)})}
setInterval(function() {
    var main_menu = document.getElementsByClassName("main-menu")[0]
    var bg_link = document.getElementById("background_link_placeholder")
    try{
        main_menu.style.setProperty("background", menu_background_color.value);
        main_menu.style['boxShadow'] = '0 0 20px'+ menu_border_color.value;
        if (toggle_button[33].className === 'toggle-btn active'){bg_link.style.display = "block";main_menu.style.setProperty("background-image", "url("+background_image.value+")");}
        else{bg_link.style.display = "none";main_menu.style.setProperty("background-image", ""); }
        if (toggle_button[32].className === 'toggle-btn active'){document.getElementsByClassName("exp-area")[0].style.display = "none"}
        else{document.getElementsByClassName("exp-area")[0].style.display = ""}
    } catch (error) {
        if (error.name.toString() == "TypeError") {}
    }
},100);
function save_background_color(){chrome.storage.sync.set({'bg_color': menu_background_color.value},function(){console.log(senpa_log_error)});}
function save_background_border(){chrome.storage.sync.set({'border_color': menu_border_color.value},function(){console.log(senpa_log_error)});}
function save_background_link(){chrome.storage.sync.set({'background_link': background_image.value},function(){console.log(senpa_log_error)});}
function save_main_primary_color(){chrome.storage.sync.set({'main_color': main_primary_color.value},function(){console.log(senpa_log_error)});}
window.onload = function(){
    console.log('殺ExtendedSenpaす: Loading data')
    chrome.storage.sync.get(['senpa_logo_color'], function(data){
        if (data.senpa_logo_color === 'Red'){senpa_logo_link.innerHTML =         '<img src="https://i.imgur.com/LYwdFOc.png" alt="logo">', senpa_logo_selected.textContent = 'Red'}
        if (data.senpa_logo_color === 'Orange'){senpa_logo_link.innerHTML =      '<img src="https://i.imgur.com/9XZUwmN.png" alt="logo">', senpa_logo_selected.textContent = 'Orange'}
        if (data.senpa_logo_color === 'Yellow'){senpa_logo_link.innerHTML =      '<img src="https://i.imgur.com/bRAwjZr.png" alt="logo">', senpa_logo_selected.textContent = 'Yellow'}
        if (data.senpa_logo_color === 'Green'){senpa_logo_link.innerHTML =       '<img src="https://i.imgur.com/raQFhDP.png" alt="logo">', senpa_logo_selected.textContent = 'Green'}
        if (data.senpa_logo_color === 'Dark Green'){senpa_logo_link.innerHTML =  '<img src="https://i.imgur.com/DoBJIsP.png" alt="logo">', senpa_logo_selected.textContent = 'Dark Green'}
        if (data.senpa_logo_color === 'Cyan'){senpa_logo_link.innerHTML =        '<img src="https://i.imgur.com/ajnGKuy.png" alt="logo">', senpa_logo_selected.textContent = 'Cyan'}
        if (data.senpa_logo_color === 'Blue'){senpa_logo_link.innerHTML =        '<img src="https://i.imgur.com/W9FiqLl.png" alt="logo">', senpa_logo_selected.textContent = 'Blue'}
        if (data.senpa_logo_color === 'Dark Blue'){senpa_logo_link.innerHTML =   '<img src="https://i.imgur.com/JcK8S2f.png" alt="logo">', senpa_logo_selected.textContent = 'Dark Blue'}
        if (data.senpa_logo_color === 'Purple'){senpa_logo_link.innerHTML =      '<img src="https://i.imgur.com/i8yhwmr.png" alt="logo">', senpa_logo_selected.textContent = 'Purple'}
        if (data.senpa_logo_color === 'Pink'){senpa_logo_link.innerHTML =        '<img src="https://i.imgur.com/D25DhfC.png" alt="logo">', senpa_logo_selected.textContent = 'Pink'}})
    chrome.storage.sync.get(['bg_color'], function(data){menu_background_color.value = data.bg_color;})
    chrome.storage.sync.get(['border_color'], function(data){menu_border_color.value = data.border_color})
    chrome.storage.sync.get(['main_color'], function(data){main_primary_color.value = data.main_color, change_primary_color();})
    chrome.storage.sync.get(['background_link'], function(data){background_image.value = data.background_link})
    chrome.storage.sync.get(['user_xp_button'], function(data){if (data.user_xp_button === 'toggle-btn active'){toggle_button[32].className = 'toggle-btn active';}else{toggle_button[32].className = 'toggle-btn';}})
    chrome.storage.sync.get(['use_menu_bg_button'], function(data){if (data.use_menu_bg_button === 'toggle-btn active'){toggle_button[33].className = 'toggle-btn active';}else{toggle_button[33].className = 'toggle-btn';}})}
function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}
setInterval(async function() {
    try {
        var end_game = document.getElementById("endGame")
        var nick_all = document.getElementById("chat-all-room").lastElementChild.getElementsByClassName("nick")[0]
        var nick_private = document.getElementById("chat-party-room").lastElementChild.getElementsByClassName("nick")[0]
        if(end_game.getAttribute('style').includes("block")) {
            document.getElementById("ad-button-continue").click()
            await sleep(150);
            document.getElementById("endGame").style = ''
        if (nick_all.innerHTML === ('<span style="color: yellow">[VIP]</span> Shine :')) {nick_all.innerHTML = ('<span style="color: blue">[DEV]</span> Shine :');}
        if (nick_all.innerHTML === ('<span style="color: yellow">[VIP]</span> Vekk :')) {nick_all.innerHTML = ('<span style="color: blue">[DEV]</span> Vekk :');} 
        if (nick_private.innerHTML === ('<span style="color: yellow">[VIP]</span> Shine :')) {nick_private.innerHTML = ('<span style="color: blue">[DEV]</span> Shine :');}
        if (nick_private.innerHTML === ('<span style="color: yellow">[VIP]</span> Vekk :')) {nick_private.innerHTML = ('<span style="color: blue">[DEV]</span> Vekk :');}
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
