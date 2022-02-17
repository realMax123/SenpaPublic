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



.account-profile .account-panel {
    -webkit-flex-grow: 1;
    flex-grow: 1;
    overflow: hidden;
    background-color: #131313;
    border-radius: 8px;
    padding: 10px
}

.account-profile .exp-area {
    margin-top: 15px;
    position: relative;
    width: 100%;
    background: #282828;
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

.account-profile .exp-info {
    z-index: 100;
    width: 100%;
    text-align: center;
    font-weight: 700
}

#account-panel {
    height: 100%
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

#account-panel button:hover {
    background: #940000;
    border-bottom: 4px solid #940000
}

#account-panel #btnLogout {
    border: 0;
    height: 28px;
    width: 90px;
    font-size: 16px;
    margin-bottom: 0
}

#account-panel .fab {
    margin-right: 5px
}

#account-panel #btnLoginDisc {
    background: #7289da;
    border-bottom: 4px solid #5869a8
}

#account-panel #btnLoginFB {
    background: #428bca;
    border-bottom: 4px solid #357ebd
}

#account-panel #btnLoginDisc:hover {
    background: #839dfa;
    border-bottom: 4px solid #5869a8
}

#account-panel #btnLoginFB:hover {
    background: #4fa7f3;
    border-bottom: 4px solid #357ebd
}

#account-panel #pf-avatar {
    border-radius: 50%;
    border: 6px solid #B50000;
    background-color: #333;
    width: 85px;
    height: 85px;
    margin-right: 15px;
    transition: -webkit-transform .3s ease-out;
    transition: transform .3s ease-out;
    transition: transform .3s ease-out,-webkit-transform .3s ease-out
}

#account-panel #pf-avatar:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1)
}

#account-panel .truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}

#account-panel #feature-list {
    list-style: none;
    padding: 0
}

#account-panel #feature-list li {
    padding-left: 1rem;
    text-indent: -.7rem
}

#account-panel #feature-list li:nth-child(3n+1):before {
    content: "🔒 ";
    margin-left: .15rem;
    margin-right: .13rem
}

#account-panel #feature-list li:nth-child(3n+2):before {
    content: "🥇 "
}

#account-panel #feature-list li:nth-child(3n):before {
    content: "🤩 "
}

#replays-panel {
    display: none;
    background: #252525;
    width: 800px;
    height: 550px;
    position: fixed;
    top: 40%;
    left: 50%;
    border-radius: 2px;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    box-shadow: 0 0 10px #000;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: auto
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

#replays-panel .panel-taps {
    background: #111;
    min-height: 38px
}

#replays-panel .panel-taps>div {
    position: relative;
    display: inline-block;
    float: left
}

#replays-panel .panel-taps .import-tap input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 9;
    cursor: pointer
}

#replays-panel .panel-taps button {
    background: transparent;
    border: none;
    border-right: 2px solid #252525;
    color: #fff;
    font-family: inherit;
    font-weight: 500;
    font-size: 18px;
    padding: 8px 15px;
    cursor: pointer;
    outline: none
}

#replays-panel .panel-taps>div:last-child button {
    border-right-color: transparent
}

#replays-panel .panel-taps button .icon {
    display: inline-block;
    margin-right: 3px;
    font-size: 17px
}

#replays-panel .panel-taps .import-tap .icon {
    color: #B50000
}

#replays-panel .panel-taps .download-tap .icon {
    color: #47df43
}

#replays-panel .panel-taps .delete-tap .icon {
    color: #e84a4a
}

#replays-panel .panel-taps .import-tap:hover button {
    background: #B50000
}

#replays-panel .panel-taps .download-tap:hover button {
    background: #47df43
}

#replays-panel .panel-taps .delete-tap:hover button {
    background: #e84a4a
}

#replays-panel .panel-taps>div:hover button .icon {
    color: #fff
}

#replays-panel .replays-container {
    width: calc(100% - 15px);
    height: 496px;
    padding: 15px 0 0 15px
}

#replays-panel .replay-content {
    display: -webkit-flex;
    display: flex;
    width: 100%;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap
}

#replays-panel .replay {
    position: relative;
    display: inline-block;
    -webkit-flex: 0 0 25%;
    flex: 0 0 25%;
    width: 25%
}

#replays-panel .replay .inner-content {
    display: -webkit-flex;
    display: flex;
    padding: 0 15px 15px 0
}

#replays-panel .replay .replay-heading {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: calc(100% - 15px);
    background-color: rgba(0,0,0,.85)
}

#replays-panel .replay .replay-control {
    position: absolute;
    right: -5px;
    top: -8px
}

#replays-panel .replay-name {
    font-family: inherit;
    font-weight: 500;
    font-size: 17px;
    text-align: center;
    padding: 12px 5px
}

#replays-panel .replay img {
    width: 100%;
    height: auto;
    box-shadow: 0 0 4px 1px rgba(0,0,0,.8);
    cursor: pointer
}

#replays-panel .replay-control button {
    background: transparent;
    border: none;
    padding: 0;
    font-size: 17px;
    cursor: pointer;
    outline: none
}

#replays-panel .replay-control button:first-child {
    color: #47df43;
    margin-right: 3px
}

#replays-panel .replay-control button:nth-child(2) {
    color: #e84a4a
}

#replays-panel .ps .ps__rail-y,#replays-panel .ps .ps__rail-y.ps--clicking {
    right: 0
}

#replays-panel .ps__thumb-y {
    background-color: #B50000
}

#replays-panel .ps .ps__rail-y.ps--clicking,#replays-panel .ps .ps__rail-y:focus,#replays-panel .ps .ps__rail-y:hover {
    background-color: transparent
}

#replays-panel .ps__rail-y.ps--clicking .ps__thumb-y,#replays-panel .ps__rail-y:focus>.ps__thumb-y,#replays-panel .ps__rail-y:hover>.ps__thumb-y {
    width: 6px;
    background-color: #B50000
}

#replay-controls {
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 18px;
    text-shadow: 2px 2px 1px #000;
    transition: opacity .5s ease-in-out
}

.replay-slider {
    -webkit-appearance: none;
    display: block;
    width: 100%;
    margin: 0;
    border-radius: 5px;
    height: 8px;
    outline: none;
    background: #ffd4ef
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

.custom-games {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
}

.custom-games .main-menu {
    width: 1015px;
    min-height: 100px;
    background-color: #111;
    position: fixed;
    top: 20%;
    left: 50%;
    border-radius: 4px;
    border: 2px solid #272727;
    box-shadow: 0 0 20px #0a0a0a;
    -webkit-transform: translate(-50%);
    transform: translate(-50%)
}

.custom-games .mx-auto {
    margin-right: auto!important;
    margin-left: auto!important
}

.custom-games .main-menu .panel {
    display: inline-block;
    width: 345px;
    padding: 10px;
    vertical-align: top;
    box-sizing: border-box
}

.custom-games .main-menu .panel.left {
    padding-top: 0;
    margin-right: 5px
}

.custom-games .main-menu .panel.center {
    padding-left: 0;
    padding-right: 0;
    width: 315px
}

.custom-games .main-menu .panel.center .logo img {
    width: 100%
}

.custom-games .main-menu .panel.center .input-field {
    padding: 0 10px;
    border-radius: 2px;
    background: #282828;
    color: #fff;
    border: none;
    margin-bottom: 5px;
    height: 34px;
    font-family: Rajdhani;
    font-weight: 500;
    font-size: 18px;
    outline: none;
    box-sizing: border-box
}

.custom-games .main-menu .panel.center #primary-inputs {
    display: -webkit-flex;
    display: flex
}

.custom-games .main-menu .panel.center #primary-inputs #tag {
    width: 65px
}

.custom-games .main-menu .panel.center #primary-inputs #code {
    width: 60px;
    margin-left: 5px
}

.custom-games .main-menu .panel.center #primary-inputs #name {
    -webkit-flex-grow: 1;
    flex-grow: 1;
    margin-left: 5px
}

.custom-games .main-menu .panel.center .skin-input {
    width: 315px;
    display: block
}

.custom-games .main-menu .panel.center #skinURL2 {
    display: none
}

.custom-games .main-menu .panel.center .main-btns {
    background: #444;
    color: #fff;
    border: none;
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

.custom-games .main-menu .panel.center .main-btns i {
    margin-right: 5px
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

.custom-games .main-menu .panel.center #spectate {
    margin-left: 5px
}

.custom-games .main-menu .panel.center #play:hover,.custom-games .main-menu .panel.center #spectate:hover,.custom-games .main-menu .panel.center .btn:hover {
    background: #940000;
    border-bottom: 4px solid #940000
}

