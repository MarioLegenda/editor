'use strict';
/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.36.1(6c56744c3419458f0dd48864520b759d1a3a1ca8)
 * Released under the MIT license
 * https://github.com/microsoft/vscode/blob/main/LICENSE.txt
 *-----------------------------------------------------------*/ var _amdLoaderGlobal =
    this,
  _commonjsGlobal = typeof global == 'object' ? global : {},
  AMDLoader;
(function (l) {
  l.global = _amdLoaderGlobal;
  var E = (function () {
    function p() {
      (this._detected = !1),
        (this._isWindows = !1),
        (this._isNode = !1),
        (this._isElectronRenderer = !1),
        (this._isWebWorker = !1),
        (this._isElectronNodeIntegrationWebWorker = !1);
    }
    return (
      Object.defineProperty(p.prototype, 'isWindows', {
        get: function () {
          return this._detect(), this._isWindows;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(p.prototype, 'isNode', {
        get: function () {
          return this._detect(), this._isNode;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(p.prototype, 'isElectronRenderer', {
        get: function () {
          return this._detect(), this._isElectronRenderer;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(p.prototype, 'isWebWorker', {
        get: function () {
          return this._detect(), this._isWebWorker;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(p.prototype, 'isElectronNodeIntegrationWebWorker', {
        get: function () {
          return this._detect(), this._isElectronNodeIntegrationWebWorker;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (p.prototype._detect = function () {
        this._detected ||
          ((this._detected = !0),
          (this._isWindows = p._isWindows()),
          (this._isNode = typeof module < 'u' && !!module.exports),
          (this._isElectronRenderer =
            typeof process < 'u' &&
            typeof process.versions < 'u' &&
            typeof process.versions.electron < 'u' &&
            process.type === 'renderer'),
          (this._isWebWorker = typeof l.global.importScripts == 'function'),
          (this._isElectronNodeIntegrationWebWorker =
            this._isWebWorker &&
            typeof process < 'u' &&
            typeof process.versions < 'u' &&
            typeof process.versions.electron < 'u' &&
            process.type === 'worker'));
      }),
      (p._isWindows = function () {
        return typeof navigator < 'u' &&
          navigator.userAgent &&
          navigator.userAgent.indexOf('Windows') >= 0
          ? !0
          : typeof process < 'u'
          ? process.platform === 'win32'
          : !1;
      }),
      p
    );
  })();
  l.Environment = E;
})(AMDLoader || (AMDLoader = {}));
var AMDLoader;
(function (l) {
  var E = (function () {
    function a(n, _, u) {
      (this.type = n), (this.detail = _), (this.timestamp = u);
    }
    return a;
  })();
  l.LoaderEvent = E;
  var p = (function () {
    function a(n) {
      this._events = [new E(1, '', n)];
    }
    return (
      (a.prototype.record = function (n, _) {
        this._events.push(
          new E(n, _, l.Utilities.getHighPerformanceTimestamp()),
        );
      }),
      (a.prototype.getEvents = function () {
        return this._events;
      }),
      a
    );
  })();
  l.LoaderEventRecorder = p;
  var g = (function () {
    function a() {}
    return (
      (a.prototype.record = function (n, _) {}),
      (a.prototype.getEvents = function () {
        return [];
      }),
      (a.INSTANCE = new a()),
      a
    );
  })();
  l.NullLoaderEventRecorder = g;
})(AMDLoader || (AMDLoader = {}));
var AMDLoader;
(function (l) {
  var E = (function () {
    function p() {}
    return (
      (p.fileUriToFilePath = function (g, a) {
        if (((a = decodeURI(a).replace(/%23/g, '#')), g)) {
          if (/^file:\/\/\//.test(a)) return a.substr(8);
          if (/^file:\/\//.test(a)) return a.substr(5);
        } else if (/^file:\/\//.test(a)) return a.substr(7);
        return a;
      }),
      (p.startsWith = function (g, a) {
        return g.length >= a.length && g.substr(0, a.length) === a;
      }),
      (p.endsWith = function (g, a) {
        return g.length >= a.length && g.substr(g.length - a.length) === a;
      }),
      (p.containsQueryString = function (g) {
        return /^[^\#]*\?/gi.test(g);
      }),
      (p.isAbsolutePath = function (g) {
        return /^((http:\/\/)|(https:\/\/)|(file:\/\/)|(\/))/.test(g);
      }),
      (p.forEachProperty = function (g, a) {
        if (g) {
          var n = void 0;
          for (n in g) g.hasOwnProperty(n) && a(n, g[n]);
        }
      }),
      (p.isEmpty = function (g) {
        var a = !0;
        return (
          p.forEachProperty(g, function () {
            a = !1;
          }),
          a
        );
      }),
      (p.recursiveClone = function (g) {
        if (
          !g ||
          typeof g != 'object' ||
          g instanceof RegExp ||
          (!Array.isArray(g) && Object.getPrototypeOf(g) !== Object.prototype)
        )
          return g;
        var a = Array.isArray(g) ? [] : {};
        return (
          p.forEachProperty(g, function (n, _) {
            _ && typeof _ == 'object'
              ? (a[n] = p.recursiveClone(_))
              : (a[n] = _);
          }),
          a
        );
      }),
      (p.generateAnonymousModule = function () {
        return '===anonymous' + p.NEXT_ANONYMOUS_ID++ + '===';
      }),
      (p.isAnonymousModule = function (g) {
        return p.startsWith(g, '===anonymous');
      }),
      (p.getHighPerformanceTimestamp = function () {
        return (
          this.PERFORMANCE_NOW_PROBED ||
            ((this.PERFORMANCE_NOW_PROBED = !0),
            (this.HAS_PERFORMANCE_NOW =
              l.global.performance &&
              typeof l.global.performance.now == 'function')),
          this.HAS_PERFORMANCE_NOW ? l.global.performance.now() : Date.now()
        );
      }),
      (p.NEXT_ANONYMOUS_ID = 1),
      (p.PERFORMANCE_NOW_PROBED = !1),
      (p.HAS_PERFORMANCE_NOW = !1),
      p
    );
  })();
  l.Utilities = E;
})(AMDLoader || (AMDLoader = {}));
var AMDLoader;
(function (l) {
  function E(a) {
    if (a instanceof Error) return a;
    var n = new Error(a.message || String(a) || 'Unknown Error');
    return a.stack && (n.stack = a.stack), n;
  }
  l.ensureError = E;
  var p = (function () {
    function a() {}
    return (
      (a.validateConfigurationOptions = function (n) {
        function _(e) {
          if (e.phase === 'loading') {
            console.error('Loading "' + e.moduleId + '" failed'),
              console.error(e),
              console.error('Here are the modules that depend on it:'),
              console.error(e.neededBy);
            return;
          }
          if (e.phase === 'factory') {
            console.error(
              'The factory function of "' +
                e.moduleId +
                '" has thrown an exception',
            ),
              console.error(e),
              console.error('Here are the modules that depend on it:'),
              console.error(e.neededBy);
            return;
          }
        }
        if (
          ((n = n || {}),
          typeof n.baseUrl != 'string' && (n.baseUrl = ''),
          typeof n.isBuild != 'boolean' && (n.isBuild = !1),
          typeof n.paths != 'object' && (n.paths = {}),
          typeof n.config != 'object' && (n.config = {}),
          typeof n.catchError > 'u' && (n.catchError = !1),
          typeof n.recordStats > 'u' && (n.recordStats = !1),
          typeof n.urlArgs != 'string' && (n.urlArgs = ''),
          typeof n.onError != 'function' && (n.onError = _),
          Array.isArray(n.ignoreDuplicateModules) ||
            (n.ignoreDuplicateModules = []),
          n.baseUrl.length > 0 &&
            (l.Utilities.endsWith(n.baseUrl, '/') || (n.baseUrl += '/')),
          typeof n.cspNonce != 'string' && (n.cspNonce = ''),
          typeof n.preferScriptTags > 'u' && (n.preferScriptTags = !1),
          n.nodeCachedData &&
            typeof n.nodeCachedData == 'object' &&
            (typeof n.nodeCachedData.seed != 'string' &&
              (n.nodeCachedData.seed = 'seed'),
            (typeof n.nodeCachedData.writeDelay != 'number' ||
              n.nodeCachedData.writeDelay < 0) &&
              (n.nodeCachedData.writeDelay = 1e3 * 7),
            !n.nodeCachedData.path || typeof n.nodeCachedData.path != 'string'))
        ) {
          var u = E(
            new Error("INVALID cached data configuration, 'path' MUST be set"),
          );
          (u.phase = 'configuration'),
            n.onError(u),
            (n.nodeCachedData = void 0);
        }
        return n;
      }),
      (a.mergeConfigurationOptions = function (n, _) {
        n === void 0 && (n = null), _ === void 0 && (_ = null);
        var u = l.Utilities.recursiveClone(_ || {});
        return (
          l.Utilities.forEachProperty(n, function (e, t) {
            e === 'ignoreDuplicateModules' &&
            typeof u.ignoreDuplicateModules < 'u'
              ? (u.ignoreDuplicateModules = u.ignoreDuplicateModules.concat(t))
              : e === 'paths' && typeof u.paths < 'u'
              ? l.Utilities.forEachProperty(t, function (r, o) {
                  return (u.paths[r] = o);
                })
              : e === 'config' && typeof u.config < 'u'
              ? l.Utilities.forEachProperty(t, function (r, o) {
                  return (u.config[r] = o);
                })
              : (u[e] = l.Utilities.recursiveClone(t));
          }),
          a.validateConfigurationOptions(u)
        );
      }),
      a
    );
  })();
  l.ConfigurationOptionsUtil = p;
  var g = (function () {
    function a(n, _) {
      if (
        ((this._env = n),
        (this.options = p.mergeConfigurationOptions(_)),
        this._createIgnoreDuplicateModulesMap(),
        this._createSortedPathsRules(),
        this.options.baseUrl === '' &&
          this.options.nodeRequire &&
          this.options.nodeRequire.main &&
          this.options.nodeRequire.main.filename &&
          this._env.isNode)
      ) {
        var u = this.options.nodeRequire.main.filename,
          e = Math.max(u.lastIndexOf('/'), u.lastIndexOf('\\'));
        this.options.baseUrl = u.substring(0, e + 1);
      }
    }
    return (
      (a.prototype._createIgnoreDuplicateModulesMap = function () {
        this.ignoreDuplicateModulesMap = {};
        for (var n = 0; n < this.options.ignoreDuplicateModules.length; n++)
          this.ignoreDuplicateModulesMap[
            this.options.ignoreDuplicateModules[n]
          ] = !0;
      }),
      (a.prototype._createSortedPathsRules = function () {
        var n = this;
        (this.sortedPathsRules = []),
          l.Utilities.forEachProperty(this.options.paths, function (_, u) {
            Array.isArray(u)
              ? n.sortedPathsRules.push({ from: _, to: u })
              : n.sortedPathsRules.push({ from: _, to: [u] });
          }),
          this.sortedPathsRules.sort(function (_, u) {
            return u.from.length - _.from.length;
          });
      }),
      (a.prototype.cloneAndMerge = function (n) {
        return new a(this._env, p.mergeConfigurationOptions(n, this.options));
      }),
      (a.prototype.getOptionsLiteral = function () {
        return this.options;
      }),
      (a.prototype._applyPaths = function (n) {
        for (var _, u = 0, e = this.sortedPathsRules.length; u < e; u++)
          if (
            ((_ = this.sortedPathsRules[u]), l.Utilities.startsWith(n, _.from))
          ) {
            for (var t = [], r = 0, o = _.to.length; r < o; r++)
              t.push(_.to[r] + n.substr(_.from.length));
            return t;
          }
        return [n];
      }),
      (a.prototype._addUrlArgsToUrl = function (n) {
        return l.Utilities.containsQueryString(n)
          ? n + '&' + this.options.urlArgs
          : n + '?' + this.options.urlArgs;
      }),
      (a.prototype._addUrlArgsIfNecessaryToUrl = function (n) {
        return this.options.urlArgs ? this._addUrlArgsToUrl(n) : n;
      }),
      (a.prototype._addUrlArgsIfNecessaryToUrls = function (n) {
        if (this.options.urlArgs)
          for (var _ = 0, u = n.length; _ < u; _++)
            n[_] = this._addUrlArgsToUrl(n[_]);
        return n;
      }),
      (a.prototype.moduleIdToPaths = function (n) {
        if (this._env.isNode) {
          var _ =
            this.options.amdModulesPattern instanceof RegExp &&
            !this.options.amdModulesPattern.test(n);
          if (_) return this.isBuild() ? ['empty:'] : ['node|' + n];
        }
        var u = n,
          e;
        if (!l.Utilities.endsWith(u, '.js') && !l.Utilities.isAbsolutePath(u)) {
          e = this._applyPaths(u);
          for (var t = 0, r = e.length; t < r; t++)
            (this.isBuild() && e[t] === 'empty:') ||
              (l.Utilities.isAbsolutePath(e[t]) ||
                (e[t] = this.options.baseUrl + e[t]),
              !l.Utilities.endsWith(e[t], '.js') &&
                !l.Utilities.containsQueryString(e[t]) &&
                (e[t] = e[t] + '.js'));
        } else
          !l.Utilities.endsWith(u, '.js') &&
            !l.Utilities.containsQueryString(u) &&
            (u = u + '.js'),
            (e = [u]);
        return this._addUrlArgsIfNecessaryToUrls(e);
      }),
      (a.prototype.requireToUrl = function (n) {
        var _ = n;
        return (
          l.Utilities.isAbsolutePath(_) ||
            ((_ = this._applyPaths(_)[0]),
            l.Utilities.isAbsolutePath(_) || (_ = this.options.baseUrl + _)),
          this._addUrlArgsIfNecessaryToUrl(_)
        );
      }),
      (a.prototype.isBuild = function () {
        return this.options.isBuild;
      }),
      (a.prototype.shouldInvokeFactory = function (n) {
        return !!(
          !this.options.isBuild ||
          l.Utilities.isAnonymousModule(n) ||
          (this.options.buildForceInvokeFactory &&
            this.options.buildForceInvokeFactory[n])
        );
      }),
      (a.prototype.isDuplicateMessageIgnoredFor = function (n) {
        return this.ignoreDuplicateModulesMap.hasOwnProperty(n);
      }),
      (a.prototype.getConfigForModule = function (n) {
        if (this.options.config) return this.options.config[n];
      }),
      (a.prototype.shouldCatchError = function () {
        return this.options.catchError;
      }),
      (a.prototype.shouldRecordStats = function () {
        return this.options.recordStats;
      }),
      (a.prototype.onError = function (n) {
        this.options.onError(n);
      }),
      a
    );
  })();
  l.Configuration = g;
})(AMDLoader || (AMDLoader = {}));
var AMDLoader;
(function (l) {
  var E = (function () {
      function e(t) {
        (this._env = t), (this._scriptLoader = null), (this._callbackMap = {});
      }
      return (
        (e.prototype.load = function (t, r, o, i) {
          var s = this;
          if (!this._scriptLoader)
            if (this._env.isWebWorker) this._scriptLoader = new a();
            else if (this._env.isElectronRenderer) {
              var f = t.getConfig().getOptionsLiteral().preferScriptTags;
              f
                ? (this._scriptLoader = new p())
                : (this._scriptLoader = new n(this._env));
            } else
              this._env.isNode
                ? (this._scriptLoader = new n(this._env))
                : (this._scriptLoader = new p());
          var c = { callback: o, errorback: i };
          if (this._callbackMap.hasOwnProperty(r)) {
            this._callbackMap[r].push(c);
            return;
          }
          (this._callbackMap[r] = [c]),
            this._scriptLoader.load(
              t,
              r,
              function () {
                return s.triggerCallback(r);
              },
              function (d) {
                return s.triggerErrorback(r, d);
              },
            );
        }),
        (e.prototype.triggerCallback = function (t) {
          var r = this._callbackMap[t];
          delete this._callbackMap[t];
          for (var o = 0; o < r.length; o++) r[o].callback();
        }),
        (e.prototype.triggerErrorback = function (t, r) {
          var o = this._callbackMap[t];
          delete this._callbackMap[t];
          for (var i = 0; i < o.length; i++) o[i].errorback(r);
        }),
        e
      );
    })(),
    p = (function () {
      function e() {}
      return (
        (e.prototype.attachListeners = function (t, r, o) {
          var i = function () {
              t.removeEventListener('load', s),
                t.removeEventListener('error', f);
            },
            s = function (c) {
              i(), r();
            },
            f = function (c) {
              i(), o(c);
            };
          t.addEventListener('load', s), t.addEventListener('error', f);
        }),
        (e.prototype.load = function (t, r, o, i) {
          if (/^node\|/.test(r)) {
            var s = t.getConfig().getOptionsLiteral(),
              f = _(t.getRecorder(), s.nodeRequire || l.global.nodeRequire),
              c = r.split('|'),
              d = null;
            try {
              d = f(c[1]);
            } catch (m) {
              i(m);
              return;
            }
            t.enqueueDefineAnonymousModule([], function () {
              return d;
            }),
              o();
          } else {
            var h = document.createElement('script');
            h.setAttribute('async', 'async'),
              h.setAttribute('type', 'text/javascript'),
              this.attachListeners(h, o, i);
            var y = t.getConfig().getOptionsLiteral().trustedTypesPolicy;
            y && (r = y.createScriptURL(r)), h.setAttribute('src', r);
            var v = t.getConfig().getOptionsLiteral().cspNonce;
            v && h.setAttribute('nonce', v),
              document.getElementsByTagName('head')[0].appendChild(h);
          }
        }),
        e
      );
    })();
  function g(e) {
    var t = e.getConfig().getOptionsLiteral().trustedTypesPolicy;
    try {
      var r = t ? self.eval(t.createScript('', 'true')) : new Function('true');
      return r.call(self), !0;
    } catch {
      return !1;
    }
  }
  var a = (function () {
      function e() {
        this._cachedCanUseEval = null;
      }
      return (
        (e.prototype._canUseEval = function (t) {
          return (
            this._cachedCanUseEval === null && (this._cachedCanUseEval = g(t)),
            this._cachedCanUseEval
          );
        }),
        (e.prototype.load = function (t, r, o, i) {
          if (/^node\|/.test(r)) {
            var s = t.getConfig().getOptionsLiteral(),
              f = _(t.getRecorder(), s.nodeRequire || l.global.nodeRequire),
              c = r.split('|'),
              d = null;
            try {
              d = f(c[1]);
            } catch (v) {
              i(v);
              return;
            }
            t.enqueueDefineAnonymousModule([], function () {
              return d;
            }),
              o();
          } else {
            var h = t.getConfig().getOptionsLiteral().trustedTypesPolicy,
              y =
                /^((http:)|(https:)|(file:))/.test(r) &&
                r.substring(0, self.origin.length) !== self.origin;
            if (!y && this._canUseEval(t)) {
              fetch(r)
                .then(function (v) {
                  if (v.status !== 200) throw new Error(v.statusText);
                  return v.text();
                })
                .then(function (v) {
                  v =
                    v +
                    `
//# sourceURL=` +
                    r;
                  var m = h
                    ? self.eval(h.createScript('', v))
                    : new Function(v);
                  m.call(self), o();
                })
                .then(void 0, i);
              return;
            }
            try {
              h && (r = h.createScriptURL(r)), importScripts(r), o();
            } catch (v) {
              i(v);
            }
          }
        }),
        e
      );
    })(),
    n = (function () {
      function e(t) {
        (this._env = t),
          (this._didInitialize = !1),
          (this._didPatchNodeRequire = !1);
      }
      return (
        (e.prototype._init = function (t) {
          this._didInitialize ||
            ((this._didInitialize = !0),
            (this._fs = t('fs')),
            (this._vm = t('vm')),
            (this._path = t('path')),
            (this._crypto = t('crypto')));
        }),
        (e.prototype._initNodeRequire = function (t, r) {
          var o = r.getConfig().getOptionsLiteral().nodeCachedData;
          if (!o || this._didPatchNodeRequire) return;
          this._didPatchNodeRequire = !0;
          var i = this,
            s = t('module');
          function f(c) {
            var d = c.constructor,
              h = function (v) {
                try {
                  return c.require(v);
                } finally {
                }
              };
            return (
              (h.resolve = function (v, m) {
                return d._resolveFilename(v, c, !1, m);
              }),
              (h.resolve.paths = function (v) {
                return d._resolveLookupPaths(v, c);
              }),
              (h.main = process.mainModule),
              (h.extensions = d._extensions),
              (h.cache = d._cache),
              h
            );
          }
          s.prototype._compile = function (c, d) {
            var h = s.wrap(c.replace(/^#!.*/, '')),
              y = r.getRecorder(),
              v = i._getCachedDataPath(o, d),
              m = { filename: d },
              b;
            try {
              var P = i._fs.readFileSync(v);
              (b = P.slice(0, 16)),
                (m.cachedData = P.slice(16)),
                y.record(60, v);
            } catch {
              y.record(61, v);
            }
            var C = new i._vm.Script(h, m),
              I = C.runInThisContext(m),
              U = i._path.dirname(d),
              w = f(this),
              O = [
                this.exports,
                w,
                this,
                d,
                U,
                process,
                _commonjsGlobal,
                Buffer,
              ],
              R = I.apply(this.exports, O);
            return (
              i._handleCachedData(C, h, v, !m.cachedData, r),
              i._verifyCachedData(C, h, v, b, r),
              R
            );
          };
        }),
        (e.prototype.load = function (t, r, o, i) {
          var s = this,
            f = t.getConfig().getOptionsLiteral(),
            c = _(t.getRecorder(), f.nodeRequire || l.global.nodeRequire),
            d =
              f.nodeInstrumenter ||
              function (I) {
                return I;
              };
          this._init(c), this._initNodeRequire(c, t);
          var h = t.getRecorder();
          if (/^node\|/.test(r)) {
            var y = r.split('|'),
              v = null;
            try {
              v = c(y[1]);
            } catch (I) {
              i(I);
              return;
            }
            t.enqueueDefineAnonymousModule([], function () {
              return v;
            }),
              o();
          } else {
            r = l.Utilities.fileUriToFilePath(this._env.isWindows, r);
            var m = this._path.normalize(r),
              b = this._getElectronRendererScriptPathOrUri(m),
              P = Boolean(f.nodeCachedData),
              C = P ? this._getCachedDataPath(f.nodeCachedData, r) : void 0;
            this._readSourceAndCachedData(m, C, h, function (I, U, w, O) {
              if (I) {
                i(I);
                return;
              }
              var R;
              U.charCodeAt(0) === e._BOM
                ? (R = e._PREFIX + U.substring(1) + e._SUFFIX)
                : (R = e._PREFIX + U + e._SUFFIX),
                (R = d(R, m));
              var q = { filename: b, cachedData: w },
                N = s._createAndEvalScript(t, R, q, o, i);
              s._handleCachedData(N, R, C, P && !w, t),
                s._verifyCachedData(N, R, C, O, t);
            });
          }
        }),
        (e.prototype._createAndEvalScript = function (t, r, o, i, s) {
          var f = t.getRecorder();
          f.record(31, o.filename);
          var c = new this._vm.Script(r, o),
            d = c.runInThisContext(o),
            h = t.getGlobalAMDDefineFunc(),
            y = !1,
            v = function () {
              return (y = !0), h.apply(null, arguments);
            };
          return (
            (v.amd = h.amd),
            d.call(
              l.global,
              t.getGlobalAMDRequireFunc(),
              v,
              o.filename,
              this._path.dirname(o.filename),
            ),
            f.record(32, o.filename),
            y
              ? i()
              : s(
                  new Error(
                    "Didn't receive define call in " + o.filename + '!',
                  ),
                ),
            c
          );
        }),
        (e.prototype._getElectronRendererScriptPathOrUri = function (t) {
          if (!this._env.isElectronRenderer) return t;
          var r = t.match(/^([a-z])\:(.*)/i);
          return r
            ? 'file:///' + (r[1].toUpperCase() + ':' + r[2]).replace(/\\/g, '/')
            : 'file://' + t;
        }),
        (e.prototype._getCachedDataPath = function (t, r) {
          var o = this._crypto
              .createHash('md5')
              .update(r, 'utf8')
              .update(t.seed, 'utf8')
              .update(process.arch, '')
              .digest('hex'),
            i = this._path.basename(r).replace(/\.js$/, '');
          return this._path.join(t.path, i + '-' + o + '.code');
        }),
        (e.prototype._handleCachedData = function (t, r, o, i, s) {
          var f = this;
          t.cachedDataRejected
            ? this._fs.unlink(o, function (c) {
                s.getRecorder().record(62, o),
                  f._createAndWriteCachedData(t, r, o, s),
                  c && s.getConfig().onError(c);
              })
            : i && this._createAndWriteCachedData(t, r, o, s);
        }),
        (e.prototype._createAndWriteCachedData = function (t, r, o, i) {
          var s = this,
            f = Math.ceil(
              i.getConfig().getOptionsLiteral().nodeCachedData.writeDelay *
                (1 + Math.random()),
            ),
            c = -1,
            d = 0,
            h = void 0,
            y = function () {
              setTimeout(function () {
                h ||
                  (h = s._crypto.createHash('md5').update(r, 'utf8').digest());
                var v = t.createCachedData();
                if (!(v.length === 0 || v.length === c || d >= 5)) {
                  if (v.length < c) {
                    y();
                    return;
                  }
                  (c = v.length),
                    s._fs.writeFile(o, Buffer.concat([h, v]), function (m) {
                      m && i.getConfig().onError(m),
                        i.getRecorder().record(63, o),
                        y();
                    });
                }
              }, f * Math.pow(4, d++));
            };
          y();
        }),
        (e.prototype._readSourceAndCachedData = function (t, r, o, i) {
          if (!r) this._fs.readFile(t, { encoding: 'utf8' }, i);
          else {
            var s = void 0,
              f = void 0,
              c = void 0,
              d = 2,
              h = function (y) {
                y ? i(y) : --d === 0 && i(void 0, s, f, c);
              };
            this._fs.readFile(t, { encoding: 'utf8' }, function (y, v) {
              (s = v), h(y);
            }),
              this._fs.readFile(r, function (y, v) {
                !y && v && v.length > 0
                  ? ((c = v.slice(0, 16)), (f = v.slice(16)), o.record(60, r))
                  : o.record(61, r),
                  h();
              });
          }
        }),
        (e.prototype._verifyCachedData = function (t, r, o, i, s) {
          var f = this;
          !i ||
            t.cachedDataRejected ||
            setTimeout(function () {
              var c = f._crypto.createHash('md5').update(r, 'utf8').digest();
              i.equals(c) ||
                (s
                  .getConfig()
                  .onError(
                    new Error(
                      "FAILED TO VERIFY CACHED DATA, deleting stale '" +
                        o +
                        "' now, but a RESTART IS REQUIRED",
                    ),
                  ),
                f._fs.unlink(o, function (d) {
                  d && s.getConfig().onError(d);
                }));
            }, Math.ceil(5e3 * (1 + Math.random())));
        }),
        (e._BOM = 65279),
        (e._PREFIX = '(function (require, define, __filename, __dirname) { '),
        (e._SUFFIX = `
});`),
        e
      );
    })();
  function _(e, t) {
    if (t.__$__isRecorded) return t;
    var r = function (i) {
      e.record(33, i);
      try {
        return t(i);
      } finally {
        e.record(34, i);
      }
    };
    return (r.__$__isRecorded = !0), r;
  }
  l.ensureRecordedNodeRequire = _;
  function u(e) {
    return new E(e);
  }
  l.createScriptLoader = u;
})(AMDLoader || (AMDLoader = {}));
var AMDLoader;
(function (l) {
  var E = (function () {
    function u(e) {
      var t = e.lastIndexOf('/');
      t !== -1
        ? (this.fromModulePath = e.substr(0, t + 1))
        : (this.fromModulePath = '');
    }
    return (
      (u._normalizeModuleId = function (e) {
        var t = e,
          r;
        for (r = /\/\.\//; r.test(t); ) t = t.replace(r, '/');
        for (
          t = t.replace(/^\.\//g, ''),
            r =
              /\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//;
          r.test(t);

        )
          t = t.replace(r, '/');
        return (
          (t = t.replace(
            /^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//,
            '',
          )),
          t
        );
      }),
      (u.prototype.resolveModule = function (e) {
        var t = e;
        return (
          l.Utilities.isAbsolutePath(t) ||
            ((l.Utilities.startsWith(t, './') ||
              l.Utilities.startsWith(t, '../')) &&
              (t = u._normalizeModuleId(this.fromModulePath + t))),
          t
        );
      }),
      (u.ROOT = new u('')),
      u
    );
  })();
  l.ModuleIdResolver = E;
  var p = (function () {
    function u(e, t, r, o, i, s) {
      (this.id = e),
        (this.strId = t),
        (this.dependencies = r),
        (this._callback = o),
        (this._errorback = i),
        (this.moduleIdResolver = s),
        (this.exports = {}),
        (this.error = null),
        (this.exportsPassedIn = !1),
        (this.unresolvedDependenciesCount = this.dependencies.length),
        (this._isComplete = !1);
    }
    return (
      (u._safeInvokeFunction = function (e, t) {
        try {
          return { returnedValue: e.apply(l.global, t), producedError: null };
        } catch (r) {
          return { returnedValue: null, producedError: r };
        }
      }),
      (u._invokeFactory = function (e, t, r, o) {
        return e.shouldInvokeFactory(t)
          ? e.shouldCatchError()
            ? this._safeInvokeFunction(r, o)
            : { returnedValue: r.apply(l.global, o), producedError: null }
          : { returnedValue: null, producedError: null };
      }),
      (u.prototype.complete = function (e, t, r, o) {
        this._isComplete = !0;
        var i = null;
        if (this._callback)
          if (typeof this._callback == 'function') {
            e.record(21, this.strId);
            var s = u._invokeFactory(t, this.strId, this._callback, r);
            (i = s.producedError),
              e.record(22, this.strId),
              !i &&
                typeof s.returnedValue < 'u' &&
                (!this.exportsPassedIn || l.Utilities.isEmpty(this.exports)) &&
                (this.exports = s.returnedValue);
          } else this.exports = this._callback;
        if (i) {
          var f = l.ensureError(i);
          (f.phase = 'factory'),
            (f.moduleId = this.strId),
            (f.neededBy = o(this.id)),
            (this.error = f),
            t.onError(f);
        }
        (this.dependencies = null),
          (this._callback = null),
          (this._errorback = null),
          (this.moduleIdResolver = null);
      }),
      (u.prototype.onDependencyError = function (e) {
        return (
          (this._isComplete = !0),
          (this.error = e),
          this._errorback ? (this._errorback(e), !0) : !1
        );
      }),
      (u.prototype.isComplete = function () {
        return this._isComplete;
      }),
      u
    );
  })();
  l.Module = p;
  var g = (function () {
      function u() {
        (this._nextId = 0),
          (this._strModuleIdToIntModuleId = new Map()),
          (this._intModuleIdToStrModuleId = []),
          this.getModuleId('exports'),
          this.getModuleId('module'),
          this.getModuleId('require');
      }
      return (
        (u.prototype.getMaxModuleId = function () {
          return this._nextId;
        }),
        (u.prototype.getModuleId = function (e) {
          var t = this._strModuleIdToIntModuleId.get(e);
          return (
            typeof t > 'u' &&
              ((t = this._nextId++),
              this._strModuleIdToIntModuleId.set(e, t),
              (this._intModuleIdToStrModuleId[t] = e)),
            t
          );
        }),
        (u.prototype.getStrModuleId = function (e) {
          return this._intModuleIdToStrModuleId[e];
        }),
        u
      );
    })(),
    a = (function () {
      function u(e) {
        this.id = e;
      }
      return (
        (u.EXPORTS = new u(0)), (u.MODULE = new u(1)), (u.REQUIRE = new u(2)), u
      );
    })();
  l.RegularDependency = a;
  var n = (function () {
    function u(e, t, r) {
      (this.id = e), (this.pluginId = t), (this.pluginParam = r);
    }
    return u;
  })();
  l.PluginDependency = n;
  var _ = (function () {
    function u(e, t, r, o, i) {
      i === void 0 && (i = 0),
        (this._env = e),
        (this._scriptLoader = t),
        (this._loaderAvailableTimestamp = i),
        (this._defineFunc = r),
        (this._requireFunc = o),
        (this._moduleIdProvider = new g()),
        (this._config = new l.Configuration(this._env)),
        (this._hasDependencyCycle = !1),
        (this._modules2 = []),
        (this._knownModules2 = []),
        (this._inverseDependencies2 = []),
        (this._inversePluginDependencies2 = new Map()),
        (this._currentAnonymousDefineCall = null),
        (this._recorder = null),
        (this._buildInfoPath = []),
        (this._buildInfoDefineStack = []),
        (this._buildInfoDependencies = []);
    }
    return (
      (u.prototype.reset = function () {
        return new u(
          this._env,
          this._scriptLoader,
          this._defineFunc,
          this._requireFunc,
          this._loaderAvailableTimestamp,
        );
      }),
      (u.prototype.getGlobalAMDDefineFunc = function () {
        return this._defineFunc;
      }),
      (u.prototype.getGlobalAMDRequireFunc = function () {
        return this._requireFunc;
      }),
      (u._findRelevantLocationInStack = function (e, t) {
        for (
          var r = function (m) {
              return m.replace(/\\/g, '/');
            },
            o = r(e),
            i = t.split(/\n/),
            s = 0;
          s < i.length;
          s++
        ) {
          var f = i[s].match(/(.*):(\d+):(\d+)\)?$/);
          if (f) {
            var c = f[1],
              d = f[2],
              h = f[3],
              y = Math.max(c.lastIndexOf(' ') + 1, c.lastIndexOf('(') + 1);
            if (((c = c.substr(y)), (c = r(c)), c === o)) {
              var v = { line: parseInt(d, 10), col: parseInt(h, 10) };
              return v.line === 1 && (v.col -= 53), v;
            }
          }
        }
        throw new Error('Could not correlate define call site for needle ' + e);
      }),
      (u.prototype.getBuildInfo = function () {
        if (!this._config.isBuild()) return null;
        for (var e = [], t = 0, r = 0, o = this._modules2.length; r < o; r++) {
          var i = this._modules2[r];
          if (!!i) {
            var s = this._buildInfoPath[i.id] || null,
              f = this._buildInfoDefineStack[i.id] || null,
              c = this._buildInfoDependencies[i.id];
            e[t++] = {
              id: i.strId,
              path: s,
              defineLocation:
                s && f ? u._findRelevantLocationInStack(s, f) : null,
              dependencies: c,
              shim: null,
              exports: i.exports,
            };
          }
        }
        return e;
      }),
      (u.prototype.getRecorder = function () {
        return (
          this._recorder ||
            (this._config.shouldRecordStats()
              ? (this._recorder = new l.LoaderEventRecorder(
                  this._loaderAvailableTimestamp,
                ))
              : (this._recorder = l.NullLoaderEventRecorder.INSTANCE)),
          this._recorder
        );
      }),
      (u.prototype.getLoaderEvents = function () {
        return this.getRecorder().getEvents();
      }),
      (u.prototype.enqueueDefineAnonymousModule = function (e, t) {
        if (this._currentAnonymousDefineCall !== null)
          throw new Error(
            'Can only have one anonymous define call per script file',
          );
        var r = null;
        this._config.isBuild() &&
          (r = new Error('StackLocation').stack || null),
          (this._currentAnonymousDefineCall = {
            stack: r,
            dependencies: e,
            callback: t,
          });
      }),
      (u.prototype.defineModule = function (e, t, r, o, i, s) {
        var f = this;
        s === void 0 && (s = new E(e));
        var c = this._moduleIdProvider.getModuleId(e);
        if (this._modules2[c]) {
          this._config.isDuplicateMessageIgnoredFor(e) ||
            console.warn("Duplicate definition of module '" + e + "'");
          return;
        }
        var d = new p(c, e, this._normalizeDependencies(t, s), r, o, s);
        (this._modules2[c] = d),
          this._config.isBuild() &&
            ((this._buildInfoDefineStack[c] = i),
            (this._buildInfoDependencies[c] = (d.dependencies || []).map(
              function (h) {
                return f._moduleIdProvider.getStrModuleId(h.id);
              },
            ))),
          this._resolve(d);
      }),
      (u.prototype._normalizeDependency = function (e, t) {
        if (e === 'exports') return a.EXPORTS;
        if (e === 'module') return a.MODULE;
        if (e === 'require') return a.REQUIRE;
        var r = e.indexOf('!');
        if (r >= 0) {
          var o = t.resolveModule(e.substr(0, r)),
            i = t.resolveModule(e.substr(r + 1)),
            s = this._moduleIdProvider.getModuleId(o + '!' + i),
            f = this._moduleIdProvider.getModuleId(o);
          return new n(s, f, i);
        }
        return new a(this._moduleIdProvider.getModuleId(t.resolveModule(e)));
      }),
      (u.prototype._normalizeDependencies = function (e, t) {
        for (var r = [], o = 0, i = 0, s = e.length; i < s; i++)
          r[o++] = this._normalizeDependency(e[i], t);
        return r;
      }),
      (u.prototype._relativeRequire = function (e, t, r, o) {
        if (typeof t == 'string') return this.synchronousRequire(t, e);
        this.defineModule(
          l.Utilities.generateAnonymousModule(),
          t,
          r,
          o,
          null,
          e,
        );
      }),
      (u.prototype.synchronousRequire = function (e, t) {
        t === void 0 && (t = new E(e));
        var r = this._normalizeDependency(e, t),
          o = this._modules2[r.id];
        if (!o)
          throw new Error(
            "Check dependency list! Synchronous require cannot resolve module '" +
              e +
              "'. This is the first mention of this module!",
          );
        if (!o.isComplete())
          throw new Error(
            "Check dependency list! Synchronous require cannot resolve module '" +
              e +
              "'. This module has not been resolved completely yet.",
          );
        if (o.error) throw o.error;
        return o.exports;
      }),
      (u.prototype.configure = function (e, t) {
        var r = this._config.shouldRecordStats();
        t
          ? (this._config = new l.Configuration(this._env, e))
          : (this._config = this._config.cloneAndMerge(e)),
          this._config.shouldRecordStats() && !r && (this._recorder = null);
      }),
      (u.prototype.getConfig = function () {
        return this._config;
      }),
      (u.prototype._onLoad = function (e) {
        if (this._currentAnonymousDefineCall !== null) {
          var t = this._currentAnonymousDefineCall;
          (this._currentAnonymousDefineCall = null),
            this.defineModule(
              this._moduleIdProvider.getStrModuleId(e),
              t.dependencies,
              t.callback,
              null,
              t.stack,
            );
        }
      }),
      (u.prototype._createLoadError = function (e, t) {
        var r = this,
          o = this._moduleIdProvider.getStrModuleId(e),
          i = (this._inverseDependencies2[e] || []).map(function (f) {
            return r._moduleIdProvider.getStrModuleId(f);
          }),
          s = l.ensureError(t);
        return (s.phase = 'loading'), (s.moduleId = o), (s.neededBy = i), s;
      }),
      (u.prototype._onLoadError = function (e, t) {
        var r = this._createLoadError(e, t);
        this._modules2[e] ||
          (this._modules2[e] = new p(
            e,
            this._moduleIdProvider.getStrModuleId(e),
            [],
            function () {},
            null,
            null,
          ));
        for (
          var o = [], i = 0, s = this._moduleIdProvider.getMaxModuleId();
          i < s;
          i++
        )
          o[i] = !1;
        var f = !1,
          c = [];
        for (c.push(e), o[e] = !0; c.length > 0; ) {
          var d = c.shift(),
            h = this._modules2[d];
          h && (f = h.onDependencyError(r) || f);
          var y = this._inverseDependencies2[d];
          if (y)
            for (var i = 0, s = y.length; i < s; i++) {
              var v = y[i];
              o[v] || (c.push(v), (o[v] = !0));
            }
        }
        f || this._config.onError(r);
      }),
      (u.prototype._hasDependencyPath = function (e, t) {
        var r = this._modules2[e];
        if (!r) return !1;
        for (
          var o = [], i = 0, s = this._moduleIdProvider.getMaxModuleId();
          i < s;
          i++
        )
          o[i] = !1;
        var f = [];
        for (f.push(r), o[e] = !0; f.length > 0; ) {
          var c = f.shift(),
            d = c.dependencies;
          if (d)
            for (var i = 0, s = d.length; i < s; i++) {
              var h = d[i];
              if (h.id === t) return !0;
              var y = this._modules2[h.id];
              y && !o[h.id] && ((o[h.id] = !0), f.push(y));
            }
        }
        return !1;
      }),
      (u.prototype._findCyclePath = function (e, t, r) {
        if (e === t || r === 50) return [e];
        var o = this._modules2[e];
        if (!o) return null;
        var i = o.dependencies;
        if (i)
          for (var s = 0, f = i.length; s < f; s++) {
            var c = this._findCyclePath(i[s].id, t, r + 1);
            if (c !== null) return c.push(e), c;
          }
        return null;
      }),
      (u.prototype._createRequire = function (e) {
        var t = this,
          r = function (o, i, s) {
            return t._relativeRequire(e, o, i, s);
          };
        return (
          (r.toUrl = function (o) {
            return t._config.requireToUrl(e.resolveModule(o));
          }),
          (r.getStats = function () {
            return t.getLoaderEvents();
          }),
          (r.hasDependencyCycle = function () {
            return t._hasDependencyCycle;
          }),
          (r.config = function (o, i) {
            i === void 0 && (i = !1), t.configure(o, i);
          }),
          (r.__$__nodeRequire = l.global.nodeRequire),
          r
        );
      }),
      (u.prototype._loadModule = function (e) {
        var t = this;
        if (!(this._modules2[e] || this._knownModules2[e])) {
          this._knownModules2[e] = !0;
          var r = this._moduleIdProvider.getStrModuleId(e),
            o = this._config.moduleIdToPaths(r),
            i = /^@[^\/]+\/[^\/]+$/;
          this._env.isNode &&
            (r.indexOf('/') === -1 || i.test(r)) &&
            o.push('node|' + r);
          var s = -1,
            f = function (c) {
              if ((s++, s >= o.length)) t._onLoadError(e, c);
              else {
                var d = o[s],
                  h = t.getRecorder();
                if (t._config.isBuild() && d === 'empty:') {
                  (t._buildInfoPath[e] = d),
                    t.defineModule(
                      t._moduleIdProvider.getStrModuleId(e),
                      [],
                      null,
                      null,
                      null,
                    ),
                    t._onLoad(e);
                  return;
                }
                h.record(10, d),
                  t._scriptLoader.load(
                    t,
                    d,
                    function () {
                      t._config.isBuild() && (t._buildInfoPath[e] = d),
                        h.record(11, d),
                        t._onLoad(e);
                    },
                    function (y) {
                      h.record(12, d), f(y);
                    },
                  );
              }
            };
          f(null);
        }
      }),
      (u.prototype._loadPluginDependency = function (e, t) {
        var r = this;
        if (!(this._modules2[t.id] || this._knownModules2[t.id])) {
          this._knownModules2[t.id] = !0;
          var o = function (i) {
            r.defineModule(
              r._moduleIdProvider.getStrModuleId(t.id),
              [],
              i,
              null,
              null,
            );
          };
          (o.error = function (i) {
            r._config.onError(r._createLoadError(t.id, i));
          }),
            e.load(
              t.pluginParam,
              this._createRequire(E.ROOT),
              o,
              this._config.getOptionsLiteral(),
            );
        }
      }),
      (u.prototype._resolve = function (e) {
        var t = this,
          r = e.dependencies;
        if (r)
          for (var o = 0, i = r.length; o < i; o++) {
            var s = r[o];
            if (s === a.EXPORTS) {
              (e.exportsPassedIn = !0), e.unresolvedDependenciesCount--;
              continue;
            }
            if (s === a.MODULE) {
              e.unresolvedDependenciesCount--;
              continue;
            }
            if (s === a.REQUIRE) {
              e.unresolvedDependenciesCount--;
              continue;
            }
            var f = this._modules2[s.id];
            if (f && f.isComplete()) {
              if (f.error) {
                e.onDependencyError(f.error);
                return;
              }
              e.unresolvedDependenciesCount--;
              continue;
            }
            if (this._hasDependencyPath(s.id, e.id)) {
              (this._hasDependencyCycle = !0),
                console.warn(
                  "There is a dependency cycle between '" +
                    this._moduleIdProvider.getStrModuleId(s.id) +
                    "' and '" +
                    this._moduleIdProvider.getStrModuleId(e.id) +
                    "'. The cyclic path follows:",
                );
              var c = this._findCyclePath(s.id, e.id, 0) || [];
              c.reverse(),
                c.push(s.id),
                console.warn(
                  c.map(function (y) {
                    return t._moduleIdProvider.getStrModuleId(y);
                  }).join(` => 
`),
                ),
                e.unresolvedDependenciesCount--;
              continue;
            }
            if (
              ((this._inverseDependencies2[s.id] =
                this._inverseDependencies2[s.id] || []),
              this._inverseDependencies2[s.id].push(e.id),
              s instanceof n)
            ) {
              var d = this._modules2[s.pluginId];
              if (d && d.isComplete()) {
                this._loadPluginDependency(d.exports, s);
                continue;
              }
              var h = this._inversePluginDependencies2.get(s.pluginId);
              h ||
                ((h = []), this._inversePluginDependencies2.set(s.pluginId, h)),
                h.push(s),
                this._loadModule(s.pluginId);
              continue;
            }
            this._loadModule(s.id);
          }
        e.unresolvedDependenciesCount === 0 && this._onModuleComplete(e);
      }),
      (u.prototype._onModuleComplete = function (e) {
        var t = this,
          r = this.getRecorder();
        if (!e.isComplete()) {
          var o = e.dependencies,
            i = [];
          if (o)
            for (var s = 0, f = o.length; s < f; s++) {
              var c = o[s];
              if (c === a.EXPORTS) {
                i[s] = e.exports;
                continue;
              }
              if (c === a.MODULE) {
                i[s] = {
                  id: e.strId,
                  config: function () {
                    return t._config.getConfigForModule(e.strId);
                  },
                };
                continue;
              }
              if (c === a.REQUIRE) {
                i[s] = this._createRequire(e.moduleIdResolver);
                continue;
              }
              var d = this._modules2[c.id];
              if (d) {
                i[s] = d.exports;
                continue;
              }
              i[s] = null;
            }
          var h = function (P) {
            return (t._inverseDependencies2[P] || []).map(function (C) {
              return t._moduleIdProvider.getStrModuleId(C);
            });
          };
          e.complete(r, this._config, i, h);
          var y = this._inverseDependencies2[e.id];
          if (((this._inverseDependencies2[e.id] = null), y))
            for (var s = 0, f = y.length; s < f; s++) {
              var v = y[s],
                m = this._modules2[v];
              m.unresolvedDependenciesCount--,
                m.unresolvedDependenciesCount === 0 &&
                  this._onModuleComplete(m);
            }
          var b = this._inversePluginDependencies2.get(e.id);
          if (b) {
            this._inversePluginDependencies2.delete(e.id);
            for (var s = 0, f = b.length; s < f; s++)
              this._loadPluginDependency(e.exports, b[s]);
          }
        }
      }),
      u
    );
  })();
  l.ModuleManager = _;
})(AMDLoader || (AMDLoader = {}));
var define, AMDLoader;
(function (l) {
  var E = new l.Environment(),
    p = null,
    g = function (u, e, t) {
      typeof u != 'string' && ((t = e), (e = u), (u = null)),
        (typeof e != 'object' || !Array.isArray(e)) && ((t = e), (e = null)),
        e || (e = ['require', 'exports', 'module']),
        u
          ? p.defineModule(u, e, t, null, null)
          : p.enqueueDefineAnonymousModule(e, t);
    };
  g.amd = { jQuery: !0 };
  var a = function (u, e) {
      e === void 0 && (e = !1), p.configure(u, e);
    },
    n = function () {
      if (arguments.length === 1) {
        if (arguments[0] instanceof Object && !Array.isArray(arguments[0])) {
          a(arguments[0]);
          return;
        }
        if (typeof arguments[0] == 'string')
          return p.synchronousRequire(arguments[0]);
      }
      if (
        (arguments.length === 2 || arguments.length === 3) &&
        Array.isArray(arguments[0])
      ) {
        p.defineModule(
          l.Utilities.generateAnonymousModule(),
          arguments[0],
          arguments[1],
          arguments[2],
          null,
        );
        return;
      }
      throw new Error('Unrecognized require call');
    };
  (n.config = a),
    (n.getConfig = function () {
      return p.getConfig().getOptionsLiteral();
    }),
    (n.reset = function () {
      p = p.reset();
    }),
    (n.getBuildInfo = function () {
      return p.getBuildInfo();
    }),
    (n.getStats = function () {
      return p.getLoaderEvents();
    }),
    (n.define = g);
  function _() {
    if (typeof l.global.require < 'u' || typeof require < 'u') {
      var u = l.global.require || require;
      if (typeof u == 'function' && typeof u.resolve == 'function') {
        var e = l.ensureRecordedNodeRequire(p.getRecorder(), u);
        (l.global.nodeRequire = e),
          (n.nodeRequire = e),
          (n.__$__nodeRequire = e);
      }
    }
    E.isNode && !E.isElectronRenderer && !E.isElectronNodeIntegrationWebWorker
      ? (module.exports = n)
      : (E.isElectronRenderer || (l.global.define = g), (l.global.require = n));
  }
  (l.init = _),
    (typeof l.global.define != 'function' || !l.global.define.amd) &&
      ((p = new l.ModuleManager(
        E,
        l.createScriptLoader(E),
        g,
        n,
        l.Utilities.getHighPerformanceTimestamp(),
      )),
      typeof l.global.require < 'u' &&
        typeof l.global.require != 'function' &&
        n.config(l.global.require),
      (define = function () {
        return g.apply(null, arguments);
      }),
      (define.amd = g.amd),
      typeof doNotInitLoader > 'u' && _());
})(AMDLoader || (AMDLoader = {}));

//# sourceMappingURL=../../min-maps/vs/loader.js.map
