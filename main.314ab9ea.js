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
})({"wUtS":[function(require,module,exports) {
var seatsContainer = document.querySelector('.hall__seats-place');
seatsContainer.addEventListener('click', function (e) {
  var target = e.target.closest('.hall__seat:not(.hall__seat--occupied)');
  if (!target) return;
  target.classList.toggle('hall__seat--selected');
});
},{}],"FmEW":[function(require,module,exports) {
var elements = {
  selectForm: document.querySelector('#select-movie'),
  selectList: document.querySelector('#select-list'),
  select: document.querySelector('#select-open')
};
var isSelectOpen = false;
var onClickOutside = function onClickOutside(el, callback) {
  document.addEventListener('click', function (e) {
    if (!el.contains(e.target)) callback();
  });
};
var toggleSelectList = function toggleSelectList() {
  elements.selectList.classList.toggle('select-movie__list--active');
  isSelectOpen = !isSelectOpen;
  elements.select.setAttribute('aria-expanded', "".concat(isSelectOpen));
};
var closeSelectList = function closeSelectList() {
  elements.selectList.classList.remove('select-movie__list--active');
  isSelectOpen = !isSelectOpen;
  elements.select.setAttribute('aria-expanded', "".concat(isSelectOpen));
};
var handleOptionClick = function handleOptionClick(e) {
  var option = e.target.closest('.select-movie__option');
  if (!option) return;
  elements.select.textContent = option.textContent;
  closeSelectList();
};
elements.selectList.addEventListener('click', handleOptionClick);
elements.select.addEventListener('click', toggleSelectList);
},{}],"d6sW":[function(require,module,exports) {
"use strict";

require("./components/seats.js");
require("./components/my-select.js");
},{"./components/seats.js":"wUtS","./components/my-select.js":"FmEW"}]},{},["d6sW"], null)
//# sourceMappingURL=/movie-ticket-booking/main.314ab9ea.js.map