.custom-games .main-menu .panel.center #play:disabled,.custom-games .main-menu .panel.center #spectate:disabled {
    background: #947087;
    border-bottom: 4px solid #735669;
    cursor: default
}

.custom-games .main-menu .panel.right {
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-left: 5px
}

.custom-games .main-menu .panel.right .title {
    text-align: center;
    font-size: 18px;
    font-weight: 600
}

.custom-games .main-menu .panel.right .region-selectors {
    margin-top: 10px;
    border-top: 2px solid transparent
}

.custom-games .main-menu .panel.right .region-selectors .tab {
    display: inline-block;
    width: 108px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    background: #2b2b2b;
    padding: 5px 0;
    box-sizing: border-box;
    cursor: pointer
}

.custom-games .main-menu .panel.right .region-selectors .tab:first-child {
    border-radius: 6px 0 0 0
}

.custom-games .main-menu .panel.right .region-selectors .tab:nth-child(3) {
    border-radius: 0 6px 0 0
}

.custom-games .main-menu .panel.right .region-selectors .tab.active {
    background: #444;
    border-top: 2px solid #B50000
}

.custom-games .main-menu .panel.right .list-container {
    background: #444;
    width: 100%;
    height: 450px;
    margin-top: -1px;
    padding: 5px;
    box-sizing: border-box
}

.custom-games .main-menu .panel.right .list-container .list-row {
    text-align: center;
    font-size: 15px;
    font-weight: 600;
    padding: 2px 0;
    cursor: pointer
}

.custom-games .main-menu .panel.right .list-container .list-row .list-cell {
    display: inline-block;
    width: 105px
}

.custom-games .main-menu .panel.right .list-container .list-row:hover {
    background: #666
}

.custom-games .main-menu .panel.right .list-container .list-row.header:hover {
    background: #444
}

.custom-games .main-menu .panel.right .list-container .list-row.active {
    background: #B50000
}

.custom-games .main-menu .panel.right .list-container .list-row.header {
    padding: 5px 0;
    cursor: default
}

.custom-games #main-left-panel {
    width: 325px;
    height: 290px;
    font-size: 1.3rem;
    color: #fff;
    padding: 10px;
    border-radius: 4px
}

.custom-games div.template {
    display: none
}

.custom-games * {
    box-sizing: border-box
}

.custom-games .d-flex {
    display: -webkit-flex;
    display: flex
}

.custom-games .justify-center {
    -webkit-justify-content: center;
    justify-content: center
}

.custom-games .align-center {
    -webkit-align-items: center;
    align-items: center
}

.custom-games .text-center {
    text-align: center
}

.custom-games .text-right {
    text-align: right
}

.custom-games .text-left {
    text-align: left
}

.custom-games .w-100 {
    width: 100%
}

.custom-games .main-menu {
    width: 870px
}

.custom-games .setting-btn-container {
    position: absolute
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

.custom-games .panel .btn:hover {
    background-color: #940000
}

.custom-games .panel #createGame {
    position: absolute;
    bottom: 0
}

.custom-games .main-menu .panel.left {
    display: inline-block;
    width: 80%;
    margin: 0
}

.custom-games .main-menu .panel.right {
    display: inline-block;
    width: 164.6px;
    padding-top: 31px;
    padding-left: 0;
    padding-bottom: 0;
    margin-left: -3px;
    position: relative;
    height: 312px;
    z-index: 1
}

.custom-games .panel .panel-left-content {
    font-size: 16px;
    font-weight: 600
}

.custom-games .panel .panel-left-content .heading {
    padding: 10px 0;
    font-weight: 700;
    font-size: 16px
}

.custom-games .panel .panel-left-content .game-list,.custom-games .panel .panel-left-content .players {
    -webkit-flex: 0 0 100%;
    flex: 0 0 100%;
    width: 100%
}

.custom-games .panel .panel-left-content .game-list .table-container {
    border-top-left-radius: 2px;
    padding-left: 10px;
    padding-right: 5px;
    background-color: #333;
    height: 271px;
    overflow-y: auto
}

.custom-games .panel .panel-left-content .game-list .table-content {
    min-height: 271px;
    background-color: #333
}

.custom-games .panel .panel-left-content .players .table-container {
    border-top-right-radius: 2px;
    padding: 0 10px;
    background-color: #333;
    height: 271px
}

.custom-games .panel .panel-left-content .game-list .table-body .trow .btn {
    margin: 0 10px
}

.custom-games .panel .panel-left-content .game-list .table-body .trow .btn#deleteBtn {
    background-color: red;
    border-color: #790605
}

.custom-games .panel .panel-left-content .game-list .table-body .trow .btn#deleteBtn:hover {
    background-color: #ff4646
}

.custom-games .panel .panel-left-content .game-list .table-body .trow .btn#fullBtn {
    pointer-events: none;
    cursor: not-allowed;
    background-color: grey;
    border-color: #a9a9a9
}

.custom-games .panel .panel-left-content .game-list .table-body .trow .btn#joinBtn i.fa-lock {
    margin: 0 3px
}

.custom-games .panel .panel-left-content .trow {
    background-color: #333
}

.custom-games .panel .panel-left-content .trow:nth-child(odd) {
    background-color: #555
}

.custom-games .panel .panel-left-content .trow.isHost {
    margin: 3px auto
}

.custom-games .panel .panel-left-content .game-list .table-body .trow,.custom-games .panel .panel-left-content .table-heading {
    padding: 12px 0;
    background-color: #333;
    -webkit-align-items: center;
    align-items: center
}

.custom-games .panel .panel-left-content .game-list .table-body .trow:nth-child(odd) {
    background-color: #555
}

.custom-games .panel .panel-left-content .game-list .table-body .trow:nth-child(2n) {
    background-color: #424242
}

.custom-games .panel .panel-left-content .game-list .table-body .trow>div,.custom-games .panel .panel-left-content .game-list .table-heading>div,.custom-games .panel .panel-left-content .players .trow>div,.custom-games .panel .panel-left-content .table-heading>div {
    text-align: center;
    padding-left: 5px;
    padding-right: 5px
}

.custom-games .panel .panel-left-content .game-list .table-body .trow>div:first-child,.custom-games .panel .panel-left-content .game-list .table-heading>div:first-child {
    -webkit-flex: 0 0 35%;
    flex: 0 0 35%;
    width: 35%
}

.custom-games .panel .panel-left-content .game-list .table-body .trow>div:nth-child(2),.custom-games .panel .panel-left-content .game-list .table-heading>div:nth-child(2) {
    -webkit-flex: 0 0 20%;
    flex: 0 0 20%;
    width: 20%
}

.custom-games .panel .panel-left-content .game-list .table-body .trow>div:nth-child(3),.custom-games .panel .panel-left-content .game-list .table-heading>div:nth-child(3) {
    -webkit-flex: 0 0 20%;
    flex: 0 0 20%;
    width: 30%
}

.custom-games .panel .panel-left-content .game-list .table-body .trow>div:nth-child(4),.custom-games .panel .panel-left-content .game-list .table-heading>div:nth-child(4) {
    -webkit-flex: 0 0 25%;
    flex: 0 0 25%;
    width: 25%
}

.custom-games .panel .panel-left-content .players .trow>div:first-child,.custom-games .panel .panel-left-content .table-heading>div:first-child {
    -webkit-flex: 0 0 70%;
    flex: 0 0 70%;
    width: 70%
}

.custom-games .panel .panel-left-content .players .trow>div:nth-child(2),.custom-games .panel .panel-left-content .table-heading>div:nth-child(2) {
    -webkit-flex: 0 0 30%;
    flex: 0 0 30%;
    width: 30%
}

.custom-games .panel .panel-left-content .players .table-body {
    background-color: #555;
    height: 226px;
    padding-top: 4px;
    overflow-y: auto;
    cursor: default
}

.custom-games .panel .panel-left-content .players .trow>div:first-child {
    text-align: left
}

.custom-games .panel .panel-left-content .players .trow .num {
    min-width: 22px;
    display: inline-block
}

.custom-games .panel .panel-left-content .table-heading>div:first-child {
    padding-right: 12px
}

.custom-games .panel .panel-left-content .btn {
    font-size: 14px;
    width: 89%;
    padding: 4px
}

.custom-games .panel.right .btn#startGame {
    position: absolute;
    bottom: 0;
    left: 0;
    margin-bottom: 0
}

