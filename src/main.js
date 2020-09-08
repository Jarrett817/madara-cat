const string = ``
let fakeCss = document.querySelector('.fake-css')
let realCss = document.querySelector('.real-css')
let pre = document.querySelector('pre')

let n = 1;
let id = setInterval(() => {
    n += 1
    if (n > string.length) {
        window.clearInterval(id)
        return
    }
    fakeCss.innerText = string.substr(0, n)
    realCss.innerHTML = string.substr(0, n)
    pre.scrollTop = pre.scrollHeight

}, 20)