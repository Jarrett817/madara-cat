import string from './catCss.js'
import './style.css'

//设定一个闹钟

const player = {
    id: undefined,
    level: 100,
    ui: {
        fakeCss: document.querySelector('.fake-css'),
        realCss: document.querySelector('.real-css'),
        cssPlayer: document.querySelector('#css-player')
    },
    n: 0,

    init: () => {
        player.bindEvents()
        player.start()
    },
    events: {
        "#btnPlay": 'start',
        "#btnPause": 'stop',
        "#btnFast": 'fast',
        "#btnNormal": 'normal',
        "#btnSlow": 'slow',
        "#btnReplay": 'replay'
    },
    bindEvents: () => {

        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    run: () => {
        let array = string.split('\n')
        if (player.n > array.length-1) {
            window.clearInterval(player.id)
            return
        }

        player.ui.fakeCss.innerText += array[player.n]+'\n'
        player.ui.realCss.innerHTML += array[player.n]+'\n'
        player.n += 1


        player.ui.cssPlayer.scrollTop = player.ui.cssPlayer.scrollHeight

    },
    start: () => {
        player.id = setInterval(player.run, player.level)
    },
    stop: () => {
        //清除闹钟
        window.clearInterval(player.id)
    },
    slow: () => {
        player.stop()
        player.level = 200
        player.start()
    },
    normal: () => {
        player.stop()
        player.level = 150
        player.start()
    },
    fast: () => {
        player.stop()
        player.level = 50
        player.start()
    },
    replay: () => {
        player.stop()
        player.n = 0
        player.ui.fakeCss.innerText =''
        player.ui.realCss.innerHTML =''
        player.start()
    }
}

player.init()



