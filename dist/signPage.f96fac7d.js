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
})({"src/images/forbes.png":[function(require,module,exports) {
module.exports = "/forbes.4e581cc4.png";
},{}],"src/images/elle.png":[function(require,module,exports) {
module.exports = "/elle.9b9ca02e.png";
},{}],"src/images/vogue.png":[function(require,module,exports) {
module.exports = "/vogue.e247b380.png";
},{}],"src/images/pinterest.png":[function(require,module,exports) {
module.exports = "/pinterest.49598fe4.png";
},{}],"src/images/instagram.png":[function(require,module,exports) {
module.exports = "/instagram.5727c175.png";
},{}],"src/images/facebook.png":[function(require,module,exports) {
module.exports = "/facebook.72f9ce01.png";
},{}],"src/images/twitter.png":[function(require,module,exports) {
module.exports = "/twitter.8ca883f5.png";
},{}],"src/images/chevron.svg":[function(require,module,exports) {
module.exports = "/chevron.450016b9.svg";
},{}],"src/pages/signPage/signPage.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/pages/signPage/signPage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSignPage = getSignPage;
var _forbes = _interopRequireDefault(require("../../images/forbes.png"));
var _elle = _interopRequireDefault(require("../../images/elle.png"));
var _vogue = _interopRequireDefault(require("../../images/vogue.png"));
var _pinterest = _interopRequireDefault(require("../../images/pinterest.png"));
var _instagram = _interopRequireDefault(require("../../images/instagram.png"));
var _facebook = _interopRequireDefault(require("../../images/facebook.png"));
var _twitter = _interopRequireDefault(require("../../images/twitter.png"));
var _chevron = _interopRequireDefault(require("../../images/chevron.svg"));
require("./signPage.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getSignPage() {
  var section = document.createElement("section");
  section.className = "section-sign";
  var container = document.createElement("div");
  container.className = "container";
  var signBlock = document.createElement("div");
  signBlock.className = "sign-block";
  signBlock.innerHTML = "\n        <div class=\"header-content\"></div>\n        <div class=\"footer-box\">\n            <p class=\"footer-text\">\n                \u201CThe brand justifies its name. Freedom with elegance, \n                something that every woman deserves.\u201D\n            </p>\n            <img class=\"footer-img\" src=\"".concat(_forbes.default, "\" alt=\"\">\n            <img class=\"footer-img\" src=\"").concat(_elle.default, "\" alt=\"\">\n            <img class=\"footer-img\" src=\"").concat(_vogue.default, "\" alt=\"\">\n        </div>\n        <div class=\"footer-block\">\n            <h2 class=\"footer-title\">E L I R A</h2>\n            <div class=\"block-content\">\n                <div class=\"content_box\">\n                    <h3 class=\"content_title\">Support</h3>\n                    <ul class=\"content_list\">\n                        <li class=\"content_item\">\n                            <a href=\"#\" class=\"content_link\">FAQ</a>\n                        </li>\n                        <li class=\"content_item\">\n                            <a href=\"#\" class=\"content_link\">Virtual shopping</a>\n                        </li>\n                        <li class=\"content_item\">\n                            <a href=\"#\" class=\"content_link\">Shipping and Returns</a>\n                        </li>\n                        <li class=\"content_item\">\n                            <a href=\"#\" class=\"content_link\">Ring sizer</a>\n                        </li>\n                        <li class=\"content_item\">\n                            <a href=\"#\" class=\"content_link\">Contact Us</a>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"content_box\">\n                    <h3 class=\"content_title\">Company</h3>\n                    <ul class=\"content_list\">\n                        <li class=\"content_item\">\n                            <a href=\"/about\" class=\"content_link\">About Us</a>\n                        </li>\n                        <li class=\"content_item\">\n                            <a href=\"/stores\" class=\"content_link\">Stores</a>\n                        </li>\n                        <li class=\"content_item\">\n                            <a href=\"#\" class=\"content_link\">What\u2019s new?</a>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"content_box\">\n                    <h3 class=\"content_title title\">Get notified upon new arrivals</h3>\n                    <input class=\"content-input\" type=\"text\" placeholder=\"Your Email-Id Here\">\n                </div>\n                <div class=\"content_box\">\n                    <ul class=\"content_list\">\n                        <li class=\"content_item\">\n                            <a href=\"#\" class=\"content_link\">\n                                <img class=\"content-img\" src=\"").concat(_pinterest.default, "\" alt=\"\">\n                            </a>\n                        </li>\n                        <li class=\"content_item\">\n                            <a href=\"#\" class=\"content_link\">\n                                <img class=\"content-img\" src=\"").concat(_instagram.default, "\" alt=\"\">\n                            </a>\n                        </li>\n                        <li class=\"content_item\">\n                            <a href=\"#\" class=\"content_link\">\n                                <img class=\"content-img\" src=\"").concat(_facebook.default, "\" alt=\"\">\n                            </a>\n                        </li>\n                        <li class=\"content_item\">\n                            <a href=\"#\" class=\"content_link\">\n                                <img class=\"content-img\" src=\"").concat(_twitter.default, "\" alt=\"\">\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"conditions\">\n            <p class=\"conditions-text\">Terms and conditions</p>\n            <p class=\"conditions-text\">Privacy Policiy</p>\n            <p class=\"conditions-text\">@2021 Elira Inc</p>\n            <div class=\"conditions-box\">\n                <p class=\"conditions-text\">Lang</p>\n                <button class=\"conditions-btn\" type=\"button\">\n                    USA\n                    <img class=\"conditions-img\" src=\"").concat(_chevron.default, "\" alt=\"\">\n                </button>\n            </div>\n        </div>\n    ");
  section.append(container);
  container.append(signBlock);
  return section;
}
},{"../../images/forbes.png":"src/images/forbes.png","../../images/elle.png":"src/images/elle.png","../../images/vogue.png":"src/images/vogue.png","../../images/pinterest.png":"src/images/pinterest.png","../../images/instagram.png":"src/images/instagram.png","../../images/facebook.png":"src/images/facebook.png","../../images/twitter.png":"src/images/twitter.png","../../images/chevron.svg":"src/images/chevron.svg","./signPage.css":"src/pages/signPage/signPage.css"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60373" + '/');
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
      });

      // Enable HMR for CSS by default.
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/signPage.f96fac7d.js.map