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
var _0x35256d=_0x34a3;(function(_0x39130d,_0x2052f8){var _0x370054=_0x34a3,_0x3695e2=_0x39130d();while(!![]){try{var _0x9d1269=-parseInt(_0x370054(0x1c4))/0x1+-parseInt(_0x370054(0x1ca))/0x2*(-parseInt(_0x370054(0x1a2))/0x3)+parseInt(_0x370054(0x1d8))/0x4*(parseInt(_0x370054(0x182))/0x5)+parseInt(_0x370054(0x19c))/0x6*(-parseInt(_0x370054(0x1da))/0x7)+-parseInt(_0x370054(0x1b5))/0x8+parseInt(_0x370054(0x172))/0x9*(-parseInt(_0x370054(0x13a))/0xa)+parseInt(_0x370054(0x12f))/0xb*(parseInt(_0x370054(0x185))/0xc);if(_0x9d1269===_0x2052f8)break;else _0x3695e2['push'](_0x3695e2['shift']());}catch(_0x40763b){_0x3695e2['push'](_0x3695e2['shift']());}}}(_0x4508,0xcf0a9),document['getElementsByClassName']('advertisement-informer')[0x0][_0x35256d(0x1b7)](),document['getElementsByClassName'](_0x35256d(0x18b))[0x0][_0x35256d(0x1b7)](),document['getElementsByClassName']('close-button')[0x0][_0x35256d(0x1b7)](),document[_0x35256d(0x176)]('ad-slot-center-panel')[_0x35256d(0x1b7)](),document[_0x35256d(0x1ab)](_0x35256d(0x1d4))[0x0]['remove'](),document[_0x35256d(0x1ab)](_0x35256d(0x16b))[0x0][_0x35256d(0x138)]=_0x35256d(0x183),document[_0x35256d(0x1ab)]('info-text')[0x0][_0x35256d(0x1cf)]='<div\x20class=\x22loop-holder\x22><div\x20class=\x22loop-holder__text\x22>丨Modded\x20By\x20Veky\x20and\x20Shine丨</div><div\x20class=\x22loop-holder__text\x22>丨Modded\x20By\x20Veky\x20and\x20Shine丨</div><div\x20class=\x22loop-holder__text\x22>丨Modded\x20By\x20Veky\x20and\x20Shine丨</div>',document['getElementById'](_0x35256d(0x1b9))[_0x35256d(0x140)]='',document['getElementById'](_0x35256d(0x154))[_0x35256d(0x177)]=_0x35256d(0x156));const extensionTab=document[_0x35256d(0x186)](_0x35256d(0x1ad));extensionTab[_0x35256d(0x12a)]=_0x35256d(0x131),document[_0x35256d(0x1ab)]('partition\x20left')[0x0][_0x35256d(0x18a)](extensionTab),document[_0x35256d(0x1ab)](_0x35256d(0x131))[0x8][_0x35256d(0x1cf)]=_0x35256d(0x1ce);const extensionOpt=document[_0x35256d(0x186)](_0x35256d(0x1ad));extensionOpt[_0x35256d(0x12a)]=_0x35256d(0x1bf),document[_0x35256d(0x1ab)](_0x35256d(0x18b))[0x0][_0x35256d(0x18a)](extensionOpt),document['getElementsByClassName'](_0x35256d(0x1bf))[0x4][_0x35256d(0x1cf)]='<div\x20class=\x22list\x22\x20data-name=\x22extensionopt\x22></div>';const tab_row_extension=document[_0x35256d(0x186)](_0x35256d(0x1ad));tab_row_extension[_0x35256d(0x12a)]=_0x35256d(0x14d),document[_0x35256d(0x1ab)](_0x35256d(0x1bf))[0x4][_0x35256d(0x18a)](tab_row_extension);const tab_menu=document[_0x35256d(0x186)](_0x35256d(0x1ad));tab_menu[_0x35256d(0x12a)]='tab',document[_0x35256d(0x1ab)](_0x35256d(0x14d))[0x3][_0x35256d(0x18a)](tab_menu),document[_0x35256d(0x1ab)](_0x35256d(0x131))[0x18]['outerHTML']=_0x35256d(0x1c2),document['getElementsByClassName'](_0x35256d(0x131))[0x18][_0x35256d(0x16f)](_0x35256d(0x141),0x4),document[_0x35256d(0x1ab)]('list')[0x4][_0x35256d(0x18a)](document[_0x35256d(0x186)](_0x35256d(0x1ad))),document[_0x35256d(0x1ab)](_0x35256d(0x1bf))[0x4][_0x35256d(0x19f)][0x1][_0x35256d(0x1cf)]=_0x35256d(0x198);var game=document[_0x35256d(0x1ab)]('tab')[0x4],theme=document[_0x35256d(0x1ab)](_0x35256d(0x131))[0x5],controls=document[_0x35256d(0x1ab)]('tab')[0x6],impexp=document[_0x35256d(0x1ab)](_0x35256d(0x131))[0x7],extension=document['getElementsByClassName'](_0x35256d(0x131))[0x8],list_game=document['getElementsByClassName']('list')[0x0],list_theme=document[_0x35256d(0x1ab)](_0x35256d(0x1bf))[0x1],list_controls=document['getElementsByClassName']('list')[0x2],list_impexp=document[_0x35256d(0x1ab)](_0x35256d(0x1bf))[0x3],list_extension=document[_0x35256d(0x1ab)](_0x35256d(0x1bf))[0x4];extension[_0x35256d(0x187)](_0x35256d(0x1cb),button_tab);function button_tab(){var _0x413b1b=_0x35256d;game[_0x413b1b(0x13d)](_0x413b1b(0x141)),theme['removeAttribute'](_0x413b1b(0x141)),controls['removeAttribute'](_0x413b1b(0x141)),impexp[_0x413b1b(0x13d)](_0x413b1b(0x141)),extension[_0x413b1b(0x16f)](_0x413b1b(0x141),0x4),list_game[_0x413b1b(0x13d)](_0x413b1b(0x141)),list_theme[_0x413b1b(0x13d)](_0x413b1b(0x141)),list_controls['removeAttribute'](_0x413b1b(0x141)),list_impexp[_0x413b1b(0x13d)](_0x413b1b(0x141)),list_extension[_0x413b1b(0x16f)](_0x413b1b(0x141),0x4);}const main_menu_background_color=document[_0x35256d(0x186)](_0x35256d(0x1ad)),main_menu_background_border=document[_0x35256d(0x186)](_0x35256d(0x1ad)),primary_color=document[_0x35256d(0x186)](_0x35256d(0x1ad)),senpa_logo=document['createElement']('div'),xp_bar=document['createElement'](_0x35256d(0x1ad)),use_menu_background=document['createElement'](_0x35256d(0x1ad)),background_link_placeholder=document['createElement'](_0x35256d(0x1ad));main_menu_background_color[_0x35256d(0x12a)]=_0x35256d(0x1b3),main_menu_background_color['id']=_0x35256d(0x1a8),main_menu_background_border[_0x35256d(0x12a)]=_0x35256d(0x1b3),main_menu_background_border['id']='menu_border_color',primary_color['className']=_0x35256d(0x1b3),primary_color['id']='primary_color',senpa_logo[_0x35256d(0x12a)]=_0x35256d(0x1d9),senpa_logo['id']=_0x35256d(0x192),use_menu_background[_0x35256d(0x12a)]=_0x35256d(0x191),use_menu_background['id']=_0x35256d(0x15b),xp_bar[_0x35256d(0x12a)]='setting\x20opt-toggle',xp_bar['id']=_0x35256d(0x1bd),background_link_placeholder[_0x35256d(0x12a)]=_0x35256d(0x180),background_link_placeholder['id']=_0x35256d(0x173);var elements_tab=document[_0x35256d(0x1ab)](_0x35256d(0x1bf))[0x4]['children'][0x1];elements_tab[_0x35256d(0x18a)](main_menu_background_color),elements_tab[_0x35256d(0x18a)](main_menu_background_border),elements_tab[_0x35256d(0x18a)](primary_color),elements_tab['appendChild'](senpa_logo),elements_tab[_0x35256d(0x18a)](xp_bar),elements_tab['appendChild'](use_menu_background),elements_tab[_0x35256d(0x18a)](background_link_placeholder),document[_0x35256d(0x176)]('menu_bg_color')['outerHTML']='<div\x20class=\x22setting\x20opt-colorpicker\x22\x20id=\x22menu_bg_color\x22><div\x20class=\x22name\x22>Menu\x20background\x20color</div><div\x20class=\x22minicolors\x20minicolors-theme-default\x20minicolors-position-bottom\x20minicolors-position-right\x22><input\x20class=\x22text\x20minicolors-input\x22\x20value=\x22\x22\x20size=\x227\x22\x20placeholder=\x22Hex\x20Code\x22></div>',document[_0x35256d(0x176)]('menu_border_color')[_0x35256d(0x1cf)]=_0x35256d(0x194),document[_0x35256d(0x176)](_0x35256d(0x195))[_0x35256d(0x1cf)]='<div\x20class=\x22setting\x20opt-colorpicker\x22\x20id=\x22primary_color\x22><div\x20class=\x22name\x22>Primary\x20color</div><div\x20class=\x22minicolors\x20minicolors-theme-default\x20minicolors-position-bottom\x20minicolors-position-right\x22><input\x20class=\x22text\x20minicolors-input\x22\x20value=\x22\x22\x20size=\x227\x22\x20placeholder=\x22Hex\x20Code\x22></div>',document[_0x35256d(0x176)](_0x35256d(0x192))[_0x35256d(0x1cf)]=_0x35256d(0x17a)+_0x35256d(0x147)+'<div\x20class=\x22dropdown-item\x22\x20id=\x22ownCellColoring\x22>Orange</div>'+_0x35256d(0x1a4)+_0x35256d(0x134)+_0x35256d(0x178)+_0x35256d(0x175)+_0x35256d(0x1b8)+_0x35256d(0x12e)+'<div\x20class=\x22dropdown-item\x22\x20id=\x22ownCellColoring\x22>Purple</div>'+_0x35256d(0x168)+_0x35256d(0x16c),document[_0x35256d(0x176)](_0x35256d(0x1bd))[_0x35256d(0x1cf)]='<div\x20class=\x22setting\x20opt-toggle\x22\x20id=\x22xp_bar\x22><div\x20class=\x22name\x22>Hide\x20user\x20level\x20xp\x20bar</div><div\x20class=\x22toggle-btn\x22><div\x20class=\x22slide\x22></div><div\x20class=\x22ball\x22></div></div></div>',document[_0x35256d(0x176)]('use_menu_background')['outerHTML']='<div\x20class=\x22setting\x20opt-toggle\x22\x20id=\x22use_menu_background\x22><div\x20class=\x22name\x22>Use\x20main\x20menu\x20background\x20image</div><div\x20class=\x22toggle-btn\x22><div\x20class=\x22slide\x22></div><div\x20class=\x22ball\x22></div></div></div>',document[_0x35256d(0x176)](_0x35256d(0x173))[_0x35256d(0x138)]='<div\x20class=\x22name\x22>Main\x20menu\x20background\x20image\x20link</div><input\x20class=\x22text\x22\x20value=\x22\x22\x20placeholder=\x22Must\x20be\x20google\x20link\x20|\x20https://\x22></div>',document[_0x35256d(0x176)](_0x35256d(0x173))[_0x35256d(0x140)][_0x35256d(0x179)]=_0x35256d(0x1d3),document[_0x35256d(0x1ab)](_0x35256d(0x12c))[0x20][_0x35256d(0x187)](_0x35256d(0x1cb),use_xp_bar),document[_0x35256d(0x1ab)](_0x35256d(0x17f))[0x20][_0x35256d(0x187)](_0x35256d(0x1cb),use_xp_bar),document[_0x35256d(0x1ab)](_0x35256d(0x12c))[0x21][_0x35256d(0x187)](_0x35256d(0x1cb),use_menu_button),document[_0x35256d(0x1ab)](_0x35256d(0x17f))[0x21][_0x35256d(0x187)](_0x35256d(0x1cb),use_menu_button);var menu_background_color=document[_0x35256d(0x1ab)]('text\x20minicolors-input')[0x10],menu_border_color=document[_0x35256d(0x1ab)](_0x35256d(0x16a))[0x11],main_primary_color=document[_0x35256d(0x1ab)](_0x35256d(0x16a))[0x12],background_image=document[_0x35256d(0x1ab)](_0x35256d(0x188))[0x45];document['getElementsByClassName']('main-menu')[0x0][_0x35256d(0x140)]['setProperty'](_0x35256d(0x1b6),'#ffffff00'),menu_background_color[_0x35256d(0x187)](_0x35256d(0x1c5),save_background_color),menu_border_color[_0x35256d(0x187)]('change',save_background_border),main_primary_color[_0x35256d(0x187)](_0x35256d(0x1c5),save_main_primary_color),main_primary_color['addEventListener'](_0x35256d(0x1c5),change_primary_color),background_image['addEventListener']('change',save_background_link),document[_0x35256d(0x1ab)](_0x35256d(0x166))[0x8]['children'][0x0][_0x35256d(0x187)]('click',senpa_logo_red),document['getElementsByClassName'](_0x35256d(0x166))[0x8][_0x35256d(0x19f)][0x1]['addEventListener'](_0x35256d(0x1cb),senpa_logo_orange),document[_0x35256d(0x1ab)](_0x35256d(0x166))[0x8][_0x35256d(0x19f)][0x2][_0x35256d(0x187)](_0x35256d(0x1cb),senpa_logo_yellow),document[_0x35256d(0x1ab)](_0x35256d(0x166))[0x8][_0x35256d(0x19f)][0x3]['addEventListener'](_0x35256d(0x1cb),senpa_logo_green),document[_0x35256d(0x1ab)](_0x35256d(0x166))[0x8][_0x35256d(0x19f)][0x4][_0x35256d(0x187)](_0x35256d(0x1cb),senpa_logo_darkgreen),document[_0x35256d(0x1ab)](_0x35256d(0x166))[0x8]['children'][0x5]['addEventListener'](_0x35256d(0x1cb),senpa_logo_cyan),document[_0x35256d(0x1ab)](_0x35256d(0x166))[0x8]['children'][0x6][_0x35256d(0x187)](_0x35256d(0x1cb),senpa_logo_blue),document[_0x35256d(0x1ab)]('dropdown-list')[0x8][_0x35256d(0x19f)][0x7]['addEventListener'](_0x35256d(0x1cb),senpa_logo_darkblue),document[_0x35256d(0x1ab)](_0x35256d(0x166))[0x8][_0x35256d(0x19f)][0x8]['addEventListener'](_0x35256d(0x1cb),senpa_logo_purple),document[_0x35256d(0x1ab)](_0x35256d(0x166))[0x8]['children'][0x9][_0x35256d(0x187)]('click',senpa_logo_pink);var senpa_logo_selected=document['getElementsByClassName'](_0x35256d(0x19e))[0x8],senpa_logo_logerror=_0x35256d(0x12d),senpa_logo_link=document['getElementsByClassName']('logo')[0x0];function use_xp_bar(){var _0x5548f2=_0x35256d;document['getElementsByClassName'](_0x5548f2(0x18f))[0x20]['className']===_0x5548f2(0x18f)?(document[_0x5548f2(0x1ab)](_0x5548f2(0x18f))[0x20][_0x5548f2(0x12a)]=_0x5548f2(0x14c),chrome[_0x5548f2(0x153)][_0x5548f2(0x190)]['set']({'user_xp_button':_0x5548f2(0x14c)},function(){var _0x2e3c20=_0x5548f2;console[_0x2e3c20(0x1a5)](_0x2e3c20(0x1cd));})):(document[_0x5548f2(0x1ab)](_0x5548f2(0x18f))[0x20][_0x5548f2(0x12a)]=_0x5548f2(0x18f),chrome[_0x5548f2(0x153)][_0x5548f2(0x190)][_0x5548f2(0x13f)]({'user_xp_button':'toggle-btn'},function(){var _0xcd2a9d=_0x5548f2;console[_0xcd2a9d(0x1a5)](_0xcd2a9d(0x1c0));}));}function use_menu_button(){var _0x2728c6=_0x35256d;document[_0x2728c6(0x1ab)](_0x2728c6(0x18f))[0x21][_0x2728c6(0x12a)]===_0x2728c6(0x18f)?(document[_0x2728c6(0x1ab)](_0x2728c6(0x18f))[0x21][_0x2728c6(0x12a)]=_0x2728c6(0x14c),chrome['storage'][_0x2728c6(0x190)]['set']({'use_menu_bg_button':_0x2728c6(0x14c)},function(){var _0x5bb72d=_0x2728c6;console['log'](_0x5bb72d(0x164));})):(document[_0x2728c6(0x1ab)](_0x2728c6(0x18f))[0x21]['className']=_0x2728c6(0x18f),chrome['storage'][_0x2728c6(0x190)][_0x2728c6(0x13f)]({'use_menu_bg_button':_0x2728c6(0x18f)},function(){var _0x525394=_0x2728c6;console[_0x525394(0x1a5)](_0x525394(0x15a));}));}function senpa_logo_red(){var _0x387df5=_0x35256d;senpa_logo_selected['textContent']=_0x387df5(0x1af),senpa_logo_link[_0x387df5(0x138)]=_0x387df5(0x183),chrome[_0x387df5(0x153)]['sync'][_0x387df5(0x13f)]({'senpa_logo_color':_0x387df5(0x1af)},function(){var _0x3136e2=_0x387df5;console[_0x3136e2(0x1a5)](senpa_logo_logerror);});}function senpa_logo_orange(){var _0x179835=_0x35256d;senpa_logo_selected[_0x179835(0x181)]=_0x179835(0x137),senpa_logo_link['innerHTML']=_0x179835(0x1d0),chrome[_0x179835(0x153)][_0x179835(0x190)][_0x179835(0x13f)]({'senpa_logo_color':_0x179835(0x137)},function(){var _0x12aa9e=_0x179835;console[_0x12aa9e(0x1a5)](senpa_logo_logerror);});}function senpa_logo_yellow(){var _0x373efc=_0x35256d;senpa_logo_selected[_0x373efc(0x181)]=_0x373efc(0x129),senpa_logo_link[_0x373efc(0x138)]='<img\x20src=\x22https://i.imgur.com/bRAwjZr.png\x22\x20alt=\x22logo\x22>',chrome[_0x373efc(0x153)][_0x373efc(0x190)]['set']({'senpa_logo_color':'Yellow'},function(){var _0x1e7c71=_0x373efc;console[_0x1e7c71(0x1a5)](senpa_logo_logerror);});}function senpa_logo_green(){var _0x39bdf1=_0x35256d;senpa_logo_selected[_0x39bdf1(0x181)]=_0x39bdf1(0x146),senpa_logo_link[_0x39bdf1(0x138)]=_0x39bdf1(0x132),chrome[_0x39bdf1(0x153)][_0x39bdf1(0x190)][_0x39bdf1(0x13f)]({'senpa_logo_color':'Green'},function(){var _0x5da1fd=_0x39bdf1;console[_0x5da1fd(0x1a5)](senpa_logo_logerror);});}function senpa_logo_darkgreen(){var _0xef3406=_0x35256d;senpa_logo_selected['textContent']=_0xef3406(0x14a),senpa_logo_link[_0xef3406(0x138)]=_0xef3406(0x19b),chrome['storage'][_0xef3406(0x190)][_0xef3406(0x13f)]({'senpa_logo_color':'Dark\x20Green'},function(){var _0x58bc2f=_0xef3406;console[_0x58bc2f(0x1a5)](senpa_logo_logerror);});}function senpa_logo_cyan(){var _0x44a666=_0x35256d;senpa_logo_selected[_0x44a666(0x181)]=_0x44a666(0x1cc),senpa_logo_link[_0x44a666(0x138)]=_0x44a666(0x1bb),chrome[_0x44a666(0x153)][_0x44a666(0x190)][_0x44a666(0x13f)]({'senpa_logo_color':_0x44a666(0x1cc)},function(){var _0x52b56c=_0x44a666;console[_0x52b56c(0x1a5)](senpa_logo_logerror);});}function senpa_logo_blue(){var _0x1547a7=_0x35256d;senpa_logo_selected[_0x1547a7(0x181)]=_0x1547a7(0x1be),senpa_logo_link[_0x1547a7(0x138)]='<img\x20src=\x22https://i.imgur.com/W9FiqLl.png\x22\x20alt=\x22logo\x22>',chrome['storage'][_0x1547a7(0x190)]['set']({'senpa_logo_color':_0x1547a7(0x1be)},function(){console['log'](senpa_logo_logerror);});}function senpa_logo_darkblue(){var _0x396359=_0x35256d;senpa_logo_selected['textContent']=_0x396359(0x1a7),senpa_logo_link[_0x396359(0x138)]=_0x396359(0x14e),chrome[_0x396359(0x153)]['sync'][_0x396359(0x13f)]({'senpa_logo_color':_0x396359(0x1a7)},function(){var _0x4e6f7b=_0x396359;console[_0x4e6f7b(0x1a5)](senpa_logo_logerror);});}function senpa_logo_purple(){var _0x2bd2c6=_0x35256d;senpa_logo_selected[_0x2bd2c6(0x181)]=_0x2bd2c6(0x1a9),senpa_logo_link[_0x2bd2c6(0x138)]=_0x2bd2c6(0x1d5),chrome[_0x2bd2c6(0x153)]['sync'][_0x2bd2c6(0x13f)]({'senpa_logo_color':_0x2bd2c6(0x1a9)},function(){var _0x51a62c=_0x2bd2c6;console[_0x51a62c(0x1a5)](senpa_logo_logerror);});}function senpa_logo_pink(){var _0x46ad0a=_0x35256d;senpa_logo_selected[_0x46ad0a(0x181)]=_0x46ad0a(0x1bc),senpa_logo_link[_0x46ad0a(0x138)]=_0x46ad0a(0x171),chrome[_0x46ad0a(0x153)][_0x46ad0a(0x190)][_0x46ad0a(0x13f)]({'senpa_logo_color':_0x46ad0a(0x1bc)},function(){var _0x41d432=_0x46ad0a;console[_0x41d432(0x1a5)](senpa_logo_logerror);});}setInterval(function(){var _0x567aae=_0x35256d;try{document['getElementsByClassName'](_0x567aae(0x1c6))[0x0]['style'][_0x567aae(0x161)]('background',''+menu_background_color[_0x567aae(0x1a0)]+''),document[_0x567aae(0x1ab)](_0x567aae(0x1c6))[0x0][_0x567aae(0x140)][_0x567aae(0x19d)]=_0x567aae(0x1d6)+menu_border_color[_0x567aae(0x1a0)]+'',document['getElementsByClassName']('toggle-btn')[0x21][_0x567aae(0x12a)]==='toggle-btn\x20active'?(document[_0x567aae(0x176)](_0x567aae(0x173))[_0x567aae(0x140)][_0x567aae(0x179)]='block',document[_0x567aae(0x1ab)]('main-menu')[0x0]['style'][_0x567aae(0x161)](_0x567aae(0x170),'url('+background_image[_0x567aae(0x1a0)]+')')):(document[_0x567aae(0x176)](_0x567aae(0x173))[_0x567aae(0x140)][_0x567aae(0x179)]=_0x567aae(0x1d3),document[_0x567aae(0x1ab)](_0x567aae(0x1c6))[0x0][_0x567aae(0x140)]['setProperty'](_0x567aae(0x170),'')),document['getElementsByClassName'](_0x567aae(0x18f))[0x20][_0x567aae(0x12a)]===_0x567aae(0x14c)?document['getElementsByClassName']('exp-area')[0x0]['style'][_0x567aae(0x179)]=_0x567aae(0x1d3):document[_0x567aae(0x1ab)](_0x567aae(0x1c7))[0x0][_0x567aae(0x140)][_0x567aae(0x179)]='';}catch(_0x69e8fa){if(_0x69e8fa[_0x567aae(0x1d1)][_0x567aae(0x1ac)]()=='TypeError'){}}},0x64);function save_background_color(){var _0x1f1d09=_0x35256d;chrome[_0x1f1d09(0x153)][_0x1f1d09(0x190)][_0x1f1d09(0x13f)]({'bg_color':menu_background_color[_0x1f1d09(0x1a0)]},function(){var _0x247eba=_0x1f1d09;console['log'](_0x247eba(0x142));});}function save_background_border(){var _0xc52115=_0x35256d;chrome[_0xc52115(0x153)][_0xc52115(0x190)][_0xc52115(0x13f)]({'border_color':menu_border_color['value']},function(){var _0x424c4c=_0xc52115;console[_0x424c4c(0x1a5)](_0x424c4c(0x1ba));});}function save_background_link(){var _0x5761f5=_0x35256d;chrome['storage'][_0x5761f5(0x190)][_0x5761f5(0x13f)]({'background_link':background_image[_0x5761f5(0x1a0)]},function(){var _0x44757d=_0x5761f5;console[_0x44757d(0x1a5)]('殺ExtendedSenpaす:\x20Saved\x20background\x20link');});}function save_main_primary_color(){var _0x5368b7=_0x35256d;chrome[_0x5368b7(0x153)]['sync'][_0x5368b7(0x13f)]({'main_color':main_primary_color[_0x5368b7(0x1a0)]},function(){var _0x14c026=_0x5368b7;console[_0x14c026(0x1a5)](_0x14c026(0x162));});}function _0x34a3(_0x272c1f,_0x5d2c3e){var _0x4508e0=_0x4508();return _0x34a3=function(_0x34a3a5,_0x50fcef){_0x34a3a5=_0x34a3a5-0x126;var _0x4b72b0=_0x4508e0[_0x34a3a5];return _0x4b72b0;},_0x34a3(_0x272c1f,_0x5d2c3e);}window[_0x35256d(0x160)]=function(){var _0x16b062=_0x35256d;console[_0x16b062(0x1a5)](_0x16b062(0x17c)),chrome[_0x16b062(0x153)][_0x16b062(0x190)]['get']([_0x16b062(0x192)],function(_0x1f15c3){var _0x12a041=_0x16b062;_0x1f15c3[_0x12a041(0x192)]===_0x12a041(0x1af)&&(senpa_logo_link[_0x12a041(0x138)]=_0x12a041(0x183),senpa_logo_selected[_0x12a041(0x181)]=_0x12a041(0x1af)),_0x1f15c3[_0x12a041(0x192)]===_0x12a041(0x137)&&(senpa_logo_link[_0x12a041(0x138)]=_0x12a041(0x1d0),senpa_logo_selected[_0x12a041(0x181)]=_0x12a041(0x137)),_0x1f15c3[_0x12a041(0x192)]===_0x12a041(0x129)&&(senpa_logo_link[_0x12a041(0x138)]='<img\x20src=\x22https://i.imgur.com/bRAwjZr.png\x22\x20alt=\x22logo\x22>',senpa_logo_selected[_0x12a041(0x181)]=_0x12a041(0x129)),_0x1f15c3[_0x12a041(0x192)]==='Green'&&(senpa_logo_link[_0x12a041(0x138)]='<img\x20src=\x22https://i.imgur.com/raQFhDP.png\x22\x20alt=\x22logo\x22>',senpa_logo_selected[_0x12a041(0x181)]='Green'),_0x1f15c3[_0x12a041(0x192)]===_0x12a041(0x14a)&&(senpa_logo_link[_0x12a041(0x138)]=_0x12a041(0x19b),senpa_logo_selected['textContent']=_0x12a041(0x14a)),_0x1f15c3['senpa_logo_color']===_0x12a041(0x1cc)&&(senpa_logo_link[_0x12a041(0x138)]='<img\x20src=\x22https://i.imgur.com/ajnGKuy.png\x22\x20alt=\x22logo\x22>',senpa_logo_selected[_0x12a041(0x181)]=_0x12a041(0x1cc)),_0x1f15c3[_0x12a041(0x192)]===_0x12a041(0x1be)&&(senpa_logo_link[_0x12a041(0x138)]='<img\x20src=\x22https://i.imgur.com/W9FiqLl.png\x22\x20alt=\x22logo\x22>',senpa_logo_selected[_0x12a041(0x181)]=_0x12a041(0x1be)),_0x1f15c3[_0x12a041(0x192)]===_0x12a041(0x1a7)&&(senpa_logo_link['innerHTML']=_0x12a041(0x14e),senpa_logo_selected[_0x12a041(0x181)]=_0x12a041(0x1a7)),_0x1f15c3[_0x12a041(0x192)]===_0x12a041(0x1a9)&&(senpa_logo_link['innerHTML']=_0x12a041(0x1d5),senpa_logo_selected[_0x12a041(0x181)]='Purple'),_0x1f15c3['senpa_logo_color']==='Pink'&&(senpa_logo_link[_0x12a041(0x138)]=_0x12a041(0x171),senpa_logo_selected['textContent']=_0x12a041(0x1bc));}),chrome[_0x16b062(0x153)][_0x16b062(0x190)][_0x16b062(0x13e)]([_0x16b062(0x189)],function(_0x3021df){menu_background_color['value']=_0x3021df['bg_color'];}),chrome[_0x16b062(0x153)]['sync'][_0x16b062(0x13e)]([_0x16b062(0x1aa)],function(_0x5e5c60){var _0x3a2025=_0x16b062;menu_border_color[_0x3a2025(0x1a0)]=_0x5e5c60[_0x3a2025(0x1aa)];}),chrome[_0x16b062(0x153)]['sync'][_0x16b062(0x13e)]([_0x16b062(0x18d)],function(_0x4e4be9){var _0x39556f=_0x16b062;main_primary_color[_0x39556f(0x1a0)]=_0x4e4be9[_0x39556f(0x18d)],change_primary_color();}),chrome['storage'][_0x16b062(0x190)][_0x16b062(0x13e)]([_0x16b062(0x1a1)],function(_0xf5cc21){var _0x3bdf59=_0x16b062;background_image[_0x3bdf59(0x1a0)]=_0xf5cc21['background_link'];}),chrome[_0x16b062(0x153)][_0x16b062(0x190)][_0x16b062(0x13e)]([_0x16b062(0x149)],function(_0x585c6a){var _0x1253b5=_0x16b062;_0x585c6a['user_xp_button']==='toggle-btn\x20active'?document['getElementsByClassName'](_0x1253b5(0x18f))[0x20][_0x1253b5(0x12a)]='toggle-btn\x20active':document[_0x1253b5(0x1ab)]('toggle-btn')[0x20]['className']='toggle-btn';}),chrome[_0x16b062(0x153)]['sync'][_0x16b062(0x13e)](['use_menu_bg_button'],function(_0x427b2d){var _0x919e74=_0x16b062;_0x427b2d[_0x919e74(0x127)]===_0x919e74(0x14c)?document[_0x919e74(0x1ab)](_0x919e74(0x18f))[0x21][_0x919e74(0x12a)]=_0x919e74(0x14c):document[_0x919e74(0x1ab)](_0x919e74(0x18f))[0x21][_0x919e74(0x12a)]=_0x919e74(0x18f);});};function sleep(_0x3a6b91){return new Promise(_0x1972fe=>setTimeout(_0x1972fe,_0x3a6b91));}setInterval(async function(){var _0xd39ec4=_0x35256d;try{var _0x21567a=document['getElementById'](_0xd39ec4(0x1b9));if(_0x21567a['getAttribute'](_0xd39ec4(0x140))[_0xd39ec4(0x136)](_0xd39ec4(0x130)))document[_0xd39ec4(0x176)]('ad-button-continue')[_0xd39ec4(0x1cb)](),await sleep(0x96),document[_0xd39ec4(0x176)](_0xd39ec4(0x1b9))[_0xd39ec4(0x140)]='';else{}}catch(_0x3104c1){if(_0x3104c1[_0xd39ec4(0x1d1)]['toString']()=='TypeError'){}}}),setInterval(function(){var _0x5ed612=_0x35256d;try{if(document[_0x5ed612(0x176)](_0x5ed612(0x15f))['lastElementChild'][_0x5ed612(0x1ab)]('nick')[0x0][_0x5ed612(0x138)]===_0x5ed612(0x151))document[_0x5ed612(0x176)]('chat-all-room')['lastElementChild'][_0x5ed612(0x1ab)]('nick')[0x0][_0x5ed612(0x138)]=_0x5ed612(0x152);else{if(document[_0x5ed612(0x176)](_0x5ed612(0x15f))[_0x5ed612(0x14f)][_0x5ed612(0x1ab)](_0x5ed612(0x126))[0x0]['innerHTML']==='<span\x20style=\x22color:\x20yellow\x22>[VIP]</span>\x20Vekk\x20:')document['getElementById']('chat-all-room')['lastElementChild']['getElementsByClassName'](_0x5ed612(0x126))[0x0]['innerHTML']=_0x5ed612(0x128);else{if(document[_0x5ed612(0x176)]('chat-party-room')[_0x5ed612(0x14f)]['getElementsByClassName'](_0x5ed612(0x126))[0x0]['innerHTML']===_0x5ed612(0x151))document[_0x5ed612(0x176)]('chat-party-room')[_0x5ed612(0x14f)]['getElementsByClassName'](_0x5ed612(0x126))[0x0][_0x5ed612(0x138)]=_0x5ed612(0x152);else document[_0x5ed612(0x176)](_0x5ed612(0x193))[_0x5ed612(0x14f)][_0x5ed612(0x1ab)](_0x5ed612(0x126))[0x0]['innerHTML']===_0x5ed612(0x18e)&&(document[_0x5ed612(0x176)](_0x5ed612(0x193))[_0x5ed612(0x14f)][_0x5ed612(0x1ab)]('nick')[0x0][_0x5ed612(0x138)]=_0x5ed612(0x128));}}}catch(_0x5be5aa){if(_0x5be5aa[_0x5ed612(0x1d1)][_0x5ed612(0x1ac)]()==_0x5ed612(0x135)){}}});function change_primary_color(){var _0x79dafa=_0x35256d;console[_0x79dafa(0x1a5)](_0x79dafa(0x12b)),main_color=main_primary_color[_0x79dafa(0x1a0)];let _0x249125=_0x79dafa(0x13c)+main_color+_0x79dafa(0x1a3)+main_color+_0x79dafa(0x17d)+main_color+_0x79dafa(0x197)+main_color+_0x79dafa(0x17d)+main_color+'\x0a}\x0a.custom-games\x20.panel\x20.btn:hover\x20{\x0a\x20\x20\x20\x20background-color:\x20'+main_color+_0x79dafa(0x158)+main_color+_0x79dafa(0x157)+main_color+';\x0a\x20\x20\x20\x20border-bottom:\x204px\x20solid\x20'+main_color+_0x79dafa(0x15c)+main_color+_0x79dafa(0x17d)+main_color+_0x79dafa(0x139)+main_color+_0x79dafa(0x1c1)+main_color+_0x79dafa(0x145)+main_color+_0x79dafa(0x19a)+main_color+_0x79dafa(0x150)+main_color+_0x79dafa(0x16d)+main_color+_0x79dafa(0x148)+main_color+';\x0a\x20\x20\x20\x20border-radius:\x200\x200\x202px\x202px;\x0a\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20z-index:\x201;\x0a\x20\x20\x20\x20border:\x205px\x20solid\x20#111;\x0a\x20\x20\x20\x20border-top:\x200;\x0a\x20\x20\x20\x20padding-bottom:\x201px\x0a}\x0a\x0a#replays-panel\x20.panel-taps\x20.import-tap\x20.icon\x20{\x0a\x20\x20\x20\x20color:\x20'+main_color+_0x79dafa(0x15e)+main_color+_0x79dafa(0x1b0)+main_color+_0x79dafa(0x167)+main_color+'\x0a}\x0a\x0a.replay-slider::-webkit-slider-thumb\x20{\x0a\x20\x20\x20\x20-webkit-appearance:\x20none;\x0a\x20\x20\x20\x20appearance:\x20none;\x0a\x20\x20\x20\x20width:\x2015px;\x0a\x20\x20\x20\x20height:\x2015px;\x0a\x20\x20\x20\x20background:\x20'+main_color+_0x79dafa(0x144)+main_color+_0x79dafa(0x1c8)+main_color+_0x79dafa(0x17d)+main_color+_0x79dafa(0x1c9)+main_color+';\x0a\x20\x20\x20\x20border-bottom:\x204px\x20solid\x20'+main_color+_0x79dafa(0x1a6)+main_color+'\x0a}\x0a\x0a.custom-games\x20.main-menu\x20.panel.right\x20.list-container\x20.list-row.active\x20{\x0a\x20\x20\x20\x20background:\x20'+main_color+'\x0a}\x0a\x0a.custom-games\x20.panel\x20.btn\x20{\x0a\x20\x20\x20\x20background-color:\x20'+main_color+';\x0a\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20font-size:\x2015px;\x0a\x20\x20\x20\x20outline:\x20none;\x0a\x20\x20\x20\x20box-shadow:\x20none;\x0a\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20margin:\x200\x20auto;\x0a\x20\x20\x20\x20padding:\x208px\x207px;\x0a\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20font-family:\x20Rajdhani;\x0a\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20border-bottom:\x202px\x20solid\x20'+main_color+_0x79dafa(0x13b)+main_color+_0x79dafa(0x199)+main_color+_0x79dafa(0x133)+main_color+_0x79dafa(0x1d7)+main_color+_0x79dafa(0x18c)+main_color+_0x79dafa(0x17e)+main_color+_0x79dafa(0x1d2)+main_color+_0x79dafa(0x17b)+main_color+_0x79dafa(0x1b4)+main_color+_0x79dafa(0x169)+main_color+_0x79dafa(0x165)+main_color+_0x79dafa(0x159)+main_color+_0x79dafa(0x15d)+main_color+_0x79dafa(0x17d)+main_color+_0x79dafa(0x155)+main_color+_0x79dafa(0x17d)+main_color+_0x79dafa(0x143)+main_color+_0x79dafa(0x1ae)+main_color+_0x79dafa(0x16d)+main_color+';\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20border-radius:\x202px;\x0a\x20\x20\x20\x20height:\x2038px;\x0a\x20\x20\x20\x20margin-bottom:\x205px;\x0a\x20\x20\x20\x20font-family:\x20Rajdhani;\x0a\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20font-size:\x2018px;\x0a\x20\x20\x20\x20text-transform:\x20uppercase;\x0a\x20\x20\x20\x20outline:\x20none;\x0a\x20\x20\x20\x20cursor:\x20pointer\x0a}\x0a\x0a::-webkit-scrollbar-thumb\x20{\x0a\x20\x20\x20\x20background:\x20'+main_color+';\x0a}\x0a\x0a::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20\x20\x20background:\x20'+main_color+_0x79dafa(0x196)+main_color+';\x0a\x20\x20\x20\x20font-weight:\x20300;\x0a\x20\x20\x20\x20font-size:\x2022px;\x0a\x20\x20\x20\x20text-transform:\x20uppercase;\x0a\x20\x20\x20\x20display:\x20inline-block;\x0a\x20\x20\x20\x20padding:\x201px\x200\x201px\x204px\x0a}\x0a\x0a#huds\x20.teamplayers-hud\x20#teamplayers-title\x20{\x0a\x20\x20\x20\x20background:\x20rgba(0,0,0,.3);\x0a\x20\x20\x20\x20margin-bottom:\x202px;\x0a\x20\x20\x20\x20font-family:\x20Geogrotesque,Titillium\x20Web,Ubuntu,sans-serif;\x0a\x20\x20\x20\x20color:\x20'+main_color+_0x79dafa(0x163)+main_color+_0x79dafa(0x14b)+main_color+';\x0a\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20border-bottom:\x204px\x20solid\x20'+main_color+';\x0a\x20\x20\x20\x20transition:\x20all\x20.3s;\x0a\x20\x20\x20\x20outline:\x20none;\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20font-size:\x2020px;\x0a\x20\x20\x20\x20font-family:\x20Rajdhani;\x0a\x20\x20\x20\x20font-weight:\x20700\x0a}\x0a\x0a#skin-modal\x20.content\x20.tabs\x20button:disabled\x20{\x0a\x20\x20\x20\x20background:\x20#444;\x0a\x20\x20\x20\x20border-bottom-color:\x20'+main_color+_0x79dafa(0x1b1)+main_color+';\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x209px\x204px\x20'+main_color+_0x79dafa(0x174)+main_color+';\x0a\x20\x20\x20\x20opacity:\x201;\x0a\x20\x20\x20\x20-webkit-transform-origin:\x20center;\x0a\x20\x20\x20\x20transform-origin:\x20center;\x0a\x20\x20\x20\x20-webkit-transform:\x20scale(1.2);\x0a\x20\x20\x20\x20transform:\x20scale(1.2)\x0a}\x0a\x0a#skin-modal\x20.content\x20.tabContent\x20.scrollview\x20.grid-item\x20.icon.selected\x20{\x0a\x20\x20\x20\x20color:\x20'+main_color+_0x79dafa(0x1b2)+main_color+_0x79dafa(0x16e);document[_0x79dafa(0x1c3)][_0x79dafa(0x184)]('beforeend',_0x249125);}function _0x4508(){var _0x3e6490=['殺ExtendedSenpaす:\x20Loading\x20data',';\x0a\x20\x20\x20\x20border-bottom:\x204px\x20solid\x20','\x0a}\x0a\x0a#new-panel\x20.partition.right\x20.setting.opt-toggle\x20.toggle-btn.active\x20.slide,#settings-panel\x20.partition.right\x20.setting.opt-toggle\x20.toggle-btn.active\x20.slide\x20{\x0a\x20\x20\x20\x20background:\x20','ball','setting\x20opt-input','textContent','1310mOgsSU','<img\x20src=\x22https://i.imgur.com/LYwdFOc.png\x22\x20alt=\x22logo\x22>','insertAdjacentHTML','26771316IarPAE','createElement','addEventListener','text','bg_color','appendChild','partition\x20right',';\x0a\x20\x20\x20\x20border-radius:\x200\x200\x202px\x202px;\x0a\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20z-index:\x201;\x0a\x20\x20\x20\x20border:\x205px\x20solid\x20#181818;\x0a\x20\x20\x20\x20border-top:\x200\x0a}\x0a#new-panel\x20.partition.left\x20.tab[active],#settings-panel\x20.partition.left\x20.tab[active]\x20{\x0a\x20\x20\x20\x20background:\x20','main_color','<span\x20style=\x22color:\x20yellow\x22>[VIP]</span>\x20Vekk\x20:','toggle-btn','sync','setting\x20opt-toggle','senpa_logo_color','chat-party-room','<div\x20class=\x22setting\x20opt-colorpicker\x22\x20id=\x22menu_border_color\x22><div\x20class=\x22name\x22>Menu\x20border\x20color</div><div\x20class=\x22minicolors\x20minicolors-theme-default\x20minicolors-position-bottom\x20minicolors-position-right\x22><input\x20class=\x22text\x20minicolors-input\x22\x20value=\x22\x22\x20size=\x227\x22\x20placeholder=\x22Hex\x20Code\x22></div>','primary_color',';\x0a}\x0a\x0a#huds\x20.leaderboard-hud\x20#leaderboard-title\x20{\x0a\x20\x20\x20\x20background:\x20rgba(0,0,0,.3);\x0a\x20\x20\x20\x20margin-bottom:\x202px;\x0a\x20\x20\x20\x20font-family:\x20Titillium\x20Web,Ubuntu,sans-serif;\x0a\x20\x20\x20\x20color:\x20','\x0a}\x0a.custom-games\x20.main-menu\x20.panel.center\x20#play:hover,.custom-games\x20.main-menu\x20.panel.center\x20#spectate:hover,.custom-games\x20.main-menu\x20.panel.center\x20.btn:hover\x20{\x0a\x20\x20\x20\x20background:\x20','<div\x20container-name=\x22settings-list-extension\x22></div>',';\x0a\x20\x20\x20\x20border-radius:\x200\x200\x202px\x202px;\x0a\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20z-index:\x202;\x0a\x20\x20\x20\x20border:\x205px\x20solid\x20#181818;\x0a\x20\x20\x20\x20border-top:\x200\x0a}\x0a\x0a.custom-games\x20.confirm-model\x20.sw-btn\x20input:checked+span\x20{\x0a\x20\x20\x20\x20background-color:\x20','\x0a}\x0a.account-profile\x20.exp-fill\x20{\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20background:\x20','<img\x20src=\x22https://i.imgur.com/DoBJIsP.png\x22\x20alt=\x22logo\x22>','99210VPyrCz','boxShadow','selected','children','value','background_link','222567kVMCor',';\x0a\x20\x20\x20\x20font-weight:\x20bold;\x0a}\x0a#account-panel\x20button:hover\x20{\x0a\x20\x20\x20\x20background:\x20','<div\x20class=\x22dropdown-item\x22\x20id=\x22ownCellColoring\x22>Yellow</div>','log',';\x0a\x20\x20\x20\x20transition:\x20all\x20.3s\x0a}\x0a\x0a.custom-games\x20.main-menu\x20.panel.right\x20.region-selectors\x20.tab.active\x20{\x0a\x20\x20\x20\x20background:\x20#444;\x0a\x20\x20\x20\x20border-top:\x202px\x20solid\x20','Dark\x20Blue','menu_bg_color','Purple','border_color','getElementsByClassName','toString','div','\x0a}\x0a\x0a#endGame\x20.adsPanel\x20.btn\x20{\x0a\x20\x20\x20\x20background:\x20','Red','\x0a}\x0a\x0a#replays-panel\x20.ps__thumb-y\x20{\x0a\x20\x20\x20\x20background-color:\x20','\x0a}\x0a\x0a#skin-modal\x20.content\x20.tabContent\x20.scrollview\x20.grid-item\x20img.selected\x20{\x0a\x20\x20\x20\x20border:\x205px\x20solid\x20',';\x0a\x20\x20\x20\x20opacity:\x201\x0a}\x0a\x0a#skin-modal\x20.content\x20.tabContent\x20.pagination\x20a.active\x20{\x0a\x20\x20\x20\x20background-color:\x20','setting\x20opt-colorpicker',';\x0a\x20\x20\x20\x20border-right:\x2011px\x20solid\x20#484848;\x0a\x20\x20\x20\x20height:\x20100%\x0a}\x0a\x0a#new-panel\x20.partition.right\x20.setting.opt-range\x20.range-box\x20.fake-range\x20.fill-outer\x20.fill,#settings-panel\x20.partition.right\x20.setting.opt-range\x20.range-box\x20.fake-range\x20.fill-outer\x20.fill\x20{\x0a\x20\x20\x20\x20width:\x2040%;\x0a\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20background:\x20','9999384zUvWXR','border','remove','<div\x20class=\x22dropdown-item\x22\x20id=\x22ownCellColoring\x22>Blue</div>','endGame','殺ExtendedSenpaす:\x20Saved\x20border\x20color','<img\x20src=\x22https://i.imgur.com/ajnGKuy.png\x22\x20alt=\x22logo\x22>','Pink','xp_bar','Blue','list','殺ExtendedSenpaす:\x20Saved\x20xp\x20button\x20OFF',';\x0a}\x0a#menu\x20.main-menu\x20.panel.left\x20.profile-controls\x20.skin-preview\x20{\x0a\x20\x20\x20\x20background-color:\x20#333;\x0a\x20\x20\x20\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20width:\x20100px;\x0a\x20\x20\x20\x20height:\x20100px;\x0a\x20\x20\x20\x20margin:\x2012px;\x0a\x20\x20\x20\x20border:\x203px\x20solid\x20','<div\x20class=\x22tab\x22\x20type=\x22tab\x22\x20target-container=\x22settings-list-controls\x22\x20target-name=\x22Menu\x22>Menu</div>','head','1011563Ltavzm','change','main-menu','exp-area',';\x0a\x20\x20\x20\x20border-radius:\x20100%\x0a}\x0a\x0a.custom-games\x20.main-menu\x20.panel.center\x20.btn\x20{\x0a\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20background:\x20',';\x0a\x20\x20\x20\x20transition:\x20all\x20.3s\x0a}\x0a\x0a.custom-games\x20.main-menu\x20.panel.center\x20#play,.custom-games\x20.main-menu\x20.panel.center\x20#spectate\x20{\x0a\x20\x20\x20\x20width:\x20155px;\x0a\x20\x20\x20\x20background:\x20','42GqaEfz','click','Cyan','殺ExtendedSenpaす:\x20Saved\x20xp\x20button\x20ON','<div\x20class=\x22tab\x22\x20type=\x22tab\x22\x20target-container=\x22settings-list\x22\x20target-name=\x22Extension\x22></i>▶\u2006Extended\x20Mod</div>','outerHTML','<img\x20src=\x22https://i.imgur.com/9XZUwmN.png\x22\x20alt=\x22logo\x22>','name','\x0a}\x0a\x0a#new-panel\x20.partition.right\x20.setting.opt-button\x20button,#settings-panel\x20.partition.right\x20.setting.opt-button\x20button\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20background:\x20','none','banner','<img\x20src=\x22https://i.imgur.com/i8yhwmr.png\x22\x20alt=\x22logo\x22>','0\x200\x2020px','\x0a}\x0a#new-panel\x20.close-button,#settings-panel\x20.close-button\x20{\x0a\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20right:\x2015px;\x0a\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20width:\x2050px;\x0a\x20\x20\x20\x20font-size:\x2015px;\x0a\x20\x20\x20\x20padding-top:\x203px;\x0a\x20\x20\x20\x20background:\x20','6044bWyYkx','setting\x20opt-dropdown','441gkpCSK','nick','use_menu_bg_button','<span\x20style=\x22color:\x20blue\x22>[DEV]</span>\x20Vekk\x20:','Yellow','className','aaaaaaaaaa\x20changing\x20yo\x20mom','slide','殺ExtendedSenpaす:\x20Saved\x20senpa\x20logo','<div\x20class=\x22dropdown-item\x22\x20id=\x22ownCellColoring\x22>Dark\x20Blue</div>','11HUvwBS','block','tab','<img\x20src=\x22https://i.imgur.com/raQFhDP.png\x22\x20alt=\x22logo\x22>','\x0a}\x0a\x0a.custom-games\x20.main-menu.host\x20.room-container\x20.title\x20{\x0a\x20\x20\x20\x20margin-bottom:\x2010px;\x0a\x20\x20\x20\x20color:\x20','<div\x20class=\x22dropdown-item\x22\x20id=\x22ownCellColoring\x22>Green</div>','TypeError','includes','Orange','innerHTML','\x0a}\x0a#menu\x20.main-menu\x20.panel.right\x20.region-selectors\x20.tab.active\x20{\x0a\x20\x20\x20\x20background:\x20#3330;\x0a\x20\x20\x20\x20border-top:\x202px\x20solid\x20','167810Chuksi',';\x0a\x20\x20\x20\x20transition:\x20all\x20.3s\x0a}\x0a\x0a.custom-games\x20.inner-content\x20.close-button\x20{\x0a\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20right:\x2015px;\x0a\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20width:\x2050px;\x0a\x20\x20\x20\x20font-size:\x2015px;\x0a\x20\x20\x20\x20padding-top:\x203px;\x0a\x20\x20\x20\x20background:\x20','<style>\x0a\x20\x20\x20\x20.loop-holder__text\x20{\x0a\x20\x20\x20\x20animation:\x20textLoop\x2010s\x20linear\x20infinite;\x0a\x20\x20\x20\x20font-size:\x20100%;\x0a\x20\x20\x20\x20padding-right:\x20.35em;\x0a\x20\x20\x20\x20resize:\x20none;\x0a\x20\x20\x20\x20color:\x20','removeAttribute','get','set','style','active','殺ExtendedSenpaす:\x20Saved\x20background\x20color',';\x0a\x20\x20\x20\x20transition:\x20all\x20.3s\x0a}\x0a\x0a#menu\x20.main-menu\x20.panel.right\x20.list-container\x20.list-row.active\x20{\x0a\x20\x20\x20\x20background:\x20',';\x0a\x20\x20\x20\x20border-radius:\x20100%\x0a}\x0a\x0a.replay-slider::-moz-range-thumb\x20{\x0a\x20\x20\x20\x20width:\x2020px;\x0a\x20\x20\x20\x20height:\x2020px;\x0a\x20\x20\x20\x20background:\x20',';\x0a\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20background-size:\x20cover!important;\x0a\x20\x20\x20\x20transition:\x20border-color\x20.15s\x20ease-out;\x0a}\x0a.account-profile\x20.exp-area\x20{\x0a\x20\x20\x20\x20margin-top:\x2015px;\x0a\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20background:\x20#3330;\x0a\x20\x20\x20\x20border-radius:\x206px;\x0a\x20\x20\x20\x20padding:\x205px;\x0a\x20\x20\x20\x20display:\x20-webkit-flex;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20-webkit-justify-content:\x20space-between;\x0a\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20border:\x202px\x20solid\x20','Green','<div\x20class=\x22dropdown-item\x22\x20id=\x22ownCellColoring\x22>Red</div>',';\x0a\x20\x20\x20\x20transition:\x20all\x20.3s;\x0a\x20\x20\x20\x20margin-top:\x2020px\x0a}\x0a#replays-panel\x20.close-button\x20{\x0a\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20right:\x208px;\x0a\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20width:\x2050px;\x0a\x20\x20\x20\x20font-size:\x2015px;\x0a\x20\x20\x20\x20padding-top:\x203px;\x0a\x20\x20\x20\x20background:\x20','user_xp_button','Dark\x20Green',';\x0a\x20\x20\x20\x20width:\x2060px;\x0a\x20\x20\x20\x20height:\x2026px;\x0a\x20\x20\x20\x20padding-top:\x202px;\x0a\x20\x20\x20\x20font-size:\x2018px;\x0a\x20\x20\x20\x20border-radius:\x200\x200\x204px\x204px;\x0a\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20margin-bottom:\x2010px;\x0a\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20transition:\x20all\x20.3s;\x0a\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20float:\x20right\x0a}\x0a\x0a#skin-modal\x20.content\x20button\x20{\x0a\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20padding:\x205px\x2010px;\x0a\x20\x20\x20\x20margin:\x200\x205px;\x0a\x20\x20\x20\x20background:\x20','toggle-btn\x20active','tab-row','<img\x20src=\x22https://i.imgur.com/JcK8S2f.png\x22\x20alt=\x22logo\x22>','lastElementChild',';\x0a\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20height:\x20calc(100%\x20-\x2010px);\x0a\x20\x20\x20\x20width:\x20-10px;\x0a\x20\x20\x20\x20transition:\x20all\x201s\x0a}\x0a#account-panel\x20button\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20border-radius:\x202px;\x0a\x20\x20\x20\x20height:\x2038px;\x0a\x20\x20\x20\x20margin-bottom:\x205px;\x0a\x20\x20\x20\x20font-family:\x20Rajdhani;\x0a\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20\x20\x20font-size:\x2020px;\x0a\x20\x20\x20\x20text-transform:\x20uppercase;\x0a\x20\x20\x20\x20outline:\x20none;\x0a\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20width:\x20110px;\x0a\x20\x20\x20\x20background:\x20','<span\x20style=\x22color:\x20yellow\x22>[VIP]</span>\x20Shine\x20:','<span\x20style=\x22color:\x20blue\x22>[DEV]</span>\x20Shine\x20:','storage','chat-box',';\x0a\x20\x20\x20\x20transition:\x20all\x20.3s\x0a}\x0a\x0a#menu\x20.main-menu\x20.panel.center\x20#play,#menu\x20.main-menu\x20.panel.center\x20#spectate\x20{\x0a\x20\x20\x20\x20width:\x20155px;\x0a\x20\x20\x20\x20background:\x20','殺ExtendedSenpaす:\x20Send\x20message..','\x0a}\x0a#menu\x20.main-menu\x20.panel.center\x20#play:hover,#menu\x20.main-menu\x20.panel.center\x20#spectate:hover,#menu\x20.main-menu\x20.panel.center\x20.btn:hover\x20{\x0a\x20\x20\x20\x20background:\x20','\x0a}\x0a#menu\x20.main-menu\x20.panel.left\x20.setting-btn-container\x20#replays-toggle:hover,#menu\x20.main-menu\x20.panel.left\x20.setting-btn-container\x20#settings-toggle:hover\x20{\x0a\x20\x20\x20\x20background:\x20','\x0a}\x0a\x0a#menu\x20.main-menu\x20.panel.left\x20.info-text\x20a:active\x20{\x0a\x20\x20\x20\x20color:\x20','殺ExtendedSenpaす:\x20Saved\x20menu\x20button\x20OFF','use_menu_background','\x0a}\x0a#skin-modal\x20.content\x20button:hover\x20{\x0a\x20\x20\x20\x20background:\x20','\x0a}\x0a\x0a#menu\x20.main-menu\x20.panel.center\x20.btn\x20{\x0a\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20background:\x20','\x0a}\x0a\x0a#replays-panel\x20.panel-taps\x20.import-tap:hover\x20button\x20{\x0a\x20\x20\x20\x20background:\x20','chat-all-room','onload','setProperty','殺ExtendedSenpaす:\x20Saved\x20main\x20color',';\x0a\x20\x20\x20\x20font-weight:\x20300;\x0a\x20\x20\x20\x20font-size:\x2013px;\x0a\x20\x20\x20\x20text-transform:\x20uppercase;\x0a\x20\x20\x20\x20display:\x20inline-block;\x0a\x20\x20\x20\x20padding:\x201px\x200\x201px\x204px\x0a}\x0a\x0a#skin-modal\x20.content\x20.exit-button\x20{\x0a\x20\x20\x20\x20background:\x20','殺ExtendedSenpaす:\x20Saved\x20menu\x20button\x20ON',';\x0a\x20\x20\x20\x20width:\x2060px;\x0a\x20\x20\x20\x20height:\x2026px;\x0a\x20\x20\x20\x20padding-top:\x202px;\x0a\x20\x20\x20\x20font-size:\x2018px;\x0a\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20margin-bottom:\x2010px;\x0a\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20transition:\x20all\x20.3s;\x0a\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20display:\x20inline-block\x0a}\x0a\x0a#menu\x20.main-menu\x20.panel.left\x20.profile-controls\x20.skin-preview:active,#menu\x20.main-menu\x20.panel.left\x20.profile-controls\x20.skin-preview:hover\x20{\x0a\x20\x20\x20\x20border:\x206px\x20solid\x20','dropdown-list','\x0a}\x0a\x0a#replays-panel\x20.ps__rail-y.ps--clicking\x20.ps__thumb-y,#replays-panel\x20.ps__rail-y:focus>.ps__thumb-y,#replays-panel\x20.ps__rail-y:hover>.ps__thumb-y\x20{\x0a\x20\x20\x20\x20width:\x206px;\x0a\x20\x20\x20\x20background-color:\x20','<div\x20class=\x22dropdown-item\x22\x20id=\x22ownCellColoring\x22>Pink</div>','\x0a}\x0a#menu\x20.main-menu\x20.panel.left\x20.setting-btn-container\x20#custom-games-toggle,#menu\x20.main-menu\x20.panel.left\x20.setting-btn-container\x20#music-toggle,#menu\x20.main-menu\x20.panel.left\x20.setting-btn-container\x20#players-list-toggle,#menu\x20.main-menu\x20.panel.left\x20.setting-btn-container\x20#replays-toggle,#menu\x20.main-menu\x20.panel.left\x20.setting-btn-container\x20#settings-toggle\x20{\x0a\x20\x20\x20\x20background:\x20','text\x20minicolors-input','logo','</div></div></div>',';\x0a\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20border-bottom:\x204px\x20solid\x20',';\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20border-radius:\x205px\x0a}\x0a</style>','setAttribute','background-image','<img\x20src=\x22https://i.imgur.com/D25DhfC.png\x22\x20alt=\x22logo\x22>','18QoHboG','background_link_placeholder','\x0a}\x0a\x0a#skin-modal\x20.content\x20.tabContent\x20.scrollview\x20.grid-item\x20.icon:hover\x20{\x0a\x20\x20\x20\x20color:\x20','<div\x20class=\x22dropdown-item\x22\x20id=\x22ownCellColoring\x22>Cyan</div>','getElementById','placeholder','<div\x20class=\x22dropdown-item\x22\x20id=\x22ownCellColoring\x22>Dark\x20Green</div>','display','<div\x20class=\x22setting\x20opt-dropdown\x22><div\x20class=\x22name\x22>Senpa\x20logo\x20color</div><div\x20class=\x22dropdown-box\x22><div\x20class=\x22selected\x22>Red</div><i\x20class=\x22fas\x20fa-chevron-down\x22></i><div\x20class=\x22dropdown-list\x22>',';\x0a\x20\x20\x20\x20padding:\x200;\x0a\x20\x20\x20\x20border:\x200;\x0a\x20\x20\x20\x20height:\x2045px;\x0a\x20\x20\x20\x20width:\x20140px;\x0a\x20\x20\x20\x20margin:\x202px;\x0a\x20\x20\x20\x20cursor:\x20pointer\x0a}\x0a\x0a#new-panel\x20.partition.right\x20.setting.opt-range\x20.range-box\x20.fake-range\x20.fill-outer,#settings-panel\x20.partition.right\x20.setting.opt-range\x20.range-box\x20.fake-range\x20.fill-outer\x20{\x0a\x20\x20\x20\x20width:\x20538px;\x0a\x20\x20\x20\x20border-left:\x2011px\x20solid\x20'];_0x4508=function(){return _0x3e6490;};return _0x4508();};