.custom-games .main-menu .panel.bottom {
    width: 100%;
    padding-top: 0;
    margin-top: -1px
}

.custom-games .main-menu .panel.bottom .inner-content {
    background-color: #333;
    padding-top: 10px;
    border-top-right-radius: 2px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px
}

.custom-games .panel.bottom .chat-box {
    background-color: #101010;
    margin: 0 10px 10px;
    padding: 12px;
    overflow-y: auto
}

.custom-games .panel.bottom .chat-box .player-pic img {
    width: 30px;
    height: auto;
    border-radius: 100%
}

.custom-games .panel.bottom .chat-box .player-pic {
    width: 30px;
    padding-top: 22px
}

.custom-games .panel.bottom .chat-box .player-msg {
    padding-left: 8px
}

.custom-games .panel.bottom .chat-box .player-msg .player-name {
    font-weight: 600;
    font-size: 14px;
    padding-bottom: 4px
}

.custom-games .panel.bottom .chat-box .msg {
    padding-bottom: 12px;
    max-width: 760px
}

.custom-games .panel.bottom .chat-box .msg:last-child {
    padding-bottom: 0
}

.custom-games .panel.bottom .chat-box .player-txt {
    padding: 4px 8px;
    background-color: #555;
    border-radius: 2px
}

.custom-games .panel.bottom .chat-box .player-txt img {
    display: inline;
    width: 23px;
    height: auto;
    position: relative;
    top: 5px;
    padding: 0 2px;
    margin: 0 1px
}

.custom-games .panel.bottom .chat-txt .input-container {
    position: relative;
    padding: 0 10px 10px
}

.custom-games .panel.bottom .chat-txt input {
    width: 100%;
    background-color: #555;
    border: none;
    border-radius: 2px;
    outline: none;
    color: #fff;
    font-size: 15px;
    font-weight: 300;
    padding: 8px 36px 8px 10px
}

.custom-games .panel.bottom .chat-txt .icon {
    position: absolute;
    top: 7px;
    right: 20px;
    cursor: pointer
}

.custom-games .panel.bottom .chat-txt .icon:hover .emoji {
    display: block
}

.custom-games .confirm-model {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    width: 520px;
    min-height: 175px;
    background-color: #111;
    box-shadow: 0 0 10px #000;
    border-radius: 2px;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 10
}

.custom-games .confirm-model .inner-content {
    padding: 15px 0;
    height: 100%
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

.custom-games .confirm-model .model-content {
    min-height: 110px
}

.custom-games .confirm-model .model-content .txt {
    font-size: 16px;
    font-weight: 600;
    margin: 10px 0
}

.custom-games .confirm-model .model-content {
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap
}

.custom-games .confirm-model h2 {
    margin: 0 auto
}

.custom-games .confirm-model .input-field {
    width: 100%;
    margin: 0 auto
}

.custom-games .confirm-model .flex-1 {
    -webkit-flex: 1 1;
    flex: 1 1
}

.custom-games .confirm-model .flex-2 {
    -webkit-flex: 2 1;
    flex: 2 1
}

.custom-games .settings-row {
    margin: 0 auto;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap
}

.custom-games .settings-row select {
    padding: 0 10px;
    border-radius: 2px;
    background: #282828;
    color: #fff;
    border: none;
    height: 34px;
    font-family: Rajdhani;
    font-weight: 500;
    font-size: 18px;
    outline: none;
    box-sizing: border-box;
    width: 100%;
    cursor: pointer
}

.custom-games .settings-row .column {
    margin: 10px 15px;
    -webkit-flex-grow: 1;
    flex-grow: 1;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    -webkit-flex-basis: calc(50% - 30px);
    flex-basis: calc(50% - 30px)
}

.custom-games .settings-row .column.toggle {
    max-width: calc(50% - 30px)
}

.custom-games .settings-row.flex-basis-auto {
    margin: 10px 15px
}

.custom-games .settings-row.flex-basis-auto .column {
    -webkit-flex-basis: auto;
    flex-basis: auto;
    margin: 0
}

.custom-games .confirm-model .model-content>div {
    -webkit-flex: 0 0 100%;
    flex: 0 0 100%;
    width: 100%
}

.custom-games .confirm-model .model-content>div:nth-child(2) {
    display: none;
    opacity: 1;
    margin-top: 5px;
    margin-bottom: 15px
}

.custom-games .confirm-model .model-content input[type=password] {
    width: 100%;
    background-color: #555;
    border-radius: 2px;
    color: #fff;
    font-size: 15px;
    padding: 5px;
    border: none;
    outline: none
}

.custom-games .confirm-model .btn-container .cancel {
    background-color: transparent;
    border: 2px solid #555
}

.custom-games .confirm-model .btn-container button {
    width: 130px;
    margin: 10px auto
}

.custom-games .confirm-model .sw-btn label {
    position: relative;
    top: 6px;
    cursor: pointer
}

.custom-games .confirm-model .sw-btn input {
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    opacity: 0
}

.custom-games .confirm-model .sw-btn span {
    display: inline-block;
    position: relative;
    width: 35px;
    height: 18px;
    background-color: #555;
    border-radius: 35px;
    transition: all .3s
}

.custom-games .confirm-model .sw-btn span:after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background-color: #fff;
    transition: all .3s
}

.custom-games .confirm-model .sw-btn input:checked+span {
    background-color: #B50000
}

.custom-games .confirm-model .sw-btn input:checked+span:after {
    -webkit-transform: translateX(18px);
    transform: translateX(18px)
}

.custom-games .main-menu .emoji {
    display: none;
    position: absolute;
    top: -79px;
    right: -10px;
    width: 115px;
    background-color: #555;
    padding: 5px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px
}

.custom-games .main-menu .emoji img {
    width: 17px;
    height: auto;
    display: inline
}

.custom-games .main-menu .emoji .fa-smile {
    cursor: pointer
}

.custom-games .main-menu.host .panel.left,.custom-games .main-menu.host .panel.right {
    padding-top: 10px
}

.custom-games .main-menu.host .room-container .inner-content {
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap
}

.custom-games .main-menu.host .room-container .inner-content>div {
    -webkit-flex: 0 0 33.3333%;
    flex: 0 0 33.3333%;
    width: 33.3333%;
    margin-bottom: 20px
}

.custom-games .main-menu.host .room-container {
    width: 100%;
    padding-left: 25px
}

.custom-games .main-menu.host .room-container .title {
    margin-bottom: 10px;
    color: #B50000
}

#new-panel {
    width: unset!important
}

#new-panel #image {
    background-image: none;
    background-size: cover;
    height: 95%
}

#new-panel #discord {
    height: 5%;
    background: #7289da;
    outline: none;
    border: 0;
    border-radius: 10px;
    cursor: pointer
}

#new-panel #discord,#new-panel a {
    width: 100%;
    color: #fff
}

.hidden {
    display: none
}

#new-panel,#settings-panel {
    background: #111;
    width: 810px;
    height: 550px;
    position: fixed;
    top: 40%;
    left: 50%;
    border-radius: 2px;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    box-shadow: 0 0 10px #000;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none
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

#new-panel .partition,#settings-panel .partition {
    height: 100%;
    display: inline-block;
    vertical-align: top
}

#new-panel .partition.left,#settings-panel .partition.left {
    width: 200px;
    border-radius: 2px 0 0 2px
}

#new-panel .partition.left .tab,#settings-panel .partition.left .tab {
    padding: 5px 15px;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer
}

#new-panel .partition.left .tab i,#settings-panel .partition.left .tab i {
    margin-right: 5px;
    -webkit-transform: translateY(1px);
    transform: translateY(1px)
}

#new-panel .partition.left .tab.dummy,#settings-panel .partition.left .tab.dummy {
    opacity: 0;
    height: 26px
}

#new-panel .partition.left .tab:hover,#settings-panel .partition.left .tab:hover {
    background: #222
}

#new-panel .partition.left .tab[active],#settings-panel .partition.left .tab[active] {
    background: #B50000
}

#new-panel div[option=disabled],#settings-panel div[option=disabled] {
    opacity: .4;
    pointer-events: none
}

#new-panel .partition.right,#settings-panel .partition.right {
    width: 610px;
    height: 550px;
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    background: #252525;
    border-radius: 0 2px 2px 0
}

#new-panel .partition.right div[data-name],#settings-panel .partition.right div[data-name] {
    display: none
}

#new-panel .partition.right div[data-name][active],#settings-panel .partition.right div[data-name][active] {
    display: block
}

#new-panel .partition.right .tab-row,#settings-panel .partition.right .tab-row {
    background: #181818
}

