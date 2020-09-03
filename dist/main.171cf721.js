// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
var string = ".cat {\n    position: relative;\n}\n\n.head {\n    position: relative;\n    background: white;\n    width: 400px;\n    height: 352px;\n    border: 2px solid black;\n    left: 50%;\n    top: 200px;\n    margin-left: -200px;\n    border-radius: 45% 45% 40% 40%/60% 60% 35% 35%;\n    overflow: hidden;\n}\n\n.pattern {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    background-repeat: no-repeat;\n}\n\n.skin .pattern.left1 {\n    background-image: url('./images/pattern-left1.jpg');\n    transform: translate(-168px, 64px);\n    width: 48px;\n    height: 66px;\n}\n\n.skin .pattern.left2 {\n    background-image: url('./images/pattern-left2.jpg');\n    transform: translate(-198px, -20px);\n    width: 34px;\n    height: 84px;\n}\n\n.skin .pattern.right1 {\n    background-image: url('./images/pattern-right1.jpg');\n    transform: translate(95px, 72px);\n    width: 72px;\n    height: 56px;\n}\n\n.skin .pattern.right2 {\n    background-image: url('./images/pattern-right2.jpg');\n    transform: translate(156px, -20px);\n    width: 34px;\n    height: 86px;\n\n}\n\n.eye {\n    width: 120px;\n    height: 35px;\n    border: 2px solid black;\n    position: absolute;\n    border-radius: 50% 50% 0% 0%/100% 100% 0% 0%;\n    bottom: 98px;\n    border-bottom: none;\n    overflow: hidden;\n}\n\n.eye.left {\n    left: 50px;\n    transform: rotate(8deg);\n}\n\n.eye.right {\n    right: 50px;\n    transform: rotate(-8deg);\n\n}\n\n.eye.left::before {\n    content: '';\n    display: block;\n    border: 2px solid black;\n    position: absolute;\n    top: 26px;\n    left: 32px;\n    width: 60px;\n    height: 10px;\n    border-color: black transparent transparent transparent;\n    border-radius: 60% 60% 0% 0%/100% 100% 0% 0%;\n}\n\n.eye.left::after {\n    content: '';\n    display: block;\n    border: 2px solid black;\n    width: 38px;\n    height: 36px;\n    position: absolute;\n    left: 42px;\n    transform: translateY(-8px);\n    background: black;\n}\n\n.eye.right::before {\n    content: '';\n    display: block;\n    border: 2px solid black;\n    position: absolute;\n    top: 26px;\n    left: 32px;\n    width: 60px;\n    height: 10px;\n    border-color: black transparent transparent transparent;\n    border-radius: 60% 60% 0% 0%/100% 100% 0% 0%;\n}\n\n.eye.right::after {\n    content: '';\n    display: block;\n    border: 2px solid black;\n    width: 38px;\n    height: 36px;\n    position: absolute;\n    left: 42px;\n    transform: translateY(-8px);\n    background: black;\n}\n\n.lip {\n    border: 2px solid black;\n    width: 58px;\n    height: 25px;\n    position: absolute;\n    top: 300px;\n    border-radius: 72% 0% 100% 40%/60% 0% 100% 70%;\n    border-color: transparent transparent black black;\n}\n\n.mouse .lip.left {\n    left: 148px;\n    transform: rotate(-6deg);\n    animation: shakeForLeft 800ms infinite linear;\n    transform-origin: 100% 100%;\n}\n\n.mouse .lip.right {\n    right: 206px;\n    transform-origin: 100% 0%;\n    animation: shakeForRight 800ms infinite linear;\n}\n\n.noseWrapper:hover {\n    transform-origin: 50% 100%;\n    animation: shakeForNose 400ms 2 linear;\n}\n\n.nose {\n    border: 2px solid black;\n    position: relative;\n    width: 24px;\n    height: 20px;\n    border-color: transparent transparent black transparent;\n\n}\n\n.nose.left {\n    top: 286px;\n    left: 180px;\n    transform: rotate(26deg);\n}\n\n.nose.right {\n    top: 266px;\n    left: 192px;\n    transform: rotate(-26deg) rotateY(180deg);\n}\n\n.ear {\n    border: 2px solid black;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    border-radius: 3% 97% 85% 15% / 31% 42% 58% 69%;\n    border-color: black transparent transparent black;\n    background: white;\n    width: 140px;\n    height: 157px;\n}\n\n.ear.left {\n    /* width: 147px;\n    height: 177px; */\n    transform: translate(-185px, 2px) rotate(6deg);\n}\n\n.ear.right {\n    /* width: 160px;\n    height: 177px; */\n    transform: translate(64px, 18px) rotate(3deg) rotateY(180deg);\n}\n\n/* \u5934\u4E0A\u7684\u989C\u8272 */\n.head::before {\n    content: '';\n    display: block;\n    /* border: 2px solid black; */\n    width: 170px;\n    height: 320px;\n    position: absolute;\n    top: -100px;\n    left: 120px;\n    background: rgb(244, 173, 107);\n    background: linear-gradient(90deg,\n            rgba(244, 173, 107, 1) 50%,\n            rgba(122, 113, 108, 1) 50%);\n    border-radius: 52% 45% 56% 60%/65% 60% 40% 40%;\n    transform: rotate(5deg);\n    z-index: 5;\n}\n\n.cat .catBody {\n    position: absolute;\n    width: 500px;\n    height: 452px;\n    border: 2px solid black;\n    top: 50%;\n    left: 50%;\n    transform: translate(-250px, -64px);\n    border-radius: 280px 280px 120px 120px / 350px 347px 169px 182px;\n    background: rgb(211, 201, 191);\n    overflow: hidden;\n}\n\n.cat .catBody::before {\n    position: absolute;\n    content: '';\n    display: block;\n    border-radius: 50%;\n    width: 500px;\n    height: 500px;\n    background: rgb(244, 173, 107);\n    transform: translate(-233px, -111px);\n}\n\n.cat .catBody::after {\n    content: '';\n    display: block;\n    border-radius: 50%;\n    width: 500px;\n    height: 500px;\n    background: rgb(122, 123, 118);\n    position: absolute;\n    transform: translate(255px, -111px);\n}\n\n.cat .bodySkin.center {\n    position: absolute;\n    height: 100px;\n    width: 110px;\n    background: rgb(244, 173, 107);\n    top: 0;\n    left: 50%;\n    transform: translate(-46px, -11px);\n    border-radius: 50%;\n}\n\n.cat .tail {\n    border: 2px solid black;\n    width: 110px;\n    height: 110px;\n    position: absolute;\n    background: white;\n    border-radius: 50%;\n    top: 52px;\n    left: 50%;\n    margin-left: 42px;\n    ;\n}\n\n.cat .tail:hover {\n    transform-origin: 50% 100%;\n    animation: wave 300ms infinite linear;\n}";
var css1 = document.querySelector('.css1');
var css2 = document.querySelector('.css2');
var n = 0;
var id = setInterval(function () {
  n += 1;

  if (n > string.length) {
    window.clearInterval(id);
    return;
  }

  css1.innerText = string.substr(0, n);
  css2.innerHTML = string.substr(0, n);
  css1.scrollTop = css1.scrollHeight;
}, 0);
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.171cf721.js.map