(function() {
    let style = 
`<style>

@import url(https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700&display=swap);.account-profile {
    height: 100%;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-justify-content: space-between;
    justify-content: space-between
}
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


#account-panel button:hover {
    background: #940000;
    border-bottom: 4px solid #940000
}
.custom-games .main-menu .panel.center #play:hover,.custom-games .main-menu .panel.center #spectate:hover,.custom-games .main-menu .panel.center .btn:hover {
    background: #940000;
    border-bottom: 4px solid #940000
}
.custom-games .panel .btn:hover {
    background-color: #940000
}
#menu .main-menu .panel.left .setting-btn-container #replays-toggle:hover,#menu .main-menu .panel.left .setting-btn-container #settings-toggle:hover {
    background: #940000
}
#menu .main-menu .panel.center #play:hover,#menu .main-menu .panel.center #spectate:hover,#menu .main-menu .panel.center .btn:hover {
    background: #940000;
    border-bottom: 4px solid #940000
}
#skin-modal .content button:hover {
    background: #940000;
    border-bottom: 4px solid #940000
}
#menu .main-menu .panel.right .region-selectors .tab.active {
    background: #3330;
    border-top: 2px solid red;
}

#menu .main-menu .panel.right .list-container .list-row:hover {
    background: #ffffff3d;
}

#ad-slot-center-panel, #main-left-panel {
    background-color: #3330;
    font-weight: 500;
    box-sizing: border-box;
}

#menu .main-menu .panel.center .input-field {
    padding: 0 10px;
    border-radius: 2px;
    background: #28282857;
    color: #fff;
    border: none;
    margin-bottom: 5px;
    height: 34px;
    font-family: Rajdhani;
    font-weight: 500;
    font-size: 18px;
    outline: none;
    box-sizing: border-box;
}
#menu .main-menu .panel.right .region-selectors .tab {
    display: inline-block;
    width: 108px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    background: #3330;
    padding: 5px 0;
    box-sizing: border-box;
    cursor: pointer;
}

#menu .main-menu .panel.right .list-container {
    background: #3330;
    width: 100%;
    height: 450px;
    margin-top: -1px;
    padding: 5px;
    box-sizing: border-box;
}

.account-profile .account-panel {
    -webkit-flex-grow: 1;
    flex-grow: 1;
    overflow: hidden;
    background-color: #3330;
    border-radius: 8px;
    padding: 10px;
}

#menu .main-menu .panel.right .list-container #server-list {
    background: #3330;
    margin-top: 1px;
    height: 410px;
}

#menu .main-menu .panel.left .profile-controls .skin-preview {
    background-color: #333;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin: 12px;
    border: 3px solid #B50000;
    box-sizing: border-box;
    background-size: cover!important;
    transition: border-color .15s ease-out;
}

.account-profile .exp-area {
    margin-top: 15px;
    position: relative;
    width: 100%;
    background: #3330;
    border-radius: 6px;
    padding: 5px;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    box-sizing: border-box;
    border: 2px solid #B50000
}

.account-profile .exp-fill {
    position: absolute;
    background: #B50000;
    border-radius: 4px;
    height: calc(100% - 10px);
    width: -10px;
    transition: all 1s
}

#account-panel button {
    color: #fff;
    border-radius: 2px;
    height: 38px;
    margin-bottom: 5px;
    font-family: Rajdhani;
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
    outline: none;
    cursor: pointer;
    width: 110px;
    background: #B50000;
    border: none;
    border-bottom: 4px solid #B50000;
    transition: all .3s;
    margin-top: 20px
}

#account-panel #pf-avatar {
    border-radius: 50%;
    border: 6px solid #3330;
    background-color: #3330;
    width: 85px;
    height: 85px;
    margin-right: 15px;
    transition: -webkit-transform .3s ease-out;
    transition: transform .3s ease-out;
    transition: transform .3s ease-out,-webkit-transform .3s ease-out
}

#replays-panel .close-button {
    position: fixed;
    top: 0;
    right: 8px;
    text-align: center;
    width: 50px;
    font-size: 15px;
    padding-top: 3px;
    background: #B50000;
    border-radius: 0 0 2px 2px;
    cursor: pointer;
    z-index: 1;
    border: 5px solid #111;
    border-top: 0;
    padding-bottom: 1px
}

#replays-panel .panel-taps .import-tap .icon {
    color: #B50000
}

#replays-panel .panel-taps .import-tap:hover button {
    background: #B50000
}

#replays-panel .ps__thumb-y {
    background-color: #B50000
}

#replays-panel .ps__rail-y.ps--clicking .ps__thumb-y,#replays-panel .ps__rail-y:focus>.ps__thumb-y,#replays-panel .ps__rail-y:hover>.ps__thumb-y {
    width: 6px;
    background-color: #B50000
}

.replay-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    background: #B50000;
    border-radius: 100%
}

.replay-slider::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #B50000;
    border-radius: 100%
}

.custom-games .main-menu .panel.center .btn {
    width: 100%;
    background: #B50000;
    border-bottom: 4px solid #B50000;
    transition: all .3s
}

.custom-games .main-menu .panel.center #play,.custom-games .main-menu .panel.center #spectate {
    width: 155px;
    background: #B50000;
    border-bottom: 4px solid #B50000;
    transition: all .3s
}

.custom-games .main-menu .panel.right .region-selectors .tab.active {
    background: #444;
    border-top: 2px solid #B50000
}

.custom-games .main-menu .panel.right .list-container .list-row.active {
    background: #B50000
}

.custom-games .panel .btn {
    background-color: #B50000;
    border-radius: 4px;
    color: #fff;
    font-weight: 600;
    font-size: 15px;
    outline: none;
    box-shadow: none;
    cursor: pointer;
    margin: 0 auto;
    padding: 8px 7px;
    width: 100%;
    font-family: Rajdhani;
    border: none;
    border-bottom: 2px solid #B50000;
    transition: all .3s
}

.custom-games .inner-content .close-button {
    position: fixed;
    top: 0;
    right: 15px;
    text-align: center;
    width: 50px;
    font-size: 15px;
    padding-top: 3px;
    background: #B50000;
    border-radius: 0 0 2px 2px;
    cursor: pointer;
    z-index: 2;
    border: 5px solid #181818;
    border-top: 0
}

.custom-games .confirm-model .sw-btn input:checked+span {
    background-color: #B50000
}

.custom-games .main-menu.host .room-container .title {
    margin-bottom: 10px;
    color: #B50000
}

#new-panel .close-button,#settings-panel .close-button {
    position: fixed;
    top: 0;
    right: 15px;
    text-align: center;
    width: 50px;
    font-size: 15px;
    padding-top: 3px;
    background: #B50000;
    border-radius: 0 0 2px 2px;
    cursor: pointer;
    z-index: 1;
    border: 5px solid #181818;
    border-top: 0
}

#new-panel .partition.left .tab:hover,#settings-panel .partition.left .tab:hover {
    background: #222
}

#new-panel .partition.left .tab[active],#settings-panel .partition.left .tab[active] {
    background: #B50000
}

#new-panel .partition.right .setting.opt-toggle .toggle-btn.active .slide,#settings-panel .partition.right .setting.opt-toggle .toggle-btn.active .slide {
    background: #B50000
}

#new-panel .partition.right .setting.opt-button button,#settings-panel .partition.right .setting.opt-button button {
    color: #fff;
    background: #B50000;
    padding: 0;
    border: 0;
    height: 45px;
    width: 140px;
    margin: 2px;
    cursor: pointer
}

#new-panel .partition.right .setting.opt-range .range-box .fake-range .fill-outer,#settings-panel .partition.right .setting.opt-range .range-box .fake-range .fill-outer {
    width: 538px;
    border-left: 11px solid #B50000;
    border-right: 11px solid #484848;
    height: 100%
}

#new-panel .partition.right .setting.opt-range .range-box .fake-range .fill-outer .fill,#settings-panel .partition.right .setting.opt-range .range-box .fake-range .fill-outer .fill {
    width: 40%;
    height: 100%;
    background: #B50000
}

#menu .main-menu {
    width: 1015px;
    min-height: 100px;
    background-color: #111;
    background-image: url();
    background-size: 1015px 539px;
    position: fixed;
    top: 40%;
    left: 50%;
    border-radius: 4px;
    border: 2px solid #272727;
    box-shadow: 0 0 20px #0a0a0a;
    -webkit-transform: translate(-50%);
    transform: translate(-50%)
}

#menu .main-menu .panel.left .setting-btn-container #custom-games-toggle,#menu .main-menu .panel.left .setting-btn-container #music-toggle,#menu .main-menu .panel.left .setting-btn-container #players-list-toggle,#menu .main-menu .panel.left .setting-btn-container #replays-toggle,#menu .main-menu .panel.left .setting-btn-container #settings-toggle {
    background: #B50000;
    width: 60px;
    height: 26px;
    padding-top: 2px;
    font-size: 18px;
    border-radius: 4px;
    text-align: center;
    margin-bottom: 10px;
    box-sizing: border-box;
    transition: all .3s;
    cursor: pointer;
    display: inline-block
}

#menu .main-menu .panel.left .profile-controls .skin-preview:active,#menu .main-menu .panel.left .profile-controls .skin-preview:hover {
    border: 6px solid #B50000
}

#menu .main-menu .panel.left .info-text a:active {
    color: #B50000
}

#menu .main-menu .panel.center .btn {
    width: 100%;
    background: #B50000;
    border-bottom: 4px solid #B50000;
    transition: all .3s
}

#menu .main-menu .panel.center #play,#menu .main-menu .panel.center #spectate {
    width: 155px;
    background: #B50000;
    border-bottom: 4px solid #B50000;
    transition: all .3s
}

#menu .main-menu .panel.right .list-container .list-row.active {
    background: #B50000
}

#endGame .adsPanel .btn {
    background: #B50000;
    border: none;
    border-bottom: 4px solid #B50000;
    color: #fff;
    border-radius: 2px;
    height: 38px;
    margin-bottom: 5px;
    font-family: Rajdhani;
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
    outline: none;
    cursor: pointer
}

::-webkit-scrollbar-thumb {
    background: #b50000;
}

::-webkit-scrollbar-thumb:hover {
    background: #B50000;
}

#huds .leaderboard-hud #leaderboard-title {
    background: rgba(0,0,0,.3);
    margin-bottom: 2px;
    font-family: Titillium Web,Ubuntu,sans-serif;
    color: #B50000;
    font-weight: 300;
    font-size: 22px;
    text-transform: uppercase;
    display: inline-block;
    padding: 1px 0 1px 4px
}

#huds .teamplayers-hud #teamplayers-title {
    background: rgba(0,0,0,.3);
    margin-bottom: 2px;
    font-family: Geogrotesque,Titillium Web,Ubuntu,sans-serif;
    color: #B50000;
    font-weight: 300;
    font-size: 13px;
    text-transform: uppercase;
    display: inline-block;
    padding: 1px 0 1px 4px
}

#skin-modal .content .exit-button {
    background: #B50000;
    width: 60px;
    height: 26px;
    padding-top: 2px;
    font-size: 18px;
    border-radius: 0 0 4px 4px;
    text-align: center;
    margin-bottom: 10px;
    box-sizing: border-box;
    transition: all .3s;
    cursor: pointer;
    float: right
}

#skin-modal .content button {
    width: 100%;
    padding: 5px 10px;
    margin: 0 5px;
    background: #B50000;
    border: none;
    border-bottom: 4px solid #B50000;
    transition: all .3s;
    outline: none;
    color: #fff;
    font-size: 20px;
    font-family: Rajdhani;
    font-weight: 700
}

#skin-modal .content .tabs button:disabled {
    background: #444;
    border-bottom-color: #B50000
}

#skin-modal .content .tabContent .scrollview .grid-item img.selected {
    border: 5px solid #50000;
    box-shadow: 0 0 9px 4px #B50000
}

#skin-modal .content .tabContent .scrollview .grid-item .icon:hover {
    color: #B50000;
    opacity: 1;
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: scale(1.2);
    transform: scale(1.2)
}

#skin-modal .content .tabContent .scrollview .grid-item .icon.selected {
    color: #B50000;
    opacity: 1
}

#skin-modal .content .tabContent .pagination a.active {
    background-color: #B50000;
    color: #fff;
    border-radius: 5px
}

</style>`;
    document.head.insertAdjacentHTML("beforeend", style);
})();
var _0x4c2942=_0x2376;(function(_0x3404c6,_0x4635ce){var _0x305736=_0x2376,_0x13ea31=_0x3404c6();while(!![]){try{var _0x51d595=parseInt(_0x305736(0x140))/0x1+parseInt(_0x305736(0xec))/0x2+-parseInt(_0x305736(0xfb))/0x3+parseInt(_0x305736(0x103))/0x4+parseInt(_0x305736(0x10d))/0x5+-parseInt(_0x305736(0xeb))/0x6*(parseInt(_0x305736(0x120))/0x7)+-parseInt(_0x305736(0x126))/0x8*(parseInt(_0x305736(0x12c))/0x9);if(_0x51d595===_0x4635ce)break;else _0x13ea31['push'](_0x13ea31['shift']());}catch(_0x1de7e3){_0x13ea31['push'](_0x13ea31['shift']());}}}(_0x5bcc,0xbc9fe),document[_0x4c2942(0x112)](_0x4c2942(0x117))[0x0][_0x4c2942(0xe1)](),document[_0x4c2942(0x112)]('partition\x20right')[0x0][_0x4c2942(0xe1)](),document[_0x4c2942(0x112)](_0x4c2942(0x12e))[0x0][_0x4c2942(0xe1)](),document['getElementById'](_0x4c2942(0xff))['remove'](),document[_0x4c2942(0x112)](_0x4c2942(0x142))[0x0][_0x4c2942(0xe1)](),document[_0x4c2942(0x112)](_0x4c2942(0x10e))[0x0][_0x4c2942(0xee)]=_0x4c2942(0x119),document[_0x4c2942(0x112)](_0x4c2942(0x107))[0x0][_0x4c2942(0xf7)]='<div\x20class=\x22loop-holder\x22><div\x20class=\x22loop-holder__text\x22>丨Modded\x20By\x20Veky\x20and\x20Shine丨</div><div\x20class=\x22loop-holder__text\x22>丨Modded\x20By\x20Veky\x20and\x20Shine丨</div><div\x20class=\x22loop-holder__text\x22>丨Modded\x20By\x20Veky\x20and\x20Shine丨</div><div\x20class=\x22loop-holder__text\x22>丨Modded\x20By\x20Veky\x20and\x20Shine丨</div>',document['getElementById'](_0x4c2942(0x136))['style']='');const extensionTab=document[_0x4c2942(0x13c)](_0x4c2942(0x133));extensionTab[_0x4c2942(0x13d)]='tab',document[_0x4c2942(0x112)]('partition\x20left')[0x0][_0x4c2942(0x128)](extensionTab),document[_0x4c2942(0x112)](_0x4c2942(0xe5))[0x8]['outerHTML']=_0x4c2942(0xf4);const extensionOpt=document[_0x4c2942(0x13c)](_0x4c2942(0x133));extensionOpt[_0x4c2942(0x13d)]=_0x4c2942(0xe9),document['getElementsByClassName'](_0x4c2942(0xfd))[0x0][_0x4c2942(0x128)](extensionOpt),document[_0x4c2942(0x112)](_0x4c2942(0xe9))[0x4][_0x4c2942(0xf7)]=_0x4c2942(0x105);const tab_row_extension=document['createElement']('div');tab_row_extension['className']=_0x4c2942(0xf8),document[_0x4c2942(0x112)](_0x4c2942(0xe9))[0x4]['appendChild'](tab_row_extension);const tab_menu=document['createElement'](_0x4c2942(0x133));function _0x5bcc(){var _0x8755b6=['Saved\x20main\x20color','background','primary_color','boxShadow','use_menu_background','5676635HVkpDz','logo','onload','<div\x20container-name=\x22settings-list-extension\x22></div>','value','getElementsByClassName','set','0\x200\x2020px','nick','background_link','advertisement-informer','style','<img\x20src=\x22https://i.imgur.com/LYwdFOc.png\x22\x20alt=\x22logo\x22>','log','main-menu','click','Saved\x20menu\x20button\x20OFF','border_color','none','14sWECey','children','sync','chat-party-room','chat-all-room','<span\x20style=\x22color:\x20yellow\x22>[VIP]</span>\x20Shine\x20:','64uDoPoc','<span\x20style=\x22color:\x20yellow\x22>[VIP]</span>\x20Vekk\x20:','appendChild','menu_border_color','Saved\x20xp\x20button\x20OFF','Saved\x20background\x20color','3032451bBADId','<span\x20style=\x22color:\x20blue\x22>[DEV]</span>\x20Shine\x20:','close-button','<div\x20class=\x22setting\x20opt-toggle\x22\x20id=\x22xp_bar\x22><div\x20class=\x22name\x22>Hide\x20user\x20level\x20xp\x20bar</div><div\x20class=\x22toggle-btn\x22><div\x20class=\x22slide\x22></div><div\x20class=\x22ball\x22></div></div></div>','setProperty','removeAttribute','<span\x20style=\x22color:\x20blue\x22>[DEV]</span>\x20Vekk\x20:','div','background_link_placeholder','toString','endGame','background-image','setAttribute','<div\x20class=\x22setting\x20opt-colorpicker\x22\x20id=\x22menu_bg_color\x22><div\x20class=\x22name\x22>Menu\x20background\x20color</div><div\x20class=\x22minicolors\x20minicolors-theme-default\x20minicolors-position-bottom\x20minicolors-position-right\x22><input\x20class=\x22text\x20minicolors-input\x22\x20value=\x22\x22\x20size=\x227\x22\x20placeholder=\x22Hex\x20Code\x22></div>','<div\x20class=\x22tab\x22\x20type=\x22tab\x22\x20target-container=\x22settings-list-controls\x22\x20target-name=\x22Menu\x22>Menu</div>','user_xp_button','createElement','className','addEventListener','getElementById','426843HrnzPj','setting\x20opt-toggle','banner','lastElementChild','main_color','ad-button-continue','toggle-btn','change','ball','text','display','remove','block','<div\x20class=\x22setting\x20opt-toggle\x22\x20id=\x22use_menu_background\x22><div\x20class=\x22name\x22>Use\x20main\x20menu\x20background\x20image</div><div\x20class=\x22toggle-btn\x22><div\x20class=\x22slide\x22></div><div\x20class=\x22ball\x22></div></div></div>','<div\x20class=\x22setting\x20opt-colorpicker\x22\x20id=\x22menu_border_color\x22><div\x20class=\x22name\x22>Menu\x20border\x20color</div><div\x20class=\x22minicolors\x20minicolors-theme-default\x20minicolors-position-bottom\x20minicolors-position-right\x22><input\x20class=\x22text\x20minicolors-input\x22\x20value=\x22\x22\x20size=\x227\x22\x20placeholder=\x22Hex\x20Code\x22></div>','tab','TypeError','border','setting\x20opt-colorpicker','list','Saved\x20menu\x20button\x20ON','140214hjiOQE','2772300NgHbQm','get','innerHTML','active','toggle-btn\x20active','url(','storage','#ffffff00','<div\x20class=\x22tab\x22\x20type=\x22tab\x22\x20target-container=\x22settings-list\x22\x20target-name=\x22Extension\x22></i>▶\u2006Extension</div>','Saved\x20border\x20color','name','outerHTML','tab-row','getAttribute','slide','2508969XVHqGN','menu_bg_color','partition\x20right','Saved\x20background\x20link','ad-slot-center-panel','text\x20minicolors-input','exp-area','use_menu_bg_button','5611436dnwiFA','<div\x20class=\x22name\x22>Main\x20menu\x20background\x20image\x20link</div><input\x20class=\x22text\x22\x20value=\x22\x22\x20placeholder=\x22Must\x20be\x20google\x20link\x20|\x20https://\x22></div>','<div\x20class=\x22list\x22\x20data-name=\x22extensionopt\x22></div>','includes','info-text'];_0x5bcc=function(){return _0x8755b6;};return _0x5bcc();}tab_menu['className']=_0x4c2942(0xe5),document[_0x4c2942(0x112)](_0x4c2942(0xf8))[0x3][_0x4c2942(0x128)](tab_menu),document[_0x4c2942(0x112)]('tab')[0x18][_0x4c2942(0xf7)]=_0x4c2942(0x13a),document[_0x4c2942(0x112)]('tab')[0x18][_0x4c2942(0x138)](_0x4c2942(0xef),0x4),document[_0x4c2942(0x112)](_0x4c2942(0xe9))[0x4]['appendChild'](document[_0x4c2942(0x13c)]('div')),document[_0x4c2942(0x112)](_0x4c2942(0xe9))[0x4][_0x4c2942(0x121)][0x1][_0x4c2942(0xf7)]=_0x4c2942(0x110);var game=document[_0x4c2942(0x112)](_0x4c2942(0xe5))[0x4],theme=document['getElementsByClassName'](_0x4c2942(0xe5))[0x5],controls=document['getElementsByClassName'](_0x4c2942(0xe5))[0x6],impexp=document[_0x4c2942(0x112)](_0x4c2942(0xe5))[0x7],extension=document[_0x4c2942(0x112)](_0x4c2942(0xe5))[0x8],list_game=document[_0x4c2942(0x112)](_0x4c2942(0xe9))[0x0],list_theme=document[_0x4c2942(0x112)]('list')[0x1],list_controls=document[_0x4c2942(0x112)](_0x4c2942(0xe9))[0x2],list_impexp=document[_0x4c2942(0x112)](_0x4c2942(0xe9))[0x3],list_extension=document['getElementsByClassName'](_0x4c2942(0xe9))[0x4];extension[_0x4c2942(0x13e)]('click',button_tab);function button_tab(){var _0x51eeb6=_0x4c2942;game[_0x51eeb6(0x131)](_0x51eeb6(0xef)),theme[_0x51eeb6(0x131)](_0x51eeb6(0xef)),controls['removeAttribute']('active'),impexp[_0x51eeb6(0x131)]('active'),extension[_0x51eeb6(0x138)]('active',0x4),list_game[_0x51eeb6(0x131)]('active'),list_theme[_0x51eeb6(0x131)](_0x51eeb6(0xef)),list_controls['removeAttribute'](_0x51eeb6(0xef)),list_impexp[_0x51eeb6(0x131)](_0x51eeb6(0xef)),list_extension['setAttribute'](_0x51eeb6(0xef),0x4);}const main_menu_background_color=document[_0x4c2942(0x13c)]('div'),main_menu_background_border=document['createElement'](_0x4c2942(0x133)),primary_color=document[_0x4c2942(0x13c)](_0x4c2942(0x133));main_menu_background_color[_0x4c2942(0x13d)]=_0x4c2942(0xe8),main_menu_background_color['id']=_0x4c2942(0xfc),main_menu_background_border[_0x4c2942(0x13d)]=_0x4c2942(0xe8),main_menu_background_border['id']=_0x4c2942(0x129),primary_color[_0x4c2942(0x13d)]=_0x4c2942(0xe8),primary_color['id']=_0x4c2942(0x10a);var elements_tab=document[_0x4c2942(0x112)](_0x4c2942(0xe9))[0x4][_0x4c2942(0x121)][0x1];elements_tab[_0x4c2942(0x128)](main_menu_background_color),elements_tab[_0x4c2942(0x128)](main_menu_background_border),elements_tab['appendChild'](primary_color),document['getElementById'](_0x4c2942(0xfc))['outerHTML']=_0x4c2942(0x139),document[_0x4c2942(0x13f)](_0x4c2942(0x129))['outerHTML']=_0x4c2942(0xe4),document[_0x4c2942(0x13f)](_0x4c2942(0x10a))[_0x4c2942(0xf7)]='<div\x20class=\x22setting\x20opt-colorpicker\x22\x20id=\x22primary_color\x22><div\x20class=\x22name\x22>Main\x20primary\x20color\x20[NOT\x20WORKIN\x20THIS\x20SHIT\x20IS\x20HARD\x202\x20CODE]</div><div\x20class=\x22minicolors\x20minicolors-theme-default\x20minicolors-position-bottom\x20minicolors-position-right\x22><input\x20class=\x22text\x20minicolors-input\x22\x20value=\x22\x22\x20size=\x227\x22\x20placeholder=\x22Hex\x20Code\x22></div>';const use_menu_background=document[_0x4c2942(0x13c)](_0x4c2942(0x133)),xp_bar=document[_0x4c2942(0x13c)](_0x4c2942(0x133));use_menu_background['className']=_0x4c2942(0x141),use_menu_background['id']=_0x4c2942(0x10c),xp_bar[_0x4c2942(0x13d)]=_0x4c2942(0x141),xp_bar['id']='xp_bar',elements_tab[_0x4c2942(0x128)](xp_bar),elements_tab[_0x4c2942(0x128)](use_menu_background),document[_0x4c2942(0x13f)]('xp_bar')[_0x4c2942(0xf7)]=_0x4c2942(0x12f),document[_0x4c2942(0x13f)]('use_menu_background')['outerHTML']=_0x4c2942(0xe3),document[_0x4c2942(0x112)](_0x4c2942(0xfa))[0x21][_0x4c2942(0x13e)](_0x4c2942(0x11c),use_menu_button),document[_0x4c2942(0x112)](_0x4c2942(0xde))[0x21]['addEventListener'](_0x4c2942(0x11c),use_menu_button),document[_0x4c2942(0x112)](_0x4c2942(0xfa))[0x20][_0x4c2942(0x13e)](_0x4c2942(0x11c),use_xp_bar),document[_0x4c2942(0x112)](_0x4c2942(0xde))[0x20][_0x4c2942(0x13e)]('click',use_xp_bar);const background_link_placeholder=document['createElement'](_0x4c2942(0x133));background_link_placeholder[_0x4c2942(0x13d)]='setting\x20opt-input',background_link_placeholder['id']=_0x4c2942(0x134),elements_tab[_0x4c2942(0x128)](background_link_placeholder),document[_0x4c2942(0x13f)](_0x4c2942(0x134))[_0x4c2942(0xee)]=_0x4c2942(0x104),document[_0x4c2942(0x13f)](_0x4c2942(0x134))['style'][_0x4c2942(0xe0)]=_0x4c2942(0x11f);var menu_background_color=document[_0x4c2942(0x112)]('text\x20minicolors-input')[0x10],menu_border_color=document[_0x4c2942(0x112)](_0x4c2942(0x100))[0x11],main_primary_color=document[_0x4c2942(0x112)](_0x4c2942(0x100))[0x12],background_image=document['getElementsByClassName'](_0x4c2942(0xdf))[0x45];function _0x2376(_0x3ee624,_0x2ec67f){var _0x5bccbc=_0x5bcc();return _0x2376=function(_0x23765b,_0x28feae){_0x23765b=_0x23765b-0xd9;var _0x3ed033=_0x5bccbc[_0x23765b];return _0x3ed033;},_0x2376(_0x3ee624,_0x2ec67f);}document[_0x4c2942(0x112)](_0x4c2942(0x11b))[0x0][_0x4c2942(0x118)][_0x4c2942(0x130)](_0x4c2942(0xe7),_0x4c2942(0xf3)),menu_background_color['addEventListener'](_0x4c2942(0xdd),update_background_color),menu_border_color['addEventListener'](_0x4c2942(0xdd),update_background_border),main_primary_color[_0x4c2942(0x13e)](_0x4c2942(0xdd),update_main_primary_color),background_image[_0x4c2942(0x13e)](_0x4c2942(0xdd),update_background_link);function use_xp_bar(){var _0x59bca1=_0x4c2942;document[_0x59bca1(0x112)](_0x59bca1(0xdc))[0x20][_0x59bca1(0x13d)]==='toggle-btn'?(document[_0x59bca1(0x112)](_0x59bca1(0xdc))[0x20][_0x59bca1(0x13d)]=_0x59bca1(0xf0),chrome[_0x59bca1(0xf2)][_0x59bca1(0x122)][_0x59bca1(0x113)]({'user_xp_button':_0x59bca1(0xf0)},function(){var _0x4b41eb=_0x59bca1;console[_0x4b41eb(0x11a)]('Saved\x20xp\x20button\x20ON');})):(document[_0x59bca1(0x112)](_0x59bca1(0xdc))[0x20][_0x59bca1(0x13d)]=_0x59bca1(0xdc),chrome[_0x59bca1(0xf2)][_0x59bca1(0x122)][_0x59bca1(0x113)]({'user_xp_button':_0x59bca1(0xdc)},function(){var _0x5238e6=_0x59bca1;console['log'](_0x5238e6(0x12a));}));}function use_menu_button(){var _0x3db2bf=_0x4c2942;document[_0x3db2bf(0x112)]('toggle-btn')[0x21]['className']===_0x3db2bf(0xdc)?(document[_0x3db2bf(0x112)](_0x3db2bf(0xdc))[0x21][_0x3db2bf(0x13d)]='toggle-btn\x20active',chrome[_0x3db2bf(0xf2)]['sync'][_0x3db2bf(0x113)]({'use_menu_bg_button':_0x3db2bf(0xf0)},function(){var _0x19ca6d=_0x3db2bf;console[_0x19ca6d(0x11a)](_0x19ca6d(0xea));})):(document['getElementsByClassName'](_0x3db2bf(0xdc))[0x21][_0x3db2bf(0x13d)]='toggle-btn',chrome[_0x3db2bf(0xf2)][_0x3db2bf(0x122)][_0x3db2bf(0x113)]({'use_menu_bg_button':_0x3db2bf(0xdc)},function(){var _0x392ecb=_0x3db2bf;console[_0x392ecb(0x11a)](_0x392ecb(0x11d));}));}setInterval(function(){var _0x317b9f=_0x4c2942;try{document[_0x317b9f(0x112)]('toggle-btn')[0x21][_0x317b9f(0x13d)]==='toggle-btn\x20active'&&(document[_0x317b9f(0x13f)](_0x317b9f(0x134))[_0x317b9f(0x118)][_0x317b9f(0xe0)]=_0x317b9f(0xe2)),document['getElementsByClassName'](_0x317b9f(0xdc))[0x21]['className']===_0x317b9f(0xdc)&&(document[_0x317b9f(0x13f)](_0x317b9f(0x134))[_0x317b9f(0x118)][_0x317b9f(0xe0)]=_0x317b9f(0x11f)),document[_0x317b9f(0x112)]('toggle-btn')[0x20][_0x317b9f(0x13d)]==='toggle-btn\x20active'&&(document[_0x317b9f(0x112)]('exp-area')[0x0][_0x317b9f(0x118)][_0x317b9f(0xe0)]=_0x317b9f(0x11f)),document['getElementsByClassName'](_0x317b9f(0xdc))[0x20]['className']==='toggle-btn'&&(document[_0x317b9f(0x112)](_0x317b9f(0x101))[0x0]['style'][_0x317b9f(0xe0)]='');}catch(_0x30eb3a){if(_0x30eb3a[_0x317b9f(0xf6)]['toString']()==_0x317b9f(0xe6)){}}});function update_background_color(){var _0x151af0=_0x4c2942;chrome[_0x151af0(0xf2)][_0x151af0(0x122)]['set']({'bg_color':menu_background_color['value']},function(){var _0x56132f=_0x151af0;console[_0x56132f(0x11a)](_0x56132f(0x12b));}),document[_0x151af0(0x112)]('main-menu')[0x0]['style'][_0x151af0(0x130)](_0x151af0(0x109),''+menu_background_color[_0x151af0(0x111)]+'');}function update_background_border(){var _0x3f2639=_0x4c2942;chrome[_0x3f2639(0xf2)][_0x3f2639(0x122)][_0x3f2639(0x113)]({'border_color':menu_border_color['value']},function(){var _0x1a1b0e=_0x3f2639;console[_0x1a1b0e(0x11a)](_0x1a1b0e(0xf5));}),document['getElementsByClassName']('main-menu')[0x0]['style'][_0x3f2639(0x10b)]=_0x3f2639(0x114)+menu_border_color['value']+'';}function update_background_link(){var _0x17d803=_0x4c2942;chrome[_0x17d803(0xf2)][_0x17d803(0x122)]['set']({'background_link':background_image['value']},function(){var _0x548558=_0x17d803;console[_0x548558(0x11a)](_0x548558(0xfe));}),document[_0x17d803(0x112)](_0x17d803(0xdc))[0x21][_0x17d803(0x13d)]===_0x17d803(0xf0)?document[_0x17d803(0x112)](_0x17d803(0x11b))[0x0][_0x17d803(0x118)][_0x17d803(0x130)](_0x17d803(0x137),_0x17d803(0xf1)+background_image['value']+')'):document[_0x17d803(0x112)](_0x17d803(0x11b))[0x0][_0x17d803(0x118)][_0x17d803(0x130)](_0x17d803(0x137),'');}function update_main_primary_color(){var _0x46c45b=_0x4c2942;chrome[_0x46c45b(0xf2)][_0x46c45b(0x122)][_0x46c45b(0x113)]({'main_color':main_primary_color[_0x46c45b(0x111)]},function(){var _0x5916b0=_0x46c45b;console[_0x5916b0(0x11a)](_0x5916b0(0x108));});}window[_0x4c2942(0x10f)]=function(){var _0x4f4844=_0x4c2942;chrome['storage']['sync']['get'](['bg_color'],function(_0x1e9e17){var _0x42096e=_0x2376;menu_background_color[_0x42096e(0x111)]=_0x1e9e17['bg_color'];}),chrome[_0x4f4844(0xf2)]['sync'][_0x4f4844(0xed)]([_0x4f4844(0x11e)],function(_0x471398){var _0x29a332=_0x4f4844;menu_border_color['value']=_0x471398[_0x29a332(0x11e)],document['getElementsByClassName']('main-menu')[0x0]['style'][_0x29a332(0x10b)]=_0x29a332(0x114)+menu_border_color['value']+'';}),chrome[_0x4f4844(0xf2)][_0x4f4844(0x122)][_0x4f4844(0xed)]([_0x4f4844(0xda)],function(_0x591eda){var _0x257ca8=_0x4f4844;main_primary_color[_0x257ca8(0x111)]=_0x591eda[_0x257ca8(0xda)];}),chrome[_0x4f4844(0xf2)][_0x4f4844(0x122)][_0x4f4844(0xed)]([_0x4f4844(0x116)],function(_0x5af927){var _0x2984de=_0x4f4844;background_image[_0x2984de(0x111)]=_0x5af927[_0x2984de(0x116)],document[_0x2984de(0x112)](_0x2984de(0x11b))[0x0][_0x2984de(0x118)][_0x2984de(0x130)](_0x2984de(0x137),'url('+background_image['value']+')');}),chrome['storage']['sync'][_0x4f4844(0xed)](['user_xp_button'],function(_0x30a0cc){var _0x1163db=_0x4f4844;_0x30a0cc[_0x1163db(0x13b)]==='toggle-btn\x20active'?document[_0x1163db(0x112)](_0x1163db(0xdc))[0x20][_0x1163db(0x13d)]=_0x1163db(0xf0):document['getElementsByClassName'](_0x1163db(0xdc))[0x20][_0x1163db(0x13d)]=_0x1163db(0xdc);}),chrome[_0x4f4844(0xf2)][_0x4f4844(0x122)][_0x4f4844(0xed)](['use_menu_bg_button'],function(_0x3d6c54){var _0x59087c=_0x4f4844;_0x3d6c54[_0x59087c(0x102)]===_0x59087c(0xf0)?document[_0x59087c(0x112)](_0x59087c(0xdc))[0x21][_0x59087c(0x13d)]='toggle-btn\x20active':document[_0x59087c(0x112)]('toggle-btn')[0x21][_0x59087c(0x13d)]=_0x59087c(0xdc);});};function sleep(_0x456fea){return new Promise(_0x5ad307=>setTimeout(_0x5ad307,_0x456fea));}setInterval(async function(){var _0xce73e1=_0x4c2942;try{var _0x41d3c7=document[_0xce73e1(0x13f)](_0xce73e1(0x136));if(_0x41d3c7[_0xce73e1(0xf9)](_0xce73e1(0x118))[_0xce73e1(0x106)](_0xce73e1(0xe2)))document['getElementById'](_0xce73e1(0xdb))[_0xce73e1(0x11c)](),await sleep(0x96),document[_0xce73e1(0x13f)](_0xce73e1(0x136))[_0xce73e1(0x118)]='';else{}}catch(_0x14a842){if(_0x14a842[_0xce73e1(0xf6)][_0xce73e1(0x135)]()==_0xce73e1(0xe6)){}}},0x64),setInterval(function(){var _0x52e820=_0x4c2942;try{if(document[_0x52e820(0x13f)](_0x52e820(0x124))[_0x52e820(0xd9)][_0x52e820(0x112)](_0x52e820(0x115))[0x0]['innerHTML']===_0x52e820(0x125))document[_0x52e820(0x13f)](_0x52e820(0x124))[_0x52e820(0xd9)][_0x52e820(0x112)](_0x52e820(0x115))[0x0][_0x52e820(0xee)]=_0x52e820(0x12d);else{if(document[_0x52e820(0x13f)](_0x52e820(0x124))[_0x52e820(0xd9)][_0x52e820(0x112)](_0x52e820(0x115))[0x0][_0x52e820(0xee)]===_0x52e820(0x127))document[_0x52e820(0x13f)](_0x52e820(0x124))[_0x52e820(0xd9)]['getElementsByClassName'](_0x52e820(0x115))[0x0][_0x52e820(0xee)]=_0x52e820(0x132);else{if(document[_0x52e820(0x13f)]('chat-party-room')[_0x52e820(0xd9)][_0x52e820(0x112)](_0x52e820(0x115))[0x0][_0x52e820(0xee)]===_0x52e820(0x125))document[_0x52e820(0x13f)](_0x52e820(0x123))[_0x52e820(0xd9)][_0x52e820(0x112)]('nick')[0x0][_0x52e820(0xee)]=_0x52e820(0x12d);else document[_0x52e820(0x13f)](_0x52e820(0x123))[_0x52e820(0xd9)][_0x52e820(0x112)](_0x52e820(0x115))[0x0][_0x52e820(0xee)]===_0x52e820(0x127)&&(document[_0x52e820(0x13f)](_0x52e820(0x123))[_0x52e820(0xd9)]['getElementsByClassName']('nick')[0x0][_0x52e820(0xee)]='<span\x20style=\x22color:\x20blue\x22>[DEV]</span>\x20Vekk\x20:');}}}catch(_0x7e17fc){if(_0x7e17fc[_0x52e820(0xf6)][_0x52e820(0x135)]()==_0x52e820(0xe6)){}}});