#new-panel .partition.right .tab-row .tab,#settings-panel .partition.right .tab-row .tab {
    display: inline-block;
    font-weight: 500;
    font-size: 17px;
    padding: 8px 14px;
    cursor: pointer
}

#new-panel .partition.right .tab-row .tab[active],#settings-panel .partition.right .tab-row .tab[active] {
    background: #252525
}

#new-panel .partition.right .setting,#settings-panel .partition.right .setting {
    padding: 20px;
    transition: all .5s
}

#new-panel .partition.right .setting:hover,#settings-panel .partition.right .setting:hover {
    background: #383838
}

#new-panel .partition.right .setting.opt-toggle .name,#settings-panel .partition.right .setting.opt-toggle .name {
    font-weight: 500;
    font-size: 18px;
    width: 525px;
    display: inline-block
}

#new-panel .partition.right .setting.opt-toggle .toggle-btn,#settings-panel .partition.right .setting.opt-toggle .toggle-btn {
    width: 35px;
    height: 20px;
    position: relative;
    cursor: pointer;
    display: inline-block
}

#new-panel .partition.right .setting.opt-toggle .toggle-btn .slide,#settings-panel .partition.right .setting.opt-toggle .toggle-btn .slide {
    height: 12px;
    border-radius: 5px;
    background: #555;
    width: 35px;
    position: absolute;
    top: 7px;
    transition: all .5s
}

#new-panel .partition.right .setting.opt-toggle .toggle-btn .ball,#settings-panel .partition.right .setting.opt-toggle .toggle-btn .ball {
    border-radius: 50%;
    width: 18px;
    height: 18px;
    background: #fff;
    position: absolute;
    top: 4px;
    left: 0;
    transition: all .5s
}

#new-panel .partition.right .setting.opt-toggle .toggle-btn.active .slide,#settings-panel .partition.right .setting.opt-toggle .toggle-btn.active .slide {
    background: #B50000
}

#new-panel .partition.right .setting.opt-toggle .toggle-btn.active .ball,#settings-panel .partition.right .setting.opt-toggle .toggle-btn.active .ball {
    left: 17px
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

#new-panel .partition.right .setting.opt-button div,#settings-panel .partition.right .setting.opt-button div {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-justify-content: center;
    justify-content: center
}

#new-panel .partition.right .setting.opt-dropdown .name,#settings-panel .partition.right .setting.opt-dropdown .name {
    font-weight: 500;
    width: 360px;
    display: inline-block;
    font-size: 18px
}

#new-panel .partition.right .setting.opt-dropdown .dropdown-box,#settings-panel .partition.right .setting.opt-dropdown .dropdown-box {
    width: 200px;
    text-align: right;
    font-weight: 500;
    font-size: 18px;
    display: inline-block;
    white-space: nowrap;
    position: relative;
    cursor: pointer
}

#new-panel .partition.right .setting.opt-dropdown .dropdown-box .selected,#settings-panel .partition.right .setting.opt-dropdown .dropdown-box .selected {
    display: inline-block;
    width: 175px
}

#new-panel .partition.right .setting.opt-dropdown .dropdown-box i,#settings-panel .partition.right .setting.opt-dropdown .dropdown-box i {
    width: 20px;
    margin-left: 5px
}

#new-panel .partition.right .setting.opt-dropdown .dropdown-box .dropdown-list,#settings-panel .partition.right .setting.opt-dropdown .dropdown-box .dropdown-list {
    display: none;
    position: absolute;
    background: #444;
    min-width: 100px;
    top: 20px;
    right: 0;
    text-align: center;
    z-index: 1
}

#new-panel .partition.right .setting.opt-dropdown .dropdown-box .dropdown-list .dropdown-item,#settings-panel .partition.right .setting.opt-dropdown .dropdown-box .dropdown-list .dropdown-item {
    padding: 4px 8px
}

#new-panel .partition.right .setting.opt-dropdown .dropdown-box .dropdown-list .dropdown-item:hover,#settings-panel .partition.right .setting.opt-dropdown .dropdown-box .dropdown-list .dropdown-item:hover {
    background: #555
}

#new-panel .partition.right .setting.opt-dropdown .dropdown-box:hover .dropdown-list,#settings-panel .partition.right .setting.opt-dropdown .dropdown-box:hover .dropdown-list {
    display: block
}

#new-panel .partition.right .setting.opt-range .name,#settings-panel .partition.right .setting.opt-range .name {
    font-weight: 500;
    font-size: 18px;
    display: inline-block
}

#new-panel .partition.right .setting.opt-range .value,#settings-panel .partition.right .setting.opt-range .value {
    background: #111;
    margin-left: 5px;
    padding: 0 6px;
    font-weight: 600;
    border-radius: 9px;
    color: #aaa;
    display: inline-block
}

#new-panel .partition.right .setting.opt-range .range-box,#settings-panel .partition.right .setting.opt-range .range-box {
    position: relative;
    width: 560px
}

#new-panel .partition.right .setting.opt-range .range-box .real-range,#settings-panel .partition.right .setting.opt-range .range-box .real-range {
    width: 100%;
    margin: 0;
    height: 22px;
    background: transparent;
    position: absolute;
    -webkit-appearance: none
}

#new-panel .partition.right .setting.opt-range .range-box .real-range:focus,#settings-panel .partition.right .setting.opt-range .range-box .real-range:focus {
    outline: none
}

#new-panel .partition.right .setting.opt-range .range-box .real-range::-webkit-slider-runnable-track,#settings-panel .partition.right .setting.opt-range .range-box .real-range::-webkit-slider-runnable-track {
    width: 100%;
    height: 0
}

#new-panel .partition.right .setting.opt-range .range-box .real-range::-webkit-slider-thumb,#settings-panel .partition.right .setting.opt-range .range-box .real-range::-webkit-slider-thumb {
    height: 22px;
    width: 22px;
    border-radius: 15px;
    margin-top: -11px;
    background: #fff;
    cursor: pointer;
    -webkit-appearance: none
}

#new-panel .partition.right .setting.opt-range .range-box .real-range::-moz-range-track,#settings-panel .partition.right .setting.opt-range .range-box .real-range::-moz-range-track {
    width: 100%;
    height: 0
}

#new-panel .partition.right .setting.opt-range .range-box .real-range::-moz-range-thumb,#settings-panel .partition.right .setting.opt-range .range-box .real-range::-moz-range-thumb {
    height: 22px;
    width: 22px;
    border-radius: 15px;
    background: #fff;
    cursor: pointer
}

#new-panel .partition.right .setting.opt-range .range-box .real-range::-ms-track,#settings-panel .partition.right .setting.opt-range .range-box .real-range::-ms-track {
    width: 100%;
    height: 0
}

#new-panel .partition.right .setting.opt-range .range-box .real-range::-ms-thumb,#settings-panel .partition.right .setting.opt-range .range-box .real-range::-ms-thumb {
    margin-top: 1px;
    height: 22px;
    width: 22px;
    border-radius: 15px;
    background: #fff;
    cursor: pointer
}

#new-panel .partition.right .setting.opt-range .range-box .fake-range,#settings-panel .partition.right .setting.opt-range .range-box .fake-range {
    background: #484848;
    width: 100%;
    height: 10px;
    position: absolute;
    top: 6px;
    border-radius: 5px;
    overflow: hidden
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

#new-panel .partition.right .setting.opt-range .padding,#settings-panel .partition.right .setting.opt-range .padding {
    height: 22px
}

#new-panel .partition.right .setting.opt-input .name,#settings-panel .partition.right .setting.opt-input .name {
    font-weight: 500;
    font-size: 18px
}

#new-panel .partition.right .setting.opt-input .text,#settings-panel .partition.right .setting.opt-input .text {
    background: #484848;
    color: #fff;
    width: 560px;
    border: none;
    font-size: 16px;
    font-family: Rajdhani;
    font-weight: 600;
    padding: 8px 10px;
    box-sizing: border-box;
    margin-top: 5px;
    outline: none;
    border-radius: 2px
}

#new-panel .partition.right .setting.opt-hotkey .name,#settings-panel .partition.right .setting.opt-hotkey .name {
    font-weight: 500;
    width: 470px;
    display: inline-block;
    font-size: 18px
}

#new-panel .partition.right .setting.opt-hotkey .hotkey,#settings-panel .partition.right .setting.opt-hotkey .hotkey {
    width: 90px;
    text-align: center;
    font-weight: 500;
    display: inline-block;
    cursor: pointer;
    background: #222;
    color: transparent;
    text-shadow: 0 0 0 #888;
    font-size: 16px;
    padding: 0;
    border: 2px solid #444;
    font-family: Rajdhani;
    box-sizing: border-box;
    box-shadow: 0 0 5px #080808;
    outline: none
}

