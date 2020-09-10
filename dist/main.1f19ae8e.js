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
})({"catCss.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n/*\u5F00\u59CB\u753B\u732B*/\n#cat {\n    position: relative;\n    height: 100%;\n    width: 100%;\n    left: 0;\n    top: 10px;\n    /*border: 1px solid black;*/\n}\n\n@media (min-width: 500px) {\n    #cat {\n        padding-bottom: 100%;\n        width: 100%;\n        height: 0px;\n        top: 50%;\n        transform: translateY(-50%)\n    }\n}\n\n/*\u753B\u732B\u8EAB\u4F53*/\n.catBody {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    width: 280px;\n    height: 252px;\n    border: 2px solid black;\n\n    border-radius: 280px 280px 120px 120px / 350px 347px 169px 182px;\n    background: rgb(211, 201, 191);\n    overflow: hidden;\n}\n\n.catBody::after {\n    position: absolute;\n    content: '';\n    display: block;\n    border-radius: 50%;\n    width: 300px;\n    height: 300px;\n    background: rgb(244, 173, 107);\n    /*transform: translate(-233px, -111px);*/\n    right: 50%;\n    margin-top: -70px;\n}\n\n.catBody::before {\n    position: absolute;\n    content: '';\n    display: block;\n    border-radius: 50%;\n    width: 300px;\n    height: 300px;\n    background: rgb(122, 123, 118);\n    left: 50%;\n    margin-top: -70px;\n}\n\n\n.catBody > div {\n    position: absolute;\n    height: 80px;\n    width: 88px;\n    background: rgb(244, 173, 107);\n    top: -38px;\n    right: 50%;\n    margin-right: -40px;\n    /*transform: translate(-46px, -11px);*/\n    border-radius: 50%;\n}\n\n/*\u753B\u5C3E\u5DF4*/\n.tail {\n    position: absolute;\n    border: 2px solid black;\n    width: 74px;\n    height: 74px;\n    background: white;\n    border-radius: 50%;\n    top: 50%;\n    left: 50%;\n    margin-left: 34px;\n    margin-top: -145px;\n    transform-origin: 50% 100%;\n    animation: tail-wave 300ms infinite linear;\n}\n\n/*\u753B\u5934*/\n.head {\n    position: absolute;\n    background: white;\n    width: 230px;\n    height: 202px;\n    border: 2px solid black;\n    left: 50%;\n    top: 50%;\n    margin-top: -83px;\n    margin-left: -115px;\n    /*transform: translate(-50%, -50%);*/\n    border-radius: 45% 45% 40% 40%/60% 60% 35% 35%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n}\n\n/*\u753B\u773C\u775B*/\n.head .eye > li {\n    width: 60px;\n    height: 20px;\n    border: 2px solid black;\n    border-radius: 50% 50% 100% 0% / 100% 100% 0% 0%;\n    border-bottom: none;\n    overflow: hidden;\n}\n\n.eye .leftLid {\n    transform: translate(-52px, 54px) rotate(8deg);\n}\n\n.eye .rightLid {\n    transform: translate(52px, 34px) rotate(-8deg);\n}\n\n.eye .leftLid::before {\n    content: '';\n    display: block;\n    border: 2px solid black;\n    margin-left: 11px;\n    margin-top: 15px;\n    width: 38px;\n    height: 6px;\n    border-color: black transparent transparent transparent;\n    border-radius: 50% 50% 0% 0%/100% 100% 0% 0%;\n}\n\n.eye .leftLid::after {\n    content: '';\n    display: block;\n    border: 2px solid black;\n    margin-left: 21px;\n    margin-top: -17px;\n    width: 22px;\n    height: 36px;\n    transform: translateY(-8px);\n    background: black;\n}\n\n.eye .rightLid::before {\n    content: '';\n    display: block;\n    border: 2px solid black;\n    margin-top: 15px;\n    margin-left: 11px;\n    width: 38px;\n    height: 6px;\n    border-color: black transparent transparent transparent;\n    border-radius: 60% 60% 0% 0%/100% 100% 0% 0%;\n}\n\n.eye .rightLid::after {\n    content: '';\n    display: block;\n    border: 2px solid black;\n    width: 22px;\n    height: 36px;\n    margin-left: 16px;\n    margin-top: -17px;\n    transform: translateY(-8px);\n    background: black;\n}\n\n/*\u753B\u8033\u6735*/\n.ear {\n    position: absolute;\n    border: 2px solid black;\n    top: 50%;\n    left: 50%;\n    border-radius: 3% 97% 85% 15% / 31% 42% 58% 69%;\n    border-color: black transparent transparent black;\n    background: white;\n    width: 80px;\n    height: 89px;\n    margin-top: -96px;\n}\n\n.ear.left {\n    margin-left: -104px;\n    transform: rotate(6deg);\n}\n\n.ear.right {\n    margin-left: 24px;\n    transform: rotate(-6deg) rotateY(180deg);\n}\n\n.mouse > li {\n    position: absolute;\n    border: 2px solid black;\n    top: 50%;\n    left: 50%;\n    margin-top: 76px;\n    width: 36px;\n    height: 15px;\n    border-radius: 72% 0% 100% 40%/60% 0% 100% 70%;\n    border-color: transparent transparent black black;\n}\n\n.mouse .left {\n    margin-left: -32px;\n    transform: translate(52px, 15px) rotate(-6deg);\n    animation: shakeForLeft 800ms infinite linear;\n    transform-origin: 100% 100%;\n}\n\n.mouse .right {\n    margin-left: -44px;\n    transform-origin: 100% 0%;\n    animation: shakeForRight 800ms infinite linear;\n}\n\n.nose > li {\n    position: absolute;\n    border: 2px solid black;\n    width: 16px;\n    height: 13px;\n    margin-top: 70px;\n    border-color: transparent transparent black transparent;\n}\n\n.nose .left {\n    transform: translate(-86%, -50%) rotate(26deg);\n}\n\n.nose .right {\n    transform: translate(-38%, -50%) rotate(-26deg) rotateY(180deg);\n}\n\n.nose {\n    position: absolute;\n}\n\n.nose:hover {\n    transform-origin: 50% 100%;\n    animation: shakeForNose 400ms 2 linear;\n}\n\n/* \u5934\u4E0A\u7684\u989C\u8272 */\n.head::after {\n    content: '';\n    display: block;\n    position: absolute;\n    content: '';\n    display: block;\n    top: 50%;\n    left: 50%;\n    width: 90px;\n    height: 184px;\n    background: linear-gradient(90deg,\n    rgba(244, 173, 107, 1) 50%,\n    rgba(122, 113, 108, 1) 50%);\n    border-radius: 52% 45% 56% 60%/65% 60% 40% 40%;\n    transform: translate(-51%, -50%) rotate(5deg);\n    margin-top: -60px;\n    z-index: 5;\n}\n\n.face > li {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: scale(0.4) translate(-50%, -50%);\n    background-repeat: no-repeat;\n}\n\n.face .left1 {\n    background-image: url('./images/pattern-left1.jpg');\n    width: 48px;\n    height: 66px;\n    margin-left: -100px;\n    margin-top: 43px;\n}\n\n.face .left2 {\n    background-image: url('./images/pattern-left2.jpg');\n    width: 34px;\n    height: 84px;\n    margin-left: -114px;\n    margin-top: 0px;\n}\n\n.face .right1 {\n    background-image: url('./images/pattern-right1.jpg');\n    width: 72px;\n    height: 56px;\n    margin-left: 58px;\n    margin-top: 46px;\n}\n\n.face .right2 {\n    background-image: url('./images/pattern-right2.jpg');\n    width: 34px;\n    height: 86px;\n    margin-left: 89px;\n    margin-top: 0px;\n}\n\n";
var _default = string;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _catCss = _interopRequireDefault(require("./catCss.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//设定一个闹钟
var player = {
  id: undefined,
  level: 100,
  ui: {
    fakeCss: document.querySelector('.fake-css'),
    realCss: document.querySelector('.real-css'),
    cssPlayer: document.querySelector('#css-player')
  },
  n: 1,
  init: function init() {
    player.bindEvents();
    player.start();
  },
  events: {
    "#btnPlay": 'start',
    "#btnPause": 'stop',
    "#btnFast": 'fast',
    "#btnNormal": 'normal',
    "#btnSlow": 'slow',
    "#btnReplay": 'replay'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _catCss.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.fakeCss.innerText = _catCss.default.substr(0, player.n);
    player.ui.realCss.innerHTML = _catCss.default.substr(0, player.n);
    player.ui.cssPlayer.scrollTop = player.ui.cssPlayer.scrollHeight;
  },
  start: function start() {
    player.id = setInterval(player.run, player.level);
  },
  stop: function stop() {
    //清除闹钟
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.stop();
    player.level = 200;
    player.start();
  },
  normal: function normal() {
    player.stop();
    player.level = 100;
    player.start();
  },
  fast: function fast() {
    player.stop();
    player.level = 0;
    player.start();
  },
  replay: function replay() {
    player.stop();
    player.n = 1;
    player.start();
  }
};
player.init();
},{"./catCss.js":"catCss.js"}],"../../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64191" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map