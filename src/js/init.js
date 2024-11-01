var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/qcobjects-sdk/public/QCObjects-SDK.js
var require_QCObjects_SDK = __commonJS({
  "node_modules/qcobjects-sdk/public/QCObjects-SDK.js"() {
    "use strict";
    var global2 = (() => {
      var Wt = Object.defineProperty;
      var Zn = /* @__PURE__ */ __name((w, r, f) => r in w ? Wt(w, r, { enumerable: true, configurable: true, writable: true, value: f }) : w[r] = f, "Zn");
      var c = /* @__PURE__ */ __name((w, r) => Wt(w, "name", { value: r, configurable: true }), "c"), It = ((w) => typeof __require < "u" ? __require : typeof Proxy < "u" ? new Proxy(w, { get: (r, f) => (typeof __require < "u" ? __require : r)[f] }) : w)(function(w) {
        if (typeof __require < "u")
          return __require.apply(this, arguments);
        throw new Error('Dynamic require of "' + w + '" is not supported');
      });
      var V = /* @__PURE__ */ __name((w, r) => () => (r || w((r = { exports: {} }).exports, r), r.exports), "V");
      var S = /* @__PURE__ */ __name((w, r, f) => (Zn(w, typeof r != "symbol" ? r + "" : r, f), f), "S");
      var zt = V((Go, We) => {
        c(/* @__PURE__ */ __name(function w(r) {
          "use strict";
          if (typeof Object.defineProperty < "u" && typeof r < "u")
            try {
              Object.defineProperty(r, "__qcobjects_sdk__", { enumerable: true, configurable: false, writable: false, value: w });
            } catch {
              typeof r.__qcobjects_sdk__ < "u" && (r.__qcobjects_sdk__.__loaded__ = true);
            }
          if (typeof r.__qcobjects_sdk__.__loaded__ > "u") {
            if (r.__qcobjects_sdk__.__loaded__ = true, typeof r > "u")
              throw Error("Top context empty: It should either global, module or window");
            var f = r;
            r.global = f;
            var p = typeof window < "u" && typeof window.self < "u" && window === window.self, u = typeof We < "u", v = CONFIG.get("remoteImportsPath"), g = CONFIG.get("relativeImportPath"), b = !CONFIG.get("useLocalSDK");
            b && !u ? CONFIG.set("remoteImportsPath", "https://sdk.qcobjects.dev/v2.4/src/js/") : CONFIG.set("relativeImportPath", "qcobjects-sdk/src/js/"), typeof r._DOMCreateElement > "u" && (r._DOMCreateElement = function(y) {
              var T;
              return p ? T = document.createElement(y) : T = {}, T;
            });
            var O;
            if (p && !u)
              O = [Import("org.qcobjects.i18n_messages", function() {
              }, b), Import("org.qcobjects.models", function() {
              }, b), Import("org.qcobjects.components", function() {
              }, b), Import("org.qcobjects.components.grid", function() {
              }, b), Import("org.qcobjects.components.list", function() {
              }, b), Import("org.qcobjects.components.slider", function() {
              }, b), Import("org.qcobjects.components.notifications", function() {
              }, b), Import("org.qcobjects.components.splashscreen", function() {
              }, b), Import("org.qcobjects.controllers", function() {
              }, b), Import("org.qcobjects.controllers.grid", function() {
              }, b), Import("org.qcobjects.controllers.list", function() {
              }, b), Import("org.qcobjects.controllers.slider", function() {
              }, b), Import("org.qcobjects.controllers.form", function() {
              }, b), Import("org.qcobjects.controllers.swagger", function() {
              }, b), Import("org.qcobjects.effects", function() {
              }, b), Import("org.qcobjects.modal.controllers", function() {
              }, b), Import("org.qcobjects.views", function() {
              }, b), Import("org.qcobjects.tools.canvas", function() {
              }, b), Import("org.qcobjects.tools.layouts", function() {
              }, b), Import("org.qcobjects.cloud.auth.session.usertoken", function() {
              }, b), Import("org.qcobjects.cloud.auth.session.data", function() {
              }, b)];
            else {
              u && CONFIG.set("remoteImportsPath", CONFIG.get("basePath", ""));
              var G = "qcobjects-sdk/src/js/";
              O = [Import(G + "org.qcobjects.models", function() {
              }, b), Import(G + "org.qcobjects.components", function() {
              }, b), Import(G + "org.qcobjects.controllers", function() {
              }, b), Import(G + "org.qcobjects.views", function() {
              }, b), Import(G + "org.qcobjects.effects", function() {
              }, b), Import(G + "org.qcobjects.tools.canvas", function() {
              }, b), Import(G + "org.qcobjects.tools.layouts", function() {
              }, b), Import(G + "org.qcobjects.cloud.auth.session.usertoken", function() {
              }, b), Import(G + "org.qcobjects.cloud.auth.session.data", function() {
              }, b)];
            }
            let P = GlobalSettings.__start__.bind(r);
            r._sdk_ = Promise.all(O).then(() => {
              CONFIG.set("useSDK", true), CONFIG.set("remoteImportsPath", v), CONFIG.set("relativeImportPath", g), P();
            });
          }
        }, "w"), "__qcobjects_sdk__").call(null, typeof We == "object" && typeof We.exports == "object" ? We.exports = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global2 < "u" ? global2 : {} : typeof global2 == "object" ? global2 : typeof window == "object" ? window : {});
      });
      var Xt = V((Ho, Bt) => {
        var Vn = zt();
        Bt.exports = Vn;
      });
      var Zt = V((er, Pe) => {
        c(/* @__PURE__ */ __name(function w(r) {
          "use strict";
          if (typeof Object.defineProperty < "u" && typeof r < "u")
            try {
              Object.defineProperty(r, "__qcobjects__", { enumerable: true, configurable: false, writable: false, value: w });
            } catch {
              typeof r.__qcobjects__ < "u" && (r.__qcobjects__.loaded = true);
            }
          if (typeof r.__qcobjects__.loaded > "u") {
            let $e = /* @__PURE__ */ __name(function(t) {
              u ? Ge.push(t.bind(window)) : typeof f < "u" && Ge.push(t.bind(f));
            }, "$e");
            c($e, "Ready"), r.__qcobjects__.loaded = true;
            var f = r;
            r.global = f;
            var p = typeof window < "u" && "Deno" in window, u = typeof window < "u" && typeof window.self < "u" && window === window.self && !p, v = typeof Pe < "u", g = c(function() {
            }, "deno_require"), b = c(function() {
              return p ? g(...arguments) : It(...arguments);
            }, "_require_"), O = c(function(t) {
              var n = typeof t.prototype < "u" ? t.prototype.toString : function() {
                return "";
              };
              typeof t.prototype < "u" && (t.prototype.toString = function() {
                var e = ["__qcobjects__", "__qcobjects_sdk__", "__loaded__", "ComplexStorageCache", "css", "append", "attachIn", "debug", "info", "warn", "QC_Append", "set", "get", "done", "componentDone", "_new_", "__new__", "Class", "ClassFactory", "New", "Export", "Package", "Import", "subelements", "componentLoader", "buildComponents", "Controller", "View", "VO", "Service", "serviceLoader", "JSONService", "ConfigService", "SourceJS", "SourceCSS", "ArrayList", "ArrayCollection", "Effect", "Timer", "sum", "avg", "table", "max", "min", "range", "matrix", "matrix2d", "matrix3d", "unique", "uniqueId", "shortCode", "NamespaceRef"], o;
                return e.includes(this.name) ? o = this.name + "{ [QCObjects native code] }" : o = n.call(this), o;
              });
            }, "_protected_code_");
            O(Function);
            var G = c(function(t) {
              var n = [];
              for (var e in t)
                (typeof t[e]).toLowerCase() === "function" && n.push(t[e]);
              return n;
            }, "_methods_");
            String.prototype.__mAll__ = function(t) {
              var n = [];
              return this.replace(t, function() {
                var e = Array.prototype.slice.call(arguments, 0, -2);
                e.input = arguments[arguments.length - 1], e.index = arguments[arguments.length - 2], n.push(e);
              }), n;
            }, typeof String.prototype.matchAll > "u" && (String.prototype.matchAll = String.prototype.__mAll__);
            var P = c(function(t) {
              var n;
              return u ? n = document.createElement(t) : n = {}, n;
            }, "_DOMCreateElement");
            if (!u) {
              let t = b("fs");
            }
            var y = c(function(t) {
              var n = c(function() {
                var e = /* @__PURE__ */ new WeakSet(), o = 0;
                return function(s, a) {
                  if (typeof a == "object" && a !== null) {
                    if (e.has(a))
                      return o += 1, o <= 3 ? ct(a) : null;
                    e.add(a);
                  }
                  return a;
                };
              }, "getCircularReplacer");
              return JSON.stringify(t, n());
            }, "_DataStringify");
            if (u) {
              var T = c(function(n) {
                return [...this.querySelectorAll(n)];
              }, "subelements");
              Element.prototype.subelements = T, HTMLDocument.prototype.subelements = T, HTMLElement.prototype.subelements = T, typeof ShadowRoot < "u" && (ShadowRoot.prototype.subelements = T);
            }
            if (u)
              try {
                r = typeof window.top < "u" ? window.top : window, r._allowed_ = true;
              } catch {
                try {
                  r = document, r._allowed_ = true;
                } catch {
                  try {
                    r = f, r._allowed_ = true;
                  } catch {
                    r = {}, r._allowed_ = true;
                  }
                }
              }
            else
              typeof f < "u" && (r = f);
            var L, D, ae = "quick-component:not([loaded]),component:not([loaded])";
            if (D = function() {
              var t = "";
              if (u) {
                var n = r.document.baseURI.split("?")[0].split("/");
                n.pop(), t = n.join("/") + "/";
              } else {
                var e;
                try {
                  e = b("process");
                } catch {
                }
                typeof e < "u" ? t = `${e.cwd()}/` : t = "";
              }
              return t;
            }(), u) {
              "Promise" in r || (r.Promise = function(t) {
                var n = { then() {
                }, catch() {
                }, _then(e) {
                  this.then.call(n, e);
                }, _catch(e) {
                  this.catch.call(n, e);
                } };
                return t.call(n, n._then, n._catch), n;
              }), typeof r.console > "u" && (r.console = function() {
              }, r.console.prototype.log = function(t) {
              }), L = function() {
                return typeof document < "u" && document.domain !== "" ? document.domain : "localhost";
              }();
              var le = function() {
                var t = r[(![] + [])[+!+[] + +!+[]] + (typeof ![])[+!+[]] + (typeof [])[(+!+[] + +!+[]) * (+!+[] + +!+[])] + (![] + [])[+!+[]] + (!![] + [])[+[]] + ([] + [] + [][[]])[+[+!+[] + [+[]]] / (+!+[] + +!+[])] + (typeof ![])[+!+[]] + ([] + [] + [][[]])[+!+[]]]["h" + (typeof ![])[+!+[]] + (![] + [])[+!+[] + (+!+[] + +!+[])] + (!![] + [])[+[]]].toLowerCase();
                return t;
              }(), he = function() {
                return typeof cordova < "u";
              }();
            } else {
              var le = "secret";
              L = "localhost";
            }
            r._asyncLoad = [];
            var be = c(function(t, n) {
              var e = { func: t, args: n, dispatch() {
                this.func.apply(null, this.args);
              } };
              return r._asyncLoad.push(e), e;
            }, "asyncLoad");
            if (u) {
              var ee = c(function() {
                document.readyState === "complete" && r._asyncLoad.map(function(t) {
                  t.dispatch.call(t);
                });
              }, "_fireAsyncLoad");
              document.onreadystatechange = ee;
            } else
              typeof r.global < "u" && (r.global._fireAsyncLoad = function() {
                r._asyncLoad.map(function(t) {
                  t.dispatch.call(t);
                });
              });
            r.asyncLoad = be;
            var E = c(function() {
              return { debugEnabled: true, infoEnabled: true, warnEnabled: true, debug(t) {
                this.debugEnabled && console.log("\x1B[35m%s\x1B[0m", `[DEBUG][${performance.now().toLocaleString()}] ${t}`);
              }, info(t) {
                var n;
                this.infoEnabled && (u ? n = "\x1B[103m%s\x1B[0m" : n = "\x1B[33m%s\x1B[0m", console.info(n, `[INFO][${performance.now().toLocaleString()}] ${t}`));
              }, warn(t) {
                this.warnEnabled && console.warn("\x1B[31m%s\x1B[0m", `[WARN][${performance.now().toLocaleString()}] ${t}`);
              } };
            }, "Logger"), l = new E();
            l.debugEnabled = false, l.infoEnabled = true, r.logger = l;
            var U = { _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode(t) {
              var n = "", e, o, s, a, i, d, h, m = 0;
              for (t = U._utf8_encode(t); m < t.length; )
                e = t.charCodeAt(m++), o = t.charCodeAt(m++), s = t.charCodeAt(m++), a = e >> 2, i = (e & 3) << 4 | o >> 4, d = (o & 15) << 2 | s >> 6, h = s & 63, isNaN(o) ? d = h = 64 : isNaN(s) && (h = 64), n = n + this._keyStr.charAt(a) + this._keyStr.charAt(i) + this._keyStr.charAt(d) + this._keyStr.charAt(h);
              return n;
            }, decode(t) {
              var n = "", e, o, s, a, i, d, h, m = 0;
              for (t = t.replace(/[^A-Za-z0-9+/=]/g, ""); m < t.length; )
                a = this._keyStr.indexOf(t.charAt(m++)), i = this._keyStr.indexOf(t.charAt(m++)), d = this._keyStr.indexOf(t.charAt(m++)), h = this._keyStr.indexOf(t.charAt(m++)), e = a << 2 | i >> 4, o = (i & 15) << 4 | d >> 2, s = (d & 3) << 6 | h, n = n + String.fromCharCode(e), d !== 64 && (n = n + String.fromCharCode(o)), h !== 64 && (n = n + String.fromCharCode(s));
              return n = U._utf8_decode(n), n;
            }, _utf8_encode(t) {
              t = t.replace(/rn/g, "n");
              for (var n = "", e = 0; e < t.length; e++) {
                var o = t.charCodeAt(e);
                o < 128 ? n += String.fromCharCode(o) : o > 127 && o < 2048 ? (n += String.fromCharCode(o >> 6 | 192), n += String.fromCharCode(o & 63 | 128)) : (n += String.fromCharCode(o >> 12 | 224), n += String.fromCharCode(o >> 6 & 63 | 128), n += String.fromCharCode(o & 63 | 128));
              }
              return n;
            }, _utf8_decode(t) {
              for (var n = "", e = 0, o = 0, s = 0, a = 0, i; e < t.length; )
                o = t.charCodeAt(e), o < 128 ? (n += String.fromCharCode(o), e++) : o > 191 && o < 224 ? (a = t.charCodeAt(e + 1), n += String.fromCharCode((o & 31) << 6 | a & 63), e += 2) : (a = t.charCodeAt(e + 1), i = t.charCodeAt(e + 2), n += String.fromCharCode((o & 15) << 12 | (a & 63) << 6 | i & 63), e += 3);
              return n;
            } }, Y = c(function(t, n) {
              var e = c(function(o, s) {
                var a = 2e3, i = 0, d = setInterval(function() {
                  s.call() ? (clearInterval(d), o.call(), l.debug("Ejecuting " + o.name + " after wait")) : i < a ? (i += 1, l.debug("WAIT UNTIL " + o.name + " is true, " + i.toString() + " cycles")) : (l.debug("Max execution time for " + o.name + " expression until true"), clearInterval(d));
                }, 1);
              }, "_waitUntil");
              setTimeout(function() {
                e(t, n);
              }, 1);
            }, "waitUntil");
            if (typeof x > "u")
              var x = { getItem(t) {
                return Object.hasOwnProperty.call(this, t) ? this[t] : null;
              }, setItem(t, n) {
                this[t] = n;
              }, removeItem(t) {
                delete this[t];
              } };
            var A = c(function(t) {
              var n, e, o;
              if (n = t.index, typeof n < "u") {
                e = t.load, o = t.alternate;
                var s = this.getID(n), a = x.getItem(s);
                if (this.isEmpty(a)) {
                  var i = e.call(null, { cachedObjectID: s, cachedResponse: a, cache: this });
                  this.save(n, i), l.debug("RESPONSE OF {{cachedObjectID}} CACHED".replace("{{cachedObjectID}}", s));
                } else {
                  var d = o.call(null, { cachedObjectID: s, cachedResponse: a, cache: this });
                  l.debug("RESPONSE OF {{cachedObjectID}} IS ALREADY CACHED ".replace("{{cachedObjectID}}", s));
                }
              } else
                throw new Error("ComplexStorageCache: index is undefined");
              return this;
            }, "ComplexStorageCache");
            if (A.prototype.getItem = function(t) {
              var n = x.getItem(t);
              return this.isEmpty(n) ? null : JSON.parse(n);
            }, A.prototype.setItem = function(t, n) {
              x.setItem(t, y(n));
            }, A.prototype.isEmpty = function(t) {
              var n = false;
              switch (true) {
                case typeof t > "u":
                case (typeof t == "string" && t === ""):
                case (typeof t == "string" && t === "undefined"):
                case (typeof t == "number" && t === 0):
                case t === null:
                  n = true;
                  break;
                default:
                  n = false;
              }
              return n;
            }, A.prototype.getID = function(t) {
              var n;
              return typeof t < "u" && (n = "cachedObject_" + U.encode(y(t).replace(/\{|\}|,/g, "_"))), n;
            }, A.prototype.save = function(t, n) {
              var e = this.getID(t);
              l.debug("CACHING THE RESPONSE OF {{cachedObjectID}} ".replace("{{cachedObjectID}}", e)), this.setItem(e, n);
            }, A.prototype.getCached = function(t) {
              var n = this.getID(t);
              return this.getItem(n);
            }, A.prototype.clear = function() {
              Object.keys(x).filter(function(t) {
                return t.startsWith("cachedObject_");
              }).map(function(t) {
                x.removeItem(t);
              });
            }, u) {
              var Fe = false;
              try {
                var Oe = Object.defineProperty({}, "passive", { get() {
                  return Fe = true, Fe;
                } });
                window.addEventListener("testPassive", null, Oe), window.removeEventListener("testPassive", null, Oe);
              } catch {
              }
              var ze = c(function() {
                return Fe ? { passive: true } : false;
              }, "captureFalse");
            }
            u && (Element.prototype.find = function(t) {
              var n = [], e = document.subelements(t);
              return e.map(function(o, s) {
                typeof e[s] < "u" && e[s].parentNode.tagName === this.parentNode.tagName && n.push(De(o, new Object()));
              }), n;
            });
            var _e, ko = function() {
              var t = Object.prototype.hasOwnProperty;
              return function(n) {
                if (typeof n != "object")
                  throw TypeError("Object prototype may only be an Object or null. The type is " + typeof n);
                var e = c(function() {
                }, "QCObjects");
                e.prototype = n;
                var o = new e();
                if (arguments.length > 1) {
                  var s = Object(arguments[1]);
                  for (var a in s)
                    t.call(s, a) && (o[a] = s[a]);
                }
                return o;
              };
            }();
            typeof Object.assign != "function" && Object.defineProperty(Object, "assign", { value: c(function(n, e) {
              "use strict";
              if (n === null)
                throw new TypeError("Cannot convert undefined or null to object");
              for (var o = Object(n), s = 1; s < arguments.length; s++) {
                var a = arguments[s];
                if (a !== null)
                  for (var i in a)
                    Object.prototype.hasOwnProperty.call(a, i) && (o[i] = a[i]);
              }
              return o;
            }, "assign"), writable: true, configurable: true });
            var Rt = c(function(t) {
              return !!(typeof t == "function" && t.toString().startsWith("class"));
            }, "__is_raw_class__"), ct = c(function(t) {
              var n;
              switch (true) {
                case typeof t == "string":
                  n = t;
                  break;
                case typeof t == "number":
                  n = t;
                  break;
                case typeof t == "object":
                  n = Object.assign({}, t);
                  break;
                case typeof t == "function":
                  n = t.bind({});
                  break;
                case Rt(t):
                  n = c(class extends t {
                  }, "_value_");
                  break;
                default:
                  break;
              }
              return n;
            }, "_LegacyCopy"), pe = {}, de = {}, ut = [], Ge = [], Be = c(function(t) {
              var n = "";
              return typeof t == "function" && Object.hasOwnProperty.call(t, "name") && t.name !== "" ? n = t.name : typeof t < "u" && typeof t.constructor == "function" && t.constructor.name !== "" ? n = t.constructor.name : typeof t < "u" && typeof t.constructor == "object" && (n = t.constructor.toString().replace(/\[(.*?)\]/g, "$1").split(" ").slice(1).join("")), n;
            }, "ObjectName"), De = c(function(t, n) {
              for (var e in t)
                if (typeof t[e] < "u")
                  try {
                    n[e] = t[e];
                  } catch {
                  }
              return n;
            }, "_Cast"), Te = c(function(t, n) {
              for (var e in t)
                if (typeof t[e] < "u" && typeof t[e] != "function")
                  try {
                    n[e] = t[e];
                  } catch {
                  }
                else if (typeof t[e] == "function")
                  try {
                    n[e] = t[e].bind(n);
                  } catch (o) {
                    l.warn(o);
                  }
              return n;
            }, "_CastProps"), Dn = c(function() {
              return ["__proto__", "prototype", "Object", "Map", "defineProperty", "indexOf", "toString", "__instanceID"].indexOf(arguments[0]) !== -1;
            }, "__is__forbidden_name__"), ye = c(function(n) {
              var e = "";
              switch (true) {
                case (Rt(n) && !!n.name):
                  e = n.name;
                  break;
                case (typeof n == "object" && !!n.constructor && !!n.constructor.name && n.constructor.name !== ""):
                  e = n.constructor.name;
                  break;
                case (!!n && !!n.__classType && n.__classType !== ""):
                  e = n.__classType;
                  break;
                case (!!n && !!n.__definition && !!n.__definition.__classType && n.__definition.__classType !== ""):
                  e = n.__definition.__classType;
                  break;
                case (typeof n == "function" && !!n.name):
                  e = n.name;
                  break;
                default:
                  e = Be(n);
                  break;
              }
              return e;
            }, "__getType__"), Ae = c(function(n, e) {
              return !!(typeof n < "u" && n !== null && ((Ie(n) || He(n)) && n.hierarchy().includes(e) || ye(n) === e || Be(n) === e || typeof n === e));
            }, "is_a"), ft = c(function(t) {
              if (typeof t < "u")
                if (u)
                  try {
                    r[t.name] = t, window[t.name] = t;
                  } catch {
                  }
                else
                  typeof f < "u" && (Object.hasOwnProperty.call(f, t.name) || (f[t.name] = t));
            }, "__make_global__"), kt = c(function(t, n) {
              var e = t.name || ye(t);
              return t.__definition.__classType = e, typeof n < "u" && (t.__definition.__namespace = n), pe[e] = t, r[e] = pe[e], r[e];
            }, "__register_class__"), pt = c(function(t, n) {
              return kt(t, n);
            }, "RegisterClass");
            ft(pt);
            var me = c(function() {
              var t = {}, n, e, o;
              switch (arguments.length) {
                case 0:
                  return class {
                  };
                case 1:
                  n = arguments[0], e = c(class {
                  }, "type"), o = {};
                  break;
                case 2:
                  n = arguments[0], e = c(class {
                  }, "type"), o = arguments[1];
                  break;
                case 3:
                  n = arguments[0], e = arguments[1], o = arguments[2];
                  break;
                default:
                  break;
              }
              if (typeof e != "function")
                throw new Error("Class type must be a function or class");
              if (Dn.call(this, n))
                throw new Error(`${n} is not an allowed word in the name of a class`);
              return typeof e.__definition < "u" && (o.__definition = Object.assign(ct(e.__definition), e)), t[e.name] = e, typeof o > "u" || o === null ? o = {} : o = ct(o), typeof o.__instanceID < "u" && delete o.__instanceID, pe[n] = class extends t[e.name] {
                constructor() {
                  var a;
                  arguments.length > 0 ? a = { ...arguments[0] } : a = {};
                  super(a);
                  S(this, "__classType", n);
                  S(this, "__definition", { ...o });
                  let i = this;
                  if (_e = typeof _e > "u" || _e === null ? 0 : _e + 1, i.__instanceID || Object.defineProperty(i, "__instanceID", { value: _e, writable: false }), typeof i.__definition < "u" && Object.keys(i.__definition).filter(function(d) {
                    return isNaN(d) && !["name", "__instanceID", "__classType", "__definition"].includes(d);
                  }).forEach(function(d) {
                    typeof i.__definition[d] == "function" ? i[d] = i.__definition[d].bind(i) : i[d] = i.__definition[d];
                  }), G(pe[i.__classType]).map(function(d) {
                    i[d.name] = d.bind(i);
                  }), G(i.__definition).map(function(d) {
                    i[d.name] = d.bind(i);
                  }), i.body)
                    if (typeof i.__definition > "u" || !Object.hasOwnProperty.call(i.__definition, "body") || typeof i.__definition.body > "u")
                      try {
                        u ? i.body = P(i.__definition.__classType) : i.body = {};
                      } catch {
                        i.body = {};
                      }
                    else
                      Object.hasOwnProperty.call(i.__definition, "body") && (i.body = i.__definition.body);
                  try {
                    if (typeof i.__new__ == "function" ? i.__new__.call(i, a) : typeof super.__new__ == "function" && (i.__new__ = super.__new__.bind(i), i.__new__.call(i, a)), typeof i == "object" && Object.hasOwnProperty.call(i, "_new_") && typeof i._new_.isCalled > "u")
                      try {
                        i._new_.call(i, a), i._new_.isCalled = true;
                      } catch (d) {
                        l.warn(`${i.__classType}._new_() failed with error: ${d}`);
                      }
                  } catch (d) {
                    l.warn(d);
                  }
                }
                static hierarchy(a) {
                  var i = c(function(m) {
                    return Object.hasOwnProperty.call(m, "__classType") ? m.__classType : ye.call(a, m);
                  }, "__classType"), d = c((m) => typeof m < "u" && typeof m.__proto__ < "u" && m.__proto__ !== null ? (i(m) !== "" ? [i(m)] : []).concat(d(m.__proto__)) : [], "__hierarchy__proto__");
                  (typeof a > "u" || a === null) && (a = this);
                  var h = [];
                  return h.push(i(a)), h = h.concat(d(a.__proto__)), h;
                }
                static getParentClass() {
                  return Object.getPrototypeOf(this.prototype.constructor);
                }
                __new__(a) {
                  Te(a, this);
                }
                _new_() {
                }
                getClass() {
                  return Object.getPrototypeOf(this.constructor);
                }
                css(a) {
                  return typeof this.body < "u" && this.body.style !== "undefined" && (l.debug("body style"), this.body.style = De(a, this.body.style)), this.body.style;
                }
                hierarchy() {
                  var a = this;
                  return this.getClass().hierarchy(a);
                }
                append(i) {
                  l.debug("append: start"), Ae(i, "Component") && (l.debug("append: child is a Component"), l.debug(`appending the body of ${i.name}`));
                  var i = arguments.length > 0 ? arguments[0] : this.body;
                  typeof this.body < "u" && (l.debug("append element"), arguments.lenght > 0 ? (l.debug("append to element"), this.body.append(i), typeof this.childs > "u" && (this.childs = []), this.childs.push(i)) : u && (l.debug("append to body"), document.body.append(i)));
                }
                attachIn(a) {
                  if (u)
                    for (var i = document.subelements(a), d = 0, h = i.length; d < h; d++)
                      i[d].append(this);
                  else
                    throw new Error("attachIn not yet implemented for non browser platforms");
                }
              }, pe[n] = Te(o, pe[n]), pe[n].__definition = o, pe[n].__definition.__classType = n, pe[n].__definition.__new__ = c(function(a) {
                Te(a, this);
              }, "__new__"), r[n] = pe[n], r[n];
            }, "Class");
            me.prototype.toString = function() {
              return "Class(name, type, definition) { [QCObjects native code] }";
            };
            var C = c(function(t) {
              var n;
              if (t !== null && t.indexOf(".") > -1) {
                var e = t.split(".").slice(0, t.split(".").length - 1).join("."), o = t.split(".").slice(-1).join(""), s = ne(e), a = typeof s < "u" ? s.filter((i) => Ie(i) && (i.__definition.__classType === o || typeof i == "function" && !!i.name)).reverse() : [];
                if (a.length > 0)
                  n = a[0];
                else
                  throw Error(`Class ${t} not found.`);
              } else
                t !== null && Object.hasOwnProperty.call(pe, t) && (n = pe[t]);
              return n;
            }, "ClassFactory");
            u && (Element.prototype.append = c(function(n) {
              He(n) || typeof n.body < "u" ? this.appendChild(n.body) : this.appendChild(n);
            }, "QC_Append"), Element.prototype.render = c(function(n) {
              var e = this, o = c(function(s, a) {
                if (typeof document.implementation.createHTMLDocument < "u") {
                  var i = document.implementation.createHTMLDocument("");
                  i.innerHTML = a, i.body.subelements("*").map(function(d) {
                    return s.append(d);
                  });
                }
              }, "_appendVDOM");
              if (typeof this.innerHTML < "u")
                try {
                  this.innerHTML += n;
                } catch {
                  o(e, n);
                }
              else
                o(e, n);
            }, "QC_Render"));
            var qt = c(function(t, n, e) {
              return C(t)[n];
            }, "_super_");
            qt.prototype.toString = function() {
              return "_super_(className,classMethodName,params) { [QCObjects native code] }";
            };
            var te = c(function(t, n) {
              return n = arguments.length > 1 ? n : {}, typeof t > "u" ? new Object() : new t(n);
            }, "New");
            te.prototype.toString = function() {
              return "New(QCObjectsClassName, args) { [QCObjects native code] }";
            };
            var F = c(function(t) {
              return ft(t);
            }, "Export");
            if (F.prototype.toString = function() {
              return "Export(function or symbol) { [QCObjects native code] }";
            }, !u) {
              var Xe = c(function(t) {
                let n = b("fs");
                var e = null;
                try {
                  var o = [`${r.CONFIG.get("projectPath")}${r.CONFIG.get("relativeImportPath")}`, `${r.CONFIG.get("basePath")}${r.CONFIG.get("relativeImportPath")}`, `${r.CONFIG.get("projectPath")}`, `${r.CONFIG.get("basePath")}`, `${r.CONFIG.get("relativeImportPath")}`, `${process.cwd()}${r.CONFIG.get("relativeImportPath")}`, `${process.cwd()}/node_modules/` + t, `${process.cwd()}/node_modules`, `${process.cwd()}`, "node_modules", "./", ""].concat(Pe.paths);
                  o = o.filter((s) => n.existsSync(s + "/" + t)), o.length > 0 && (e = o[0], l.info(t + " is Installed."));
                } catch (s) {
                  console.log(s);
                }
                return e;
              }, "findPackageNodePath");
              F(Xe);
            }
            me("_Crypt", Object, { last_string: "", last_key: "", construct: false, _new_(t) {
              var n = t.string, e = t.hasOwnProperty.call(t, "key") ? t.key : null;
              this.__new__(t), e = e === null ? this.__instanceID : e, this.last_key = e, this.last_string = n, this.construct = true;
            }, _encrypt() {
              for (var t = this.string, n = this.key, e = "", o, s, a = 0; a < t.length; a++)
                o = t.substr(a, 1), s = n.substr(a % n.length - 1, 1), o = String.fromCharCode(o.charCodeAt(0) + s.charCodeAt(0)), e += o;
              return this.last_string = U.encode(e), this.last_string;
            }, _decrypt() {
              var t = this.string, n = this.key, e = "", o, s;
              t = U.decode(t);
              for (var a = 0; a < t.length; a++)
                o = t.substr(a, 1), s = n.substr(a % n.length - 1, 1), o = String.fromCharCode(o.charCodeAt(0) - s.charCodeAt(0)), e += o;
              return this.last_string = e, this.last_string;
            }, encrypt(t, n) {
              var e = te(C("_Crypt"), { string: t, key: n !== "" ? n : "12345678ABC" });
              return e._encrypt();
            }, decrypt(t, n) {
              var e = te(C("_Crypt"), { string: t, key: n !== "" ? n : "12345678ABC" });
              return e._decrypt();
            } });
            var Hn = c(function(t) {
              return C("_Crypt").encrypt(y(t), le);
            }, "_CryptObject"), Lt = c(function(t) {
              return t === "" ? {} : JSON.parse(C("_Crypt").decrypt(t, le));
            }, "_DecryptObject"), Ft = c(function() {
              var t = 1e3, n = C("_Crypt").encrypt((Math.random() * t).toString().replace(".", ""), (/* @__PURE__ */ new Date()).getTime().toString()), e = C("_Crypt").encrypt((Math.random() * t).toString().replace(".", ""), new Date((/* @__PURE__ */ new Date()).getTime() - 1e3 * 1e3).getTime().toString()), o = e.list().map((s, a) => n.list()[a] === s ? null : s).filter((s) => s !== null).join("");
              return o;
            }, "shortCode"), qo = Ft;
            me("InheritClass", class {
            }, {});
            let we = /* @__PURE__ */ __name(class extends C("InheritClass") {
              constructor() {
                super(...arguments);
                S(this, "component", null);
                S(this, "__definition", {});
                S(this, "__classType", "Processor");
                this.processors = we.processors, this.process = we.process.bind(this), this.processObject = we.processObject.bind(this), this.setProcessor = we.setProcessor.bind(this), this.execute = we.execute.bind(this);
              }
              static setProcessor(e) {
                typeof e == "function" && e.name !== "" && (this.processors[e.name] = e);
              }
              static execute(e, o, s) {
                var a = typeof e < "u" && e !== null ? e.processorHandler : this;
                return a.processors[o].bind(a).apply(a, [e, ...s.split(",")]);
              }
              static process(e, o = null) {
                var s = o !== null ? o.processorHandler : te(we, { component: null });
                return typeof e == "string" && Object.keys(s.processors).map(function(a) {
                  [...e.matchAll(new RegExp("\\$" + a + "\\((.*)\\).*", "g"))].map(function(i) {
                    var d = `$${a}(${i[1]})`;
                    e = e.replace(d, s.execute.bind(s).call(s, o, a, i[1]));
                  });
                }), e;
              }
              static processObject(e, o = null) {
                var s = o === null ? this : o.processorHandler;
                return typeof s > "u" && (s = new we({ component: o })), typeof e == "object" ? Object.keys(e).map(function(a) {
                  typeof e[a] == "object" && !e[a].hasOwnProperty.call(e[a], "call") ? e[a] = s.processObject.bind(s)(e[a], o) : typeof e[a] == "string" && (e[a] = s.process.bind(s)(e[a], o));
                }) : typeof e == "string" && (e = s.process.bind(s)(e, o)), e;
              }
            }, "we"), oe = we;
            c(oe, "Processor"), S(oe, "processors", { config(e, o) {
              return r.CONFIG.get(o, "");
            }, ENV(e, o) {
              return typeof process < "u" ? process.env[o] : "";
            }, global(e, o) {
              return typeof f < "u" ? f[o] : "";
            } }), oe.__definition = {}, oe.__classType = "Processor", pt(oe, "com.qcobjects"), ft(oe);
            let Ot = /* @__PURE__ */ __name(class {
              static get instance() {
                if (this._instance === null) {
                  var n = new Ot();
                  n._CONFIG = { relativeImportPath: "", remoteImportsPath: "", remoteSDKPath: "https://sdk.qcobjects.dev/v2.4/", asynchronousImportsLoad: false, removePackageScriptAfterLoading: true, componentsBasePath: "", delayForReady: 0, preserveComponentBodyTag: false, useConfigService: false, routingWay: "hash", useSDK: true, useLocalSDK: false, basePath: D }, n._CONFIG_ENC = null, this._instance = n;
                }
                return this._instance;
              }
              static set instance(n) {
                this._instance = n;
              }
            }, "Ot"), je = Ot;
            c(je, "ConfigSettings"), S(je, "_instance", null), S(je, "_CONFIG_ENC", null), pe.ConfigSettings = je, me("CONFIG", Object, { get _CONFIG_ENC() {
              return C("ConfigSettings").instance._CONFIG_ENC;
            }, get _CONFIG() {
              return C("ConfigSettings").instance._CONFIG;
            }, set(t, n) {
              l.debug(`CONFIG.set  ${t}: ${n}`), t === "basePath" && (D = n);
              var e;
              try {
                e = function(o) {
                  o._CONFIG_ENC === null && (o._CONFIG_ENC = C("_Crypt").encrypt(y({}), le));
                  var s = o._CONFIG_ENC.valueOf(), a = o._CONFIG.valueOf();
                  return Te(a, Lt(s));
                }(C("ConfigSettings").instance);
              } catch (o) {
                e = {}, console.error(o), l.debug("failed to encrypt config");
              }
              e[t] = n, C("ConfigSettings").instance._CONFIG_ENC = Hn(e), Object.hasOwnProperty.call(C("ConfigSettings").instance, "_CONFIG") && Object.hasOwnProperty.call(C("ConfigSettings").instance._CONFIG, t) && (C("ConfigSettings").instance._CONFIG[t] = n);
            }, get(t, n) {
              var e;
              try {
                var o = function(s) {
                  s._CONFIG_ENC === null && (s._CONFIG_ENC = C("_Crypt").encrypt(y({}), le));
                  var a = s._CONFIG_ENC.valueOf(), i = s._CONFIG.valueOf();
                  return Te(i, Lt(a));
                }(C("ConfigSettings").instance);
                typeof o[t] < "u" ? e = o[t] : typeof n < "u" && (e = n);
              } catch (s) {
                console.error(s), l.debug("Something wrong when trying to get CONFIG values"), l.debug("No config value for: " + t), e = n;
              }
              return oe.processObject.call(oe, e);
            } }), F(Y), F(qt), F(A), F(C), F(P), F(Ft), F(ye), F(Ae);
            var He = c(function(t) {
              return !!(typeof t == "object" && Object.hasOwnProperty.call(t, "__classType") && t.__instanceID && Object.hasOwnProperty.call(t, "__definition") && typeof t.__definition < "u");
            }, "isQCObjects_Object"), Ie = c(function(t) {
              return !!(typeof t == "function" && !t.__instanceID && t.__definition && typeof t.__definition < "u" && t.__definition.__classType);
            }, "isQCObjects_Class"), ne = c(function(t, n) {
              return de.hasOwnProperty.call(de, t) && typeof de[t] < "u" && de[t].hasOwnProperty.call(de[t], "length") && de[t].length > 0 && typeof n < "u" && n.hasOwnProperty.call(n, "length") && n.length > 0 ? (n.filter(function(e) {
                return Ie(e);
              }).map(function(e) {
                e.__definition.__namespace = t, e.__namespace = t;
              }), de[t] = de[t].concat(n)) : typeof n < "u" && (typeof n == "object" && n.hasOwnProperty.call(n, "length") ? n.filter(function(e) {
                return Ie(e);
              }).map(function(e) {
                e.__definition.__namespace = t, e.__namespace = t;
              }) : Ie(n) && (n.__definition.__namespace = t, n.__namespace = t), de[t] = n), Object.hasOwnProperty.call(de, t) && de[t].map(function(e) {
                kt(e, t);
              }), Object.hasOwnProperty.call(de, t) ? de[t] : void 0;
            }, "Package");
            ne.prototype.toString = function() {
              return "Package(namespace, classes) { [QCObjects native code] }";
            }, ne("com.qcobjects", [oe]);
            var $n = c(function(t) {
              let e = ne(t).filter((o) => Ie(o)).map((o) => ({ [o.__definition.__classType]: o })).reduce((o, s) => Object.assign(o, s));
              return t.split(".").map((o) => ({ [o]: e })).reverse().reduce((o, s) => (s[Object.keys(s)] = o, s));
            }, "NamespaceRef"), ht = c(function() {
              var t, n = c(function() {
              }, "ready"), e = false;
              if (!(arguments.length < 1)) {
                arguments.length === 1 ? t = arguments[0] : arguments.length === 2 ? (t = arguments[0], n = arguments[1]) : arguments.length > 2 && (t = arguments[0], n = arguments[1], e = arguments[2], l.debug("[Import] Setting external=" + e.toString() + " resource to import: " + t)), e ? l.debug("[Import] Registering external resource to import: " + t) : l.debug("[Import] Registering local resource to import: " + t);
                var o;
                return u ? (o = new Promise(function(s, a) {
                  var i = c(function() {
                    var m = false, _ = 0;
                    for (var I in de)
                      _++;
                    return _ < ut.length ? m = false : m = true, m;
                  }, "allPackagesImported"), d = c(function(m) {
                    ut.push(n), i() && ut.map(function(_) {
                      Ge.push(_);
                    }), u && r.CONFIG.get("removePackageScriptAfterLoading") && m.target.remove(), s.call(o, { _imported_: m.target, _package_name_: t });
                  }, "readyImported");
                  if (!de.hasOwnProperty.call(de, t)) {
                    var h = P("script");
                    h.type = r.CONFIG.get("sourceType", "text/javascript"), h.async = !!r.CONFIG.get("asynchronousImportsLoad"), h.onreadystatechange = function() {
                      h.readyState === "complete" && d.call();
                    }, h.onload = d, h.onerror = function(m) {
                      a.call(o, { _imported_: h, _package_name_: t });
                    }, h.src = e ? r.CONFIG.get("remoteImportsPath") + t + ".js" : D + r.CONFIG.get("relativeImportPath") + t + ".js", document.getElementsByTagName("head")[0].appendChild(h);
                  }
                }), o.catch(function() {
                  l.debug("Import: Error loading a package ");
                })) : o = new Promise(function(s, a) {
                  try {
                    var i = Xe(t), d = "";
                    if (i !== null)
                      d = i + "/" + t;
                    else {
                      var h = Xe(t + ".js");
                      h !== null ? d = h + "/" + t + ".js" : d = D + r.CONFIG.get("relativeImportPath") + t;
                    }
                    try {
                      s.call(o, { _imported_: b(`${d}`), _package_name_: t });
                    } catch (m) {
                      a.call(o, { _imported_: null, _package_name_: t, error: m });
                    }
                  } catch (m) {
                    a.call(o, { _imported_: null, _package_name_: t, error: m });
                  }
                }).catch(function(s) {
                  l.debug("Something happened when importing " + t), console.warn(s);
                }), o.catch(function(s) {
                  l.warn(y(s));
                }), o;
              }
            }, "Import");
            ht.prototype.toString = function() {
              return "Import(packagename,ready,external) { [QCObjects native code] }";
            }, u && (Element.prototype.Cast = c(function(e) {
              e.__definition.body = this;
              var e = te(e);
              return e;
            }, "QC_Object")), me("TagElements", Array, { show() {
              this.map(function(t) {
                return t.style.opacity = 1;
              });
            }, hide() {
              this.map(function(t) {
                return t.style.opacity = 0;
              });
            }, effect() {
              var t = [...arguments].slice(1), n = arguments[0];
              (typeof n).toLowerCase() === "string" && (n = C(n)), this.map(function(e) {
                return n.apply.apply(n, [e].concat(t));
              });
            }, findElements(t) {
              var n = te(C("TagElements"));
              if (u)
                for (var e in this)
                  typeof e == "number" && typeof this[e] != "function" && this[e].hasOwnProperty.call(this[e], "subelements") && n.push(this[e].subelements(t));
              return n;
            } });
            var Un = c(function(t, n) {
              var e = te(C("TagElements"));
              if (u)
                for (var o = document.subelements(t), s = [], a = 0; a < o.length; a++)
                  typeof n < "u" && o[a].hasOwnProperty.call(o[a], "innerHTML") && (o[a].innerHTML = n), s.indexOf(a) < 0 && (e.push(o[a]), s.push(a));
              return e;
            }, "Tag"), Wn = $e, mt = c(function(t) {
              var n = c(function() {
                Ge.map(function(e, o) {
                  typeof e == "function" && (e.call(), delete Ge[o]);
                });
              }, "_execReady");
              r.CONFIG.get("delayForReady") > 0 ? u ? setTimeout(n.bind(window), r.CONFIG.get("delayForReady")) : typeof f < "u" && setTimeout(n.bind(f), r.CONFIG.get("delayForReady")) : n.call(r);
            }, "_Ready");
            u ? (window.onload = mt, he && document.addEventListener("deviceready", mt, ze)) : f.onload = mt;
            class Ut extends C("InheritClass") {
              constructor({ instance: n, name: e, fget: o, fset: s, value: a }) {
                super({ instance: n, name: e, fget: o, fset: s, value: a }), this._new_({ instance: n, name: e, fget: o, fset: s, value: a });
              }
              _new_({ instance: n, name: d, fget: o, fset: s, value: a }) {
                var i = this, d = typeof d > "u" ? Be(i) : d;
                Object.defineProperty(n, d, { set(h) {
                  let m = h;
                  l.debug("value changed " + d);
                  var _;
                  typeof s < "u" && typeof s == "function" ? _ = s(m) : _ = m, n["_" + d] = _;
                }, get() {
                  let h = n["_" + d];
                  l.debug("returning value " + d);
                  var m = c(function(I) {
                    return typeof I == "object" && Object.hasOwnProperty.call(I, "value") ? I.value : I;
                  }, "is_ddo"), _;
                  return typeof o < "u" && typeof o == "function" ? _ = o(m(h)) : _ = m(h), _;
                } });
              }
            }
            __name(Ut, "Ut");
            c(Ut, "DDO"), F(Ut);
            class wt {
              constructor({ component: n, template: e }) {
                S(this, "template", "");
                S(this, "__definition", {});
                this.component = n, this.template = e;
              }
              assign(n) {
                var e = this;
                if (typeof e.component > "u")
                  throw new Error("DefaultTemplateHandler.assign: component is undefined");
                if (typeof e.component.processorHandler > "u")
                  throw new Error("DefaultTemplateHandler.assign: component.processorHandler is undefined");
                var o = e.component.processorHandler;
                o.component = e.component;
                var s = typeof e.template < "u" ? e.template : "";
                typeof n == "object" ? [...Object.keys(n)].map(function(a) {
                  var i = n[a];
                  if (typeof i == "string" || typeof i == "number" || !isNaN(i))
                    try {
                      i = oe.processObject.bind(o).call(o, i, e.component), s = s.replace(new RegExp(`{{${a}}}`, "g"), i);
                    } catch (d) {
                      throw l.warn(`${e.component.name} could not parse processors.`), Error(`${e.component.name} could not parse processors. Reason: ${d.message}`);
                    }
                }) : l.debug(`${e.component.name}.data is not an object`);
                try {
                  s = oe.processObject.call(o, s, e.component);
                } catch (a) {
                  throw l.warn(`${e.component.name} could not parse processors.`), Error(`${e.component.name} could not parse processors. Reason: ${a.message}`);
                }
                return s;
              }
            }
            __name(wt, "wt");
            c(wt, "DefaultTemplateHandler"), wt.__definition = {}, pt(wt, "com.qcobjects");
            var zn = c(function(t, n) {
              let e = t.path.replace(/{(.*?)}/g, "(?<$1>.*)");
              return { ...[...n.matchAll(new RegExp(e, "g"))][0].groups };
            }, "__routing_params__"), Bn = c(function(t, n) {
              return t.filter(function(e) {
                var o = e.path.replace(/{(.*?)}/g, "(?<$1>.*)");
                return new RegExp(o, "g").test(n);
              }).reverse();
            }, "__valid_routings__"), Gt = c(function(t, n) {
              return t.includes(n);
            }, "__valid_routing_way__"), Xn = c(function(t, n) {
              var e = t.getAttribute("shadowed") === null, o = t.getAttribute("template-source") === null, s = t.getAttribute("shadowed") === "true", a = t.getAttribute("cached") === null, i = t.getAttribute("cached") === "true", d = typeof r.CONFIG.get("tplextension") < "u" ? r.CONFIG.get("tplextension") : "html";
              d = t.getAttribute("tplextension") !== null ? t.getAttribute("tplextension") : d;
              var h = t.getAttribute("name"), m = t.getAttribute("componentClass") !== null ? t.getAttribute("componentClass") : "Component";
              let _ = r.CONFIG.get("preserveComponentBodyTag") ? h !== null ? "com.qcobjects.components." + h + ".ComponentBody" : "com.qcobjects.components.ComponentBody" : m;
              h = h !== null ? h : C(_) && typeof C(_).name < "u" ? C(_).name : "";
              var I = C(_), N = _ !== "Component" && typeof I < "u" && typeof I.tplsource == "string" && I.tplsource !== "", H = o && N ? I.tplsource : o ? "default" : t.getAttribute("template-source");
              l.debug(`template source for  ${h} is ${H} `), l.debug(`type for ${h} is ${ye(I)} `);
              var M;
              M = gt({ COMPONENTS_BASE_PATH: r.CONFIG.get("componentsBasePath"), COMPONENT_NAME: h, TPLEXTENSION: d, TPL_SOURCE: H }), r.CONFIG.get("preserveComponentBodyTag") && ne(h !== "" ? "com.qcobjects.components." + h : "com.qcobjects.components", [me("ComponentBody", C("Component"), { name: h, tplsource: H, tplextension: d, reload: true })]);
              var j = c(function() {
                var B = e ? I && I.shadowed || C("Component").shadowed : s, K = { __parent__: n, name: h, cached: a ? C("Component").cached : i, shadowed: B, tplextension: d, body: r.CONFIG.get("preserveComponentBodyTag") ? P("componentBody") : t, templateURI: M, tplsource: H };
                (typeof h > "u" || h === "" || h === null) && delete K.name, M === "" && delete K.templateURI;
                var Q = te(I, K);
                return r.CONFIG.get("preserveComponentBodyTag") && t.append(Q), Q;
              }, "__create_component_instance_"), X = j.call(this);
              return X;
            }, "_buildComponentFromElement_"), Dt = c(function(t, n) {
              var e = [];
              return u ? e = t.map(function(o) {
                return Xn(o, n);
              }) : l.debug("[_buildComponentsFromElements_] not implemented for Non-Browser environments"), e;
            }, "_buildComponentsFromElements_");
            ne("com.qcobjects", [c(class extends C("InheritClass") {
              constructor({ templateURI: e = "", template: o, tplsource: s = "default", url: a = "", name: i = "", method: d = "GET", data: h = {}, reload: m = false, shadowed: _ = false, cached: I = true, _body: N = P("div"), __promise__: H = null, __shadowRoot: M, body: j, shadowRoot: X, splashScreenComponent: B, controller: K, view: Q }) {
                super(...arguments);
                S(this, "validRoutingWays", ["pathname", "hash", "search"]);
                S(this, "basePath", D);
                S(this, "domain", L);
                S(this, "templateHandler", "DefaultTemplateHandler");
                S(this, "processorHandler", null);
                S(this, "routingWay", null);
                S(this, "routingNodes", []);
                S(this, "routings", []);
                S(this, "routingPath", "");
                S(this, "routingPaths", []);
                S(this, "_componentHelpers", []);
                S(this, "subcomponents", []);
                S(this, "splashScreenComponent");
                S(this, "controller");
                S(this, "view");
                S(this, "effect");
                S(this, "method", "GET");
                S(this, "cached", true);
                S(this, "__promise__", null);
                S(this, "__namespace");
                var W = this;
                typeof W.name > "u" && l.warn("A name is not defined for " + ye(W)), W.routingWay = r.CONFIG.get("routingWay"), W.processorHandler = te(oe, { component: W }), W.data = typeof W.data > "u" || W.data === null ? {} : W.data, W.data = Object.assign(W.data, W.dataAttributes), W.createServiceInstance().then(function(Ze) {
                  typeof W.__new__ == "function" && W.__new__.call(W, W), W._generateRoutingPaths(W.body).then(function() {
                    W._reroute_().then(function() {
                      return W.rebuild().then(function() {
                        l.info(`Component._new_ The component ${W.name} was built successfully!`);
                      }).catch(function(Ve) {
                        l.warn(`Component._new_ Something went wrong building the component ${W.name}`), console.error(Ve);
                      });
                    });
                  });
                });
              }
              set body(e) {
                var o = this;
                o._body = e;
              }
              get body() {
                var e = this;
                return e._body;
              }
              set cacheIndex(e) {
                l.debug("[cacheIndex] This property is readonly");
              }
              get cacheIndex() {
                var e = this, o = y(e.routingPath);
                return U.encode(e.name + o);
              }
              set parsedAssignmentText(e) {
                l.debug("[parsedAssignmentText] This property is readonly");
              }
              get parsedAssignmentText() {
                var e = this;
                if (e._parsedAssignmentText = e.parseTemplate(e.template), typeof e._parsedAssignmentText > "u")
                  throw Error(`[Component][${this.name}][parsedAssignmentText] Could not generate content!`);
                return e._parsedAssignmentText;
              }
              set shadowRoot(e) {
                var o = this;
                typeof o.__shadowRoot > "u" ? o.__shadowRoot = e : l.debug("[shadowRoot] This property can only be assigned once!");
              }
              get shadowRoot() {
                var e = this;
                return e.__shadowRoot;
              }
              set routingSelected(e) {
                l.debug("[routingSelected] This is a read-only property of the component");
              }
              get routingSelected() {
                var e = this;
                return Bn(e.routings, e.routingPath);
              }
              set routingParams(e) {
                l.debug("[routingParams] This is a read-only property of the component");
              }
              get routingParams() {
                var e = this;
                return [{}].concat(e.routingSelected.map(function(o) {
                  return zn(o, e.routingPath);
                })).reduce(function(o, s, a) {
                  return Object.assign(o, s);
                });
              }
              createServiceInstance() {
                var e = this, o = e.body, s = this.data, a, i = e.getClass().__definition, d = u && o.getAttribute("serviceClass") !== null ? o.getAttribute("serviceClass") : null;
                return new Promise(function(h, m) {
                  var _ = !!(Object.hasOwnProperty.call(o, "enableServiceClass") && o.enableServiceClass || !Object.hasOwnProperty.call(o, "enableServiceClass")), I = !!(u && o.getAttribute("response-to") !== null && o.getAttribute("response-to") === "data"), N = !!(u && o.getAttribute("response-to") !== null && o.getAttribute("response-to") === "template");
                  if (_ && d !== null && (a = C(d)), !I && i && Object.hasOwnProperty.call(i, "responseTo") ? I = i.responseTo === "data" : !I && Object.hasOwnProperty.call(C("Component"), "responseTo") && (I = C("Component").responseTo === "data"), !N && i && Object.hasOwnProperty.call(i, "responseTo") ? N = i.responseTo === "template" : !N && Object.hasOwnProperty.call(C("Component"), "responseTo") && (N = C("Component").responseTo === "template"), typeof a < "u" && typeof _ < "u" && _ === true && (I || N)) {
                    l.info("Loading service " + d);
                    var H = te(a, { data: s });
                    yt(H).then(function({ request: M, service: j }) {
                      var X;
                      typeof j.JSONresponse < "u" && j.JSONresponse !== null ? X = j.JSONresponse : X = j.template, I && (typeof s == "object" && typeof X == "object" ? s = Object.assign(s, X) : s = X, e.data = s), e.serviceInstance = H, e.serviceData = s, N && (e.template = X), h(X);
                    }, function(M) {
                      l.debug(`Service loading rejected for ${d} in ${e.name}`), m(M);
                    }).catch(function(M) {
                      throw l.debug("Something went wroing while trying to load the service " + d), Error(`Error loading ${d} for ${e.name}. Detail: ${M}`);
                    });
                  } else
                    h(null);
                });
              }
              _bindroute_() {
                var e = this;
                e._bindroute_.loaded ? l.debug(`Routes already bound to popstate events for ${e.name}`) : (u && e.hostElements("a").map(function(o) {
                  return o.oldclick = o.onclick, o.onclick = function(s) {
                    var a = true;
                    r.global.get("routingPaths") || r.global.set("routingPaths", []);
                    var i = r.CONFIG.get("routingWay"), d = s.target[i];
                    return r.global.get("routingPaths").includes(d) && s.target[i] !== document.location[i] && s.target.href !== document.location.href ? (l.debug("A ROUTING WAS FOUND: " + d), window.history.pushState({ href: s.target.href }, s.target.href, s.target.href), C("Component").route(), a = false) : l.debug("NO ROUTING FOUND FOR: " + d), typeof s.target.oldclick < "u" && typeof s.target.oldclick == "function" && s.target.oldclick.call(s.target, s), a;
                  }, null;
                }), this._bindroute_.loaded = true);
              }
              done(e) {
                var o;
                if (typeof e < "u") {
                  var { request: s, component: a } = e;
                  o = Promise.resolve({ request: s, component: a });
                }
                return o;
              }
              createControllerInstance() {
                var e;
                if (u) {
                  if (typeof this.body > "u")
                    throw new Error("The component has no body");
                  var o = this.body.getAttribute("controllerClass");
                  o || (o = "Controller"), e = C(o), typeof e < "u" && (this.controller = te(e, { component: this }));
                }
                return new Promise((s, a) => {
                  if (u && typeof e < "u" && typeof this.controller < "u") {
                    if (typeof this.controller.done == "function")
                      try {
                        this.controller.done.call(this.controller);
                      } catch (i) {
                        throw Error(i);
                      }
                    else
                      l.debug(`${o} does not have a done() method.`), a(`${o} does not have a done() method.`);
                    typeof this.controller.createRoutingController == "function" ? this.controller.createRoutingController.call(this.controller) : l.debug(`${o} does not have a createRoutingController() method.`);
                  }
                  s({ component: this, controller: this.controller });
                });
              }
              createEffectInstance() {
                var e = this;
                return new Promise(function(o, s) {
                  if (u) {
                    var a = e.body.getAttribute("effectClass"), i = e.body.getAttribute("apply-effect-to");
                    i = i !== null ? i : "load", a !== null && i === "observe" ? e.applyObserveTransitionEffect(a) : a !== null && i === "load" && e.applyTransitionEffect(a);
                  }
                  o({ component: e, effect: e.effect });
                });
              }
              createViewInstance() {
                var e = this;
                return new Promise(function(o, s) {
                  var a = u ? e.body.getAttribute("viewClass") : null;
                  if (a !== null) {
                    var i = C(a);
                    typeof i < "u" && (e.view = te(i, { component: e }), Object.hasOwnProperty.call(e.view, "done") && typeof e.view.done == "function" && e.view.done.call(e.view));
                  }
                  o({ component: e, view: e.view });
                });
              }
              __done__() {
                var e = this, o = c(function() {
                  if (typeof e > "u")
                    throw new Error("componentDone() has lost its context");
                  if (typeof e.body > "u")
                    throw new Error("The component has no body");
                  e.createViewInstance(), e.createControllerInstance(), e.createEffectInstance(), l.debug(`Trying to run component helpers for ${e.name}...`);
                  try {
                    e.runComponentHelpers(), l.debug(`Component helpers for ${e.name} executed.`);
                  } catch (s) {
                    throw l.debug(`Component helpers for ${e.name} could not be executed.`), Error(s);
                  }
                  e.subcomponents = e.__buildSubComponents__(), e._bindroute_(), e.body.setAttribute("loaded", true);
                }, "componentDone");
                return new Promise(function(s, a) {
                  try {
                    Promise.resolve(o.call(e));
                  } catch (i) {
                    a(i);
                  }
                });
              }
              hostElements(e) {
                var o = this, s = o.shadowed && typeof o.shadowRoot < "u" ? o.shadowRoot.subelements(e) : o.body.subelements(e);
                return s;
              }
              get subtags() {
                var e = this, o = ae;
                return e.hostElements(o);
              }
              get bodyAttributes() {
                var e = this, o = e.body;
                return u ? [...o.getAttributeNames()].map((s) => ({ [s]: o.getAttribute(s) })).reduce((s, a, i) => Object.assign(s, a)) : {};
              }
              get dataAttributes() {
                var e = this, o = e.body;
                return u ? [{}].concat([...o.getAttributeNames()].filter((s) => s.startsWith("data-")).map((s) => ({ [s.split("-")[1]]: o.getAttribute(s) }))).reduce((s, a, i) => Object.assign(s, a)) : {};
              }
              __buildSubComponents__(e = false) {
                var o = this, s = o.subtags;
                return e || (s = s.filter((a) => a.getAttribute("loaded") !== "true")), (typeof o < "u" || o.subcomponents.length < 1) && (o.subcomponents = Dt(s, o)), o.subcomponents;
              }
              fail(e) {
                var o;
                if (typeof e < "u") {
                  var { error: s, component: a } = e;
                  o = Promise.resolve({ error: s, component: a });
                }
                return o;
              }
              set(e, o) {
                this[e] = o;
              }
              get(e) {
                return this[e];
              }
              feedComponent() {
                var e = this;
                l.debug(`[Component][${this.name}][feedComponent] start feeding component...`);
                var o = c(function(i) {
                  if (typeof i.container > "u" && typeof i.body > "u") {
                    l.warn("COMPONENT {{NAME}} has an undefined container and body".replace("{{NAME}}", i.name));
                    return;
                  }
                  var d = typeof i.container > "u" || i.container === null ? i.body : i.container, h = i.parsedAssignmentText;
                  if (i.innerHTML = h, i.shadowed) {
                    l.debug("COMPONENT {{NAME}} is shadowed".replace("{{NAME}}", i.name)), l.debug("Preparing slots for Shadowed COMPONENT {{NAME}}".replace("{{NAME}}", i.name));
                    var m = P("div");
                    d.subelements("[slot]").map(function(N) {
                      N.parentElement === d && m.appendChild(N);
                    }), l.debug("Creating shadowedContainer for COMPONENT {{NAME}}".replace("{{NAME}}", i.name));
                    var _ = P("div");
                    _.classList.add("shadowHost");
                    try {
                      i.shadowRoot = _.attachShadow({ mode: "open" });
                    } catch {
                      try {
                        l.debug("Shadowed COMPONENT {{NAME}} is repeated".replace("{{NAME}}", i.name)), i.shadowRoot = _.shadowRoot;
                      } catch {
                        l.warn("Shadowed COMPONENT {{NAME}} is not allowed on this browser".replace("{{NAME}}", i.name));
                      }
                    }
                    if (typeof i.shadowRoot < "u" && i.shadowRoot !== null) {
                      i.reload ? (l.debug("FORCED RELOADING OF CONTAINER FOR Shadowed COMPONENT {{NAME}}".replace("{{NAME}}", i.name)), _.shadowRoot.innerHTML = i.innerHTML) : (m.innerHTML = i.parseTemplate(m.innerHTML), l.debug("ADDING Shadowed COMPONENT {{NAME}} ".replace("{{NAME}}", i.name)), _.shadowRoot.innerHTML += i.innerHTML), l.debug("ADDING Slots to Shadowed COMPONENT {{NAME}} ".replace("{{NAME}}", i.name)), _.innerHTML += m.innerHTML, l.debug("APPENDING Shadowed COMPONENT {{NAME}} to Container ".replace("{{NAME}}", i.name));
                      var I = d.querySelector(".shadowHost");
                      typeof I < "u" && I !== null ? (l.debug("Shadowed Container for COMPONENT {{NAME}} is already present in the tree ".replace("{{NAME}}", i.name)), i.shadowRoot.innerHTML = _.shadowRoot.innerHTML) : d.appendChild(_);
                    } else
                      l.warn("Shadowed COMPONENT {{NAME}} is bad configured".replace("{{NAME}}", i.name));
                  } else
                    i.reload ? (l.debug("FORCED RELOADING OF CONTAINER FOR COMPONENT {{NAME}}".replace("{{NAME}}", i.name)), d.innerHTML = i.innerHTML) : d && i ? (l.debug("ADDING COMPONENT {{NAME}} ".replace("{{NAME}}", i.name)), d.innerHTML += i.innerHTML) : l.warn("COMPONENT {{NAME}} is not added to the DOM".replace("{{NAME}}", i.name));
                }, "_feedComponent_InBrowser"), s = c(function(i) {
                  var d = i.parsedAssignmentText;
                  i.innerHTML = d;
                }, "_feedComponent_InNode"), a;
                if (!Ae(e, "Component")) {
                  l.warn("Trying to feed a non component object");
                  return;
                }
                return u ? a = o(e) : a = s(e), a;
              }
              rebuild() {
                var e = this, o = new Promise(function(s, a) {
                  if ((typeof e > "u" || e === null) && a("Component is undefined"), He(e) && Ae(e, "Component"))
                    switch (true) {
                      case e.get("tplsource") === "none":
                        l.debug("Component " + e.name + " has specified template-source=none, so no template load was done");
                        var i = { request: null, component: e };
                        e.__done__().then(function() {
                          typeof e.done == "function" && e.done.call(e, i), s.call(o, i);
                        }, function() {
                          a.call(o, i);
                        });
                        break;
                      case e.get("tplsource") === "inline":
                        l.debug("Component " + e.name + " has specified template-source=inline, so it is assumed that template is already declared"), async function(d) {
                          d.feedComponent.bind(d)();
                        }(e);
                        var i = { request: null, component: e };
                        e.__done__().then(function() {
                          typeof e.done == "function" && e.done.call(e, i), s.call(o, i);
                        }, function() {
                          a.call(o, i);
                        });
                        break;
                      case (e.get("tplsource") === "default" && e.get("templateURI") !== ""):
                        e.set("url", e.get("basePath") + e.get("templateURI")), bt(e, false).then(function(d) {
                          s.call(o, d);
                        }, function(d) {
                          a.call(o, d);
                        });
                        break;
                      case (e.get("tplsource") === "external" && e.get("templateURI") !== ""):
                        e.set("url", e.get("templateURI")), bt(e, false).then(function(d) {
                          s.call(o, d);
                        }, function(d) {
                          a.call(o, d);
                        });
                        break;
                      case (e.get("tplsource") === "default" && e.get("templateURI", "") === ""):
                        l.debug(`Component ${e.name} template-source is ${e.get("tplsource")} and no templateURI is present`), a.call(o, `Component ${e.name} template-source is ${e.get("tplsource")} and no templateURI is present`);
                        break;
                      default:
                        l.debug("Component " + e.name + " will not be rebuilt because no templateURI is present"), a.call(o, { request: null, component: e });
                        break;
                    }
                });
                return o;
              }
              Cast(e) {
                let o = G(e).map((s) => s.name.replace(/bound /g, "")).map((s) => ({ [s]: e[s].bind(this) })).reduce((s, a) => Object.assign(s, a), {});
                return De(this, o);
              }
              static route() {
                var e = this, o, s = !!(He(e) && Ae(e, "Component")), a = c(function(i) {
                  var d = [], h = i.filter(function(m) {
                    return typeof m < "u";
                  }).map(function(m) {
                    if (typeof m.name < "u")
                      d.push(m.name);
                    else
                      throw new Error(ye(m) + " does not have a name");
                    return new Promise(function(_, I) {
                      var N;
                      return typeof m < "u" && m._reroute_ ? N = m._reroute_().then(function() {
                        return m.reload = true, m.rebuild();
                      }).then(function(H) {
                        if (Object.hasOwnProperty.call(m, "subcomponents") && typeof m.subcomponents < "u" && m.subcomponents.length > 0)
                          return l.debug("LOOKING FOR ROUTINGS IN SUBCOMPONENTS FOR: " + m.name), a.call(m, m.subcomponents);
                        l.debug("No subcomponents to look for routings in: " + m.name), m.subtags.length > 0 && (m.subcomponents = m.__buildSubComponents__(true)), _(m);
                      }) : typeof m < "u" && I("Component " + m.name + " is not an instance of Component"), N;
                    });
                  });
                  return Promise.all(h).then(function() {
                    l.debug("ROUTING COMPLETED FOR " + d.join(", "));
                  }).catch(function(m) {
                    l.warn("ROUTING FAILED FOR " + d.join(", ") + ": " + m);
                  });
                }, "__route__");
                if (s || r.componentsStack)
                  s && l.debug("loading routings for instance " + e.name), o = a.call(e, s ? e.subcomponents : r.componentsStack);
                else
                  throw l.debug("An undetermined result expected if load routings. So will not be loaded this time."), Error("There is no valid instance and no components stack available to apply rountings");
                return o;
              }
              fullscreen() {
                if (u) {
                  var e = this.body;
                  e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen();
                }
              }
              closefullscreen() {
                u && (document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen());
              }
              _generateRoutingPaths(e) {
                var o = this;
                return new Promise(function(s, a) {
                  u && Gt(o.validRoutingWays, o.routingWay) && typeof e < "u" && (o.innerHTML = e.innerHTML, o.routingNodes = e.subelements("routing"), o.routings = [], o.routingNodes.map(function(i, d) {
                    var h = i.getAttributeNames(), m = {};
                    h.map(function(_, I) {
                      m[h[I]] = i.getAttribute(h[I]);
                    }), o.routings.push(m), o.routingPaths || (o.routingPaths = []), o.routingPaths.includes(m.path) || o.routingPaths.push(m.path), r.global.get("routingPaths") || r.global.set("routingPaths", []), r.global.get("routingPaths").includes(m.path) || r.global.get("routingPaths").push(m.path);
                  })), s();
                });
              }
              parseTemplate(e) {
                var o = this, s, a = e;
                if (Object.hasOwnProperty.call(o, "templateHandler")) {
                  var i = o.templateHandler;
                  l.debug(`[Component][${this.name}][parseTemplate] Attempting to use ${i} ...`);
                  var d = C(i), h = te(d, { component: o, template: a });
                  h.component = o;
                  var m = o.data;
                  if (Object.hasOwnProperty.call(o, "assignRoutingParams") && o.assignRoutingParams)
                    try {
                      m = Object.assign(m, o.routingParams);
                    } catch {
                      l.debug("[parseTemplate] it was not possible to assign the routing params to the template");
                    }
                  s = h.assign(m);
                } else
                  l.debug(`[Component][${this.name}][parseTemplate] No value for templateHandler. Using raw content...`), s = a;
                return s;
              }
              _reroute_() {
                var e = this;
                return new Promise(function(o, s) {
                  u && Gt(e.validRoutingWays, e.routingWay) && (e.routingPath = document.location[e.routingWay], e.routingSelected.map(function(a, i) {
                    var d = gt({ COMPONENTS_BASE_PATH: r.CONFIG.get("componentsBasePath"), COMPONENT_NAME: a.name.toString(), TPLEXTENSION: Object.hasOwnProperty.call(a, "tplextension") ? a.tplextension : e.tplextension, TPL_SOURCE: "default" });
                    e.templateURI = d;
                  }), e.routingSelected.length > 0 && (e.template = "", e.body.innerHTML = "")), o(e);
                });
              }
              lazyLoadImages() {
                if (u) {
                  var e = this, o = e.shadowed ? e.shadowRoot : e.body, s = [...o.subelements("img[lazy-src]")], a = c(function(d) {
                    d.setAttribute("src", d.getAttribute("lazy-src")), d.onload = () => {
                      d.removeAttribute("lazy-src");
                    };
                  }, "_lazyLoadImages");
                  if ("IntersectionObserver" in window) {
                    var i = new IntersectionObserver((d, h) => {
                      d.forEach((m) => {
                        m.isIntersecting && (a(m.target), h.unobserve(m.target));
                      });
                    });
                    s.map(function(d) {
                      return i.observe(d);
                    });
                  } else
                    s.map(a);
                }
                return null;
              }
              applyTransitionEffect(e) {
                var o = C(e);
                if (typeof o > "u")
                  throw Error(`${e} not found.`);
                typeof o < "u" && Ae(o, "TransitionEffect") ? (this.effect = te(o, { component: this }), this.effect.apply(this.effect.defaultParams)) : l.debug(`${e} is ${ye(o)} but is not a TransitionEffect`);
              }
              applyObserveTransitionEffect(e) {
                if (u) {
                  var o = this, s = o.shadowed ? o.shadowRoot.host : o.body, a = c(function(d) {
                    o.applyTransitionEffect(e);
                  }, "_applyEffect_");
                  if ("IntersectionObserver" in window) {
                    var i = new IntersectionObserver((d, h) => {
                      d.forEach((m) => {
                        m.isIntersecting && (a(m.target), h.unobserve(m.target));
                      });
                    });
                    i.observe(s);
                  } else
                    a(s);
                }
                return null;
              }
              scrollIntoHash() {
                if (u) {
                  var e = this;
                  if (document.location.hash !== "") {
                    var o = e.shadowed ? e.shadowRoot : e.body;
                    o.subelements(document.location.hash).map(function(s) {
                      typeof s.scrollIntoView == "function" && s.scrollIntoView(r.CONFIG.get("scrollIntoHash", { behavior: "auto", block: "top", inline: "top" }));
                    });
                  }
                }
              }
              i18n_translate() {
                if (u && r.CONFIG.get("use_i18n")) {
                  var e = this, o = e.shadowed ? e.shadowRoot : e.body, s = r.CONFIG.get("lang", "en"), a = navigator.language.slice(0, 2), i = r.global.get("i18n");
                  if (s !== a && typeof i == "object" && Object.hasOwnProperty.call(i, "messages")) {
                    var d = c(function() {
                      var h = this;
                      return new Promise(function(m, _) {
                        var I = i.messages.filter(function(N) {
                          return Object.hasOwnProperty.call(N, s) && Object.hasOwnProperty.call(N, a);
                        });
                        o.subelements("ul,li,h1,h2,h3,a,b,p,input,textarea,summary,details,option,component").map(function(N) {
                          return I.map(function(H) {
                            var M = N.innerHTML;
                            return M = M.replace(new RegExp(`${H[s]}`, "g"), H[a]), N.innerHTML = M, null;
                          }), N;
                        }), m();
                      });
                    }, "callback_i18n");
                    d.call(e).then(function() {
                      l.debug("i18n loaded for component: " + e.name);
                    });
                  }
                }
              }
              addComponentHelper(e) {
                var o = this;
                o._componentHelpers.push(e);
              }
              runComponentHelpers() {
                if (u) {
                  var e = this, o = [];
                  o.push(e.i18n_translate.bind(e)), o.push(e.scrollIntoHash.bind(e)), o.push(e.lazyLoadImages.bind(e)), o = o.concat(e._componentHelpers), o.map(function(s) {
                    l.debug(`Executing ${s.name} as component helper for ${e.name}...`), s();
                  });
                }
              }
            }, "Component")]), G(C("Component")).map(function(t) {
              O(t);
            }), u && window.addEventListener("popstate", function(t) {
              t.stopImmediatePropagation(), t.stopPropagation(), C("Component").route();
            }), ne("com.qcobjects.controllers", [c(class extends C("InheritClass") {
              constructor({ component: e, dependencies: o }) {
                super({ component: e, dependencies: o });
                S(this, "component", null);
                S(this, "dependencies", []);
                if (this.component = e, this.dependencies = o, typeof this.component > "u" || this.component === "null")
                  throw Error(`${ye(this)} must be called with a component`);
              }
              routingSelectedAttr(e) {
                return this.component.routingSelected.map(function(o) {
                  return o[e];
                }).filter(function(o) {
                  return o;
                }).pop();
              }
              isTouchable() {
                return "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
              }
              onpress(e, o) {
                try {
                  this.isTouchable() ? this.component.body.subelements(e)[0].addEventListener("touchstart", o, { passive: true }) : this.component.body.subelements(e)[0].addEventListener("click", o, { passive: true });
                } catch {
                  l.debug("No button to assign press event");
                }
              }
              createRoutingController() {
                var e = this, o = e.component, s = e.routingSelectedAttr("controllerclass");
                if (typeof s < "u") {
                  var a = C(s);
                  typeof a < "u" && (o.routingController = te(a, { component: o }), Object.hasOwnProperty.call(o.routingController, "done") && typeof o.routingController.done == "function" && o.routingController.done.call(o.routingController));
                }
              }
              done() {
              }
            }, "Controller")]), ne("com.qcobjects.views", [c(class extends C("InheritClass") {
              constructor({ component: n = void 0, dependencies: e = [] }) {
                if (super(...arguments), typeof this.component > "u" || this.component === "null")
                  throw Error(`${ye(this)} must be called with a component`);
              }
            }, "View")]), ne("com.qcobjects.api", [c(class extends C("InheritClass") {
              constructor() {
                super(...arguments);
                S(this, "kind", "rest");
                S(this, "domain", L);
                S(this, "basePath", D);
                S(this, "url", "");
                S(this, "method", "GET");
                S(this, "data", {});
                S(this, "reload", false);
                S(this, "cached", false);
              }
              set(e, o) {
                this[e] = o;
              }
              get(e) {
                return this[e];
              }
            }, "Service")]), ne("com.qcobjects.api.services", [c(class extends C("Service") {
              constructor() {
                super(...arguments);
                S(this, "method", "GET");
                S(this, "cached", false);
                S(this, "headers", { "Content-Type": "application/json", charset: "utf-8" });
                S(this, "JSONresponse", null);
              }
              done(e) {
                l.debug("***** RECEIVED RESPONSE:"), l.debug(e.service.template), this.JSONresponse = JSON.parse(e.service.template);
              }
            }, "JSONService")]), ne("com.qcobjects.api.config", [c(class extends C("JSONService") {
              constructor() {
                super(...arguments);
                S(this, "method", "GET");
                S(this, "cached", false);
                S(this, "configFileName", "config.json");
                S(this, "headers", { "Content-Type": "application/json", charset: "utf-8" });
                S(this, "JSONresponse", null);
                this.set("url", this.get("basePath") + this.get("configFileName"));
              }
              done(e) {
                l.debug("***** CONFIG LOADED:"), l.debug(e.service.template), this.JSONresponse = JSON.parse(e.service.template), Object.hasOwnProperty.call(this.JSONresponse, "__encoded__") && (this.JSONresponse = JSON.parse(C("_Crypt").decrypt(this.JSONresponse.__encoded__, le)));
                for (var o in this.JSONresponse)
                  r.CONFIG.set(o, this.JSONresponse[o]);
                this.configLoaded.call(this);
              }
              fail(e) {
                this.configLoaded.call(this);
              }
            }, "ConfigService")]), ne("com.qcobjects.valueObjects", [c(class extends C("InheritClass") {
              constructor() {
                super(...arguments);
              }
            }, "VO")]);
            var gt = c(function(t) {
              var n = "";
              if (t.TPL_SOURCE === "default") {
                n = "{{COMPONENTS_BASE_PATH}}{{COMPONENT_NAME}}.{{TPLEXTENSION}}";
                for (var e in t) {
                  var o = t[e];
                  n = n.replace("{{" + e + "}}", t[e]);
                }
              }
              return n;
            }, "ComponentURI"), bt = c(function(t, n) {
              var e, o = c(function(i, d) {
                return e = new Promise(function(h, m) {
                  var _ = i.__promise__, I = Object.hasOwnProperty.call(i, "container") && typeof i.container < "u" && i.container !== null ? i.container : i.body;
                  if (I !== null) {
                    var N = c(function(Q) {
                      Q.feedComponent();
                      var W = { request: j, component: Q };
                      h.call(_, W);
                    }, "_feedComponent_");
                    l.debug("LOADING COMPONENT DATA {{DATA}} FROM {{URL}}".replace("{{DATA}}", y(i.data)).replace("{{URL}}", i.url));
                    var H = c(function() {
                      var Q = M ? 0 : 200;
                      if (j.status === Q) {
                        var W = j.responseText;
                        l.debug("Data received {{DATA}}".replace("{{DATA}}", y(W))), l.debug("CREATING COMPONENT {{NAME}}".replace("{{NAME}}", i.name)), i.template = W, i.cached && typeof K < "u" && K.save(i.name, i.template), N.call(this, i);
                      } else {
                        var Ze = { request: j, component: i };
                        m.call(_, Ze);
                      }
                    }, "_componentLoaded");
                    if (typeof i.template == "string" && i.template !== "")
                      N.call(this, i);
                    else {
                      var M = !!i.url.startsWith("file:"), j = new XMLHttpRequest();
                      if (M) {
                        if ("fetch" in r) {
                          l.debug("I can use fetch..."), l.debug("It is a file to be loaded, so I will try to use fetch");
                          var X = fetch(i.url).then((Q) => {
                            l.debug("I got a response from fetch, so I'll feed the component"), Q.text().then((W) => {
                              i.template = W, N.call(this, i);
                            });
                          });
                        }
                      } else
                        try {
                          l.debug("Calling the url of component in async mode."), j.open(i.method, i.url, true);
                        } catch {
                          l.debug("Last try has failed... The component cannot be loaded.");
                        }
                      !he && !M && j.setRequestHeader("Content-Type", "text/html"), M || (j.onload = H);
                      var B = c(function(Q) {
                        Q = !(typeof Q > "u" || !Q), l.debug("SENDING THE NORMAL REQUEST  "), Q ? "fetch" in r || (l.debug("I have to try to load the file using xhr...  "), j.send(null), j.status === XMLHttpRequest.DONE && H.call(this)) : (l.debug("Trying to send the data to the component...  "), j.send(y(i.data)));
                      }, "_directLoad");
                      if (i.cached && !M) {
                        l.debug("USING CACHE FOR COMPONENT: " + i.name);
                        var K = new A({ index: i.cacheIndex, load(Q) {
                          B.call(this, M);
                        }, alternate(Q) {
                          i.method === "GET" ? (i.template = Q.cache.getCached(i.cacheIndex), N.call(this, i)) : B.call(this, M);
                        } });
                        f.lastCache = K;
                      } else
                        l.debug("NOT USING CACHE FOR COMPONENT: " + i.name), B.call(this, M);
                    }
                  } else
                    l.debug("CONTAINER DOESNT EXIST");
                }), e.then(function(h) {
                  return i.__done__().then(function() {
                    var m;
                    return typeof i.done == "function" && (m = i.done.call(i, h)), Promise.resolve(m);
                  });
                }, function(h) {
                  var m;
                  return typeof i.fail == "function" && (m = i.fail.call(i, h)), Promise.reject(m);
                }).catch(function(h) {
                  l.debug("Something wrong loading the component");
                }), e;
              }, "_componentLoaderInBrowser"), s = c(function(i, d) {
                return e = new Promise(function(h, m) {
                  var _ = e, I = c(function(j) {
                    j.feedComponent();
                    var X = { request: null, component: j };
                    h.call(_, X);
                  }, "_feedComponent_");
                  l.debug("LOADING COMPONENT DATA {{DATA}} FROM {{URL}}".replace("{{DATA}}", y(i.data)).replace("{{URL}}", i.url));
                  var N = c(function(j, X) {
                    if (j) {
                      var K = { request: null, component: i };
                      m.call(_, K);
                    } else {
                      var B = X.toString();
                      l.debug("Data received {{DATA}}".replace("{{DATA}}", y(B))), l.debug("CREATING COMPONENT {{NAME}}".replace("{{NAME}}", i.name)), i.template = B, i.cached && typeof M < "u" && M.save(i.name, i.template), I.call(this, i);
                    }
                  }, "_componentLoaded");
                  if (typeof i.template == "string" && i.template !== "")
                    I.call(this, i);
                  else {
                    l.debug("Loading the component as a local file in server...");
                    var H = c(function(j) {
                      let X = b("fs");
                      l.debug("SENDING THE NORMAL REQUEST  "), X.readFile(i.url, N);
                    }, "_directLoad");
                    if (i.cached) {
                      l.debug("USING CACHE FOR COMPONENT: " + i.name);
                      var M = new A({ index: i.cacheIndex, load(j) {
                        H.call(this);
                      }, alternate(j) {
                        i.method === "GET" ? (i.template = j.cache.getCached(i.cacheIndex), I.call(this, i)) : H.call(this);
                      } });
                      f.lastCache = M;
                    } else
                      l.debug("NOT USING CACHE FOR COMPONENT: " + i.name), H.call(this);
                  }
                }), e.then(function(h) {
                  return i.__done__().then(function() {
                    var m;
                    return typeof i.done == "function" && (m = i.done.call(i, h)), Promise.resolve(m);
                  });
                }, function(h) {
                  var m;
                  return typeof i.fail == "function" && (m = i.fail.call(i, h)), Promise.reject(m);
                }).catch(function(h) {
                  l.debug("Something wrong loading the component");
                }), e;
              }, "_componentLoaderInNode"), a;
              return u ? typeof n < "u" && n ? a = be(o, arguments) : a = o(t, n) : a = s(t, n), a;
            }, "componentLoader"), yt = c(function(t, n) {
              var e = c(function(d, h) {
                var m = new Promise(function(_, I) {
                  l.debug("LOADING SERVICE DATA {{DATA}} FROM {{URL}}".replace("{{DATA}}", y(d.data)).replace("{{URL}}", d.url));
                  var N = new XMLHttpRequest();
                  N.withCredentials = d.withCredentials;
                  var H = true;
                  N.open(d.method, d.url, H);
                  for (var M in d.headers)
                    try {
                      typeof d.headers[M] != "function" && N.setRequestHeader(M, d.headers[M]);
                    } catch {
                      l.debug("Something went wrong when assign the header " + M);
                    }
                  N.onload = function() {
                    if (N.status === 200) {
                      var B = N.responseText;
                      if (l.debug("Data received {{DATA}}".replace("{{DATA}}", y(B))), l.debug("CREATING SERVICE {{NAME}}".replace("{{NAME}}", d.name)), d.template = B, d.cached && typeof X < "u" && X.save(d.name, d.template), typeof d.done == "function") {
                        var K = { request: N, service: d };
                        d.done.call(d, K), _.call(m, K);
                      }
                    } else if (typeof d.fail == "function") {
                      var K = { request: N, service: d };
                      d.fail.call(d, K), I.call(m, K);
                    }
                  };
                  var j = c(function() {
                    l.debug("SENDING THE NORMAL REQUEST  ");
                    try {
                      N.send(y(d.data));
                    } catch {
                      l.debug("SOMETHING WRONG WITH REQUEST  "), I.call(m, { request: N, service: d });
                    }
                  }, "_directLoad");
                  if (d.cached) {
                    var X = new A({ index: d.data, load(B) {
                      j.call(this);
                    }, alternate(B) {
                      if (d.method === "GET") {
                        if (d.template = B.cache.getCached(d.name), typeof d.done == "function") {
                          var K = { request: N, service: d };
                          d.done.call(d, K), _.call(m, K);
                        }
                      } else
                        j.call(this);
                    } });
                    f.lastCache = X;
                  } else
                    j.call(this);
                  return N;
                });
                return m;
              }, "_serviceLoaderInBrowser"), o = c(function(d, h) {
                var m = new Promise(function(_, I) {
                  if (typeof URL > "u") {
                    f.URL = b("url").URL;
                    let ue = f.URL;
                  }
                  var N = new URL(d.url), H;
                  d.useHTTP2 = Object.hasOwnProperty.call(d, "useHTTP2") && d.useHTTP2;
                  var M = c(function(ue) {
                    l.debug("LOADING SERVICE DATA (non-browser) {{DATA}} FROM {{URL}}".replace("{{DATA}}", y(d.data)).replace("{{URL}}", d.url));
                    var Ue, _t = { http2Client: B, request: ue, service: d, responseHeaders: null };
                    if (typeof d.data == "object" && d.data !== null && d.useHTTP2)
                      try {
                        l.debug("Sending data...");
                        let Ee = new Buffer(y(d.data));
                        ue.write(Ee);
                      } catch {
                        l.debug("It was not possible to send any data");
                      }
                    Ue = "", ue.on("response", (Ee, Lo) => {
                      l.debug("receiving response..."), _t.responseHeaders = Ee, Ue = "";
                    }), ue.on("data", (Ee) => {
                      l.debug("receiving data..."), Ue += "" + Ee.toString(), d.template = Ue;
                    }), d.useHTTP2 && ue.resume(), ue.on("end", () => {
                      l.debug("ending call..."), d.template = Ue, Object.hasOwnProperty.call(d, "useHTTP2") && d.useHTTP2 ? B.destroy() : ue.destroy(), d.done.call(d, _t), _.call(m, _t);
                    }), d.useHTTP2 && ue.end();
                  }, "captureEvents");
                  try {
                    var j;
                    if (d.useHTTP2) {
                      l.debug("using http2");
                      var X = b("http2"), B = X.connect(N.origin);
                      j = Object.assign({ ":method": d.method, ":path": N.pathname }, d.options), j = Object.assign(j, d.headers), H = B.request(j), H.setEncoding("utf8"), M(H);
                    } else if (N.protocol === "http:") {
                      var K = b("http"), Q = K.request;
                      j = Object.assign({ url: d.url, headers: d.headers }, d.options);
                      var H = Q(d.url);
                      M(H);
                    } else if (N.protocol === "https:") {
                      var W = b("https");
                      j = Object.assign({ hostname: N.hostname, port: N.port, path: N.pathname, method: d.method, headers: d.headers }, d.options);
                      var Ze = W.request(j, function(ue) {
                        M(ue);
                      });
                      Ze.end();
                    } else {
                      var Ve = "Protocol not supported: " + N.protocol;
                      throw l.debug(Ve), new Error(Ve);
                    }
                  } catch (ue) {
                    l.debug(ue), d.fail.call(d, ue), I.call(m, ue);
                  }
                }).catch(function(_) {
                  console.log(_), l.debug("Something happened when trying to call the service: " + d.name), d.fail.call(d, _);
                });
                return m;
              }, "_serviceLoaderInNode"), s = c(function(d, h) {
                var m = new Promise(function(_, I) {
                  l.debug(`Calling mockup service ${d.name} ...`);
                  var N = { request: null, service: d, responseHeaders: d.responseHeaders };
                  typeof d.mockup == "function" ? d.mockup.call(d, N) : d.done.call(d, N), _.call(m, N);
                });
                return m;
              }, "_serviceLoaderMockup"), a = c(function(d, h) {
                var m = new Promise(function(_, I) {
                  l.debug(`Calling local service ${d.name} ...`);
                  var N = { request: null, service: d, responseHeaders: d.responseHeaders };
                  typeof d.local == "function" ? d.local.call(d, N) : d.done.call(d, N), _.call(m, N);
                });
                return m;
              }, "_serviceLoaderLocal"), i;
              switch (t.kind) {
                case "rest":
                  u ? typeof n < "u" && n ? i = be(e, arguments) : i = e(t, n) : i = o(t, n);
                  break;
                case "mockup":
                  i = s(t, n);
                  break;
                case "local":
                  i = a(t, n);
                  break;
                default:
                  l.debug(`The value of the kind property of the service ${t.name} is not valid`);
                  break;
              }
              return i;
            }, "serviceLoader");
            if (F(yt), F(bt), F(gt), F(Be), F(y), F(Ie), F(He), F($n), u) {
              Element.prototype.buildComponents = function(t = false) {
                var n = ae, e = this, o = e.subelements(n);
                return Dt(o, null);
              }, HTMLDocument.prototype.buildComponents = Element.prototype.buildComponents, HTMLElement.prototype.buildComponents = Element.prototype.buildComponents;
              var Ht = c(class extends HTMLElement {
                constructor() {
                  super(...arguments);
                  let t = this, n = t.nodeName.toLowerCase(), e = P("quick-component"), o = t.getAttributeNames();
                  e.setAttribute("name", n), t.hasAttribute("shadowed") || e.setAttribute("shadowed", "true"), o.map(function(a) {
                    t.hasAttribute(a) && (e.setAttribute(a, t.getAttribute(a)), t.removeAttribute(a));
                  });
                  var s = t.getAttributeNames().filter(function(a) {
                    return a.startsWith("data-");
                  }).map(function(a) {
                    return a.split("-")[1];
                  });
                  s.map(function(a) {
                    e.setAttribute("data-" + a, t.getAttribute("data-" + a)), t.removeAttribute("data-" + a);
                  }), [...t.children].map(function(a) {
                    e.appendChild(a.cloneNode(true)), a.remove();
                  }), t.append(e);
                }
              }, "_ComponentWidget_");
              F(Ht);
              var vt = c(function(t) {
                customElements.define(t, class extends Ht {
                });
              }, "RegisterWidget"), $t = c(function() {
                var t = [...arguments];
                t.filter(function(n) {
                  return typeof n == "string";
                }).map(function(n) {
                  vt(n);
                });
              }, "RegisterWidgets");
              O(vt), O($t), F(vt), F($t);
            }
            u || ne("com.qcobjects.api", [c(class extends C("InheritClass") {
              constructor({ domain: n = L, basePath: e = D, body: o = null, stream: s = null, request: a = null }) {
                super(...arguments), l.debug("Initializing BackendMicroservice...");
                let i = this;
                typeof this.body > "u" && (this.body = null), typeof o < "u" && (this.body = o), this.cors(), i.stream = s, s.on("data", (m) => {
                  var _ = a.method.toLowerCase(), I = { post: i.post };
                  Object.hasOwnProperty.call(I, _) && I[_].call(i, m);
                });
                var d = a.method.toLowerCase(), h = { get: i.get, head: i.head, put: i.put, delete: i.delete, connect: i.connect, options: i.options, trace: i.trace, patch: i.patch };
                Object.hasOwnProperty.call(h, d) && h[d].call(i);
              }
              cors() {
                if (this.route.cors) {
                  l.debug("Validating CORS...");
                  let { allow_origins: e, allow_credentials: o, allow_methods: s, allow_headers: a } = this.route.cors;
                  var n = this;
                  if (typeof n.headers != "object" && (n.headers = {}), typeof n.route.responseHeaders != "object" && (n.route.responseHeaders = {}), typeof e < "u")
                    if (l.debug("CORS: allow_origins available. Validating origins..."), e === "*" || typeof n.request.headers.origin > "u" || [...e].indexOf(n.request.headers.origin) !== -1)
                      l.debug("CORS: Adding header Access-Control-Allow-Origin=*"), n.route.responseHeaders["Access-Control-Allow-Origin"] = "*";
                    else {
                      l.debug("CORS: Origin is not allowed: " + n.request.headers.origin), l.debug("CORS: Forcing to finish the response..."), this.body = {};
                      try {
                        this.done();
                      } catch (i) {
                        l.debug(`It was not possible to finish the call to the microservice: ${i}`);
                      }
                    }
                  else
                    l.debug("CORS: no allow_origins available. Allowing all origins..."), l.debug("CORS: Adding header Access-Control-Allow-Origin=*"), n.route.responseHeaders["Access-Control-Allow-Origin"] = "*";
                  typeof o < "u" ? (l.debug(`CORS: allow_credentials present. Allowing ${o}...`), n.route.responseHeaders["Access-Control-Allow-Credentials"] = o.toString()) : (l.debug("CORS: No allow_credentials present. Allowing all credentials."), n.route.responseHeaders["Access-Control-Allow-Credentials"] = "true"), typeof s < "u" ? (l.debug(`CORS: allow_methods present. Allowing ${s}...`), n.route.responseHeaders["Access-Control-Allow-Methods"] = [...s].join(",")) : (l.debug("CORS: No allow_methods present. Allowing only GET, OPTIONS and POST"), n.route.responseHeaders["Access-Control-Allow-Methods"] = "GET, OPTIONS, POST"), typeof a < "u" ? (l.debug(`CORS: allow_headers present. Allowing ${a}...`), n.route.responseHeaders["Access-Control-Allow-Headers"] = [...a].join(",")) : (l.debug("CORS: No allow_headers present. Allowing all headers..."), n.route.responseHeaders["Access-Control-Allow-Headers"] = "*");
                } else
                  l.debug("No CORS validation available. You can specify cors in CONFIG.backend.routes[].cors");
              }
              head(n) {
                this.done();
              }
              get(n) {
                l.debug(`[BackendMicroservice.get] Data received: ${y(n)}`), this.done();
              }
              post(n) {
                this.done();
              }
              put(n) {
                this.done();
              }
              delete(n) {
                this.done();
              }
              connect(n) {
                this.done();
              }
              options(n) {
                this.done();
              }
              trace(n) {
                this.done();
              }
              patch(n) {
                this.done();
              }
              finishWithBody(n) {
                try {
                  l.debug("[BackendMicroservice.finishWithBody] Ending the stream..."), l.debug(`[BackendMicroservice.finishWithBody] type of body is: ${typeof this.body}`), typeof this.body != "string" && (this.body = y(this.body)), l.debug(`[BackendMicroservice.finishWithBody] 
 body: ${this.body} `), n.write(this.body), n.end(), l.debug("[BackendMicroservice.finishWithBody] Stream ended.");
                } catch (e) {
                  l.debug(`[BackendMicroservice.finishWithBody] Something went wrong ending the stream: ${e}`);
                }
              }
              done() {
                l.debug("[BackendMicroservice.done] Finalizing the response...");
                var n = this, e = n.stream;
                try {
                  if (l.debug("[BackendMicroservice.done] Sending response headers..."), n.route.responseHeaders)
                    l.debug(`[BackendMicroservice.done] Response headers present: ${Object.keys(n.route.responseHeaders)}`), e.respond(n.route.responseHeaders);
                  else
                    throw Error("[BackendMicroservice.done] No headers present.");
                } catch (o) {
                  l.debug(`[BackendMicroservice.done] Something went wrong sending response headers: ${o}`);
                }
                if (n.body !== null)
                  try {
                    l.debug("[BackendMicroservice.done] A body of message is present. Finalizing the response..."), n.finishWithBody.call(n, e);
                  } catch (o) {
                    l.debug(`[BackendMicroservice.done] Something went wrong finalizing the response: ${o}`);
                  }
                else
                  l.debug("[BackendMicroservice.done] No body present. Ending stream..."), e.end();
              }
            }, "BackendMicroservice")]), me("SourceJS", Object, { domain: L, basePath: D, body: P("script"), type: "text/javascript", containerTag: "body", url: "", data: {}, async: false, external: false, set(t, n) {
              this[t] = n;
            }, get(t) {
              return this[t];
            }, status: false, done() {
            }, fail() {
            }, rebuild() {
              var t = this;
              try {
                document.getElementsByTagName(t.containerTag)[0].appendChild(function(n, e, o) {
                  return n.type = o.type, n.src = e, n.crossOrigin = Object.hasOwnProperty.call(o, "crossOrigin") ? o.crossOrigin : "anonymous", n.async = o.async, n.onreadystatechange = function() {
                    this.readyState === "complete" && o.done.call(o);
                  }, n.onload = function(s) {
                    o.status = true, o.done.call(o, s);
                  }, n.onerror = function(s) {
                    o.status = false, o.fail.call(o, s);
                  }, o.body = n, n;
                }.call(this, P("script"), this.external ? this.url : this.basePath + this.url, t));
              } catch (n) {
                t.status = false, t.fail.call(t, n);
              }
            }, Cast(t) {
              return De(this, t);
            }, _new_(t) {
              this.__new__(t), this.rebuild();
            } }), me("SourceCSS", Object, { domain: L, basePath: D, body: P("link"), url: "", data: {}, async: false, external: false, set(t, n) {
              this[t] = n;
            }, get(t) {
              return this[t];
            }, done() {
            }, rebuild() {
              var t = this;
              u && window.document.getElementsByTagName("head")[0].appendChild(function(n, e, o) {
                return n.type = "text/css", n.rel = "stylesheet", n.href = e, n.crossOrigin = "anonymous", n.onreadystatechange = function() {
                  this.readyState === "complete" && o.done.call(o);
                }, n.onload = o.done, o.body = n, n;
              }.call(this, P("link"), this.external ? this.url : this.basePath + this.url, t));
            }, Cast(t) {
              return De(this, t);
            }, _new_(t) {
              this.__new__(t), this.rebuild();
            } });
            var Ce = c(function(t) {
              return isNaN(t) ? new Number(0) : new Number(t);
            }, "__to_number");
            Array.prototype.unique = function() {
              return this.filter(function(t, n, e) {
                return e.indexOf(t) === n;
              });
            }, Array.unique = function(t) {
              return t.unique();
            }, O(Array.unique), O(Array.prototype.unique), Array.prototype.table = function() {
              console.table(this);
            }, Array.table = function(t) {
              return t.table();
            }, O(Array.table), O(Array.prototype.table), Array.prototype.sum = function() {
              return this.reduce(function(t, n) {
                return Ce(t) + Ce(n);
              }, 0);
            }, Array.sum = function(t) {
              return t.sum();
            }, O(Array.sum), O(Array.prototype.sum), Array.prototype.avg = function() {
              return this.length < 1 ? 0 : this.reduce(function(t, n) {
                return (Ce(t) + Ce(n)) / 2;
              });
            }, Array.avg = function(t) {
              return t.avg();
            }, O(Array.avg), O(Array.prototype.avg), Array.prototype.min = function() {
              return this.reduce(function(t, n) {
                return Ce(t) <= Ce(n) ? t : n;
              }, 1 / 0);
            }, Array.min = function(t) {
              return t.min();
            }, O(Array.min), O(Array.prototype.min), Array.prototype.max = function() {
              return this.reduce(function(t, n) {
                return Ce(t) >= Ce(n) ? t : n;
              }, 0);
            }, Array.max = function(t) {
              return t.max();
            }, O(Array.max), O(Array.prototype.max), Array.prototype.sortBy = function(t, n = true) {
              var e = n ? function(o, s) {
                return s[t] < o[t] ? 1 : -1;
              } : function(o, s) {
                return s[t] > o[t] ? 1 : -1;
              };
              return this.sort(e);
            }, Array.sortBy = function(t, n, e = true) {
              return t.sortBy(n, e);
            }, O(Array.sortBy), O(Array.prototype.sortBy), Array.matrix = function(t, n = 0) {
              var e = c(function(o) {
                return n;
              }, "x_func");
              return Array.from({ length: t }, e);
            }, O(Array.matrix), Array.matrix2d = function(t, n = 0) {
              var e = c(function(s) {
                return n;
              }, "y_func"), o = c(function(s) {
                return Array.from({ length: t }, e);
              }, "x_func");
              return Array.from({ length: t }, o);
            }, O(Array.matrix2d), Array.matrix3d = function(t, n = 0) {
              var e = c(function(s) {
                return Array.from({ length: t }, function() {
                  return n;
                });
              }, "y_func"), o = c(function(s) {
                return Array.from({ length: t }, e);
              }, "x_func");
              return Array.from({ length: t }, o);
            }, O(Array.matrix3d), r.range = function(t, n = 0, e = 1) {
              return (n === 0 || typeof n > "u") && (n = t, t = 0), Array.from({ length: (n - t) / e + 1 }, function(o, s) {
                return t + s * e;
              });
            }, O(r.range), String.prototype.list = function() {
              var t = this;
              return r.range(0, t.length - 1).map(function(n) {
                return t[n];
              });
            }, O(String.prototype.list), r.getDocumentLayout = function() {
              var t = c((o, s) => o > s ? "landscape" : null, "h"), n = c((o, s) => s > o ? "portrait" : null, "v"), e = c((o, s) => o === s ? "square" : null, "square");
              return [t(document.documentElement.clientWidth, document.documentElement.clientHeight), n(document.documentElement.clientWidth, document.documentElement.clientHeight), e(document.documentElement.clientWidth, document.documentElement.clientHeight)].filter((o) => o !== null).pop();
            }, me("ArrayList", Array, []), C("ArrayList").matrix = Array.matrix, C("ArrayList").matrix2d = Array.matrix2d, C("ArrayList").matrix3d = Array.matrix3d, O(C("ArrayList").matrix), O(C("ArrayList").matrix2d), O(C("ArrayList").matrix3d), me("ArrayCollection", Object, { source: te(C("ArrayList"), []), changed(t, n) {
              l.debug("VALUE CHANGED"), l.debug(t), l.debug(n);
            }, push(t) {
              var n = this;
              l.debug("VALUE ADDED"), l.debug(t), n.source.push(t);
            }, pop(t) {
              var n = this;
              l.debug("VALUE POPPED"), l.debug(t), n.source.pop(t);
            }, _new_(t) {
              var n = this, e = 0;
              n.source = te(C("ArrayList"), t);
              for (var o in n.source)
                isNaN(o) || (l.debug("binding " + o.toString()), function(s) {
                  Object.defineProperty(n, s, { set(a) {
                    l.debug("setting " + s + "=" + a), n.source[s] = a, n.changed(s, a);
                  }, get() {
                    return n.source[s];
                  } });
                }(o), e++);
              n.source.length = e, Object.defineProperty(n, "length", { get() {
                return n.source.length;
              } });
            } }), ne("com.qcobjects.effects.base", [c(class extends C("InheritClass") {
              constructor() {
                super(...arguments);
                S(this, "duration", 1e3);
              }
              animate({ timing: e, draw: o, duration: s }) {
                let a = performance.now();
                requestAnimationFrame(c(/* @__PURE__ */ __name(function i(d) {
                  let h = (d - a) / s;
                  h > 1 && (h = 1);
                  let m = e(h);
                  o(Math.round(m * 100)), h < 1 ? requestAnimationFrame(i) : typeof this < "u" && this !== null && Object.hasOwnProperty.call(this, "done") && (typeof this.done).toLowerCase() === "function" && this.done.call(this);
                }, "i"), "animate"));
              }
            }, "Effect")]), ne("com.qcobjects.effects.transitions.base", [c(class extends C("Effect") {
              constructor() {
                super(...arguments);
                S(this, "duration", 385);
                S(this, "defaultParams", { alphaFrom: 0, alphaTo: 1, angleFrom: 180, angleTo: 0, radiusFrom: 0, radiusTo: 30, scaleFrom: 0, scaleTo: 1 });
                S(this, "fitToHeight", false);
                S(this, "fitToWidth", false);
                S(this, "effects", []);
                l.info("DECLARING TransitionEffect  "), this.component.defaultParams = this.defaultParams;
              }
              apply({ alphaFrom: e, alphaTo: o, angleFrom: s, angleTo: a, radiusFrom: i, radiusTo: d, scaleFrom: h, scaleTo: m }) {
                var _ = this;
                l.info("EXECUTING TransitionEffect  ");
                var I = _.component.shadowed ? _.component.shadowRoot.host : _.component.body;
                _.fitToHeight && (I.height = typeof I.offsetParent == "object" && I.offsetParent !== null ? I.offsetParent.scrollHeight : I.getBoundingClientRect().height), _.fitToWidth && (I.width = typeof I.offsetParent == "object" && I.offsetParent !== null ? I.offsetParent.scrollWidth : I.getBoundingClientRect().width), I.style.display = "block", _.effects.map(function(N, H) {
                  var M = C(N), j = new M(), X = j.apply, B = [I].concat(Object.values({ alphaFrom: e, alphaTo: o, angleFrom: s, angleTo: a, radiusFrom: i, radiusTo: d, scaleFrom: h, scaleTo: m }));
                  X.apply(_, B);
                });
              }
            }, "TransitionEffect")]), ne("com.qcobjects.timing", [c(class extends C("InheritClass") {
              constructor() {
                super(...arguments);
                S(this, "duration", 1e3);
                S(this, "alive", true);
              }
              thread({ timing: e, intervalInterceptor: o, duration: s }) {
                var a = this;
                let i = performance.now();
                requestAnimationFrame(c(/* @__PURE__ */ __name(function d(h) {
                  let m = h - i, _ = m / s;
                  _ > 1 && (_ = 1);
                  let I = e(_, m);
                  o(Math.round(I * 100)), (_ < 1 || s === -1) && a.alive && requestAnimationFrame(d);
                }, "d"), "thread"));
              }
            }, "Timer")]), ne("com.qcobjects.tools.essentials", [c(class extends C("InheritClass") {
              constructor() {
                super(...arguments);
                S(this, "_toggle", false);
                S(this, "_inverse", true);
                S(this, "_positive", null);
                S(this, "_negative", null);
                S(this, "_dispatched", null);
                S(this, "_args", {});
                this._new_(...arguments);
              }
              changeToggle() {
                this._toggle = !this._toggle;
              }
              _new_({ positive: e, negative: o, args: s }) {
                this._positive = e, this._negative = o, this._args = s;
              }
              fire() {
                var e = this, o = new Promise(function(s, a) {
                  typeof e._positive == "function" && typeof e._negative == "function" ? (e._inverse ? e._dispatched = e._toggle ? e._negative.bind(e) : e._positive.bind(e) : e._dispatched = e._toggle ? e._positive.bind(e) : e._negative.bind(e), e._dispatched.call(e, e._args), s.call(o, e)) : (l.debug("Toggle functions are not declared"), a.call(o, e));
                }).then(function(s) {
                  s.changeToggle();
                }).catch(function(s) {
                  l.debug(s.toString());
                });
                return o;
              }
            }, "Toggle")]), function(t) {
              let n = c(function(i, d, h) {
                var m = this;
                if (typeof i > "u" || i === null)
                  throw Error(`mapper.${d}.${h} does not have a component instance or it is null.`);
                let _ = t.global.get(h), I = i.get(h), N = i.data[h], H = typeof N < "u" ? N : typeof I < "u" ? I : _, M = "";
                return typeof H < "u" && typeof H.map < "u" ? M = H.map(function(j) {
                  let X = [...Object.keys(j)].map((B) => ` data-${B}="${typeof j[B] < "u" && j[B] !== null ? j[B].toString() : ""}"`).join("");
                  return `<quick-component name="${d}" ${X} ></quick-component>`;
                }).join("") : l.debug(`${d}.${h} does not have a map property`), M;
              }, "mapper");
              oe.setProcessor(n);
              let e = c(function(i, d, h) {
                var m = `
        /* CSS Document for Mobile Imports */
        @import url("${h}") (orientation:portrait);
        @import url("${h}") (max-width:460px);
        @import url("${h}") (aspect-ratio: 9/16);
        @import url("${h}") (aspect-ratio: 10/16);
        @import url("${h}") (aspect-ratio: 5/8);
        @import url("${h}") (aspect-ratio: 3/4);
        @import url("${h}") (aspect-ratio: 2/3);
        `, _ = `
        @import url("${h}") (orientation:landscape) and (min-width:460px);
        @import url("${h}") (aspect-ratio: 16/9) and (min-width:460px);
        @import url("${h}") (aspect-ratio: 16/10) and (min-width:460px);
        @import url("${h}") (aspect-ratio: 8/5) and (min-width:460px);
        @import url("${h}") (aspect-ratio: 4/3) and (min-width:460px);
        @import url("${h}") (aspect-ratio: 3/2) and (min-width:460px);
        `, I = { landscape: _, portrait: m };
                return Object.hasOwnProperty.call(I, d) ? I[d] : "";
              }, "layout");
              oe.setProcessor(e);
              let o = c(function() {
                let i = [...arguments].slice(1).map(function(h) {
                  return { [h.split("=")[0]]: h.split("=")[1] };
                }).reduce(function(h, m) {
                  return Object.assign(h, m);
                });
                return `<component ${[...Object.keys(i)].map(function(h) {
                  return `${h}=${i[h]}`;
                }).join(" ")}></component>`;
              }, "component");
              oe.setProcessor(o);
              let s = c(function() {
                let i = [...arguments].slice(1).map(function(h) {
                  return { [h.split("=")[0]]: h.split("=")[1] };
                }).reduce(function(h, m) {
                  return Object.assign(h, m);
                });
                return `<quick-component ${[...Object.keys(i)].map(function(h) {
                  return `${h}=${i[h]}`;
                }).join(" ")}></quick-component>`;
              }, "quick_component");
              oe.setProcessor(s);
              let a = c(function(i, d, h) {
                return t.range(d).map(function(m) {
                  return h.replace("{{index}}", m.toString());
                }).join("");
              }, "repeat");
              oe.setProcessor(a);
            }(r), $e(function() {
              r.CONFIG.get("useSDK") || r.__start__();
            }), F(F), F(ht), F(ne), F(me), F(te), F(Un), F($e), F(Wn), F(u), F(G), function(t) {
              ne("com.qcobjects", [c(/* @__PURE__ */ __name(class Ye extends C("InheritClass") {
                constructor() {
                  super(...arguments);
                  S(this, "_GLOBAL", {});
                  S(this, "__definition", {});
                  S(this, "__classType", "GlobalSettings");
                  this.set = Ye.set.bind(this), this.get = Ye.get.bind(this), this.__start__ = Ye.__start__.bind(this);
                }
                static set(o, s) {
                  this._GLOBAL[o] = s;
                }
                static get(o, s) {
                  var a;
                  return typeof this._GLOBAL[o] < "u" ? a = this._GLOBAL[o] : typeof s < "u" && (a = s), a;
                }
                static __start__() {
                  var o = c(function() {
                    var a;
                    return u && (a = new Promise(function(i, d) {
                      "serviceWorker" in navigator && typeof t.CONFIG.get("serviceWorkerURI") < "u" && (t.CONFIG.set("serviceWorkerScope", t.CONFIG.get("serviceWorkerScope") ? t.CONFIG.get("serviceWorkerScope") : "/"), navigator.serviceWorker.register(t.CONFIG.get("serviceWorkerURI"), { scope: t.CONFIG.get("serviceWorkerScope") }).then(function(h) {
                        l.debug("Service Worker Registered"), i.call(a, h);
                      }, function(h) {
                        l.debug("Error registering Service Worker"), d.call(a, h);
                      }), navigator.serviceWorker.ready.then(function(h) {
                        l.debug("Service Worker Ready"), i.call(a, h);
                      }, function(h) {
                        l.debug("Error loading Service Worker"), d.call(a, h);
                      }));
                    })), a;
                  }, "__load__serviceWorker"), s = c(function() {
                    return new Promise((a, i) => {
                      if (u) {
                        l.debug("Starting to building components");
                        try {
                          t.componentsStack = document.buildComponents.call(document);
                        } catch (d) {
                          throw Error(`Something went wrong trying to start components tree: ${d.message}`);
                        }
                        l.debug("Initializing the service worker"), o.call(t).catch(function(d) {
                          l.debug(`error loading the service worker ${d}`);
                        });
                      }
                      a();
                    });
                  }, "_buildComponents");
                  l.debug("Starting to load the config settings..."), t.CONFIG.get("useConfigService", false) ? (l.debug("Loading settings using local configuration file..."), t.global.configService = te(C("ConfigService")), t.global.configService.configLoaded = s, yt(t.global.configService)) : (l.debug("Starting to load the components..."), s.call(this));
                }
              }, "Ye"), "GlobalSettings")]), F(C("GlobalSettings")), f = te(C("GlobalSettings")), t = Te(f, t), Object.defineProperty(t, "PackagesNameList", { set(n) {
                l.debug("PackagesNameList is readonly");
              }, get() {
                var n = c(function(e) {
                  var o = [];
                  for (var s in e)
                    typeof e[s] < "u" && typeof e[s] != "function" && Object.hasOwnProperty.call(e[s], "length") && e[s].length > 0 && (o.push(s), o = o.concat(n(e[s])));
                  return o;
                }, "_get_packages_names");
                return n(de);
              } }), Object.defineProperty(t, "PackagesList", { set(n) {
                l.debug("PackagesList is readonly");
              }, get() {
                return t.PackagesNameList.map(function(n) {
                  let e = ne(n), o;
                  return e && (o = { packageName: n, classesList: e.filter(function(s) {
                    return Ie(s);
                  }) }), o;
                }).filter(function(n) {
                  return typeof n < "u";
                });
              } }), Object.defineProperty(t, "ClassesList", { set(n) {
                l.debug("ClassesList is readonly");
              }, get() {
                var n = [];
                return t.PackagesList.map(function(e) {
                  return n = n.concat(e.classesList.map(function(o) {
                    return { packageName: e.packageName, className: e.packageName + "." + o.__definition.__classType, classFactory: o };
                  })), e;
                }), n;
              } }), Object.defineProperty(t, "ClassesNameList", { set(n) {
                l.debug("ClassesNameList is readonly");
              }, get() {
                return t.ClassesList.map(function(n) {
                  return n.className;
                });
              } }), u && (me("GLOBAL", pe.global), F(C("GLOBAL"))), F(f), t.CONFIG.get("useSDK") && function(n) {
                var e = n.CONFIG.get("remoteImportsPath"), o = !n.CONFIG.get("useLocalSDK");
                n.CONFIG.set("remoteImportsPath", n.CONFIG.get("remoteSDKPath"));
                var s = false, a = "QCObjects-SDK";
                if (u)
                  s = true;
                else {
                  var i = Xe("qcobjects-sdk");
                  i !== null ? (a = "qcobjects-sdk", s = true) : (a = "node_modules/qcobjects-sdk/QCObjects-SDK", s = true);
                }
                if (s)
                  if (l.info("Importing SDK... " + a), v && typeof It < "u") {
                    let d = Xt();
                  } else
                    ht(a, function() {
                      o ? l.debug("QCObjects-SDK.js loaded from remote location") : l.debug("QCObjects-SDK.js loaded from local"), n.CONFIG.set("remoteImportsPath", e);
                    }, o);
                else
                  l.debug("SDK has not been imported as it is not available at the moment");
              }(t);
            }(r), u && be(function() {
              $e(function() {
                (function(t) {
                  let n = 0, e = false, o = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight), s = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth);
                  function a(i) {
                    var d = Math.round(t.scrollY * 100 / o), h = Math.round(t.scrollX * 100 / s), m = new CustomEvent("scrollpercent", { detail: { percentX: h, percentY: d } });
                    i.target.dispatchEvent(m);
                    var _ = "defaultscroll", I = [0, 5, 10, 25, 50, 75, 90, 95, 100];
                    I.filter(function(N) {
                      return N === d;
                    }).map(function(N) {
                      _ = "percentY" + d.toString();
                      var H = new CustomEvent(_, { detail: { percentX: h, percentY: d } });
                      i.target.dispatchEvent(H);
                    });
                  }
                  __name(a, "a");
                  c(a, "scrollDispatcher"), document.addEventListener("scroll", function(i) {
                    e || (requestAnimationFrame(function() {
                      a(i), e = false;
                    }), e = true);
                  });
                })(r);
              });
            }, null), u || (typeof r.global < "u" && Object.hasOwnProperty.call(r.global, "_fireAsyncLoad") && r.global._fireAsyncLoad.call(this), typeof r.global < "u" && Object.hasOwnProperty.call(r.global, "onload") && r.global.onload.call(this)), function(t) {
              var n = c(function() {
                Object.freeze(Object.prototype), Object.freeze(Object);
              }, "__freeze__");
              t && r.CONFIG.get("secureObjects", false) ? $e(function() {
                n();
              }) : r.CONFIG.get("secureObjects", false) && n();
            }(u);
          }
        }, "w"), "__qcobjects__").call(null, typeof Pe == "object" && typeof Pe.exports == "object" ? Pe.exports = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global2 < "u" ? global2 : {} : typeof global2 == "object" ? global2 : typeof window == "object" ? window : {});
      });
      var J = V((cr, Vt) => {
        var Yn = Zt();
        Vt.exports = Yn;
      });
      var Jt = V((Yt, Je) => {
        "use strict";
        Object.defineProperty(Yt, "__esModule", { value: true });
        var Me = J();
        (function(w) {
          "use strict";
          class r extends Me.InheritClass {
            constructor({ messages: p = [] }) {
              super({ messages: p }), Me.CONFIG.get("use_i18n", false) && (Me.CONFIG.set("lang", "en"), w.get("i18n") ? w.set("i18n", { messages: w.get("i18n").messages.concat(p) }) : w.set("i18n", { messages: p }));
            }
            _load_i18n_packages_() {
              return Me.CONFIG.get("i18n_languages", []).map((p) => {
                (0, Me.Import)(`org.quickcorp.i18n_messages.${p}`);
              });
            }
          }
          __name(r, "r");
          c(r, "i18n_messages"), (0, Me.Package)("org.qcobjects.i18n_messages", [r]), new r({})._load_i18n_packages_();
        })(typeof Je == "object" && typeof Je.exports == "object" ? Je.exports = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global2 < "u" ? global2 : {} : typeof global2 == "object" ? global2 : typeof window == "object" ? window : {});
      });
      var en = V((Qt) => {
        "use strict";
        Object.defineProperty(Qt, "__esModule", { value: true });
        var Kt = J();
        (function() {
          "use strict";
          (0, Kt.Package)("org.qcobjects.models", [c(class extends Kt.VO {
          }, "Contact")]);
        })();
      });
      var Re = V((R, Ke) => {
        "use strict";
        Object.defineProperty(R, "__esModule", { value: true });
        R.ModalMoveUp = R.ModalMoveDown = R.ModalFade = R.WipeDown = R.WipeUp = R.WipeRight = R.WipeLeft = R.Resize = R.Radius = R.Rotate = R.RotateZ = R.RotateY = R.RotateX = R.MoveYInFromTop = R.MoveYInFromBottom = R.MoveXInFromLeft = R.MoveXInFromRight = R.Move = R.Fade = void 0;
        var k = J(), ie = typeof Ke == "object" && typeof Ke.exports == "object" ? Ke.exports = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global2 < "u" ? global2 : {} : typeof global2 == "object" ? global2 : typeof window == "object" ? window : {};
        (function() {
          "use strict";
          class w extends k.Effect {
            constructor() {
              super(...arguments), this.duration = 1e3;
            }
            apply(E, l, U) {
              let Y = U - l;
              this.animate({ duration: this.duration, timing(x) {
                return x;
              }, draw(x) {
                k.logger.debug("animation progress: " + x.toString());
                let A = l + x * Y / 100;
                k.logger.debug("alpha: " + A.toString()), E.style.opacity = A.toString();
              } });
            }
          }
          __name(w, "w");
          c(w, "Fade");
          class r extends k.Effect {
            constructor() {
              super(...arguments), this.duration = 1e3;
            }
            apply(E, l, U, Y, x) {
              let A = Y - l, Fe = x - U;
              E.style.transform = "translate(" + l + "px," + U + "px)", this.animate({ duration: this.duration, timing(Oe) {
                return Oe;
              }, draw(Oe) {
                k.logger.debug("animation progress: " + Oe.toString());
                let ze = U + Oe * Fe / 100, _e = l + Oe * A / 100;
                k.logger.debug("x: " + _e.toString() + " y:" + ze.toString()), E.style.transform = "translate(" + _e + "px," + ze + "px)";
              } });
            }
          }
          __name(r, "r");
          c(r, "Move"), (0, k.Package)("org.qcobjects.effects.base", [w, r]);
          class f extends r {
            constructor() {
              super(...arguments), this.duration = 1e3;
            }
            apply(E) {
              super.apply.call(this, E, E.width, 0, 0, 0);
            }
          }
          __name(f, "f");
          c(f, "MoveXInFromRight");
          class p extends r {
            constructor() {
              super(...arguments), this.duration = 1e3;
            }
            apply(E) {
              super.apply.call(this, E, -E.width, 0, 0, 0);
            }
          }
          __name(p, "p");
          c(p, "MoveXInFromLeft");
          class u extends r {
            constructor() {
              super(...arguments), this.duration = 1e3;
            }
            apply(E) {
              super.apply.call(this, E, 0, E.height, 0, 0);
            }
          }
          __name(u, "u");
          c(u, "MoveYInFromBottom");
          class v extends r {
            constructor() {
              super(...arguments), this.duration = 1e3;
            }
            apply(E) {
              super.apply.call(this, E, 0, -E.height, 0, 0);
            }
          }
          __name(v, "v");
          c(v, "MoveYInFromTop");
          class g extends k.Effect {
            constructor() {
              super(...arguments), this.duration = 1e3;
            }
            apply(E, l, U) {
              let Y = U - l;
              this.animate({ duration: this.duration, timing(x) {
                return x;
              }, draw(x) {
                k.logger.debug("animation progress: " + x.toString());
                let A = Math.round(l + x * Y / 100);
                k.logger.debug("angle: " + A.toString()), E.style.transform = "rotate3d(1,0,0," + A.toString() + "deg)";
              } });
            }
          }
          __name(g, "g");
          c(g, "RotateX");
          class b extends k.Effect {
            constructor() {
              super(...arguments), this.duration = 1e3;
            }
            apply(E, l, U) {
              let Y = U - l;
              this.animate({ duration: this.duration, timing(x) {
                return x;
              }, draw(x) {
                k.logger.debug("animation progress: " + x.toString());
                let A = Math.round(l + x * Y / 100);
                k.logger.debug("angle: " + A.toString()), E.style.transform = "rotate3d(0,1,0," + A.toString() + "deg)";
              } });
            }
          }
          __name(b, "b");
          c(b, "RotateY");
          class O extends k.Effect {
            constructor() {
              super(...arguments), this.duration = 1e3;
            }
            apply(E, l, U) {
              let Y = U - l;
              this.animate({ duration: this.duration, timing(x) {
                return x;
              }, draw(x) {
                k.logger.debug("animation progress: " + x.toString());
                let A = Math.round(l + x * Y / 100);
                k.logger.debug("angle: " + A.toString()), E.style.transform = "rotate3d(0,0,1," + A.toString() + "deg)";
              } });
            }
          }
          __name(O, "O");
          c(O, "RotateZ");
          class G extends k.Effect {
            constructor() {
              super(...arguments), this.duration = 1e3;
            }
            apply(E, l, U) {
              let Y = U - l;
              this.animate({ duration: this.duration, timing(x) {
                return x;
              }, draw(x) {
                k.logger.debug("animation progress: " + x.toString());
                let A = Math.round(l + x * Y / 100);
                k.logger.debug("angle: " + A.toString()), E.style.transform = "rotate3d(1,1,1," + A.toString() + "deg)";
              } });
            }
          }
          __name(G, "G");
          c(G, "Rotate");
          class P extends k.Effect {
            constructor() {
              super(...arguments), this.duration = 1e3;
            }
            apply(E, l, U) {
              let Y = U - l;
              this.animate({ duration: this.duration, timing(x) {
                return x;
              }, draw(x) {
                k.logger.debug("animation progress: " + x.toString());
                let A = l + x * Y / 100;
                k.logger.debug("radius: " + A.toString()), E.style.borderRadius = A.toString() + "px";
              } });
            }
          }
          __name(P, "P");
          c(P, "Radius");
          class y extends k.Effect {
            constructor() {
              super(...arguments), this.duration = 1e3;
            }
            apply(E, l, U) {
              let Y = U - l;
              this.animate({ duration: this.duration, timing(x) {
                return x;
              }, draw(x) {
                k.logger.debug("animation progress: " + x.toString());
                let A = l + x * Y / 100;
                k.logger.debug("resize: " + A.toString()), E.style.transformOrigin = "center", E.style.transform = "scale(" + A + "," + A + ")";
              } });
            }
          }
          __name(y, "y");
          c(y, "Resize");
          class T extends k.Effect {
            constructor() {
              super(...arguments), this.duration = 1e3;
            }
            apply(E, l, U) {
              let Y = U - l;
              this.animate({ duration: this.duration, timing(x) {
                return x;
              }, draw(x) {
                k.logger.debug("animation progress: " + x.toString());
                let A = l + x * Y / 100;
                k.logger.debug("wipe: " + A.toString()), E.style.transformOrigin = "right", E.style.transform = "scaleX(" + A + ")";
              } });
            }
          }
          __name(T, "T");
          c(T, "WipeLeft");
          class L extends k.Effect {
            constructor() {
              super(...arguments), this.duration = 1e3;
            }
            apply(E, l, U) {
              let Y = U - l;
              this.animate({ duration: this.duration, timing(x) {
                return x;
              }, draw(x) {
                k.logger.debug("animation progress: " + x.toString());
                let A = l + x * Y / 100;
                k.logger.debug("wipe: " + A.toString()), E.style.transformOrigin = "left", E.style.transform = "scaleX(" + A + ")";
              } });
            }
          }
          __name(L, "L");
          c(L, "WipeRight");
          class D extends k.Effect {
            constructor() {
              super(...arguments), this.duration = 1e3;
            }
            apply(E, l, U) {
              let Y = U - l;
              this.animate({ duration: this.duration, timing(x) {
                return x;
              }, draw(x) {
                k.logger.debug("animation progress: " + x.toString());
                let A = l + x * Y / 100;
                k.logger.debug("wipe: " + A.toString()), E.style.transformOrigin = "bottom", E.style.transform = "scaleY(" + A + ")";
              } });
            }
          }
          __name(D, "D");
          c(D, "WipeUp");
          class ae extends k.Effect {
            constructor() {
              super(...arguments), this.duration = 1e3;
            }
            apply(E, l, U) {
              let Y = U - l;
              this.animate({ duration: this.duration, timing(x) {
                return x;
              }, draw(x) {
                k.logger.debug("animation progress: " + x.toString());
                let A = l + x * Y / 100;
                k.logger.debug("wipe: " + A.toString()), E.style.transformOrigin = "top", E.style.transform = "scaleY(" + A + ")";
              } });
            }
          }
          __name(ae, "ae");
          c(ae, "WipeDown"), (0, k.Package)("org.qcobjects.effects.extended", [f, p, u, v, g, b, O, G, P, y, T, L, D, ae]);
          class le extends w {
            constructor() {
              super(...arguments), this.duration = 500;
            }
          }
          __name(le, "le");
          c(le, "ModalFade");
          class he extends r {
            constructor() {
              super(...arguments), this.duration = 300;
            }
          }
          __name(he, "he");
          c(he, "ModalMoveDown");
          class be extends r {
            constructor() {
              super(...arguments), this.duration = 800;
            }
          }
          __name(be, "be");
          c(be, "ModalMoveUp"), (0, k.Package)("org.qcobjects.modal.effects", [le, he, be]);
        })();
        var Jn = ie.Fade;
        R.Fade = Jn;
        var Kn = ie.Fade;
        R.Move = Kn;
        var Qn = ie.MoveXInFromRight;
        R.MoveXInFromRight = Qn;
        var eo = ie.MoveXInFromLeft;
        R.MoveXInFromLeft = eo;
        var to = ie.MoveYInFromBottom;
        R.MoveYInFromBottom = to;
        var no = ie.MoveYInFromTop;
        R.MoveYInFromTop = no;
        var oo = ie.RotateX;
        R.RotateX = oo;
        var ro = ie.RotateY;
        R.RotateY = ro;
        var io = ie.RotateZ;
        R.RotateZ = io;
        var so = ie.Rotate;
        R.Rotate = so;
        var ao = ie.Radius;
        R.Radius = ao;
        var lo = ie.Resize;
        R.Resize = lo;
        var co = ie.WipeLeft;
        R.WipeLeft = co;
        var uo = ie.WipeRight;
        R.WipeRight = uo;
        var fo = ie.WipeUp;
        R.WipeUp = fo;
        var po = ie.WipeDown;
        R.WipeDown = po;
        var ho = ie.ModalFade;
        R.ModalFade = ho;
        var mo = ie.ModalMoveDown;
        R.ModalMoveDown = mo;
        var go = ie.ModalMoveUp;
        R.ModalMoveUp = go;
      });
      var Ct = V((re, et) => {
        "use strict";
        Object.defineProperty(re, "__esModule", { value: true });
        re.SwaggerUIComponent = re.ModalEnclosureComponent = re.ModalComponent = re.EmailField = re.TextField = re.InputField = re.ButtonField = re.ShadowedComponent = re.FormField = void 0;
        var z = J(), Qe = Re(), ve = typeof et == "object" && typeof et.exports == "object" ? et.exports = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global2 < "u" ? global2 : {} : typeof global2 == "object" ? global2 : typeof window == "object" ? window : {};
        (function(w) {
          class r extends z.Component {
            constructor(y) {
              y.name = typeof y.name < "u" ? y.name : "form-field", super(y), this.cached = false, this.reload = true;
            }
            createBindingEvents() {
              let y;
              typeof this.fieldType > "u" || this.fieldType == null ? y = this.body.subelements("*[data-field]") : y = this.body.subelements(this.fieldType + "[data-field]");
              for (let T = 0; T < y.length; T++) {
                let L = y[T];
                L.addEventListener("change", () => {
                  z.logger.debug("Executing change event binding"), this.executeBindings();
                }), L.addEventListener("blur", () => {
                  z.logger.debug("Executing change event binding"), this.executeBindings();
                }), L.addEventListener("focus", () => {
                  z.logger.debug("Executing change event binding"), this.executeBindings();
                }), L.addEventListener("keydown", () => {
                  z.logger.debug("Executing keydown event binding"), this.executeBindings();
                });
              }
            }
            executeBinding(y) {
              let T = y.getAttribute("data-field");
              z.logger.debug("Binding " + T + " for " + this.name), this.data[T] = y.value;
            }
            executeBindings() {
              let y;
              typeof this.fieldType > "u" || this.fieldType == null ? y = this.body.subelements("*[data-field]") : y = this.body.subelements(this.fieldType + "[data-field]");
              for (let T = 0; T < y.length; T++) {
                let L = y[T], D = L.getAttribute("data-field");
                z.logger.debug("Binding " + D + " for " + this.name), this.data[D] = L.value;
              }
            }
            done(y) {
              let T = super.done(y);
              return this.executeBindings(), this.createBindingEvents(), z.logger.debug("Field loaded: " + this.fieldType + "[name=" + this.name + "]"), T;
            }
          }
          __name(r, "r");
          c(r, "FormField"), (0, z.Package)("org.qcobjects.base.components", [r]);
          class f extends z.Component {
            constructor(y) {
              y.body = (0, z._DOMCreateElement)("div"), super(y), this.container = null, this.shadowed = true, this.cached = false, this.controller = null, this.view = null, this.data = {};
            }
          }
          __name(f, "f");
          c(f, "ShadowedComponent");
          class p extends r {
            constructor(y) {
              y.fieldType = "button", super(y);
            }
          }
          __name(p, "p");
          c(p, "ButtonField");
          class u extends r {
            constructor(y) {
              y.fieldType = "input", super(y);
            }
          }
          __name(u, "u");
          c(u, "InputField");
          class v extends r {
            constructor(y) {
              y.fieldType = "textarea", super(y);
            }
          }
          __name(v, "v");
          c(v, "TextField");
          class g extends r {
            constructor(y) {
              y.fieldType = "input", super(y);
            }
          }
          __name(g, "g");
          c(g, "EmailField");
          class b extends z.Component {
            constructor(y) {
              y.body = (0, z._DOMCreateElement)("div"), super(y), this.name = "modalenclosure", this.tplsource = "inline", this.cached = false, this.basePath = z.CONFIG.get("modalBasePath", z.CONFIG.get("remoteSDKPath", "")), this.template = `
<!-- The Modal -->
<style>
@import url('https://sdk.qcobjects.dev/css/modal.css');
</style>
<div id="modalInstance_{{modalId}}" class="modal">

<!-- Modal content -->
<div class="modal-content">
<span class="close">&times;</span>
{{content}}
</div>

</div>
`, this.data = {};
            }
          }
          __name(b, "b");
          c(b, "ModalEnclosureComponent");
          class O extends z.Component {
            constructor(y) {
              y.basePath = z.CONFIG.get("modalBasePath", z.CONFIG.get("remoteSDKPath", "")), super(y), this.name = "modal", this.cached = false, this.modalEnclosureComponentClass = "ModalEnclosureComponent", this.controller = null, this.view = null, this.tplsource = "none", this.closeOnClickOutside = false, this.data = { content: "", modalId: 0 }, this.submodal = null, this.data.modalId = this.__instanceID;
              let T = (0, z.New)((0, z.ClassFactory)(this.modalEnclosureComponentClass), { name: this.name, basePath: this.basePath, data: this.data });
              this.subcomponents.push(T), this.submodal = T, T.tplsource === "none" ? this.body.innerHTML = T.parsedAssignmentText : this.body.append(T.body);
            }
            modal() {
              let y = this.data.modalId;
              (0, z.Tag)("#modalInstance_" + y + ".modal").map((T) => (T.style.display = "block", new Qe.ModalFade({}).apply(T, 0, 1))), (0, z.Tag)("#modalInstance_" + y + ".modal .modal-content").map((T) => new Qe.ModalMoveDown({}).apply(T, 0, -document.body.clientHeight, 0, 0)), (0, z.Tag)("#modalInstance_" + y + ".modal .modal-content .close").map((T) => T.addEventListener("click", () => {
                this.close();
              }, false)), this.closeOnClickOutside && window.addEventListener("click", () => {
                this.close();
              }, false);
            }
            close() {
              let y = this.data.modalId;
              (0, z.Tag)("#modalInstance_" + y + ".modal").map((T) => (T.style.display = "block", new Qe.ModalFade({}).apply(T, 1, 0))), (0, z.Tag)("#modalInstance_" + y + ".modal .modal-content").map(function(T) {
                return new Qe.ModalMoveUp({}).apply(T, 0, 0, 0, -document.body.clientHeight);
              }), setTimeout(function() {
                (0, z.Tag)("#modalInstance_" + y + ".modal").map((T) => (T.style.display = "none", true));
              }, 900);
            }
            rebuild() {
              let y = super.rebuild();
              return this.templateURI = (0, z.ComponentURI)({ COMPONENTS_BASE_PATH: z.CONFIG.get("componentsBasePath", ""), COMPONENT_NAME: "modal", TPLEXTENSION: z.CONFIG.get("tplextension", ""), TPL_SOURCE: "default" }), y;
            }
          }
          __name(O, "O");
          c(O, "ModalComponent");
          class G extends z.Component {
            constructor() {
              super(...arguments), this.cached = false, this.basePath = z.CONFIG.get("remoteSDKPath", ""), this.tplextension = "tpl.html", this.name = "swagger-ui";
            }
          }
          __name(G, "G");
          c(G, "SwaggerUIComponent"), (0, z.Package)("org.qcobjects.form.components", [f, p, u, v, g, b, O, G]), w.FormField = r, w.ShadowedComponent = f, w.ButtonField = p, w.InputField = u, w.TextField = v, w.EmailField = g, w.ModalEnclosureComponent = b, w.ModalComponent = O, w.SwaggerUIComponent = G;
        })(ve);
        var bo = ve.FormField;
        re.FormField = bo;
        var yo = ve.ShadowedComponent;
        re.ShadowedComponent = yo;
        var vo = ve.ButtonField;
        re.ButtonField = vo;
        var wo = ve.InputField;
        re.InputField = wo;
        var Oo = ve.TextField;
        re.TextField = Oo;
        var _o = ve.EmailField;
        re.EmailField = _o;
        var Io = ve.ModalEnclosureComponent;
        re.ModalEnclosureComponent = Io;
        var Co = ve.ModalComponent;
        re.ModalComponent = Co;
        var No = ve.SwaggerUIComponent;
        re.SwaggerUIComponent = No;
      });
      var tn = V((ke, tt) => {
        "use strict";
        Object.defineProperty(ke, "__esModule", { value: true });
        ke.GridItemComponent = ke.GridComponent = void 0;
        var Nt = J(), St = typeof tt == "object" && typeof tt.exports == "object" ? tt.exports = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global2 < "u" ? global2 : {} : typeof global2 == "object" ? global2 : typeof window == "object" ? window : {};
        (function(w) {
          "use strict";
          class r extends Nt.Component {
            constructor() {
              super(...arguments), this.name = "grid-item", this.shadowed = true, this.tplsource = "inline", this.template = `
<img src="{{image}}" />
<p>{{description}}</p>
`, this.cached = false;
            }
          }
          __name(r, "r");
          c(r, "GridItemComponent");
          class f extends Nt.Component {
            constructor(u) {
              super(u), this.name = "grid", this.cached = false, this.view = null, this.shadowed = true, this.rows = 3, this.cols = 3, this.templateURI = "", this.data = {}, this.tplsource = "inline", this.template = "<p>Loading...</p>", this.body.setAttribute("controllerClass", "DataGridController");
              let v = this.body.getAttribute("subcomponentClass") !== null ? this.body.getAttribute("subcomponentClass") : "GridItemComponent";
              this.body.setAttribute("subcomponentClass", v);
            }
          }
          __name(f, "f");
          c(f, "GridComponent"), (0, Nt.Package)("org.qcobjects.components.grid", [f, r]), w.GridComponent = f, w.GridItemComponent = r;
        })(St);
        var So = St.GridComponent;
        ke.GridComponent = So;
        var xo = St.GridItemComponent;
        ke.GridItemComponent = xo;
      });
      var nn = V((qe, nt) => {
        "use strict";
        Object.defineProperty(qe, "__esModule", { value: true });
        qe.ListItemComponent = qe.ListComponent = void 0;
        var xt = J(), Tt = typeof nt == "object" && typeof nt.exports == "object" ? nt.exports = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global2 < "u" ? global2 : {} : typeof global2 == "object" ? global2 : typeof window == "object" ? window : {};
        (function(w) {
          "use strict";
          class r extends xt.Component {
            constructor(u) {
              u.name = "list-item", super(u), this.shadowed = false, this.tplsource = "inline", this.template = '<a href="{{value}}">{{label}}</a>', this.cached = false;
            }
          }
          __name(r, "r");
          c(r, "ListItemComponent");
          class f extends xt.Component {
            constructor(u) {
              u.name = "list", super(u), this.shadowed = true, this.tplsource = "inline", this.template = "<p>Loading...</p>", this.body.setAttribute("controllerClass", "ListController"), this.body.setAttribute("subcomponentClass", "ListItemComponent");
            }
          }
          __name(f, "f");
          c(f, "ListComponent"), (0, xt.Package)("org.qcobjects.components.list", [r, f]), w.ListComponent = f, w.ListItemComponent = r;
        })(Tt);
        var To = Tt.ListComponent;
        qe.ListComponent = To;
        var Ao = Tt.ListItemComponent;
        qe.ListItemComponent = Ao;
      });
      var rn = V((on) => {
        "use strict";
        Object.defineProperty(on, "__esModule", { value: true });
        var ot = J();
        (function() {
          "use strict";
          (0, ot.Package)("org.qcobjects.components.slider", [c(class extends ot.Component {
            constructor(r) {
              super(r), this.tplsource = "inline", this.template = "<p>Loading...</p>", this.name = "slidelist", this.body.setAttribute("controllerClass", "DataGridController");
              let f = this.body.getAttribute("subcomponentClass") !== null ? this.body.getAttribute("subcomponentClass") : "GridItemComponent";
              this.body.setAttribute("subcomponentClass", f);
            }
          }, "SlideListComponent"), c(class extends ot.Component {
            constructor(r) {
              super(r), this.effectClass = "Fade", this.name = "slider_item", this.data.slideNumber = this.data.__dataIndex + 1, this.template = `
      <div class="qcoSlides" style="display:none">
        <div class="qco-slider__numbertext">{{slideNumber}} / {{__dataLength}}</div>
        <img src="{{image}}" alt="{{title}}"/>
        <div class="qco-slider__text">
          <p>{{label}} <a href="{{link}}">{{category}}</a></p>
        </div>
      </div>
      `, this.tplsource = "inline";
            }
          }, "SlideItemComponent"), c(class extends ot.Component {
            constructor(r) {
              super(r), this.name = "slider", this.template = `
      <style>
      /* Slideshow container */
  
      :host a:hover,
      :host a:active,
      :host a:visited {
        color: #ffffff;
      }
  
       {
        color: #ffffff;
      }
  
      :host .prev {left:0;}
      .qco-slider__container {
        max-width: 100%;
        position: relative;
        margin: auto;
        height: 300px;
      }
      :host .qco-slider__container .qcoSlides img {
        object-fit: cover;
        width: 100%;
        height: 300px;
      }
  
      /* Next & previous buttons */
      :host .prev,
      :host .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        margin-top: -22px;
        padding: 16px;
        color: white;
        font-weight: bold;
        font-size: 18px;
        transition: 0.6s ease;
        border-radius: 0 3px 3px 0;
        background-color: rgba(1, 1, 1, 0.1);
      }
  
      /* Position the "next button" to the right */
      :host .next {
        right: 0;
        border-radius: 3px 0 0 3px;
      }
  
      /* On hover, add a black background color with a little bit see-through */
      :host .prev:hover,
      :host .next:hover {
        background-color: rgba(0, 0, 0, 0.8);
      }
  
      /* Caption text */
      :host .qco-slider__text {
        color: #f2f2f2;
        font-size: 15px;
  /*      padding: 8px 12px;*/
        position: absolute;
        bottom: 8px;
        width: 100%;
        text-align: center;
        text-shadow: -1px 1px 3px #111111;
        background-color: rgba(1,1,1,0.7);
      }
  
      /* Number text (1/3 etc) */
      :host .qco-slider__numbertext {
        color: #f2f2f2;
        text-shadow: 0px 2px 3px #111111;
        font-size: 12px;
        padding: 8px 12px;
        position: absolute;
        top: 0;
        padding-top: 0;
        margin-top: 10px;
      }
  
      /* The dots/bullets/indicators */
      :host .qcoSlider__dots {
        text-align: center;
        margin: 0 auto;
        padding: 0;
      }
      :host .qcoSlider__dots--dot {
        cursor: pointer;
        height: 10px;
        width: 10px;
        margin: 0 2px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
      }
  
      :host .active,
      :host .qcoSlider__dots--dot:hover {
        background-color: #717171;
      }
  
      :host .qco-slider__container .qcoSlides img {
        border-radius: 30px 30px 0px 0px;
      }
  
      </style>
  
      <div class="qco-slider__container">
        <component name="slidelist" componentClass="SlideListComponent" subcomponentClass="SlideItemComponent" serviceClass="{{SERVICE_CLASS}}" ></component>
  
        <a class="prev" onclick="global.get('{{sliderHandler}}').plusSlidesAndStop(-1)">&#10094;</a>
        <a class="next" onclick="global.get('{{sliderHandler}}').plusSlidesAndStop(1)">&#10095;</a>
      </div>
      <br>
  
      <div class="qcoSlider__dots" style="text-align:center">
      </div>
  
      `, this.tplsource = "inline", this.shadowed = true, this.data.SERVICE_CLASS = this.body.getAttribute("serviceClass"), this.data.sliderHandler = "slider_" + this.__instanceID.toString(), this.body.setAttribute("controllerClass", "SliderController");
            }
          }, "SliderComponent")]);
        })();
      });
      var an = V((sn) => {
        "use strict";
        Object.defineProperty(sn, "__esModule", { value: true });
        var se = J(), At = Re();
        (function() {
          "use strict";
          class w extends se.Component {
            constructor(f) {
              f.name = "notification", f.body = (0, se._DOMCreateElement)("div"), super(f), this.cached = false, this.tplsource = "inline", this.shadowed = false, this.template = `
    <style>
    div.notification_background {
      display: block; /* Hidden by default */
      position: fixed; /* Stay in place */
      z-index: 1; /* Sit on top */
      padding-top: 100px; /* Location of the box */
      left: 0;
      top: 0;
      bottom:0;
      right:0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow: auto; /* Enable scroll if needed */
      background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
      border: none !important;
    }
    div.notification {
      border-radius: 12px !important;
      margin-bottom: 15px;
      padding: 4px 12px;
    }
    .notification.danger {
      background-color: #ffdddd;
      border-left: 6px solid #f44336;
    }
    .notification.success {
      background-color: #ddffdd;
      border-left: 6px solid #4CAF50;
    }
    .notification.info {
      background-color: #e7f3fe;
      border-left: 6px solid #2196F3;
    }
    .notification.warning {
      background-color: #ffffcc;
      border-left: 6px solid #ffeb3b;
    }
    </style>
    <div class="notification_background">
    <div class="notification {{kind}}">
      <p><strong>{{title}}</strong> {{message}}</p>
    </div>
    </div>
    `, this.kinds = ["danger", "success", "info", "warning"];
            }
            display(f) {
              let p = c(function(u) {
                u.style.display = "block";
                let v = (0, se.New)(At.Move, { duration: 900, apply(b) {
                  (0, se._super_)("Fade", "apply").call(this, b, 0, 1), (0, se._super_)("Move", "apply").call(this, b, 0, -document.body.clientHeight, 0, 0);
                } }), g = (0, se.New)(At.Move, { duration: 650, apply(b) {
                  (0, se._super_)("Fade", "apply").call(this, b, 1, 0), (0, se._super_)("Move", "apply").call(this, b, 0, 0, 0, -document.body.clientHeight);
                } });
                v.apply(u), setTimeout(function() {
                  g.apply(u);
                }, 2e3);
              }, "_display_");
              f.subelements("div.notification_background").map((u) => (0, se.New)(At.Fade, { duration: 500 }).apply(u, 0, 1)), f.subelements("div.notification").map((u) => p(u)), setTimeout(function() {
                f.remove();
              }, 2200);
            }
            static success(f) {
              let p = (0, se.New)(w, { name: "notification", shadowed: true, body: (0, se._DOMCreateElement)("div"), data: { kind: "success", title: "Success!", message: `${f}...` } });
              document.body.append(p);
              let u = p.shadowed ? p.shadowRoot.host : p.body;
              p.display(u);
            }
            static danger(f) {
              let p = (0, se.New)(w, { name: "notification", shadowed: true, body: (0, se._DOMCreateElement)("div"), data: { kind: "danger", title: "Danger!", message: `${f}...` } });
              document.body.append(p);
              let u = p.shadowed ? p.shadowRoot.host : p.body;
              p.display(u);
            }
            static info(f) {
              let p = (0, se.New)(w, { name: "notification", shadowed: true, body: (0, se._DOMCreateElement)("div"), data: { kind: "info", title: "Info!", message: `${f}...` } });
              document.body.append(p);
              let u = p.shadowed ? p.shadowRoot.host : p.body;
              p.display(u);
            }
            static warning(f) {
              let p = (0, se.New)(w, { name: "notification", shadowed: true, body: (0, se._DOMCreateElement)("div"), data: { kind: "warning", title: "Warning!", message: `${f}...` } });
              document.body.append(p);
              let u = p.shadowed ? p.shadowRoot.host : p.body;
              p.display(u);
            }
          }
          __name(w, "w");
          c(w, "NotificationComponent"), (0, se.Package)("org.quickcorp.components.notifications", [w]);
        })();
      });
      var dn = V((Ne, rt) => {
        "use strict";
        Object.defineProperty(Ne, "__esModule", { value: true });
        Ne.CubeSplashScreenComponent = Ne.VideoSplashScreenComponent = Ne.SplashScreenComponent = void 0;
        var ge = J(), jt = Re(), it = typeof rt == "object" && typeof rt.exports == "object" ? rt.exports = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global2 < "u" ? global2 : {} : typeof global2 == "object" ? global2 : typeof window == "object" ? window : {};
        c(function(r) {
          "use strict";
          class f extends ge.Component {
            constructor(g) {
              g.name = typeof g.name > "u" ? "splashscreen" : g.name;
              let b = typeof window < "u" && typeof window.self < "u" && window === window.self, O = location.hash === "" && location.pathname === "/" && location.search === "" || ge.CONFIG.get("routingWay", "pathname") === "hash" && ge.CONFIG.get("start_url", "/") === location.hash || ge.CONFIG.get("routingWay", "pathname") === "pathname" && ge.CONFIG.get("start_url", "/") === location.pathname || ge.CONFIG.get("routingWay", "pathname") === "search" && ge.CONFIG.get("start_url", "/") === location.search, G = b && O;
              if (G ? (g.basePath = ge.CONFIG.get("splashscreenBasePath", ge.CONFIG.get("remoteSDKPath", "")), typeof g.data > "u" && (g.data = {}), g.data.basePath = g.basePath) : typeof g < "u" && typeof g.body < "u" && (g.body.style.display = "none"), super(g), this.cached = false, this.shadowed = true, this._bgcolor = "", this._enabled_ = G, this._enabled_) {
                let y = this.body.getAttribute("duration");
                y === null ? y = 1e3 : y = parseInt(y.toString()), this._bgcolor = this.body.style.backgroundColor;
                let T = c(() => {
                  setTimeout(() => {
                    if (!T.executed) {
                      let L = this.shadowed ? this.shadowRoot?.host : this.body;
                      typeof r.componentsStack < "u" && r.componentsStack.filter((D) => D.body.hasAttribute("splashscreen")).map((D) => {
                        ge.logger.debug(`Splash Screen of Main Component: ${D.name}`), D.splashScreenComponent = this;
                        let ae = c(() => {
                          if (!ae.executed) {
                            let le = D.splashScreenComponent, he = D.shadowed ? D.shadowRoot?.host : D.body;
                            D._mainPosition = he.style.position, typeof he < "u" && (he.style.position = "fixed"), D._mainOpacity = he.style.opacity, L.style.width = "100%", L.style.height = "100%", document.body.style.backgroundColor = "#111111", he.style.opacity = "0", setTimeout(function() {
                              typeof L < "u" && (document.body.style.backgroundColor = le?._bgcolor, L.subelements("#slot-logo").map((be) => (be.style.display = "block", be.style.transformOrigin = "center", new jt.Resize().apply(be, 1, 0))), new jt.Fade().apply(L, 1, 0));
                            }, y - 1e3), setTimeout(function() {
                              new jt.Fade().apply(he, 0, 1), he.style.position = D._mainPosition, document.body.style.backgroundColor = le._bgcolor, L.parentElement !== null && L.parentElement.remove();
                            }, y);
                          }
                          ae.executed = true;
                        }, "SplashScreenHandler");
                        return D.addComponentHelper(ae.bind(D));
                      }), T.executed = true;
                    }
                  });
                }, "_helper_");
                T.executed = false, this.addComponentHelper(T.bind(g));
              }
            }
          }
          __name(f, "f");
          c(f, "SplashScreenComponent"), (0, ge.Package)("org.qcobjects.components.base", [f]);
          class p extends f {
            constructor(g) {
              g.name = "videosplashscreen", super(g), this.cached = false, this.shadowed = true, this.tplsource = "inline", this.template = `
  <style>
  :host * {
    box-sizing: border-box;
  }

  :host {
    zoom: 1.0;
    width: device-width;
    margin: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    padding: 0;
    min-width: 100vw;
    min-height: 100vh;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: black;
  }
  #slot-logo::slotted(img) {
      vertical-align: middle;
      display: block;
      width: 40vw;
      left: 0;
      margin: 0;
      padding: 0;
      z-index: 9999999999;
      transform-origin: center;
      transform-style: preserve-3d;
      filter: blur(0em);
      transition: filter 0.5s;
      max-width: 300px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: fadeIn 5s;
      -webkit-animation: fadeIn 5s;
      -moz-animation: fadeIn 5s;
      -o-animation: fadeIn 5s;
      -ms-animation: fadeIn 5s;        
  }

  :host * {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    /* prevent callout to copy image, etc when tap to hold */
    -webkit-text-size-adjust: none;
    /* prevent webkit from resizing text to fit */
    -webkit-user-select: none;
    /* prevent copy paste, to allow, change 'none' to 'text' */
  }

  /* FOCUS */
  :host summary:focus,
  :host a:focus,
  :host button:focus {
    outline: none;
  }

  .splashscreen,
  .fullscreen-bg {
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0;
    background-attachment: fixed;
    background-position: center;
    background-clip: content-box;
    background-size: cover;
    position: absolute;
    min-width: 100vw;
    min-height: 100vh;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    overflow: hidden;
  }

  .splashscreen .splashcontent {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
    padding: 0;
    overflow: hidden;
    z-index: 1;
  }

  .splashscreen .splashcontent p {
    color: white;
  }

  video.fullscreen-bg__video {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    min-width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    z-index: 0;
    object-fit: cover;
    filter: brightness(0.3);
  }
    .splashscreen,
    .fullscreen-bg {
      background-image: url('{{background}}');
    }

    @keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }
    
    @-moz-keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }
    
    @-webkit-keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }
    
    @-o-keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }
    
    @-ms-keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }      

  </style>
  <div class="splashscreen">
    <div class="fullscreen-bg splashcontent">
      <video loop muted autoplay playsinline name="media" poster="{{background}}" class="fullscreen-bg__video" data-setup="{}" height="100%">
        <source src="{{video_mp4}}" type="video/mp4">
        <source src="{{video_ogg}}" type="video/ogg">
        <source src="{{video_webm}}" type="video/webm">
      </video>
      <slot id="slot-logo" name="logo"></slot>
    </div>
  </div>

  `;
            }
          }
          __name(p, "p");
          c(p, "VideoSplashScreenComponent");
          class u extends f {
            constructor(g) {
              g.name = "cubesplashscreen", super(g), this.cached = false, this.shadowed = true, this.tplsource = "inline", this.template = `
  <style>
  @keyframes spin {
    0% {
      transform: translateZ(-100px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }

    16% {
      transform: translateZ(-100px) rotateX(180deg) rotateY(180deg) rotateZ(0deg);
    }

    33% {
      transform: translateZ(-100px) rotateX(360deg) rotateY(90deg) rotateZ(180deg);
    }

    50% {
      transform: translateZ(-100px) rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }

    66% {
      transform: translateZ(-100px) rotateX(180deg) rotateY(360deg) rotateZ(270deg);
    }

    83% {
      transform: translateZ(-100px) rotateX(270deg) rotateY(180deg) rotateZ(180deg);
    }

    100% {
      transform: translateZ(-100px) rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
  }

  @keyframes spin-duplicate {
    0% {
      transform: translateZ(-100px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }

    16% {
      transform: translateZ(-100px) rotateX(180deg) rotateY(180deg) rotateZ(0deg);
    }

    33% {
      transform: translateZ(-100px) rotateX(360deg) rotateY(90deg) rotateZ(180deg);
    }

    50% {
      transform: translateZ(-100px) rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }

    66% {
      transform: translateZ(-100px) rotateX(180deg) rotateY(360deg) rotateZ(270deg);
    }

    83% {
      transform: translateZ(-100px) rotateX(270deg) rotateY(180deg) rotateZ(180deg);
    }

    100% {
      transform: translateZ(-100px) rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
  }

  @keyframes roll {
    0% {
      transform: translate3d(-200px, -50px, -400px)
    }

    12% {
      transform: translate3d(0px, 0, -100px)
    }

    25% {
      transform: translate3d(200px, -50px, -400px)
    }

    37% {
      transform: translate3d(0px, -100px, -800px)
    }

    50% {
      transform: translate3d(-200px, -50px, -400px)
    }

    62% {
      transform: translate3d(0px, 0, -100px)
    }

    75% {
      transform: translate3d(200px, -50px, -400px)
    }

    87% {
      transform: translate3d(0px, -100px, -800px)
    }

    100% {
      transform: translate3d(-200px, -50px, -400px)
    }
  }

  #wrapper {
    position: relative;
    width: 200px;
    padding-top: 100px;
    margin: 0 auto;
    perspective: 1200px;
  }

  #platform {
    margin-top: 100px;
  }

  #dice span {
    position: absolute;
    margin: 100px 0 0 100px;
    display: block;
    font-size: 2.5em;
    padding: 10px;
  }

  #dice {
    position: absolute;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    animation: spin 50s infinite linear;
  }

  .side {
    position: absolute;
    width: 200px;
    height: 200px;
    background: none;
    box-shadow: inset 0 0 40px #fff0;
    border-radius: 40px;
  }

  #dice .cover, #dice .inner {
    background: #e0e0e0;
    box-shadow: none;
  }

  #dice .cover {
    border-radius: 0;
    transform-origin: center;
    transform: translateZ(0px);
  }

  #dice .cover.x {
    transform-origin: center;
    transform: rotateY(90deg);
  }

  #dice .cover.z {
    transform-origin: center;
    transform: rotateX(90deg);
  }

  #dice .front {
    transform-origin: center;
    transform: translateZ(100px);
  }

  #dice .front.inner {
    transform-origin: center;
    transform: translateZ(98px);
  }

  #dice .back {
    transform-origin: center;
    transform: rotateX(-180deg) translateZ(100px);
  }

  #dice .back.inner {
    transform-origin: center;
    transform: rotateX(-180deg) translateZ(98px);
  }

  #dice .right {
    transform-origin: center;
    transform: rotateY(90deg) translateZ(100px);
  }

  #dice .right.inner {
    transform-origin: center;
    transform: rotateY(90deg) translateZ(98px);
  }

  #dice .left {
    transform-origin: center;
    transform: rotateY(-90deg) translateZ(100px);
  }

  #dice .left.inner {
    transform-origin: center;
    transform: rotateY(-90deg) translateZ(98px);
  }

  #dice .top {
    transform-origin: center;
    transform: rotateX(90deg) translateZ(100px);
  }

  #dice .top.inner {
    transform-origin: center;
    transform: rotateX(90deg) translateZ(98px);
  }

  #dice .bottom {
    transform-origin: center;
    transform: rotateX(-90deg) translateZ(100px);
  }

  #dice .bottom.inner {
    transform-origin: center;
    transform: rotateX(-90deg) translateZ(98px);
  }

  .dot {
    position: absolute;
    width: 46px;
    height: 46px;
    border-radius: 23px;
    background: #444;
    box-shadow: inset 5px 0 10px #000;
  }

  .dot.center {
    margin: 77px 0 0 77px;
  }

  .dot.dtop {
    margin-top: 20px;
  }

  .dot.dleft {
    margin-left: 134px;
  }

  .dot.dright {
    margin-left: 20px;
  }

  .dot.dbottom {
    margin-top: 134px;
  }

  .dot.center.dleft {
    margin: 77px 0 0 20px;
  }

  .dot.center.dright {
    margin: 77px 0 0 134px;
  }

  #background {
    top: 0px;
    left: 0px;
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: var(--root-background, transparent);
    background-size: cover;
    background-origin: border-box;
  }

  #dice .side.front,
  #dice .side.top,
  #dice .side.right,
  #dice .side.left,
  #dice .side.bottom,
  #dice .side.back {
    background-image: var(--background-3d-cube-image, "none");
    background-size: cover;
    background-origin: border-box;
  }


  :root, :host {
    --background-3d-cube-image: url('{{cube_image}}');
    --box-width: 200px;
    font-size:.9em;
    font-family:sans-serif;
    --root-background: {{background}};
  }
  </style>

  <div id="background"></div>
  <div id="wrapper">
    <div id="platform">
      <div id="dice">
        <div class="side front">
        </div>
        <div class="side front inner"></div>
        <div class="side top"></div>
        <div class="side top inner"></div>
        <div class="side right"></div>
        <div class="side right inner"></div>
        <div class="side left"></div>
        <div class="side left inner"></div>
        <div class="side bottom"></div>
        <div class="side bottom inner"></div>
        <div class="side back"></div>
        <div class="side back inner"></div>
        <div class="side cover x"></div>
        <div class="side cover y"></div>
        <div class="side cover z"></div>
      </div>
    </div>
  </div>

  `;
            }
          }
          __name(u, "u");
          c(u, "CubeSplashScreenComponent"), (0, ge.Package)("org.qcobjects.components.splashscreen", [p, u]);
        }, "__splash_screen__")(it);
        var jo = it.SplashScreenComponent;
        Ne.SplashScreenComponent = jo;
        var Eo = it.VideoSplashScreenComponent;
        Ne.VideoSplashScreenComponent = Eo;
        var Po = it.CubeSplashScreenComponent;
        Ne.CubeSplashScreenComponent = Po;
      });
      var un = V((cn) => {
        "use strict";
        Object.defineProperty(cn, "__esModule", { value: true });
        var ln = J();
        (function() {
          "use strict";
          (0, ln.Package)("org.qcobjects.controllers", [c(class extends ln.Controller {
          }, "GenericController")]);
        })();
      });
      var pn = V((fn) => {
        "use strict";
        Object.defineProperty(fn, "__esModule", { value: true });
        var q = J();
        (function() {
          "use strict";
          (0, q.Package)("org.qcobjects.controllers.grid", [c(class extends q.Controller {
            constructor(r) {
              super(r), this.rows = this.component.body.getAttribute("rows"), this.rows = this.rows !== null ? this.rows : this.component.rows, this.cols = this.component.body.getAttribute("cols"), this.cols = this.cols !== null ? this.cols : this.component.cols;
            }
            cssGrid() {
              let r = this.component, f = r.shadowed ? r.shadowRoot : r.body;
              if (typeof this.rows < "u" && typeof this.cols < "u") {
                let p = (0, q._DOMCreateElement)("style"), u = "auto ".repeat(this.rows), v = "auto ".repeat(this.cols), g = "grid" + this.__instanceID.toString();
                p.innerHTML = `.${g}{
          display: grid;           grid-template-rows: ${u};           grid-template-columns: ${v};           margin:0 auto;         }`, f?.append(p), r.shadowed ? f?.host.classList.add(g) : f.classList.add(g);
              }
            }
            done() {
              this.cssGrid(), q.logger.debug("GridComponent built");
            }
          }, "GridController"), c(class extends q.Controller {
            constructor(r) {
              super(r), this._componentRoot = r.component.shadowed ? r.component.shadowRoot : r.component.body, this.rows = r.component.body.getAttribute("rows"), this.rows = r.rows !== null ? r.rows : r.component.rows, this.cols = r.component.body.getAttribute("cols"), this.cols = r.cols !== null ? r.cols : r.component.cols, q.logger.debug("DataGridController INIT");
            }
            getPageIndex(r, f, p) {
              return r = r > 0 ? r - 1 : 0, [p * r / f, p * r / f + p / f];
            }
            addSubcomponents() {
              this.component.subcomponents = [], typeof this._componentRoot < "u" && (this._componentRoot.innerHTML = ""), this.cssGrid(), q.logger.debug((0, q._DataStringify)(this.component.data));
              try {
                let r = this.component.body.getAttribute("subcomponentClass");
                if (r != null) {
                  let f, p, u, v = [...this.component.data], g = this.component.body.getAttribute("paginate-in"), b;
                  g = g !== null ? g : "client", g === "client" ? (b = this.component.body.getAttribute("page-number"), b = isNaN(b) || b === null ? -1 : b, b !== -1 ? (u = this.component.body.getAttribute("total-pages"), u = isNaN(u) ? 1 : u, f = this.getPageIndex(b, u, v.length)[0], p = this.getPageIndex(b, u, v.length)[1]) : (f = 0, p = v.length, u = 1), v = v.slice(f, p)) : (f = 0, p = v.length, u = 1), v.map((O, G, P) => {
                    try {
                      let T = (0, q._DOMCreateElement)("component");
                      T.setAttribute("name", (0, q.ClassFactory)(r).name), T.setAttribute("shadowed", (0, q.ClassFactory)(r).shadowed), T.setAttribute("cached", (0, q.ClassFactory)(r).cached), O = Object.assign(O, { __dataIndex: G, __dataLength: P.length, __page: b, __totalPages: u, __limit: p, __offset: f });
                      let L = (0, q.New)((0, q.ClassFactory)(r), { name: "item", data: O, templateURI: (0, q.ComponentURI)({ COMPONENTS_BASE_PATH: q.CONFIG.get("componentsBasePath", ""), COMPONENT_NAME: (0, q.ClassFactory)(r).name, TPLEXTENSION: q.CONFIG.get("tplextension", ""), TPL_SOURCE: (0, q.ClassFactory)(r).tplsource }), body: T, template: (0, q.ClassFactory)(r).template });
                      L.done = this.component.done.bind(L);
                      try {
                        if (L) {
                          L.data.__dataIndex = G, Object.hasOwnProperty.call(this.component.data, "length") && (L.data.__dataLength = this.component.data.length), q.logger.debug("adding subcomponent to body"), this._componentRoot?.append(L.body);
                          try {
                            this.component.subcomponents.push(L);
                          } catch {
                            q.logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID");
                          }
                        } else
                          q.logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID");
                      } catch {
                        q.logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID");
                      }
                    } catch {
                      q.logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID");
                    }
                  });
                } else
                  q.logger.debug("NO SUBCOMPONENT CLASS IN COMPONENT");
              } catch {
                q.logger.debug("No data for component");
              }
            }
            cssGrid() {
              let r = this.component, f = r.shadowed ? r.shadowRoot : r.body;
              if (typeof this.rows < "u" && typeof this.cols < "u") {
                let p = (0, q._DOMCreateElement)("style"), u = "auto ".repeat(this.rows), v = "auto ".repeat(this.cols), g = "grid" + this.__instanceID.toString();
                p.innerHTML = `.${g}{
          display: grid;           grid-template-rows: ${u};           grid-template-columns: ${v};           margin:0 auto;         }`, r.shadowed ? (r.body.append(p), f.host.classList.add(g)) : (f?.append(p), f.classList.add(g));
              }
            }
            done() {
              let r = this.component;
              q.logger.debug("DataGridController DONE");
              let f = this.component.body.getAttribute("serviceClass");
              if (f != null) {
                let p, u, v = r.body.getAttribute("paginate-in");
                if (v = v !== null ? v : "client", v === "server") {
                  let g = r.body.getAttribute("page-number");
                  g = isNaN(g) || g === null ? -1 : g;
                  let b;
                  if (g !== -1) {
                    let O = this.component.body.getAttribute("server-data-count") !== null ? this.component.body.getAttribute("server-data-count") : 1;
                    b = this.component.body.getAttribute("total-pages"), b = isNaN(b) ? 1 : b, p = this.getPageIndex(g, b, O)[0], u = this.getPageIndex(g, b, O)[1], r.serviceData = typeof r.serviceData < "u" ? r.serviceData : {}, r.serviceData.params = typeof r.serviceData.params < "u" ? r.serviceData.params : {}, r.serviceData.params.offset = p, r.serviceData.params.limit = u;
                  }
                }
                (0, q.serviceLoader)((0, q.New)((0, q.ClassFactory)(f), { data: r.serviceData }), false).then((g) => {
                  q.logger.debug("DONE SERVICE COMPONENT"), g.service.JSONresponse = JSON.parse(g.service.template), typeof g.service.JSONresponse.result < "u" ? (q.logger.debug((0, q._DataStringify)(g.service.JSONresponse.result)), r.data = g.service.JSONresponse.result) : r.data = g.service.JSONresponse, this.addSubcomponents();
                }, (g) => {
                  q.logger.debug(g);
                }).catch((g) => {
                  q.logger.debug("Something went wrong when calling the service from: " + f), q.logger.debug(g.message);
                });
              }
            }
          }, "DataGridController")]);
        })();
      });
      var mn = V((hn) => {
        "use strict";
        Object.defineProperty(hn, "__esModule", { value: true });
        var $ = J();
        (function() {
          "use strict";
          (0, $.Package)("org.qcobjects.controllers.list", [c(class extends $.Controller {
            constructor({ component: r, dependencies: f = [], valueField: p = void 0, labelField: u = void 0 }) {
              super({ component: r, dependencies: f, valueField: p, labelField: u }), this.component = r, this._componentRoot = this.component.shadowed ? this.component.shadowRoot : this.component.body, this.labelField = this.component.body.getAttribute("label-field"), this.valueField = this.component.body.getAttribute("value-field"), this.rows = this.component.body.getAttribute("rows"), this.rows = this.rows !== null ? this.rows : this.component.rows, this.cols = 1, $.logger.debug("ListController INIT");
            }
            getPageIndex(r, f, p) {
              return r = r > 0 ? r - 1 : 0, [p * r / f, p * r / f + p / f];
            }
            addSubcomponents() {
              this.component.subcomponents = [];
              let r = this.component.body.getAttribute("layout"), f = $.CONFIG.get("listBasePath", $.CONFIG.get("remoteSDKPath", "")), p = "";
              this.labelField = this.component.body.getAttribute("label-field"), this.valueField = this.component.body.getAttribute("value-field"), r === "horizontal" ? p = `@import url("${f}css/components/horizontal-list.css");` : p = `@import url("${f}css/components/list.css");`, typeof this._componentRoot < "u" && (this._componentRoot.innerHTML = `<style>${p}</style><ul></ul>`), $.logger.debug((0, $._DataStringify)(this.component.data));
              try {
                let u = this.component.body.getAttribute("subcomponentClass");
                if (u != null) {
                  let v, g, b, O = [...this.component.data], G = this.component.body.getAttribute("paginate-in");
                  G = G !== null ? G : "client";
                  let P;
                  G === "client" ? (P = this.component.body.getAttribute("page-number"), P = isNaN(P) || P === null ? -1 : P, P !== -1 ? (b = this.component.body.getAttribute("total-pages"), b = isNaN(b) ? 1 : b, v = this.getPageIndex(P, b, O.length)[0], g = this.getPageIndex(P, b, O.length)[1]) : (v = 0, g = O.length, b = 1), O = O.slice(v, g)) : (v = 0, g = O.length, b = 1), O.map((y, T) => {
                    try {
                      let D = (0, $._DOMCreateElement)("li");
                      y.label = y[this.labelField], y.value = y[this.valueField];
                      let ae = (0, $.New)((0, $.ClassFactory)(u), { name: "list-item", data: { label: y[this.labelField], value: y[this.valueField], __dataIndex: T, __page: P, __totalPages: b, __limit: g, __offset: v }, templateURI: (0, $.ComponentURI)({ COMPONENTS_BASE_PATH: $.CONFIG.get("componentsBasePath", ""), COMPONENT_NAME: (0, $.ClassFactory)(u).name, TPLEXTENSION: $.CONFIG.get("tplextension", ""), TPL_SOURCE: (0, $.ClassFactory)(u).tplsource }), body: D, template: (0, $.ClassFactory)(u).template });
                      ae.done = this.component.done.bind(ae);
                      try {
                        if (ae) {
                          ae.data.__dataIndex = T, Object.hasOwnProperty.call(this.component.data, "length") && (ae.data.__dataLength = this.component.data.length), $.logger.debug("adding subcomponent to body"), this._componentRoot.subelements("ul").map((le) => le.append(ae));
                          try {
                            this.component.subcomponents.push(ae);
                          } catch {
                            $.logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID");
                          }
                        } else
                          $.logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID");
                      } catch {
                        $.logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID");
                      }
                    } catch {
                      $.logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID");
                    }
                  });
                } else
                  $.logger.debug("NO SUBCOMPONENT CLASS IN COMPONENT");
              } catch {
                $.logger.debug("No data for component");
              }
            }
            cssGrid() {
              let r = this.component, f = r.shadowed ? r.shadowRoot : r.body;
              if (typeof this.rows < "u" && typeof this.cols < "u") {
                let p = (0, $._DOMCreateElement)("style"), u = "auto ".repeat(this.rows), v = "auto ".repeat(this.cols), g = "grid" + this.__instanceID.toString();
                p.innerHTML = `.${g}{
            display: grid;             grid-template-rows: ${u};             grid-template-columns: ${v};             margin:0 auto;           }`, f.append(p), f.classList.add(g);
              }
            }
            done() {
              this.cssGrid();
              let r = this.component;
              $.logger.debug("ListController DONE");
              let f = this.component.body.getAttribute("serviceClass");
              if (f != null) {
                let p, u, v = r.body.getAttribute("paginate-in");
                if (v = v !== null ? v : "client", v === "server") {
                  let g = r.body.getAttribute("page-number");
                  g = isNaN(g) || g === null ? -1 : g;
                  let b;
                  if (g !== -1) {
                    let O = this.component.body.getAttribute("server-data-count") !== null ? this.component.body.getAttribute("server-data-count") : 1;
                    b = this.component.body.getAttribute("total-pages"), b = isNaN(b) ? 1 : b, p = this.getPageIndex(g, b, O)[0], u = this.getPageIndex(g, b, O)[1], r.serviceData = typeof r.serviceData < "u" ? r.serviceData : {}, r.serviceData.params = typeof r.serviceData.params < "u" ? r.serviceData.params : {}, r.serviceData.params.offset = p, r.serviceData.params.limit = u;
                  }
                }
                (0, $.serviceLoader)((0, $.New)((0, $.ClassFactory)(f), { data: r.serviceData }), false).then((g) => {
                  $.logger.debug("DONE SERVICE COMPONENT"), g.service.JSONresponse = JSON.parse(g.service.template), typeof g.service.JSONresponse.result < "u" ? ($.logger.debug((0, $._DataStringify)(g.service.JSONresponse.result)), r.data = g.service.JSONresponse.result) : r.data = g.service.JSONresponse, this.addSubcomponents();
                }, (g) => {
                  $.logger.debug(g);
                }).catch((g) => {
                  $.logger.debug("Something went wrong when calling the service from: " + f), $.logger.debug(g.message);
                });
              }
            }
          }, "ListController")]);
        })();
      });
      var bn = V((gn, st) => {
        "use strict";
        Object.defineProperty(gn, "__esModule", { value: true });
        var Se = J();
        (function(w) {
          "use strict";
          (0, Se.Package)("org.qcobjects.controllers.slider", [c(class extends Se.Controller {
            constructor({ component: f, dependencies: p = [], duration: u = 7100, slideIndex: v = 0, interval: g = null, sliderHandlerName: b = null }) {
              super({ component: f, dependencies: p, duration: u, slideIndex: v, interval: g, sliderHandlerName: b }), this.slideIndex = 0, this.duration = 7100, this.interval = null, this.sliderHandlerName = "", this.component = f, this._componentRoot = f.shadowed ? f.shadowRoot : f.body, this.sliderHandlerName = "slider_" + this.component.__instanceID.toString(), w.set(this.sliderHandlerName, this);
            }
            stop() {
              this.interval != null && clearInterval(this.interval);
            }
            plusSlidesAndStop(f) {
              this.stop(), this.plusSlides(f);
            }
            plusSlides(f) {
              this.showSlides(this.slideIndex += f);
            }
            currentSlide(f) {
              this.stop(), this.showSlides(this.slideIndex = f);
            }
            automate() {
              this.interval = setInterval(() => {
                this.plusSlides(1);
              }, this.duration);
            }
            showSlides(f) {
              let p = this._componentRoot?.subelements(".qcoSlides"), u = this._componentRoot?.subelements(".qcoSlider__dots--dot");
              f > p.length - 1 && (this.slideIndex = 0), f < 0 && (this.slideIndex = 0), p.filter((v, g) => g !== this.slideIndex).map((v) => (0, Se.New)((0, Se.ClassFactory)("Fade"), {}).apply(v, 1, 0)), u.filter((v, g) => g !== this.slideIndex).map((v) => v.classList.remove("active"));
              try {
                u[this.slideIndex].classList.add("active");
              } catch (v) {
                Se.logger.debug(`Something went wrong when trying to activate a slide: ${this.slideIndex} - ${v.message}`);
              }
              setTimeout(() => {
                p.filter((v, g) => g !== this.slideIndex).map((v) => (v.style.display = "none", v.style.display));
                try {
                  p[this.slideIndex].style.display = "block", (0, Se.New)((0, Se.ClassFactory)("Fade"), {}).apply(p[this.slideIndex], 0, 1);
                } catch (v) {
                  Se.logger.debug(`Something went wrong when trying to show a slide: ${this.slideIndex} - ${v.message}`);
                }
              }, 700);
            }
            fillDots() {
              (this._componentRoot?.subelements(".qcoSlides")).map((p, u) => {
                let v = document.createElement("span"), g = `<span class="qcoSlider__dots--dot" onclick="global.get('${this.sliderHandlerName}').currentSlide(${u})"></span>`;
                return v.innerHTML = g, this._componentRoot?.subelements(".qcoSlider__dots")[0].append(v);
              });
            }
            done() {
              (this._componentRoot?.subelements(".qcoSlides")).filter((p, u) => u !== this.slideIndex).map((p) => (p.style.display = "none", p.style.display)), setTimeout(() => {
                this.fillDots(), this.slideIndex = 0, this.showSlides(this.slideIndex), this.automate();
              }, 3e3);
            }
          }, "SliderController")]);
        })(typeof st == "object" && typeof st.exports == "object" ? st.exports = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global2 < "u" ? global2 : {} : typeof global2 == "object" ? global2 : typeof window == "object" ? window : {});
      });
      var wn = V((vn) => {
        "use strict";
        Object.defineProperty(vn, "__esModule", { value: true });
        var ce = J(), yn = Ct();
        (function() {
          "use strict";
          (0, ce.Package)("org.qcobjects.controllers.form", [c(class extends ce.Controller {
            getDefault() {
              return function(r, f, p) {
                let u = { name: "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$", email: "^([A-Za-z0-9]+)@([A-Za-z0-9]+).([A-Za-z0-9]+)$" }, v = p.getAttribute("pattern") || u[r];
                return new RegExp(v).test(f);
              };
            }
          }, "FormValidations"), c(class extends ce.Controller {
            hasValidation(r) {
              let f = r.getAttribute("data-field"), p = false;
              return typeof this.validations < "u" && Object.hasOwnProperty.call(this.validations, f) && (p = true), p;
            }
            isInvalid(r) {
              let f = false, p = r.getAttribute("data-field"), u = this.component.data[p], v = c((g, b, O) => typeof this.validations < "u" && Object.hasOwnProperty.call(this.validations, g) && this.validations[g].call(null, g, b, O), "_execValidation");
              return typeof this.validations < "u" && !v(p, u, r) && (f = true), f;
            }
            isValid(r) {
              return !this.isInvalid(r);
            }
            save() {
              this.serviceClass !== "" ? (location.href = this.formSettings.loadingRouting, (0, ce.serviceLoader)((0, ce.New)((0, ce.ClassFactory)(this.serviceClass), { data: this.component.data }), false).then((r) => {
                console.log("DONE SERVICE COMPONENT");
                try {
                  console.log(r.service.JSONresponse);
                } catch {
                }
                location.href = this.formSettings.nextRouting;
              }, (r) => {
                ce.logger.debug(r), location.href = this.formSettings.backRouting;
              })) : ce.logger.debug("No service name declared on serviceClass property");
            }
            formSaveTouchHandler() {
              ce.logger.debug("Saving data...");
              let r = this.component.shadowed ? (this.component?.shadowRoot).host : this.component.body;
              if (this.component.executeBindings(), this.formValidatorModal != null) {
                let p = r.subelements("*[data-field]").filter((b) => this.hasValidation(b)), u = c(function(b, O) {
                  return c((P, y) => y.getAttribute("aria-labelledby") !== null ? (y.getAttribute("aria-labelledby") || "").split(" ").map((T) => P.subelements(`#${T}`).map((L) => L.innerHTML)).join(" ") : null, "_arialabelledby")(b, O) || O.getAttribute("aria-label") || O.getAttribute("placeholder") || O.getAttribute("name") || O.getAttribute("data-field");
                }, "_labelledby"), v = c(function(b) {
                  return b.getAttribute("title") || b.getAttribute("aria-title") || "";
                }, "_ariatitle"), g = p.filter((b) => this.isInvalid(b));
                if (g.length > 0) {
                  let b = `
<details>
    <summary>Please verify the following incorrect fields:</summary>
    <ul>
      <div>
      ${g.map((O) => "<li><div>" + u(r, O) + "</div><div>" + v(O) + "</div></li>").join("")}
      </div>
    </ul>
</details>
`;
                  this.formValidatorModal.body.subelements(".validationMessage")[0].innerHTML = b, this.formValidatorModal.modal();
                } else
                  this.save();
              } else
                ce.logger.debug("Unable to find the modal validator..."), ce.logger.debug("Saving data..."), this.save();
            }
            constructor(r) {
              super(r), this.validations = [], this.serviceClass = "", this.formSettings = { backRouting: "#", loadingRouting: "#loading", nextRouting: "#signupsuccessful" }, this.component = r.component, this.component = this.component.Cast(yn.FormField);
            }
            done() {
              ce.logger.debugEnabled = true;
              try {
                this.component.createBindingEvents();
                let r = (0, ce._DOMCreateElement)("div");
                r.className = "modal_body", this.formValidatorModal = (0, ce.New)(yn.ModalComponent, { body: r, subcomponents: [], data: { content: '<div class="validationMessage"></div>' } }), (0, ce.Tag)(".modal_body").map((f) => document.body.removeChild(f)), document.body.append(this.formValidatorModal);
              } catch {
                ce.logger.debug("Unable to create the modal");
              }
              this.onpress(".submit", () => {
                this.formSaveTouchHandler();
              });
            }
          }, "FormController")]);
        })();
      });
      var _n = V((On) => {
        "use strict";
        Object.defineProperty(On, "__esModule", { value: true });
        var fe = J();
        (function() {
          "use strict";
          (0, fe.Package)("org.qcobjects.controllers.swagger", [c(class extends fe.Controller {
            startSwaggerUI() {
              if (typeof SwaggerUIBundle < "u") {
                let r = SwaggerUIBundle({ url: fe.CONFIG.get("swagger-ui-url", "https://petstore.swagger.io/v2/swagger.json"), dom_id: "#" + fe.CONFIG.get("swagger-ui-dom_id", "swagger-ui"), deepLinking: true, presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset], plugins: [SwaggerUIBundle.plugins.DownloadUrl], layout: "StandaloneLayout" });
                window.ui = r;
              }
            }
            done() {
              this.component.body.innerHTML = '<div id="' + fe.CONFIG.get("swagger-ui-dom_id", "swagger-ui") + '"></div>';
              let r = fe.CONFIG.get("swagger-ui-package-path", "node_modules/swagger-ui-dist/");
              this.dependencies?.push((0, fe.New)(fe.SourceJS, { url: r + "swagger-ui-standalone-preset.js", external: fe.CONFIG.get("swagger-ui-external", false) })), this.dependencies?.push((0, fe.New)(fe.SourceCSS, { url: r + "swagger-ui.css", external: fe.CONFIG.get("swagger-ui-external", false) })), this.dependencies?.push((0, fe.New)(fe.SourceJS, { url: r + "swagger-ui-bundle.js", external: fe.CONFIG.get("swagger-ui-external", false), done: () => {
                this.startSwaggerUI();
              } }));
            }
          }, "SwaggerUIController")]);
        })();
      });
      var Nn = V((Cn) => {
        "use strict";
        Object.defineProperty(Cn, "__esModule", { value: true });
        var In = J();
        (function() {
          "use strict";
          (0, In.Package)("org.qcobjects.modal.controllers", [c(class extends In.Controller {
            done() {
              let r = this.component;
              r.body.innerHTML = r.body.innerHTML.replace("/{{content}}/g", r.submodal.template);
            }
          }, "ModalController")]);
        })();
      });
      var Tn = V((xn) => {
        "use strict";
        Object.defineProperty(xn, "__esModule", { value: true });
        var Sn = J();
        (function() {
          "use strict";
          (0, Sn.Package)("org.qcobjects.views", [c(class extends Sn.View {
          }, "GridView")]);
        })();
      });
      var En = V((jn) => {
        "use strict";
        Object.defineProperty(jn, "__esModule", { value: true });
        var An = J();
        (function() {
          (0, An.Package)("org.qcobjects.tools.canvas", [c(class extends An.InheritClass {
            drawImageFilled(r, f, p = 1, u = 0, v = 0) {
              let g = Math.max(f.width / r.width, f.height / r.height);
              g = g * p;
              let b = f.width / 2 - r.width / 2 * g, O = f.height / 2 - r.height / 2 * g;
              f.getContext("2d")?.drawImage(r, u + b, v + O, r.width * g, r.height * g);
            }
            getImageResized(r, f, p, u, v = 1, g = 0, b = 0) {
              let O = document.createElement("canvas");
              return O.width = f, O.height = p, O.style.width = f.toString(), O.style.height = p.toString(), this.drawImageFilled(r, O, v, g, b), u.src = O.toDataURL("image/png"), O;
            }
          }, "CanvasTool")]);
        })();
      });
      var Mn = V((Pn) => {
        "use strict";
        Object.defineProperty(Pn, "__esModule", { value: true });
        var Z = J(), Le = Re();
        (function() {
          (0, Z.Package)("org.qcobjects.tools.layouts", [c(class extends Z.InheritClass {
            constructor({ component: r = null, dependencies: f = [] }) {
              super({ component: r, dependencies: f }), this.dependencies = [];
            }
            load() {
              this.dependencies.push((0, Z.New)(Z.SourceCSS, { external: !Z.CONFIG.get("useLocalSDK", false), url: Z.CONFIG.get("useLocalSDK", false) ? "css/basic-layout.css" : Z.CONFIG.get("remoteSDKPath", false) + "css/basic-layout.css" }));
            }
            coloredBorder() {
              setTimeout(function() {
                (0, Z.Tag)("nav").map((r) => {
                  r.style.border = "20px solid #3333";
                }), (0, Z.Tag)("nav").map((r) => {
                  r.style.backgroundColor = "#129999";
                }), (0, Z.Tag)("component>footer").map((r) => {
                  r.style.background = "#876";
                }), (0, Z.Tag)("component>div").map((r) => {
                  r.style.border = "3px dashed #fff";
                }), (0, Z.Tag)("component>section").map((r) => {
                  r.style.border = "3px solid #000";
                }), (0, Z.Tag)("component>section").map((r) => {
                  r.style.backgroundColor = "#fffaaa";
                }), (0, Z.Tag)("component>article").map((r) => {
                  r.style.border = "3px dotted #000";
                }), (0, Z.Tag)("component>header").map((r) => {
                  r.style.background = "#789";
                }), (0, Z.Tag)("component>footer").map((r) => {
                  r.style.background = "#876";
                }), (0, Z.Tag)("component>article:nth-child(1)").map((r) => {
                  r.style.border = "1px solid #444";
                }), (0, Z.Tag)("component>article:nth-child(1)").map((r) => {
                  r.style.backgroundColor = "#555aaa";
                }), (0, Z.Tag)("component>article:nth-child(2)").map((r) => {
                  r.style.backgroundColor = "#aaa333";
                }), (0, Z.Tag)("component>article:nth-child(3)").map((r) => {
                  r.style.backgroundColor = "#54da82";
                }), (0, Z.Tag)("*").map((r) => {
                  r.style.color = "#fff";
                }), (0, Z.Tag)("component>article").map((r) => Le.Fade.apply(r, 0, 1)), (0, Z.Tag)("component>footer").map((r) => Le.Fade.apply(r, 0, 1)), (0, Z.Tag)("component>header").map((r) => Le.Fade.apply(r, 0, 1)), (0, Z.Tag)("nav").map((r) => {
                  r.style.display = "block", r.style.width = r.offsetParent?.scrollWidth.toString() || r.clientWidth.toString(), Le.MoveXInFromLeft.apply(r);
                }), (0, Z.Tag)("component>article").map((r) => {
                  r.style.display = "block", r.style.height = r.offsetParent?.scrollHeight.toString() || r.clientHeight.toString(), Le.MoveYInFromBottom.apply(r);
                }), (0, Z.Tag)("component>article:nth-child(2)").map((r) => {
                  r.style.display = "block", r.style.width = r.offsetParent?.scrollWidth.toString() || r.clientWidth.toString(), Le.MoveXInFromRight.apply(r);
                });
              }, 300);
            }
          }, "BasicLayout")]);
        })();
      });
      var Et = V((dt, at) => {
        "use strict";
        Object.defineProperty(dt, "__esModule", { value: true });
        dt.SessionUserToken = void 0;
        var xe = J(), Rn = typeof at == "object" && typeof at.exports == "object" ? at.exports = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global2 < "u" ? global2 : {} : typeof global2 == "object" ? global2 : typeof window == "object" ? window : {};
        (function(w) {
          "use strict";
          class r extends xe.InheritClass {
            constructor(p) {
              super(p);
              let u = this;
              this.__cache__ = new xe.ComplexStorageCache({ index: u.__instanceID.toString(), load() {
                let v;
                return typeof navigator < "u" && typeof origin < "u" ? v = xe._Crypt.encrypt(`${navigator.userAgent}|${p.username}|${(+/* @__PURE__ */ new Date()).toString()}`, origin) : v = xe._Crypt.encrypt(`${p.username}|${(+/* @__PURE__ */ new Date()).toString()}`, xe.CONFIG.get("domain", "localhost")), r.user = { priority: u.__instanceID.toString(), token: v }, r.user;
              }, alternate(v) {
                r.user = v?.cache.getCached(u.__instanceID.toString());
              } });
            }
            static generateIndex(p) {
              return typeof Buffer < "u" ? Buffer.from(p, "ascii").toString("base64") : btoa(p);
            }
            getGlobalUser(...p) {
              let u = [p].join("|"), v = "userToken_" + r.generateIndex(u);
              return (typeof w.get(v) > "u" || w.get(v) === null) && w.set(v, (0, xe.New)(r, { username: u })), r.user = w.get(v).user, w.get(v).user;
            }
            getGlobalUserToken(...p) {
              return this.getGlobalUser(p).token;
            }
            getGlobalUserId(...p) {
              return this.getGlobalUser(p).id;
            }
            getGlobalUserPriority(...p) {
              return this.getGlobalUser(p).priority;
            }
            getLoginCredentialsToken(p, u) {
              return xe._Crypt.encrypt(`${p}${u}`, this.getGlobalUserToken(p));
            }
            closeGlobalSession(...p) {
              this.getGlobalUser(p);
              let u = [p].join("|"), v = "userToken_" + r.generateIndex(u);
              typeof w.get(v) < "u" && (w.get(v).__cache__.clear(), w.set(v, null), r.user = {});
            }
          }
          __name(r, "r");
          c(r, "SessionUserToken"), r.user = {}, (0, xe.Package)("org.qcobjects.cloud.auth.session.usertoken", [r]);
        })(Rn);
        var Mo = Rn.SessionUserToken;
        dt.SessionUserToken = Mo;
      });
      var Ln = V((qn) => {
        "use strict";
        Object.defineProperty(qn, "__esModule", { value: true });
        var Pt = J(), kn = Et();
        (function() {
          "use strict";
          (0, Pt.Package)("org.qcobjects.cloud.auth.session.data", [c(class extends Pt.InheritClass {
            constructor() {
              super(...arguments), this.__session_container__ = null;
            }
            setSessionContainer() {
              this.__session_container__ = [...arguments];
            }
            getSessionContainer() {
              if (typeof this.__session_container__ > "u" || this.__session_container__ === null)
                throw new Error("You need to set a session container first: sessionData.setSessionContainer(...arguments)");
              return this.__session_container__;
            }
            getSessionData(...r) {
              let f = sessionStorage.getItem(`${this.index(r)}`), p;
              return f !== null && (p = JSON.parse(f)), (typeof p > "u" || p === null) && (p = {}), p;
            }
            index(...r) {
              if (typeof kn.SessionUserToken > "u")
                throw new Error('You need to import SessionUserToken first: Import ("org.qcobjects.cloud.auth.session.usertoken")');
              return `session_${btoa(kn.SessionUserToken.getGlobalUserToken(r))}`;
            }
            save(...r) {
              let f = (0, Pt._DataStringify)(this.sessionData);
              sessionStorage.setItem(`${this.index(r)}`, f);
            }
            get(r, f) {
              let p = this.getSessionData(this.getSessionContainer());
              return typeof p[r] < "u" ? p[r] : f;
            }
            set(r, f) {
              let p = this.getSessionContainer(), u = this.getSessionData(p);
              this.sessionData = u, this.sessionData[r] = f, this.save(p);
            }
          }, "SessionData")]);
        })();
      });
      var Ro = V((Mt, lt) => {
        Object.defineProperty(Mt, "__esModule", { value: true });
        var Fn = J(), Gn = typeof lt == "object" && typeof lt.exports == "object" ? lt.exports = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global2 < "u" ? global2 : {} : typeof global2 == "object" ? global2 : typeof window == "object" ? window : {};
        c(/* @__PURE__ */ __name(function w(r) {
          "use strict";
          if (typeof Object.defineProperty < "u" && typeof r < "u")
            try {
              Object.defineProperty(r, "__qcobjects_sdk__", { enumerable: true, configurable: false, writable: false, value: w });
            } catch {
              typeof r.__qcobjects_sdk__ < "u" && (r.__qcobjects_sdk__.__loaded__ = true);
            }
          if (typeof r.__qcobjects_sdk__.__loaded__ > "u") {
            if (r.__qcobjects_sdk__.__loaded__ = true, typeof r > "u")
              throw Error("Top context empty: It should either global, module or window");
            let f = Fn.GlobalSettings.__start__.bind(r), p = [];
            p = [new Promise((u) => {
              Jt(), en(), Ct(), tn(), nn(), rn(), an(), dn(), un(), pn(), mn(), bn(), wn(), _n(), Re(), Nn(), Tn(), En(), Mn(), Et(), Ln(), u();
            })], r._sdk_ = Promise.all(p).then(() => {
              Fn.CONFIG.set("useSDK", true), f();
            });
          }
        }, "w"), "__qcobjects_sdk__")(Gn);
        Mt.default = Gn;
      });
      return Ro();
    })();
  }
});

// node_modules/qcobjects-sdk/public/index.cjs
var require_public = __commonJS({
  "node_modules/qcobjects-sdk/public/index.cjs"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var sdk = require_QCObjects_SDK();
    module.exports = sdk;
  }
});

// node_modules/qcobjects/src/QCObjects.js
var require_QCObjects = __commonJS({
  "node_modules/qcobjects/src/QCObjects.js"(exports, module) {
    (/* @__PURE__ */ __name(function __qcobjects__(_top) {
      "use strict";
      if (typeof Object.defineProperty !== "undefined" && typeof _top !== "undefined") {
        try {
          Object.defineProperty(_top, "__qcobjects__", {
            enumerable: true,
            configurable: false,
            writable: false,
            value: __qcobjects__
          });
        } catch (e) {
          if (typeof _top.__qcobjects__ !== "undefined") {
            _top.__qcobjects__.loaded = true;
          }
        }
      }
      if (typeof _top.__qcobjects__.loaded === "undefined") {
        let Ready = function(e) {
          if (isBrowser) {
            _QC_READY_LISTENERS.push(e.bind(window));
          } else if (typeof global2 !== "undefined") {
            _QC_READY_LISTENERS.push(e.bind(global2));
          }
        };
        __name(Ready, "Ready");
        _top.__qcobjects__.loaded = true;
        var global2 = _top;
        _top.global = global2;
        var isDeno = typeof window !== "undefined" && "Deno" in window;
        var isBrowser = typeof window !== "undefined" && typeof window.self !== "undefined" && window === window.self && !isDeno;
        var isNodeCommonJS = typeof module !== "undefined" ? true : false;
        var deno_require = /* @__PURE__ */ __name(function() {
        }, "deno_require");
        var _require_ = /* @__PURE__ */ __name(function() {
          return isDeno ? deno_require(...arguments) : __require(...arguments);
        }, "_require_");
        var _protected_code_ = /* @__PURE__ */ __name(function(_) {
          var __oldtoString = typeof _.prototype !== "undefined" ? _.prototype.toString : function() {
            return "";
          };
          if (typeof _.prototype !== "undefined") {
            _.prototype.toString = function() {
              var _protected_symbols = [
                "__qcobjects__",
                "__qcobjects_sdk__",
                "__loaded__",
                "ComplexStorageCache",
                "css",
                "append",
                "attachIn",
                "debug",
                "info",
                "warn",
                "QC_Append",
                "set",
                "get",
                "done",
                "componentDone",
                "_new_",
                "__new__",
                "Class",
                "ClassFactory",
                "New",
                "Export",
                "Package",
                "Import",
                "subelements",
                "componentLoader",
                "buildComponents",
                "Controller",
                "View",
                "VO",
                "Service",
                "serviceLoader",
                "JSONService",
                "ConfigService",
                "SourceJS",
                "SourceCSS",
                "ArrayList",
                "ArrayCollection",
                "Effect",
                "Timer",
                "sum",
                "avg",
                "table",
                "max",
                "min",
                "range",
                "matrix",
                "matrix2d",
                "matrix3d",
                "unique",
                "uniqueId",
                "shortCode",
                "NamespaceRef"
              ];
              var _ret_;
              if (_protected_symbols.includes(this.name)) {
                _ret_ = this.name + "{ [QCObjects native code] }";
              } else {
                _ret_ = __oldtoString.call(this);
              }
              return _ret_;
            };
          }
        }, "_protected_code_");
        _protected_code_(Function);
        var _methods_ = /* @__PURE__ */ __name(function(_) {
          var _m = [];
          for (var i in _) {
            if ((typeof _[i]).toLowerCase() === "function") {
              _m.push(_[i]);
            }
          }
          return _m;
        }, "_methods_");
        String.prototype.__mAll__ = function(regex) {
          var matches = [];
          this.replace(regex, function() {
            var match = Array.prototype.slice.call(arguments, 0, -2);
            match.input = arguments[arguments.length - 1];
            match.index = arguments[arguments.length - 2];
            matches.push(match);
          });
          return matches;
        };
        if (typeof String.prototype.matchAll === "undefined") {
          String.prototype.matchAll = String.prototype.__mAll__;
        }
        var _DOMCreateElement = /* @__PURE__ */ __name(function(elementName) {
          var _ret_;
          if (isBrowser) {
            _ret_ = document.createElement(elementName);
          } else {
            _ret_ = {};
          }
          return _ret_;
        }, "_DOMCreateElement");
        if (!isBrowser) {
          const fs = _require_("fs");
        }
        var _DataStringify = /* @__PURE__ */ __name(function(data) {
          var getCircularReplacer = /* @__PURE__ */ __name(function() {
            var seen = /* @__PURE__ */ new WeakSet();
            var _level = 0;
            return function(key, value) {
              if (typeof value === "object" && value !== null) {
                if (seen.has(value)) {
                  _level += 1;
                  return _level <= 3 ? _LegacyCopy(value) : null;
                }
                seen.add(value);
              }
              return value;
            };
          }, "getCircularReplacer");
          return JSON.stringify(data, getCircularReplacer());
        }, "_DataStringify");
        if (isBrowser) {
          var _subelements = /* @__PURE__ */ __name(function subelements(selector) {
            return [...this.querySelectorAll(selector)];
          }, "subelements");
          Element.prototype.subelements = _subelements;
          HTMLDocument.prototype.subelements = _subelements;
          HTMLElement.prototype.subelements = _subelements;
          if (typeof ShadowRoot !== "undefined") {
            ShadowRoot.prototype.subelements = _subelements;
          }
        }
        if (isBrowser) {
          try {
            _top = typeof window.top !== "undefined" ? window.top : window;
            _top["_allowed_"] = true;
          } catch (e) {
            try {
              _top = document;
              _top["_allowed_"] = true;
            } catch (e2) {
              try {
                _top = global2;
                _top["_allowed_"] = true;
              } catch (e3) {
                _top = {};
                _top["_allowed_"] = true;
              }
            }
          }
        } else if (typeof global2 !== "undefined") {
          _top = global2;
        }
        var _domain_, _basePath_;
        var _tag_filter_ = "quick-component:not([loaded]),component:not([loaded])";
        _basePath_ = function() {
          var _basePath = "";
          if (isBrowser) {
            var baseURI = _top.document.baseURI.split("?")[0].split("/");
            baseURI.pop();
            _basePath = baseURI.join("/") + "/";
          } else {
            var process2;
            try {
              process2 = _require_("process");
            } catch (e) {
            }
            if (typeof process2 !== "undefined") {
              _basePath = `${process2.cwd()}/`;
            } else {
              _basePath = "";
            }
          }
          return _basePath;
        }();
        if (isBrowser) {
          if (!("Promise" in _top)) {
            _top.Promise = function(_f) {
              var _p = {
                then() {
                },
                catch() {
                },
                _then(response) {
                  this.then.call(_p, response);
                },
                _catch(response) {
                  this.catch.call(_p, response);
                }
              };
              _f.call(_p, _p._then, _p._catch);
              return _p;
            };
          }
          if (typeof _top.console === "undefined") {
            _top.console = function() {
            };
            _top.console.prototype.log = function(message) {
            };
          }
          _domain_ = function() {
            return typeof document !== "undefined" && document.domain !== "" ? document.domain : "localhost";
          }();
          var _secretKey = function() {
            var __secretKey = _top[(![] + [])[+!+[] + +!+[]] + (typeof ![])[+!+[]] + (typeof [])[(+!+[] + +!+[]) * (+!+[] + +!+[])] + (![] + [])[+!+[]] + (!![] + [])[+[]] + ([] + [] + [][[]])[+[+!+[] + [+[]]] / (+!+[] + +!+[])] + (typeof ![])[+!+[]] + ([] + [] + [][[]])[+!+[]]]["h" + (typeof ![])[+!+[]] + (![] + [])[+!+[] + (+!+[] + +!+[])] + (!![] + [])[+[]]].toLowerCase();
            return __secretKey;
          }();
          var is_phonegap = function() {
            return typeof cordova !== "undefined" ? true : false;
          }();
        } else {
          var _secretKey = "secret";
          _domain_ = "localhost";
        }
        _top._asyncLoad = [];
        var asyncLoad = /* @__PURE__ */ __name(function(callback, args) {
          var asyncCallback = {
            "func": callback,
            "args": args,
            "dispatch"() {
              this.func.apply(null, this.args);
            }
          };
          _top._asyncLoad.push(asyncCallback);
          return asyncCallback;
        }, "asyncLoad");
        if (isBrowser) {
          var _fireAsyncLoad = /* @__PURE__ */ __name(function() {
            if (document.readyState === "complete") {
              _top._asyncLoad.map(function(fc) {
                fc.dispatch.call(fc);
              });
            }
          }, "_fireAsyncLoad");
          document.onreadystatechange = _fireAsyncLoad;
        } else if (typeof _top.global !== "undefined") {
          _top.global._fireAsyncLoad = function() {
            _top._asyncLoad.map(function(fc) {
              fc.dispatch.call(fc);
            });
          };
        }
        _top.asyncLoad = asyncLoad;
        var Logger = /* @__PURE__ */ __name(function() {
          return {
            debugEnabled: true,
            infoEnabled: true,
            warnEnabled: true,
            debug(message) {
              if (this.debugEnabled) {
                console.log("\x1B[35m%s\x1B[0m", `[DEBUG][${performance.now().toLocaleString()}] ${message}`);
              }
            },
            info(message) {
              var color;
              if (this.infoEnabled) {
                if (isBrowser) {
                  color = "\x1B[103m%s\x1B[0m";
                } else {
                  color = "\x1B[33m%s\x1B[0m";
                }
                console.info(color, `[INFO][${performance.now().toLocaleString()}] ${message}`);
              }
            },
            warn(message) {
              if (this.warnEnabled) {
                console.warn("\x1B[31m%s\x1B[0m", `[WARN][${performance.now().toLocaleString()}] ${message}`);
              }
            }
          };
        }, "Logger");
        var logger = new Logger();
        logger.debugEnabled = false;
        logger.infoEnabled = true;
        _top.logger = logger;
        var Base64 = {
          _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          encode(e) {
            var t = "";
            var n, r, i, s, o, u, a;
            var f = 0;
            e = Base64._utf8_encode(e);
            while (f < e.length) {
              n = e.charCodeAt(f++);
              r = e.charCodeAt(f++);
              i = e.charCodeAt(f++);
              s = n >> 2;
              o = (n & 3) << 4 | r >> 4;
              u = (r & 15) << 2 | i >> 6;
              a = i & 63;
              if (isNaN(r)) {
                u = a = 64;
              } else if (isNaN(i)) {
                a = 64;
              }
              t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a);
            }
            return t;
          },
          decode(e) {
            var t = "";
            var n, r, i;
            var s, o, u, a;
            var f = 0;
            e = e.replace(/[^A-Za-z0-9+/=]/g, "");
            while (f < e.length) {
              s = this._keyStr.indexOf(e.charAt(f++));
              o = this._keyStr.indexOf(e.charAt(f++));
              u = this._keyStr.indexOf(e.charAt(f++));
              a = this._keyStr.indexOf(e.charAt(f++));
              n = s << 2 | o >> 4;
              r = (o & 15) << 4 | u >> 2;
              i = (u & 3) << 6 | a;
              t = t + String.fromCharCode(n);
              if (u !== 64) {
                t = t + String.fromCharCode(r);
              }
              if (a !== 64) {
                t = t + String.fromCharCode(i);
              }
            }
            t = Base64._utf8_decode(t);
            return t;
          },
          _utf8_encode(e) {
            e = e.replace(/rn/g, "n");
            var t = "";
            for (var n = 0; n < e.length; n++) {
              var r = e.charCodeAt(n);
              if (r < 128) {
                t += String.fromCharCode(r);
              } else if (r > 127 && r < 2048) {
                t += String.fromCharCode(r >> 6 | 192);
                t += String.fromCharCode(r & 63 | 128);
              } else {
                t += String.fromCharCode(r >> 12 | 224);
                t += String.fromCharCode(r >> 6 & 63 | 128);
                t += String.fromCharCode(r & 63 | 128);
              }
            }
            return t;
          },
          _utf8_decode(e) {
            var t = "";
            var n = 0;
            var r = 0;
            var c1 = 0;
            var c2 = 0;
            var c3;
            while (n < e.length) {
              r = e.charCodeAt(n);
              if (r < 128) {
                t += String.fromCharCode(r);
                n++;
              } else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1);
                t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                n += 2;
              } else {
                c2 = e.charCodeAt(n + 1);
                c3 = e.charCodeAt(n + 2);
                t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                n += 3;
              }
            }
            return t;
          }
        };
        var waitUntil = /* @__PURE__ */ __name(function(func, exp) {
          var _waitUntil = /* @__PURE__ */ __name(function(func2, exp2) {
            var maxWaitCycles = 2e3;
            var _w = 0;
            var _t = setInterval(function() {
              if (exp2.call()) {
                clearInterval(_t);
                func2.call();
                logger.debug("Ejecuting " + func2.name + " after wait");
              } else {
                if (_w < maxWaitCycles) {
                  _w += 1;
                  logger.debug("WAIT UNTIL " + func2.name + " is true, " + _w.toString() + " cycles");
                } else {
                  logger.debug("Max execution time for " + func2.name + " expression until true");
                  clearInterval(_t);
                }
              }
            }, 1);
          }, "_waitUntil");
          setTimeout(function() {
            _waitUntil(func, exp);
          }, 1);
        }, "waitUntil");
        if (typeof localStorage === "undefined") {
          var localStorage = {
            getItem(name) {
              return Object.hasOwnProperty.call(this, name) ? this[name] : null;
            },
            setItem(name, value) {
              this[name] = value;
            },
            removeItem(name) {
              delete this[name];
            }
          };
        }
        var ComplexStorageCache = /* @__PURE__ */ __name(function(params) {
          var object, load, alternate;
          object = params.index;
          if (typeof object !== "undefined") {
            load = params.load;
            alternate = params.alternate;
            var cachedObjectID = this.getID(object);
            var cachedResponse = localStorage.getItem(cachedObjectID);
            if (this.isEmpty(cachedResponse)) {
              var cachedNewResponse = load.call(null, {
                "cachedObjectID": cachedObjectID,
                "cachedResponse": cachedResponse,
                "cache": this
              });
              this.save(object, cachedNewResponse);
              logger.debug("RESPONSE OF {{cachedObjectID}} CACHED".replace("{{cachedObjectID}}", cachedObjectID));
            } else {
              var alternateResponse = alternate.call(null, {
                "cachedObjectID": cachedObjectID,
                "cachedResponse": cachedResponse,
                "cache": this
              });
              logger.debug("RESPONSE OF {{cachedObjectID}} IS ALREADY CACHED ".replace("{{cachedObjectID}}", cachedObjectID));
            }
          } else {
            throw new Error("ComplexStorageCache: index is undefined");
          }
          return this;
        }, "ComplexStorageCache");
        ComplexStorageCache.prototype.getItem = function(cachedObjectID) {
          var retrievedObject = localStorage.getItem(cachedObjectID);
          if (!this.isEmpty(retrievedObject)) {
            return JSON.parse(retrievedObject);
          } else {
            return null;
          }
        };
        ComplexStorageCache.prototype.setItem = function(cachedObjectID, value) {
          localStorage.setItem(cachedObjectID, _DataStringify(value));
        };
        ComplexStorageCache.prototype.isEmpty = function(object) {
          var r = false;
          switch (true) {
            case typeof object === "undefined":
            case (typeof object === "string" && object === ""):
            case (typeof object === "string" && object === "undefined"):
            case (typeof object === "number" && object === 0):
            case object === null:
              r = true;
              break;
            default:
              r = false;
          }
          return r;
        };
        ComplexStorageCache.prototype.getID = function(object) {
          var cachedObjectID;
          if (typeof object !== "undefined") {
            cachedObjectID = "cachedObject_" + Base64.encode(_DataStringify(object).replace(/\{|\}|,/g, "_"));
          }
          return cachedObjectID;
        };
        ComplexStorageCache.prototype.save = function(object, cachedNewResponse) {
          var cachedObjectID = this.getID(object);
          logger.debug("CACHING THE RESPONSE OF {{cachedObjectID}} ".replace("{{cachedObjectID}}", cachedObjectID));
          this.setItem(cachedObjectID, cachedNewResponse);
        };
        ComplexStorageCache.prototype.getCached = function(object) {
          var cachedObjectID = this.getID(object);
          return this.getItem(cachedObjectID);
        };
        ComplexStorageCache.prototype.clear = function() {
          Object.keys(localStorage).filter(function(k) {
            return k.startsWith("cachedObject_");
          }).map(function(c) {
            localStorage.removeItem(c);
          });
        };
        if (isBrowser) {
          var supportsPassive = false;
          try {
            var opts = Object.defineProperty({}, "passive", {
              get() {
                supportsPassive = true;
                return supportsPassive;
              }
            });
            window.addEventListener("testPassive", null, opts);
            window.removeEventListener("testPassive", null, opts);
          } catch (e) {
          }
          var captureFalse = /* @__PURE__ */ __name(function() {
            return supportsPassive ? {
              passive: true
            } : false;
          }, "captureFalse");
        }
        if (isBrowser) {
          Element.prototype.find = function(tag) {
            var _oo = [];
            var _tags = document.subelements(tag);
            _tags.map(function(_tt, _t) {
              if (typeof _tags[_t] !== "undefined" && _tags[_t].parentNode.tagName === this.parentNode.tagName) {
                _oo.push(_Cast(_tt, new Object()));
              }
            });
            return _oo;
          };
        }
        var __instanceID;
        var _Object_Create = function() {
          var hasOwn = Object.prototype.hasOwnProperty;
          return function(O) {
            if (typeof O !== "object") {
              throw TypeError("Object prototype may only be an Object or null. The type is " + typeof O);
            }
            var QCObjects2 = /* @__PURE__ */ __name(function() {
            }, "QCObjects");
            QCObjects2.prototype = O;
            var obj = new QCObjects2();
            if (arguments.length > 1) {
              var Properties = Object(arguments[1]);
              for (var prop in Properties) {
                if (hasOwn.call(Properties, prop)) {
                  obj[prop] = Properties[prop];
                }
              }
            }
            return obj;
          };
        }();
        if (typeof Object.assign !== "function") {
          Object.defineProperty(Object, "assign", {
            value: /* @__PURE__ */ __name(function assign(target, varArgs) {
              "use strict";
              if (target === null) {
                throw new TypeError("Cannot convert undefined or null to object");
              }
              var to = Object(target);
              for (var index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index];
                if (nextSource !== null) {
                  for (var nextKey in nextSource) {
                    if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                      to[nextKey] = nextSource[nextKey];
                    }
                  }
                }
              }
              return to;
            }, "assign"),
            writable: true,
            configurable: true
          });
        }
        var __is_raw_class__ = /* @__PURE__ */ __name(function(o_c) {
          return typeof o_c === "function" && o_c.toString().startsWith("class") ? true : false;
        }, "__is_raw_class__");
        var _LegacyCopy = /* @__PURE__ */ __name(function(obj) {
          var _value_;
          switch (true) {
            case typeof obj === "string":
              _value_ = obj;
              break;
            case typeof obj === "number":
              _value_ = obj;
              break;
            case typeof obj === "object":
              _value_ = Object.assign({}, obj);
              break;
            case typeof obj === "function":
              _value_ = obj.bind({});
              break;
            case __is_raw_class__(obj):
              _value_ = /* @__PURE__ */ __name(class extends obj {
              }, "_value_");
              break;
            default:
              break;
          }
          return _value_;
        }, "_LegacyCopy");
        var _QC_CLASSES = {};
        var _QC_PACKAGES = {};
        var _QC_PACKAGES_IMPORTED = [];
        var _QC_READY_LISTENERS = [];
        var ObjectName = /* @__PURE__ */ __name(function(o) {
          var ret = "";
          if (typeof o === "function" && Object.hasOwnProperty.call(o, "name") && o.name !== "") {
            ret = o.name;
          } else if (typeof o !== "undefined" && typeof o.constructor === "function" && o.constructor.name !== "") {
            ret = o.constructor.name;
          } else if (typeof o !== "undefined" && typeof o.constructor === "object") {
            ret = o.constructor.toString().replace(/\[(.*?)\]/g, "$1").split(" ").slice(1).join("");
          }
          return ret;
        }, "ObjectName");
        var _Cast = /* @__PURE__ */ __name(function(obj_source, obj_dest) {
          for (var v in obj_source) {
            if (typeof obj_source[v] !== "undefined") {
              try {
                obj_dest[v] = obj_source[v];
              } catch (e) {
              }
            }
          }
          return obj_dest;
        }, "_Cast");
        var _CastProps = /* @__PURE__ */ __name(function(obj_source, obj_dest) {
          for (var v in obj_source) {
            if (typeof obj_source[v] !== "undefined" && typeof obj_source[v] !== "function") {
              try {
                obj_dest[v] = obj_source[v];
              } catch (e) {
              }
            } else if (typeof obj_source[v] === "function") {
              try {
                obj_dest[v] = obj_source[v].bind(obj_dest);
              } catch (e) {
                logger.warn(e);
              }
            }
          }
          return obj_dest;
        }, "_CastProps");
        var __is__forbidden_name__ = /* @__PURE__ */ __name(function() {
          return ["__proto__", "prototype", "Object", "Map", "defineProperty", "indexOf", "toString", "__instanceID"].indexOf(arguments[0]) !== -1 ? true : false;
        }, "__is__forbidden_name__");
        var __getType__ = /* @__PURE__ */ __name(function __getType__2(o_c) {
          var _ret_ = "";
          switch (true) {
            case (__is_raw_class__(o_c) && !!o_c.name):
              _ret_ = o_c.name;
              break;
            case (typeof o_c === "object" && (!!o_c.constructor && !!o_c.constructor.name) && o_c.constructor.name !== ""):
              _ret_ = o_c.constructor.name;
              break;
            case (!!o_c && !!o_c.__classType && o_c.__classType !== ""):
              _ret_ = o_c.__classType;
              break;
            case (!!o_c && !!o_c.__definition && !!o_c.__definition.__classType && o_c.__definition.__classType !== ""):
              _ret_ = o_c.__definition.__classType;
              break;
            case (typeof o_c === "function" && !!o_c.name):
              _ret_ = o_c.name;
              break;
            default:
              _ret_ = ObjectName(o_c);
              break;
          }
          return _ret_;
        }, "__getType__");
        var is_a = /* @__PURE__ */ __name(function is_a2(obj, typeName) {
          return typeof obj !== "undefined" && obj !== null && ((isQCObjects_Class(obj) || isQCObjects_Object(obj)) && obj.hierarchy().includes(typeName) || __getType__(obj) === typeName || ObjectName(obj) === typeName || typeof obj === typeName) ? true : false;
        }, "is_a");
        var __make_global__ = /* @__PURE__ */ __name(function(f) {
          if (typeof f !== "undefined") {
            if (isBrowser) {
              try {
                _top[f.name] = f;
                window[f.name] = f;
              } catch (e) {
              }
            } else if (typeof global2 !== "undefined") {
              if (!Object.hasOwnProperty.call(global2, f.name)) {
                global2[f.name] = f;
              }
            }
          }
        }, "__make_global__");
        var __register_class__ = /* @__PURE__ */ __name(function(_class_, __namespace) {
          var name = _class_.name || __getType__(_class_);
          if (typeof _class_.__definition === "undefined") {
            _class_.__definition = {};
          }
          _class_.__definition.__classType = name;
          if (typeof __namespace !== "undefined") {
            _class_.__definition.__namespace = __namespace;
          }
          _QC_CLASSES[name] = _class_;
          _top[name] = _QC_CLASSES[name];
          return _top[name];
        }, "__register_class__");
        var RegisterClass = /* @__PURE__ */ __name(function(_class_, __namespace) {
          return __register_class__(_class_, __namespace);
        }, "RegisterClass");
        __make_global__(RegisterClass);
        var Class = /* @__PURE__ */ __name(function() {
          var _types_ = {};
          var name, type, definition;
          switch (arguments.length) {
            case 0:
              return class {
              };
            case 1:
              name = arguments[0];
              type = /* @__PURE__ */ __name(class {
              }, "type");
              definition = {};
              break;
            case 2:
              name = arguments[0];
              type = /* @__PURE__ */ __name(class {
              }, "type");
              definition = arguments[1];
              break;
            case 3:
              name = arguments[0];
              type = arguments[1];
              definition = arguments[2];
              break;
            default:
              break;
          }
          if (typeof type !== "function") {
            throw new Error("Class type must be a function or class");
          }
          if (__is__forbidden_name__.call(this, name)) {
            throw new Error(`${name} is not an allowed word in the name of a class`);
          }
          if (typeof type["__definition"] !== "undefined") {
            definition["__definition"] = Object.assign(_LegacyCopy(type.__definition), type);
          }
          _types_[type.name] = type;
          if (typeof definition === "undefined" || definition === null) {
            definition = {};
          } else {
            definition = _LegacyCopy(definition);
          }
          if (typeof definition["__instanceID"] !== "undefined") {
            delete definition["__instanceID"];
          }
          _QC_CLASSES[name] = class extends _types_[type.name] {
            constructor() {
              var _o_;
              if (arguments.length > 0) {
                _o_ = {
                  ...arguments[0]
                };
              } else {
                _o_ = {};
              }
              super(_o_);
              __publicField(this, "__classType", name);
              __publicField(this, "__definition", {
                ...definition
              });
              let self2 = this;
              __instanceID = typeof __instanceID === "undefined" || __instanceID === null ? 0 : __instanceID + 1;
              if (!self2.__instanceID) {
                Object.defineProperty(self2, "__instanceID", {
                  value: __instanceID,
                  writable: false
                });
              }
              if (typeof self2.__definition !== "undefined") {
                Object.keys(self2.__definition).filter(function(k) {
                  return isNaN(k) && !["name", "__instanceID", "__classType", "__definition"].includes(k);
                }).forEach(function(key) {
                  if (typeof self2.__definition[key] === "function") {
                    self2[key] = self2.__definition[key].bind(self2);
                  } else {
                    self2[key] = self2.__definition[key];
                  }
                });
              }
              _methods_(_QC_CLASSES[self2.__classType]).map(function(m) {
                self2[m.name] = m.bind(self2);
              });
              _methods_(self2.__definition).map(function(m) {
                self2[m.name] = m.bind(self2);
              });
              if (!!self2["body"]) {
                if (typeof self2.__definition === "undefined" || !Object.hasOwnProperty.call(self2.__definition, "body") || typeof self2.__definition.body === "undefined") {
                  try {
                    if (isBrowser) {
                      self2["body"] = _DOMCreateElement(self2.__definition.__classType);
                    } else {
                      self2["body"] = {};
                    }
                  } catch (e) {
                    self2["body"] = {};
                  }
                } else if (Object.hasOwnProperty.call(self2.__definition, "body")) {
                  self2["body"] = self2.__definition.body;
                }
              }
              try {
                if (typeof self2.__new__ === "function") {
                  self2.__new__.call(self2, _o_);
                } else if (typeof super.__new__ === "function") {
                  self2.__new__ = super.__new__.bind(self2);
                  self2.__new__.call(self2, _o_);
                }
                if (typeof self2 === "object" && Object.hasOwnProperty.call(self2, "_new_") && typeof self2._new_.isCalled === "undefined") {
                  try {
                    self2._new_.call(self2, _o_);
                    self2._new_.isCalled = true;
                  } catch (e) {
                    logger.warn(`${self2.__classType}._new_() failed with error: ${e}`);
                  }
                }
              } catch (e) {
                logger.warn(e);
              }
            }
            static hierarchy(__class__) {
              var __classType = /* @__PURE__ */ __name(function(o_c) {
                return Object.hasOwnProperty.call(o_c, "__classType") ? o_c.__classType : __getType__.call(__class__, o_c);
              }, "__classType");
              var __hierarchy__proto__ = /* @__PURE__ */ __name((c) => {
                return typeof c !== "undefined" && typeof c.__proto__ !== "undefined" && c.__proto__ !== null ? (__classType(c) !== "" ? [__classType(c)] : []).concat(__hierarchy__proto__(c.__proto__)) : [];
              }, "__hierarchy__proto__");
              if (typeof __class__ === "undefined" || __class__ === null) {
                __class__ = this;
              }
              var __hierarchy = [];
              __hierarchy.push(__classType(__class__));
              __hierarchy = __hierarchy.concat(__hierarchy__proto__(__class__.__proto__));
              return __hierarchy;
            }
            static getParentClass() {
              return Object.getPrototypeOf(this.prototype.constructor);
            }
            __new__(_o_) {
              _CastProps(_o_, this);
            }
            _new_() {
            }
            getClass() {
              return Object.getPrototypeOf(this.constructor);
            }
            css(_css) {
              if (typeof this["body"] !== "undefined" && this["body"]["style"] !== "undefined") {
                logger.debug("body style");
                this["body"]["style"] = _Cast(_css, this["body"]["style"]);
              }
              return this["body"]["style"];
            }
            hierarchy() {
              var __instance__ = this;
              return this.getClass().hierarchy(__instance__);
            }
            append(child) {
              logger.debug("append: start");
              if (is_a(child, "Component")) {
                logger.debug("append: child is a Component");
                logger.debug(`appending the body of ${child.name}`);
              }
              var child = arguments.length > 0 ? arguments[0] : this["body"];
              if (typeof this["body"] !== "undefined") {
                logger.debug("append element");
                if (arguments.lenght > 0) {
                  logger.debug("append to element");
                  this["body"].append(child);
                  if (typeof this["childs"] === "undefined") {
                    this["childs"] = [];
                  }
                  this["childs"].push(child);
                } else {
                  if (isBrowser) {
                    logger.debug("append to body");
                    document.body.append(child);
                  }
                }
              }
            }
            attachIn(tag) {
              if (isBrowser) {
                var tags = document.subelements(tag);
                for (var i = 0, j = tags.length; i < j; i++) {
                  tags[i].append(this);
                }
              } else {
                throw new Error("attachIn not yet implemented for non browser platforms");
              }
            }
          };
          _QC_CLASSES[name] = _CastProps(definition, _QC_CLASSES[name]);
          _QC_CLASSES[name]["__definition"] = definition;
          _QC_CLASSES[name]["__definition"]["__classType"] = name;
          _QC_CLASSES[name]["__definition"]["__new__"] = /* @__PURE__ */ __name(function __new__(_o_) {
            _CastProps(_o_, this);
          }, "__new__");
          _top[name] = _QC_CLASSES[name];
          return _top[name];
        }, "Class");
        Class.prototype.toString = function() {
          return "Class(name, type, definition) { [QCObjects native code] }";
        };
        var ClassFactory = /* @__PURE__ */ __name(function(className) {
          var _classFactory;
          if (className !== null && className.indexOf(".") > -1) {
            var packageName = className.split(".").slice(0, className.split(".").length - 1).join(".");
            var _className = className.split(".").slice(-1).join("");
            var _package = Package2(packageName);
            var packageClasses = typeof _package !== "undefined" ? _package.filter((classFactory) => {
              return isQCObjects_Class(classFactory) && (classFactory.__definition.__classType === _className || typeof classFactory === "function" && !!classFactory.name);
            }).reverse() : [];
            if (packageClasses.length > 0) {
              _classFactory = packageClasses[0];
            } else {
              throw Error(`Class ${className} not found.`);
            }
          } else if (className !== null && Object.hasOwnProperty.call(_QC_CLASSES, className)) {
            _classFactory = _QC_CLASSES[className];
          }
          return _classFactory;
        }, "ClassFactory");
        if (isBrowser) {
          Element.prototype.append = /* @__PURE__ */ __name(function QC_Append(child) {
            if (isQCObjects_Object(child) || typeof child.body !== "undefined") {
              this.appendChild(child.body);
            } else {
              this.appendChild(child);
            }
          }, "QC_Append");
          Element.prototype.render = /* @__PURE__ */ __name(function QC_Render(content) {
            var _self = this;
            var _appendVDOM = /* @__PURE__ */ __name(function(_self2, content2) {
              if (typeof document.implementation.createHTMLDocument !== "undefined") {
                var doc = document.implementation.createHTMLDocument("");
                doc.innerHTML = content2;
                doc.body.subelements("*").map(function(element) {
                  return _self2.append(element);
                });
              }
            }, "_appendVDOM");
            if (typeof this.innerHTML !== "undefined") {
              try {
                this.innerHTML += content;
              } catch (e) {
                _appendVDOM(_self, content);
              }
            } else {
              _appendVDOM(_self, content);
            }
          }, "QC_Render");
        }
        var _super_ = /* @__PURE__ */ __name(function(className, classMethodName, params) {
          return ClassFactory(className)[classMethodName];
        }, "_super_");
        _super_.prototype.toString = function() {
          return "_super_(className,classMethodName,params) { [QCObjects native code] }";
        };
        var New = /* @__PURE__ */ __name(function(__class__, args) {
          args = arguments.length > 1 ? args : {};
          return typeof __class__ === "undefined" ? new Object() : new __class__(args);
        }, "New");
        New.prototype.toString = function() {
          return "New(QCObjectsClassName, args) { [QCObjects native code] }";
        };
        var Export = /* @__PURE__ */ __name(function(f) {
          return __make_global__(f);
        }, "Export");
        Export.prototype.toString = function() {
          return "Export(function or symbol) { [QCObjects native code] }";
        };
        if (!isBrowser) {
          var findPackageNodePath = /* @__PURE__ */ __name(function(packagename) {
            const fs = _require_("fs");
            var sdkPath = null;
            try {
              var sdkPaths = [
                `${_top.CONFIG.get("projectPath")}${_top.CONFIG.get("relativeImportPath")}`,
                `${_top.CONFIG.get("basePath")}${_top.CONFIG.get("relativeImportPath")}`,
                `${_top.CONFIG.get("projectPath")}`,
                `${_top.CONFIG.get("basePath")}`,
                `${_top.CONFIG.get("relativeImportPath")}`,
                `${process.cwd()}${_top.CONFIG.get("relativeImportPath")}`,
                `${process.cwd()}/node_modules/` + packagename,
                `${process.cwd()}/node_modules`,
                `${process.cwd()}`,
                "node_modules",
                "./",
                ""
              ].concat(module.paths);
              sdkPaths = sdkPaths.filter((p) => {
                return fs.existsSync(p + "/" + packagename);
              });
              if (sdkPaths.length > 0) {
                sdkPath = sdkPaths[0];
                logger.info(packagename + " is Installed.");
              } else {
              }
            } catch (e) {
              console.log(e);
            }
            return sdkPath;
          }, "findPackageNodePath");
          Export(findPackageNodePath);
        }
        Class("_Crypt", Object, {
          last_string: "",
          last_key: "",
          construct: false,
          _new_(o) {
            var string = o["string"];
            var key = o.hasOwnProperty.call(o, "key") ? o["key"] : null;
            this.__new__(o);
            key = key === null ? this.__instanceID : key;
            this.last_key = key;
            this.last_string = string;
            this.construct = true;
          },
          _encrypt() {
            var string = this.string;
            var key = this.key;
            var result = "";
            var char;
            var keychar;
            for (var i = 0; i < string.length; i++) {
              char = string.substr(i, 1);
              keychar = key.substr(i % key.length - 1, 1);
              char = String.fromCharCode(char.charCodeAt(0) + keychar.charCodeAt(0));
              result += char;
            }
            this.last_string = Base64.encode(result);
            return this.last_string;
          },
          _decrypt() {
            var string = this.string;
            var key = this.key;
            var result = "";
            var char;
            var keychar;
            string = Base64.decode(string);
            for (var i = 0; i < string.length; i++) {
              char = string.substr(i, 1);
              keychar = key.substr(i % key.length - 1, 1);
              char = String.fromCharCode(char.charCodeAt(0) - keychar.charCodeAt(0));
              result += char;
            }
            this.last_string = result;
            return this.last_string;
          },
          encrypt(string, key) {
            var crypt = New(ClassFactory("_Crypt"), {
              string,
              key: key !== "" ? key : "12345678ABC"
            });
            return crypt._encrypt();
          },
          decrypt(string, key) {
            var crypt = New(ClassFactory("_Crypt"), {
              string,
              key: key !== "" ? key : "12345678ABC"
            });
            return crypt._decrypt();
          }
        });
        var _CryptObject = /* @__PURE__ */ __name(function(o) {
          return ClassFactory("_Crypt").encrypt(_DataStringify(o), _secretKey);
        }, "_CryptObject");
        var _DecryptObject = /* @__PURE__ */ __name(function(s) {
          return s === "" ? {} : JSON.parse(ClassFactory("_Crypt").decrypt(s, _secretKey));
        }, "_DecryptObject");
        var shortCode = /* @__PURE__ */ __name(function() {
          var length = 1e3;
          var code1 = ClassFactory("_Crypt").encrypt((Math.random() * length).toString().replace(".", ""), (/* @__PURE__ */ new Date()).getTime().toString());
          var code2 = ClassFactory("_Crypt").encrypt((Math.random() * length).toString().replace(".", ""), new Date((/* @__PURE__ */ new Date()).getTime() - 1e3 * 1e3).getTime().toString());
          var shortCode2 = code2.list().map((o1, index) => {
            return code1.list()[index] === o1 ? null : o1;
          }).filter((c) => c !== null).join("");
          return shortCode2;
        }, "shortCode");
        var uniqueId = shortCode;
        Class("InheritClass", class {
        }, {});
        const _Processor = class extends ClassFactory("InheritClass") {
          constructor() {
            super(...arguments);
            __publicField(this, "component", null);
            __publicField(this, "__definition", {});
            __publicField(this, "__classType", "Processor");
            this.processors = _Processor.processors;
            this.process = _Processor.process.bind(this);
            this.processObject = _Processor.processObject.bind(this);
            this.setProcessor = _Processor.setProcessor.bind(this);
            this.execute = _Processor.execute.bind(this);
          }
          static setProcessor(_proc_) {
            if (typeof _proc_ === "function" && _proc_.name !== "") {
              this.processors[_proc_.name] = _proc_;
            }
          }
          static execute(component, processorName, args) {
            var processorHandler = typeof component !== "undefined" && component !== null ? component.processorHandler : this;
            return processorHandler.processors[processorName].bind(processorHandler).apply(processorHandler, [component, ...args.split(",")]);
          }
          static process(template, component = null) {
            var processorHandler = component !== null ? component.processorHandler : New(_Processor, { component: null });
            if (typeof template === "string") {
              Object.keys(processorHandler.processors).map(function(funcName) {
                [...template.matchAll(new RegExp("\\$" + funcName + "\\((.*)\\).*", "g"))].map(
                  function(procesorMatch) {
                    var match0 = `$${funcName}(${procesorMatch[1]})`;
                    template = template.replace(match0, processorHandler.execute.bind(processorHandler).call(processorHandler, component, funcName, procesorMatch[1]));
                  }
                );
              });
            }
            return template;
          }
          static processObject(obj, component = null) {
            var __instance__ = component === null ? this : component.processorHandler;
            if (typeof __instance__ === "undefined") {
              __instance__ = new _Processor({ component });
            }
            if (typeof obj === "object") {
              Object.keys(obj).map(
                function(_k) {
                  if (typeof obj[_k] === "object" && !obj[_k].hasOwnProperty.call(obj[_k], "call")) {
                    obj[_k] = __instance__.processObject.bind(__instance__)(obj[_k], component);
                  } else if (typeof obj[_k] === "string") {
                    obj[_k] = __instance__.process.bind(__instance__)(obj[_k], component);
                  }
                }
              );
            } else if (typeof obj === "string") {
              obj = __instance__.process.bind(__instance__)(obj, component);
            }
            return obj;
          }
        };
        let Processor = _Processor;
        __name(Processor, "Processor");
        __publicField(Processor, "processors", {
          "config"(component, arg) {
            return _top.CONFIG.get(arg, "");
          },
          "ENV"(component, arg) {
            return typeof process !== "undefined" ? process.env[arg] : "";
          },
          "global"(component, arg) {
            return typeof global2 !== "undefined" ? global2[arg] : "";
          }
        });
        Processor.__definition = {};
        Processor.__classType = "Processor";
        RegisterClass(Processor, "com.qcobjects");
        __make_global__(Processor);
        const _ConfigSettings = class {
          static get instance() {
            if (this._instance === null) {
              var _config_settings = new _ConfigSettings();
              _config_settings._CONFIG = {
                "relativeImportPath": "",
                "remoteImportsPath": "",
                "remoteSDKPath": "https://sdk.qcobjects.dev/",
                "asynchronousImportsLoad": false,
                "removePackageScriptAfterLoading": true,
                "componentsBasePath": "",
                "delayForReady": 0,
                "preserveComponentBodyTag": false,
                "useConfigService": false,
                "routingWay": "hash",
                "useSDK": true,
                "useLocalSDK": false,
                "basePath": _basePath_
              };
              _config_settings._CONFIG_ENC = null;
              this._instance = _config_settings;
            }
            return this._instance;
          }
          static set instance(value) {
            this._instance = value;
          }
        };
        let ConfigSettings = _ConfigSettings;
        __name(ConfigSettings, "ConfigSettings");
        __publicField(ConfigSettings, "_instance", null);
        __publicField(ConfigSettings, "_CONFIG_ENC", null);
        _QC_CLASSES["ConfigSettings"] = ConfigSettings;
        Class("CONFIG", Object, {
          get _CONFIG_ENC() {
            return ClassFactory("ConfigSettings").instance._CONFIG_ENC;
          },
          get _CONFIG() {
            return ClassFactory("ConfigSettings").instance._CONFIG;
          },
          set(name, value) {
            logger.debug(`CONFIG.set  ${name}: ${value}`);
            if (name === "basePath") {
              _basePath_ = value;
            }
            var _conf;
            try {
              _conf = function(config) {
                if (config._CONFIG_ENC === null) {
                  config._CONFIG_ENC = ClassFactory("_Crypt").encrypt(_DataStringify({}), _secretKey);
                }
                var _protectedEnc = config._CONFIG_ENC.valueOf();
                var _protectedConf = config._CONFIG.valueOf();
                return _CastProps(_protectedConf, _DecryptObject(_protectedEnc));
              }(ClassFactory("ConfigSettings").instance);
            } catch (e) {
              _conf = {};
              console.error(e);
              logger.debug("failed to encrypt config");
            }
            _conf[name] = value;
            ClassFactory("ConfigSettings").instance._CONFIG_ENC = _CryptObject(_conf);
            if (Object.hasOwnProperty.call(ClassFactory("ConfigSettings").instance, "_CONFIG") && Object.hasOwnProperty.call(ClassFactory("ConfigSettings").instance._CONFIG, name)) {
              ClassFactory("ConfigSettings").instance._CONFIG[name] = value;
            }
          },
          get(name, _default) {
            var _value;
            try {
              var _conf = function(config) {
                if (config._CONFIG_ENC === null) {
                  config._CONFIG_ENC = ClassFactory("_Crypt").encrypt(_DataStringify({}), _secretKey);
                }
                var _protectedEnc = config._CONFIG_ENC.valueOf();
                var _protectedConf = config._CONFIG.valueOf();
                return _CastProps(_protectedConf, _DecryptObject(_protectedEnc));
              }(ClassFactory("ConfigSettings").instance);
              if (typeof _conf[name] !== "undefined") {
                _value = _conf[name];
              } else if (typeof _default !== "undefined") {
                _value = _default;
              }
            } catch (e) {
              console.error(e);
              logger.debug("Something wrong when trying to get CONFIG values");
              logger.debug("No config value for: " + name);
              _value = _default;
            }
            return Processor.processObject.call(Processor, _value);
          }
        });
        Export(waitUntil);
        Export(_super_);
        Export(ComplexStorageCache);
        Export(ClassFactory);
        Export(_DOMCreateElement);
        Export(shortCode);
        Export(__getType__);
        Export(is_a);
        var isQCObjects_Object = /* @__PURE__ */ __name(function(_) {
          return typeof _ === "object" && Object.hasOwnProperty.call(_, "__classType") && !!_.__instanceID && Object.hasOwnProperty.call(_, "__definition") && typeof _.__definition !== "undefined" ? true : false;
        }, "isQCObjects_Object");
        var isQCObjects_Class = /* @__PURE__ */ __name(function(_) {
          return typeof _ === "function" && !_.__instanceID && !!_.__definition && typeof _.__definition !== "undefined" && !!_.__definition.__classType ? true : false;
        }, "isQCObjects_Class");
        var Package2 = /* @__PURE__ */ __name(function(namespace, classes) {
          if (_QC_PACKAGES.hasOwnProperty.call(_QC_PACKAGES, namespace) && typeof _QC_PACKAGES[namespace] !== "undefined" && _QC_PACKAGES[namespace].hasOwnProperty.call(_QC_PACKAGES[namespace], "length") && _QC_PACKAGES[namespace].length > 0 && typeof classes !== "undefined" && classes.hasOwnProperty.call(classes, "length") && classes.length > 0) {
            classes.filter(
              function(_c1) {
                return isQCObjects_Class(_c1);
              }
            ).map(function(_class_) {
              _class_.__definition.__namespace = namespace;
              _class_.__namespace = namespace;
            });
            _QC_PACKAGES[namespace] = _QC_PACKAGES[namespace].concat(classes);
          } else if (typeof classes !== "undefined") {
            if (typeof classes === "object" && classes.hasOwnProperty.call(classes, "length")) {
              classes.filter(
                function(_c1) {
                  return isQCObjects_Class(_c1);
                }
              ).map(function(_class_) {
                _class_.__definition.__namespace = namespace;
                _class_.__namespace = namespace;
              });
            } else if (isQCObjects_Class(classes)) {
              classes.__definition.__namespace = namespace;
              classes.__namespace = namespace;
            }
            _QC_PACKAGES[namespace] = classes;
          }
          if (Object.hasOwnProperty.call(_QC_PACKAGES, namespace)) {
            _QC_PACKAGES[namespace].map(function(_class_) {
              __register_class__(_class_, namespace);
            });
          }
          return Object.hasOwnProperty.call(_QC_PACKAGES, namespace) ? _QC_PACKAGES[namespace] : void 0;
        }, "Package");
        Package2.prototype.toString = function() {
          return "Package(namespace, classes) { [QCObjects native code] }";
        };
        Package2("com.qcobjects", [Processor]);
        var NamespaceRef = /* @__PURE__ */ __name(function(namespace) {
          let packageInstance = Package2(namespace);
          let classes = packageInstance.filter((c) => isQCObjects_Class(c)).map((c) => {
            return {
              [c.__definition.__classType]: c
            };
          }).reduce((a, b) => Object.assign(a, b));
          return namespace.split(".").map((c) => {
            return {
              [c]: classes
            };
          }).reverse().reduce((a, b) => {
            b[Object.keys(b)] = a;
            return b;
          });
        }, "NamespaceRef");
        var Import2 = /* @__PURE__ */ __name(function() {
          var packagename;
          var ready2 = /* @__PURE__ */ __name(function() {
          }, "ready");
          var external = false;
          if (arguments.length < 1) {
            return;
          } else if (arguments.length === 1) {
            packagename = arguments[0];
          } else if (arguments.length === 2) {
            packagename = arguments[0];
            ready2 = arguments[1];
          } else if (arguments.length > 2) {
            packagename = arguments[0];
            ready2 = arguments[1];
            external = arguments[2];
            logger.debug("[Import] Setting external=" + external.toString() + " resource to import: " + packagename);
          }
          if (external) {
            logger.debug("[Import] Registering external resource to import: " + packagename);
          } else {
            logger.debug("[Import] Registering local resource to import: " + packagename);
          }
          var _promise_import_;
          if (isBrowser) {
            _promise_import_ = new Promise(function(resolve, reject) {
              var allPackagesImported = /* @__PURE__ */ __name(function() {
                var ret = false;
                var cp = 0;
                for (var p in _QC_PACKAGES) {
                  cp++;
                }
                if (cp < _QC_PACKAGES_IMPORTED.length) {
                  ret = false;
                } else {
                  ret = true;
                }
                return ret;
              }, "allPackagesImported");
              var readyImported = /* @__PURE__ */ __name(function(e) {
                _QC_PACKAGES_IMPORTED.push(ready2);
                if (allPackagesImported()) {
                  _QC_PACKAGES_IMPORTED.map(function(_imported_) {
                    _QC_READY_LISTENERS.push(_imported_);
                  });
                }
                if (isBrowser && _top.CONFIG.get("removePackageScriptAfterLoading")) {
                  e.target.remove();
                }
                resolve.call(_promise_import_, {
                  "_imported_": e.target,
                  "_package_name_": packagename
                });
              }, "readyImported");
              if (!_QC_PACKAGES.hasOwnProperty.call(_QC_PACKAGES, packagename)) {
                var s1 = _DOMCreateElement("script");
                s1.type = _top.CONFIG.get("sourceType", "text/javascript");
                s1.async = _top.CONFIG.get("asynchronousImportsLoad") ? true : false;
                s1.onreadystatechange = function() {
                  if (s1.readyState === "complete") {
                    readyImported.call();
                  }
                };
                s1.onload = readyImported;
                s1.onerror = function(e) {
                  reject.call(_promise_import_, {
                    "_imported_": s1,
                    "_package_name_": packagename
                  });
                };
                s1.src = external ? _top.CONFIG.get("remoteImportsPath") + packagename + ".js" : _basePath_ + _top.CONFIG.get("relativeImportPath") + packagename + ".js";
                document.getElementsByTagName("head")[0].appendChild(s1);
              }
            });
            _promise_import_.catch(function() {
              logger.debug("Import: Error loading a package ");
            });
          } else {
            _promise_import_ = new Promise(function(resolve, reject) {
              try {
                var standardNodePath = findPackageNodePath(packagename);
                var packageAbsoluteName = "";
                if (standardNodePath !== null) {
                  packageAbsoluteName = standardNodePath + "/" + packagename;
                } else {
                  var jsNodePath = findPackageNodePath(packagename + ".js");
                  if (jsNodePath !== null) {
                    packageAbsoluteName = jsNodePath + "/" + packagename + ".js";
                  } else {
                    packageAbsoluteName = _basePath_ + _top.CONFIG.get("relativeImportPath") + packagename;
                  }
                }
                try {
                  resolve.call(_promise_import_, {
                    "_imported_": _require_(`${packageAbsoluteName}`),
                    "_package_name_": packagename
                  });
                } catch (e) {
                  reject.call(_promise_import_, {
                    "_imported_": null,
                    "_package_name_": packagename,
                    "error": e
                  });
                }
              } catch (e) {
                reject.call(_promise_import_, {
                  "_imported_": null,
                  "_package_name_": packagename,
                  "error": e
                });
              }
            }).catch(function(e) {
              logger.debug("Something happened when importing " + packagename);
              console.warn(e);
            });
          }
          _promise_import_.catch(function(e) {
            logger.warn(_DataStringify(e));
          });
          return _promise_import_;
        }, "Import");
        Import2.prototype.toString = function() {
          return "Import(packagename,ready,external) { [QCObjects native code] }";
        };
        if (isBrowser) {
          Element.prototype.Cast = /* @__PURE__ */ __name(function QC_Object(_o) {
            _o.__definition.body = this;
            var _o = New(_o);
            return _o;
          }, "QC_Object");
        }
        Class("TagElements", Array, {
          show() {
            this.map(function(element) {
              return element.style.opacity = 1;
            });
          },
          hide() {
            this.map(function(element) {
              return element.style.opacity = 0;
            });
          },
          effect() {
            var effectArguments = [...arguments].slice(1);
            var effectClass = arguments[0];
            if ((typeof effectClass).toLowerCase() === "string") {
              effectClass = ClassFactory(effectClass);
            }
            this.map(function(element) {
              return effectClass.apply.apply(effectClass, [element].concat(effectArguments));
            });
          },
          findElements(elementName) {
            var _o = New(ClassFactory("TagElements"));
            if (isBrowser) {
              for (var _k in this) {
                if (typeof _k === "number" && typeof this[_k] !== "function" && this[_k].hasOwnProperty.call(this[_k], "subelements")) {
                  _o.push(this[_k].subelements(elementName));
                }
              }
            } else {
            }
            return _o;
          }
        });
        var Tag = /* @__PURE__ */ __name(function(tagname, innerHTML) {
          var _o = New(ClassFactory("TagElements"));
          if (isBrowser) {
            var o = document.subelements(tagname);
            var addedKeys = [];
            for (var _i = 0; _i < o.length; _i++) {
              if (typeof innerHTML !== "undefined" && o[_i].hasOwnProperty.call(o[_i], "innerHTML")) {
                o[_i].innerHTML = innerHTML;
              }
              if (addedKeys.indexOf(_i) < 0) {
                _o.push(o[_i]);
                addedKeys.push(_i);
              }
            }
          } else {
          }
          return _o;
        }, "Tag");
        var ready = Ready;
        var _Ready = /* @__PURE__ */ __name(function(e) {
          var _execReady = /* @__PURE__ */ __name(function() {
            _QC_READY_LISTENERS.map(function(_ready_listener_, _r) {
              if (typeof _ready_listener_ === "function") {
                _ready_listener_.call();
                delete _QC_READY_LISTENERS[_r];
              }
            });
          }, "_execReady");
          if (_top.CONFIG.get("delayForReady") > 0) {
            if (isBrowser) {
              setTimeout(_execReady.bind(window), _top.CONFIG.get("delayForReady"));
            } else if (typeof global2 !== "undefined") {
              setTimeout(_execReady.bind(global2), _top.CONFIG.get("delayForReady"));
            }
          } else {
            _execReady.call(_top);
          }
        }, "_Ready");
        if (isBrowser) {
          window.onload = _Ready;
          if (is_phonegap) {
            document.addEventListener("deviceready", _Ready, captureFalse);
          }
        } else {
          global2.onload = _Ready;
        }
        class DDO extends ClassFactory("InheritClass") {
          constructor({
            instance,
            name,
            fget,
            fset,
            value
          }) {
            super({
              instance,
              name,
              fget,
              fset,
              value
            });
            this._new_({
              instance,
              name,
              fget,
              fset,
              value
            });
          }
          _new_({
            instance,
            name,
            fget,
            fset,
            value
          }) {
            var ddoInstance = this;
            var name = typeof name === "undefined" ? ObjectName(ddoInstance) : name;
            Object.defineProperty(instance, name, {
              set(val) {
                let _value = val;
                logger.debug("value changed " + name);
                var ret;
                if (typeof fset !== "undefined" && typeof fset === "function") {
                  ret = fset(_value);
                } else {
                  ret = _value;
                }
                instance["_" + name] = ret;
                return;
              },
              get() {
                let _value = instance["_" + name];
                logger.debug("returning value " + name);
                var is_ddo = /* @__PURE__ */ __name(function(v) {
                  if (typeof v === "object" && Object.hasOwnProperty.call(v, "value")) {
                    return v.value;
                  }
                  return v;
                }, "is_ddo");
                var ret;
                if (typeof fget !== "undefined" && typeof fget === "function") {
                  ret = fget(is_ddo(_value));
                } else {
                  ret = is_ddo(_value);
                }
                return ret;
              }
            });
          }
        }
        __name(DDO, "DDO");
        Export(DDO);
        class DefaultTemplateHandler {
          constructor({ component, template }) {
            __publicField(this, "template", "");
            __publicField(this, "__definition", {});
            this.component = component;
            this.template = template;
          }
          assign(data) {
            var templateInstance = this;
            if (typeof templateInstance.component === "undefined") {
              throw new Error("DefaultTemplateHandler.assign: component is undefined");
            }
            if (typeof templateInstance.component.processorHandler === "undefined") {
              throw new Error("DefaultTemplateHandler.assign: component.processorHandler is undefined");
            }
            var processorHandler = templateInstance.component.processorHandler;
            processorHandler.component = templateInstance.component;
            var parsedAssignmentText = typeof templateInstance.template !== "undefined" ? templateInstance.template : "";
            if (typeof data === "object") {
              [...Object.keys(data)].map(function(k) {
                var _value = data[k];
                if (typeof _value === "string" || typeof _value === "number" || !isNaN(_value)) {
                  try {
                    _value = Processor.processObject.bind(processorHandler).call(processorHandler, _value, templateInstance.component);
                    parsedAssignmentText = parsedAssignmentText.replace(new RegExp(`{{${k}}}`, "g"), _value);
                  } catch (e) {
                    logger.warn(`${templateInstance.component.name} could not parse processors.`);
                    throw Error(`${templateInstance.component.name} could not parse processors. Reason: ${e.message}`);
                  }
                }
              });
            } else {
              logger.debug(`${templateInstance.component.name}.data is not an object`);
            }
            try {
              parsedAssignmentText = Processor.processObject.call(processorHandler, parsedAssignmentText, templateInstance.component);
            } catch (e) {
              logger.warn(`${templateInstance.component.name} could not parse processors.`);
              throw Error(`${templateInstance.component.name} could not parse processors. Reason: ${e.message}`);
            }
            return parsedAssignmentText;
          }
        }
        __name(DefaultTemplateHandler, "DefaultTemplateHandler");
        DefaultTemplateHandler.__definition = {};
        RegisterClass(DefaultTemplateHandler, "com.qcobjects");
        var __routing_params__ = /* @__PURE__ */ __name(function(routing, routingPath) {
          let standardRoutingPath = routing.path.replace(/{(.*?)}/g, "(?<$1>.*)");
          return {
            ...[...routingPath.matchAll(new RegExp(standardRoutingPath, "g"))][0]["groups"]
          };
        }, "__routing_params__");
        var __valid_routings__ = /* @__PURE__ */ __name(function(routings, routingPath) {
          return routings.filter(function(routing) {
            var standardRoutingPath = routing.path.replace(/{(.*?)}/g, "(?<$1>.*)");
            return new RegExp(standardRoutingPath, "g").test(routingPath);
          }).reverse();
        }, "__valid_routings__");
        var __valid_routing_way__ = /* @__PURE__ */ __name(function(validRoutingWays, routingWay) {
          return validRoutingWays.includes(routingWay);
        }, "__valid_routing_way__");
        var _buildComponentFromElement_ = /* @__PURE__ */ __name(function(element, __parent__) {
          var __shadowed_not_set = element.getAttribute("shadowed") === null ? true : false;
          var __tplsource_attr_not_set = element.getAttribute("template-source") === null ? true : false;
          var shadowed = element.getAttribute("shadowed") === "true" ? true : false;
          var __cached_not_set = element.getAttribute("cached") === null ? true : false;
          var cached = element.getAttribute("cached") === "true" ? true : false;
          var tplextension = typeof _top.CONFIG.get("tplextension") !== "undefined" ? _top.CONFIG.get("tplextension") : "html";
          tplextension = element.getAttribute("tplextension") !== null ? element.getAttribute("tplextension") : tplextension;
          var _componentName = element.getAttribute("name");
          var _componentClassName = element.getAttribute("componentClass") !== null ? element.getAttribute("componentClass") : "Component";
          let __componentClassName = _top.CONFIG.get("preserveComponentBodyTag") ? _componentName !== null ? "com.qcobjects.components." + _componentName + ".ComponentBody" : "com.qcobjects.components.ComponentBody" : _componentClassName;
          _componentName = _componentName !== null ? _componentName : ClassFactory(__componentClassName) && typeof ClassFactory(__componentClassName).name !== "undefined" ? ClassFactory(__componentClassName).name : "";
          var __classDefinition = ClassFactory(__componentClassName);
          var __tplsource_prop_set = __componentClassName !== "Component" && (typeof __classDefinition !== "undefined" && typeof __classDefinition.tplsource === "string" && __classDefinition.tplsource !== "") ? true : false;
          var tplsource = __tplsource_attr_not_set && __tplsource_prop_set ? __classDefinition.tplsource : __tplsource_attr_not_set ? "default" : element.getAttribute("template-source");
          logger.debug(`template source for  ${_componentName} is ${tplsource} `);
          logger.debug(`type for ${_componentName} is ${__getType__(__classDefinition)} `);
          var componentURI;
          componentURI = ComponentURI({
            "COMPONENTS_BASE_PATH": _top.CONFIG.get("componentsBasePath"),
            "COMPONENT_NAME": _componentName,
            "TPLEXTENSION": tplextension,
            "TPL_SOURCE": tplsource
          });
          if (_top.CONFIG.get("preserveComponentBodyTag")) {
            Package2(_componentName !== "" ? "com.qcobjects.components." + _componentName : "com.qcobjects.components", [
              Class("ComponentBody", ClassFactory("Component"), {
                name: _componentName,
                tplsource,
                tplextension,
                reload: true
              })
            ]);
          }
          var __create_component_instance_ = /* @__PURE__ */ __name(function() {
            var __shadowed = __shadowed_not_set ? __classDefinition && __classDefinition.shadowed || ClassFactory("Component").shadowed : shadowed;
            var __definition = {
              __parent__,
              name: _componentName,
              cached: __cached_not_set ? ClassFactory("Component").cached : cached,
              shadowed: __shadowed,
              tplextension,
              body: _top.CONFIG.get("preserveComponentBodyTag") ? _DOMCreateElement("componentBody") : element,
              templateURI: componentURI,
              tplsource
            };
            if (typeof _componentName === "undefined" || _componentName === "" || _componentName === null) {
              delete __definition.name;
            }
            if (componentURI === "") {
              delete __definition.templateURI;
            }
            var newComponent2 = New(__classDefinition, __definition);
            if (_top.CONFIG.get("preserveComponentBodyTag")) {
              element.append(newComponent2);
            }
            return newComponent2;
          }, "__create_component_instance_");
          var newComponent = __create_component_instance_.call(this);
          return newComponent;
        }, "_buildComponentFromElement_");
        var _buildComponentsFromElements_ = /* @__PURE__ */ __name(function(elements, __parent__) {
          var componentsBuiltWith = [];
          if (isBrowser) {
            componentsBuiltWith = elements.map(
              function(element) {
                return _buildComponentFromElement_(element, __parent__);
              }
            );
          } else {
            logger.debug("[_buildComponentsFromElements_] not implemented for Non-Browser environments");
          }
          return componentsBuiltWith;
        }, "_buildComponentsFromElements_");
        Package2("com.qcobjects", [
          /* @__PURE__ */ __name(class Component extends ClassFactory("InheritClass") {
            constructor({
              __parent__,
              templateURI = "",
              template,
              tplsource = "default",
              tplextension,
              url = "",
              name = "",
              method = "GET",
              data = {},
              reload = false,
              shadowed = false,
              cached = true,
              _body = _DOMCreateElement("div"),
              __promise__ = null,
              __shadowRoot,
              body,
              shadowRoot,
              splashScreenComponent,
              controller,
              view
            }) {
              if (arguments.length < 1) {
                throw Error(`No arguments in component. You must at least give one argument.`);
              }
              super({
                __parent__,
                templateURI,
                template,
                tplextension,
                tplsource,
                url,
                name,
                method,
                data,
                reload,
                shadowed,
                cached,
                _body,
                __promise__,
                __shadowRoot,
                body,
                shadowRoot,
                splashScreenComponent,
                controller,
                view
              });
              __publicField(this, "validRoutingWays", ["pathname", "hash", "search"]);
              __publicField(this, "basePath", _basePath_);
              __publicField(this, "domain", _domain_);
              __publicField(this, "templateHandler", "DefaultTemplateHandler");
              __publicField(this, "processorHandler", null);
              __publicField(this, "routingWay", null);
              __publicField(this, "routingNodes", []);
              __publicField(this, "routings", []);
              __publicField(this, "routingPath", "");
              __publicField(this, "routingPaths", []);
              __publicField(this, "_componentHelpers", []);
              __publicField(this, "subcomponents", []);
              __publicField(this, "splashScreenComponent");
              __publicField(this, "controller");
              __publicField(this, "view");
              __publicField(this, "effect");
              __publicField(this, "method", "GET");
              __publicField(this, "cached", true);
              __publicField(this, "__promise__", null);
              __publicField(this, "__namespace");
              var self2 = this;
              if (typeof self2.name === "undefined") {
                logger.warn("A name is not defined for " + __getType__(self2));
              }
              self2.routingWay = _top.CONFIG.get("routingWay");
              self2.processorHandler = New(Processor, {
                component: self2
              });
              self2.data = typeof self2.data === "undefined" || self2.data === null ? {} : self2.data;
              self2.data = Object.assign(self2.data, self2.dataAttributes);
              self2.createServiceInstance().then(function(serviceResponse) {
                if (typeof self2.__new__ === "function") {
                  self2.__new__.call(self2, self2);
                }
                self2._generateRoutingPaths(self2.body).then(function() {
                  self2._reroute_().then(function() {
                    return self2.rebuild().then(function() {
                      logger.info(`Component._new_ The component ${self2.name} was built successfully!`);
                    }).catch(function(standardResponse) {
                      logger.warn(`Component._new_ Something went wrong building the component ${self2.name}`);
                      console.error(standardResponse);
                    });
                  });
                });
              });
            }
            set body(value) {
              var self2 = this;
              self2._body = value;
            }
            get body() {
              var self2 = this;
              return self2._body;
            }
            set cacheIndex(value) {
              logger.debug("[cacheIndex] This property is readonly");
            }
            get cacheIndex() {
              var self2 = this;
              var __routing_path__ = _DataStringify(self2.routingPath);
              return Base64.encode(self2.name + __routing_path__);
            }
            set parsedAssignmentText(value) {
              logger.debug("[parsedAssignmentText] This property is readonly");
            }
            get parsedAssignmentText() {
              var self2 = this;
              self2._parsedAssignmentText = self2.parseTemplate(self2.template);
              if (typeof self2._parsedAssignmentText === "undefined") {
                throw Error(`[Component][${this.name}][parsedAssignmentText] Could not generate content!`);
              }
              return self2._parsedAssignmentText;
            }
            set shadowRoot(value) {
              var self2 = this;
              if (typeof self2.__shadowRoot == "undefined") {
                self2.__shadowRoot = value;
              } else {
                logger.debug("[shadowRoot] This property can only be assigned once!");
              }
            }
            get shadowRoot() {
              var self2 = this;
              return self2.__shadowRoot;
            }
            set routingSelected(value) {
              logger.debug("[routingSelected] This is a read-only property of the component");
            }
            get routingSelected() {
              var self2 = this;
              return __valid_routings__(self2.routings, self2.routingPath);
            }
            set routingParams(value) {
              logger.debug("[routingParams] This is a read-only property of the component");
            }
            get routingParams() {
              var component = this;
              return [{}].concat(component.routingSelected.map(function(routing) {
                return __routing_params__(routing, component.routingPath);
              })).reduce(function(accumulator, colData, index) {
                return Object.assign(accumulator, colData);
              });
            }
            createServiceInstance() {
              var component = this;
              var body = component.body;
              var data = this.data;
              var __serviceClass;
              var __classDefinition = component.getClass().__definition;
              var _serviceClassName = isBrowser && body.getAttribute("serviceClass") !== null ? body.getAttribute("serviceClass") : null;
              return new Promise(function(resolve, reject) {
                var __enable_service_class__ = Object.hasOwnProperty.call(body, "enableServiceClass") && body.enableServiceClass || !Object.hasOwnProperty.call(body, "enableServiceClass") ? true : false;
                var _response_to_data_ = isBrowser && body.getAttribute("response-to") !== null && body.getAttribute("response-to") === "data" ? true : false;
                var _response_to_template_ = isBrowser && body.getAttribute("response-to") !== null && body.getAttribute("response-to") === "template" ? true : false;
                if (__enable_service_class__ && _serviceClassName !== null) {
                  __serviceClass = ClassFactory(_serviceClassName);
                }
                if (!_response_to_data_ && __classDefinition && Object.hasOwnProperty.call(__classDefinition, "responseTo")) {
                  _response_to_data_ = __classDefinition.responseTo === "data" ? true : false;
                } else if (!_response_to_data_ && Object.hasOwnProperty.call(ClassFactory("Component"), "responseTo")) {
                  _response_to_data_ = ClassFactory("Component").responseTo === "data" ? true : false;
                }
                if (!_response_to_template_ && __classDefinition && Object.hasOwnProperty.call(__classDefinition, "responseTo")) {
                  _response_to_template_ = __classDefinition.responseTo === "template" ? true : false;
                } else if (!_response_to_template_ && Object.hasOwnProperty.call(ClassFactory("Component"), "responseTo")) {
                  _response_to_template_ = ClassFactory("Component").responseTo === "template" ? true : false;
                }
                if (typeof __serviceClass !== "undefined" && (typeof __enable_service_class__ !== "undefined" && __enable_service_class__ === true) && (_response_to_data_ || _response_to_template_)) {
                  logger.info("Loading service " + _serviceClassName);
                  var serviceInstance = New(__serviceClass, {
                    data
                  });
                  serviceLoader(serviceInstance).then(function({
                    request,
                    service
                  }) {
                    var serviceResponse;
                    if (typeof service.JSONresponse !== "undefined" && service.JSONresponse !== null) {
                      serviceResponse = service.JSONresponse;
                    } else {
                      serviceResponse = service.template;
                    }
                    if (_response_to_data_) {
                      if (typeof data === "object" && typeof serviceResponse === "object") {
                        data = Object.assign(data, serviceResponse);
                      } else {
                        data = serviceResponse;
                      }
                      component.data = data;
                    }
                    component.serviceInstance = serviceInstance;
                    component.serviceData = data;
                    if (_response_to_template_) {
                      component.template = serviceResponse;
                    }
                    resolve(serviceResponse);
                  }, function(rejectedResponse) {
                    logger.debug(`Service loading rejected for ${_serviceClassName} in ${component.name}`);
                    reject(rejectedResponse);
                  }).catch(function(e) {
                    logger.debug("Something went wroing while trying to load the service " + _serviceClassName);
                    throw Error(`Error loading ${_serviceClassName} for ${component.name}. Detail: ${e}`);
                  });
                } else {
                  resolve(null);
                }
              });
            }
            _bindroute_() {
              var _component_ = this;
              if (!_component_._bindroute_.loaded) {
                if (isBrowser) {
                  _component_.hostElements("a").map(function(a) {
                    a.oldclick = a.onclick;
                    a.onclick = function(e) {
                      var _ret_ = true;
                      if (!_top.global.get("routingPaths")) {
                        _top.global.set("routingPaths", []);
                      }
                      var routingWay = _top.CONFIG.get("routingWay");
                      var routingPath = e.target[routingWay];
                      if (_top.global.get("routingPaths").includes(routingPath) && e.target[routingWay] !== document.location[routingWay] && e.target.href !== document.location.href) {
                        logger.debug("A ROUTING WAS FOUND: " + routingPath);
                        window.history.pushState({
                          href: e.target.href
                        }, e.target.href, e.target.href);
                        ClassFactory("Component").route();
                        _ret_ = false;
                      } else {
                        logger.debug("NO ROUTING FOUND FOR: " + routingPath);
                      }
                      if (typeof e.target.oldclick !== "undefined" && typeof e.target.oldclick === "function") {
                        e.target.oldclick.call(e.target, e);
                      }
                      return _ret_;
                    };
                    return null;
                  });
                } else {
                }
                this._bindroute_.loaded = true;
              } else {
                logger.debug(`Routes already bound to popstate events for ${_component_.name}`);
              }
            }
            done(standardResponse) {
              var _ret_;
              if (typeof standardResponse !== "undefined") {
                var { request, component } = standardResponse;
                _ret_ = Promise.resolve({ request, component });
              }
              return _ret_;
            }
            createControllerInstance() {
              var _Controller;
              if (isBrowser) {
                if (typeof this.body === "undefined") {
                  throw new Error("The component has no body");
                }
                var controllerName = this.body.getAttribute("controllerClass");
                if (!controllerName) {
                  controllerName = "Controller";
                }
                _Controller = ClassFactory(controllerName);
                if (typeof _Controller !== "undefined") {
                  this.controller = New(_Controller, {
                    component: this
                  });
                }
              }
              return new Promise((resolve, reject) => {
                if (isBrowser) {
                  if (typeof _Controller !== "undefined" && typeof this.controller !== "undefined") {
                    if (typeof this.controller.done === "function") {
                      try {
                        this.controller.done.call(this.controller);
                      } catch (e) {
                        throw Error(e);
                      }
                    } else {
                      logger.debug(`${controllerName} does not have a done() method.`);
                      reject(`${controllerName} does not have a done() method.`);
                    }
                    if (typeof this.controller.createRoutingController === "function") {
                      this.controller.createRoutingController.call(this.controller);
                    } else {
                      logger.debug(`${controllerName} does not have a createRoutingController() method.`);
                    }
                  }
                }
                resolve({ component: this, controller: this.controller });
              });
            }
            createEffectInstance() {
              var _component_ = this;
              return new Promise(function(resolve, reject) {
                if (isBrowser) {
                  var effectClassName = _component_.body.getAttribute("effectClass");
                  var applyEffectTo = _component_.body.getAttribute("apply-effect-to");
                  applyEffectTo = applyEffectTo !== null ? applyEffectTo : "load";
                  if (effectClassName !== null && applyEffectTo === "observe") {
                    _component_.applyObserveTransitionEffect(effectClassName);
                  } else if (effectClassName !== null && applyEffectTo === "load") {
                    _component_.applyTransitionEffect(effectClassName);
                  }
                }
                resolve({ component: _component_, effect: _component_.effect });
              });
            }
            createViewInstance() {
              var _component_ = this;
              return new Promise(function(resolve, reject) {
                var viewName = isBrowser ? _component_.body.getAttribute("viewClass") : null;
                if (viewName !== null) {
                  var _View = ClassFactory(viewName);
                  if (typeof _View !== "undefined") {
                    _component_.view = New(_View, {
                      component: _component_
                    });
                    if (Object.hasOwnProperty.call(_component_.view, "done") && typeof _component_.view.done === "function") {
                      _component_.view.done.call(_component_.view);
                    }
                  }
                }
                resolve({ component: _component_, view: _component_.view });
              });
            }
            __done__() {
              var _component_ = this;
              var componentDone = /* @__PURE__ */ __name(function() {
                if (typeof _component_ === "undefined") {
                  throw new Error("componentDone() has lost its context");
                }
                if (typeof _component_.body === "undefined") {
                  throw new Error("The component has no body");
                }
                _component_.createViewInstance();
                _component_.createControllerInstance();
                _component_.createEffectInstance();
                logger.debug(`Trying to run component helpers for ${_component_.name}...`);
                try {
                  _component_.runComponentHelpers();
                  logger.debug(`Component helpers for ${_component_.name} executed.`);
                } catch (e) {
                  logger.debug(`Component helpers for ${_component_.name} could not be executed.`);
                  throw Error(e);
                }
                _component_.subcomponents = _component_.__buildSubComponents__();
                _component_._bindroute_();
                if (isBrowser) {
                  _component_.body.setAttribute("loaded", true);
                }
              }, "componentDone");
              return new Promise(function(resolve, reject) {
                try {
                  resolve(componentDone.call(_component_));
                } catch (e) {
                  reject(e);
                }
              });
            }
            hostElements(tagFilter) {
              var _component_ = this;
              var elementList = [];
              if (isBrowser) {
                elementList = _component_.shadowed && typeof _component_.shadowRoot !== "undefined" ? _component_.shadowRoot.subelements(tagFilter) : _component_.body.subelements(tagFilter);
              }
              return elementList;
            }
            get subtags() {
              var _component_ = this;
              var tagFilter = _tag_filter_;
              return _component_.hostElements(tagFilter);
            }
            get bodyAttributes() {
              var _component_ = this;
              var c = _component_.body;
              return isBrowser ? [...c.getAttributeNames()].map((a) => {
                return { [a]: c.getAttribute(a) };
              }).reduce((accumulator, colData, index) => {
                return Object.assign(accumulator, colData);
              }) : {};
            }
            get dataAttributes() {
              var _component_ = this;
              var c = _component_.body;
              return isBrowser ? [{}].concat([...c.getAttributeNames()].filter((n) => n.startsWith("data-")).map((a) => {
                return { [a.split("-")[1]]: c.getAttribute(a) };
              })).reduce((accumulator, colData, index) => {
                return Object.assign(accumulator, colData);
              }) : {};
            }
            __buildSubComponents__(rebuildObjects = false) {
              var _component_ = this;
              var elementList = _component_.subtags;
              if (!rebuildObjects) {
                elementList = elementList.filter((t) => t.getAttribute("loaded") !== "true");
              }
              if (typeof _component_ !== "undefined" || _component_.subcomponents.length < 1) {
                _component_.subcomponents = _buildComponentsFromElements_(elementList, _component_);
              }
              return _component_.subcomponents;
            }
            fail(standardResponse) {
              var _ret_;
              if (typeof standardResponse !== "undefined") {
                var { error, component } = standardResponse;
                _ret_ = Promise.resolve({ error, component });
              }
              return _ret_;
            }
            set(name, value) {
              this[name] = value;
            }
            get(name) {
              return this[name];
            }
            feedComponent() {
              var _component_ = this;
              logger.debug(`[Component][${this.name}][feedComponent] start feeding component...`);
              var _feedComponent_InBrowser = /* @__PURE__ */ __name(function(_component_2) {
                if (typeof _component_2.container === "undefined" && typeof _component_2.body === "undefined") {
                  logger.warn("COMPONENT {{NAME}} has an undefined container and body".replace("{{NAME}}", _component_2.name));
                  return;
                }
                var container = typeof _component_2.container === "undefined" || _component_2.container === null ? _component_2.body : _component_2.container;
                var parsedAssignmentText = _component_2.parsedAssignmentText;
                _component_2.innerHTML = parsedAssignmentText;
                if (_component_2.shadowed) {
                  logger.debug("COMPONENT {{NAME}} is shadowed".replace("{{NAME}}", _component_2.name));
                  logger.debug("Preparing slots for Shadowed COMPONENT {{NAME}}".replace("{{NAME}}", _component_2.name));
                  var tmp_shadowContainer = _DOMCreateElement("div");
                  container.subelements("[slot]").map(
                    function(c) {
                      if (c.parentElement === container) {
                        tmp_shadowContainer.appendChild(c);
                      }
                    }
                  );
                  logger.debug("Creating shadowedContainer for COMPONENT {{NAME}}".replace("{{NAME}}", _component_2.name));
                  var shadowContainer = _DOMCreateElement("div");
                  shadowContainer.classList.add("shadowHost");
                  try {
                    _component_2.shadowRoot = shadowContainer.attachShadow({
                      mode: "open"
                    });
                  } catch (e) {
                    try {
                      logger.debug("Shadowed COMPONENT {{NAME}} is repeated".replace("{{NAME}}", _component_2.name));
                      _component_2.shadowRoot = shadowContainer.shadowRoot;
                    } catch (e2) {
                      logger.warn("Shadowed COMPONENT {{NAME}} is not allowed on this browser".replace("{{NAME}}", _component_2.name));
                    }
                  }
                  if (typeof _component_2.shadowRoot !== "undefined" && _component_2.shadowRoot !== null) {
                    if (_component_2.reload) {
                      logger.debug("FORCED RELOADING OF CONTAINER FOR Shadowed COMPONENT {{NAME}}".replace("{{NAME}}", _component_2.name));
                      shadowContainer.shadowRoot.innerHTML = _component_2.innerHTML;
                    } else {
                      tmp_shadowContainer.innerHTML = _component_2.parseTemplate(tmp_shadowContainer.innerHTML);
                      logger.debug("ADDING Shadowed COMPONENT {{NAME}} ".replace("{{NAME}}", _component_2.name));
                      shadowContainer.shadowRoot.innerHTML += _component_2.innerHTML;
                    }
                    logger.debug("ADDING Slots to Shadowed COMPONENT {{NAME}} ".replace("{{NAME}}", _component_2.name));
                    shadowContainer.innerHTML += tmp_shadowContainer.innerHTML;
                    logger.debug("APPENDING Shadowed COMPONENT {{NAME}} to Container ".replace("{{NAME}}", _component_2.name));
                    var qs = container.querySelector(".shadowHost");
                    if (!(typeof qs !== "undefined" && qs !== null)) {
                      container.appendChild(shadowContainer);
                    } else {
                      logger.debug("Shadowed Container for COMPONENT {{NAME}} is already present in the tree ".replace("{{NAME}}", _component_2.name));
                      _component_2.shadowRoot.innerHTML = shadowContainer.shadowRoot.innerHTML;
                    }
                  } else {
                    logger.warn("Shadowed COMPONENT {{NAME}} is bad configured".replace("{{NAME}}", _component_2.name));
                  }
                } else {
                  if (_component_2.reload) {
                    logger.debug("FORCED RELOADING OF CONTAINER FOR COMPONENT {{NAME}}".replace("{{NAME}}", _component_2.name));
                    container.innerHTML = _component_2.innerHTML;
                  } else if (container && _component_2) {
                    logger.debug("ADDING COMPONENT {{NAME}} ".replace("{{NAME}}", _component_2.name));
                    container.innerHTML += _component_2.innerHTML;
                  } else {
                    logger.warn("COMPONENT {{NAME}} is not added to the DOM".replace("{{NAME}}", _component_2.name));
                  }
                }
              }, "_feedComponent_InBrowser");
              var _feedComponent_InNode = /* @__PURE__ */ __name(function(_component_2) {
                var parsedAssignmentText = _component_2.parsedAssignmentText;
                _component_2.innerHTML = parsedAssignmentText;
              }, "_feedComponent_InNode");
              var _ret_;
              if (!is_a(_component_, "Component")) {
                logger.warn("Trying to feed a non component object");
                return;
              }
              if (isBrowser) {
                _ret_ = _feedComponent_InBrowser(_component_);
              } else {
                _ret_ = _feedComponent_InNode(_component_);
              }
              return _ret_;
            }
            rebuild() {
              var _component = this;
              var _promise = new Promise(function(resolve, reject) {
                if (typeof _component === "undefined" || _component === null) {
                  reject("Component is undefined");
                }
                if (isQCObjects_Object(_component) && is_a(_component, "Component")) {
                  switch (true) {
                    case _component.get("tplsource") === "none":
                      logger.debug("Component " + _component.name + " has specified template-source=none, so no template load was done");
                      var standardResponse = {
                        request: null,
                        component: _component
                      };
                      _component.__done__().then(function() {
                        if (typeof _component.done === "function") {
                          _component.done.call(_component, standardResponse);
                        }
                        resolve.call(_promise, standardResponse);
                      }, function() {
                        reject.call(_promise, standardResponse);
                      });
                      break;
                    case _component.get("tplsource") === "inline":
                      logger.debug("Component " + _component.name + " has specified template-source=inline, so it is assumed that template is already declared");
                      (async function(_component2) {
                        _component2.feedComponent.bind(_component2)();
                      })(_component);
                      var standardResponse = {
                        request: null,
                        component: _component
                      };
                      _component.__done__().then(function() {
                        if (typeof _component.done === "function") {
                          _component.done.call(_component, standardResponse);
                        }
                        resolve.call(_promise, standardResponse);
                      }, function() {
                        reject.call(_promise, standardResponse);
                      });
                      break;
                    case (_component.get("tplsource") === "default" && _component.get("templateURI") !== ""):
                      _component.set("url", _component.get("basePath") + _component.get("templateURI"));
                      componentLoader(_component, false).then(
                        function(standardResponse2) {
                          resolve.call(_promise, standardResponse2);
                        },
                        function(standardResponse2) {
                          reject.call(_promise, standardResponse2);
                        }
                      );
                      break;
                    case (_component.get("tplsource") === "external" && _component.get("templateURI") !== ""):
                      _component.set("url", _component.get("templateURI"));
                      componentLoader(_component, false).then(
                        function(standardResponse2) {
                          resolve.call(_promise, standardResponse2);
                        },
                        function(standardResponse2) {
                          reject.call(_promise, standardResponse2);
                        }
                      );
                      break;
                    case (_component.get("tplsource") === "default" && _component.get("templateURI", "") === ""):
                      logger.debug(`Component ${_component.name} template-source is ${_component.get("tplsource")} and no templateURI is present`);
                      reject.call(_promise, `Component ${_component.name} template-source is ${_component.get("tplsource")} and no templateURI is present`);
                      break;
                    default:
                      logger.debug("Component " + _component.name + " will not be rebuilt because no templateURI is present");
                      reject.call(_promise, {
                        request: null,
                        component: _component
                      });
                      break;
                  }
                }
              });
              return _promise;
            }
            Cast(oClass) {
              let o = _methods_(oClass).map((m) => m.name.replace(/bound /g, "")).map((m) => {
                return {
                  [m]: oClass[m].bind(this)
                };
              }).reduce((c, p) => Object.assign(c, p), {});
              return _Cast(this, o);
            }
            static route() {
              var componentClass = this;
              var _route_promise_;
              var isValidInstance = isQCObjects_Object(componentClass) && is_a(componentClass, "Component") ? true : false;
              var __route__ = /* @__PURE__ */ __name(function(componentList) {
                var _componentNames_ = [];
                var _promises_ = componentList.filter(function(rc) {
                  return typeof rc !== "undefined";
                }).map(function(rc) {
                  if (typeof rc.name !== "undefined") {
                    _componentNames_.push(rc.name);
                  } else {
                    throw new Error(__getType__(rc) + " does not have a name");
                  }
                  return new Promise(function(resolve, reject) {
                    var _promise_;
                    if (typeof rc !== "undefined" && !!rc._reroute_) {
                      _promise_ = rc._reroute_().then(function() {
                        rc.reload = true;
                        return rc.rebuild();
                      }).then(function(_rc_) {
                        if (Object.hasOwnProperty.call(rc, "subcomponents") && typeof rc.subcomponents !== "undefined" && rc.subcomponents.length > 0) {
                          logger.debug("LOOKING FOR ROUTINGS IN SUBCOMPONENTS FOR: " + rc.name);
                          return __route__.call(rc, rc.subcomponents);
                        } else {
                          logger.debug("No subcomponents to look for routings in: " + rc.name);
                          if (rc.subtags.length > 0) {
                            rc.subcomponents = rc.__buildSubComponents__(true);
                          }
                          resolve(rc);
                        }
                      });
                    } else if (typeof rc !== "undefined") {
                      reject("Component " + rc.name + " is not an instance of Component");
                    }
                    return _promise_;
                  });
                });
                return Promise.all(_promises_).then(function() {
                  logger.debug("ROUTING COMPLETED FOR " + _componentNames_.join(", "));
                }).catch(function(err) {
                  logger.warn("ROUTING FAILED FOR " + _componentNames_.join(", ") + ": " + err);
                });
              }, "__route__");
              if (isValidInstance || !!_top.componentsStack) {
                if (isValidInstance) {
                  logger.debug("loading routings for instance " + componentClass.name);
                }
                _route_promise_ = __route__.call(componentClass, isValidInstance ? componentClass.subcomponents : _top.componentsStack);
              } else {
                logger.debug("An undetermined result expected if load routings. So will not be loaded this time.");
                throw Error(`There is no valid instance and no components stack available to apply rountings`);
              }
              return _route_promise_;
            }
            fullscreen() {
              if (isBrowser) {
                var elem = this.body;
                if (elem.requestFullscreen) {
                  elem.requestFullscreen();
                } else if (elem.mozRequestFullScreen) {
                  elem.mozRequestFullScreen();
                } else if (elem.webkitRequestFullscreen) {
                  elem.webkitRequestFullscreen();
                } else if (elem.msRequestFullscreen) {
                  elem.msRequestFullscreen();
                }
              } else {
              }
            }
            closefullscreen() {
              if (isBrowser) {
                if (document.exitFullscreen) {
                  document.exitFullscreen();
                } else if (document.mozCancelFullScreen) {
                  document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                  document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                  document.msExitFullscreen();
                }
              } else {
              }
            }
            _generateRoutingPaths(componentBody) {
              var component = this;
              return new Promise(function(resolve, reject) {
                if (isBrowser) {
                  if (__valid_routing_way__(component.validRoutingWays, component.routingWay)) {
                    if (typeof componentBody !== "undefined") {
                      component.innerHTML = componentBody.innerHTML;
                      component.routingNodes = componentBody.subelements("routing");
                      component.routings = [];
                      component.routingNodes.map(function(routingNode, r) {
                        var attributeNames = routingNode.getAttributeNames();
                        var routing = {};
                        attributeNames.map(function(attributeName, a) {
                          routing[attributeNames[a]] = routingNode.getAttribute(attributeNames[a]);
                        });
                        component.routings.push(routing);
                        if (!component.routingPaths) {
                          component.routingPaths = [];
                        }
                        if (!component.routingPaths.includes(routing.path)) {
                          component.routingPaths.push(routing.path);
                        }
                        if (!_top.global.get("routingPaths")) {
                          _top.global.set("routingPaths", []);
                        }
                        if (!_top.global.get("routingPaths").includes(routing.path)) {
                          _top.global.get("routingPaths").push(routing.path);
                        }
                      });
                    }
                  }
                } else {
                }
                resolve();
              });
            }
            parseTemplate(template) {
              var _self = this;
              var _parsedAssignmentText;
              var value = template;
              if (Object.hasOwnProperty.call(_self, "templateHandler")) {
                var templateHandlerName = _self.templateHandler;
                logger.debug(`[Component][${this.name}][parseTemplate] Attempting to use ${templateHandlerName} ...`);
                var templateHandlerClass = ClassFactory(templateHandlerName);
                var templateInstance = New(templateHandlerClass, {
                  component: _self,
                  template: value
                });
                templateInstance.component = _self;
                var selfData = _self.data;
                if (Object.hasOwnProperty.call(_self, "assignRoutingParams") && _self.assignRoutingParams) {
                  try {
                    selfData = Object.assign(selfData, _self.routingParams);
                  } catch (e) {
                    logger.debug("[parseTemplate] it was not possible to assign the routing params to the template");
                  }
                }
                _parsedAssignmentText = templateInstance.assign(selfData);
              } else {
                logger.debug(`[Component][${this.name}][parseTemplate] No value for templateHandler. Using raw content...`);
                _parsedAssignmentText = value;
              }
              return _parsedAssignmentText;
            }
            _reroute_() {
              var rc = this;
              return new Promise(function(resolve, reject) {
                if (isBrowser) {
                  if (__valid_routing_way__(rc.validRoutingWays, rc.routingWay)) {
                    rc.routingPath = document.location[rc.routingWay];
                    rc.routingSelected.map(function(routing, r) {
                      var componentURI = ComponentURI({
                        "COMPONENTS_BASE_PATH": _top.CONFIG.get("componentsBasePath"),
                        "COMPONENT_NAME": routing.name.toString(),
                        "TPLEXTENSION": Object.hasOwnProperty.call(routing, "tplextension") ? routing.tplextension : rc.tplextension,
                        "TPL_SOURCE": "default"
                        /* here is always default in order to get the right uri */
                      });
                      rc.templateURI = componentURI;
                    });
                    if (rc.routingSelected.length > 0) {
                      rc.template = "";
                      rc.body.innerHTML = "";
                    }
                  }
                }
                resolve(rc);
              });
            }
            lazyLoadImages() {
              if (isBrowser) {
                var component = this;
                var _componentRoot = component.shadowed ? component.shadowRoot : component.body;
                var _imgLazyLoaded = [..._componentRoot.subelements("img[lazy-src]")];
                var _lazyLoadImages = /* @__PURE__ */ __name(function(image) {
                  image.setAttribute("src", image.getAttribute("lazy-src"));
                  image.onload = () => {
                    image.removeAttribute("lazy-src");
                  };
                }, "_lazyLoadImages");
                if ("IntersectionObserver" in window) {
                  var observer = new IntersectionObserver((items, observer2) => {
                    items.forEach((item) => {
                      if (item.isIntersecting) {
                        _lazyLoadImages(item.target);
                        observer2.unobserve(item.target);
                      }
                    });
                  });
                  _imgLazyLoaded.map(function(img) {
                    return observer.observe(img);
                  });
                } else {
                  _imgLazyLoaded.map(_lazyLoadImages);
                }
              } else {
              }
              return null;
            }
            applyTransitionEffect(effectClassName) {
              var _Effect = ClassFactory(effectClassName);
              if (typeof _Effect === "undefined") {
                throw Error(`${effectClassName} not found.`);
              }
              if (typeof _Effect !== "undefined" && is_a(_Effect, "TransitionEffect")) {
                this.effect = New(_Effect, {
                  component: this
                });
                this.effect.apply(this.effect.defaultParams);
              } else {
                logger.debug(`${effectClassName} is ${__getType__(_Effect)} but is not a TransitionEffect`);
              }
            }
            applyObserveTransitionEffect(effectClassName) {
              if (isBrowser) {
                var component = this;
                var _componentRoot = component.shadowed ? component.shadowRoot.host : component.body;
                var _applyEffect_ = /* @__PURE__ */ __name(function(element) {
                  component.applyTransitionEffect(effectClassName);
                }, "_applyEffect_");
                if ("IntersectionObserver" in window) {
                  var observer = new IntersectionObserver((items, observer2) => {
                    items.forEach((item) => {
                      if (item.isIntersecting) {
                        _applyEffect_(item.target);
                        observer2.unobserve(item.target);
                      }
                    });
                  });
                  observer.observe(_componentRoot);
                } else {
                  _applyEffect_(_componentRoot);
                }
              } else {
              }
              return null;
            }
            scrollIntoHash() {
              if (isBrowser) {
                var component = this;
                if (document.location.hash !== "") {
                  var _componentRoot = component.shadowed ? component.shadowRoot : component.body;
                  _componentRoot.subelements(document.location.hash).map(
                    function(element) {
                      if (typeof element.scrollIntoView === "function") {
                        element.scrollIntoView(
                          _top.CONFIG.get("scrollIntoHash", {
                            behavior: "auto",
                            block: "top",
                            inline: "top"
                          })
                        );
                      }
                    }
                  );
                }
              } else {
              }
            }
            i18n_translate() {
              if (isBrowser) {
                if (_top.CONFIG.get("use_i18n")) {
                  var component = this;
                  var _componentRoot = component.shadowed ? component.shadowRoot : component.body;
                  var lang1 = _top.CONFIG.get("lang", "en");
                  var lang2 = navigator.language.slice(0, 2);
                  var i18n = _top.global.get("i18n");
                  if (lang1 !== lang2 && (typeof i18n === "object" && Object.hasOwnProperty.call(i18n, "messages"))) {
                    var callback_i18n = /* @__PURE__ */ __name(function() {
                      var component2 = this;
                      return new Promise(function(resolve, reject) {
                        var messages = i18n.messages.filter(function(message) {
                          return Object.hasOwnProperty.call(message, lang1) && Object.hasOwnProperty.call(message, lang2);
                        });
                        _componentRoot.subelements("ul,li,h1,h2,h3,a,b,p,input,textarea,summary,details,option,component").map(function(element) {
                          messages.map(function(message) {
                            var _innerHTML = element.innerHTML;
                            _innerHTML = _innerHTML.replace(new RegExp(`${message[lang1]}`, "g"), message[lang2]);
                            element.innerHTML = _innerHTML;
                            return null;
                          });
                          return element;
                        });
                        resolve();
                      });
                    }, "callback_i18n");
                    callback_i18n.call(component).then(function() {
                      logger.debug("i18n loaded for component: " + component.name);
                    });
                  }
                }
              } else {
              }
            }
            addComponentHelper(componentHelper) {
              var component = this;
              component._componentHelpers.push(componentHelper);
            }
            runComponentHelpers() {
              if (isBrowser) {
                var component = this;
                var __component_helpers__ = [];
                __component_helpers__.push(component.i18n_translate.bind(component));
                __component_helpers__.push(component.scrollIntoHash.bind(component));
                __component_helpers__.push(component.lazyLoadImages.bind(component));
                __component_helpers__ = __component_helpers__.concat(component._componentHelpers);
                __component_helpers__.map(
                  function(_component_helper_) {
                    logger.debug(`Executing ${_component_helper_.name} as component helper for ${component.name}...`);
                    _component_helper_();
                  }
                );
              } else {
              }
            }
          }, "Component")
        ]);
        _methods_(ClassFactory("Component")).map(function(__c__) {
          _protected_code_(__c__);
        });
        if (isBrowser) {
          window.addEventListener("popstate", function(popStateEvent) {
            popStateEvent.stopImmediatePropagation();
            popStateEvent.stopPropagation();
            ClassFactory("Component").route();
          });
        }
        Package2("com.qcobjects.controllers", [
          /* @__PURE__ */ __name(class Controller extends ClassFactory("InheritClass") {
            constructor({
              component,
              dependencies
            }) {
              super({ component, dependencies });
              __publicField(this, "component", null);
              __publicField(this, "dependencies", []);
              this.component = component;
              this.dependencies = dependencies;
              if (typeof this.component === "undefined" || this.component === "null") {
                throw Error(`${__getType__(this)} must be called with a component`);
              }
            }
            routingSelectedAttr(attrName) {
              return this.component.routingSelected.map(function(r) {
                return r[attrName];
              }).filter(function(v) {
                return v;
              }).pop();
            }
            isTouchable() {
              return "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
            }
            onpress(subelementSelector, handler) {
              try {
                if (this.isTouchable()) {
                  this.component.body.subelements(subelementSelector)[0].addEventListener("touchstart", handler, {
                    passive: true
                  });
                } else {
                  this.component.body.subelements(subelementSelector)[0].addEventListener("click", handler, {
                    passive: true
                  });
                }
              } catch (e) {
                logger.debug("No button to assign press event");
              }
            }
            createRoutingController() {
              var controller = this;
              var component = controller.component;
              var controllerName = controller.routingSelectedAttr("controllerclass");
              if (typeof controllerName !== "undefined") {
                var _Controller2 = ClassFactory(controllerName);
                if (typeof _Controller2 !== "undefined") {
                  component.routingController = New(_Controller2, {
                    component
                  });
                  if (Object.hasOwnProperty.call(component.routingController, "done") && typeof component.routingController.done === "function") {
                    component.routingController.done.call(component.routingController);
                  }
                }
              }
            }
            done() {
            }
          }, "Controller")
        ]);
        Package2("com.qcobjects.views", [
          /* @__PURE__ */ __name(class View extends ClassFactory("InheritClass") {
            constructor({ component = void 0, dependencies = [] }) {
              super(...arguments);
              if (typeof this.component === "undefined" || this.component === "null") {
                throw Error(`${__getType__(this)} must be called with a component`);
              }
            }
          }, "View")
        ]);
        Package2("com.qcobjects.api", [
          /* @__PURE__ */ __name(class Service extends ClassFactory("InheritClass") {
            constructor() {
              super(...arguments);
              __publicField(this, "kind", "rest");
              /* it can be rest, mockup, local */
              __publicField(this, "domain", _domain_);
              __publicField(this, "basePath", _basePath_);
              __publicField(this, "url", "");
              __publicField(this, "method", "GET");
              __publicField(this, "data", {});
              __publicField(this, "reload", false);
              __publicField(this, "cached", false);
            }
            set(name, value) {
              this[name] = value;
            }
            get(name) {
              return this[name];
            }
          }, "Service")
        ]);
        Package2("com.qcobjects.api.services", [
          /* @__PURE__ */ __name(class JSONService extends ClassFactory("Service") {
            constructor() {
              super(...arguments);
              __publicField(this, "method", "GET");
              __publicField(this, "cached", false);
              __publicField(this, "headers", {
                "Content-Type": "application/json",
                "charset": "utf-8"
              });
              __publicField(this, "JSONresponse", null);
            }
            done(result) {
              logger.debug("***** RECEIVED RESPONSE:");
              logger.debug(result.service.template);
              this.JSONresponse = JSON.parse(result.service.template);
            }
          }, "JSONService")
        ]);
        Package2("com.qcobjects.api.config", [
          /* @__PURE__ */ __name(class ConfigService extends ClassFactory("JSONService") {
            constructor() {
              super(...arguments);
              __publicField(this, "method", "GET");
              __publicField(this, "cached", false);
              __publicField(this, "configFileName", "config.json");
              __publicField(this, "headers", {
                "Content-Type": "application/json",
                "charset": "utf-8"
              });
              __publicField(this, "JSONresponse", null);
              this.set("url", this.get("basePath") + this.get("configFileName"));
            }
            done(result) {
              logger.debug("***** CONFIG LOADED:");
              logger.debug(result.service.template);
              this.JSONresponse = JSON.parse(result.service.template);
              if (Object.hasOwnProperty.call(this.JSONresponse, "__encoded__")) {
                this.JSONresponse = JSON.parse(ClassFactory("_Crypt").decrypt(this.JSONresponse.__encoded__, _secretKey));
              }
              for (var k in this.JSONresponse) {
                _top.CONFIG.set(k, this.JSONresponse[k]);
              }
              this.configLoaded.call(this);
            }
            fail(result) {
              this.configLoaded.call(this);
            }
          }, "ConfigService")
        ]);
        Package2("com.qcobjects.valueObjects", [
          /* @__PURE__ */ __name(class VO extends ClassFactory("InheritClass") {
            constructor() {
              super(...arguments);
            }
          }, "VO")
        ]);
        var ComponentURI = /* @__PURE__ */ __name(({ TPL_SOURCE, COMPONENTS_BASE_PATH, COMPONENT_NAME, TPLEXTENSION }) => {
          const templateURI = TPL_SOURCE === "default" ? `${COMPONENTS_BASE_PATH}${COMPONENT_NAME}.${TPLEXTENSION}` : "";
          return templateURI;
        }, "ComponentURI");
        var componentLoader = /* @__PURE__ */ __name(function(component, _async) {
          var __promise__;
          var _componentLoaderInBrowser = /* @__PURE__ */ __name(function(component2, _async2) {
            __promise__ = new Promise(function(resolve, reject) {
              var _promise = component2.__promise__;
              var container = Object.hasOwnProperty.call(component2, "container") && typeof component2.container !== "undefined" && component2.container !== null ? component2.container : component2.body;
              if (container !== null) {
                var _feedComponent_ = /* @__PURE__ */ __name(function(component3) {
                  component3.feedComponent();
                  var standardResponse = {
                    "request": xhr,
                    "component": component3
                  };
                  resolve.call(_promise, standardResponse);
                }, "_feedComponent_");
                logger.debug("LOADING COMPONENT DATA {{DATA}} FROM {{URL}}".replace("{{DATA}}", _DataStringify(component2.data)).replace("{{URL}}", component2.url));
                var _componentLoaded = /* @__PURE__ */ __name(function() {
                  var successStatus = is_file ? 0 : 200;
                  if (xhr.status === successStatus) {
                    var response = xhr.responseText;
                    logger.debug("Data received {{DATA}}".replace("{{DATA}}", _DataStringify(response)));
                    logger.debug("CREATING COMPONENT {{NAME}}".replace("{{NAME}}", component2.name));
                    component2.template = response;
                    if (component2.cached && typeof cache !== "undefined") {
                      cache.save(component2.name, component2.template);
                    }
                    _feedComponent_.call(this, component2);
                  } else {
                    var standardResponse = {
                      "request": xhr,
                      "component": component2
                    };
                    reject.call(_promise, standardResponse);
                  }
                }, "_componentLoaded");
                if (typeof component2.template === "string" && component2.template !== "") {
                  _feedComponent_.call(this, component2);
                } else {
                  var is_file = component2.url.startsWith("file:") ? true : false;
                  var xhr = new XMLHttpRequest();
                  if (!is_file) {
                    try {
                      logger.debug("Calling the url of component in async mode.");
                      xhr.open(component2.method, component2.url, true);
                    } catch (e) {
                      logger.debug("Last try has failed... The component cannot be loaded.");
                    }
                  } else {
                    if ("fetch" in _top) {
                      logger.debug("I can use fetch...");
                      logger.debug("It is a file to be loaded, so I will try to use fetch");
                      var _p = fetch(component2.url).then((response) => {
                        logger.debug("I got a response from fetch, so I'll feed the component");
                        response.text().then((text) => {
                          component2.template = text;
                          _feedComponent_.call(this, component2);
                        });
                      });
                    }
                  }
                  if (!is_phonegap && !is_file) {
                    xhr.setRequestHeader("Content-Type", "text/html");
                  }
                  if (!is_file) {
                    xhr.onload = _componentLoaded;
                  }
                  var _directLoad = /* @__PURE__ */ __name(function(is_file2) {
                    is_file2 = typeof is_file2 === "undefined" || !is_file2 ? false : true;
                    logger.debug("SENDING THE NORMAL REQUEST  ");
                    if (is_file2) {
                      if (!("fetch" in _top)) {
                        logger.debug("I have to try to load the file using xhr...  ");
                        xhr.send(null);
                        if (xhr.status === XMLHttpRequest.DONE) {
                          _componentLoaded.call(this);
                        }
                      }
                    } else {
                      logger.debug("Trying to send the data to the component...  ");
                      xhr.send(_DataStringify(component2.data));
                    }
                  }, "_directLoad");
                  if (component2.cached && !is_file) {
                    logger.debug("USING CACHE FOR COMPONENT: " + component2.name);
                    var cache = new ComplexStorageCache({
                      index: component2.cacheIndex,
                      load(cacheController) {
                        _directLoad.call(this, is_file);
                      },
                      alternate(cacheController) {
                        if (component2.method === "GET") {
                          component2.template = cacheController.cache.getCached(component2.cacheIndex);
                          _feedComponent_.call(this, component2);
                        } else {
                          _directLoad.call(this, is_file);
                        }
                        return;
                      }
                    });
                    global2.lastCache = cache;
                  } else {
                    logger.debug("NOT USING CACHE FOR COMPONENT: " + component2.name);
                    _directLoad.call(this, is_file);
                  }
                }
              } else {
                logger.debug("CONTAINER DOESNT EXIST");
              }
            });
            __promise__.then(function(standardResponse) {
              return component2.__done__().then(function() {
                var _ret_2;
                if (typeof component2.done === "function") {
                  _ret_2 = component2.done.call(component2, standardResponse);
                }
                return Promise.resolve(_ret_2);
              });
            }, function(standardResponse) {
              var _ret_2;
              if (typeof component2.fail === "function") {
                _ret_2 = component2.fail.call(component2, standardResponse);
              }
              return Promise.reject(_ret_2);
            }).catch(function(e) {
              logger.debug("Something wrong loading the component");
            });
            return __promise__;
          }, "_componentLoaderInBrowser");
          var _componentLoaderInNode = /* @__PURE__ */ __name(function(component2, _async2) {
            __promise__ = new Promise(function(resolve, reject) {
              var _promise = __promise__;
              var _feedComponent_ = /* @__PURE__ */ __name(function(component3) {
                component3.feedComponent();
                var standardResponse = {
                  "request": null,
                  "component": component3
                };
                resolve.call(_promise, standardResponse);
              }, "_feedComponent_");
              logger.debug("LOADING COMPONENT DATA {{DATA}} FROM {{URL}}".replace("{{DATA}}", _DataStringify(component2.data)).replace("{{URL}}", component2.url));
              var _componentLoaded = /* @__PURE__ */ __name(function(err, responseText) {
                if (!err) {
                  var response = responseText.toString();
                  logger.debug("Data received {{DATA}}".replace("{{DATA}}", _DataStringify(response)));
                  logger.debug("CREATING COMPONENT {{NAME}}".replace("{{NAME}}", component2.name));
                  component2.template = response;
                  if (component2.cached && typeof cache !== "undefined") {
                    cache.save(component2.name, component2.template);
                  }
                  _feedComponent_.call(this, component2);
                } else {
                  var standardResponse = {
                    "request": null,
                    "component": component2
                  };
                  reject.call(_promise, standardResponse);
                }
              }, "_componentLoaded");
              if (typeof component2.template === "string" && component2.template !== "") {
                _feedComponent_.call(this, component2);
              } else {
                logger.debug("Loading the component as a local file in server...");
                var _directLoad = /* @__PURE__ */ __name(function(is_file) {
                  const fs = _require_("fs");
                  logger.debug("SENDING THE NORMAL REQUEST  ");
                  fs.readFile(component2.url, _componentLoaded);
                }, "_directLoad");
                if (component2.cached) {
                  logger.debug("USING CACHE FOR COMPONENT: " + component2.name);
                  var cache = new ComplexStorageCache({
                    index: component2.cacheIndex,
                    load(cacheController) {
                      _directLoad.call(this);
                    },
                    alternate(cacheController) {
                      if (component2.method === "GET") {
                        component2.template = cacheController.cache.getCached(component2.cacheIndex);
                        _feedComponent_.call(this, component2);
                      } else {
                        _directLoad.call(this);
                      }
                      return;
                    }
                  });
                  global2.lastCache = cache;
                } else {
                  logger.debug("NOT USING CACHE FOR COMPONENT: " + component2.name);
                  _directLoad.call(this);
                }
              }
            });
            __promise__.then(function(standardResponse) {
              return component2.__done__().then(function() {
                var _ret_2;
                if (typeof component2.done === "function") {
                  _ret_2 = component2.done.call(component2, standardResponse);
                }
                return Promise.resolve(_ret_2);
              });
            }, function(standardResponse) {
              var _ret_2;
              if (typeof component2.fail === "function") {
                _ret_2 = component2.fail.call(component2, standardResponse);
              }
              return Promise.reject(_ret_2);
            }).catch(function(e) {
              logger.debug(`Something wrong loading the component: ${e}`);
            });
            return __promise__;
          }, "_componentLoaderInNode");
          var _ret_;
          if (isBrowser) {
            if (typeof _async !== "undefined" && _async) {
              _ret_ = asyncLoad(_componentLoaderInBrowser, arguments);
            } else {
              _ret_ = _componentLoaderInBrowser(component, _async);
            }
          } else {
            _ret_ = _componentLoaderInNode(component, _async);
          }
          return _ret_;
        }, "componentLoader");
        var serviceLoader = /* @__PURE__ */ __name(function(service, _async) {
          var _serviceLoaderInBrowser = /* @__PURE__ */ __name(function(service2, _async2) {
            var _promise = new Promise(
              function(resolve, reject) {
                logger.debug("LOADING SERVICE DATA {{DATA}} FROM {{URL}}".replace("{{DATA}}", _DataStringify(service2.data)).replace("{{URL}}", service2.url));
                var xhr = new XMLHttpRequest();
                xhr.withCredentials = service2.withCredentials;
                var xhrasync = true;
                xhr.open(service2.method, service2.url, xhrasync);
                for (var header in service2.headers) {
                  try {
                    if (typeof service2.headers[header] !== "function") {
                      xhr.setRequestHeader(header, service2.headers[header]);
                    }
                  } catch (e) {
                    logger.debug("Something went wrong when assign the header " + header);
                  }
                }
                xhr.onload = function() {
                  if (xhr.status === 200) {
                    var response = xhr.responseText;
                    logger.debug("Data received {{DATA}}".replace("{{DATA}}", _DataStringify(response)));
                    logger.debug("CREATING SERVICE {{NAME}}".replace("{{NAME}}", service2.name));
                    service2.template = response;
                    if (service2.cached && typeof cache !== "undefined") {
                      cache.save(service2.name, service2.template);
                    }
                    if (typeof service2.done === "function") {
                      var standardResponse = {
                        "request": xhr,
                        "service": service2
                      };
                      service2.done.call(service2, standardResponse);
                      resolve.call(_promise, standardResponse);
                    }
                  } else {
                    if (typeof service2.fail === "function") {
                      var standardResponse = {
                        "request": xhr,
                        "service": service2
                      };
                      service2.fail.call(service2, standardResponse);
                      reject.call(_promise, standardResponse);
                    }
                  }
                };
                var _directLoad = /* @__PURE__ */ __name(function() {
                  logger.debug("SENDING THE NORMAL REQUEST  ");
                  try {
                    xhr.send(_DataStringify(service2.data));
                  } catch (e) {
                    logger.debug("SOMETHING WRONG WITH REQUEST  ");
                    reject.call(_promise, {
                      request: xhr,
                      service: service2
                    });
                  }
                }, "_directLoad");
                if (service2.cached) {
                  var cache = new ComplexStorageCache({
                    index: service2.data,
                    load(cacheController) {
                      _directLoad.call(this);
                    },
                    alternate(cacheController) {
                      if (service2.method === "GET") {
                        service2.template = cacheController.cache.getCached(service2.name);
                        if (typeof service2.done === "function") {
                          var standardResponse = {
                            "request": xhr,
                            "service": service2
                          };
                          service2.done.call(service2, standardResponse);
                          resolve.call(_promise, standardResponse);
                        }
                      } else {
                        _directLoad.call(this);
                      }
                      return;
                    }
                  });
                  global2.lastCache = cache;
                } else {
                  _directLoad.call(this);
                }
                return xhr;
              }
            );
            return _promise;
          }, "_serviceLoaderInBrowser");
          var _serviceLoaderInNode = /* @__PURE__ */ __name(function(service2, _async2) {
            var _promise = new Promise(
              function(resolve, reject) {
                if (typeof URL === "undefined") {
                  global2.URL = _require_("url").URL;
                  let URL2 = global2.URL;
                }
                var serviceURL = new URL(service2.url);
                var req;
                service2.useHTTP2 = Object.hasOwnProperty.call(service2, "useHTTP2") && service2.useHTTP2;
                var captureEvents = /* @__PURE__ */ __name(function(req2) {
                  logger.debug("LOADING SERVICE DATA (non-browser) {{DATA}} FROM {{URL}}".replace("{{DATA}}", _DataStringify(service2.data)).replace("{{URL}}", service2.url));
                  var dataXML;
                  var standardResponse = {
                    "http2Client": client,
                    "request": req2,
                    "service": service2,
                    "responseHeaders": null
                  };
                  if (typeof service2.data === "object" && service2.data !== null) {
                    if (service2.useHTTP2) {
                      try {
                        logger.debug("Sending data...");
                        let buffer = new Buffer(_DataStringify(service2.data));
                        req2.write(buffer);
                      } catch (e2) {
                        logger.debug("It was not possible to send any data");
                      }
                    }
                  }
                  dataXML = "";
                  req2.on("response", (responseHeaders, flags) => {
                    logger.debug("receiving response...");
                    standardResponse.responseHeaders = responseHeaders;
                    dataXML = "";
                  });
                  req2.on("data", (chunk) => {
                    logger.debug("receiving data...");
                    dataXML += "" + chunk.toString();
                    service2.template = dataXML;
                  });
                  if (service2.useHTTP2) {
                    req2.resume();
                  }
                  req2.on("end", () => {
                    logger.debug("ending call...");
                    service2.template = dataXML;
                    if (Object.hasOwnProperty.call(service2, "useHTTP2") && service2.useHTTP2) {
                      client.destroy();
                    } else {
                      req2.destroy();
                    }
                    service2.done.call(service2, standardResponse);
                    resolve.call(_promise, standardResponse);
                  });
                  if (service2.useHTTP2) {
                    req2.end();
                  }
                }, "captureEvents");
                try {
                  var requestOptions;
                  if (service2.useHTTP2) {
                    logger.debug("using http2");
                    var http2 = _require_("http2");
                    var client = http2.connect(serviceURL.origin);
                    requestOptions = Object.assign({
                      ":method": service2.method,
                      ":path": serviceURL.pathname
                    }, service2.options);
                    requestOptions = Object.assign(requestOptions, service2.headers);
                    req = client.request(requestOptions);
                    req.setEncoding("utf8");
                    captureEvents(req);
                  } else {
                    if (serviceURL.protocol === "http:") {
                      var http = _require_("http");
                      var request = http.request;
                      requestOptions = Object.assign({
                        "url": service2.url,
                        headers: service2.headers
                      }, service2.options);
                      var req = request(service2.url);
                      captureEvents(req);
                    } else if (serviceURL.protocol === "https:") {
                      var https = _require_("https");
                      requestOptions = Object.assign({
                        hostname: serviceURL.hostname,
                        port: serviceURL.port,
                        path: serviceURL.pathname,
                        method: service2.method,
                        headers: service2.headers
                      }, service2.options);
                      var _req_ = https.request(requestOptions, function(req2) {
                        captureEvents(req2);
                      });
                      _req_.end();
                    } else {
                      var e = "Protocol not supported: " + serviceURL.protocol;
                      logger.debug(e);
                      throw new Error(e);
                    }
                  }
                } catch (e2) {
                  logger.debug(e2);
                  service2.fail.call(service2, e2);
                  reject.call(_promise, e2);
                }
              }
            ).catch(function(e) {
              console.log(e);
              logger.debug("Something happened when trying to call the service: " + service2.name);
              service2.fail.call(service2, e);
            });
            return _promise;
          }, "_serviceLoaderInNode");
          var _serviceLoaderMockup = /* @__PURE__ */ __name(function(service2, _async2) {
            var _promise = new Promise(
              function(resolve, reject) {
                logger.debug(`Calling mockup service ${service2.name} ...`);
                var standardResponse = {
                  "request": null,
                  "service": service2,
                  "responseHeaders": service2.responseHeaders
                };
                if (typeof service2.mockup === "function") {
                  service2.mockup.call(service2, standardResponse);
                } else {
                  service2.done.call(service2, standardResponse);
                }
                resolve.call(_promise, standardResponse);
              }
            );
            return _promise;
          }, "_serviceLoaderMockup");
          var _serviceLoaderLocal = /* @__PURE__ */ __name(function(service2, _async2) {
            var _promise = new Promise(
              function(resolve, reject) {
                logger.debug(`Calling local service ${service2.name} ...`);
                var standardResponse = {
                  "request": null,
                  "service": service2,
                  "responseHeaders": service2.responseHeaders
                };
                if (typeof service2.local === "function") {
                  service2.local.call(service2, standardResponse);
                } else {
                  service2.done.call(service2, standardResponse);
                }
                resolve.call(_promise, standardResponse);
              }
            );
            return _promise;
          }, "_serviceLoaderLocal");
          var _ret_;
          switch (service.kind) {
            case "rest":
              if (isBrowser) {
                if (typeof _async !== "undefined" && _async) {
                  _ret_ = asyncLoad(_serviceLoaderInBrowser, arguments);
                } else {
                  _ret_ = _serviceLoaderInBrowser(service, _async);
                }
              } else {
                _ret_ = _serviceLoaderInNode(service, _async);
              }
              break;
            case "mockup":
              _ret_ = _serviceLoaderMockup(service, _async);
              break;
            case "local":
              _ret_ = _serviceLoaderLocal(service, _async);
              break;
            default:
              logger.debug(`The value of the kind property of the service ${service.name} is not valid`);
              break;
          }
          return _ret_;
        }, "serviceLoader");
        Export(serviceLoader);
        Export(componentLoader);
        Export(ComponentURI);
        Export(ObjectName);
        Export(_DataStringify);
        Export(isQCObjects_Class);
        Export(isQCObjects_Object);
        Export(NamespaceRef);
        if (isBrowser) {
          Element.prototype.buildComponents = function(rebuildObjects = false) {
            var tagFilter = _tag_filter_;
            var d = this;
            var elements = d.subelements(tagFilter);
            return _buildComponentsFromElements_(elements, null);
          };
          HTMLDocument.prototype.buildComponents = Element.prototype.buildComponents;
          HTMLElement.prototype.buildComponents = Element.prototype.buildComponents;
          var _ComponentWidget_ = /* @__PURE__ */ __name(class extends HTMLElement {
            constructor() {
              super(...arguments);
              const componentWidget = this;
              const componentName = componentWidget.nodeName.toLowerCase();
              const componentBody = _DOMCreateElement("quick-component");
              const __enabled__atributes__ = componentWidget.getAttributeNames();
              componentBody.setAttribute("name", componentName);
              if (!componentWidget.hasAttribute("shadowed")) {
                componentBody.setAttribute("shadowed", "true");
              }
              __enabled__atributes__.map(function(attributeName) {
                if (componentWidget.hasAttribute(attributeName)) {
                  componentBody.setAttribute(attributeName, componentWidget.getAttribute(attributeName));
                  componentWidget.removeAttribute(attributeName);
                }
              });
              var data_attributenames = componentWidget.getAttributeNames().filter(function(a) {
                return a.startsWith("data-");
              }).map(function(a) {
                return a.split("-")[1];
              });
              data_attributenames.map(function(_attribute_name_) {
                componentBody.setAttribute("data-" + _attribute_name_, componentWidget.getAttribute("data-" + _attribute_name_));
                componentWidget.removeAttribute("data-" + _attribute_name_);
              });
              [...componentWidget.children].map(function(element) {
                componentBody.appendChild(element.cloneNode(true));
                element.remove();
              });
              componentWidget.append(componentBody);
            }
          }, "_ComponentWidget_");
          Export(_ComponentWidget_);
          var RegisterWidget = /* @__PURE__ */ __name(function(widgetName) {
            customElements.define(widgetName, class extends _ComponentWidget_ {
            });
          }, "RegisterWidget");
          var RegisterWidgets2 = /* @__PURE__ */ __name(function() {
            var widgetList = [...arguments];
            widgetList.filter(function(widgetName) {
              return typeof widgetName === "string";
            }).map(function(widgetName) {
              RegisterWidget(widgetName);
            });
          }, "RegisterWidgets");
          _protected_code_(RegisterWidget);
          _protected_code_(RegisterWidgets2);
          Export(RegisterWidget);
          Export(RegisterWidgets2);
        } else {
        }
        if (!isBrowser) {
          Package2("com.qcobjects.api", [
            /* @__PURE__ */ __name(class BackendMicroservice extends ClassFactory("InheritClass") {
              constructor({
                domain = _domain_,
                basePath = _basePath_,
                body = null,
                stream = null,
                request = null
              }) {
                super(...arguments);
                logger.debug("Initializing BackendMicroservice...");
                let microservice = this;
                if (typeof this.body === "undefined") {
                  this.body = null;
                }
                if (typeof body !== "undefined") {
                  this.body = body;
                }
                this.cors();
                microservice.stream = stream;
                stream.on("data", (data) => {
                  var requestMethod2 = request.method.toLowerCase();
                  var supportedMethods2 = {
                    "post": microservice.post
                  };
                  if (Object.hasOwnProperty.call(supportedMethods2, requestMethod2)) {
                    supportedMethods2[requestMethod2].call(microservice, data);
                  }
                });
                var requestMethod = request.method.toLowerCase();
                var supportedMethods = {
                  "get": microservice.get,
                  "head": microservice.head,
                  "put": microservice.put,
                  "delete": microservice.delete,
                  "connect": microservice.connect,
                  "options": microservice.options,
                  "trace": microservice.trace,
                  "patch": microservice.patch
                };
                if (Object.hasOwnProperty.call(supportedMethods, requestMethod)) {
                  supportedMethods[requestMethod].call(microservice);
                }
              }
              cors() {
                if (this.route.cors) {
                  logger.debug("Validating CORS...");
                  let {
                    allow_origins,
                    allow_credentials,
                    allow_methods,
                    allow_headers
                  } = this.route.cors;
                  var microservice = this;
                  if (typeof microservice.headers !== "object") {
                    microservice.headers = {};
                  }
                  if (typeof microservice.route.responseHeaders !== "object") {
                    microservice.route.responseHeaders = {};
                  }
                  if (typeof allow_origins !== "undefined") {
                    logger.debug("CORS: allow_origins available. Validating origins...");
                    if (allow_origins === "*" || typeof microservice.request.headers.origin === "undefined" || [...allow_origins].indexOf(microservice.request.headers.origin) !== -1) {
                      logger.debug("CORS: Adding header Access-Control-Allow-Origin=*");
                      microservice.route.responseHeaders["Access-Control-Allow-Origin"] = "*";
                    } else {
                      logger.debug("CORS: Origin is not allowed: " + microservice.request.headers.origin);
                      logger.debug("CORS: Forcing to finish the response...");
                      this.body = {};
                      try {
                        this.done();
                      } catch (e) {
                        logger.debug(`It was not possible to finish the call to the microservice: ${e}`);
                      }
                    }
                  } else {
                    logger.debug("CORS: no allow_origins available. Allowing all origins...");
                    logger.debug("CORS: Adding header Access-Control-Allow-Origin=*");
                    microservice.route.responseHeaders["Access-Control-Allow-Origin"] = "*";
                  }
                  if (typeof allow_credentials !== "undefined") {
                    logger.debug(`CORS: allow_credentials present. Allowing ${allow_credentials}...`);
                    microservice.route.responseHeaders["Access-Control-Allow-Credentials"] = allow_credentials.toString();
                  } else {
                    logger.debug("CORS: No allow_credentials present. Allowing all credentials.");
                    microservice.route.responseHeaders["Access-Control-Allow-Credentials"] = "true";
                  }
                  if (typeof allow_methods !== "undefined") {
                    logger.debug(`CORS: allow_methods present. Allowing ${allow_methods}...`);
                    microservice.route.responseHeaders["Access-Control-Allow-Methods"] = [...allow_methods].join(",");
                  } else {
                    logger.debug("CORS: No allow_methods present. Allowing only GET, OPTIONS and POST");
                    microservice.route.responseHeaders["Access-Control-Allow-Methods"] = "GET, OPTIONS, POST";
                  }
                  if (typeof allow_headers !== "undefined") {
                    logger.debug(`CORS: allow_headers present. Allowing ${allow_headers}...`);
                    microservice.route.responseHeaders["Access-Control-Allow-Headers"] = [...allow_headers].join(",");
                  } else {
                    logger.debug(`CORS: No allow_headers present. Allowing all headers...`);
                    microservice.route.responseHeaders["Access-Control-Allow-Headers"] = "*";
                  }
                } else {
                  logger.debug("No CORS validation available. You can specify cors in CONFIG.backend.routes[].cors");
                }
              }
              head(formData) {
                this.done();
              }
              get(formData) {
                logger.debug(`[BackendMicroservice.get] Data received: ${_DataStringify(formData)}`);
                this.done();
              }
              post(formData) {
                this.done();
              }
              put(formData) {
                this.done();
              }
              delete(formData) {
                this.done();
              }
              connect(formData) {
                this.done();
              }
              options(formData) {
                this.done();
              }
              trace(formData) {
                this.done();
              }
              patch(formData) {
                this.done();
              }
              finishWithBody(stream) {
                try {
                  logger.debug("[BackendMicroservice.finishWithBody] Ending the stream...");
                  logger.debug(`[BackendMicroservice.finishWithBody] type of body is: ${typeof this.body}`);
                  if (typeof this.body !== "string") {
                    this.body = _DataStringify(this.body);
                  }
                  logger.debug(`[BackendMicroservice.finishWithBody] 
 body: ${this.body} `);
                  stream.write(this.body);
                  stream.end();
                  logger.debug(`[BackendMicroservice.finishWithBody] Stream ended.`);
                } catch (e) {
                  logger.debug(`[BackendMicroservice.finishWithBody] Something went wrong ending the stream: ${e}`);
                }
              }
              done() {
                logger.debug(`[BackendMicroservice.done] Finalizing the response...`);
                var microservice = this;
                var stream = microservice.stream;
                try {
                  logger.debug(`[BackendMicroservice.done] Sending response headers...`);
                  if (microservice.route.responseHeaders) {
                    logger.debug(`[BackendMicroservice.done] Response headers present: ${Object.keys(microservice.route.responseHeaders)}`);
                    stream.respond(microservice.route.responseHeaders);
                  } else {
                    throw Error(`[BackendMicroservice.done] No headers present.`);
                  }
                } catch (e) {
                  logger.debug(`[BackendMicroservice.done] Something went wrong sending response headers: ${e}`);
                }
                if (microservice.body !== null) {
                  try {
                    logger.debug(`[BackendMicroservice.done] A body of message is present. Finalizing the response...`);
                    microservice.finishWithBody.call(microservice, stream);
                  } catch (e) {
                    logger.debug(`[BackendMicroservice.done] Something went wrong finalizing the response: ${e}`);
                  }
                } else {
                  logger.debug("[BackendMicroservice.done] No body present. Ending stream...");
                  stream.end();
                }
              }
            }, "BackendMicroservice")
          ]);
        }
        Class("SourceJS", Object, {
          domain: _domain_,
          basePath: _basePath_,
          body: _DOMCreateElement("script"),
          type: "text/javascript",
          containerTag: "body",
          url: "",
          data: {},
          async: false,
          external: false,
          set(name, value) {
            this[name] = value;
          },
          get(name) {
            return this[name];
          },
          status: false,
          done() {
          },
          fail() {
          },
          rebuild() {
            var context = this;
            try {
              document.getElementsByTagName(context.containerTag)[0].appendChild(
                function(s, url, context2) {
                  s.type = context2.type;
                  s.src = url;
                  s.crossOrigin = Object.hasOwnProperty.call(context2, "crossOrigin") ? context2.crossOrigin : "anonymous";
                  s.async = context2.async;
                  s.onreadystatechange = function() {
                    if (this.readyState === "complete") {
                      context2.done.call(context2);
                    }
                  };
                  s.onload = function(e) {
                    context2.status = true;
                    context2.done.call(context2, e);
                  };
                  s.onerror = function(e) {
                    context2.status = false;
                    context2.fail.call(context2, e);
                  };
                  context2.body = s;
                  return s;
                }.call(
                  this,
                  _DOMCreateElement("script"),
                  this.external ? this.url : this.basePath + this.url,
                  context
                )
              );
            } catch (e) {
              context.status = false;
              context.fail.call(context, e);
            }
          },
          Cast(o) {
            return _Cast(this, o);
          },
          _new_(properties) {
            this.__new__(properties);
            this.rebuild();
          }
        });
        Class("SourceCSS", Object, {
          domain: _domain_,
          basePath: _basePath_,
          body: _DOMCreateElement("link"),
          url: "",
          data: {},
          async: false,
          external: false,
          set(name, value) {
            this[name] = value;
          },
          get(name) {
            return this[name];
          },
          done() {
          },
          rebuild() {
            var context = this;
            if (isBrowser) {
              window.document.getElementsByTagName("head")[0].appendChild(
                function(s, url, context2) {
                  s.type = "text/css";
                  s.rel = "stylesheet";
                  s.href = url;
                  s.crossOrigin = "anonymous";
                  s.onreadystatechange = function() {
                    if (this.readyState === "complete") {
                      context2.done.call(context2);
                    }
                  };
                  s.onload = context2.done;
                  context2.body = s;
                  return s;
                }.call(
                  this,
                  _DOMCreateElement("link"),
                  this.external ? this.url : this.basePath + this.url,
                  context
                )
              );
            }
          },
          Cast(o) {
            return _Cast(this, o);
          },
          _new_(properties) {
            this.__new__(properties);
            this.rebuild();
          }
        });
        var __to_number = /* @__PURE__ */ __name(function(value) {
          return isNaN(value) ? new Number(0) : new Number(value);
        }, "__to_number");
        Array.prototype.unique = function() {
          return this.filter(function(value, index, self2) {
            return self2.indexOf(value) === index;
          });
        };
        Array.unique = function(a) {
          return a.unique();
        };
        _protected_code_(Array.unique);
        _protected_code_(Array.prototype.unique);
        Array.prototype.table = function() {
          console.table(this);
        };
        Array.table = function(a) {
          return a.table();
        };
        _protected_code_(Array.table);
        _protected_code_(Array.prototype.table);
        Array.prototype.sum = function() {
          return this.reduce(function(prev, current) {
            return __to_number(prev) + __to_number(current);
          }, 0);
        };
        Array.sum = function(a) {
          return a.sum();
        };
        _protected_code_(Array.sum);
        _protected_code_(Array.prototype.sum);
        Array.prototype.avg = function() {
          return this.length < 1 ? 0 : this.reduce(function(prev, current) {
            return (__to_number(prev) + __to_number(current)) / 2;
          });
        };
        Array.avg = function(a) {
          return a.avg();
        };
        _protected_code_(Array.avg);
        _protected_code_(Array.prototype.avg);
        Array.prototype.min = function() {
          return this.reduce(function(prev, current) {
            return __to_number(prev) <= __to_number(current) ? prev : current;
          }, Infinity);
        };
        Array.min = function(a) {
          return a.min();
        };
        _protected_code_(Array.min);
        _protected_code_(Array.prototype.min);
        Array.prototype.max = function() {
          return this.reduce(function(prev, current) {
            return __to_number(prev) >= __to_number(current) ? prev : current;
          }, 0);
        };
        Array.max = function(a) {
          return a.max();
        };
        _protected_code_(Array.max);
        _protected_code_(Array.prototype.max);
        Array.prototype.sortBy = function(propName, sortAsc = true) {
          var sort_function = sortAsc ? function(prev, current) {
            return current[propName] < prev[propName] ? 1 : -1;
          } : function(prev, current) {
            return current[propName] > prev[propName] ? 1 : -1;
          };
          return this.sort(sort_function);
        };
        Array.sortBy = function(a, propName, sortAsc = true) {
          return a.sortBy(propName, sortAsc);
        };
        _protected_code_(Array.sortBy);
        _protected_code_(Array.prototype.sortBy);
        Array.matrix = function(_length, _fillValue = 0) {
          var x_func = /* @__PURE__ */ __name(function(x) {
            return _fillValue;
          }, "x_func");
          return Array.from({
            length: _length
          }, x_func);
        };
        _protected_code_(Array.matrix);
        Array.matrix2d = function(_length, _fillValue = 0) {
          var y_func = /* @__PURE__ */ __name(function(y) {
            return _fillValue;
          }, "y_func");
          var x_func = /* @__PURE__ */ __name(function(x) {
            return Array.from({
              length: _length
            }, y_func);
          }, "x_func");
          return Array.from({
            length: _length
          }, x_func);
        };
        _protected_code_(Array.matrix2d);
        Array.matrix3d = function(_length, _fillValue = 0) {
          var y_func = /* @__PURE__ */ __name(function(y) {
            return Array.from({
              length: _length
            }, function() {
              return _fillValue;
            });
          }, "y_func");
          var x_func = /* @__PURE__ */ __name(function(x) {
            return Array.from({
              length: _length
            }, y_func);
          }, "x_func");
          return Array.from({
            length: _length
          }, x_func);
        };
        _protected_code_(Array.matrix3d);
        _top.range = function(start, stop = 0, step = 1) {
          if (stop === 0 || typeof stop === "undefined") {
            stop = start;
            start = 0;
          }
          return Array.from({
            length: (stop - start) / step + 1
          }, function(_, i) {
            return start + i * step;
          });
        };
        _protected_code_(_top.range);
        String.prototype.list = function() {
          var __instance = this;
          return _top.range(0, __instance.length - 1).map(function(i) {
            return __instance[i];
          });
        };
        _protected_code_(String.prototype.list);
        _top.getDocumentLayout = function() {
          var h = /* @__PURE__ */ __name((w, h2) => {
            return w > h2 ? "landscape" : null;
          }, "h");
          var v = /* @__PURE__ */ __name((w, h2) => {
            return h2 > w ? "portrait" : null;
          }, "v");
          var square = /* @__PURE__ */ __name((w, h2) => {
            return w === h2 ? "square" : null;
          }, "square");
          return [
            h(document.documentElement.clientWidth, document.documentElement.clientHeight),
            v(document.documentElement.clientWidth, document.documentElement.clientHeight),
            square(document.documentElement.clientWidth, document.documentElement.clientHeight)
          ].filter((e) => e !== null).pop();
        };
        Class("ArrayList", Array, []);
        ClassFactory("ArrayList").matrix = Array.matrix;
        ClassFactory("ArrayList").matrix2d = Array.matrix2d;
        ClassFactory("ArrayList").matrix3d = Array.matrix3d;
        _protected_code_(ClassFactory("ArrayList").matrix);
        _protected_code_(ClassFactory("ArrayList").matrix2d);
        _protected_code_(ClassFactory("ArrayList").matrix3d);
        Class("ArrayCollection", Object, {
          source: New(ClassFactory("ArrayList"), []),
          changed(prop, value) {
            logger.debug("VALUE CHANGED");
            logger.debug(prop);
            logger.debug(value);
          },
          push(value) {
            var self2 = this;
            logger.debug("VALUE ADDED");
            logger.debug(value);
            self2.source.push(value);
          },
          pop(value) {
            var self2 = this;
            logger.debug("VALUE POPPED");
            logger.debug(value);
            self2.source.pop(value);
          },
          _new_(source) {
            var self2 = this;
            var _index = 0;
            self2.source = New(ClassFactory("ArrayList"), source);
            for (var _k in self2.source) {
              if (!isNaN(_k)) {
                logger.debug("binding " + _k.toString());
                (function(_pname) {
                  Object.defineProperty(self2, _pname, {
                    set(value) {
                      logger.debug("setting " + _pname + "=" + value);
                      self2.source[_pname] = value;
                      self2.changed(_pname, value);
                    },
                    get() {
                      return self2.source[_pname];
                    }
                  });
                })(_k);
                _index++;
              }
            }
            self2.source.length = _index;
            Object.defineProperty(self2, "length", {
              get() {
                return self2.source.length;
              }
            });
          }
        });
        Package2("com.qcobjects.effects.base", [
          /* @__PURE__ */ __name(class Effect extends ClassFactory("InheritClass") {
            constructor() {
              super(...arguments);
              __publicField(this, "duration", 1e3);
            }
            animate({
              timing,
              draw,
              duration
            }) {
              let start = performance.now();
              requestAnimationFrame(/* @__PURE__ */ __name(function animate(time) {
                let timeFraction = (time - start) / duration;
                if (timeFraction > 1)
                  timeFraction = 1;
                let progress = timing(timeFraction);
                draw(Math.round(progress * 100));
                if (timeFraction < 1) {
                  requestAnimationFrame(animate);
                } else {
                  if (typeof this !== "undefined" && this !== null && Object.hasOwnProperty.call(this, "done") && (typeof this.done).toLowerCase() === "function") {
                    this.done.call(this);
                  }
                }
              }, "animate"));
            }
          }, "Effect")
        ]);
        Package2("com.qcobjects.effects.transitions.base", [
          /* @__PURE__ */ __name(class TransitionEffect extends ClassFactory("Effect") {
            constructor() {
              super(...arguments);
              __publicField(this, "duration", 385);
              __publicField(this, "defaultParams", {
                alphaFrom: 0,
                alphaTo: 1,
                angleFrom: 180,
                angleTo: 0,
                radiusFrom: 0,
                radiusTo: 30,
                scaleFrom: 0,
                scaleTo: 1
              });
              __publicField(this, "fitToHeight", false);
              __publicField(this, "fitToWidth", false);
              __publicField(this, "effects", []);
              logger.info("DECLARING TransitionEffect  ");
              this.component.defaultParams = this.defaultParams;
            }
            apply({
              alphaFrom,
              alphaTo,
              angleFrom,
              angleTo,
              radiusFrom,
              radiusTo,
              scaleFrom,
              scaleTo
            }) {
              var _transition_ = this;
              logger.info("EXECUTING TransitionEffect  ");
              var componentRoot = _transition_.component.shadowed ? _transition_.component.shadowRoot.host : _transition_.component.body;
              if (_transition_.fitToHeight) {
                componentRoot.height = typeof componentRoot.offsetParent === "object" && componentRoot.offsetParent !== null ? componentRoot.offsetParent.scrollHeight : componentRoot.getBoundingClientRect().height;
              }
              if (_transition_.fitToWidth) {
                componentRoot.width = typeof componentRoot.offsetParent === "object" && componentRoot.offsetParent !== null ? componentRoot.offsetParent.scrollWidth : componentRoot.getBoundingClientRect().width;
              }
              componentRoot.style.display = "block";
              _transition_.effects.map(function(effectClassName, eff) {
                var __effectClass__ = ClassFactory(effectClassName);
                var effectObj = new __effectClass__({});
                var effectClassMethod = effectObj.apply;
                var args = [componentRoot].concat(Object.values({
                  alphaFrom,
                  alphaTo,
                  angleFrom,
                  angleTo,
                  radiusFrom,
                  radiusTo,
                  scaleFrom,
                  scaleTo
                }));
                effectClassMethod.apply(_transition_, args);
              });
            }
          }, "TransitionEffect")
        ]);
        Package2("com.qcobjects.timing", [
          /* @__PURE__ */ __name(class Timer extends ClassFactory("InheritClass") {
            constructor() {
              super(...arguments);
              __publicField(this, "duration", 1e3);
              __publicField(this, "alive", true);
            }
            thread({
              timing,
              intervalInterceptor,
              duration
            }) {
              var timer = this;
              let start = performance.now();
              requestAnimationFrame(/* @__PURE__ */ __name(function thread(time) {
                let elapsed = time - start;
                let timeFraction = elapsed / duration;
                if (timeFraction > 1)
                  timeFraction = 1;
                let progress = timing(timeFraction, elapsed);
                intervalInterceptor(Math.round(progress * 100));
                if ((timeFraction < 1 || duration === -1) && timer.alive) {
                  requestAnimationFrame(thread);
                }
              }, "thread"));
            }
          }, "Timer")
        ]);
        Package2("com.qcobjects.tools.essentials", [
          /* @__PURE__ */ __name(class Toggle extends ClassFactory("InheritClass") {
            constructor() {
              super(...arguments);
              __publicField(this, "_toggle", false);
              __publicField(this, "_inverse", true);
              __publicField(this, "_positive", null);
              __publicField(this, "_negative", null);
              __publicField(this, "_dispatched", null);
              __publicField(this, "_args", {});
              this._new_(...arguments);
            }
            changeToggle() {
              this._toggle = this._toggle ? false : true;
            }
            _new_({
              positive,
              negative,
              args
            }) {
              this._positive = positive;
              this._negative = negative;
              this._args = args;
            }
            fire() {
              var toggle = this;
              var _promise = new Promise(function(resolve, reject) {
                if (typeof toggle._positive === "function" && typeof toggle._negative === "function") {
                  if (toggle._inverse) {
                    toggle._dispatched = toggle._toggle ? toggle._negative.bind(toggle) : toggle._positive.bind(toggle);
                  } else {
                    toggle._dispatched = toggle._toggle ? toggle._positive.bind(toggle) : toggle._negative.bind(toggle);
                  }
                  toggle._dispatched.call(toggle, toggle._args);
                  resolve.call(_promise, toggle);
                } else {
                  logger.debug("Toggle functions are not declared");
                  reject.call(_promise, toggle);
                }
              }).then(function(toggle2) {
                toggle2.changeToggle();
              }).catch(function(e) {
                logger.debug(e.toString());
              });
              return _promise;
            }
          }, "Toggle")
        ]);
        (function(_top2) {
          let mapper = /* @__PURE__ */ __name(function(componentInstance, componentName, valueName) {
            var self2 = this;
            if (typeof componentInstance === "undefined" || componentInstance === null) {
              throw Error(`mapper.${componentName}.${valueName} does not have a component instance or it is null.`);
            }
            let globalValue = _top2.global.get(valueName);
            let componentValue = componentInstance.get(valueName);
            let dataValue = componentInstance.data[valueName];
            let list = typeof dataValue !== "undefined" ? dataValue : typeof componentValue !== "undefined" ? componentValue : globalValue;
            let listItems = "";
            if (typeof list !== "undefined" && typeof list["map"] !== "undefined") {
              listItems = list.map(function(element) {
                let dataItems = [...Object.keys(element)].map((k) => ` data-${k}="${typeof element[k] !== "undefined" && element[k] !== null ? element[k].toString() : ""}"`).join("");
                return `<quick-component name="${componentName}" ${dataItems} ></quick-component>`;
              }).join("");
            } else {
              logger.debug(`${componentName}.${valueName} does not have a map property`);
            }
            return listItems;
          }, "mapper");
          Processor.setProcessor(mapper);
          let layout = /* @__PURE__ */ __name(function(componentInstance, layoutname, cssfile) {
            var layout_portrait = `
        /* CSS Document for Mobile Imports */
        @import url("${cssfile}") (orientation:portrait);
        @import url("${cssfile}") (max-width:460px);
        @import url("${cssfile}") (aspect-ratio: 9/16);
        @import url("${cssfile}") (aspect-ratio: 10/16);
        @import url("${cssfile}") (aspect-ratio: 5/8);
        @import url("${cssfile}") (aspect-ratio: 3/4);
        @import url("${cssfile}") (aspect-ratio: 2/3);
        `;
            var layout_landscape = `
        @import url("${cssfile}") (orientation:landscape) and (min-width:460px);
        @import url("${cssfile}") (aspect-ratio: 16/9) and (min-width:460px);
        @import url("${cssfile}") (aspect-ratio: 16/10) and (min-width:460px);
        @import url("${cssfile}") (aspect-ratio: 8/5) and (min-width:460px);
        @import url("${cssfile}") (aspect-ratio: 4/3) and (min-width:460px);
        @import url("${cssfile}") (aspect-ratio: 3/2) and (min-width:460px);
        `;
            var layout_code = {
              "landscape": layout_landscape,
              "portrait": layout_portrait
            };
            return Object.hasOwnProperty.call(layout_code, layoutname) ? layout_code[layoutname] : "";
          }, "layout");
          Processor.setProcessor(layout);
          let component = /* @__PURE__ */ __name(function() {
            let arg = [...arguments].slice(1).map(function(a) {
              return {
                [a.split("=")[0]]: a.split("=")[1]
              };
            }).reduce(function(k1, k2) {
              return Object.assign(k1, k2);
            });
            let attrs = [...Object.keys(arg)].map(function(a) {
              return `${a}=${arg[a]}`;
            }).join(" ");
            return `<component ${attrs}></component>`;
          }, "component");
          Processor.setProcessor(component);
          let quick_component = /* @__PURE__ */ __name(function() {
            let arg = [...arguments].slice(1).map(function(a) {
              return {
                [a.split("=")[0]]: a.split("=")[1]
              };
            }).reduce(function(k1, k2) {
              return Object.assign(k1, k2);
            });
            let attrs = [...Object.keys(arg)].map(function(a) {
              return `${a}=${arg[a]}`;
            }).join(" ");
            return `<quick-component ${attrs}></quick-component>`;
          }, "quick_component");
          Processor.setProcessor(quick_component);
          let repeat = /* @__PURE__ */ __name(function(componentInstance, length, text) {
            return _top2.range(length).map(
              function(index) {
                return text.replace("{{index}}", index.toString());
              }
            ).join("");
          }, "repeat");
          Processor.setProcessor(repeat);
        })(_top);
        Ready(function() {
          if (!_top.CONFIG.get("useSDK")) {
            _top.__start__();
          }
        });
        Export(Export);
        Export(Import2);
        Export(Package2);
        Export(Class);
        Export(New);
        Export(Tag);
        Export(Ready);
        Export(ready);
        Export(isBrowser);
        Export(_methods_);
        (function(_top2) {
          Package2("com.qcobjects", [
            /* @__PURE__ */ __name(class GlobalSettings2 extends ClassFactory("InheritClass") {
              constructor() {
                super(...arguments);
                __publicField(this, "_GLOBAL", {});
                __publicField(this, "__definition", {});
                __publicField(this, "__classType", "GlobalSettings");
                this.set = GlobalSettings2.set.bind(this);
                this.get = GlobalSettings2.get.bind(this);
                this.__start__ = GlobalSettings2.__start__.bind(this);
              }
              static set(name, value) {
                this._GLOBAL[name] = value;
              }
              static get(name, _default) {
                var _value;
                if (typeof this._GLOBAL[name] !== "undefined") {
                  _value = this._GLOBAL[name];
                } else if (typeof _default !== "undefined") {
                  _value = _default;
                }
                return _value;
              }
              static __start__() {
                var __load__serviceWorker = /* @__PURE__ */ __name(function() {
                  var _promise;
                  if (isBrowser) {
                    _promise = new Promise(function(resolve, reject) {
                      if ("serviceWorker" in navigator && typeof _top2.CONFIG.get("serviceWorkerURI") !== "undefined") {
                        _top2.CONFIG.set("serviceWorkerScope", _top2.CONFIG.get("serviceWorkerScope") ? _top2.CONFIG.get("serviceWorkerScope") : "/");
                        navigator.serviceWorker.register(_top2.CONFIG.get("serviceWorkerURI"), {
                          scope: _top2.CONFIG.get("serviceWorkerScope")
                        }).then(function(registration) {
                          logger.debug("Service Worker Registered");
                          resolve.call(_promise, registration);
                        }, function(registration) {
                          logger.debug("Error registering Service Worker");
                          reject.call(_promise, registration);
                        });
                        navigator.serviceWorker.ready.then(function(registration) {
                          logger.debug("Service Worker Ready");
                          resolve.call(_promise, registration);
                        }, function(registration) {
                          logger.debug("Error loading Service Worker");
                          reject.call(_promise, registration);
                        });
                      }
                    });
                  }
                  return _promise;
                }, "__load__serviceWorker");
                var _buildComponents = /* @__PURE__ */ __name(function() {
                  return new Promise((resolve, reject) => {
                    if (isBrowser) {
                      logger.debug("Starting to building components");
                      try {
                        _top2.componentsStack = document.buildComponents.call(document);
                      } catch (e) {
                        throw Error(`Something went wrong trying to start components tree: ${e.message}`);
                      }
                      logger.debug("Initializing the service worker");
                      __load__serviceWorker.call(_top2).catch(function(e) {
                        logger.debug(`error loading the service worker ${e}`);
                      });
                    }
                    resolve();
                  });
                }, "_buildComponents");
                logger.debug("Starting to load the config settings...");
                if (_top2.CONFIG.get("useConfigService", false)) {
                  logger.debug("Loading settings using local configuration file...");
                  _top2.global.configService = New(ClassFactory("ConfigService"));
                  _top2.global.configService.configLoaded = _buildComponents;
                  serviceLoader(_top2.global.configService);
                } else {
                  logger.debug("Starting to load the components...");
                  _buildComponents.call(this);
                }
              }
            }, "GlobalSettings")
          ]);
          Export(ClassFactory("GlobalSettings"));
          global2 = New(ClassFactory("GlobalSettings"));
          _top2 = _CastProps(global2, _top2);
          Object.defineProperty(_top2, "PackagesNameList", {
            set(val) {
              logger.debug("PackagesNameList is readonly");
              return;
            },
            get() {
              var _get_packages_names = /* @__PURE__ */ __name(function(_packages) {
                var _keys = [];
                for (var _k in _packages) {
                  if (typeof _packages[_k] !== "undefined" && typeof _packages[_k] !== "function" && Object.hasOwnProperty.call(_packages[_k], "length") && _packages[_k].length > 0) {
                    _keys.push(_k);
                    _keys = _keys.concat(_get_packages_names(_packages[_k]));
                  }
                }
                return _keys;
              }, "_get_packages_names");
              return _get_packages_names(_QC_PACKAGES);
            }
          });
          Object.defineProperty(_top2, "PackagesList", {
            set(value) {
              logger.debug("PackagesList is readonly");
              return;
            },
            get() {
              return _top2.PackagesNameList.map(function(packagename) {
                let _classesList = Package2(packagename);
                let _ret_;
                if (_classesList) {
                  _ret_ = {
                    packageName: packagename,
                    classesList: _classesList.filter(function(_packageClass) {
                      return isQCObjects_Class(_packageClass);
                    })
                  };
                }
                return _ret_;
              }).filter(function(_p) {
                return typeof _p !== "undefined";
              });
            }
          });
          Object.defineProperty(_top2, "ClassesList", {
            set(value) {
              logger.debug("ClassesList is readonly");
              return;
            },
            get() {
              var _classesList = [];
              _top2.PackagesList.map(function(_package_element) {
                _classesList = _classesList.concat(_package_element.classesList.map(
                  function(_class_element) {
                    return {
                      packageName: _package_element.packageName,
                      className: _package_element.packageName + "." + _class_element.__definition.__classType,
                      classFactory: _class_element
                    };
                  }
                ));
                return _package_element;
              });
              return _classesList;
            }
          });
          Object.defineProperty(_top2, "ClassesNameList", {
            set(value) {
              logger.debug("ClassesNameList is readonly");
              return;
            },
            get() {
              return _top2.ClassesList.map(function(_class_element) {
                return _class_element.className;
              });
            }
          });
          if (isBrowser) {
            Class("GLOBAL", _QC_CLASSES["global"]);
            Export(ClassFactory("GLOBAL"));
          }
          Export(global2);
          if (_top2.CONFIG.get("useSDK")) {
            (function(_top3) {
              var remoteImportsPath = _top3.CONFIG.get("remoteImportsPath");
              var external = !_top3.CONFIG.get("useLocalSDK") ? true : false;
              _top3.CONFIG.set("remoteImportsPath", _top3.CONFIG.get("remoteSDKPath"));
              var tryImportingSDK = false;
              var sdkName = "QCObjects-SDK";
              if (isBrowser) {
                tryImportingSDK = true;
              } else {
                var sdkPath = findPackageNodePath("qcobjects-sdk");
                if (sdkPath !== null) {
                  sdkName = "qcobjects-sdk";
                  tryImportingSDK = true;
                } else {
                  sdkName = "node_modules/qcobjects-sdk/QCObjects-SDK";
                  tryImportingSDK = true;
                }
              }
              if (tryImportingSDK) {
                logger.info("Importing SDK... " + sdkName);
                if (isNodeCommonJS && typeof __require !== "undefined") {
                  let sdk = require_public();
                } else {
                  Import2(sdkName, function() {
                    if (external) {
                      logger.debug("QCObjects-SDK.js loaded from remote location");
                    } else {
                      logger.debug("QCObjects-SDK.js loaded from local");
                    }
                    _top3.CONFIG.set("remoteImportsPath", remoteImportsPath);
                  }, external);
                }
              } else {
                logger.debug("SDK has not been imported as it is not available at the moment");
              }
            })(_top2);
          }
        })(_top);
        if (isBrowser) {
          asyncLoad(function() {
            Ready(function() {
              (function(_top2) {
                let lastKnownScrollPosition = 0;
                let ticking = false;
                let scrollHeight = Math.max(
                  document.body.scrollHeight,
                  document.documentElement.scrollHeight,
                  document.body.offsetHeight,
                  document.documentElement.offsetHeight,
                  document.body.clientHeight,
                  document.documentElement.clientHeight
                );
                let scrollWidth = Math.max(
                  document.body.scrollWidth,
                  document.documentElement.scrollWidth,
                  document.body.offsetWidth,
                  document.documentElement.offsetWidth,
                  document.body.clientWidth,
                  document.documentElement.clientWidth
                );
                function scrollDispatcher(event) {
                  var percentY = Math.round(_top2.scrollY * 100 / scrollHeight);
                  var percentX = Math.round(_top2.scrollX * 100 / scrollWidth);
                  var scrollPercentEventEvent = new CustomEvent("scrollpercent", {
                    detail: {
                      percentX,
                      percentY
                    }
                  });
                  event.target.dispatchEvent(scrollPercentEventEvent);
                  var secondaryEventName = "defaultscroll";
                  var __valid_scrolls__ = [0, 5, 10, 25, 50, 75, 90, 95, 100];
                  __valid_scrolls__.filter(function(p) {
                    return p === percentY;
                  }).map(function(pY) {
                    secondaryEventName = "percentY" + percentY.toString();
                    var secondaryCustomEvent = new CustomEvent(secondaryEventName, {
                      detail: {
                        percentX,
                        percentY
                      }
                    });
                    event.target.dispatchEvent(secondaryCustomEvent);
                  });
                }
                __name(scrollDispatcher, "scrollDispatcher");
                document.addEventListener("scroll", function(event) {
                  if (!ticking) {
                    requestAnimationFrame(function() {
                      scrollDispatcher(event);
                      ticking = false;
                    });
                    ticking = true;
                  }
                });
              })(_top);
            });
          }, null);
        }
        if (!isBrowser) {
          if (typeof _top.global !== "undefined" && Object.hasOwnProperty.call(_top.global, "_fireAsyncLoad")) {
            _top.global._fireAsyncLoad.call(this);
          }
          if (typeof _top.global !== "undefined" && Object.hasOwnProperty.call(_top.global, "onload")) {
            _top.global.onload.call(this);
          }
        }
        (function(isBrowser2) {
          var __freeze__ = /* @__PURE__ */ __name(function() {
            Object.freeze(Object.prototype);
            Object.freeze(Object);
          }, "__freeze__");
          if (isBrowser2 && _top.CONFIG.get("secureObjects", false)) {
            Ready(function() {
              __freeze__();
            });
          } else if (_top.CONFIG.get("secureObjects", false)) {
            __freeze__();
          }
        })(isBrowser);
      }
    }, "__qcobjects__")).call(null, typeof module === "object" && typeof module.exports === "object" ? module.exports = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {} : typeof global === "object" ? global : typeof window === "object" ? window : {});
  }
});

// node_modules/qcobjects/src/index.mjs
var import_QCObjects = __toESM(require_QCObjects(), 1);

// src/jsx/components/nav.jsx
var Nav2 = class extends Component {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "nav");
    __publicField(this, "tplsource", "inline");
    __publicField(this, "data", {
      options: [
        { value: "home", name: "Home" },
        { value: "features", name: "Features" },
        { value: "about", name: "About" },
        { value: "contact", name: "Contact" }
      ]
    });
    __publicField(this, "template", `
<nav>
    <ul>
        $mapper(li,options)
    </ul>
</nav>
    `);
  }
};
__name(Nav2, "Nav");
Package("com.qcobjects.components", [Nav2]);

// src/jsx/init.jsx
RegisterWidgets(
  "header-component",
  "home-component",
  "features-component",
  "about-component",
  "contact-component",
  "footer-component"
);
CONFIG.set("sourceType", "module");
CONFIG.set("componentsBasePath", "templates/components/");
CONFIG.set("tplextension", "tpl.html");
var init_default = { Nav };
export {
  init_default as default
};
//# sourceMappingURL=init.js.map