#new-panel .partition.right .setting.opt-hotkey .hotkey:focus,#settings-panel .partition.right .setting.opt-hotkey .hotkey:focus {
    border: 2px solid #888
}

#new-panel .partition.right .setting.opt-colorpicker .name,#settings-panel .partition.right .setting.opt-colorpicker .name {
    font-weight: 500;
    font-size: 18px;
    width: 455px;
    display: inline-block
}

#new-panel .partition.right .setting.opt-colorpicker .text,#settings-panel .partition.right .setting.opt-colorpicker .text {
    background: #484848;
    color: #fff;
    width: 105px;
    border: none;
    font-size: 16px;
    font-family: Rajdhani;
    font-weight: 600;
    padding: 5px 10px;
    height: 31px;
    box-sizing: border-box;
    outline: none;
    border-radius: 2px
}

#new-panel .partition.right .setting.opt-colorpicker .minicolors-swatch,#settings-panel .partition.right .setting.opt-colorpicker .minicolors-swatch {
    border: 1px solid #333;
    cursor: pointer
}

#menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
}

#menu .main-menu {
    width: 1015px;
    min-height: 100px;
    background-color: #111;
    position: fixed;
    top: 40%;
    left: 50%;
    border-radius: 4px;
    border: 2px solid #272727;
    box-shadow: 0 0 20px #0a0a0a;
    -webkit-transform: translate(-50%);
    transform: translate(-50%)
}

#menu .main-menu .advertisement-informer {
    margin-top: 5px;
    text-align: center;
    font-size: 140%;
    color: red;
    font-weight: bold;

}

#menu .main-menu .panel {
    display: inline-block;
    width: 345px;
    padding: 10px;
    vertical-align: top;
    box-sizing: border-box
}

#menu .main-menu .panel.left {
    padding-top: 0;
    margin-right: 5px
}

#menu .main-menu .panel.left .setting-btn-container {
    margin-top: 5px
}

#menu .main-menu .panel.left .setting-btn-container #custom-games-toggle,#menu .main-menu .panel.left .setting-btn-container #music-toggle,#menu .main-menu .panel.left .setting-btn-container #players-list-toggle,#menu .main-menu .panel.left .setting-btn-container #replays-toggle {
    margin-left: 10px
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

#menu .main-menu .panel.left .setting-btn-container #replays-toggle:hover,#menu .main-menu .panel.left .setting-btn-container #settings-toggle:hover {
    background: #940000
}

#menu .main-menu .panel.left .profile-controls {
    margin-top: 18px;
    margin-bottom: 22px
}

#menu .main-menu .panel.left .profile-controls .arrow {
    color: #555;
    font-size: 34px;
    margin: 12px;
    width: 13px;
    height: 44px
}

#menu .main-menu .panel.left .profile-controls .skin-preview {
    background-color: #333;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin: 12px;
    border: 6px solid #555;
    box-sizing: border-box;
    background-size: cover!important;
    transition: border-color .15s ease-out
}

#menu .main-menu .panel.left .profile-controls .skin-preview:active,#menu .main-menu .panel.left .profile-controls .skin-preview:hover {
    border: 6px solid #B50000
}

#menu .main-menu .panel.left .profile-controls .inline {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer
}

#menu .main-menu .panel.left .info-text {
    text-align: center;
    font-weight: 500;
    margin-bottom: -5px;
    margin-top: 13px
}

#menu .main-menu .panel.left .info-text .spacer {
    margin: 0 6px
}

#menu .main-menu .panel.left .info-text span {
    margin-left: 2px;
    margin-right: 2px
}

#menu .main-menu .panel.left .info-text a,#menu .main-menu .panel.left .info-text a:hover,#menu .main-menu .panel.left .info-text a:visited {
    color: #e7c3da
}

#menu .main-menu .panel.left .info-text a:active {
    color: #B50000
}

#menu .main-menu .panel.center {
    padding-left: 0;
    padding-right: 0;
    width: 315px
}

#menu .main-menu .panel.center .logo img {
    width: 100%
}

#menu .main-menu .panel.center #skinURL1,#menu .main-menu .panel.center #skinURL2 {
    visibility: collapse;
    width: 0;
    height: 0
}

#menu .main-menu .panel.center .input-field {
    padding: 0 10px;
    border-radius: 2px;
    background: #282828;
    color: #fff;
    border: none;
    margin-bottom: 5px;
    height: 34px;
    font-family: Rajdhani;
    font-weight: 500;
    font-size: 18px;
    outline: none;
    box-sizing: border-box
}

#menu .main-menu .panel.center #primary-inputs {
    display: -webkit-flex;
    display: flex
}

#menu .main-menu .panel.center #primary-inputs #tag {
    width: 65px
}

#menu .main-menu .panel.center #primary-inputs #code {
    width: 60px;
    margin-left: 5px
}

#menu .main-menu .panel.center #primary-inputs #name {
    -webkit-flex-grow: 1;
    flex-grow: 1;
    margin-left: 5px
}

#menu .main-menu .panel.center .skin-input {
    width: 315px;
    display: block
}

#menu .main-menu .panel.center #skinURL2 {
    display: none
}

#menu .main-menu .panel.center .main-btns {
    background: #444;
    color: #fff;
    border: none;
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

#menu .main-menu .panel.center .main-btns i {
    margin-right: 5px
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

#menu .main-menu .panel.center #spectate {
    margin-left: 5px
}

#menu .main-menu .panel.center #play:hover,#menu .main-menu .panel.center #spectate:hover,#menu .main-menu .panel.center .btn:hover {
    background: #940000;
    border-bottom: 4px solid #940000
}

#menu .main-menu .panel.center #play:disabled,#menu .main-menu .panel.center #spectate:disabled {
    background: #947087;
    border-bottom: 4px solid #735669;
    cursor: default
}

#menu .main-menu .panel.right {
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-left: 5px
}

#menu .main-menu .panel.right .title {
    text-align: center;
    font-size: 18px;
    font-weight: 600
}

#menu .main-menu .panel.right .region-selectors {
    margin-top: 10px;
    border-top: 2px solid transparent
}

#menu .main-menu .panel.right .region-selectors .tab {
    display: inline-block;
    width: 108px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    background: #2b2b2b;
    padding: 5px 0;
    box-sizing: border-box;
    cursor: pointer
}

#menu .main-menu .panel.right .region-selectors .tab:first-child {
    border-radius: 6px 0 0 0
}

#menu .main-menu .panel.right .region-selectors .tab:nth-child(3) {
    border-radius: 0 6px 0 0
}

#menu .main-menu .panel.right .region-selectors .tab.active {
    background: #444;
    border-top: 2px solid #B50000
}

#menu .main-menu .panel.right .list-container {
    background: #444;
    width: 100%;
    height: 450px;
    margin-top: -1px;
    padding: 5px;
    box-sizing: border-box
}

#menu .main-menu .panel.right .list-container .list-row {
    text-align: center;
    font-size: 15px;
    font-weight: 600;
    padding: 2px 0;
    cursor: pointer
}

#menu .main-menu .panel.right .list-container .list-row .list-cell {
    display: inline-block;
    width: 105px
}

#menu .main-menu .panel.right .list-container .list-row:hover {
    background: #666
}

#menu .main-menu .panel.right .list-container .list-row.header:hover {
    background: #444
}

#menu .main-menu .panel.right .list-container .list-row.active {
    background: #B50000
}

#menu .main-menu .panel.right .list-container .list-row.header {
    padding: 5px 0;
    cursor: default
}

#menu .main-menu .panel.right .list-container #server-list {
    background: #555;
    margin-top: 1px;
    height: 410px
}

#menu .main-menu .panel.right .list-container #server-list div[region] {
    display: none;
    max-height: 395px;
    position: absolute
}

#menu .main-menu .panel.right .list-container #server-list div[region].active {
    display: block
}

#main-left-panel {
    width: 325px;
    height: 290px;
    font-size: 1.3rem;
    color: #fff;
    padding: 10px;
    border-radius: 4px
}

#ad-slot-center-panel,#main-left-panel {
    background-color: #333;
    font-weight: 500;
    box-sizing: border-box
}

#ad-slot-center-panel {
    width: 315px;
    height: 245px;
    text-align: center;
    font-size: 30px;
    color: #6b6b6b
}

#endGame {
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    z-index: 10;
    display: none
}

#endGame .adsPanel {
    width: 350px;
    background-color: #111;
    border-radius: 10px;
    padding: 15px;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    border: 2px solid #272727;
    box-shadow: 0 0 20px #0a0a0a
}

#endGame .adsPanel .banner {
    height: 180px;
    width: 100%
}

#endGame .adsPanel .banner img {
    width: 100%
}

#endGame .adsPanel .banner img:hover {
    opacity: .85
}

#endGame .adsPanel .advertisement-informer-endgame {
    font-size: 11px;
    font-weight: 600;
    margin-top: 10px
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

#endGame .adsPanel .btn:hover {
    background: #940000;
    border-bottom: 4px solid #940000
}

#endGame .adsPanel .btn:disabled {
    background: #947087;
    border-bottom: 4px solid #735669;
    cursor: default
}

#endGame .adsPanel #ad-button-continue {
    width: 260px;
    height: 45px;
    transition: all .3s
}

::-webkit-scrollbar {
    width: 10px
}

::-webkit-scrollbar-track {
    background: #212121;
}

::-webkit-scrollbar-thumb {
    background: #b50000;
}

::-webkit-scrollbar-thumb:hover {
    background: #B50000;
}

body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: Rajdhani;
    color: #fff
}

#screen {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1
}

div.template {
    display: none
}

#gameadsbanner {
    position: absolute!important;
    background-color: transparent;
    z-index: 100
}

.input-field {
    padding: 0 10px;
    border-radius: 2px;
    background: #282828;
    color: #fff;
    border: none;
    margin-bottom: 5px;
    height: 34px;
    font-family: Rajdhani;
    font-weight: 500;
    font-size: 18px;
    outline: none;
    box-sizing: border-box
}

#huds .leaderboard-hud {
    position: fixed;
    top: 5px;
    right: 5px;
    padding: 10px;
    width: auto;
    overflow: hidden;
    -webkit-transform-origin: top right;
    transform-origin: top right;
    text-align: right
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

#huds .leaderboard-hud #leaderboard-positions {
    font-size: 14px;
    font-weight: 500;
    text-align: right;
    white-space: nowrap;
    font-family: Ubuntu;
    line-height: 21px
}

#huds .leaderboard-hud #leaderboard-positions div.playerRow {
    background: rgba(0,0,0,.3);
    padding: 1px 4px;
    display: inline-block;
    margin-bottom: 3px
}

#huds .leaderboard-hud #leaderboard-positions div.playerRow span {
    font-family: Geogrotesque,Titillium Web,Ubuntu,sans-serif;
    font-size: 13px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 5px
}

#huds .leaderboard-hud #leaderboard-positions div.playerRow span.playerNick {
    max-width: 180px;
    overflow: hidden
}

#huds #leaderboard-teams {
    -webkit-transform-origin: top right;
    transform-origin: top right;
    position: fixed;
    top: 45px;
    right: 5px;
    background: transparent;
    padding: 15px
}

#huds .minimap-hud {
    position: fixed;
    bottom: 5px;
    right: 5px;
    border: 1px solid #263238;
    -webkit-transform-origin: bottom right;
    transform-origin: bottom right;
    width: 180px;
    height: 180px;
    border-radius: 0;
    -webkit-clip-path: none;
    clip-path: none
}

#huds .minimap-hud #minimap,#huds .minimap-hud #minimapNode {
    position: absolute
}

#huds #chat-box {
    position: fixed;
    bottom: 30px;
    width: 350px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    font-size: 14px;
    border: none;
    border-bottom: 3px solid #222;
    color: #ddd;
    background: #444;
    outline: none;
    display: none
}

#huds #chat-room {
    padding: 0 0 10px!important
}

#huds #chat-room #chat-room-inner {
    width: calc(100% - 10px);
    height: calc(100% - 26px);
    min-width: 200px;
    min-height: 200px;
    position: fixed;
    bottom: 0;
    padding-left: 10px;
    -webkit-transform-origin: left;
    transform-origin: left;
    background: rgba(10,10,10,.3);
    overflow-x: hidden;
    overflow-y: auto
}

#huds #chat-room #chat-room-inner::-webkit-scrollbar {
    width: 3px
}

#huds #chat-room #chat-room-inner::-webkit-scrollbar-thumb {
    background: #383838
}

#huds #chat-room #chat-room-inner #chat-all-room,#huds #chat-room #chat-room-inner #chat-party-room {
    padding-top: 21px
}

#huds #chat-room #chat-room-inner #chat-party-room {
    display: none
}

#huds #chat-room #chat-control {
    position: relative;
    width: 100%;
    height: 31px;
    z-index: 999999
}

#huds #chat-room #chat-control button {
    font-family: inherit;
    border: none;
    height: 26px;
    color: #fff;
    min-width: 46px;
    background: rgba(10,10,10,.3);
    float: left;
    margin: 0;
    cursor: pointer;
    text-transform: uppercase;
    outline: none
}

#huds #stats-hud {
    position: fixed;
    bottom: 2px;
    left: 2px;
    font-size: 20px;
    font-weight: 600;
    padding: 5px 10px;
    color: #fff;
    background: rgba(0,0,0,.4);
    white-space: pre;
    -webkit-transform-origin: bottom left;
    transform-origin: bottom left
}

#huds #chat-room {
    -webkit-user-select: text;
    -ms-user-select: text;
    user-select: text;
    position: fixed;
    bottom: 50px;
    left: 5px;
    padding: 10px;
    width: 227px;
    height: 300px;
    min-width: 200px;
    min-height: 200px;
    resize: none;
    -webkit-transform-origin: left;
    transform-origin: left;
    overflow: hidden
}

#huds #chat-room div {
    font-family: Titillium Web,Ubuntu,sans-serif;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500
}

#huds #chat-room div .time {
    color: #555;
    font-weight: 400;
    margin-left: 4px
}

#huds #chat-room div .message {
    margin-left: 4px;
    color: hsla(0,0%,100%,.8)
}

.jq-toast-single {
    font-size: 14px;
    font-family: Ubuntu;
    line-height: 20px
}

#huds #server-message {
    position: fixed;
    top: 25px;
    left: 0;
    width: 100%;
    text-align: center;
    padding: 0 100px;
    box-sizing: border-box;
    font-weight: 700;
    font-size: 22px
}

#huds #room-stats-hud {
    position: fixed;
    left: 50%;
    top: 0;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    font-family: arial;
    font-size: 14px;
    padding: 2px;
    background: rgba(0,0,0,.4)
}

#huds .teamplayers-hud {
    position: fixed;
    top: 5px;
    left: 5px;
    padding: 10px;
    width: auto;
    overflow: hidden;
    -webkit-transform-origin: top left;
    transform-origin: top left
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

#huds .teamplayers-hud #teamplayers-positions {
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    white-space: nowrap;
    font-family: Ubuntu;
    line-height: 21px
}

#huds .teamplayers-hud #teamplayers-positions div.playerRow {
    background: rgba(0,0,0,.3);
    padding: 1px 4px;
    display: inline-block;
    margin-bottom: 3px
}

#huds .teamplayers-hud #teamplayers-positions div.playerRow span {
    font-family: Geogrotesque,Titillium Web,Ubuntu,sans-serif;
    font-size: 12px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
    margin-bottom: 2px;
    text-align: left
}

#huds .teamplayers-hud #teamplayers-positions div.playerRow span.playerNick {
    max-width: 180px;
    overflow: hidden
}

#huds .teamplayers-hud #teamplayers-positions div.playerRow span.playerMass {
    width: 40px
}

#huds .teamplayers-hud #teamplayers-positions div.playerRow span.playerLocation {
    width: 25px
}

#huds #teamplayers-teams {
    -webkit-transform-origin: top left;
    transform-origin: top left;
    position: fixed;
    top: 45px;
    left: 5px;
    background: transparent;
    padding: 15px
}

#huds .timeleft {
    bottom: 185px;
    right: 0;
    position: fixed;
    margin: 0;
    color: #fff;
    font-size: 12px;
    font-family: Geogrotesque,Titillium Web,Ubuntu,sans-serif;
    padding: 4px 8px;
    background: rgba(0,0,0,.5)
}

#huds,#huds .timeleft {
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none
}

#skin-modal.visible {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center
}

#skin-modal {
    display: none;
    position: fixed;
    z-index: 19999;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    overflow: none;
    background-color: rgba(0,0,0,.2)
}

#skin-modal * {
    box-sizing: border-box
}

#skin-modal .content {
    padding: 0 20px 20px;
    width: 850px;
    z-index: 1;
    overflow: hidden;
    position: relative;
    background-color: #111;
    border-radius: 4px;
    border: 2px solid #272727;
    box-shadow: 0 0 20px #0a0a0a
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

#skin-modal .content button:disabled {
    pointer-events: none;
    background: #c5bcc2;
    border-bottom: 4px solid #9c9399;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none
}

#skin-modal .content button:hover {
    background: #940000;
    border-bottom: 4px solid #940000
}

#skin-modal .content button.delete {
    background: #d44242;
    border-bottom: 4px solid #882525
}

#skin-modal .content button.delete.selected:hover {
    background: #fd9999;
    border-bottom: 4px solid #c26d6d
}

#skin-modal .content .tabs {
    display: -webkit-flex;
    display: flex;
    width: 100%
}

#skin-modal .content .tabs button {
    display: inline-block;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    background: #2b2b2b;
    padding: 5px 0;
    box-sizing: border-box;
    cursor: pointer;
    border-bottom-color: #8f8f8f
}

#skin-modal .content .tabs button:disabled {
    background: #444;
    border-bottom-color: #B50000
}

#skin-modal .content .tabs button:first-child {
    margin-left: 0;
    margin-right: 5px;
    border-radius: 6px 0 0 0
}

#skin-modal .content .tabs button:last-child {
    margin-right: 0;
    margin-left: 5px;
    border-radius: 0 6px 0 0
}

#skin-modal .content .tabs .fas {
    margin-right: 5px
}

#skin-modal .content .tabContent {
    height: 540px;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column
}

#skin-modal .content .tabContent .searchBox {
    width: 100%;
    font-size: 24px;
    margin-top: 10px;
    border-radius: 3px;
    padding: 0 10px;
    border-radius: 2px;
    background: #282828;
    color: #fff;
    margin-bottom: 5px;
    height: 34px;
    font-family: Rajdhani;
    font-weight: 500;
    font-size: 18px;
    border: none;
    outline: none;
    box-sizing: border-box
}

#skin-modal .content .tabContent .scrollview {
    overflow: auto;
    height: auto;
    width: 100%;
    -webkit-flex-grow: 1;
    flex-grow: 1;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-justify-content: space-between;
    justify-content: space-between
}

#skin-modal .content .tabContent .scrollview .grid-container {
    display: grid;
    grid-template-columns: repeat(5,1fr);
    margin-top: 10px;
    grid-gap: 10px;
    gap: 10px
}

#skin-modal .content .tabContent .scrollview #skinsLoading {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-flex-grow: 1;
    flex-grow: 1;
    -webkit-align-items: center;
    align-items: center
}

#skin-modal .content .tabContent .scrollview .grid-item {
    padding: 5px;
    text-align: center;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    align-items: center;
    background-color: #282828;
    border-radius: 8px;
    position: relative
}

#skin-modal .content .tabContent .scrollview .grid-item img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 5px solid #f5e1f3;
    background-color: #777;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: -webkit-transform .3s ease-out;
    transition: transform .3s ease-out;
    transition: transform .3s ease-out,-webkit-transform .3s ease-out
}

#skin-modal .content .tabContent .scrollview .grid-item img:hover {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: scale(1.2);
    transform: scale(1.2)
}

#skin-modal .content .tabContent .scrollview .grid-item img.selected {
    border: 5px solid #50000;
    box-shadow: 0 0 9px 4px #B50000
}

#skin-modal .content .tabContent .scrollview .grid-item img.selected:hover {
    -webkit-transform: scale(1);
    transform: scale(1)
}

#skin-modal .content .tabContent .scrollview .grid-item .title {
    display: -webkit-flex;
    display: flex;
    height: 3em;
    overflow: hidden;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    font-size: 1.3em;
    font-weight: 700
}

#skin-modal .content .tabContent .scrollview .grid-item .icon {
    position: absolute;
    right: 13px;
    top: 10px;
    opacity: .5;
    transition: -webkit-transform .15s ease-out;
    transition: transform .15s ease-out;
    transition: transform .15s ease-out,-webkit-transform .15s ease-out
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

#skin-modal .content .tabContent .scrollview .grid-item .icon.selected.delete-icon {
    color: #e92222;
    opacity: .8
}

#skin-modal .content .tabContent .scrollview .grid-item .icon.selected.delete-icon:hover {
    color: #f01212;
    opacity: 1
}

#skin-modal .content .tabContent .scrollview .grid-item button {
    width: 100%;
    padding: 5px 10px
}

#skin-modal .content .tabContent .pagination {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center
}

#skin-modal .content .tabContent .pagination a {
    color: #eee;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none
}

#skin-modal .content .tabContent .pagination a.active {
    background-color: #B50000;
    color: #fff;
    border-radius: 5px
}

#skin-modal .content .tabContent .pagination a:hover:not(.active) {
    background-color: #e4abcf;
    border-radius: 5px
}

#skin-modal .content .tabContent .pagination a.disabled {
    background-color: #494949;
    color: #cfc9c9;
    border-radius: 5px;
    pointer-events: none
}

.submit-page {
    padding: 60px
}

.submit-page input {
    font-size: 24px;
    width: 90%
}

.submit-page button {
    width: 10%;
    height: 34px
}


</style>`;
    document.head.insertAdjacentHTML("beforeend", style);
})();
const _0x4ebdad=_0x3f6a;(function(_0x3e199e,_0x2e9a1a){const _0x210805=_0x3f6a,_0x1aeef9=_0x3e199e();while(!![]){try{const _0xb6fcb0=parseInt(_0x210805(0x214))/0x1*(-parseInt(_0x210805(0x1ff))/0x2)+parseInt(_0x210805(0x1f0))/0x3*(-parseInt(_0x210805(0x1fc))/0x4)+-parseInt(_0x210805(0x1fb))/0x5+parseInt(_0x210805(0x1f8))/0x6+parseInt(_0x210805(0x20e))/0x7+-parseInt(_0x210805(0x200))/0x8*(parseInt(_0x210805(0x1fe))/0x9)+parseInt(_0x210805(0x217))/0xa;if(_0xb6fcb0===_0x2e9a1a)break;else _0x1aeef9['push'](_0x1aeef9['shift']());}catch(_0x5d685d){_0x1aeef9['push'](_0x1aeef9['shift']());}}}(_0x798b,0xb69e9),background_color='#131313',document['getElementsByClassName'](_0x4ebdad(0x1ea))[0x0][_0x4ebdad(0x1ef)](),document['getElementsByClassName'](_0x4ebdad(0x205))[0x0][_0x4ebdad(0x1ef)](),document['getElementsByClassName'](_0x4ebdad(0x213))[0x0]['innerHTML']=_0x4ebdad(0x208),document[_0x4ebdad(0x203)]('info-text')[0x0][_0x4ebdad(0x1f5)]=_0x4ebdad(0x204),document[_0x4ebdad(0x1f7)]('main-left-panel')[_0x4ebdad(0x1f2)]['background']=background_color,document['getElementsByClassName'](_0x4ebdad(0x21a))[0x0][_0x4ebdad(0x1f2)][_0x4ebdad(0x211)]=background_color,document['getElementById']('server-list')['style'][_0x4ebdad(0x1f1)]=background_color,document['getElementsByClassName'](_0x4ebdad(0x1f3))[0x0][_0x4ebdad(0x1f2)][_0x4ebdad(0x1f1)]=background_color,document[_0x4ebdad(0x203)](_0x4ebdad(0x20b))[0x0][_0x4ebdad(0x1ef)](),document[_0x4ebdad(0x203)]('tab')[0x0][_0x4ebdad(0x1f2)]['borderColor']=_0x4ebdad(0x1ed),document[_0x4ebdad(0x203)](_0x4ebdad(0x201))[0x1]['style'][_0x4ebdad(0x216)]='red',document[_0x4ebdad(0x203)]('tab')[0x2][_0x4ebdad(0x1f2)][_0x4ebdad(0x216)]=_0x4ebdad(0x1ed),document[_0x4ebdad(0x203)](_0x4ebdad(0x1f6))[0x0][_0x4ebdad(0x1ef)](),document[_0x4ebdad(0x1f7)](_0x4ebdad(0x1f4))[_0x4ebdad(0x1f2)]='');const emoji_btn=document[_0x4ebdad(0x210)]('button');emoji_btn[_0x4ebdad(0x212)]='button',document[_0x4ebdad(0x1f7)]('chat-control')[_0x4ebdad(0x219)](emoji_btn),document[_0x4ebdad(0x1fd)]('button')[0x2]['innerHTML']=_0x4ebdad(0x1ee),document[_0x4ebdad(0x1fd)](_0x4ebdad(0x209))[0x2][_0x4ebdad(0x1e4)]='';const emoji_chat=document['createElement'](_0x4ebdad(0x1fa));emoji_chat['id']=_0x4ebdad(0x1e3),document[_0x4ebdad(0x1f7)](_0x4ebdad(0x1e9))[_0x4ebdad(0x219)](emoji_chat),document[_0x4ebdad(0x1f7)](_0x4ebdad(0x1e3))[_0x4ebdad(0x1f2)]=_0x4ebdad(0x21d);const BtnAdd_emoji=document['getElementsByTagName']('button')[0x2];BtnAdd_emoji[_0x4ebdad(0x215)](_0x4ebdad(0x1e8),OpenTab_emoji);const party_btn=document[_0x4ebdad(0x1fd)](_0x4ebdad(0x209))[0x1];party_btn[_0x4ebdad(0x215)](_0x4ebdad(0x1e8),remove_class);const all_btn=document[_0x4ebdad(0x1fd)]('button')[0x0];all_btn['addEventListener'](_0x4ebdad(0x1e8),remove_class1);function _0x3f6a(_0x348db3,_0x49d1f6){const _0x798b94=_0x798b();return _0x3f6a=function(_0x3f6a5d,_0x29d248){_0x3f6a5d=_0x3f6a5d-0x1e3;let _0x3f8355=_0x798b94[_0x3f6a5d];return _0x3f8355;},_0x3f6a(_0x348db3,_0x49d1f6);}function remove_class(){const _0x4cddf3=_0x4ebdad;document[_0x4cddf3(0x1fd)](_0x4cddf3(0x209))[0x2][_0x4cddf3(0x1e4)]='',document[_0x4cddf3(0x1f7)](_0x4cddf3(0x1e3))['style']=_0x4cddf3(0x21d);}function _0x798b(){const _0x4f214d=['2waGzDr','addEventListener','borderColor','16989750OEoklb','name','appendChild','main-menu','<span\x20style=\x22color:\x20blue\x22>[DEV]</span>\x20Shine\x20:','innerHTML','display:\x20none;','chat-emoji-room','className','includes','lastElementChild','toString','click','chat-room-inner','partition\x20right','chat-all-room','<span\x20style=\x22color:\x20yellow\x22>[VIP]</span>\x20Shine\x20:','red','EMOJI','remove','297gZEQDr','backgroundColor','style','list-container','endGame','outerHTML','banner','getElementById','8947662EToEjR','<span\x20style=\x22color:\x20blue\x22>[DEV]</span>\x20Vekk\x20:','div','354110GxJHjF','44188lMAZaV','getElementsByTagName','837ihwfVf','1019618xeuLUk','60136KYmQkv','tab','TypeError','getElementsByClassName','<div\x20class=\x22loop-holder\x22><div\x20class=\x22loop-holder__text\x22>丨Modded\x20By\x20Veky\x20and\x20Shine丨</div><div\x20class=\x22loop-holder__text\x22>丨Modded\x20By\x20Veky\x20and\x20Shine丨</div><div\x20class=\x22loop-holder__text\x22>丨Modded\x20By\x20Veky\x20and\x20Shine丨</div><div\x20class=\x22loop-holder__text\x22>丨Modded\x20By\x20Veky\x20and\x20Shine丨</div>','close-button','<span\x20style=\x22color:\x20yellow\x22>[VIP]</span>\x20Vekk\x20:','nick','<img\x20src=\x22https://i.imgur.com/LYwdFOc.png\x22\x20alt=\x22logo\x22>','button','display:\x20block;','advertisement-informer','getAttribute','block','3086517HVNAKR','chat-party-room','createElement','background','type','logo'];_0x798b=function(){return _0x4f214d;};return _0x798b();}function remove_class1(){const _0x30e0d9=_0x4ebdad;document['getElementsByTagName'](_0x30e0d9(0x209))[0x2][_0x30e0d9(0x1e4)]='',document[_0x30e0d9(0x1f7)]('chat-emoji-room')[_0x30e0d9(0x1f2)]=_0x30e0d9(0x21d);}function OpenTab_emoji(){const _0x37f9a7=_0x4ebdad;document[_0x37f9a7(0x1fd)](_0x37f9a7(0x209))[0x2][_0x37f9a7(0x1e4)]='active',document[_0x37f9a7(0x1fd)](_0x37f9a7(0x209))[0x1][_0x37f9a7(0x1e4)]='',document[_0x37f9a7(0x1fd)](_0x37f9a7(0x209))[0x0]['className']='',document[_0x37f9a7(0x1f7)](_0x37f9a7(0x1e3))[_0x37f9a7(0x1f2)]=_0x37f9a7(0x20a),document[_0x37f9a7(0x1f7)](_0x37f9a7(0x1eb))[_0x37f9a7(0x1f2)]=_0x37f9a7(0x21d),document['getElementById'](_0x37f9a7(0x20f))[_0x37f9a7(0x1f2)]=_0x37f9a7(0x21d);}function sleep(_0x2c9782){return new Promise(_0x73a109=>setTimeout(_0x73a109,_0x2c9782));}setInterval(async function(){const _0x8328f9=_0x4ebdad;try{var _0x4b140f=document[_0x8328f9(0x1f7)](_0x8328f9(0x1f4));if(_0x4b140f[_0x8328f9(0x20c)](_0x8328f9(0x1f2))[_0x8328f9(0x1e5)](_0x8328f9(0x20d)))document['getElementById']('ad-button-continue')[_0x8328f9(0x1e8)](),await sleep(0x96),document['getElementById'](_0x8328f9(0x1f4))[_0x8328f9(0x1f2)]='';else{}}catch(_0xccc1c1){if(_0xccc1c1[_0x8328f9(0x218)][_0x8328f9(0x1e7)]()==_0x8328f9(0x202)){}}},0x64),setInterval(function(){const _0x1cb9ca=_0x4ebdad;try{if(document[_0x1cb9ca(0x1f7)](_0x1cb9ca(0x1eb))[_0x1cb9ca(0x1e6)][_0x1cb9ca(0x203)](_0x1cb9ca(0x207))[0x0]['innerHTML']===_0x1cb9ca(0x1ec))document[_0x1cb9ca(0x1f7)](_0x1cb9ca(0x1eb))[_0x1cb9ca(0x1e6)][_0x1cb9ca(0x203)](_0x1cb9ca(0x207))[0x0][_0x1cb9ca(0x21c)]='<span\x20style=\x22color:\x20blue\x22>[DEV]</span>\x20Shine\x20:';else{if(document[_0x1cb9ca(0x1f7)](_0x1cb9ca(0x1eb))[_0x1cb9ca(0x1e6)][_0x1cb9ca(0x203)](_0x1cb9ca(0x207))[0x0][_0x1cb9ca(0x21c)]===_0x1cb9ca(0x206))document['getElementById'](_0x1cb9ca(0x1eb))[_0x1cb9ca(0x1e6)]['getElementsByClassName'](_0x1cb9ca(0x207))[0x0]['innerHTML']=_0x1cb9ca(0x1f9);else{if(document[_0x1cb9ca(0x1f7)](_0x1cb9ca(0x20f))['lastElementChild'][_0x1cb9ca(0x203)]('nick')[0x0][_0x1cb9ca(0x21c)]===_0x1cb9ca(0x1ec))document['getElementById'](_0x1cb9ca(0x20f))['lastElementChild'][_0x1cb9ca(0x203)](_0x1cb9ca(0x207))[0x0][_0x1cb9ca(0x21c)]=_0x1cb9ca(0x21b);else{if(document[_0x1cb9ca(0x1f7)](_0x1cb9ca(0x20f))[_0x1cb9ca(0x1e6)]['getElementsByClassName'](_0x1cb9ca(0x207))[0x0][_0x1cb9ca(0x21c)]===_0x1cb9ca(0x206))document['getElementById'](_0x1cb9ca(0x20f))[_0x1cb9ca(0x1e6)][_0x1cb9ca(0x203)](_0x1cb9ca(0x207))[0x0][_0x1cb9ca(0x21c)]='<span\x20style=\x22color:\x20blue\x22>[DEV]</span>\x20Vekk\x20:';else{}}}}}catch(_0x1c2f6f){if(_0x1c2f6f[_0x1cb9ca(0x218)][_0x1cb9ca(0x1e7)]()=='TypeError'){}}});