/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.36.1(6c56744c3419458f0dd48864520b759d1a3a1ca8)
 * Released under the MIT license
 * https://github.com/microsoft/vscode/blob/main/LICENSE.txt
 *-----------------------------------------------------------*/ (function () {
  var X = [
      'require',
      'exports',
      'vs/editor/common/core/range',
      'vs/editor/common/core/position',
      'vs/base/common/strings',
      'vs/base/common/platform',
      'vs/editor/common/diff/algorithms/diffAlgorithm',
      'vs/base/common/event',
      'vs/base/common/errors',
      'vs/base/common/assert',
      'vs/base/common/lifecycle',
      'vs/base/common/objects',
      'vs/base/common/uri',
      'vs/base/common/functional',
      'vs/base/common/iterator',
      'vs/base/common/linkedList',
      'vs/base/common/diff/diff',
      'vs/base/common/types',
      'vs/base/common/uint',
      'vs/editor/common/core/characterClassifier',
      'vs/editor/common/core/wordHelper',
      'vs/editor/common/diff/linesDiffComputer',
      'vs/base/common/stopwatch',
      'vs/nls',
      'vs/base/common/arrays',
      'vs/base/common/cache',
      'vs/base/common/diff/diffChange',
      'vs/base/common/keyCodes',
      'vs/base/common/lazy',
      'vs/base/common/hash',
      'vs/base/common/codicons',
      'vs/editor/common/core/selection',
      'vs/editor/common/core/wordCharacterClassifier',
      'vs/editor/common/diff/algorithms/joinSequenceDiffs',
      'vs/editor/common/diff/algorithms/myersDiffAlgorithm',
      'vs/editor/common/diff/algorithms/utils',
      'vs/editor/common/diff/algorithms/dynamicProgrammingDiffing',
      'vs/editor/common/diff/smartLinesDiffComputer',
      'vs/editor/common/diff/standardLinesDiffComputer',
      'vs/editor/common/diff/linesDiffComputers',
      'vs/editor/common/languages/linkComputer',
      'vs/editor/common/languages/supports/inplaceReplaceSupport',
      'vs/editor/common/model',
      'vs/editor/common/model/prefixSumComputer',
      'vs/editor/common/model/mirrorTextModel',
      'vs/editor/common/model/textModelSearch',
      'vs/editor/common/services/unicodeTextModelHighlighter',
      'vs/editor/common/standalone/standaloneEnums',
      'vs/nls!vs/base/common/platform',
      'vs/base/common/process',
      'vs/base/common/path',
      'vs/base/common/cancellation',
      'vs/editor/common/tokenizationRegistry',
      'vs/editor/common/languages',
      'vs/editor/common/services/editorBaseApi',
      'vs/nls!vs/base/common/worker/simpleWorker',
      'vs/base/common/worker/simpleWorker',
      'vs/editor/common/services/editorSimpleWorker',
    ],
    Q = function (U) {
      for (var n = [], A = 0, M = U.length; A < M; A++) n[A] = X[U[A]];
      return n;
    },
    Ee = this,
    Re = typeof global == 'object' ? global : {},
    se;
  (function (U) {
    U.global = Ee;
    var n = (function () {
      function A() {
        (this._detected = !1),
          (this._isWindows = !1),
          (this._isNode = !1),
          (this._isElectronRenderer = !1),
          (this._isWebWorker = !1),
          (this._isElectronNodeIntegrationWebWorker = !1);
      }
      return (
        Object.defineProperty(A.prototype, 'isWindows', {
          get: function () {
            return this._detect(), this._isWindows;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(A.prototype, 'isNode', {
          get: function () {
            return this._detect(), this._isNode;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(A.prototype, 'isElectronRenderer', {
          get: function () {
            return this._detect(), this._isElectronRenderer;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(A.prototype, 'isWebWorker', {
          get: function () {
            return this._detect(), this._isWebWorker;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(
          A.prototype,
          'isElectronNodeIntegrationWebWorker',
          {
            get: function () {
              return this._detect(), this._isElectronNodeIntegrationWebWorker;
            },
            enumerable: !1,
            configurable: !0,
          },
        ),
        (A.prototype._detect = function () {
          this._detected ||
            ((this._detected = !0),
            (this._isWindows = A._isWindows()),
            (this._isNode = typeof module < 'u' && !!module.exports),
            (this._isElectronRenderer =
              typeof process < 'u' &&
              typeof process.versions < 'u' &&
              typeof process.versions.electron < 'u' &&
              process.type === 'renderer'),
            (this._isWebWorker = typeof U.global.importScripts == 'function'),
            (this._isElectronNodeIntegrationWebWorker =
              this._isWebWorker &&
              typeof process < 'u' &&
              typeof process.versions < 'u' &&
              typeof process.versions.electron < 'u' &&
              process.type === 'worker'));
        }),
        (A._isWindows = function () {
          return typeof navigator < 'u' &&
            navigator.userAgent &&
            navigator.userAgent.indexOf('Windows') >= 0
            ? !0
            : typeof process < 'u'
            ? process.platform === 'win32'
            : !1;
        }),
        A
      );
    })();
    U.Environment = n;
  })(se || (se = {}));
  var se;
  (function (U) {
    var n = (function () {
      function i(u, y, v) {
        (this.type = u), (this.detail = y), (this.timestamp = v);
      }
      return i;
    })();
    U.LoaderEvent = n;
    var A = (function () {
      function i(u) {
        this._events = [new n(1, '', u)];
      }
      return (
        (i.prototype.record = function (u, y) {
          this._events.push(
            new n(u, y, U.Utilities.getHighPerformanceTimestamp()),
          );
        }),
        (i.prototype.getEvents = function () {
          return this._events;
        }),
        i
      );
    })();
    U.LoaderEventRecorder = A;
    var M = (function () {
      function i() {}
      return (
        (i.prototype.record = function (u, y) {}),
        (i.prototype.getEvents = function () {
          return [];
        }),
        (i.INSTANCE = new i()),
        i
      );
    })();
    U.NullLoaderEventRecorder = M;
  })(se || (se = {}));
  var se;
  (function (U) {
    var n = (function () {
      function A() {}
      return (
        (A.fileUriToFilePath = function (M, i) {
          if (((i = decodeURI(i).replace(/%23/g, '#')), M)) {
            if (/^file:\/\/\//.test(i)) return i.substr(8);
            if (/^file:\/\//.test(i)) return i.substr(5);
          } else if (/^file:\/\//.test(i)) return i.substr(7);
          return i;
        }),
        (A.startsWith = function (M, i) {
          return M.length >= i.length && M.substr(0, i.length) === i;
        }),
        (A.endsWith = function (M, i) {
          return M.length >= i.length && M.substr(M.length - i.length) === i;
        }),
        (A.containsQueryString = function (M) {
          return /^[^\#]*\?/gi.test(M);
        }),
        (A.isAbsolutePath = function (M) {
          return /^((http:\/\/)|(https:\/\/)|(file:\/\/)|(\/))/.test(M);
        }),
        (A.forEachProperty = function (M, i) {
          if (M) {
            var u = void 0;
            for (u in M) M.hasOwnProperty(u) && i(u, M[u]);
          }
        }),
        (A.isEmpty = function (M) {
          var i = !0;
          return (
            A.forEachProperty(M, function () {
              i = !1;
            }),
            i
          );
        }),
        (A.recursiveClone = function (M) {
          if (
            !M ||
            typeof M != 'object' ||
            M instanceof RegExp ||
            (!Array.isArray(M) && Object.getPrototypeOf(M) !== Object.prototype)
          )
            return M;
          var i = Array.isArray(M) ? [] : {};
          return (
            A.forEachProperty(M, function (u, y) {
              y && typeof y == 'object'
                ? (i[u] = A.recursiveClone(y))
                : (i[u] = y);
            }),
            i
          );
        }),
        (A.generateAnonymousModule = function () {
          return '===anonymous' + A.NEXT_ANONYMOUS_ID++ + '===';
        }),
        (A.isAnonymousModule = function (M) {
          return A.startsWith(M, '===anonymous');
        }),
        (A.getHighPerformanceTimestamp = function () {
          return (
            this.PERFORMANCE_NOW_PROBED ||
              ((this.PERFORMANCE_NOW_PROBED = !0),
              (this.HAS_PERFORMANCE_NOW =
                U.global.performance &&
                typeof U.global.performance.now == 'function')),
            this.HAS_PERFORMANCE_NOW ? U.global.performance.now() : Date.now()
          );
        }),
        (A.NEXT_ANONYMOUS_ID = 1),
        (A.PERFORMANCE_NOW_PROBED = !1),
        (A.HAS_PERFORMANCE_NOW = !1),
        A
      );
    })();
    U.Utilities = n;
  })(se || (se = {}));
  var se;
  (function (U) {
    function n(i) {
      if (i instanceof Error) return i;
      var u = new Error(i.message || String(i) || 'Unknown Error');
      return i.stack && (u.stack = i.stack), u;
    }
    U.ensureError = n;
    var A = (function () {
      function i() {}
      return (
        (i.validateConfigurationOptions = function (u) {
          function y(o) {
            if (o.phase === 'loading') {
              console.error('Loading "' + o.moduleId + '" failed'),
                console.error(o),
                console.error('Here are the modules that depend on it:'),
                console.error(o.neededBy);
              return;
            }
            if (o.phase === 'factory') {
              console.error(
                'The factory function of "' +
                  o.moduleId +
                  '" has thrown an exception',
              ),
                console.error(o),
                console.error('Here are the modules that depend on it:'),
                console.error(o.neededBy);
              return;
            }
          }
          if (
            ((u = u || {}),
            typeof u.baseUrl != 'string' && (u.baseUrl = ''),
            typeof u.isBuild != 'boolean' && (u.isBuild = !1),
            typeof u.paths != 'object' && (u.paths = {}),
            typeof u.config != 'object' && (u.config = {}),
            typeof u.catchError > 'u' && (u.catchError = !1),
            typeof u.recordStats > 'u' && (u.recordStats = !1),
            typeof u.urlArgs != 'string' && (u.urlArgs = ''),
            typeof u.onError != 'function' && (u.onError = y),
            Array.isArray(u.ignoreDuplicateModules) ||
              (u.ignoreDuplicateModules = []),
            u.baseUrl.length > 0 &&
              (U.Utilities.endsWith(u.baseUrl, '/') || (u.baseUrl += '/')),
            typeof u.cspNonce != 'string' && (u.cspNonce = ''),
            typeof u.preferScriptTags > 'u' && (u.preferScriptTags = !1),
            u.nodeCachedData &&
              typeof u.nodeCachedData == 'object' &&
              (typeof u.nodeCachedData.seed != 'string' &&
                (u.nodeCachedData.seed = 'seed'),
              (typeof u.nodeCachedData.writeDelay != 'number' ||
                u.nodeCachedData.writeDelay < 0) &&
                (u.nodeCachedData.writeDelay = 1e3 * 7),
              !u.nodeCachedData.path ||
                typeof u.nodeCachedData.path != 'string'))
          ) {
            var v = n(
              new Error(
                "INVALID cached data configuration, 'path' MUST be set",
              ),
            );
            (v.phase = 'configuration'),
              u.onError(v),
              (u.nodeCachedData = void 0);
          }
          return u;
        }),
        (i.mergeConfigurationOptions = function (u, y) {
          u === void 0 && (u = null), y === void 0 && (y = null);
          var v = U.Utilities.recursiveClone(y || {});
          return (
            U.Utilities.forEachProperty(u, function (o, f) {
              o === 'ignoreDuplicateModules' &&
              typeof v.ignoreDuplicateModules < 'u'
                ? (v.ignoreDuplicateModules =
                    v.ignoreDuplicateModules.concat(f))
                : o === 'paths' && typeof v.paths < 'u'
                ? U.Utilities.forEachProperty(f, function (N, e) {
                    return (v.paths[N] = e);
                  })
                : o === 'config' && typeof v.config < 'u'
                ? U.Utilities.forEachProperty(f, function (N, e) {
                    return (v.config[N] = e);
                  })
                : (v[o] = U.Utilities.recursiveClone(f));
            }),
            i.validateConfigurationOptions(v)
          );
        }),
        i
      );
    })();
    U.ConfigurationOptionsUtil = A;
    var M = (function () {
      function i(u, y) {
        if (
          ((this._env = u),
          (this.options = A.mergeConfigurationOptions(y)),
          this._createIgnoreDuplicateModulesMap(),
          this._createSortedPathsRules(),
          this.options.baseUrl === '' &&
            this.options.nodeRequire &&
            this.options.nodeRequire.main &&
            this.options.nodeRequire.main.filename &&
            this._env.isNode)
        ) {
          var v = this.options.nodeRequire.main.filename,
            o = Math.max(v.lastIndexOf('/'), v.lastIndexOf('\\'));
          this.options.baseUrl = v.substring(0, o + 1);
        }
      }
      return (
        (i.prototype._createIgnoreDuplicateModulesMap = function () {
          this.ignoreDuplicateModulesMap = {};
          for (var u = 0; u < this.options.ignoreDuplicateModules.length; u++)
            this.ignoreDuplicateModulesMap[
              this.options.ignoreDuplicateModules[u]
            ] = !0;
        }),
        (i.prototype._createSortedPathsRules = function () {
          var u = this;
          (this.sortedPathsRules = []),
            U.Utilities.forEachProperty(this.options.paths, function (y, v) {
              Array.isArray(v)
                ? u.sortedPathsRules.push({ from: y, to: v })
                : u.sortedPathsRules.push({ from: y, to: [v] });
            }),
            this.sortedPathsRules.sort(function (y, v) {
              return v.from.length - y.from.length;
            });
        }),
        (i.prototype.cloneAndMerge = function (u) {
          return new i(this._env, A.mergeConfigurationOptions(u, this.options));
        }),
        (i.prototype.getOptionsLiteral = function () {
          return this.options;
        }),
        (i.prototype._applyPaths = function (u) {
          for (var y, v = 0, o = this.sortedPathsRules.length; v < o; v++)
            if (
              ((y = this.sortedPathsRules[v]),
              U.Utilities.startsWith(u, y.from))
            ) {
              for (var f = [], N = 0, e = y.to.length; N < e; N++)
                f.push(y.to[N] + u.substr(y.from.length));
              return f;
            }
          return [u];
        }),
        (i.prototype._addUrlArgsToUrl = function (u) {
          return U.Utilities.containsQueryString(u)
            ? u + '&' + this.options.urlArgs
            : u + '?' + this.options.urlArgs;
        }),
        (i.prototype._addUrlArgsIfNecessaryToUrl = function (u) {
          return this.options.urlArgs ? this._addUrlArgsToUrl(u) : u;
        }),
        (i.prototype._addUrlArgsIfNecessaryToUrls = function (u) {
          if (this.options.urlArgs)
            for (var y = 0, v = u.length; y < v; y++)
              u[y] = this._addUrlArgsToUrl(u[y]);
          return u;
        }),
        (i.prototype.moduleIdToPaths = function (u) {
          if (this._env.isNode) {
            var y =
              this.options.amdModulesPattern instanceof RegExp &&
              !this.options.amdModulesPattern.test(u);
            if (y) return this.isBuild() ? ['empty:'] : ['node|' + u];
          }
          var v = u,
            o;
          if (
            !U.Utilities.endsWith(v, '.js') &&
            !U.Utilities.isAbsolutePath(v)
          ) {
            o = this._applyPaths(v);
            for (var f = 0, N = o.length; f < N; f++)
              (this.isBuild() && o[f] === 'empty:') ||
                (U.Utilities.isAbsolutePath(o[f]) ||
                  (o[f] = this.options.baseUrl + o[f]),
                !U.Utilities.endsWith(o[f], '.js') &&
                  !U.Utilities.containsQueryString(o[f]) &&
                  (o[f] = o[f] + '.js'));
          } else
            !U.Utilities.endsWith(v, '.js') &&
              !U.Utilities.containsQueryString(v) &&
              (v = v + '.js'),
              (o = [v]);
          return this._addUrlArgsIfNecessaryToUrls(o);
        }),
        (i.prototype.requireToUrl = function (u) {
          var y = u;
          return (
            U.Utilities.isAbsolutePath(y) ||
              ((y = this._applyPaths(y)[0]),
              U.Utilities.isAbsolutePath(y) || (y = this.options.baseUrl + y)),
            this._addUrlArgsIfNecessaryToUrl(y)
          );
        }),
        (i.prototype.isBuild = function () {
          return this.options.isBuild;
        }),
        (i.prototype.shouldInvokeFactory = function (u) {
          return !!(
            !this.options.isBuild ||
            U.Utilities.isAnonymousModule(u) ||
            (this.options.buildForceInvokeFactory &&
              this.options.buildForceInvokeFactory[u])
          );
        }),
        (i.prototype.isDuplicateMessageIgnoredFor = function (u) {
          return this.ignoreDuplicateModulesMap.hasOwnProperty(u);
        }),
        (i.prototype.getConfigForModule = function (u) {
          if (this.options.config) return this.options.config[u];
        }),
        (i.prototype.shouldCatchError = function () {
          return this.options.catchError;
        }),
        (i.prototype.shouldRecordStats = function () {
          return this.options.recordStats;
        }),
        (i.prototype.onError = function (u) {
          this.options.onError(u);
        }),
        i
      );
    })();
    U.Configuration = M;
  })(se || (se = {}));
  var se;
  (function (U) {
    var n = (function () {
        function o(f) {
          (this._env = f),
            (this._scriptLoader = null),
            (this._callbackMap = {});
        }
        return (
          (o.prototype.load = function (f, N, e, C) {
            var h = this;
            if (!this._scriptLoader)
              if (this._env.isWebWorker) this._scriptLoader = new i();
              else if (this._env.isElectronRenderer) {
                var b = f.getConfig().getOptionsLiteral().preferScriptTags;
                b
                  ? (this._scriptLoader = new A())
                  : (this._scriptLoader = new u(this._env));
              } else
                this._env.isNode
                  ? (this._scriptLoader = new u(this._env))
                  : (this._scriptLoader = new A());
            var L = { callback: e, errorback: C };
            if (this._callbackMap.hasOwnProperty(N)) {
              this._callbackMap[N].push(L);
              return;
            }
            (this._callbackMap[N] = [L]),
              this._scriptLoader.load(
                f,
                N,
                function () {
                  return h.triggerCallback(N);
                },
                function (S) {
                  return h.triggerErrorback(N, S);
                },
              );
          }),
          (o.prototype.triggerCallback = function (f) {
            var N = this._callbackMap[f];
            delete this._callbackMap[f];
            for (var e = 0; e < N.length; e++) N[e].callback();
          }),
          (o.prototype.triggerErrorback = function (f, N) {
            var e = this._callbackMap[f];
            delete this._callbackMap[f];
            for (var C = 0; C < e.length; C++) e[C].errorback(N);
          }),
          o
        );
      })(),
      A = (function () {
        function o() {}
        return (
          (o.prototype.attachListeners = function (f, N, e) {
            var C = function () {
                f.removeEventListener('load', h),
                  f.removeEventListener('error', b);
              },
              h = function (L) {
                C(), N();
              },
              b = function (L) {
                C(), e(L);
              };
            f.addEventListener('load', h), f.addEventListener('error', b);
          }),
          (o.prototype.load = function (f, N, e, C) {
            if (/^node\|/.test(N)) {
              var h = f.getConfig().getOptionsLiteral(),
                b = y(f.getRecorder(), h.nodeRequire || U.global.nodeRequire),
                L = N.split('|'),
                S = null;
              try {
                S = b(L[1]);
              } catch (l) {
                C(l);
                return;
              }
              f.enqueueDefineAnonymousModule([], function () {
                return S;
              }),
                e();
            } else {
              var _ = document.createElement('script');
              _.setAttribute('async', 'async'),
                _.setAttribute('type', 'text/javascript'),
                this.attachListeners(_, e, C);
              var m = f.getConfig().getOptionsLiteral().trustedTypesPolicy;
              m && (N = m.createScriptURL(N)), _.setAttribute('src', N);
              var w = f.getConfig().getOptionsLiteral().cspNonce;
              w && _.setAttribute('nonce', w),
                document.getElementsByTagName('head')[0].appendChild(_);
            }
          }),
          o
        );
      })();
    function M(o) {
      var f = o.getConfig().getOptionsLiteral().trustedTypesPolicy;
      try {
        var N = f
          ? self.eval(f.createScript('', 'true'))
          : new Function('true');
        return N.call(self), !0;
      } catch {
        return !1;
      }
    }
    var i = (function () {
        function o() {
          this._cachedCanUseEval = null;
        }
        return (
          (o.prototype._canUseEval = function (f) {
            return (
              this._cachedCanUseEval === null &&
                (this._cachedCanUseEval = M(f)),
              this._cachedCanUseEval
            );
          }),
          (o.prototype.load = function (f, N, e, C) {
            if (/^node\|/.test(N)) {
              var h = f.getConfig().getOptionsLiteral(),
                b = y(f.getRecorder(), h.nodeRequire || U.global.nodeRequire),
                L = N.split('|'),
                S = null;
              try {
                S = b(L[1]);
              } catch (w) {
                C(w);
                return;
              }
              f.enqueueDefineAnonymousModule([], function () {
                return S;
              }),
                e();
            } else {
              var _ = f.getConfig().getOptionsLiteral().trustedTypesPolicy,
                m =
                  /^((http:)|(https:)|(file:))/.test(N) &&
                  N.substring(0, self.origin.length) !== self.origin;
              if (!m && this._canUseEval(f)) {
                fetch(N)
                  .then(function (w) {
                    if (w.status !== 200) throw new Error(w.statusText);
                    return w.text();
                  })
                  .then(function (w) {
                    w =
                      w +
                      `
//# sourceURL=` +
                      N;
                    var l = _
                      ? self.eval(_.createScript('', w))
                      : new Function(w);
                    l.call(self), e();
                  })
                  .then(void 0, C);
                return;
              }
              try {
                _ && (N = _.createScriptURL(N)), importScripts(N), e();
              } catch (w) {
                C(w);
              }
            }
          }),
          o
        );
      })(),
      u = (function () {
        function o(f) {
          (this._env = f),
            (this._didInitialize = !1),
            (this._didPatchNodeRequire = !1);
        }
        return (
          (o.prototype._init = function (f) {
            this._didInitialize ||
              ((this._didInitialize = !0),
              (this._fs = f('fs')),
              (this._vm = f('vm')),
              (this._path = f('path')),
              (this._crypto = f('crypto')));
          }),
          (o.prototype._initNodeRequire = function (f, N) {
            var e = N.getConfig().getOptionsLiteral().nodeCachedData;
            if (!e || this._didPatchNodeRequire) return;
            this._didPatchNodeRequire = !0;
            var C = this,
              h = f('module');
            function b(L) {
              var S = L.constructor,
                _ = function (w) {
                  try {
                    return L.require(w);
                  } finally {
                  }
                };
              return (
                (_.resolve = function (w, l) {
                  return S._resolveFilename(w, L, !1, l);
                }),
                (_.resolve.paths = function (w) {
                  return S._resolveLookupPaths(w, L);
                }),
                (_.main = process.mainModule),
                (_.extensions = S._extensions),
                (_.cache = S._cache),
                _
              );
            }
            h.prototype._compile = function (L, S) {
              var _ = h.wrap(L.replace(/^#!.*/, '')),
                m = N.getRecorder(),
                w = C._getCachedDataPath(e, S),
                l = { filename: S },
                g;
              try {
                var r = C._fs.readFileSync(w);
                (g = r.slice(0, 16)),
                  (l.cachedData = r.slice(16)),
                  m.record(60, w);
              } catch {
                m.record(61, w);
              }
              var a = new C._vm.Script(_, l),
                s = a.runInThisContext(l),
                c = C._path.dirname(S),
                d = b(this),
                p = [this.exports, d, this, S, c, process, Re, Buffer],
                E = s.apply(this.exports, p);
              return (
                C._handleCachedData(a, _, w, !l.cachedData, N),
                C._verifyCachedData(a, _, w, g, N),
                E
              );
            };
          }),
          (o.prototype.load = function (f, N, e, C) {
            var h = this,
              b = f.getConfig().getOptionsLiteral(),
              L = y(f.getRecorder(), b.nodeRequire || U.global.nodeRequire),
              S =
                b.nodeInstrumenter ||
                function (s) {
                  return s;
                };
            this._init(L), this._initNodeRequire(L, f);
            var _ = f.getRecorder();
            if (/^node\|/.test(N)) {
              var m = N.split('|'),
                w = null;
              try {
                w = L(m[1]);
              } catch (s) {
                C(s);
                return;
              }
              f.enqueueDefineAnonymousModule([], function () {
                return w;
              }),
                e();
            } else {
              N = U.Utilities.fileUriToFilePath(this._env.isWindows, N);
              var l = this._path.normalize(N),
                g = this._getElectronRendererScriptPathOrUri(l),
                r = Boolean(b.nodeCachedData),
                a = r ? this._getCachedDataPath(b.nodeCachedData, N) : void 0;
              this._readSourceAndCachedData(l, a, _, function (s, c, d, p) {
                if (s) {
                  C(s);
                  return;
                }
                var E;
                c.charCodeAt(0) === o._BOM
                  ? (E = o._PREFIX + c.substring(1) + o._SUFFIX)
                  : (E = o._PREFIX + c + o._SUFFIX),
                  (E = S(E, l));
                var R = { filename: g, cachedData: d },
                  D = h._createAndEvalScript(f, E, R, e, C);
                h._handleCachedData(D, E, a, r && !d, f),
                  h._verifyCachedData(D, E, a, p, f);
              });
            }
          }),
          (o.prototype._createAndEvalScript = function (f, N, e, C, h) {
            var b = f.getRecorder();
            b.record(31, e.filename);
            var L = new this._vm.Script(N, e),
              S = L.runInThisContext(e),
              _ = f.getGlobalAMDDefineFunc(),
              m = !1,
              w = function () {
                return (m = !0), _.apply(null, arguments);
              };
            return (
              (w.amd = _.amd),
              S.call(
                U.global,
                f.getGlobalAMDRequireFunc(),
                w,
                e.filename,
                this._path.dirname(e.filename),
              ),
              b.record(32, e.filename),
              m
                ? C()
                : h(
                    new Error(
                      "Didn't receive define call in " + e.filename + '!',
                    ),
                  ),
              L
            );
          }),
          (o.prototype._getElectronRendererScriptPathOrUri = function (f) {
            if (!this._env.isElectronRenderer) return f;
            var N = f.match(/^([a-z])\:(.*)/i);
            return N
              ? 'file:///' +
                  (N[1].toUpperCase() + ':' + N[2]).replace(/\\/g, '/')
              : 'file://' + f;
          }),
          (o.prototype._getCachedDataPath = function (f, N) {
            var e = this._crypto
                .createHash('md5')
                .update(N, 'utf8')
                .update(f.seed, 'utf8')
                .update(process.arch, '')
                .digest('hex'),
              C = this._path.basename(N).replace(/\.js$/, '');
            return this._path.join(f.path, C + '-' + e + '.code');
          }),
          (o.prototype._handleCachedData = function (f, N, e, C, h) {
            var b = this;
            f.cachedDataRejected
              ? this._fs.unlink(e, function (L) {
                  h.getRecorder().record(62, e),
                    b._createAndWriteCachedData(f, N, e, h),
                    L && h.getConfig().onError(L);
                })
              : C && this._createAndWriteCachedData(f, N, e, h);
          }),
          (o.prototype._createAndWriteCachedData = function (f, N, e, C) {
            var h = this,
              b = Math.ceil(
                C.getConfig().getOptionsLiteral().nodeCachedData.writeDelay *
                  (1 + Math.random()),
              ),
              L = -1,
              S = 0,
              _ = void 0,
              m = function () {
                setTimeout(function () {
                  _ ||
                    (_ = h._crypto
                      .createHash('md5')
                      .update(N, 'utf8')
                      .digest());
                  var w = f.createCachedData();
                  if (!(w.length === 0 || w.length === L || S >= 5)) {
                    if (w.length < L) {
                      m();
                      return;
                    }
                    (L = w.length),
                      h._fs.writeFile(e, Buffer.concat([_, w]), function (l) {
                        l && C.getConfig().onError(l),
                          C.getRecorder().record(63, e),
                          m();
                      });
                  }
                }, b * Math.pow(4, S++));
              };
            m();
          }),
          (o.prototype._readSourceAndCachedData = function (f, N, e, C) {
            if (!N) this._fs.readFile(f, { encoding: 'utf8' }, C);
            else {
              var h = void 0,
                b = void 0,
                L = void 0,
                S = 2,
                _ = function (m) {
                  m ? C(m) : --S === 0 && C(void 0, h, b, L);
                };
              this._fs.readFile(f, { encoding: 'utf8' }, function (m, w) {
                (h = w), _(m);
              }),
                this._fs.readFile(N, function (m, w) {
                  !m && w && w.length > 0
                    ? ((L = w.slice(0, 16)), (b = w.slice(16)), e.record(60, N))
                    : e.record(61, N),
                    _();
                });
            }
          }),
          (o.prototype._verifyCachedData = function (f, N, e, C, h) {
            var b = this;
            !C ||
              f.cachedDataRejected ||
              setTimeout(function () {
                var L = b._crypto.createHash('md5').update(N, 'utf8').digest();
                C.equals(L) ||
                  (h
                    .getConfig()
                    .onError(
                      new Error(
                        "FAILED TO VERIFY CACHED DATA, deleting stale '" +
                          e +
                          "' now, but a RESTART IS REQUIRED",
                      ),
                    ),
                  b._fs.unlink(e, function (S) {
                    S && h.getConfig().onError(S);
                  }));
              }, Math.ceil(5e3 * (1 + Math.random())));
          }),
          (o._BOM = 65279),
          (o._PREFIX = '(function (require, define, __filename, __dirname) { '),
          (o._SUFFIX = `
});`),
          o
        );
      })();
    function y(o, f) {
      if (f.__$__isRecorded) return f;
      var N = function (C) {
        o.record(33, C);
        try {
          return f(C);
        } finally {
          o.record(34, C);
        }
      };
      return (N.__$__isRecorded = !0), N;
    }
    U.ensureRecordedNodeRequire = y;
    function v(o) {
      return new n(o);
    }
    U.createScriptLoader = v;
  })(se || (se = {}));
  var se;
  (function (U) {
    var n = (function () {
      function v(o) {
        var f = o.lastIndexOf('/');
        f !== -1
          ? (this.fromModulePath = o.substr(0, f + 1))
          : (this.fromModulePath = '');
      }
      return (
        (v._normalizeModuleId = function (o) {
          var f = o,
            N;
          for (N = /\/\.\//; N.test(f); ) f = f.replace(N, '/');
          for (
            f = f.replace(/^\.\//g, ''),
              N =
                /\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//;
            N.test(f);

          )
            f = f.replace(N, '/');
          return (
            (f = f.replace(
              /^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//,
              '',
            )),
            f
          );
        }),
        (v.prototype.resolveModule = function (o) {
          var f = o;
          return (
            U.Utilities.isAbsolutePath(f) ||
              ((U.Utilities.startsWith(f, './') ||
                U.Utilities.startsWith(f, '../')) &&
                (f = v._normalizeModuleId(this.fromModulePath + f))),
            f
          );
        }),
        (v.ROOT = new v('')),
        v
      );
    })();
    U.ModuleIdResolver = n;
    var A = (function () {
      function v(o, f, N, e, C, h) {
        (this.id = o),
          (this.strId = f),
          (this.dependencies = N),
          (this._callback = e),
          (this._errorback = C),
          (this.moduleIdResolver = h),
          (this.exports = {}),
          (this.error = null),
          (this.exportsPassedIn = !1),
          (this.unresolvedDependenciesCount = this.dependencies.length),
          (this._isComplete = !1);
      }
      return (
        (v._safeInvokeFunction = function (o, f) {
          try {
            return { returnedValue: o.apply(U.global, f), producedError: null };
          } catch (N) {
            return { returnedValue: null, producedError: N };
          }
        }),
        (v._invokeFactory = function (o, f, N, e) {
          return o.shouldInvokeFactory(f)
            ? o.shouldCatchError()
              ? this._safeInvokeFunction(N, e)
              : { returnedValue: N.apply(U.global, e), producedError: null }
            : { returnedValue: null, producedError: null };
        }),
        (v.prototype.complete = function (o, f, N, e) {
          this._isComplete = !0;
          var C = null;
          if (this._callback)
            if (typeof this._callback == 'function') {
              o.record(21, this.strId);
              var h = v._invokeFactory(f, this.strId, this._callback, N);
              (C = h.producedError),
                o.record(22, this.strId),
                !C &&
                  typeof h.returnedValue < 'u' &&
                  (!this.exportsPassedIn ||
                    U.Utilities.isEmpty(this.exports)) &&
                  (this.exports = h.returnedValue);
            } else this.exports = this._callback;
          if (C) {
            var b = U.ensureError(C);
            (b.phase = 'factory'),
              (b.moduleId = this.strId),
              (b.neededBy = e(this.id)),
              (this.error = b),
              f.onError(b);
          }
          (this.dependencies = null),
            (this._callback = null),
            (this._errorback = null),
            (this.moduleIdResolver = null);
        }),
        (v.prototype.onDependencyError = function (o) {
          return (
            (this._isComplete = !0),
            (this.error = o),
            this._errorback ? (this._errorback(o), !0) : !1
          );
        }),
        (v.prototype.isComplete = function () {
          return this._isComplete;
        }),
        v
      );
    })();
    U.Module = A;
    var M = (function () {
        function v() {
          (this._nextId = 0),
            (this._strModuleIdToIntModuleId = new Map()),
            (this._intModuleIdToStrModuleId = []),
            this.getModuleId('exports'),
            this.getModuleId('module'),
            this.getModuleId('require');
        }
        return (
          (v.prototype.getMaxModuleId = function () {
            return this._nextId;
          }),
          (v.prototype.getModuleId = function (o) {
            var f = this._strModuleIdToIntModuleId.get(o);
            return (
              typeof f > 'u' &&
                ((f = this._nextId++),
                this._strModuleIdToIntModuleId.set(o, f),
                (this._intModuleIdToStrModuleId[f] = o)),
              f
            );
          }),
          (v.prototype.getStrModuleId = function (o) {
            return this._intModuleIdToStrModuleId[o];
          }),
          v
        );
      })(),
      i = (function () {
        function v(o) {
          this.id = o;
        }
        return (
          (v.EXPORTS = new v(0)),
          (v.MODULE = new v(1)),
          (v.REQUIRE = new v(2)),
          v
        );
      })();
    U.RegularDependency = i;
    var u = (function () {
      function v(o, f, N) {
        (this.id = o), (this.pluginId = f), (this.pluginParam = N);
      }
      return v;
    })();
    U.PluginDependency = u;
    var y = (function () {
      function v(o, f, N, e, C) {
        C === void 0 && (C = 0),
          (this._env = o),
          (this._scriptLoader = f),
          (this._loaderAvailableTimestamp = C),
          (this._defineFunc = N),
          (this._requireFunc = e),
          (this._moduleIdProvider = new M()),
          (this._config = new U.Configuration(this._env)),
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
        (v.prototype.reset = function () {
          return new v(
            this._env,
            this._scriptLoader,
            this._defineFunc,
            this._requireFunc,
            this._loaderAvailableTimestamp,
          );
        }),
        (v.prototype.getGlobalAMDDefineFunc = function () {
          return this._defineFunc;
        }),
        (v.prototype.getGlobalAMDRequireFunc = function () {
          return this._requireFunc;
        }),
        (v._findRelevantLocationInStack = function (o, f) {
          for (
            var N = function (l) {
                return l.replace(/\\/g, '/');
              },
              e = N(o),
              C = f.split(/\n/),
              h = 0;
            h < C.length;
            h++
          ) {
            var b = C[h].match(/(.*):(\d+):(\d+)\)?$/);
            if (b) {
              var L = b[1],
                S = b[2],
                _ = b[3],
                m = Math.max(L.lastIndexOf(' ') + 1, L.lastIndexOf('(') + 1);
              if (((L = L.substr(m)), (L = N(L)), L === e)) {
                var w = { line: parseInt(S, 10), col: parseInt(_, 10) };
                return w.line === 1 && (w.col -= 53), w;
              }
            }
          }
          throw new Error(
            'Could not correlate define call site for needle ' + o,
          );
        }),
        (v.prototype.getBuildInfo = function () {
          if (!this._config.isBuild()) return null;
          for (
            var o = [], f = 0, N = 0, e = this._modules2.length;
            N < e;
            N++
          ) {
            var C = this._modules2[N];
            if (!!C) {
              var h = this._buildInfoPath[C.id] || null,
                b = this._buildInfoDefineStack[C.id] || null,
                L = this._buildInfoDependencies[C.id];
              o[f++] = {
                id: C.strId,
                path: h,
                defineLocation:
                  h && b ? v._findRelevantLocationInStack(h, b) : null,
                dependencies: L,
                shim: null,
                exports: C.exports,
              };
            }
          }
          return o;
        }),
        (v.prototype.getRecorder = function () {
          return (
            this._recorder ||
              (this._config.shouldRecordStats()
                ? (this._recorder = new U.LoaderEventRecorder(
                    this._loaderAvailableTimestamp,
                  ))
                : (this._recorder = U.NullLoaderEventRecorder.INSTANCE)),
            this._recorder
          );
        }),
        (v.prototype.getLoaderEvents = function () {
          return this.getRecorder().getEvents();
        }),
        (v.prototype.enqueueDefineAnonymousModule = function (o, f) {
          if (this._currentAnonymousDefineCall !== null)
            throw new Error(
              'Can only have one anonymous define call per script file',
            );
          var N = null;
          this._config.isBuild() &&
            (N = new Error('StackLocation').stack || null),
            (this._currentAnonymousDefineCall = {
              stack: N,
              dependencies: o,
              callback: f,
            });
        }),
        (v.prototype.defineModule = function (o, f, N, e, C, h) {
          var b = this;
          h === void 0 && (h = new n(o));
          var L = this._moduleIdProvider.getModuleId(o);
          if (this._modules2[L]) {
            this._config.isDuplicateMessageIgnoredFor(o) ||
              console.warn("Duplicate definition of module '" + o + "'");
            return;
          }
          var S = new A(L, o, this._normalizeDependencies(f, h), N, e, h);
          (this._modules2[L] = S),
            this._config.isBuild() &&
              ((this._buildInfoDefineStack[L] = C),
              (this._buildInfoDependencies[L] = (S.dependencies || []).map(
                function (_) {
                  return b._moduleIdProvider.getStrModuleId(_.id);
                },
              ))),
            this._resolve(S);
        }),
        (v.prototype._normalizeDependency = function (o, f) {
          if (o === 'exports') return i.EXPORTS;
          if (o === 'module') return i.MODULE;
          if (o === 'require') return i.REQUIRE;
          var N = o.indexOf('!');
          if (N >= 0) {
            var e = f.resolveModule(o.substr(0, N)),
              C = f.resolveModule(o.substr(N + 1)),
              h = this._moduleIdProvider.getModuleId(e + '!' + C),
              b = this._moduleIdProvider.getModuleId(e);
            return new u(h, b, C);
          }
          return new i(this._moduleIdProvider.getModuleId(f.resolveModule(o)));
        }),
        (v.prototype._normalizeDependencies = function (o, f) {
          for (var N = [], e = 0, C = 0, h = o.length; C < h; C++)
            N[e++] = this._normalizeDependency(o[C], f);
          return N;
        }),
        (v.prototype._relativeRequire = function (o, f, N, e) {
          if (typeof f == 'string') return this.synchronousRequire(f, o);
          this.defineModule(
            U.Utilities.generateAnonymousModule(),
            f,
            N,
            e,
            null,
            o,
          );
        }),
        (v.prototype.synchronousRequire = function (o, f) {
          f === void 0 && (f = new n(o));
          var N = this._normalizeDependency(o, f),
            e = this._modules2[N.id];
          if (!e)
            throw new Error(
              "Check dependency list! Synchronous require cannot resolve module '" +
                o +
                "'. This is the first mention of this module!",
            );
          if (!e.isComplete())
            throw new Error(
              "Check dependency list! Synchronous require cannot resolve module '" +
                o +
                "'. This module has not been resolved completely yet.",
            );
          if (e.error) throw e.error;
          return e.exports;
        }),
        (v.prototype.configure = function (o, f) {
          var N = this._config.shouldRecordStats();
          f
            ? (this._config = new U.Configuration(this._env, o))
            : (this._config = this._config.cloneAndMerge(o)),
            this._config.shouldRecordStats() && !N && (this._recorder = null);
        }),
        (v.prototype.getConfig = function () {
          return this._config;
        }),
        (v.prototype._onLoad = function (o) {
          if (this._currentAnonymousDefineCall !== null) {
            var f = this._currentAnonymousDefineCall;
            (this._currentAnonymousDefineCall = null),
              this.defineModule(
                this._moduleIdProvider.getStrModuleId(o),
                f.dependencies,
                f.callback,
                null,
                f.stack,
              );
          }
        }),
        (v.prototype._createLoadError = function (o, f) {
          var N = this,
            e = this._moduleIdProvider.getStrModuleId(o),
            C = (this._inverseDependencies2[o] || []).map(function (b) {
              return N._moduleIdProvider.getStrModuleId(b);
            }),
            h = U.ensureError(f);
          return (h.phase = 'loading'), (h.moduleId = e), (h.neededBy = C), h;
        }),
        (v.prototype._onLoadError = function (o, f) {
          var N = this._createLoadError(o, f);
          this._modules2[o] ||
            (this._modules2[o] = new A(
              o,
              this._moduleIdProvider.getStrModuleId(o),
              [],
              function () {},
              null,
              null,
            ));
          for (
            var e = [], C = 0, h = this._moduleIdProvider.getMaxModuleId();
            C < h;
            C++
          )
            e[C] = !1;
          var b = !1,
            L = [];
          for (L.push(o), e[o] = !0; L.length > 0; ) {
            var S = L.shift(),
              _ = this._modules2[S];
            _ && (b = _.onDependencyError(N) || b);
            var m = this._inverseDependencies2[S];
            if (m)
              for (var C = 0, h = m.length; C < h; C++) {
                var w = m[C];
                e[w] || (L.push(w), (e[w] = !0));
              }
          }
          b || this._config.onError(N);
        }),
        (v.prototype._hasDependencyPath = function (o, f) {
          var N = this._modules2[o];
          if (!N) return !1;
          for (
            var e = [], C = 0, h = this._moduleIdProvider.getMaxModuleId();
            C < h;
            C++
          )
            e[C] = !1;
          var b = [];
          for (b.push(N), e[o] = !0; b.length > 0; ) {
            var L = b.shift(),
              S = L.dependencies;
            if (S)
              for (var C = 0, h = S.length; C < h; C++) {
                var _ = S[C];
                if (_.id === f) return !0;
                var m = this._modules2[_.id];
                m && !e[_.id] && ((e[_.id] = !0), b.push(m));
              }
          }
          return !1;
        }),
        (v.prototype._findCyclePath = function (o, f, N) {
          if (o === f || N === 50) return [o];
          var e = this._modules2[o];
          if (!e) return null;
          var C = e.dependencies;
          if (C)
            for (var h = 0, b = C.length; h < b; h++) {
              var L = this._findCyclePath(C[h].id, f, N + 1);
              if (L !== null) return L.push(o), L;
            }
          return null;
        }),
        (v.prototype._createRequire = function (o) {
          var f = this,
            N = function (e, C, h) {
              return f._relativeRequire(o, e, C, h);
            };
          return (
            (N.toUrl = function (e) {
              return f._config.requireToUrl(o.resolveModule(e));
            }),
            (N.getStats = function () {
              return f.getLoaderEvents();
            }),
            (N.hasDependencyCycle = function () {
              return f._hasDependencyCycle;
            }),
            (N.config = function (e, C) {
              C === void 0 && (C = !1), f.configure(e, C);
            }),
            (N.__$__nodeRequire = U.global.nodeRequire),
            N
          );
        }),
        (v.prototype._loadModule = function (o) {
          var f = this;
          if (!(this._modules2[o] || this._knownModules2[o])) {
            this._knownModules2[o] = !0;
            var N = this._moduleIdProvider.getStrModuleId(o),
              e = this._config.moduleIdToPaths(N),
              C = /^@[^\/]+\/[^\/]+$/;
            this._env.isNode &&
              (N.indexOf('/') === -1 || C.test(N)) &&
              e.push('node|' + N);
            var h = -1,
              b = function (L) {
                if ((h++, h >= e.length)) f._onLoadError(o, L);
                else {
                  var S = e[h],
                    _ = f.getRecorder();
                  if (f._config.isBuild() && S === 'empty:') {
                    (f._buildInfoPath[o] = S),
                      f.defineModule(
                        f._moduleIdProvider.getStrModuleId(o),
                        [],
                        null,
                        null,
                        null,
                      ),
                      f._onLoad(o);
                    return;
                  }
                  _.record(10, S),
                    f._scriptLoader.load(
                      f,
                      S,
                      function () {
                        f._config.isBuild() && (f._buildInfoPath[o] = S),
                          _.record(11, S),
                          f._onLoad(o);
                      },
                      function (m) {
                        _.record(12, S), b(m);
                      },
                    );
                }
              };
            b(null);
          }
        }),
        (v.prototype._loadPluginDependency = function (o, f) {
          var N = this;
          if (!(this._modules2[f.id] || this._knownModules2[f.id])) {
            this._knownModules2[f.id] = !0;
            var e = function (C) {
              N.defineModule(
                N._moduleIdProvider.getStrModuleId(f.id),
                [],
                C,
                null,
                null,
              );
            };
            (e.error = function (C) {
              N._config.onError(N._createLoadError(f.id, C));
            }),
              o.load(
                f.pluginParam,
                this._createRequire(n.ROOT),
                e,
                this._config.getOptionsLiteral(),
              );
          }
        }),
        (v.prototype._resolve = function (o) {
          var f = this,
            N = o.dependencies;
          if (N)
            for (var e = 0, C = N.length; e < C; e++) {
              var h = N[e];
              if (h === i.EXPORTS) {
                (o.exportsPassedIn = !0), o.unresolvedDependenciesCount--;
                continue;
              }
              if (h === i.MODULE) {
                o.unresolvedDependenciesCount--;
                continue;
              }
              if (h === i.REQUIRE) {
                o.unresolvedDependenciesCount--;
                continue;
              }
              var b = this._modules2[h.id];
              if (b && b.isComplete()) {
                if (b.error) {
                  o.onDependencyError(b.error);
                  return;
                }
                o.unresolvedDependenciesCount--;
                continue;
              }
              if (this._hasDependencyPath(h.id, o.id)) {
                (this._hasDependencyCycle = !0),
                  console.warn(
                    "There is a dependency cycle between '" +
                      this._moduleIdProvider.getStrModuleId(h.id) +
                      "' and '" +
                      this._moduleIdProvider.getStrModuleId(o.id) +
                      "'. The cyclic path follows:",
                  );
                var L = this._findCyclePath(h.id, o.id, 0) || [];
                L.reverse(),
                  L.push(h.id),
                  console.warn(
                    L.map(function (m) {
                      return f._moduleIdProvider.getStrModuleId(m);
                    }).join(` => 
`),
                  ),
                  o.unresolvedDependenciesCount--;
                continue;
              }
              if (
                ((this._inverseDependencies2[h.id] =
                  this._inverseDependencies2[h.id] || []),
                this._inverseDependencies2[h.id].push(o.id),
                h instanceof u)
              ) {
                var S = this._modules2[h.pluginId];
                if (S && S.isComplete()) {
                  this._loadPluginDependency(S.exports, h);
                  continue;
                }
                var _ = this._inversePluginDependencies2.get(h.pluginId);
                _ ||
                  ((_ = []),
                  this._inversePluginDependencies2.set(h.pluginId, _)),
                  _.push(h),
                  this._loadModule(h.pluginId);
                continue;
              }
              this._loadModule(h.id);
            }
          o.unresolvedDependenciesCount === 0 && this._onModuleComplete(o);
        }),
        (v.prototype._onModuleComplete = function (o) {
          var f = this,
            N = this.getRecorder();
          if (!o.isComplete()) {
            var e = o.dependencies,
              C = [];
            if (e)
              for (var h = 0, b = e.length; h < b; h++) {
                var L = e[h];
                if (L === i.EXPORTS) {
                  C[h] = o.exports;
                  continue;
                }
                if (L === i.MODULE) {
                  C[h] = {
                    id: o.strId,
                    config: function () {
                      return f._config.getConfigForModule(o.strId);
                    },
                  };
                  continue;
                }
                if (L === i.REQUIRE) {
                  C[h] = this._createRequire(o.moduleIdResolver);
                  continue;
                }
                var S = this._modules2[L.id];
                if (S) {
                  C[h] = S.exports;
                  continue;
                }
                C[h] = null;
              }
            var _ = function (r) {
              return (f._inverseDependencies2[r] || []).map(function (a) {
                return f._moduleIdProvider.getStrModuleId(a);
              });
            };
            o.complete(N, this._config, C, _);
            var m = this._inverseDependencies2[o.id];
            if (((this._inverseDependencies2[o.id] = null), m))
              for (var h = 0, b = m.length; h < b; h++) {
                var w = m[h],
                  l = this._modules2[w];
                l.unresolvedDependenciesCount--,
                  l.unresolvedDependenciesCount === 0 &&
                    this._onModuleComplete(l);
              }
            var g = this._inversePluginDependencies2.get(o.id);
            if (g) {
              this._inversePluginDependencies2.delete(o.id);
              for (var h = 0, b = g.length; h < b; h++)
                this._loadPluginDependency(o.exports, g[h]);
            }
          }
        }),
        v
      );
    })();
    U.ModuleManager = y;
  })(se || (se = {}));
  var Y, se;
  (function (U) {
    var n = new U.Environment(),
      A = null,
      M = function (v, o, f) {
        typeof v != 'string' && ((f = o), (o = v), (v = null)),
          (typeof o != 'object' || !Array.isArray(o)) && ((f = o), (o = null)),
          o || (o = ['require', 'exports', 'module']),
          v
            ? A.defineModule(v, o, f, null, null)
            : A.enqueueDefineAnonymousModule(o, f);
      };
    M.amd = { jQuery: !0 };
    var i = function (v, o) {
        o === void 0 && (o = !1), A.configure(v, o);
      },
      u = function () {
        if (arguments.length === 1) {
          if (arguments[0] instanceof Object && !Array.isArray(arguments[0])) {
            i(arguments[0]);
            return;
          }
          if (typeof arguments[0] == 'string')
            return A.synchronousRequire(arguments[0]);
        }
        if (
          (arguments.length === 2 || arguments.length === 3) &&
          Array.isArray(arguments[0])
        ) {
          A.defineModule(
            U.Utilities.generateAnonymousModule(),
            arguments[0],
            arguments[1],
            arguments[2],
            null,
          );
          return;
        }
        throw new Error('Unrecognized require call');
      };
    (u.config = i),
      (u.getConfig = function () {
        return A.getConfig().getOptionsLiteral();
      }),
      (u.reset = function () {
        A = A.reset();
      }),
      (u.getBuildInfo = function () {
        return A.getBuildInfo();
      }),
      (u.getStats = function () {
        return A.getLoaderEvents();
      }),
      (u.define = M);
    function y() {
      if (typeof U.global.require < 'u' || typeof require < 'u') {
        var v = U.global.require || require;
        if (typeof v == 'function' && typeof v.resolve == 'function') {
          var o = U.ensureRecordedNodeRequire(A.getRecorder(), v);
          (U.global.nodeRequire = o),
            (u.nodeRequire = o),
            (u.__$__nodeRequire = o);
        }
      }
      n.isNode && !n.isElectronRenderer && !n.isElectronNodeIntegrationWebWorker
        ? (module.exports = u)
        : (n.isElectronRenderer || (U.global.define = M),
          (U.global.require = u));
    }
    (U.init = y),
      (typeof U.global.define != 'function' || !U.global.define.amd) &&
        ((A = new U.ModuleManager(
          n,
          U.createScriptLoader(n),
          M,
          u,
          U.Utilities.getHighPerformanceTimestamp(),
        )),
        typeof U.global.require < 'u' &&
          typeof U.global.require != 'function' &&
          u.config(U.global.require),
        (Y = function () {
          return M.apply(null, arguments);
        }),
        (Y.amd = M.amd),
        typeof doNotInitLoader > 'u' && y());
  })(se || (se = {}));
  var fe =
    (this && this.__awaiter) ||
    function (U, n, A, M) {
      function i(u) {
        return u instanceof A
          ? u
          : new A(function (y) {
              y(u);
            });
      }
      return new (A || (A = Promise))(function (u, y) {
        function v(N) {
          try {
            f(M.next(N));
          } catch (e) {
            y(e);
          }
        }
        function o(N) {
          try {
            f(M.throw(N));
          } catch (e) {
            y(e);
          }
        }
        function f(N) {
          N.done ? u(N.value) : i(N.value).then(v, o);
        }
        f((M = M.apply(U, n || [])).next());
      });
    };
  Y(X[23], Q([0, 1]), function (U, n) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 }),
      (n.load =
        n.create =
        n.setPseudoTranslation =
        n.getConfiguredDefaultLocale =
        n.localize =
          void 0);
    let A =
      typeof document < 'u' &&
      document.location &&
      document.location.hash.indexOf('pseudo=true') >= 0;
    const M = 'i-default';
    function i(b, L) {
      let S;
      return (
        L.length === 0
          ? (S = b)
          : (S = b.replace(/\{(\d+)\}/g, (_, m) => {
              const w = m[0],
                l = L[w];
              let g = _;
              return (
                typeof l == 'string'
                  ? (g = l)
                  : (typeof l == 'number' ||
                      typeof l == 'boolean' ||
                      l === void 0 ||
                      l === null) &&
                    (g = String(l)),
                g
              );
            })),
        A && (S = '\uFF3B' + S.replace(/[aouei]/g, '$&$&') + '\uFF3D'),
        S
      );
    }
    function u(b, L) {
      let S = b[L];
      return S || ((S = b['*']), S) ? S : null;
    }
    function y(b) {
      return b.charAt(b.length - 1) === '/' ? b : b + '/';
    }
    function v(b, L, S) {
      return fe(this, void 0, void 0, function* () {
        const _ = y(b) + y(L) + 'vscode/' + y(S),
          m = yield fetch(_);
        if (m.ok) return yield m.json();
        throw new Error(`${m.status} - ${m.statusText}`);
      });
    }
    function o(b) {
      return function (L, S) {
        const _ = Array.prototype.slice.call(arguments, 2);
        return i(b[L], _);
      };
    }
    function f(b, L, ...S) {
      return i(L, S);
    }
    n.localize = f;
    function N(b) {}
    n.getConfiguredDefaultLocale = N;
    function e(b) {
      A = b;
    }
    n.setPseudoTranslation = e;
    function C(b, L) {
      var S;
      return {
        localize: o(L[b]),
        getConfiguredDefaultLocale:
          (S = L.getConfiguredDefaultLocale) !== null && S !== void 0
            ? S
            : (_) => {},
      };
    }
    n.create = C;
    function h(b, L, S, _) {
      var m;
      const w = (m = _['vs/nls']) !== null && m !== void 0 ? m : {};
      if (!b || b.length === 0)
        return S({
          localize: f,
          getConfiguredDefaultLocale: () => {
            var s;
            return (s = w.availableLanguages) === null || s === void 0
              ? void 0
              : s['*'];
          },
        });
      const l = w.availableLanguages ? u(w.availableLanguages, b) : null,
        g = l === null || l === M;
      let r = '.nls';
      g || (r = r + '.' + l);
      const a = (s) => {
        Array.isArray(s) ? (s.localize = o(s)) : (s.localize = o(s[b])),
          (s.getConfiguredDefaultLocale = () => {
            var c;
            return (c = w.availableLanguages) === null || c === void 0
              ? void 0
              : c['*'];
          }),
          S(s);
      };
      typeof w.loadBundle == 'function'
        ? w.loadBundle(b, l, (s, c) => {
            s ? L([b + '.nls'], a) : a(c);
          })
        : w.translationServiceUrl && !g
        ? fe(this, void 0, void 0, function* () {
            var s;
            try {
              const c = yield v(w.translationServiceUrl, l, b);
              return a(c);
            } catch (c) {
              if (!l.includes('-')) return console.error(c), L([b + '.nls'], a);
              try {
                const d = l.split('-')[0],
                  p = yield v(w.translationServiceUrl, d, b);
                return (
                  ((s = w.availableLanguages) !== null && s !== void 0) ||
                    (w.availableLanguages = {}),
                  (w.availableLanguages['*'] = d),
                  a(p)
                );
              } catch (d) {
                return console.error(d), L([b + '.nls'], a);
              }
            }
          })
        : L([b + r], a, (s) => {
            if (r === '.nls') {
              console.error(
                'Failed trying to load default language strings',
                s,
              );
              return;
            }
            console.error(
              `Failed to load message bundle for language ${l}. Falling back to the default language:`,
              s,
            ),
              L([b + '.nls'], a);
          });
    }
    n.load = h;
  }),
    (function () {
      var U, n;
      const A = self.MonacoEnvironment,
        M = A && A.baseUrl ? A.baseUrl : '../../../',
        i =
          typeof ((U = self.trustedTypes) === null || U === void 0
            ? void 0
            : U.createPolicy) == 'function'
            ? (n = self.trustedTypes) === null || n === void 0
              ? void 0
              : n.createPolicy('amdLoader', {
                  createScriptURL: (e) => e,
                  createScript: (e, ...C) => {
                    const h = C.slice(0, -1).join(','),
                      b = C.pop().toString();
                    return `(function anonymous(${h}) { ${b}
})`;
                  },
                })
            : void 0;
      function u() {
        try {
          return (
            (i
              ? self.eval(i.createScript('', 'true'))
              : new Function('true')
            ).call(self),
            !0
          );
        } catch {
          return !1;
        }
      }
      function y() {
        return new Promise((e, C) => {
          if (typeof self.define == 'function' && self.define.amd) return e();
          const h = M + 'vs/loader.js';
          if (
            !(
              /^((http:)|(https:)|(file:))/.test(h) &&
              h.substring(0, self.origin.length) !== self.origin
            ) &&
            u()
          ) {
            fetch(h)
              .then((L) => {
                if (L.status !== 200) throw new Error(L.statusText);
                return L.text();
              })
              .then((L) => {
                (L = `${L}
//# sourceURL=${h}`),
                  (i ? self.eval(i.createScript('', L)) : new Function(L)).call(
                    self,
                  ),
                  e();
              })
              .then(void 0, C);
            return;
          }
          i ? importScripts(i.createScriptURL(h)) : importScripts(h), e();
        });
      }
      function v() {
        require.config({
          baseUrl: M,
          catchError: !0,
          trustedTypesPolicy: i,
          amdModulesPattern: /^vs\//,
        });
      }
      function o(e) {
        y().then(() => {
          v(),
            require([e], function (C) {
              setTimeout(function () {
                const h = C.create((b, L) => {
                  self.postMessage(b, L);
                }, null);
                for (
                  self.onmessage = (b) => h.onmessage(b.data, b.ports);
                  N.length > 0;

                )
                  self.onmessage(N.shift());
              }, 0);
            });
        });
      }
      typeof self.define == 'function' && self.define.amd && v();
      let f = !0;
      const N = [];
      self.onmessage = (e) => {
        if (!f) {
          N.push(e);
          return;
        }
        (f = !1), o(e.data);
      };
    })(),
    Y(X[24], Q([0, 1]), function (U, n) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.CallbackIterable =
          n.ArrayQueue =
          n.findMinBy =
          n.findLastMaxBy =
          n.findMaxBy =
          n.numberComparator =
          n.compareBy =
          n.CompareResult =
          n.splice =
          n.insertInto =
          n.asArray =
          n.pushMany =
          n.pushToEnd =
          n.pushToStart =
          n.arrayInsert =
          n.range =
          n.firstOrDefault =
          n.lastIndex =
          n.findLast =
          n.distinct =
          n.isNonEmptyArray =
          n.isFalsyOrEmpty =
          n.coalesceInPlace =
          n.coalesce =
          n.groupBy =
          n.quickSelect =
          n.findFirstInSorted =
          n.binarySearch2 =
          n.binarySearch =
          n.removeFastWithoutKeepingOrder =
          n.equals =
          n.tail2 =
          n.tail =
            void 0);
      function A(k, T = 0) {
        return k[k.length - (1 + T)];
      }
      n.tail = A;
      function M(k) {
        if (k.length === 0) throw new Error('Invalid tail call');
        return [k.slice(0, k.length - 1), k[k.length - 1]];
      }
      n.tail2 = M;
      function i(k, T, I = (V, t) => V === t) {
        if (k === T) return !0;
        if (!k || !T || k.length !== T.length) return !1;
        for (let V = 0, t = k.length; V < t; V++) if (!I(k[V], T[V])) return !1;
        return !0;
      }
      n.equals = i;
      function u(k, T) {
        const I = k.length - 1;
        T < I && (k[T] = k[I]), k.pop();
      }
      n.removeFastWithoutKeepingOrder = u;
      function y(k, T, I) {
        return v(k.length, (V) => I(k[V], T));
      }
      n.binarySearch = y;
      function v(k, T) {
        let I = 0,
          V = k - 1;
        for (; I <= V; ) {
          const t = ((I + V) / 2) | 0,
            ne = T(t);
          if (ne < 0) I = t + 1;
          else if (ne > 0) V = t - 1;
          else return t;
        }
        return -(I + 1);
      }
      n.binarySearch2 = v;
      function o(k, T) {
        let I = 0,
          V = k.length;
        if (V === 0) return 0;
        for (; I < V; ) {
          const t = Math.floor((I + V) / 2);
          T(k[t]) ? (V = t) : (I = t + 1);
        }
        return I;
      }
      n.findFirstInSorted = o;
      function f(k, T, I) {
        if (((k = k | 0), k >= T.length)) throw new TypeError('invalid index');
        const V = T[Math.floor(T.length * Math.random())],
          t = [],
          ne = [],
          oe = [];
        for (const de of T) {
          const Le = I(de, V);
          Le < 0 ? t.push(de) : Le > 0 ? ne.push(de) : oe.push(de);
        }
        return k < t.length
          ? f(k, t, I)
          : k < t.length + oe.length
          ? oe[0]
          : f(k - (t.length + oe.length), ne, I);
      }
      n.quickSelect = f;
      function N(k, T) {
        const I = [];
        let V;
        for (const t of k.slice(0).sort(T))
          !V || T(V[0], t) !== 0 ? ((V = [t]), I.push(V)) : V.push(t);
        return I;
      }
      n.groupBy = N;
      function e(k) {
        return k.filter((T) => !!T);
      }
      n.coalesce = e;
      function C(k) {
        let T = 0;
        for (let I = 0; I < k.length; I++) k[I] && ((k[T] = k[I]), (T += 1));
        k.length = T;
      }
      n.coalesceInPlace = C;
      function h(k) {
        return !Array.isArray(k) || k.length === 0;
      }
      n.isFalsyOrEmpty = h;
      function b(k) {
        return Array.isArray(k) && k.length > 0;
      }
      n.isNonEmptyArray = b;
      function L(k, T = (I) => I) {
        const I = new Set();
        return k.filter((V) => {
          const t = T(V);
          return I.has(t) ? !1 : (I.add(t), !0);
        });
      }
      n.distinct = L;
      function S(k, T) {
        const I = _(k, T);
        if (I !== -1) return k[I];
      }
      n.findLast = S;
      function _(k, T) {
        for (let I = k.length - 1; I >= 0; I--) {
          const V = k[I];
          if (T(V)) return I;
        }
        return -1;
      }
      n.lastIndex = _;
      function m(k, T) {
        return k.length > 0 ? k[0] : T;
      }
      n.firstOrDefault = m;
      function w(k, T) {
        let I = typeof T == 'number' ? k : 0;
        typeof T == 'number' ? (I = k) : ((I = 0), (T = k));
        const V = [];
        if (I <= T) for (let t = I; t < T; t++) V.push(t);
        else for (let t = I; t > T; t--) V.push(t);
        return V;
      }
      n.range = w;
      function l(k, T, I) {
        const V = k.slice(0, T),
          t = k.slice(T);
        return V.concat(I, t);
      }
      n.arrayInsert = l;
      function g(k, T) {
        const I = k.indexOf(T);
        I > -1 && (k.splice(I, 1), k.unshift(T));
      }
      n.pushToStart = g;
      function r(k, T) {
        const I = k.indexOf(T);
        I > -1 && (k.splice(I, 1), k.push(T));
      }
      n.pushToEnd = r;
      function a(k, T) {
        for (const I of T) k.push(I);
      }
      n.pushMany = a;
      function s(k) {
        return Array.isArray(k) ? k : [k];
      }
      n.asArray = s;
      function c(k, T, I) {
        const V = p(k, T),
          t = k.length,
          ne = I.length;
        k.length = t + ne;
        for (let oe = t - 1; oe >= V; oe--) k[oe + ne] = k[oe];
        for (let oe = 0; oe < ne; oe++) k[oe + V] = I[oe];
      }
      n.insertInto = c;
      function d(k, T, I, V) {
        const t = p(k, T),
          ne = k.splice(t, I);
        return c(k, t, V), ne;
      }
      n.splice = d;
      function p(k, T) {
        return T < 0 ? Math.max(T + k.length, 0) : Math.min(T, k.length);
      }
      var E;
      (function (k) {
        function T(t) {
          return t < 0;
        }
        k.isLessThan = T;
        function I(t) {
          return t > 0;
        }
        k.isGreaterThan = I;
        function V(t) {
          return t === 0;
        }
        (k.isNeitherLessOrGreaterThan = V),
          (k.greaterThan = 1),
          (k.lessThan = -1),
          (k.neitherLessOrGreaterThan = 0);
      })((E = n.CompareResult || (n.CompareResult = {})));
      function R(k, T) {
        return (I, V) => T(k(I), k(V));
      }
      n.compareBy = R;
      const D = (k, T) => k - T;
      n.numberComparator = D;
      function F(k, T) {
        if (k.length === 0) return;
        let I = k[0];
        for (let V = 1; V < k.length; V++) {
          const t = k[V];
          T(t, I) > 0 && (I = t);
        }
        return I;
      }
      n.findMaxBy = F;
      function W(k, T) {
        if (k.length === 0) return;
        let I = k[0];
        for (let V = 1; V < k.length; V++) {
          const t = k[V];
          T(t, I) >= 0 && (I = t);
        }
        return I;
      }
      n.findLastMaxBy = W;
      function B(k, T) {
        return F(k, (I, V) => -T(I, V));
      }
      n.findMinBy = B;
      class q {
        constructor(T) {
          (this.f = T), (this.c = 0), (this.d = this.f.length - 1);
        }
        get length() {
          return this.d - this.c + 1;
        }
        takeWhile(T) {
          let I = this.c;
          for (; I < this.f.length && T(this.f[I]); ) I++;
          const V = I === this.c ? null : this.f.slice(this.c, I);
          return (this.c = I), V;
        }
        takeFromEndWhile(T) {
          let I = this.d;
          for (; I >= 0 && T(this.f[I]); ) I--;
          const V = I === this.d ? null : this.f.slice(I + 1, this.d + 1);
          return (this.d = I), V;
        }
        peek() {
          if (this.length !== 0) return this.f[this.c];
        }
        dequeue() {
          const T = this.f[this.c];
          return this.c++, T;
        }
        takeCount(T) {
          const I = this.f.slice(this.c, this.c + T);
          return (this.c += T), I;
        }
      }
      n.ArrayQueue = q;
      class G {
        constructor(T) {
          this.iterate = T;
        }
        toArray() {
          const T = [];
          return this.iterate((I) => (T.push(I), !0)), T;
        }
        filter(T) {
          return new G((I) => this.iterate((V) => (T(V) ? I(V) : !0)));
        }
        map(T) {
          return new G((I) => this.iterate((V) => I(T(V))));
        }
        findLast(T) {
          let I;
          return this.iterate((V) => (T(V) && (I = V), !0)), I;
        }
        findLastMaxBy(T) {
          let I,
            V = !0;
          return (
            this.iterate(
              (t) => (
                (V || E.isGreaterThan(T(t, I))) && ((V = !1), (I = t)), !0
              ),
            ),
            I
          );
        }
      }
      (G.empty = new G((k) => {})), (n.CallbackIterable = G);
    }),
    Y(X[25], Q([0, 1]), function (U, n) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.CachedFunction = n.LRUCachedFunction = void 0);
      class A {
        constructor(u) {
          (this.c = u), (this.a = void 0), (this.b = void 0);
        }
        get(u) {
          const y = JSON.stringify(u);
          return this.b !== y && ((this.b = y), (this.a = this.c(u))), this.a;
        }
      }
      n.LRUCachedFunction = A;
      class M {
        get cachedValues() {
          return this.a;
        }
        constructor(u) {
          (this.b = u), (this.a = new Map());
        }
        get(u) {
          if (this.a.has(u)) return this.a.get(u);
          const y = this.b(u);
          return this.a.set(u, y), y;
        }
      }
      n.CachedFunction = M;
    }),
    Y(X[26], Q([0, 1]), function (U, n) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.DiffChange = void 0);
      class A {
        constructor(i, u, y, v) {
          (this.originalStart = i),
            (this.originalLength = u),
            (this.modifiedStart = y),
            (this.modifiedLength = v);
        }
        getOriginalEnd() {
          return this.originalStart + this.originalLength;
        }
        getModifiedEnd() {
          return this.modifiedStart + this.modifiedLength;
        }
      }
      n.DiffChange = A;
    }),
    Y(X[8], Q([0, 1]), function (U, n) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.BugIndicatingError =
          n.ErrorNoTelemetry =
          n.NotSupportedError =
          n.illegalState =
          n.illegalArgument =
          n.canceled =
          n.CancellationError =
          n.isCancellationError =
          n.transformErrorForSerialization =
          n.onUnexpectedExternalError =
          n.onUnexpectedError =
          n.errorHandler =
          n.ErrorHandler =
            void 0);
      class A {
        constructor() {
          (this.b = []),
            (this.a = function (S) {
              setTimeout(() => {
                throw S.stack
                  ? h.isErrorNoTelemetry(S)
                    ? new h(
                        S.message +
                          `

` +
                          S.stack,
                      )
                    : new Error(
                        S.message +
                          `

` +
                          S.stack,
                      )
                  : S;
              }, 0);
            });
        }
        c(S) {
          this.b.forEach((_) => {
            _(S);
          });
        }
        onUnexpectedError(S) {
          this.a(S), this.c(S);
        }
        onUnexpectedExternalError(S) {
          this.a(S);
        }
      }
      (n.ErrorHandler = A), (n.errorHandler = new A());
      function M(L) {
        v(L) || n.errorHandler.onUnexpectedError(L);
      }
      n.onUnexpectedError = M;
      function i(L) {
        v(L) || n.errorHandler.onUnexpectedExternalError(L);
      }
      n.onUnexpectedExternalError = i;
      function u(L) {
        if (L instanceof Error) {
          const { name: S, message: _ } = L,
            m = L.stacktrace || L.stack;
          return {
            $isError: !0,
            name: S,
            message: _,
            stack: m,
            noTelemetry: h.isErrorNoTelemetry(L),
          };
        }
        return L;
      }
      n.transformErrorForSerialization = u;
      const y = 'Canceled';
      function v(L) {
        return L instanceof o
          ? !0
          : L instanceof Error && L.name === y && L.message === y;
      }
      n.isCancellationError = v;
      class o extends Error {
        constructor() {
          super(y), (this.name = this.message);
        }
      }
      n.CancellationError = o;
      function f() {
        const L = new Error(y);
        return (L.name = L.message), L;
      }
      n.canceled = f;
      function N(L) {
        return L
          ? new Error(`Illegal argument: ${L}`)
          : new Error('Illegal argument');
      }
      n.illegalArgument = N;
      function e(L) {
        return L
          ? new Error(`Illegal state: ${L}`)
          : new Error('Illegal state');
      }
      n.illegalState = e;
      class C extends Error {
        constructor(S) {
          super('NotSupported'), S && (this.message = S);
        }
      }
      n.NotSupportedError = C;
      class h extends Error {
        constructor(S) {
          super(S), (this.name = 'CodeExpectedError');
        }
        static fromError(S) {
          if (S instanceof h) return S;
          const _ = new h();
          return (_.message = S.message), (_.stack = S.stack), _;
        }
        static isErrorNoTelemetry(S) {
          return S.name === 'CodeExpectedError';
        }
      }
      n.ErrorNoTelemetry = h;
      class b extends Error {
        constructor(S) {
          super(S || 'An unexpected bug occurred.'),
            Object.setPrototypeOf(this, b.prototype);
          debugger;
        }
      }
      n.BugIndicatingError = b;
    }),
    Y(X[9], Q([0, 1, 8]), function (U, n, A) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.checkAdjacentItems = n.assertFn = n.assertNever = n.ok = void 0);
      function M(v, o) {
        if (!v)
          throw new Error(o ? `Assertion failed (${o})` : 'Assertion Failed');
      }
      n.ok = M;
      function i(v, o = 'Unreachable') {
        throw new Error(o);
      }
      n.assertNever = i;
      function u(v) {
        if (!v()) {
          debugger;
          v(),
            (0, A.onUnexpectedError)(
              new A.BugIndicatingError('Assertion Failed'),
            );
        }
      }
      n.assertFn = u;
      function y(v, o) {
        let f = 0;
        for (; f < v.length - 1; ) {
          const N = v[f],
            e = v[f + 1];
          if (!o(N, e)) return !1;
          f++;
        }
        return !0;
      }
      n.checkAdjacentItems = y;
    }),
    Y(X[13], Q([0, 1]), function (U, n) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }), (n.once = void 0);
      function A(M) {
        const i = this;
        let u = !1,
          y;
        return function () {
          return u || ((u = !0), (y = M.apply(i, arguments))), y;
        };
      }
      n.once = A;
    }),
    Y(X[14], Q([0, 1]), function (U, n) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.Iterable = void 0);
      var A;
      (function (M) {
        function i(l) {
          return (
            l && typeof l == 'object' && typeof l[Symbol.iterator] == 'function'
          );
        }
        M.is = i;
        const u = Object.freeze([]);
        function y() {
          return u;
        }
        M.empty = y;
        function* v(l) {
          yield l;
        }
        M.single = v;
        function o(l) {
          return i(l) ? l : v(l);
        }
        M.wrap = o;
        function f(l) {
          return l || u;
        }
        M.from = f;
        function N(l) {
          return !l || l[Symbol.iterator]().next().done === !0;
        }
        M.isEmpty = N;
        function e(l) {
          return l[Symbol.iterator]().next().value;
        }
        M.first = e;
        function C(l, g) {
          for (const r of l) if (g(r)) return !0;
          return !1;
        }
        M.some = C;
        function h(l, g) {
          for (const r of l) if (g(r)) return r;
        }
        M.find = h;
        function* b(l, g) {
          for (const r of l) g(r) && (yield r);
        }
        M.filter = b;
        function* L(l, g) {
          let r = 0;
          for (const a of l) yield g(a, r++);
        }
        M.map = L;
        function* S(...l) {
          for (const g of l) for (const r of g) yield r;
        }
        M.concat = S;
        function _(l, g, r) {
          let a = r;
          for (const s of l) a = g(a, s);
          return a;
        }
        M.reduce = _;
        function* m(l, g, r = l.length) {
          for (
            g < 0 && (g += l.length),
              r < 0 ? (r += l.length) : r > l.length && (r = l.length);
            g < r;
            g++
          )
            yield l[g];
        }
        M.slice = m;
        function w(l, g = Number.POSITIVE_INFINITY) {
          const r = [];
          if (g === 0) return [r, l];
          const a = l[Symbol.iterator]();
          for (let s = 0; s < g; s++) {
            const c = a.next();
            if (c.done) return [r, M.empty()];
            r.push(c.value);
          }
          return [
            r,
            {
              [Symbol.iterator]() {
                return a;
              },
            },
          ];
        }
        M.consume = w;
      })((A = n.Iterable || (n.Iterable = {})));
    }),
    Y(X[27], Q([0, 1]), function (U, n) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.KeyChord =
          n.KeyCodeUtils =
          n.IMMUTABLE_KEY_CODE_TO_CODE =
          n.IMMUTABLE_CODE_TO_KEY_CODE =
          n.NATIVE_WINDOWS_KEY_CODE_TO_KEY_CODE =
          n.EVENT_KEY_CODE_MAP =
            void 0);
      class A {
        constructor() {
          (this._keyCodeToStr = []), (this._strToKeyCode = Object.create(null));
        }
        define(C, h) {
          (this._keyCodeToStr[C] = h),
            (this._strToKeyCode[h.toLowerCase()] = C);
        }
        keyCodeToStr(C) {
          return this._keyCodeToStr[C];
        }
        strToKeyCode(C) {
          return this._strToKeyCode[C.toLowerCase()] || 0;
        }
      }
      const M = new A(),
        i = new A(),
        u = new A();
      (n.EVENT_KEY_CODE_MAP = new Array(230)),
        (n.NATIVE_WINDOWS_KEY_CODE_TO_KEY_CODE = {});
      const y = [],
        v = Object.create(null),
        o = Object.create(null);
      (n.IMMUTABLE_CODE_TO_KEY_CODE = []), (n.IMMUTABLE_KEY_CODE_TO_CODE = []);
      for (let e = 0; e <= 193; e++) n.IMMUTABLE_CODE_TO_KEY_CODE[e] = -1;
      for (let e = 0; e <= 127; e++) n.IMMUTABLE_KEY_CODE_TO_CODE[e] = -1;
      (function () {
        const e = '',
          C = [
            [0, 1, 0, 'None', 0, 'unknown', 0, 'VK_UNKNOWN', e, e],
            [0, 1, 1, 'Hyper', 0, e, 0, e, e, e],
            [0, 1, 2, 'Super', 0, e, 0, e, e, e],
            [0, 1, 3, 'Fn', 0, e, 0, e, e, e],
            [0, 1, 4, 'FnLock', 0, e, 0, e, e, e],
            [0, 1, 5, 'Suspend', 0, e, 0, e, e, e],
            [0, 1, 6, 'Resume', 0, e, 0, e, e, e],
            [0, 1, 7, 'Turbo', 0, e, 0, e, e, e],
            [0, 1, 8, 'Sleep', 0, e, 0, 'VK_SLEEP', e, e],
            [0, 1, 9, 'WakeUp', 0, e, 0, e, e, e],
            [31, 0, 10, 'KeyA', 31, 'A', 65, 'VK_A', e, e],
            [32, 0, 11, 'KeyB', 32, 'B', 66, 'VK_B', e, e],
            [33, 0, 12, 'KeyC', 33, 'C', 67, 'VK_C', e, e],
            [34, 0, 13, 'KeyD', 34, 'D', 68, 'VK_D', e, e],
            [35, 0, 14, 'KeyE', 35, 'E', 69, 'VK_E', e, e],
            [36, 0, 15, 'KeyF', 36, 'F', 70, 'VK_F', e, e],
            [37, 0, 16, 'KeyG', 37, 'G', 71, 'VK_G', e, e],
            [38, 0, 17, 'KeyH', 38, 'H', 72, 'VK_H', e, e],
            [39, 0, 18, 'KeyI', 39, 'I', 73, 'VK_I', e, e],
            [40, 0, 19, 'KeyJ', 40, 'J', 74, 'VK_J', e, e],
            [41, 0, 20, 'KeyK', 41, 'K', 75, 'VK_K', e, e],
            [42, 0, 21, 'KeyL', 42, 'L', 76, 'VK_L', e, e],
            [43, 0, 22, 'KeyM', 43, 'M', 77, 'VK_M', e, e],
            [44, 0, 23, 'KeyN', 44, 'N', 78, 'VK_N', e, e],
            [45, 0, 24, 'KeyO', 45, 'O', 79, 'VK_O', e, e],
            [46, 0, 25, 'KeyP', 46, 'P', 80, 'VK_P', e, e],
            [47, 0, 26, 'KeyQ', 47, 'Q', 81, 'VK_Q', e, e],
            [48, 0, 27, 'KeyR', 48, 'R', 82, 'VK_R', e, e],
            [49, 0, 28, 'KeyS', 49, 'S', 83, 'VK_S', e, e],
            [50, 0, 29, 'KeyT', 50, 'T', 84, 'VK_T', e, e],
            [51, 0, 30, 'KeyU', 51, 'U', 85, 'VK_U', e, e],
            [52, 0, 31, 'KeyV', 52, 'V', 86, 'VK_V', e, e],
            [53, 0, 32, 'KeyW', 53, 'W', 87, 'VK_W', e, e],
            [54, 0, 33, 'KeyX', 54, 'X', 88, 'VK_X', e, e],
            [55, 0, 34, 'KeyY', 55, 'Y', 89, 'VK_Y', e, e],
            [56, 0, 35, 'KeyZ', 56, 'Z', 90, 'VK_Z', e, e],
            [22, 0, 36, 'Digit1', 22, '1', 49, 'VK_1', e, e],
            [23, 0, 37, 'Digit2', 23, '2', 50, 'VK_2', e, e],
            [24, 0, 38, 'Digit3', 24, '3', 51, 'VK_3', e, e],
            [25, 0, 39, 'Digit4', 25, '4', 52, 'VK_4', e, e],
            [26, 0, 40, 'Digit5', 26, '5', 53, 'VK_5', e, e],
            [27, 0, 41, 'Digit6', 27, '6', 54, 'VK_6', e, e],
            [28, 0, 42, 'Digit7', 28, '7', 55, 'VK_7', e, e],
            [29, 0, 43, 'Digit8', 29, '8', 56, 'VK_8', e, e],
            [30, 0, 44, 'Digit9', 30, '9', 57, 'VK_9', e, e],
            [21, 0, 45, 'Digit0', 21, '0', 48, 'VK_0', e, e],
            [3, 1, 46, 'Enter', 3, 'Enter', 13, 'VK_RETURN', e, e],
            [9, 1, 47, 'Escape', 9, 'Escape', 27, 'VK_ESCAPE', e, e],
            [1, 1, 48, 'Backspace', 1, 'Backspace', 8, 'VK_BACK', e, e],
            [2, 1, 49, 'Tab', 2, 'Tab', 9, 'VK_TAB', e, e],
            [10, 1, 50, 'Space', 10, 'Space', 32, 'VK_SPACE', e, e],
            [
              83,
              0,
              51,
              'Minus',
              83,
              '-',
              189,
              'VK_OEM_MINUS',
              '-',
              'OEM_MINUS',
            ],
            [81, 0, 52, 'Equal', 81, '=', 187, 'VK_OEM_PLUS', '=', 'OEM_PLUS'],
            [87, 0, 53, 'BracketLeft', 87, '[', 219, 'VK_OEM_4', '[', 'OEM_4'],
            [89, 0, 54, 'BracketRight', 89, ']', 221, 'VK_OEM_6', ']', 'OEM_6'],
            [88, 0, 55, 'Backslash', 88, '\\', 220, 'VK_OEM_5', '\\', 'OEM_5'],
            [0, 0, 56, 'IntlHash', 0, e, 0, e, e, e],
            [80, 0, 57, 'Semicolon', 80, ';', 186, 'VK_OEM_1', ';', 'OEM_1'],
            [90, 0, 58, 'Quote', 90, "'", 222, 'VK_OEM_7', "'", 'OEM_7'],
            [86, 0, 59, 'Backquote', 86, '`', 192, 'VK_OEM_3', '`', 'OEM_3'],
            [
              82,
              0,
              60,
              'Comma',
              82,
              ',',
              188,
              'VK_OEM_COMMA',
              ',',
              'OEM_COMMA',
            ],
            [
              84,
              0,
              61,
              'Period',
              84,
              '.',
              190,
              'VK_OEM_PERIOD',
              '.',
              'OEM_PERIOD',
            ],
            [85, 0, 62, 'Slash', 85, '/', 191, 'VK_OEM_2', '/', 'OEM_2'],
            [8, 1, 63, 'CapsLock', 8, 'CapsLock', 20, 'VK_CAPITAL', e, e],
            [59, 1, 64, 'F1', 59, 'F1', 112, 'VK_F1', e, e],
            [60, 1, 65, 'F2', 60, 'F2', 113, 'VK_F2', e, e],
            [61, 1, 66, 'F3', 61, 'F3', 114, 'VK_F3', e, e],
            [62, 1, 67, 'F4', 62, 'F4', 115, 'VK_F4', e, e],
            [63, 1, 68, 'F5', 63, 'F5', 116, 'VK_F5', e, e],
            [64, 1, 69, 'F6', 64, 'F6', 117, 'VK_F6', e, e],
            [65, 1, 70, 'F7', 65, 'F7', 118, 'VK_F7', e, e],
            [66, 1, 71, 'F8', 66, 'F8', 119, 'VK_F8', e, e],
            [67, 1, 72, 'F9', 67, 'F9', 120, 'VK_F9', e, e],
            [68, 1, 73, 'F10', 68, 'F10', 121, 'VK_F10', e, e],
            [69, 1, 74, 'F11', 69, 'F11', 122, 'VK_F11', e, e],
            [70, 1, 75, 'F12', 70, 'F12', 123, 'VK_F12', e, e],
            [0, 1, 76, 'PrintScreen', 0, e, 0, e, e, e],
            [79, 1, 77, 'ScrollLock', 79, 'ScrollLock', 145, 'VK_SCROLL', e, e],
            [7, 1, 78, 'Pause', 7, 'PauseBreak', 19, 'VK_PAUSE', e, e],
            [19, 1, 79, 'Insert', 19, 'Insert', 45, 'VK_INSERT', e, e],
            [14, 1, 80, 'Home', 14, 'Home', 36, 'VK_HOME', e, e],
            [11, 1, 81, 'PageUp', 11, 'PageUp', 33, 'VK_PRIOR', e, e],
            [20, 1, 82, 'Delete', 20, 'Delete', 46, 'VK_DELETE', e, e],
            [13, 1, 83, 'End', 13, 'End', 35, 'VK_END', e, e],
            [12, 1, 84, 'PageDown', 12, 'PageDown', 34, 'VK_NEXT', e, e],
            [
              17,
              1,
              85,
              'ArrowRight',
              17,
              'RightArrow',
              39,
              'VK_RIGHT',
              'Right',
              e,
            ],
            [15, 1, 86, 'ArrowLeft', 15, 'LeftArrow', 37, 'VK_LEFT', 'Left', e],
            [18, 1, 87, 'ArrowDown', 18, 'DownArrow', 40, 'VK_DOWN', 'Down', e],
            [16, 1, 88, 'ArrowUp', 16, 'UpArrow', 38, 'VK_UP', 'Up', e],
            [78, 1, 89, 'NumLock', 78, 'NumLock', 144, 'VK_NUMLOCK', e, e],
            [
              108,
              1,
              90,
              'NumpadDivide',
              108,
              'NumPad_Divide',
              111,
              'VK_DIVIDE',
              e,
              e,
            ],
            [
              103,
              1,
              91,
              'NumpadMultiply',
              103,
              'NumPad_Multiply',
              106,
              'VK_MULTIPLY',
              e,
              e,
            ],
            [
              106,
              1,
              92,
              'NumpadSubtract',
              106,
              'NumPad_Subtract',
              109,
              'VK_SUBTRACT',
              e,
              e,
            ],
            [104, 1, 93, 'NumpadAdd', 104, 'NumPad_Add', 107, 'VK_ADD', e, e],
            [3, 1, 94, 'NumpadEnter', 3, e, 0, e, e, e],
            [94, 1, 95, 'Numpad1', 94, 'NumPad1', 97, 'VK_NUMPAD1', e, e],
            [95, 1, 96, 'Numpad2', 95, 'NumPad2', 98, 'VK_NUMPAD2', e, e],
            [96, 1, 97, 'Numpad3', 96, 'NumPad3', 99, 'VK_NUMPAD3', e, e],
            [97, 1, 98, 'Numpad4', 97, 'NumPad4', 100, 'VK_NUMPAD4', e, e],
            [98, 1, 99, 'Numpad5', 98, 'NumPad5', 101, 'VK_NUMPAD5', e, e],
            [99, 1, 100, 'Numpad6', 99, 'NumPad6', 102, 'VK_NUMPAD6', e, e],
            [100, 1, 101, 'Numpad7', 100, 'NumPad7', 103, 'VK_NUMPAD7', e, e],
            [101, 1, 102, 'Numpad8', 101, 'NumPad8', 104, 'VK_NUMPAD8', e, e],
            [102, 1, 103, 'Numpad9', 102, 'NumPad9', 105, 'VK_NUMPAD9', e, e],
            [93, 1, 104, 'Numpad0', 93, 'NumPad0', 96, 'VK_NUMPAD0', e, e],
            [
              107,
              1,
              105,
              'NumpadDecimal',
              107,
              'NumPad_Decimal',
              110,
              'VK_DECIMAL',
              e,
              e,
            ],
            [
              92,
              0,
              106,
              'IntlBackslash',
              92,
              'OEM_102',
              226,
              'VK_OEM_102',
              e,
              e,
            ],
            [58, 1, 107, 'ContextMenu', 58, 'ContextMenu', 93, e, e, e],
            [0, 1, 108, 'Power', 0, e, 0, e, e, e],
            [0, 1, 109, 'NumpadEqual', 0, e, 0, e, e, e],
            [71, 1, 110, 'F13', 71, 'F13', 124, 'VK_F13', e, e],
            [72, 1, 111, 'F14', 72, 'F14', 125, 'VK_F14', e, e],
            [73, 1, 112, 'F15', 73, 'F15', 126, 'VK_F15', e, e],
            [74, 1, 113, 'F16', 74, 'F16', 127, 'VK_F16', e, e],
            [75, 1, 114, 'F17', 75, 'F17', 128, 'VK_F17', e, e],
            [76, 1, 115, 'F18', 76, 'F18', 129, 'VK_F18', e, e],
            [77, 1, 116, 'F19', 77, 'F19', 130, 'VK_F19', e, e],
            [0, 1, 117, 'F20', 0, e, 0, 'VK_F20', e, e],
            [0, 1, 118, 'F21', 0, e, 0, 'VK_F21', e, e],
            [0, 1, 119, 'F22', 0, e, 0, 'VK_F22', e, e],
            [0, 1, 120, 'F23', 0, e, 0, 'VK_F23', e, e],
            [0, 1, 121, 'F24', 0, e, 0, 'VK_F24', e, e],
            [0, 1, 122, 'Open', 0, e, 0, e, e, e],
            [0, 1, 123, 'Help', 0, e, 0, e, e, e],
            [0, 1, 124, 'Select', 0, e, 0, e, e, e],
            [0, 1, 125, 'Again', 0, e, 0, e, e, e],
            [0, 1, 126, 'Undo', 0, e, 0, e, e, e],
            [0, 1, 127, 'Cut', 0, e, 0, e, e, e],
            [0, 1, 128, 'Copy', 0, e, 0, e, e, e],
            [0, 1, 129, 'Paste', 0, e, 0, e, e, e],
            [0, 1, 130, 'Find', 0, e, 0, e, e, e],
            [
              0,
              1,
              131,
              'AudioVolumeMute',
              112,
              'AudioVolumeMute',
              173,
              'VK_VOLUME_MUTE',
              e,
              e,
            ],
            [
              0,
              1,
              132,
              'AudioVolumeUp',
              113,
              'AudioVolumeUp',
              175,
              'VK_VOLUME_UP',
              e,
              e,
            ],
            [
              0,
              1,
              133,
              'AudioVolumeDown',
              114,
              'AudioVolumeDown',
              174,
              'VK_VOLUME_DOWN',
              e,
              e,
            ],
            [
              105,
              1,
              134,
              'NumpadComma',
              105,
              'NumPad_Separator',
              108,
              'VK_SEPARATOR',
              e,
              e,
            ],
            [110, 0, 135, 'IntlRo', 110, 'ABNT_C1', 193, 'VK_ABNT_C1', e, e],
            [0, 1, 136, 'KanaMode', 0, e, 0, e, e, e],
            [0, 0, 137, 'IntlYen', 0, e, 0, e, e, e],
            [0, 1, 138, 'Convert', 0, e, 0, e, e, e],
            [0, 1, 139, 'NonConvert', 0, e, 0, e, e, e],
            [0, 1, 140, 'Lang1', 0, e, 0, e, e, e],
            [0, 1, 141, 'Lang2', 0, e, 0, e, e, e],
            [0, 1, 142, 'Lang3', 0, e, 0, e, e, e],
            [0, 1, 143, 'Lang4', 0, e, 0, e, e, e],
            [0, 1, 144, 'Lang5', 0, e, 0, e, e, e],
            [0, 1, 145, 'Abort', 0, e, 0, e, e, e],
            [0, 1, 146, 'Props', 0, e, 0, e, e, e],
            [0, 1, 147, 'NumpadParenLeft', 0, e, 0, e, e, e],
            [0, 1, 148, 'NumpadParenRight', 0, e, 0, e, e, e],
            [0, 1, 149, 'NumpadBackspace', 0, e, 0, e, e, e],
            [0, 1, 150, 'NumpadMemoryStore', 0, e, 0, e, e, e],
            [0, 1, 151, 'NumpadMemoryRecall', 0, e, 0, e, e, e],
            [0, 1, 152, 'NumpadMemoryClear', 0, e, 0, e, e, e],
            [0, 1, 153, 'NumpadMemoryAdd', 0, e, 0, e, e, e],
            [0, 1, 154, 'NumpadMemorySubtract', 0, e, 0, e, e, e],
            [0, 1, 155, 'NumpadClear', 126, 'Clear', 12, 'VK_CLEAR', e, e],
            [0, 1, 156, 'NumpadClearEntry', 0, e, 0, e, e, e],
            [5, 1, 0, e, 5, 'Ctrl', 17, 'VK_CONTROL', e, e],
            [4, 1, 0, e, 4, 'Shift', 16, 'VK_SHIFT', e, e],
            [6, 1, 0, e, 6, 'Alt', 18, 'VK_MENU', e, e],
            [57, 1, 0, e, 57, 'Meta', 0, 'VK_COMMAND', e, e],
            [5, 1, 157, 'ControlLeft', 5, e, 0, 'VK_LCONTROL', e, e],
            [4, 1, 158, 'ShiftLeft', 4, e, 0, 'VK_LSHIFT', e, e],
            [6, 1, 159, 'AltLeft', 6, e, 0, 'VK_LMENU', e, e],
            [57, 1, 160, 'MetaLeft', 57, e, 0, 'VK_LWIN', e, e],
            [5, 1, 161, 'ControlRight', 5, e, 0, 'VK_RCONTROL', e, e],
            [4, 1, 162, 'ShiftRight', 4, e, 0, 'VK_RSHIFT', e, e],
            [6, 1, 163, 'AltRight', 6, e, 0, 'VK_RMENU', e, e],
            [57, 1, 164, 'MetaRight', 57, e, 0, 'VK_RWIN', e, e],
            [0, 1, 165, 'BrightnessUp', 0, e, 0, e, e, e],
            [0, 1, 166, 'BrightnessDown', 0, e, 0, e, e, e],
            [0, 1, 167, 'MediaPlay', 0, e, 0, e, e, e],
            [0, 1, 168, 'MediaRecord', 0, e, 0, e, e, e],
            [0, 1, 169, 'MediaFastForward', 0, e, 0, e, e, e],
            [0, 1, 170, 'MediaRewind', 0, e, 0, e, e, e],
            [
              114,
              1,
              171,
              'MediaTrackNext',
              119,
              'MediaTrackNext',
              176,
              'VK_MEDIA_NEXT_TRACK',
              e,
              e,
            ],
            [
              115,
              1,
              172,
              'MediaTrackPrevious',
              120,
              'MediaTrackPrevious',
              177,
              'VK_MEDIA_PREV_TRACK',
              e,
              e,
            ],
            [
              116,
              1,
              173,
              'MediaStop',
              121,
              'MediaStop',
              178,
              'VK_MEDIA_STOP',
              e,
              e,
            ],
            [0, 1, 174, 'Eject', 0, e, 0, e, e, e],
            [
              117,
              1,
              175,
              'MediaPlayPause',
              122,
              'MediaPlayPause',
              179,
              'VK_MEDIA_PLAY_PAUSE',
              e,
              e,
            ],
            [
              0,
              1,
              176,
              'MediaSelect',
              123,
              'LaunchMediaPlayer',
              181,
              'VK_MEDIA_LAUNCH_MEDIA_SELECT',
              e,
              e,
            ],
            [
              0,
              1,
              177,
              'LaunchMail',
              124,
              'LaunchMail',
              180,
              'VK_MEDIA_LAUNCH_MAIL',
              e,
              e,
            ],
            [
              0,
              1,
              178,
              'LaunchApp2',
              125,
              'LaunchApp2',
              183,
              'VK_MEDIA_LAUNCH_APP2',
              e,
              e,
            ],
            [0, 1, 179, 'LaunchApp1', 0, e, 0, 'VK_MEDIA_LAUNCH_APP1', e, e],
            [0, 1, 180, 'SelectTask', 0, e, 0, e, e, e],
            [0, 1, 181, 'LaunchScreenSaver', 0, e, 0, e, e, e],
            [
              0,
              1,
              182,
              'BrowserSearch',
              115,
              'BrowserSearch',
              170,
              'VK_BROWSER_SEARCH',
              e,
              e,
            ],
            [
              0,
              1,
              183,
              'BrowserHome',
              116,
              'BrowserHome',
              172,
              'VK_BROWSER_HOME',
              e,
              e,
            ],
            [
              112,
              1,
              184,
              'BrowserBack',
              117,
              'BrowserBack',
              166,
              'VK_BROWSER_BACK',
              e,
              e,
            ],
            [
              113,
              1,
              185,
              'BrowserForward',
              118,
              'BrowserForward',
              167,
              'VK_BROWSER_FORWARD',
              e,
              e,
            ],
            [0, 1, 186, 'BrowserStop', 0, e, 0, 'VK_BROWSER_STOP', e, e],
            [0, 1, 187, 'BrowserRefresh', 0, e, 0, 'VK_BROWSER_REFRESH', e, e],
            [
              0,
              1,
              188,
              'BrowserFavorites',
              0,
              e,
              0,
              'VK_BROWSER_FAVORITES',
              e,
              e,
            ],
            [0, 1, 189, 'ZoomToggle', 0, e, 0, e, e, e],
            [0, 1, 190, 'MailReply', 0, e, 0, e, e, e],
            [0, 1, 191, 'MailForward', 0, e, 0, e, e, e],
            [0, 1, 192, 'MailSend', 0, e, 0, e, e, e],
            [109, 1, 0, e, 109, 'KeyInComposition', 229, e, e, e],
            [111, 1, 0, e, 111, 'ABNT_C2', 194, 'VK_ABNT_C2', e, e],
            [91, 1, 0, e, 91, 'OEM_8', 223, 'VK_OEM_8', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_KANA', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_HANGUL', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_JUNJA', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_FINAL', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_HANJA', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_KANJI', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_CONVERT', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_NONCONVERT', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_ACCEPT', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_MODECHANGE', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_SELECT', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_PRINT', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_EXECUTE', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_SNAPSHOT', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_HELP', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_APPS', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_PROCESSKEY', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_PACKET', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_DBE_SBCSCHAR', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_DBE_DBCSCHAR', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_ATTN', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_CRSEL', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_EXSEL', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_EREOF', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_PLAY', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_ZOOM', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_NONAME', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_PA1', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_OEM_CLEAR', e, e],
          ],
          h = [],
          b = [];
        for (const L of C) {
          const [S, _, m, w, l, g, r, a, s, c] = L;
          if (
            (b[m] ||
              ((b[m] = !0),
              (y[m] = w),
              (v[w] = m),
              (o[w.toLowerCase()] = m),
              _ &&
                ((n.IMMUTABLE_CODE_TO_KEY_CODE[m] = l),
                l !== 0 &&
                  l !== 3 &&
                  l !== 5 &&
                  l !== 4 &&
                  l !== 6 &&
                  l !== 57 &&
                  (n.IMMUTABLE_KEY_CODE_TO_CODE[l] = m))),
            !h[l])
          ) {
            if (((h[l] = !0), !g))
              throw new Error(
                `String representation missing for key code ${l} around scan code ${w}`,
              );
            M.define(l, g), i.define(l, s || g), u.define(l, c || s || g);
          }
          r && (n.EVENT_KEY_CODE_MAP[r] = l),
            a && (n.NATIVE_WINDOWS_KEY_CODE_TO_KEY_CODE[a] = l);
        }
        n.IMMUTABLE_KEY_CODE_TO_CODE[3] = 46;
      })();
      var f;
      (function (e) {
        function C(m) {
          return M.keyCodeToStr(m);
        }
        e.toString = C;
        function h(m) {
          return M.strToKeyCode(m);
        }
        e.fromString = h;
        function b(m) {
          return i.keyCodeToStr(m);
        }
        e.toUserSettingsUS = b;
        function L(m) {
          return u.keyCodeToStr(m);
        }
        e.toUserSettingsGeneral = L;
        function S(m) {
          return i.strToKeyCode(m) || u.strToKeyCode(m);
        }
        e.fromUserSettings = S;
        function _(m) {
          if (m >= 93 && m <= 108) return null;
          switch (m) {
            case 16:
              return 'Up';
            case 18:
              return 'Down';
            case 15:
              return 'Left';
            case 17:
              return 'Right';
          }
          return M.keyCodeToStr(m);
        }
        e.toElectronAccelerator = _;
      })((f = n.KeyCodeUtils || (n.KeyCodeUtils = {})));
      function N(e, C) {
        const h = ((C & 65535) << 16) >>> 0;
        return (e | h) >>> 0;
      }
      n.KeyChord = N;
    }),
    Y(X[28], Q([0, 1]), function (U, n) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }), (n.Lazy = void 0);
      class A {
        constructor(i) {
          (this.d = i), (this.a = !1);
        }
        get value() {
          if (!this.a)
            try {
              this.b = this.d();
            } catch (i) {
              this.c = i;
            } finally {
              this.a = !0;
            }
          if (this.c) throw this.c;
          return this.b;
        }
        get rawValue() {
          return this.b;
        }
      }
      n.Lazy = A;
    }),
    Y(X[10], Q([0, 1, 13, 14]), function (U, n, A, M) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.DisposableMap =
          n.ImmortalReference =
          n.SafeDisposable =
          n.RefCountedDisposable =
          n.MutableDisposable =
          n.Disposable =
          n.DisposableStore =
          n.toDisposable =
          n.combinedDisposable =
          n.dispose =
          n.isDisposable =
          n.markAsSingleton =
          n.setDisposableTracker =
            void 0);
      const i = !1;
      let u = null;
      function y(a) {
        u = a;
      }
      if (((n.setDisposableTracker = y), i)) {
        const a = '__is_disposable_tracked__';
        y(
          new (class {
            trackDisposable(s) {
              const c = new Error('Potentially leaked disposable').stack;
              setTimeout(() => {
                s[a] || console.log(c);
              }, 3e3);
            }
            setParent(s, c) {
              if (s && s !== _.None)
                try {
                  s[a] = !0;
                } catch {}
            }
            markAsDisposed(s) {
              if (s && s !== _.None)
                try {
                  s[a] = !0;
                } catch {}
            }
            markAsSingleton(s) {}
          })(),
        );
      }
      function v(a) {
        return u?.trackDisposable(a), a;
      }
      function o(a) {
        u?.markAsDisposed(a);
      }
      function f(a, s) {
        u?.setParent(a, s);
      }
      function N(a, s) {
        if (!!u) for (const c of a) u.setParent(c, s);
      }
      function e(a) {
        return u?.markAsSingleton(a), a;
      }
      n.markAsSingleton = e;
      function C(a) {
        return typeof a.dispose == 'function' && a.dispose.length === 0;
      }
      n.isDisposable = C;
      function h(a) {
        if (M.Iterable.is(a)) {
          const s = [];
          for (const c of a)
            if (c)
              try {
                c.dispose();
              } catch (d) {
                s.push(d);
              }
          if (s.length === 1) throw s[0];
          if (s.length > 1)
            throw new AggregateError(
              s,
              'Encountered errors while disposing of store',
            );
          return Array.isArray(a) ? [] : a;
        } else if (a) return a.dispose(), a;
      }
      n.dispose = h;
      function b(...a) {
        const s = L(() => h(a));
        return N(a, s), s;
      }
      n.combinedDisposable = b;
      function L(a) {
        const s = v({
          dispose: (0, A.once)(() => {
            o(s), a();
          }),
        });
        return s;
      }
      n.toDisposable = L;
      class S {
        constructor() {
          (this.a = new Set()), (this.b = !1), v(this);
        }
        dispose() {
          this.b || (o(this), (this.b = !0), this.clear());
        }
        get isDisposed() {
          return this.b;
        }
        clear() {
          if (this.a.size !== 0)
            try {
              h(this.a);
            } finally {
              this.a.clear();
            }
        }
        add(s) {
          if (!s) return s;
          if (s === this)
            throw new Error('Cannot register a disposable on itself!');
          return (
            f(s, this),
            this.b
              ? S.DISABLE_DISPOSED_WARNING ||
                console.warn(
                  new Error(
                    'Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!',
                  ).stack,
                )
              : this.a.add(s),
            s
          );
        }
      }
      (S.DISABLE_DISPOSED_WARNING = !1), (n.DisposableStore = S);
      class _ {
        constructor() {
          (this.f = new S()), v(this), f(this.f, this);
        }
        dispose() {
          o(this), this.f.dispose();
        }
        q(s) {
          if (s === this)
            throw new Error('Cannot register a disposable on itself!');
          return this.f.add(s);
        }
      }
      (_.None = Object.freeze({ dispose() {} })), (n.Disposable = _);
      class m {
        constructor() {
          (this.b = !1), v(this);
        }
        get value() {
          return this.b ? void 0 : this.a;
        }
        set value(s) {
          var c;
          this.b ||
            s === this.a ||
            ((c = this.a) === null || c === void 0 || c.dispose(),
            s && f(s, this),
            (this.a = s));
        }
        clear() {
          this.value = void 0;
        }
        dispose() {
          var s;
          (this.b = !0),
            o(this),
            (s = this.a) === null || s === void 0 || s.dispose(),
            (this.a = void 0);
        }
        clearAndLeak() {
          const s = this.a;
          return (this.a = void 0), s && f(s, null), s;
        }
      }
      n.MutableDisposable = m;
      class w {
        constructor(s) {
          (this.b = s), (this.a = 1);
        }
        acquire() {
          return this.a++, this;
        }
        release() {
          return --this.a === 0 && this.b.dispose(), this;
        }
      }
      n.RefCountedDisposable = w;
      class l {
        constructor() {
          (this.dispose = () => {}),
            (this.unset = () => {}),
            (this.isset = () => !1),
            v(this);
        }
        set(s) {
          let c = s;
          return (
            (this.unset = () => (c = void 0)),
            (this.isset = () => c !== void 0),
            (this.dispose = () => {
              c && (c(), (c = void 0), o(this));
            }),
            this
          );
        }
      }
      n.SafeDisposable = l;
      class g {
        constructor(s) {
          this.object = s;
        }
        dispose() {}
      }
      n.ImmortalReference = g;
      class r {
        constructor() {
          (this.a = new Map()), (this.b = !1), v(this);
        }
        dispose() {
          o(this), (this.b = !0), this.clearAndDisposeAll();
        }
        clearAndDisposeAll() {
          if (!!this.a.size)
            try {
              h(this.a.values());
            } finally {
              this.a.clear();
            }
        }
        get(s) {
          return this.a.get(s);
        }
        set(s, c, d = !1) {
          var p;
          this.b &&
            console.warn(
              new Error(
                'Trying to add a disposable to a DisposableMap that has already been disposed of. The added object will be leaked!',
              ).stack,
            ),
            d || (p = this.a.get(s)) === null || p === void 0 || p.dispose(),
            this.a.set(s, c);
        }
        [Symbol.iterator]() {
          return this.a[Symbol.iterator]();
        }
      }
      n.DisposableMap = r;
    }),
    Y(X[15], Q([0, 1]), function (U, n) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.LinkedList = void 0);
      class A {
        constructor(u) {
          (this.element = u),
            (this.next = A.Undefined),
            (this.prev = A.Undefined);
        }
      }
      A.Undefined = new A(void 0);
      class M {
        constructor() {
          (this.a = A.Undefined), (this.b = A.Undefined), (this.c = 0);
        }
        get size() {
          return this.c;
        }
        isEmpty() {
          return this.a === A.Undefined;
        }
        clear() {
          let u = this.a;
          for (; u !== A.Undefined; ) {
            const y = u.next;
            (u.prev = A.Undefined), (u.next = A.Undefined), (u = y);
          }
          (this.a = A.Undefined), (this.b = A.Undefined), (this.c = 0);
        }
        unshift(u) {
          return this.d(u, !1);
        }
        push(u) {
          return this.d(u, !0);
        }
        d(u, y) {
          const v = new A(u);
          if (this.a === A.Undefined) (this.a = v), (this.b = v);
          else if (y) {
            const f = this.b;
            (this.b = v), (v.prev = f), (f.next = v);
          } else {
            const f = this.a;
            (this.a = v), (v.next = f), (f.prev = v);
          }
          this.c += 1;
          let o = !1;
          return () => {
            o || ((o = !0), this.e(v));
          };
        }
        shift() {
          if (this.a !== A.Undefined) {
            const u = this.a.element;
            return this.e(this.a), u;
          }
        }
        pop() {
          if (this.b !== A.Undefined) {
            const u = this.b.element;
            return this.e(this.b), u;
          }
        }
        e(u) {
          if (u.prev !== A.Undefined && u.next !== A.Undefined) {
            const y = u.prev;
            (y.next = u.next), (u.next.prev = y);
          } else u.prev === A.Undefined && u.next === A.Undefined ? ((this.a = A.Undefined), (this.b = A.Undefined)) : u.next === A.Undefined ? ((this.b = this.b.prev), (this.b.next = A.Undefined)) : u.prev === A.Undefined && ((this.a = this.a.next), (this.a.prev = A.Undefined));
          this.c -= 1;
        }
        *[Symbol.iterator]() {
          let u = this.a;
          for (; u !== A.Undefined; ) yield u.element, (u = u.next);
        }
      }
      n.LinkedList = M;
    }),
    Y(X[4], Q([0, 1, 25, 28]), function (U, n, A, M) {
      'use strict';
      var i;
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.InvisibleCharacters =
          n.AmbiguousCharacters =
          n.noBreakWhitespace =
          n.getLeftDeleteOffset =
          n.singleLetterHash =
          n.containsUppercaseCharacter =
          n.startsWithUTF8BOM =
          n.UTF8_BOM_CHARACTER =
          n.isEmojiImprecise =
          n.isFullWidthCharacter =
          n.containsUnusualLineTerminators =
          n.UNUSUAL_LINE_TERMINATORS =
          n.isBasicASCII =
          n.containsRTL =
          n.getCharContainingOffset =
          n.prevCharLength =
          n.nextCharLength =
          n.GraphemeIterator =
          n.CodePointIterator =
          n.getNextCodePoint =
          n.computeCodePoint =
          n.isLowSurrogate =
          n.isHighSurrogate =
          n.commonSuffixLength =
          n.commonPrefixLength =
          n.startsWithIgnoreCase =
          n.equalsIgnoreCase =
          n.isUpperAsciiLetter =
          n.isLowerAsciiLetter =
          n.isAsciiDigit =
          n.compareSubstringIgnoreCase =
          n.compareIgnoreCase =
          n.compareSubstring =
          n.compare =
          n.lastNonWhitespaceIndex =
          n.getLeadingWhitespace =
          n.firstNonWhitespaceIndex =
          n.splitLines =
          n.regExpFlags =
          n.regExpLeadsToEndlessLoop =
          n.createRegExp =
          n.stripWildcards =
          n.convertSimple2RegExpPattern =
          n.rtrim =
          n.ltrim =
          n.trim =
          n.escapeRegExpCharacters =
          n.escape =
          n.format =
          n.isFalsyOrWhitespace =
            void 0);
      function u(P) {
        return !P || typeof P != 'string' ? !0 : P.trim().length === 0;
      }
      n.isFalsyOrWhitespace = u;
      const y = /{(\d+)}/g;
      function v(P, ...O) {
        return O.length === 0
          ? P
          : P.replace(y, function (x, z) {
              const Z = parseInt(z, 10);
              return isNaN(Z) || Z < 0 || Z >= O.length ? x : O[Z];
            });
      }
      n.format = v;
      function o(P) {
        return P.replace(/[<>&]/g, function (O) {
          switch (O) {
            case '<':
              return '&lt;';
            case '>':
              return '&gt;';
            case '&':
              return '&amp;';
            default:
              return O;
          }
        });
      }
      n.escape = o;
      function f(P) {
        return P.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, '\\$&');
      }
      n.escapeRegExpCharacters = f;
      function N(P, O = ' ') {
        const x = e(P, O);
        return C(x, O);
      }
      n.trim = N;
      function e(P, O) {
        if (!P || !O) return P;
        const x = O.length;
        if (x === 0 || P.length === 0) return P;
        let z = 0;
        for (; P.indexOf(O, z) === z; ) z = z + x;
        return P.substring(z);
      }
      n.ltrim = e;
      function C(P, O) {
        if (!P || !O) return P;
        const x = O.length,
          z = P.length;
        if (x === 0 || z === 0) return P;
        let Z = z,
          ie = -1;
        for (; (ie = P.lastIndexOf(O, Z - 1)), !(ie === -1 || ie + x !== Z); ) {
          if (ie === 0) return '';
          Z = ie;
        }
        return P.substring(0, Z);
      }
      n.rtrim = C;
      function h(P) {
        return P.replace(
          /[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g,
          '\\$&',
        ).replace(/[\*]/g, '.*');
      }
      n.convertSimple2RegExpPattern = h;
      function b(P) {
        return P.replace(/\*/g, '');
      }
      n.stripWildcards = b;
      function L(P, O, x = {}) {
        if (!P) throw new Error('Cannot create regex from empty string');
        O || (P = f(P)),
          x.wholeWord &&
            (/\B/.test(P.charAt(0)) || (P = '\\b' + P),
            /\B/.test(P.charAt(P.length - 1)) || (P = P + '\\b'));
        let z = '';
        return (
          x.global && (z += 'g'),
          x.matchCase || (z += 'i'),
          x.multiline && (z += 'm'),
          x.unicode && (z += 'u'),
          new RegExp(P, z)
        );
      }
      n.createRegExp = L;
      function S(P) {
        return P.source === '^' ||
          P.source === '^$' ||
          P.source === '$' ||
          P.source === '^\\s*$'
          ? !1
          : !!(P.exec('') && P.lastIndex === 0);
      }
      n.regExpLeadsToEndlessLoop = S;
      function _(P) {
        return (
          (P.global ? 'g' : '') +
          (P.ignoreCase ? 'i' : '') +
          (P.multiline ? 'm' : '') +
          (P.unicode ? 'u' : '')
        );
      }
      n.regExpFlags = _;
      function m(P) {
        return P.split(/\r\n|\r|\n/);
      }
      n.splitLines = m;
      function w(P) {
        for (let O = 0, x = P.length; O < x; O++) {
          const z = P.charCodeAt(O);
          if (z !== 32 && z !== 9) return O;
        }
        return -1;
      }
      n.firstNonWhitespaceIndex = w;
      function l(P, O = 0, x = P.length) {
        for (let z = O; z < x; z++) {
          const Z = P.charCodeAt(z);
          if (Z !== 32 && Z !== 9) return P.substring(O, z);
        }
        return P.substring(O, x);
      }
      n.getLeadingWhitespace = l;
      function g(P, O = P.length - 1) {
        for (let x = O; x >= 0; x--) {
          const z = P.charCodeAt(x);
          if (z !== 32 && z !== 9) return x;
        }
        return -1;
      }
      n.lastNonWhitespaceIndex = g;
      function r(P, O) {
        return P < O ? -1 : P > O ? 1 : 0;
      }
      n.compare = r;
      function a(P, O, x = 0, z = P.length, Z = 0, ie = O.length) {
        for (; x < z && Z < ie; x++, Z++) {
          const ge = P.charCodeAt(x),
            re = O.charCodeAt(Z);
          if (ge < re) return -1;
          if (ge > re) return 1;
        }
        const ue = z - x,
          Ce = ie - Z;
        return ue < Ce ? -1 : ue > Ce ? 1 : 0;
      }
      n.compareSubstring = a;
      function s(P, O) {
        return c(P, O, 0, P.length, 0, O.length);
      }
      n.compareIgnoreCase = s;
      function c(P, O, x = 0, z = P.length, Z = 0, ie = O.length) {
        for (; x < z && Z < ie; x++, Z++) {
          let ge = P.charCodeAt(x),
            re = O.charCodeAt(Z);
          if (ge === re) continue;
          if (ge >= 128 || re >= 128)
            return a(P.toLowerCase(), O.toLowerCase(), x, z, Z, ie);
          p(ge) && (ge -= 32), p(re) && (re -= 32);
          const he = ge - re;
          if (he !== 0) return he;
        }
        const ue = z - x,
          Ce = ie - Z;
        return ue < Ce ? -1 : ue > Ce ? 1 : 0;
      }
      n.compareSubstringIgnoreCase = c;
      function d(P) {
        return P >= 48 && P <= 57;
      }
      n.isAsciiDigit = d;
      function p(P) {
        return P >= 97 && P <= 122;
      }
      n.isLowerAsciiLetter = p;
      function E(P) {
        return P >= 65 && P <= 90;
      }
      n.isUpperAsciiLetter = E;
      function R(P, O) {
        return P.length === O.length && c(P, O) === 0;
      }
      n.equalsIgnoreCase = R;
      function D(P, O) {
        const x = O.length;
        return O.length > P.length ? !1 : c(P, O, 0, x) === 0;
      }
      n.startsWithIgnoreCase = D;
      function F(P, O) {
        const x = Math.min(P.length, O.length);
        let z;
        for (z = 0; z < x; z++)
          if (P.charCodeAt(z) !== O.charCodeAt(z)) return z;
        return x;
      }
      n.commonPrefixLength = F;
      function W(P, O) {
        const x = Math.min(P.length, O.length);
        let z;
        const Z = P.length - 1,
          ie = O.length - 1;
        for (z = 0; z < x; z++)
          if (P.charCodeAt(Z - z) !== O.charCodeAt(ie - z)) return z;
        return x;
      }
      n.commonSuffixLength = W;
      function B(P) {
        return 55296 <= P && P <= 56319;
      }
      n.isHighSurrogate = B;
      function q(P) {
        return 56320 <= P && P <= 57343;
      }
      n.isLowSurrogate = q;
      function G(P, O) {
        return ((P - 55296) << 10) + (O - 56320) + 65536;
      }
      n.computeCodePoint = G;
      function k(P, O, x) {
        const z = P.charCodeAt(x);
        if (B(z) && x + 1 < O) {
          const Z = P.charCodeAt(x + 1);
          if (q(Z)) return G(z, Z);
        }
        return z;
      }
      n.getNextCodePoint = k;
      function T(P, O) {
        const x = P.charCodeAt(O - 1);
        if (q(x) && O > 1) {
          const z = P.charCodeAt(O - 2);
          if (B(z)) return G(z, x);
        }
        return x;
      }
      class I {
        get offset() {
          return this.e;
        }
        constructor(O, x = 0) {
          (this.c = O), (this.d = O.length), (this.e = x);
        }
        setOffset(O) {
          this.e = O;
        }
        prevCodePoint() {
          const O = T(this.c, this.e);
          return (this.e -= O >= 65536 ? 2 : 1), O;
        }
        nextCodePoint() {
          const O = k(this.c, this.d, this.e);
          return (this.e += O >= 65536 ? 2 : 1), O;
        }
        eol() {
          return this.e >= this.d;
        }
      }
      n.CodePointIterator = I;
      class V {
        get offset() {
          return this.c.offset;
        }
        constructor(O, x = 0) {
          this.c = new I(O, x);
        }
        nextGraphemeLength() {
          const O = ee.getInstance(),
            x = this.c,
            z = x.offset;
          let Z = O.getGraphemeBreakType(x.nextCodePoint());
          for (; !x.eol(); ) {
            const ie = x.offset,
              ue = O.getGraphemeBreakType(x.nextCodePoint());
            if (K(Z, ue)) {
              x.setOffset(ie);
              break;
            }
            Z = ue;
          }
          return x.offset - z;
        }
        prevGraphemeLength() {
          const O = ee.getInstance(),
            x = this.c,
            z = x.offset;
          let Z = O.getGraphemeBreakType(x.prevCodePoint());
          for (; x.offset > 0; ) {
            const ie = x.offset,
              ue = O.getGraphemeBreakType(x.prevCodePoint());
            if (K(ue, Z)) {
              x.setOffset(ie);
              break;
            }
            Z = ue;
          }
          return z - x.offset;
        }
        eol() {
          return this.c.eol();
        }
      }
      n.GraphemeIterator = V;
      function t(P, O) {
        return new V(P, O).nextGraphemeLength();
      }
      n.nextCharLength = t;
      function ne(P, O) {
        return new V(P, O).prevGraphemeLength();
      }
      n.prevCharLength = ne;
      function oe(P, O) {
        O > 0 && q(P.charCodeAt(O)) && O--;
        const x = O + t(P, O);
        return [x - ne(P, x), x];
      }
      n.getCharContainingOffset = oe;
      let de;
      function Le() {
        return /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA\u07FE-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u088E\u08A0-\u08C9\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDC7\uFDF0-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE35\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDD23\uDE80-\uDEA9\uDEAD-\uDF45\uDF51-\uDF81\uDF86-\uDFF6]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD4B-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
      }
      function pe(P) {
        return de || (de = Le()), de.test(P);
      }
      n.containsRTL = pe;
      const ye = /^[\t\n\r\x20-\x7E]*$/;
      function Se(P) {
        return ye.test(P);
      }
      (n.isBasicASCII = Se), (n.UNUSUAL_LINE_TERMINATORS = /[\u2028\u2029]/);
      function Ne(P) {
        return n.UNUSUAL_LINE_TERMINATORS.test(P);
      }
      n.containsUnusualLineTerminators = Ne;
      function _e(P) {
        return (
          (P >= 11904 && P <= 55215) ||
          (P >= 63744 && P <= 64255) ||
          (P >= 65281 && P <= 65374)
        );
      }
      n.isFullWidthCharacter = _e;
      function J(P) {
        return (
          (P >= 127462 && P <= 127487) ||
          P === 8986 ||
          P === 8987 ||
          P === 9200 ||
          P === 9203 ||
          (P >= 9728 && P <= 10175) ||
          P === 11088 ||
          P === 11093 ||
          (P >= 127744 && P <= 128591) ||
          (P >= 128640 && P <= 128764) ||
          (P >= 128992 && P <= 129008) ||
          (P >= 129280 && P <= 129535) ||
          (P >= 129648 && P <= 129782)
        );
      }
      (n.isEmojiImprecise = J),
        (n.UTF8_BOM_CHARACTER = String.fromCharCode(65279));
      function H(P) {
        return !!(P && P.length > 0 && P.charCodeAt(0) === 65279);
      }
      n.startsWithUTF8BOM = H;
      function $(P, O = !1) {
        return P
          ? (O && (P = P.replace(/\\./g, '')), P.toLowerCase() !== P)
          : !1;
      }
      n.containsUppercaseCharacter = $;
      function j(P) {
        return (
          (P = P % (2 * 26)),
          P < 26
            ? String.fromCharCode(97 + P)
            : String.fromCharCode(65 + P - 26)
        );
      }
      n.singleLetterHash = j;
      function K(P, O) {
        return P === 0
          ? O !== 5 && O !== 7
          : P === 2 && O === 3
          ? !1
          : P === 4 || P === 2 || P === 3 || O === 4 || O === 2 || O === 3
          ? !0
          : !(
              (P === 8 && (O === 8 || O === 9 || O === 11 || O === 12)) ||
              ((P === 11 || P === 9) && (O === 9 || O === 10)) ||
              ((P === 12 || P === 10) && O === 10) ||
              O === 5 ||
              O === 13 ||
              O === 7 ||
              P === 1 ||
              (P === 13 && O === 14) ||
              (P === 6 && O === 6)
            );
      }
      class ee {
        static getInstance() {
          return ee.c || (ee.c = new ee()), ee.c;
        }
        constructor() {
          this.d = te();
        }
        getGraphemeBreakType(O) {
          if (O < 32) return O === 10 ? 3 : O === 13 ? 2 : 4;
          if (O < 127) return 0;
          const x = this.d,
            z = x.length / 3;
          let Z = 1;
          for (; Z <= z; )
            if (O < x[3 * Z]) Z = 2 * Z;
            else if (O > x[3 * Z + 1]) Z = 2 * Z + 1;
            else return x[3 * Z + 2];
          return 0;
        }
      }
      ee.c = null;
      function te() {
        return JSON.parse(
          '[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]',
        );
      }
      function ae(P, O) {
        if (P === 0) return 0;
        const x = be(P, O);
        if (x !== void 0) return x;
        const z = new I(O, P);
        return z.prevCodePoint(), z.offset;
      }
      n.getLeftDeleteOffset = ae;
      function be(P, O) {
        const x = new I(O, P);
        let z = x.prevCodePoint();
        for (; ve(z) || z === 65039 || z === 8419; ) {
          if (x.offset === 0) return;
          z = x.prevCodePoint();
        }
        if (!J(z)) return;
        let Z = x.offset;
        return Z > 0 && x.prevCodePoint() === 8205 && (Z = x.offset), Z;
      }
      function ve(P) {
        return 127995 <= P && P <= 127999;
      }
      n.noBreakWhitespace = '\xA0';
      class le {
        static getInstance(O) {
          return le.d.get(Array.from(O));
        }
        static getLocales() {
          return le.e.value;
        }
        constructor(O) {
          this.f = O;
        }
        isAmbiguous(O) {
          return this.f.has(O);
        }
        getPrimaryConfusable(O) {
          return this.f.get(O);
        }
        getConfusableCodePoints() {
          return new Set(this.f.keys());
        }
      }
      (i = le),
        (le.c = new M.Lazy(() =>
          JSON.parse(
            '{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,8218,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,8242,96,1370,96,1523,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71922,67,71913,67,65315,67,8557,67,8450,67,8493,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71919,87,71910,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,66293,90,71909,90,65338,90,8484,90,8488,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65297,49,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125],"_default":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"cs":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"es":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"fr":[65374,126,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"it":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ja":[8211,45,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65292,44,65307,59],"ko":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pt-BR":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ru":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"zh-hans":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41],"zh-hant":[8211,45,65374,126,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65307,59]}',
          ),
        )),
        (le.d = new A.LRUCachedFunction((P) => {
          function O(re) {
            const he = new Map();
            for (let me = 0; me < re.length; me += 2)
              he.set(re[me], re[me + 1]);
            return he;
          }
          function x(re, he) {
            const me = new Map(re);
            for (const [we, Ae] of he) me.set(we, Ae);
            return me;
          }
          function z(re, he) {
            if (!re) return he;
            const me = new Map();
            for (const [we, Ae] of re) he.has(we) && me.set(we, Ae);
            return me;
          }
          const Z = i.c.value;
          let ie = P.filter((re) => !re.startsWith('_') && re in Z);
          ie.length === 0 && (ie = ['_default']);
          let ue;
          for (const re of ie) {
            const he = O(Z[re]);
            ue = z(ue, he);
          }
          const Ce = O(Z._common),
            ge = x(Ce, ue);
          return new le(ge);
        })),
        (le.e = new M.Lazy(() =>
          Object.keys(le.c.value).filter((P) => !P.startsWith('_')),
        )),
        (n.AmbiguousCharacters = le);
      class ce {
        static c() {
          return JSON.parse(
            '[9,10,11,12,13,32,127,160,173,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8203,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12288,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999]',
          );
        }
        static e() {
          return this.d || (this.d = new Set(ce.c())), this.d;
        }
        static isInvisibleCharacter(O) {
          return ce.e().has(O);
        }
        static get codePoints() {
          return ce.e();
        }
      }
      (ce.d = void 0), (n.InvisibleCharacters = ce);
    }),
    Y(X[29], Q([0, 1, 4]), function (U, n, A) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.StringSHA1 =
          n.toHexString =
          n.stringHash =
          n.numberHash =
          n.doHash =
          n.hash =
            void 0);
      function M(L) {
        return i(L, 0);
      }
      n.hash = M;
      function i(L, S) {
        switch (typeof L) {
          case 'object':
            return L === null
              ? u(349, S)
              : Array.isArray(L)
              ? o(L, S)
              : f(L, S);
          case 'string':
            return v(L, S);
          case 'boolean':
            return y(L, S);
          case 'number':
            return u(L, S);
          case 'undefined':
            return u(937, S);
          default:
            return u(617, S);
        }
      }
      n.doHash = i;
      function u(L, S) {
        return ((S << 5) - S + L) | 0;
      }
      n.numberHash = u;
      function y(L, S) {
        return u(L ? 433 : 863, S);
      }
      function v(L, S) {
        S = u(149417, S);
        for (let _ = 0, m = L.length; _ < m; _++) S = u(L.charCodeAt(_), S);
        return S;
      }
      n.stringHash = v;
      function o(L, S) {
        return (S = u(104579, S)), L.reduce((_, m) => i(m, _), S);
      }
      function f(L, S) {
        return (
          (S = u(181387, S)),
          Object.keys(L)
            .sort()
            .reduce((_, m) => ((_ = v(m, _)), i(L[m], _)), S)
        );
      }
      function N(L, S, _ = 32) {
        const m = _ - S,
          w = ~((1 << m) - 1);
        return ((L << S) | ((w & L) >>> m)) >>> 0;
      }
      function e(L, S = 0, _ = L.byteLength, m = 0) {
        for (let w = 0; w < _; w++) L[S + w] = m;
      }
      function C(L, S, _ = '0') {
        for (; L.length < S; ) L = _ + L;
        return L;
      }
      function h(L, S = 32) {
        return L instanceof ArrayBuffer
          ? Array.from(new Uint8Array(L))
              .map((_) => _.toString(16).padStart(2, '0'))
              .join('')
          : C((L >>> 0).toString(16), S / 4);
      }
      n.toHexString = h;
      class b {
        constructor() {
          (this.h = 1732584193),
            (this.l = 4023233417),
            (this.m = 2562383102),
            (this.n = 271733878),
            (this.o = 3285377520),
            (this.p = new Uint8Array(64 + 3)),
            (this.q = new DataView(this.p.buffer)),
            (this.r = 0),
            (this.t = 0),
            (this.u = 0),
            (this.v = !1);
        }
        update(S) {
          const _ = S.length;
          if (_ === 0) return;
          const m = this.p;
          let w = this.r,
            l = this.u,
            g,
            r;
          for (
            l !== 0
              ? ((g = l), (r = -1), (l = 0))
              : ((g = S.charCodeAt(0)), (r = 0));
            ;

          ) {
            let a = g;
            if (A.isHighSurrogate(g))
              if (r + 1 < _) {
                const s = S.charCodeAt(r + 1);
                A.isLowSurrogate(s)
                  ? (r++, (a = A.computeCodePoint(g, s)))
                  : (a = 65533);
              } else {
                l = g;
                break;
              }
            else A.isLowSurrogate(g) && (a = 65533);
            if (((w = this.w(m, w, a)), r++, r < _)) g = S.charCodeAt(r);
            else break;
          }
          (this.r = w), (this.u = l);
        }
        w(S, _, m) {
          return (
            m < 128
              ? (S[_++] = m)
              : m < 2048
              ? ((S[_++] = 192 | ((m & 1984) >>> 6)),
                (S[_++] = 128 | ((m & 63) >>> 0)))
              : m < 65536
              ? ((S[_++] = 224 | ((m & 61440) >>> 12)),
                (S[_++] = 128 | ((m & 4032) >>> 6)),
                (S[_++] = 128 | ((m & 63) >>> 0)))
              : ((S[_++] = 240 | ((m & 1835008) >>> 18)),
                (S[_++] = 128 | ((m & 258048) >>> 12)),
                (S[_++] = 128 | ((m & 4032) >>> 6)),
                (S[_++] = 128 | ((m & 63) >>> 0))),
            _ >= 64 &&
              (this.y(),
              (_ -= 64),
              (this.t += 64),
              (S[0] = S[64 + 0]),
              (S[1] = S[64 + 1]),
              (S[2] = S[64 + 2])),
            _
          );
        }
        digest() {
          return (
            this.v ||
              ((this.v = !0),
              this.u &&
                ((this.u = 0), (this.r = this.w(this.p, this.r, 65533))),
              (this.t += this.r),
              this.x()),
            h(this.h) + h(this.l) + h(this.m) + h(this.n) + h(this.o)
          );
        }
        x() {
          (this.p[this.r++] = 128),
            e(this.p, this.r),
            this.r > 56 && (this.y(), e(this.p));
          const S = 8 * this.t;
          this.q.setUint32(56, Math.floor(S / 4294967296), !1),
            this.q.setUint32(60, S % 4294967296, !1),
            this.y();
        }
        y() {
          const S = b.g,
            _ = this.q;
          for (let d = 0; d < 64; d += 4)
            S.setUint32(d, _.getUint32(d, !1), !1);
          for (let d = 64; d < 320; d += 4)
            S.setUint32(
              d,
              N(
                S.getUint32(d - 12, !1) ^
                  S.getUint32(d - 32, !1) ^
                  S.getUint32(d - 56, !1) ^
                  S.getUint32(d - 64, !1),
                1,
              ),
              !1,
            );
          let m = this.h,
            w = this.l,
            l = this.m,
            g = this.n,
            r = this.o,
            a,
            s,
            c;
          for (let d = 0; d < 80; d++)
            d < 20
              ? ((a = (w & l) | (~w & g)), (s = 1518500249))
              : d < 40
              ? ((a = w ^ l ^ g), (s = 1859775393))
              : d < 60
              ? ((a = (w & l) | (w & g) | (l & g)), (s = 2400959708))
              : ((a = w ^ l ^ g), (s = 3395469782)),
              (c = (N(m, 5) + a + r + s + S.getUint32(d * 4, !1)) & 4294967295),
              (r = g),
              (g = l),
              (l = N(w, 30)),
              (w = m),
              (m = c);
          (this.h = (this.h + m) & 4294967295),
            (this.l = (this.l + w) & 4294967295),
            (this.m = (this.m + l) & 4294967295),
            (this.n = (this.n + g) & 4294967295),
            (this.o = (this.o + r) & 4294967295);
        }
      }
      (b.g = new DataView(new ArrayBuffer(320))), (n.StringSHA1 = b);
    }),
    Y(X[16], Q([0, 1, 26, 29]), function (U, n, A, M) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.LcsDiff = n.stringDiff = n.StringDiffSequence = void 0);
      class i {
        constructor(e) {
          this.a = e;
        }
        getElements() {
          const e = this.a,
            C = new Int32Array(e.length);
          for (let h = 0, b = e.length; h < b; h++) C[h] = e.charCodeAt(h);
          return C;
        }
      }
      n.StringDiffSequence = i;
      function u(N, e, C) {
        return new f(new i(N), new i(e)).ComputeDiff(C).changes;
      }
      n.stringDiff = u;
      class y {
        static Assert(e, C) {
          if (!e) throw new Error(C);
        }
      }
      class v {
        static Copy(e, C, h, b, L) {
          for (let S = 0; S < L; S++) h[b + S] = e[C + S];
        }
        static Copy2(e, C, h, b, L) {
          for (let S = 0; S < L; S++) h[b + S] = e[C + S];
        }
      }
      class o {
        constructor() {
          (this.a = []),
            (this.b = 1073741824),
            (this.c = 1073741824),
            (this.d = 0),
            (this.e = 0);
        }
        MarkNextChange() {
          (this.d > 0 || this.e > 0) &&
            this.a.push(new A.DiffChange(this.b, this.d, this.c, this.e)),
            (this.d = 0),
            (this.e = 0),
            (this.b = 1073741824),
            (this.c = 1073741824);
        }
        AddOriginalElement(e, C) {
          (this.b = Math.min(this.b, e)),
            (this.c = Math.min(this.c, C)),
            this.d++;
        }
        AddModifiedElement(e, C) {
          (this.b = Math.min(this.b, e)),
            (this.c = Math.min(this.c, C)),
            this.e++;
        }
        getChanges() {
          return (this.d > 0 || this.e > 0) && this.MarkNextChange(), this.a;
        }
        getReverseChanges() {
          return (
            (this.d > 0 || this.e > 0) && this.MarkNextChange(),
            this.a.reverse(),
            this.a
          );
        }
      }
      class f {
        constructor(e, C, h = null) {
          (this.a = h), (this.b = e), (this.c = C);
          const [b, L, S] = f.o(e),
            [_, m, w] = f.o(C);
          (this.d = S && w),
            (this.e = b),
            (this.f = L),
            (this.g = _),
            (this.h = m),
            (this.k = []),
            (this.m = []);
        }
        static n(e) {
          return e.length > 0 && typeof e[0] == 'string';
        }
        static o(e) {
          const C = e.getElements();
          if (f.n(C)) {
            const h = new Int32Array(C.length);
            for (let b = 0, L = C.length; b < L; b++)
              h[b] = (0, M.stringHash)(C[b], 0);
            return [C, h, !0];
          }
          return C instanceof Int32Array
            ? [[], C, !1]
            : [[], new Int32Array(C), !1];
        }
        p(e, C) {
          return this.f[e] !== this.h[C]
            ? !1
            : this.d
            ? this.e[e] === this.g[C]
            : !0;
        }
        q(e, C) {
          if (!this.p(e, C)) return !1;
          const h = f.r(this.b, e),
            b = f.r(this.c, C);
          return h === b;
        }
        static r(e, C) {
          return typeof e.getStrictElement == 'function'
            ? e.getStrictElement(C)
            : null;
        }
        s(e, C) {
          return this.f[e] !== this.f[C]
            ? !1
            : this.d
            ? this.e[e] === this.e[C]
            : !0;
        }
        u(e, C) {
          return this.h[e] !== this.h[C]
            ? !1
            : this.d
            ? this.g[e] === this.g[C]
            : !0;
        }
        ComputeDiff(e) {
          return this.v(0, this.f.length - 1, 0, this.h.length - 1, e);
        }
        v(e, C, h, b, L) {
          const S = [!1];
          let _ = this.w(e, C, h, b, S);
          return L && (_ = this.z(_)), { quitEarly: S[0], changes: _ };
        }
        w(e, C, h, b, L) {
          for (L[0] = !1; e <= C && h <= b && this.p(e, h); ) e++, h++;
          for (; C >= e && b >= h && this.p(C, b); ) C--, b--;
          if (e > C || h > b) {
            let g;
            return (
              h <= b
                ? (y.Assert(
                    e === C + 1,
                    'originalStart should only be one more than originalEnd',
                  ),
                  (g = [new A.DiffChange(e, 0, h, b - h + 1)]))
                : e <= C
                ? (y.Assert(
                    h === b + 1,
                    'modifiedStart should only be one more than modifiedEnd',
                  ),
                  (g = [new A.DiffChange(e, C - e + 1, h, 0)]))
                : (y.Assert(
                    e === C + 1,
                    'originalStart should only be one more than originalEnd',
                  ),
                  y.Assert(
                    h === b + 1,
                    'modifiedStart should only be one more than modifiedEnd',
                  ),
                  (g = [])),
              g
            );
          }
          const S = [0],
            _ = [0],
            m = this.y(e, C, h, b, S, _, L),
            w = S[0],
            l = _[0];
          if (m !== null) return m;
          if (!L[0]) {
            const g = this.w(e, w, h, l, L);
            let r = [];
            return (
              L[0]
                ? (r = [
                    new A.DiffChange(
                      w + 1,
                      C - (w + 1) + 1,
                      l + 1,
                      b - (l + 1) + 1,
                    ),
                  ])
                : (r = this.w(w + 1, C, l + 1, b, L)),
              this.H(g, r)
            );
          }
          return [new A.DiffChange(e, C - e + 1, h, b - h + 1)];
        }
        x(e, C, h, b, L, S, _, m, w, l, g, r, a, s, c, d, p, E) {
          let R = null,
            D = null,
            F = new o(),
            W = C,
            B = h,
            q = a[0] - d[0] - b,
            G = -1073741824,
            k = this.k.length - 1;
          do {
            const T = q + e;
            T === W || (T < B && w[T - 1] < w[T + 1])
              ? ((g = w[T + 1]),
                (s = g - q - b),
                g < G && F.MarkNextChange(),
                (G = g),
                F.AddModifiedElement(g + 1, s),
                (q = T + 1 - e))
              : ((g = w[T - 1] + 1),
                (s = g - q - b),
                g < G && F.MarkNextChange(),
                (G = g - 1),
                F.AddOriginalElement(g, s + 1),
                (q = T - 1 - e)),
              k >= 0 &&
                ((w = this.k[k]), (e = w[0]), (W = 1), (B = w.length - 1));
          } while (--k >= -1);
          if (((R = F.getReverseChanges()), E[0])) {
            let T = a[0] + 1,
              I = d[0] + 1;
            if (R !== null && R.length > 0) {
              const V = R[R.length - 1];
              (T = Math.max(T, V.getOriginalEnd())),
                (I = Math.max(I, V.getModifiedEnd()));
            }
            D = [new A.DiffChange(T, r - T + 1, I, c - I + 1)];
          } else {
            (F = new o()),
              (W = S),
              (B = _),
              (q = a[0] - d[0] - m),
              (G = 1073741824),
              (k = p ? this.m.length - 1 : this.m.length - 2);
            do {
              const T = q + L;
              T === W || (T < B && l[T - 1] >= l[T + 1])
                ? ((g = l[T + 1] - 1),
                  (s = g - q - m),
                  g > G && F.MarkNextChange(),
                  (G = g + 1),
                  F.AddOriginalElement(g + 1, s + 1),
                  (q = T + 1 - L))
                : ((g = l[T - 1]),
                  (s = g - q - m),
                  g > G && F.MarkNextChange(),
                  (G = g),
                  F.AddModifiedElement(g + 1, s + 1),
                  (q = T - 1 - L)),
                k >= 0 &&
                  ((l = this.m[k]), (L = l[0]), (W = 1), (B = l.length - 1));
            } while (--k >= -1);
            D = F.getChanges();
          }
          return this.H(R, D);
        }
        y(e, C, h, b, L, S, _) {
          let m = 0,
            w = 0,
            l = 0,
            g = 0,
            r = 0,
            a = 0;
          e--, h--, (L[0] = 0), (S[0] = 0), (this.k = []), (this.m = []);
          const s = C - e + (b - h),
            c = s + 1,
            d = new Int32Array(c),
            p = new Int32Array(c),
            E = b - h,
            R = C - e,
            D = e - h,
            F = C - b,
            B = (R - E) % 2 === 0;
          (d[E] = e), (p[R] = C), (_[0] = !1);
          for (let q = 1; q <= s / 2 + 1; q++) {
            let G = 0,
              k = 0;
            (l = this.J(E - q, q, E, c)), (g = this.J(E + q, q, E, c));
            for (let I = l; I <= g; I += 2) {
              I === l || (I < g && d[I - 1] < d[I + 1])
                ? (m = d[I + 1])
                : (m = d[I - 1] + 1),
                (w = m - (I - E) - D);
              const V = m;
              for (; m < C && w < b && this.p(m + 1, w + 1); ) m++, w++;
              if (
                ((d[I] = m),
                m + w > G + k && ((G = m), (k = w)),
                !B && Math.abs(I - R) <= q - 1 && m >= p[I])
              )
                return (
                  (L[0] = m),
                  (S[0] = w),
                  V <= p[I] && 1447 > 0 && q <= 1447 + 1
                    ? this.x(
                        E,
                        l,
                        g,
                        D,
                        R,
                        r,
                        a,
                        F,
                        d,
                        p,
                        m,
                        C,
                        L,
                        w,
                        b,
                        S,
                        B,
                        _,
                      )
                    : null
                );
            }
            const T = (G - e + (k - h) - q) / 2;
            if (this.a !== null && !this.a(G, T))
              return (
                (_[0] = !0),
                (L[0] = G),
                (S[0] = k),
                T > 0 && 1447 > 0 && q <= 1447 + 1
                  ? this.x(E, l, g, D, R, r, a, F, d, p, m, C, L, w, b, S, B, _)
                  : (e++, h++, [new A.DiffChange(e, C - e + 1, h, b - h + 1)])
              );
            (r = this.J(R - q, q, R, c)), (a = this.J(R + q, q, R, c));
            for (let I = r; I <= a; I += 2) {
              I === r || (I < a && p[I - 1] >= p[I + 1])
                ? (m = p[I + 1] - 1)
                : (m = p[I - 1]),
                (w = m - (I - R) - F);
              const V = m;
              for (; m > e && w > h && this.p(m, w); ) m--, w--;
              if (((p[I] = m), B && Math.abs(I - E) <= q && m <= d[I]))
                return (
                  (L[0] = m),
                  (S[0] = w),
                  V >= d[I] && 1447 > 0 && q <= 1447 + 1
                    ? this.x(
                        E,
                        l,
                        g,
                        D,
                        R,
                        r,
                        a,
                        F,
                        d,
                        p,
                        m,
                        C,
                        L,
                        w,
                        b,
                        S,
                        B,
                        _,
                      )
                    : null
                );
            }
            if (q <= 1447) {
              let I = new Int32Array(g - l + 2);
              (I[0] = E - l + 1),
                v.Copy2(d, l, I, 1, g - l + 1),
                this.k.push(I),
                (I = new Int32Array(a - r + 2)),
                (I[0] = R - r + 1),
                v.Copy2(p, r, I, 1, a - r + 1),
                this.m.push(I);
            }
          }
          return this.x(E, l, g, D, R, r, a, F, d, p, m, C, L, w, b, S, B, _);
        }
        z(e) {
          for (let C = 0; C < e.length; C++) {
            const h = e[C],
              b = C < e.length - 1 ? e[C + 1].originalStart : this.f.length,
              L = C < e.length - 1 ? e[C + 1].modifiedStart : this.h.length,
              S = h.originalLength > 0,
              _ = h.modifiedLength > 0;
            for (
              ;
              h.originalStart + h.originalLength < b &&
              h.modifiedStart + h.modifiedLength < L &&
              (!S ||
                this.s(h.originalStart, h.originalStart + h.originalLength)) &&
              (!_ ||
                this.u(h.modifiedStart, h.modifiedStart + h.modifiedLength));

            ) {
              const w = this.q(h.originalStart, h.modifiedStart);
              if (
                this.q(
                  h.originalStart + h.originalLength,
                  h.modifiedStart + h.modifiedLength,
                ) &&
                !w
              )
                break;
              h.originalStart++, h.modifiedStart++;
            }
            const m = [null];
            if (C < e.length - 1 && this.I(e[C], e[C + 1], m)) {
              (e[C] = m[0]), e.splice(C + 1, 1), C--;
              continue;
            }
          }
          for (let C = e.length - 1; C >= 0; C--) {
            const h = e[C];
            let b = 0,
              L = 0;
            if (C > 0) {
              const g = e[C - 1];
              (b = g.originalStart + g.originalLength),
                (L = g.modifiedStart + g.modifiedLength);
            }
            const S = h.originalLength > 0,
              _ = h.modifiedLength > 0;
            let m = 0,
              w = this.G(
                h.originalStart,
                h.originalLength,
                h.modifiedStart,
                h.modifiedLength,
              );
            for (let g = 1; ; g++) {
              const r = h.originalStart - g,
                a = h.modifiedStart - g;
              if (
                r < b ||
                a < L ||
                (S && !this.s(r, r + h.originalLength)) ||
                (_ && !this.u(a, a + h.modifiedLength))
              )
                break;
              const c =
                (r === b && a === L ? 5 : 0) +
                this.G(r, h.originalLength, a, h.modifiedLength);
              c > w && ((w = c), (m = g));
            }
            (h.originalStart -= m), (h.modifiedStart -= m);
            const l = [null];
            if (C > 0 && this.I(e[C - 1], e[C], l)) {
              (e[C - 1] = l[0]), e.splice(C, 1), C++;
              continue;
            }
          }
          if (this.d)
            for (let C = 1, h = e.length; C < h; C++) {
              const b = e[C - 1],
                L = e[C],
                S = L.originalStart - b.originalStart - b.originalLength,
                _ = b.originalStart,
                m = L.originalStart + L.originalLength,
                w = m - _,
                l = b.modifiedStart,
                g = L.modifiedStart + L.modifiedLength,
                r = g - l;
              if (S < 5 && w < 20 && r < 20) {
                const a = this.A(_, w, l, r, S);
                if (a) {
                  const [s, c] = a;
                  (s !== b.originalStart + b.originalLength ||
                    c !== b.modifiedStart + b.modifiedLength) &&
                    ((b.originalLength = s - b.originalStart),
                    (b.modifiedLength = c - b.modifiedStart),
                    (L.originalStart = s + S),
                    (L.modifiedStart = c + S),
                    (L.originalLength = m - L.originalStart),
                    (L.modifiedLength = g - L.modifiedStart));
                }
              }
            }
          return e;
        }
        A(e, C, h, b, L) {
          if (C < L || b < L) return null;
          const S = e + C - L + 1,
            _ = h + b - L + 1;
          let m = 0,
            w = 0,
            l = 0;
          for (let g = e; g < S; g++)
            for (let r = h; r < _; r++) {
              const a = this.B(g, r, L);
              a > 0 && a > m && ((m = a), (w = g), (l = r));
            }
          return m > 0 ? [w, l] : null;
        }
        B(e, C, h) {
          let b = 0;
          for (let L = 0; L < h; L++) {
            if (!this.p(e + L, C + L)) return 0;
            b += this.e[e + L].length;
          }
          return b;
        }
        C(e) {
          return e <= 0 || e >= this.f.length - 1
            ? !0
            : this.d && /^\s*$/.test(this.e[e]);
        }
        D(e, C) {
          if (this.C(e) || this.C(e - 1)) return !0;
          if (C > 0) {
            const h = e + C;
            if (this.C(h - 1) || this.C(h)) return !0;
          }
          return !1;
        }
        E(e) {
          return e <= 0 || e >= this.h.length - 1
            ? !0
            : this.d && /^\s*$/.test(this.g[e]);
        }
        F(e, C) {
          if (this.E(e) || this.E(e - 1)) return !0;
          if (C > 0) {
            const h = e + C;
            if (this.E(h - 1) || this.E(h)) return !0;
          }
          return !1;
        }
        G(e, C, h, b) {
          const L = this.D(e, C) ? 1 : 0,
            S = this.F(h, b) ? 1 : 0;
          return L + S;
        }
        H(e, C) {
          const h = [];
          if (e.length === 0 || C.length === 0) return C.length > 0 ? C : e;
          if (this.I(e[e.length - 1], C[0], h)) {
            const b = new Array(e.length + C.length - 1);
            return (
              v.Copy(e, 0, b, 0, e.length - 1),
              (b[e.length - 1] = h[0]),
              v.Copy(C, 1, b, e.length, C.length - 1),
              b
            );
          } else {
            const b = new Array(e.length + C.length);
            return (
              v.Copy(e, 0, b, 0, e.length),
              v.Copy(C, 0, b, e.length, C.length),
              b
            );
          }
        }
        I(e, C, h) {
          if (
            (y.Assert(
              e.originalStart <= C.originalStart,
              'Left change is not less than or equal to right change',
            ),
            y.Assert(
              e.modifiedStart <= C.modifiedStart,
              'Left change is not less than or equal to right change',
            ),
            e.originalStart + e.originalLength >= C.originalStart ||
              e.modifiedStart + e.modifiedLength >= C.modifiedStart)
          ) {
            const b = e.originalStart;
            let L = e.originalLength;
            const S = e.modifiedStart;
            let _ = e.modifiedLength;
            return (
              e.originalStart + e.originalLength >= C.originalStart &&
                (L = C.originalStart + C.originalLength - e.originalStart),
              e.modifiedStart + e.modifiedLength >= C.modifiedStart &&
                (_ = C.modifiedStart + C.modifiedLength - e.modifiedStart),
              (h[0] = new A.DiffChange(b, L, S, _)),
              !0
            );
          } else return (h[0] = null), !1;
        }
        J(e, C, h, b) {
          if (e >= 0 && e < b) return e;
          const L = h,
            S = b - h - 1,
            _ = C % 2 === 0;
          if (e < 0) {
            const m = L % 2 === 0;
            return _ === m ? 0 : 1;
          } else {
            const m = S % 2 === 0;
            return _ === m ? b - 1 : b - 2;
          }
        }
      }
      n.LcsDiff = f;
    }),
    Y(X[17], Q([0, 1]), function (U, n) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.withNullAsUndefined =
          n.validateConstraint =
          n.validateConstraints =
          n.isFunction =
          n.assertIsDefined =
          n.assertType =
          n.isUndefinedOrNull =
          n.isDefined =
          n.isUndefined =
          n.isBoolean =
          n.isIterable =
          n.isNumber =
          n.isTypedArray =
          n.isObject =
          n.isString =
            void 0);
      function A(_) {
        return typeof _ == 'string';
      }
      n.isString = A;
      function M(_) {
        return (
          typeof _ == 'object' &&
          _ !== null &&
          !Array.isArray(_) &&
          !(_ instanceof RegExp) &&
          !(_ instanceof Date)
        );
      }
      n.isObject = M;
      function i(_) {
        const m = Object.getPrototypeOf(Uint8Array);
        return typeof _ == 'object' && _ instanceof m;
      }
      n.isTypedArray = i;
      function u(_) {
        return typeof _ == 'number' && !isNaN(_);
      }
      n.isNumber = u;
      function y(_) {
        return !!_ && typeof _[Symbol.iterator] == 'function';
      }
      n.isIterable = y;
      function v(_) {
        return _ === !0 || _ === !1;
      }
      n.isBoolean = v;
      function o(_) {
        return typeof _ > 'u';
      }
      n.isUndefined = o;
      function f(_) {
        return !N(_);
      }
      n.isDefined = f;
      function N(_) {
        return o(_) || _ === null;
      }
      n.isUndefinedOrNull = N;
      function e(_, m) {
        if (!_)
          throw new Error(
            m ? `Unexpected type, expected '${m}'` : 'Unexpected type',
          );
      }
      n.assertType = e;
      function C(_) {
        if (N(_))
          throw new Error('Assertion Failed: argument is undefined or null');
        return _;
      }
      n.assertIsDefined = C;
      function h(_) {
        return typeof _ == 'function';
      }
      n.isFunction = h;
      function b(_, m) {
        const w = Math.min(_.length, m.length);
        for (let l = 0; l < w; l++) L(_[l], m[l]);
      }
      n.validateConstraints = b;
      function L(_, m) {
        if (A(m)) {
          if (typeof _ !== m)
            throw new Error(`argument does not match constraint: typeof ${m}`);
        } else if (h(m)) {
          try {
            if (_ instanceof m) return;
          } catch {}
          if (
            (!N(_) && _.constructor === m) ||
            (m.length === 1 && m.call(void 0, _) === !0)
          )
            return;
          throw new Error(
            'argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true',
          );
        }
      }
      n.validateConstraint = L;
      function S(_) {
        return _ === null ? void 0 : _;
      }
      n.withNullAsUndefined = S;
    }),
    Y(X[30], Q([0, 1, 17]), function (U, n, A) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.Codicon = n.getCodiconFontCharacters = void 0);
      const M = Object.create(null);
      function i(y, v) {
        if ((0, A.isString)(v)) {
          const o = M[v];
          if (o === void 0)
            throw new Error(`${y} references an unknown codicon: ${v}`);
          v = o;
        }
        return (M[y] = v), { id: y };
      }
      function u() {
        return M;
      }
      (n.getCodiconFontCharacters = u),
        (n.Codicon = {
          add: i('add', 6e4),
          plus: i('plus', 6e4),
          gistNew: i('gist-new', 6e4),
          repoCreate: i('repo-create', 6e4),
          lightbulb: i('lightbulb', 60001),
          lightBulb: i('light-bulb', 60001),
          repo: i('repo', 60002),
          repoDelete: i('repo-delete', 60002),
          gistFork: i('gist-fork', 60003),
          repoForked: i('repo-forked', 60003),
          gitPullRequest: i('git-pull-request', 60004),
          gitPullRequestAbandoned: i('git-pull-request-abandoned', 60004),
          recordKeys: i('record-keys', 60005),
          keyboard: i('keyboard', 60005),
          tag: i('tag', 60006),
          tagAdd: i('tag-add', 60006),
          tagRemove: i('tag-remove', 60006),
          person: i('person', 60007),
          personFollow: i('person-follow', 60007),
          personOutline: i('person-outline', 60007),
          personFilled: i('person-filled', 60007),
          gitBranch: i('git-branch', 60008),
          gitBranchCreate: i('git-branch-create', 60008),
          gitBranchDelete: i('git-branch-delete', 60008),
          sourceControl: i('source-control', 60008),
          mirror: i('mirror', 60009),
          mirrorPublic: i('mirror-public', 60009),
          star: i('star', 60010),
          starAdd: i('star-add', 60010),
          starDelete: i('star-delete', 60010),
          starEmpty: i('star-empty', 60010),
          comment: i('comment', 60011),
          commentAdd: i('comment-add', 60011),
          alert: i('alert', 60012),
          warning: i('warning', 60012),
          search: i('search', 60013),
          searchSave: i('search-save', 60013),
          logOut: i('log-out', 60014),
          signOut: i('sign-out', 60014),
          logIn: i('log-in', 60015),
          signIn: i('sign-in', 60015),
          eye: i('eye', 60016),
          eyeUnwatch: i('eye-unwatch', 60016),
          eyeWatch: i('eye-watch', 60016),
          circleFilled: i('circle-filled', 60017),
          primitiveDot: i('primitive-dot', 60017),
          closeDirty: i('close-dirty', 60017),
          debugBreakpoint: i('debug-breakpoint', 60017),
          debugBreakpointDisabled: i('debug-breakpoint-disabled', 60017),
          debugHint: i('debug-hint', 60017),
          primitiveSquare: i('primitive-square', 60018),
          edit: i('edit', 60019),
          pencil: i('pencil', 60019),
          info: i('info', 60020),
          issueOpened: i('issue-opened', 60020),
          gistPrivate: i('gist-private', 60021),
          gitForkPrivate: i('git-fork-private', 60021),
          lock: i('lock', 60021),
          mirrorPrivate: i('mirror-private', 60021),
          close: i('close', 60022),
          removeClose: i('remove-close', 60022),
          x: i('x', 60022),
          repoSync: i('repo-sync', 60023),
          sync: i('sync', 60023),
          clone: i('clone', 60024),
          desktopDownload: i('desktop-download', 60024),
          beaker: i('beaker', 60025),
          microscope: i('microscope', 60025),
          vm: i('vm', 60026),
          deviceDesktop: i('device-desktop', 60026),
          file: i('file', 60027),
          fileText: i('file-text', 60027),
          more: i('more', 60028),
          ellipsis: i('ellipsis', 60028),
          kebabHorizontal: i('kebab-horizontal', 60028),
          mailReply: i('mail-reply', 60029),
          reply: i('reply', 60029),
          organization: i('organization', 60030),
          organizationFilled: i('organization-filled', 60030),
          organizationOutline: i('organization-outline', 60030),
          newFile: i('new-file', 60031),
          fileAdd: i('file-add', 60031),
          newFolder: i('new-folder', 60032),
          fileDirectoryCreate: i('file-directory-create', 60032),
          trash: i('trash', 60033),
          trashcan: i('trashcan', 60033),
          history: i('history', 60034),
          clock: i('clock', 60034),
          folder: i('folder', 60035),
          fileDirectory: i('file-directory', 60035),
          symbolFolder: i('symbol-folder', 60035),
          logoGithub: i('logo-github', 60036),
          markGithub: i('mark-github', 60036),
          github: i('github', 60036),
          terminal: i('terminal', 60037),
          console: i('console', 60037),
          repl: i('repl', 60037),
          zap: i('zap', 60038),
          symbolEvent: i('symbol-event', 60038),
          error: i('error', 60039),
          stop: i('stop', 60039),
          variable: i('variable', 60040),
          symbolVariable: i('symbol-variable', 60040),
          array: i('array', 60042),
          symbolArray: i('symbol-array', 60042),
          symbolModule: i('symbol-module', 60043),
          symbolPackage: i('symbol-package', 60043),
          symbolNamespace: i('symbol-namespace', 60043),
          symbolObject: i('symbol-object', 60043),
          symbolMethod: i('symbol-method', 60044),
          symbolFunction: i('symbol-function', 60044),
          symbolConstructor: i('symbol-constructor', 60044),
          symbolBoolean: i('symbol-boolean', 60047),
          symbolNull: i('symbol-null', 60047),
          symbolNumeric: i('symbol-numeric', 60048),
          symbolNumber: i('symbol-number', 60048),
          symbolStructure: i('symbol-structure', 60049),
          symbolStruct: i('symbol-struct', 60049),
          symbolParameter: i('symbol-parameter', 60050),
          symbolTypeParameter: i('symbol-type-parameter', 60050),
          symbolKey: i('symbol-key', 60051),
          symbolText: i('symbol-text', 60051),
          symbolReference: i('symbol-reference', 60052),
          goToFile: i('go-to-file', 60052),
          symbolEnum: i('symbol-enum', 60053),
          symbolValue: i('symbol-value', 60053),
          symbolRuler: i('symbol-ruler', 60054),
          symbolUnit: i('symbol-unit', 60054),
          activateBreakpoints: i('activate-breakpoints', 60055),
          archive: i('archive', 60056),
          arrowBoth: i('arrow-both', 60057),
          arrowDown: i('arrow-down', 60058),
          arrowLeft: i('arrow-left', 60059),
          arrowRight: i('arrow-right', 60060),
          arrowSmallDown: i('arrow-small-down', 60061),
          arrowSmallLeft: i('arrow-small-left', 60062),
          arrowSmallRight: i('arrow-small-right', 60063),
          arrowSmallUp: i('arrow-small-up', 60064),
          arrowUp: i('arrow-up', 60065),
          bell: i('bell', 60066),
          bold: i('bold', 60067),
          book: i('book', 60068),
          bookmark: i('bookmark', 60069),
          debugBreakpointConditionalUnverified: i(
            'debug-breakpoint-conditional-unverified',
            60070,
          ),
          debugBreakpointConditional: i('debug-breakpoint-conditional', 60071),
          debugBreakpointConditionalDisabled: i(
            'debug-breakpoint-conditional-disabled',
            60071,
          ),
          debugBreakpointDataUnverified: i(
            'debug-breakpoint-data-unverified',
            60072,
          ),
          debugBreakpointData: i('debug-breakpoint-data', 60073),
          debugBreakpointDataDisabled: i(
            'debug-breakpoint-data-disabled',
            60073,
          ),
          debugBreakpointLogUnverified: i(
            'debug-breakpoint-log-unverified',
            60074,
          ),
          debugBreakpointLog: i('debug-breakpoint-log', 60075),
          debugBreakpointLogDisabled: i('debug-breakpoint-log-disabled', 60075),
          briefcase: i('briefcase', 60076),
          broadcast: i('broadcast', 60077),
          browser: i('browser', 60078),
          bug: i('bug', 60079),
          calendar: i('calendar', 60080),
          caseSensitive: i('case-sensitive', 60081),
          check: i('check', 60082),
          checklist: i('checklist', 60083),
          chevronDown: i('chevron-down', 60084),
          dropDownButton: i('drop-down-button', 60084),
          chevronLeft: i('chevron-left', 60085),
          chevronRight: i('chevron-right', 60086),
          chevronUp: i('chevron-up', 60087),
          chromeClose: i('chrome-close', 60088),
          chromeMaximize: i('chrome-maximize', 60089),
          chromeMinimize: i('chrome-minimize', 60090),
          chromeRestore: i('chrome-restore', 60091),
          circle: i('circle', 60092),
          circleOutline: i('circle-outline', 60092),
          debugBreakpointUnverified: i('debug-breakpoint-unverified', 60092),
          circleSlash: i('circle-slash', 60093),
          circuitBoard: i('circuit-board', 60094),
          clearAll: i('clear-all', 60095),
          clippy: i('clippy', 60096),
          closeAll: i('close-all', 60097),
          cloudDownload: i('cloud-download', 60098),
          cloudUpload: i('cloud-upload', 60099),
          code: i('code', 60100),
          collapseAll: i('collapse-all', 60101),
          colorMode: i('color-mode', 60102),
          commentDiscussion: i('comment-discussion', 60103),
          compareChanges: i('compare-changes', 60157),
          creditCard: i('credit-card', 60105),
          dash: i('dash', 60108),
          dashboard: i('dashboard', 60109),
          database: i('database', 60110),
          debugContinue: i('debug-continue', 60111),
          debugDisconnect: i('debug-disconnect', 60112),
          debugPause: i('debug-pause', 60113),
          debugRestart: i('debug-restart', 60114),
          debugStart: i('debug-start', 60115),
          debugStepInto: i('debug-step-into', 60116),
          debugStepOut: i('debug-step-out', 60117),
          debugStepOver: i('debug-step-over', 60118),
          debugStop: i('debug-stop', 60119),
          debug: i('debug', 60120),
          deviceCameraVideo: i('device-camera-video', 60121),
          deviceCamera: i('device-camera', 60122),
          deviceMobile: i('device-mobile', 60123),
          diffAdded: i('diff-added', 60124),
          diffIgnored: i('diff-ignored', 60125),
          diffModified: i('diff-modified', 60126),
          diffRemoved: i('diff-removed', 60127),
          diffRenamed: i('diff-renamed', 60128),
          diff: i('diff', 60129),
          discard: i('discard', 60130),
          editorLayout: i('editor-layout', 60131),
          emptyWindow: i('empty-window', 60132),
          exclude: i('exclude', 60133),
          extensions: i('extensions', 60134),
          eyeClosed: i('eye-closed', 60135),
          fileBinary: i('file-binary', 60136),
          fileCode: i('file-code', 60137),
          fileMedia: i('file-media', 60138),
          filePdf: i('file-pdf', 60139),
          fileSubmodule: i('file-submodule', 60140),
          fileSymlinkDirectory: i('file-symlink-directory', 60141),
          fileSymlinkFile: i('file-symlink-file', 60142),
          fileZip: i('file-zip', 60143),
          files: i('files', 60144),
          filter: i('filter', 60145),
          flame: i('flame', 60146),
          foldDown: i('fold-down', 60147),
          foldUp: i('fold-up', 60148),
          fold: i('fold', 60149),
          folderActive: i('folder-active', 60150),
          folderOpened: i('folder-opened', 60151),
          gear: i('gear', 60152),
          gift: i('gift', 60153),
          gistSecret: i('gist-secret', 60154),
          gist: i('gist', 60155),
          gitCommit: i('git-commit', 60156),
          gitCompare: i('git-compare', 60157),
          gitMerge: i('git-merge', 60158),
          githubAction: i('github-action', 60159),
          githubAlt: i('github-alt', 60160),
          globe: i('globe', 60161),
          grabber: i('grabber', 60162),
          graph: i('graph', 60163),
          gripper: i('gripper', 60164),
          heart: i('heart', 60165),
          home: i('home', 60166),
          horizontalRule: i('horizontal-rule', 60167),
          hubot: i('hubot', 60168),
          inbox: i('inbox', 60169),
          issueClosed: i('issue-closed', 60324),
          issueReopened: i('issue-reopened', 60171),
          issues: i('issues', 60172),
          italic: i('italic', 60173),
          jersey: i('jersey', 60174),
          json: i('json', 60175),
          bracket: i('bracket', 60175),
          kebabVertical: i('kebab-vertical', 60176),
          key: i('key', 60177),
          law: i('law', 60178),
          lightbulbAutofix: i('lightbulb-autofix', 60179),
          linkExternal: i('link-external', 60180),
          link: i('link', 60181),
          listOrdered: i('list-ordered', 60182),
          listUnordered: i('list-unordered', 60183),
          liveShare: i('live-share', 60184),
          loading: i('loading', 60185),
          location: i('location', 60186),
          mailRead: i('mail-read', 60187),
          mail: i('mail', 60188),
          markdown: i('markdown', 60189),
          megaphone: i('megaphone', 60190),
          mention: i('mention', 60191),
          milestone: i('milestone', 60192),
          mortarBoard: i('mortar-board', 60193),
          move: i('move', 60194),
          multipleWindows: i('multiple-windows', 60195),
          mute: i('mute', 60196),
          noNewline: i('no-newline', 60197),
          note: i('note', 60198),
          octoface: i('octoface', 60199),
          openPreview: i('open-preview', 60200),
          package_: i('package', 60201),
          paintcan: i('paintcan', 60202),
          pin: i('pin', 60203),
          play: i('play', 60204),
          run: i('run', 60204),
          plug: i('plug', 60205),
          preserveCase: i('preserve-case', 60206),
          preview: i('preview', 60207),
          project: i('project', 60208),
          pulse: i('pulse', 60209),
          question: i('question', 60210),
          quote: i('quote', 60211),
          radioTower: i('radio-tower', 60212),
          reactions: i('reactions', 60213),
          references: i('references', 60214),
          refresh: i('refresh', 60215),
          regex: i('regex', 60216),
          remoteExplorer: i('remote-explorer', 60217),
          remote: i('remote', 60218),
          remove: i('remove', 60219),
          replaceAll: i('replace-all', 60220),
          replace: i('replace', 60221),
          repoClone: i('repo-clone', 60222),
          repoForcePush: i('repo-force-push', 60223),
          repoPull: i('repo-pull', 60224),
          repoPush: i('repo-push', 60225),
          report: i('report', 60226),
          requestChanges: i('request-changes', 60227),
          rocket: i('rocket', 60228),
          rootFolderOpened: i('root-folder-opened', 60229),
          rootFolder: i('root-folder', 60230),
          rss: i('rss', 60231),
          ruby: i('ruby', 60232),
          saveAll: i('save-all', 60233),
          saveAs: i('save-as', 60234),
          save: i('save', 60235),
          screenFull: i('screen-full', 60236),
          screenNormal: i('screen-normal', 60237),
          searchStop: i('search-stop', 60238),
          server: i('server', 60240),
          settingsGear: i('settings-gear', 60241),
          settings: i('settings', 60242),
          shield: i('shield', 60243),
          smiley: i('smiley', 60244),
          sortPrecedence: i('sort-precedence', 60245),
          splitHorizontal: i('split-horizontal', 60246),
          splitVertical: i('split-vertical', 60247),
          squirrel: i('squirrel', 60248),
          starFull: i('star-full', 60249),
          starHalf: i('star-half', 60250),
          symbolClass: i('symbol-class', 60251),
          symbolColor: i('symbol-color', 60252),
          symbolCustomColor: i('symbol-customcolor', 60252),
          symbolConstant: i('symbol-constant', 60253),
          symbolEnumMember: i('symbol-enum-member', 60254),
          symbolField: i('symbol-field', 60255),
          symbolFile: i('symbol-file', 60256),
          symbolInterface: i('symbol-interface', 60257),
          symbolKeyword: i('symbol-keyword', 60258),
          symbolMisc: i('symbol-misc', 60259),
          symbolOperator: i('symbol-operator', 60260),
          symbolProperty: i('symbol-property', 60261),
          wrench: i('wrench', 60261),
          wrenchSubaction: i('wrench-subaction', 60261),
          symbolSnippet: i('symbol-snippet', 60262),
          tasklist: i('tasklist', 60263),
          telescope: i('telescope', 60264),
          textSize: i('text-size', 60265),
          threeBars: i('three-bars', 60266),
          thumbsdown: i('thumbsdown', 60267),
          thumbsup: i('thumbsup', 60268),
          tools: i('tools', 60269),
          triangleDown: i('triangle-down', 60270),
          triangleLeft: i('triangle-left', 60271),
          triangleRight: i('triangle-right', 60272),
          triangleUp: i('triangle-up', 60273),
          twitter: i('twitter', 60274),
          unfold: i('unfold', 60275),
          unlock: i('unlock', 60276),
          unmute: i('unmute', 60277),
          unverified: i('unverified', 60278),
          verified: i('verified', 60279),
          versions: i('versions', 60280),
          vmActive: i('vm-active', 60281),
          vmOutline: i('vm-outline', 60282),
          vmRunning: i('vm-running', 60283),
          watch: i('watch', 60284),
          whitespace: i('whitespace', 60285),
          wholeWord: i('whole-word', 60286),
          window: i('window', 60287),
          wordWrap: i('word-wrap', 60288),
          zoomIn: i('zoom-in', 60289),
          zoomOut: i('zoom-out', 60290),
          listFilter: i('list-filter', 60291),
          listFlat: i('list-flat', 60292),
          listSelection: i('list-selection', 60293),
          selection: i('selection', 60293),
          listTree: i('list-tree', 60294),
          debugBreakpointFunctionUnverified: i(
            'debug-breakpoint-function-unverified',
            60295,
          ),
          debugBreakpointFunction: i('debug-breakpoint-function', 60296),
          debugBreakpointFunctionDisabled: i(
            'debug-breakpoint-function-disabled',
            60296,
          ),
          debugStackframeActive: i('debug-stackframe-active', 60297),
          circleSmallFilled: i('circle-small-filled', 60298),
          debugStackframeDot: i('debug-stackframe-dot', 60298),
          debugStackframe: i('debug-stackframe', 60299),
          debugStackframeFocused: i('debug-stackframe-focused', 60299),
          debugBreakpointUnsupported: i('debug-breakpoint-unsupported', 60300),
          symbolString: i('symbol-string', 60301),
          debugReverseContinue: i('debug-reverse-continue', 60302),
          debugStepBack: i('debug-step-back', 60303),
          debugRestartFrame: i('debug-restart-frame', 60304),
          callIncoming: i('call-incoming', 60306),
          callOutgoing: i('call-outgoing', 60307),
          menu: i('menu', 60308),
          expandAll: i('expand-all', 60309),
          feedback: i('feedback', 60310),
          groupByRefType: i('group-by-ref-type', 60311),
          ungroupByRefType: i('ungroup-by-ref-type', 60312),
          account: i('account', 60313),
          bellDot: i('bell-dot', 60314),
          debugConsole: i('debug-console', 60315),
          library: i('library', 60316),
          output: i('output', 60317),
          runAll: i('run-all', 60318),
          syncIgnored: i('sync-ignored', 60319),
          pinned: i('pinned', 60320),
          githubInverted: i('github-inverted', 60321),
          debugAlt: i('debug-alt', 60305),
          serverProcess: i('server-process', 60322),
          serverEnvironment: i('server-environment', 60323),
          pass: i('pass', 60324),
          stopCircle: i('stop-circle', 60325),
          playCircle: i('play-circle', 60326),
          record: i('record', 60327),
          debugAltSmall: i('debug-alt-small', 60328),
          vmConnect: i('vm-connect', 60329),
          cloud: i('cloud', 60330),
          merge: i('merge', 60331),
          exportIcon: i('export', 60332),
          graphLeft: i('graph-left', 60333),
          magnet: i('magnet', 60334),
          notebook: i('notebook', 60335),
          redo: i('redo', 60336),
          checkAll: i('check-all', 60337),
          pinnedDirty: i('pinned-dirty', 60338),
          passFilled: i('pass-filled', 60339),
          circleLargeFilled: i('circle-large-filled', 60340),
          circleLarge: i('circle-large', 60341),
          circleLargeOutline: i('circle-large-outline', 60341),
          combine: i('combine', 60342),
          gather: i('gather', 60342),
          table: i('table', 60343),
          variableGroup: i('variable-group', 60344),
          typeHierarchy: i('type-hierarchy', 60345),
          typeHierarchySub: i('type-hierarchy-sub', 60346),
          typeHierarchySuper: i('type-hierarchy-super', 60347),
          gitPullRequestCreate: i('git-pull-request-create', 60348),
          runAbove: i('run-above', 60349),
          runBelow: i('run-below', 60350),
          notebookTemplate: i('notebook-template', 60351),
          debugRerun: i('debug-rerun', 60352),
          workspaceTrusted: i('workspace-trusted', 60353),
          workspaceUntrusted: i('workspace-untrusted', 60354),
          workspaceUnspecified: i('workspace-unspecified', 60355),
          terminalCmd: i('terminal-cmd', 60356),
          terminalDebian: i('terminal-debian', 60357),
          terminalLinux: i('terminal-linux', 60358),
          terminalPowershell: i('terminal-powershell', 60359),
          terminalTmux: i('terminal-tmux', 60360),
          terminalUbuntu: i('terminal-ubuntu', 60361),
          terminalBash: i('terminal-bash', 60362),
          arrowSwap: i('arrow-swap', 60363),
          copy: i('copy', 60364),
          personAdd: i('person-add', 60365),
          filterFilled: i('filter-filled', 60366),
          wand: i('wand', 60367),
          debugLineByLine: i('debug-line-by-line', 60368),
          inspect: i('inspect', 60369),
          layers: i('layers', 60370),
          layersDot: i('layers-dot', 60371),
          layersActive: i('layers-active', 60372),
          compass: i('compass', 60373),
          compassDot: i('compass-dot', 60374),
          compassActive: i('compass-active', 60375),
          azure: i('azure', 60376),
          issueDraft: i('issue-draft', 60377),
          gitPullRequestClosed: i('git-pull-request-closed', 60378),
          gitPullRequestDraft: i('git-pull-request-draft', 60379),
          debugAll: i('debug-all', 60380),
          debugCoverage: i('debug-coverage', 60381),
          runErrors: i('run-errors', 60382),
          folderLibrary: i('folder-library', 60383),
          debugContinueSmall: i('debug-continue-small', 60384),
          beakerStop: i('beaker-stop', 60385),
          graphLine: i('graph-line', 60386),
          graphScatter: i('graph-scatter', 60387),
          pieChart: i('pie-chart', 60388),
          bracketDot: i('bracket-dot', 60389),
          bracketError: i('bracket-error', 60390),
          lockSmall: i('lock-small', 60391),
          azureDevops: i('azure-devops', 60392),
          verifiedFilled: i('verified-filled', 60393),
          newLine: i('newline', 60394),
          layout: i('layout', 60395),
          layoutActivitybarLeft: i('layout-activitybar-left', 60396),
          layoutActivitybarRight: i('layout-activitybar-right', 60397),
          layoutPanelLeft: i('layout-panel-left', 60398),
          layoutPanelCenter: i('layout-panel-center', 60399),
          layoutPanelJustify: i('layout-panel-justify', 60400),
          layoutPanelRight: i('layout-panel-right', 60401),
          layoutPanel: i('layout-panel', 60402),
          layoutSidebarLeft: i('layout-sidebar-left', 60403),
          layoutSidebarRight: i('layout-sidebar-right', 60404),
          layoutStatusbar: i('layout-statusbar', 60405),
          layoutMenubar: i('layout-menubar', 60406),
          layoutCentered: i('layout-centered', 60407),
          layoutSidebarRightOff: i('layout-sidebar-right-off', 60416),
          layoutPanelOff: i('layout-panel-off', 60417),
          layoutSidebarLeftOff: i('layout-sidebar-left-off', 60418),
          target: i('target', 60408),
          indent: i('indent', 60409),
          recordSmall: i('record-small', 60410),
          errorSmall: i('error-small', 60411),
          arrowCircleDown: i('arrow-circle-down', 60412),
          arrowCircleLeft: i('arrow-circle-left', 60413),
          arrowCircleRight: i('arrow-circle-right', 60414),
          arrowCircleUp: i('arrow-circle-up', 60415),
          heartFilled: i('heart-filled', 60420),
          map: i('map', 60421),
          mapFilled: i('map-filled', 60422),
          circleSmall: i('circle-small', 60423),
          bellSlash: i('bell-slash', 60424),
          bellSlashDot: i('bell-slash-dot', 60425),
          commentUnresolved: i('comment-unresolved', 60426),
          gitPullRequestGoToChanges: i('git-pull-request-go-to-changes', 60427),
          gitPullRequestNewChanges: i('git-pull-request-new-changes', 60428),
          searchFuzzy: i('search-fuzzy', 60429),
          commentDraft: i('comment-draft', 60430),
          dialogError: i('dialog-error', 'error'),
          dialogWarning: i('dialog-warning', 'warning'),
          dialogInfo: i('dialog-info', 'info'),
          dialogClose: i('dialog-close', 'close'),
          treeItemExpanded: i('tree-item-expanded', 'chevron-down'),
          treeFilterOnTypeOn: i('tree-filter-on-type-on', 'list-filter'),
          treeFilterOnTypeOff: i('tree-filter-on-type-off', 'list-selection'),
          treeFilterClear: i('tree-filter-clear', 'close'),
          treeItemLoading: i('tree-item-loading', 'loading'),
          menuSelection: i('menu-selection', 'check'),
          menuSubmenu: i('menu-submenu', 'chevron-right'),
          menuBarMore: i('menubar-more', 'more'),
          scrollbarButtonLeft: i('scrollbar-button-left', 'triangle-left'),
          scrollbarButtonRight: i('scrollbar-button-right', 'triangle-right'),
          scrollbarButtonUp: i('scrollbar-button-up', 'triangle-up'),
          scrollbarButtonDown: i('scrollbar-button-down', 'triangle-down'),
          toolBarMore: i('toolbar-more', 'more'),
          quickInputBack: i('quick-input-back', 'arrow-left'),
        });
    }),
    Y(X[11], Q([0, 1, 17]), function (U, n, A) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.createProxyObject =
          n.getAllMethodNames =
          n.getAllPropertyNames =
          n.equals =
          n.mixin =
          n.cloneAndChange =
          n.deepFreeze =
          n.deepClone =
            void 0);
      function M(h) {
        if (!h || typeof h != 'object' || h instanceof RegExp) return h;
        const b = Array.isArray(h) ? [] : {};
        return (
          Object.entries(h).forEach(([L, S]) => {
            b[L] = S && typeof S == 'object' ? M(S) : S;
          }),
          b
        );
      }
      n.deepClone = M;
      function i(h) {
        if (!h || typeof h != 'object') return h;
        const b = [h];
        for (; b.length > 0; ) {
          const L = b.shift();
          Object.freeze(L);
          for (const S in L)
            if (u.call(L, S)) {
              const _ = L[S];
              typeof _ == 'object' &&
                !Object.isFrozen(_) &&
                !(0, A.isTypedArray)(_) &&
                b.push(_);
            }
        }
        return h;
      }
      n.deepFreeze = i;
      const u = Object.prototype.hasOwnProperty;
      function y(h, b) {
        return v(h, b, new Set());
      }
      n.cloneAndChange = y;
      function v(h, b, L) {
        if ((0, A.isUndefinedOrNull)(h)) return h;
        const S = b(h);
        if (typeof S < 'u') return S;
        if (Array.isArray(h)) {
          const _ = [];
          for (const m of h) _.push(v(m, b, L));
          return _;
        }
        if ((0, A.isObject)(h)) {
          if (L.has(h))
            throw new Error('Cannot clone recursive data-structure');
          L.add(h);
          const _ = {};
          for (const m in h) u.call(h, m) && (_[m] = v(h[m], b, L));
          return L.delete(h), _;
        }
        return h;
      }
      function o(h, b, L = !0) {
        return (0, A.isObject)(h)
          ? ((0, A.isObject)(b) &&
              Object.keys(b).forEach((S) => {
                S in h
                  ? L &&
                    ((0, A.isObject)(h[S]) && (0, A.isObject)(b[S])
                      ? o(h[S], b[S], L)
                      : (h[S] = b[S]))
                  : (h[S] = b[S]);
              }),
            h)
          : b;
      }
      n.mixin = o;
      function f(h, b) {
        if (h === b) return !0;
        if (
          h == null ||
          b === null ||
          b === void 0 ||
          typeof h != typeof b ||
          typeof h != 'object' ||
          Array.isArray(h) !== Array.isArray(b)
        )
          return !1;
        let L, S;
        if (Array.isArray(h)) {
          if (h.length !== b.length) return !1;
          for (L = 0; L < h.length; L++) if (!f(h[L], b[L])) return !1;
        } else {
          const _ = [];
          for (S in h) _.push(S);
          _.sort();
          const m = [];
          for (S in b) m.push(S);
          if ((m.sort(), !f(_, m))) return !1;
          for (L = 0; L < _.length; L++) if (!f(h[_[L]], b[_[L]])) return !1;
        }
        return !0;
      }
      n.equals = f;
      function N(h) {
        let b = [],
          L = Object.getPrototypeOf(h);
        for (; Object.prototype !== L; )
          (b = b.concat(Object.getOwnPropertyNames(L))),
            (L = Object.getPrototypeOf(L));
        return b;
      }
      n.getAllPropertyNames = N;
      function e(h) {
        const b = [];
        for (const L of N(h)) typeof h[L] == 'function' && b.push(L);
        return b;
      }
      n.getAllMethodNames = e;
      function C(h, b) {
        const L = (_) =>
            function () {
              const m = Array.prototype.slice.call(arguments, 0);
              return b(_, m);
            },
          S = {};
        for (const _ of h) S[_] = L(_);
        return S;
      }
      n.createProxyObject = C;
    }),
    Y(X[18], Q([0, 1]), function (U, n) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.toUint32 = n.toUint8 = void 0);
      function A(i) {
        return i < 0 ? 0 : i > 255 ? 255 : i | 0;
      }
      n.toUint8 = A;
      function M(i) {
        return i < 0 ? 0 : i > 4294967295 ? 4294967295 : i | 0;
      }
      n.toUint32 = M;
    }),
    Y(X[19], Q([0, 1, 18]), function (U, n, A) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.CharacterSet = n.CharacterClassifier = void 0);
      class M {
        constructor(y) {
          const v = (0, A.toUint8)(y);
          (this.c = v), (this.a = M.d(v)), (this.b = new Map());
        }
        static d(y) {
          const v = new Uint8Array(256);
          return v.fill(y), v;
        }
        set(y, v) {
          const o = (0, A.toUint8)(v);
          y >= 0 && y < 256 ? (this.a[y] = o) : this.b.set(y, o);
        }
        get(y) {
          return y >= 0 && y < 256 ? this.a[y] : this.b.get(y) || this.c;
        }
        clear() {
          this.a.fill(this.c), this.b.clear();
        }
      }
      n.CharacterClassifier = M;
      class i {
        constructor() {
          this.a = new M(0);
        }
        add(y) {
          this.a.set(y, 1);
        }
        has(y) {
          return this.a.get(y) === 1;
        }
        clear() {
          return this.a.clear();
        }
      }
      n.CharacterSet = i;
    }),
    Y(X[3], Q([0, 1]), function (U, n) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.Position = void 0);
      class A {
        constructor(i, u) {
          (this.lineNumber = i), (this.column = u);
        }
        with(i = this.lineNumber, u = this.column) {
          return i === this.lineNumber && u === this.column
            ? this
            : new A(i, u);
        }
        delta(i = 0, u = 0) {
          return this.with(this.lineNumber + i, this.column + u);
        }
        equals(i) {
          return A.equals(this, i);
        }
        static equals(i, u) {
          return !i && !u
            ? !0
            : !!i &&
                !!u &&
                i.lineNumber === u.lineNumber &&
                i.column === u.column;
        }
        isBefore(i) {
          return A.isBefore(this, i);
        }
        static isBefore(i, u) {
          return i.lineNumber < u.lineNumber
            ? !0
            : u.lineNumber < i.lineNumber
            ? !1
            : i.column < u.column;
        }
        isBeforeOrEqual(i) {
          return A.isBeforeOrEqual(this, i);
        }
        static isBeforeOrEqual(i, u) {
          return i.lineNumber < u.lineNumber
            ? !0
            : u.lineNumber < i.lineNumber
            ? !1
            : i.column <= u.column;
        }
        static compare(i, u) {
          const y = i.lineNumber | 0,
            v = u.lineNumber | 0;
          if (y === v) {
            const o = i.column | 0,
              f = u.column | 0;
            return o - f;
          }
          return y - v;
        }
        clone() {
          return new A(this.lineNumber, this.column);
        }
        toString() {
          return '(' + this.lineNumber + ',' + this.column + ')';
        }
        static lift(i) {
          return new A(i.lineNumber, i.column);
        }
        static isIPosition(i) {
          return (
            i && typeof i.lineNumber == 'number' && typeof i.column == 'number'
          );
        }
      }
      n.Position = A;
    }),
    Y(X[2], Q([0, 1, 3]), function (U, n, A) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }), (n.Range = void 0);
      class M {
        constructor(u, y, v, o) {
          u > v || (u === v && y > o)
            ? ((this.startLineNumber = v),
              (this.startColumn = o),
              (this.endLineNumber = u),
              (this.endColumn = y))
            : ((this.startLineNumber = u),
              (this.startColumn = y),
              (this.endLineNumber = v),
              (this.endColumn = o));
        }
        isEmpty() {
          return M.isEmpty(this);
        }
        static isEmpty(u) {
          return (
            u.startLineNumber === u.endLineNumber &&
            u.startColumn === u.endColumn
          );
        }
        containsPosition(u) {
          return M.containsPosition(this, u);
        }
        static containsPosition(u, y) {
          return !(
            y.lineNumber < u.startLineNumber ||
            y.lineNumber > u.endLineNumber ||
            (y.lineNumber === u.startLineNumber && y.column < u.startColumn) ||
            (y.lineNumber === u.endLineNumber && y.column > u.endColumn)
          );
        }
        static strictContainsPosition(u, y) {
          return !(
            y.lineNumber < u.startLineNumber ||
            y.lineNumber > u.endLineNumber ||
            (y.lineNumber === u.startLineNumber && y.column <= u.startColumn) ||
            (y.lineNumber === u.endLineNumber && y.column >= u.endColumn)
          );
        }
        containsRange(u) {
          return M.containsRange(this, u);
        }
        static containsRange(u, y) {
          return !(
            y.startLineNumber < u.startLineNumber ||
            y.endLineNumber < u.startLineNumber ||
            y.startLineNumber > u.endLineNumber ||
            y.endLineNumber > u.endLineNumber ||
            (y.startLineNumber === u.startLineNumber &&
              y.startColumn < u.startColumn) ||
            (y.endLineNumber === u.endLineNumber && y.endColumn > u.endColumn)
          );
        }
        strictContainsRange(u) {
          return M.strictContainsRange(this, u);
        }
        static strictContainsRange(u, y) {
          return !(
            y.startLineNumber < u.startLineNumber ||
            y.endLineNumber < u.startLineNumber ||
            y.startLineNumber > u.endLineNumber ||
            y.endLineNumber > u.endLineNumber ||
            (y.startLineNumber === u.startLineNumber &&
              y.startColumn <= u.startColumn) ||
            (y.endLineNumber === u.endLineNumber && y.endColumn >= u.endColumn)
          );
        }
        plusRange(u) {
          return M.plusRange(this, u);
        }
        static plusRange(u, y) {
          let v, o, f, N;
          return (
            y.startLineNumber < u.startLineNumber
              ? ((v = y.startLineNumber), (o = y.startColumn))
              : y.startLineNumber === u.startLineNumber
              ? ((v = y.startLineNumber),
                (o = Math.min(y.startColumn, u.startColumn)))
              : ((v = u.startLineNumber), (o = u.startColumn)),
            y.endLineNumber > u.endLineNumber
              ? ((f = y.endLineNumber), (N = y.endColumn))
              : y.endLineNumber === u.endLineNumber
              ? ((f = y.endLineNumber),
                (N = Math.max(y.endColumn, u.endColumn)))
              : ((f = u.endLineNumber), (N = u.endColumn)),
            new M(v, o, f, N)
          );
        }
        intersectRanges(u) {
          return M.intersectRanges(this, u);
        }
        static intersectRanges(u, y) {
          let v = u.startLineNumber,
            o = u.startColumn,
            f = u.endLineNumber,
            N = u.endColumn;
          const e = y.startLineNumber,
            C = y.startColumn,
            h = y.endLineNumber,
            b = y.endColumn;
          return (
            v < e ? ((v = e), (o = C)) : v === e && (o = Math.max(o, C)),
            f > h ? ((f = h), (N = b)) : f === h && (N = Math.min(N, b)),
            v > f || (v === f && o > N) ? null : new M(v, o, f, N)
          );
        }
        equalsRange(u) {
          return M.equalsRange(this, u);
        }
        static equalsRange(u, y) {
          return !u && !y
            ? !0
            : !!u &&
                !!y &&
                u.startLineNumber === y.startLineNumber &&
                u.startColumn === y.startColumn &&
                u.endLineNumber === y.endLineNumber &&
                u.endColumn === y.endColumn;
        }
        getEndPosition() {
          return M.getEndPosition(this);
        }
        static getEndPosition(u) {
          return new A.Position(u.endLineNumber, u.endColumn);
        }
        getStartPosition() {
          return M.getStartPosition(this);
        }
        static getStartPosition(u) {
          return new A.Position(u.startLineNumber, u.startColumn);
        }
        toString() {
          return (
            '[' +
            this.startLineNumber +
            ',' +
            this.startColumn +
            ' -> ' +
            this.endLineNumber +
            ',' +
            this.endColumn +
            ']'
          );
        }
        setEndPosition(u, y) {
          return new M(this.startLineNumber, this.startColumn, u, y);
        }
        setStartPosition(u, y) {
          return new M(u, y, this.endLineNumber, this.endColumn);
        }
        collapseToStart() {
          return M.collapseToStart(this);
        }
        static collapseToStart(u) {
          return new M(
            u.startLineNumber,
            u.startColumn,
            u.startLineNumber,
            u.startColumn,
          );
        }
        collapseToEnd() {
          return M.collapseToEnd(this);
        }
        static collapseToEnd(u) {
          return new M(
            u.endLineNumber,
            u.endColumn,
            u.endLineNumber,
            u.endColumn,
          );
        }
        delta(u) {
          return new M(
            this.startLineNumber + u,
            this.startColumn,
            this.endLineNumber + u,
            this.endColumn,
          );
        }
        static fromPositions(u, y = u) {
          return new M(u.lineNumber, u.column, y.lineNumber, y.column);
        }
        static lift(u) {
          return u
            ? new M(
                u.startLineNumber,
                u.startColumn,
                u.endLineNumber,
                u.endColumn,
              )
            : null;
        }
        static isIRange(u) {
          return (
            u &&
            typeof u.startLineNumber == 'number' &&
            typeof u.startColumn == 'number' &&
            typeof u.endLineNumber == 'number' &&
            typeof u.endColumn == 'number'
          );
        }
        static areIntersectingOrTouching(u, y) {
          return !(
            u.endLineNumber < y.startLineNumber ||
            (u.endLineNumber === y.startLineNumber &&
              u.endColumn < y.startColumn) ||
            y.endLineNumber < u.startLineNumber ||
            (y.endLineNumber === u.startLineNumber &&
              y.endColumn < u.startColumn)
          );
        }
        static areIntersecting(u, y) {
          return !(
            u.endLineNumber < y.startLineNumber ||
            (u.endLineNumber === y.startLineNumber &&
              u.endColumn <= y.startColumn) ||
            y.endLineNumber < u.startLineNumber ||
            (y.endLineNumber === u.startLineNumber &&
              y.endColumn <= u.startColumn)
          );
        }
        static compareRangesUsingStarts(u, y) {
          if (u && y) {
            const f = u.startLineNumber | 0,
              N = y.startLineNumber | 0;
            if (f === N) {
              const e = u.startColumn | 0,
                C = y.startColumn | 0;
              if (e === C) {
                const h = u.endLineNumber | 0,
                  b = y.endLineNumber | 0;
                if (h === b) {
                  const L = u.endColumn | 0,
                    S = y.endColumn | 0;
                  return L - S;
                }
                return h - b;
              }
              return e - C;
            }
            return f - N;
          }
          return (u ? 1 : 0) - (y ? 1 : 0);
        }
        static compareRangesUsingEnds(u, y) {
          return u.endLineNumber === y.endLineNumber
            ? u.endColumn === y.endColumn
              ? u.startLineNumber === y.startLineNumber
                ? u.startColumn - y.startColumn
                : u.startLineNumber - y.startLineNumber
              : u.endColumn - y.endColumn
            : u.endLineNumber - y.endLineNumber;
        }
        static spansMultipleLines(u) {
          return u.endLineNumber > u.startLineNumber;
        }
        toJSON() {
          return this;
        }
      }
      n.Range = M;
    }),
    Y(X[31], Q([0, 1, 3, 2]), function (U, n, A, M) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.Selection = void 0);
      class i extends M.Range {
        constructor(y, v, o, f) {
          super(y, v, o, f),
            (this.selectionStartLineNumber = y),
            (this.selectionStartColumn = v),
            (this.positionLineNumber = o),
            (this.positionColumn = f);
        }
        toString() {
          return (
            '[' +
            this.selectionStartLineNumber +
            ',' +
            this.selectionStartColumn +
            ' -> ' +
            this.positionLineNumber +
            ',' +
            this.positionColumn +
            ']'
          );
        }
        equalsSelection(y) {
          return i.selectionsEqual(this, y);
        }
        static selectionsEqual(y, v) {
          return (
            y.selectionStartLineNumber === v.selectionStartLineNumber &&
            y.selectionStartColumn === v.selectionStartColumn &&
            y.positionLineNumber === v.positionLineNumber &&
            y.positionColumn === v.positionColumn
          );
        }
        getDirection() {
          return this.selectionStartLineNumber === this.startLineNumber &&
            this.selectionStartColumn === this.startColumn
            ? 0
            : 1;
        }
        setEndPosition(y, v) {
          return this.getDirection() === 0
            ? new i(this.startLineNumber, this.startColumn, y, v)
            : new i(y, v, this.startLineNumber, this.startColumn);
        }
        getPosition() {
          return new A.Position(this.positionLineNumber, this.positionColumn);
        }
        getSelectionStart() {
          return new A.Position(
            this.selectionStartLineNumber,
            this.selectionStartColumn,
          );
        }
        setStartPosition(y, v) {
          return this.getDirection() === 0
            ? new i(y, v, this.endLineNumber, this.endColumn)
            : new i(this.endLineNumber, this.endColumn, y, v);
        }
        static fromPositions(y, v = y) {
          return new i(y.lineNumber, y.column, v.lineNumber, v.column);
        }
        static fromRange(y, v) {
          return v === 0
            ? new i(
                y.startLineNumber,
                y.startColumn,
                y.endLineNumber,
                y.endColumn,
              )
            : new i(
                y.endLineNumber,
                y.endColumn,
                y.startLineNumber,
                y.startColumn,
              );
        }
        static liftSelection(y) {
          return new i(
            y.selectionStartLineNumber,
            y.selectionStartColumn,
            y.positionLineNumber,
            y.positionColumn,
          );
        }
        static selectionsArrEqual(y, v) {
          if ((y && !v) || (!y && v)) return !1;
          if (!y && !v) return !0;
          if (y.length !== v.length) return !1;
          for (let o = 0, f = y.length; o < f; o++)
            if (!this.selectionsEqual(y[o], v[o])) return !1;
          return !0;
        }
        static isISelection(y) {
          return (
            y &&
            typeof y.selectionStartLineNumber == 'number' &&
            typeof y.selectionStartColumn == 'number' &&
            typeof y.positionLineNumber == 'number' &&
            typeof y.positionColumn == 'number'
          );
        }
        static createWithDirection(y, v, o, f, N) {
          return N === 0 ? new i(y, v, o, f) : new i(o, f, y, v);
        }
      }
      n.Selection = i;
    }),
    Y(X[32], Q([0, 1, 19]), function (U, n, A) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.getMapForWordSeparators = n.WordCharacterClassifier = void 0);
      class M extends A.CharacterClassifier {
        constructor(y) {
          super(0);
          for (let v = 0, o = y.length; v < o; v++)
            this.set(y.charCodeAt(v), 2);
          this.set(32, 1), this.set(9, 1);
        }
      }
      n.WordCharacterClassifier = M;
      function i(u) {
        const y = {};
        return (v) => (y.hasOwnProperty(v) || (y[v] = u(v)), y[v]);
      }
      n.getMapForWordSeparators = i((u) => new M(u));
    }),
    Y(X[20], Q([0, 1, 14, 15]), function (U, n, A, M) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.getWordAtText =
          n.ensureValidWordDefinition =
          n.DEFAULT_WORD_REGEXP =
          n.USUAL_WORD_SEPARATORS =
            void 0),
        (n.USUAL_WORD_SEPARATORS = '`~!@#$%^&*()-=+[{]}\\|;:\'",.<>/?');
      function i(f = '') {
        let N = '(-?\\d*\\.\\d\\w*)|([^';
        for (const e of n.USUAL_WORD_SEPARATORS)
          f.indexOf(e) >= 0 || (N += '\\' + e);
        return (N += '\\s]+)'), new RegExp(N, 'g');
      }
      n.DEFAULT_WORD_REGEXP = i();
      function u(f) {
        let N = n.DEFAULT_WORD_REGEXP;
        if (f && f instanceof RegExp)
          if (f.global) N = f;
          else {
            let e = 'g';
            f.ignoreCase && (e += 'i'),
              f.multiline && (e += 'm'),
              f.unicode && (e += 'u'),
              (N = new RegExp(f.source, e));
          }
        return (N.lastIndex = 0), N;
      }
      n.ensureValidWordDefinition = u;
      const y = new M.LinkedList();
      y.unshift({ maxLen: 1e3, windowSize: 15, timeBudget: 150 });
      function v(f, N, e, C, h) {
        if ((h || (h = A.Iterable.first(y)), e.length > h.maxLen)) {
          let m = f - h.maxLen / 2;
          return (
            m < 0 ? (m = 0) : (C += m),
            (e = e.substring(m, f + h.maxLen / 2)),
            v(f, N, e, C, h)
          );
        }
        const b = Date.now(),
          L = f - 1 - C;
        let S = -1,
          _ = null;
        for (let m = 1; !(Date.now() - b >= h.timeBudget); m++) {
          const w = L - h.windowSize * m;
          N.lastIndex = Math.max(0, w);
          const l = o(N, e, L, S);
          if ((!l && _) || ((_ = l), w <= 0)) break;
          S = w;
        }
        if (_) {
          const m = {
            word: _[0],
            startColumn: C + 1 + _.index,
            endColumn: C + 1 + _.index + _[0].length,
          };
          return (N.lastIndex = 0), m;
        }
        return null;
      }
      n.getWordAtText = v;
      function o(f, N, e, C) {
        let h;
        for (; (h = f.exec(N)); ) {
          const b = h.index || 0;
          if (b <= e && f.lastIndex >= e) return h;
          if (C > 0 && b > C) return null;
        }
        return null;
      }
    }),
    Y(X[6], Q([0, 1]), function (U, n) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.OffsetRange = n.SequenceDiff = void 0);
      class A {
        constructor(u, y) {
          (this.seq1Range = u), (this.seq2Range = y);
        }
        reverse() {
          return new A(this.seq2Range, this.seq1Range);
        }
        toString() {
          return `${this.seq1Range} <-> ${this.seq2Range}`;
        }
      }
      n.SequenceDiff = A;
      class M {
        constructor(u, y) {
          (this.start = u), (this.endExclusive = y);
        }
        get isEmpty() {
          return this.start === this.endExclusive;
        }
        delta(u) {
          return new M(this.start + u, this.endExclusive + u);
        }
        get length() {
          return this.endExclusive - this.start;
        }
        toString() {
          return `[${this.start}, ${this.endExclusive})`;
        }
        join(u) {
          return new M(
            Math.min(this.start, u.start),
            Math.max(this.endExclusive, u.endExclusive),
          );
        }
      }
      n.OffsetRange = M;
    }),
    Y(X[33], Q([0, 1, 6]), function (U, n, A) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.shiftSequenceDiffs =
          n.joinSequenceDiffs =
          n.smoothenSequenceDiffs =
          n.optimizeSequenceDiffs =
            void 0);
      function M(o, f, N) {
        let e = N;
        return (e = u(o, f, e)), (e = y(o, f, e)), e;
      }
      n.optimizeSequenceDiffs = M;
      function i(o, f, N) {
        const e = [];
        for (const C of N) {
          const h = e[e.length - 1];
          if (!h) {
            e.push(C);
            continue;
          }
          C.seq1Range.start - h.seq1Range.endExclusive <= 2 ||
          C.seq2Range.start - h.seq2Range.endExclusive <= 2
            ? (e[e.length - 1] = new A.SequenceDiff(
                h.seq1Range.join(C.seq1Range),
                h.seq2Range.join(C.seq2Range),
              ))
            : e.push(C);
        }
        return e;
      }
      n.smoothenSequenceDiffs = i;
      function u(o, f, N) {
        const e = [];
        N.length > 0 && e.push(N[0]);
        for (let C = 1; C < N.length; C++) {
          const h = e[e.length - 1],
            b = N[C];
          if (b.seq1Range.isEmpty) {
            let L = !0;
            const S = b.seq1Range.start - h.seq1Range.endExclusive;
            for (let _ = 1; _ <= S; _++)
              if (
                f.getElement(b.seq2Range.start - _) !==
                f.getElement(b.seq2Range.endExclusive - _)
              ) {
                L = !1;
                break;
              }
            if (L) {
              e[e.length - 1] = new A.SequenceDiff(
                h.seq1Range,
                new A.OffsetRange(
                  h.seq2Range.start,
                  b.seq2Range.endExclusive - S,
                ),
              );
              continue;
            }
          }
          e.push(b);
        }
        return e;
      }
      n.joinSequenceDiffs = u;
      function y(o, f, N) {
        if (!o.getBoundaryScore || !f.getBoundaryScore) return N;
        for (let e = 0; e < N.length; e++) {
          const C = N[e];
          if (C.seq1Range.isEmpty) {
            const h = e > 0 ? N[e - 1].seq2Range.endExclusive : -1,
              b = e + 1 < N.length ? N[e + 1].seq2Range.start : f.length;
            N[e] = v(C, o, f, b, h);
          } else if (C.seq2Range.isEmpty) {
            const h = e > 0 ? N[e - 1].seq1Range.endExclusive : -1,
              b = e + 1 < N.length ? N[e + 1].seq1Range.start : o.length;
            N[e] = v(C.reverse(), f, o, b, h).reverse();
          }
        }
        return N;
      }
      n.shiftSequenceDiffs = y;
      function v(o, f, N, e, C) {
        let b = 1;
        for (
          ;
          o.seq2Range.start - b > C &&
          N.getElement(o.seq2Range.start - b) ===
            N.getElement(o.seq2Range.endExclusive - b) &&
          b < 20;

        )
          b++;
        b--;
        let L = 0;
        for (
          ;
          o.seq2Range.start + L < e &&
          N.getElement(o.seq2Range.start + L) ===
            N.getElement(o.seq2Range.endExclusive + L) &&
          L < 20;

        )
          L++;
        if (b === 0 && L === 0) return o;
        let S = 0,
          _ = -1;
        for (let m = -b; m <= L; m++) {
          const w = o.seq2Range.start + m,
            l = o.seq2Range.endExclusive + m,
            g = o.seq1Range.start + m,
            r =
              f.getBoundaryScore(g) +
              N.getBoundaryScore(w) +
              N.getBoundaryScore(l);
          r > _ && ((_ = r), (S = m));
        }
        return S !== 0
          ? new A.SequenceDiff(o.seq1Range.delta(S), o.seq2Range.delta(S))
          : o;
      }
    }),
    Y(X[34], Q([0, 1, 6]), function (U, n, A) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.MyersDiffAlgorithm = void 0);
      class M {
        compute(o, f) {
          if (o.length === 0)
            return [
              new A.SequenceDiff(
                new A.OffsetRange(0, 0),
                new A.OffsetRange(0, f.length),
              ),
            ];
          if (f.length === 0)
            return [
              new A.SequenceDiff(
                new A.OffsetRange(0, o.length),
                new A.OffsetRange(0, 0),
              ),
            ];
          function N(w, l) {
            for (
              ;
              w < o.length &&
              l < f.length &&
              o.getElement(w) === f.getElement(l);

            )
              w++, l++;
            return w;
          }
          let e = 0;
          const C = new u();
          C.set(0, N(0, 0));
          const h = new y();
          h.set(0, C.get(0) === 0 ? null : new i(null, 0, 0, C.get(0)));
          let b = 0;
          e: for (;;)
            for (e++, b = -e; b <= e; b += 2) {
              const w = b === e ? -1 : C.get(b + 1),
                l = b === -e ? -1 : C.get(b - 1) + 1,
                g = Math.min(Math.max(w, l), o.length),
                r = g - b,
                a = N(g, r);
              C.set(b, a);
              const s = g === w ? h.get(b + 1) : h.get(b - 1);
              if (
                (h.set(b, a !== g ? new i(s, g, r, a - g) : s),
                C.get(b) === o.length && C.get(b) - b === f.length)
              )
                break e;
            }
          let L = h.get(b);
          const S = [];
          let _ = o.length,
            m = f.length;
          for (;;) {
            const w = L ? L.x + L.length : 0,
              l = L ? L.y + L.length : 0;
            if (
              ((w !== _ || l !== m) &&
                S.push(
                  new A.SequenceDiff(
                    new A.OffsetRange(w, _),
                    new A.OffsetRange(l, m),
                  ),
                ),
              !L)
            )
              break;
            (_ = L.x), (m = L.y), (L = L.prev);
          }
          return S.reverse(), S;
        }
      }
      n.MyersDiffAlgorithm = M;
      class i {
        constructor(o, f, N, e) {
          (this.prev = o), (this.x = f), (this.y = N), (this.length = e);
        }
      }
      class u {
        constructor() {
          (this.a = new Int32Array(10)), (this.b = new Int32Array(10));
        }
        get(o) {
          return o < 0 ? ((o = -o - 1), this.b[o]) : this.a[o];
        }
        set(o, f) {
          if (o < 0) {
            if (((o = -o - 1), o >= this.b.length)) {
              const N = this.b;
              (this.b = new Int32Array(N.length * 2)), this.b.set(N);
            }
            this.b[o] = f;
          } else {
            if (o >= this.a.length) {
              const N = this.a;
              (this.a = new Int32Array(N.length * 2)), this.a.set(N);
            }
            this.a[o] = f;
          }
        }
      }
      class y {
        constructor() {
          (this.a = []), (this.b = []);
        }
        get(o) {
          return o < 0 ? ((o = -o - 1), this.b[o]) : this.a[o];
        }
        set(o, f) {
          o < 0 ? ((o = -o - 1), (this.b[o] = f)) : (this.a[o] = f);
        }
      }
    }),
    Y(X[35], Q([0, 1]), function (U, n) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.Array2D = void 0);
      class A {
        constructor(i, u) {
          (this.width = i),
            (this.height = u),
            (this.a = []),
            (this.a = new Array(i * u));
        }
        get(i, u) {
          return this.a[i + u * this.width];
        }
        set(i, u, y) {
          this.a[i + u * this.width] = y;
        }
      }
      n.Array2D = A;
    }),
    Y(X[36], Q([0, 1, 6, 35]), function (U, n, A, M) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.DynamicProgrammingDiffing = void 0);
      class i {
        compute(y, v, o) {
          const f = new M.Array2D(y.length, v.length),
            N = new M.Array2D(y.length, v.length),
            e = new M.Array2D(y.length, v.length);
          for (let m = 0; m < y.length; m++)
            for (let w = 0; w < v.length; w++) {
              const l = m === 0 ? 0 : f.get(m - 1, w),
                g = w === 0 ? 0 : f.get(m, w - 1);
              let r;
              y.getElement(m) === v.getElement(w)
                ? (m === 0 || w === 0 ? (r = 0) : (r = f.get(m - 1, w - 1)),
                  m > 0 &&
                    w > 0 &&
                    N.get(m - 1, w - 1) === 3 &&
                    (r += e.get(m - 1, w - 1)),
                  (r += o ? o(m, w) : 1))
                : (r = -1);
              const a = Math.max(l, g, r);
              if (a === r) {
                const s = m > 0 && w > 0 ? e.get(m - 1, w - 1) : 0;
                e.set(m, w, s + 1), N.set(m, w, 3);
              } else
                a === l
                  ? (e.set(m, w, 0), N.set(m, w, 1))
                  : a === g && (e.set(m, w, 0), N.set(m, w, 2));
              f.set(m, w, a);
            }
          const C = [];
          let h = y.length,
            b = v.length;
          function L(m, w) {
            (m + 1 !== h || w + 1 !== b) &&
              C.push(
                new A.SequenceDiff(
                  new A.OffsetRange(m + 1, h),
                  new A.OffsetRange(w + 1, b),
                ),
              ),
              (h = m),
              (b = w);
          }
          let S = y.length - 1,
            _ = v.length - 1;
          for (; S >= 0 && _ >= 0; )
            N.get(S, _) === 3
              ? (L(S, _), S--, _--)
              : N.get(S, _) === 1
              ? S--
              : _--;
          return L(-1, -1), C.reverse(), C;
        }
      }
      n.DynamicProgrammingDiffing = i;
    }),
    Y(X[21], Q([0, 1]), function (U, n) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.LineRange = n.RangeMapping = n.LineRangeMapping = void 0);
      class A {
        constructor(y, v, o) {
          (this.originalRange = y),
            (this.modifiedRange = v),
            (this.innerChanges = o);
        }
        toString() {
          return `{${this.originalRange.toString()}->${this.modifiedRange.toString()}}`;
        }
      }
      n.LineRangeMapping = A;
      class M {
        constructor(y, v) {
          (this.originalRange = y), (this.modifiedRange = v);
        }
        toString() {
          return `{${this.originalRange.toString()}->${this.modifiedRange.toString()}}`;
        }
      }
      n.RangeMapping = M;
      class i {
        constructor(y, v) {
          (this.startLineNumber = y), (this.endLineNumberExclusive = v);
        }
        get isEmpty() {
          return this.startLineNumber === this.endLineNumberExclusive;
        }
        delta(y) {
          return new i(
            this.startLineNumber + y,
            this.endLineNumberExclusive + y,
          );
        }
        get length() {
          return this.endLineNumberExclusive - this.startLineNumber;
        }
        join(y) {
          return new i(
            Math.min(this.startLineNumber, y.startLineNumber),
            Math.max(this.endLineNumberExclusive, y.endLineNumberExclusive),
          );
        }
        toString() {
          return `[${this.startLineNumber},${this.endLineNumberExclusive})`;
        }
      }
      n.LineRange = i;
    }),
    Y(X[37], Q([0, 1, 16, 21, 4, 2, 9]), function (U, n, A, M, i, u, y) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.DiffComputer = n.SmartLinesDiffComputer = void 0);
      const v = 3;
      class o {
        computeDiff(l, g, r) {
          var a;
          const c = new L(l, g, {
              maxComputationTime: r.maxComputationTimeMs,
              shouldIgnoreTrimWhitespace: r.ignoreTrimWhitespace,
              shouldComputeCharChanges: !0,
              shouldMakePrettyDiff: !0,
              shouldPostProcessCharChanges: !0,
            }).computeDiff(),
            d = [];
          let p = null;
          for (const E of c.changes) {
            let R;
            E.originalEndLineNumber === 0
              ? (R = new M.LineRange(
                  E.originalStartLineNumber + 1,
                  E.originalStartLineNumber + 1,
                ))
              : (R = new M.LineRange(
                  E.originalStartLineNumber,
                  E.originalEndLineNumber + 1,
                ));
            let D;
            E.modifiedEndLineNumber === 0
              ? (D = new M.LineRange(
                  E.modifiedStartLineNumber + 1,
                  E.modifiedStartLineNumber + 1,
                ))
              : (D = new M.LineRange(
                  E.modifiedStartLineNumber,
                  E.modifiedEndLineNumber + 1,
                ));
            let F = new M.LineRangeMapping(
              R,
              D,
              (a = E.charChanges) === null || a === void 0
                ? void 0
                : a.map(
                    (W) =>
                      new M.RangeMapping(
                        new u.Range(
                          W.originalStartLineNumber,
                          W.originalStartColumn,
                          W.originalEndLineNumber,
                          W.originalEndColumn,
                        ),
                        new u.Range(
                          W.modifiedStartLineNumber,
                          W.modifiedStartColumn,
                          W.modifiedEndLineNumber,
                          W.modifiedEndColumn,
                        ),
                      ),
                  ),
            );
            p &&
              (p.modifiedRange.endLineNumberExclusive ===
                F.modifiedRange.startLineNumber ||
                p.originalRange.endLineNumberExclusive ===
                  F.originalRange.startLineNumber) &&
              ((F = new M.LineRangeMapping(
                p.originalRange.join(F.originalRange),
                p.modifiedRange.join(F.modifiedRange),
                p.innerChanges && F.innerChanges
                  ? p.innerChanges.concat(F.innerChanges)
                  : void 0,
              )),
              d.pop()),
              d.push(F),
              (p = F);
          }
          return (
            (0, y.assertFn)(() =>
              (0, y.checkAdjacentItems)(
                d,
                (E, R) =>
                  R.originalRange.startLineNumber -
                    E.originalRange.endLineNumberExclusive ===
                    R.modifiedRange.startLineNumber -
                      E.modifiedRange.endLineNumberExclusive &&
                  E.originalRange.endLineNumberExclusive <
                    R.originalRange.startLineNumber &&
                  E.modifiedRange.endLineNumberExclusive <
                    R.modifiedRange.startLineNumber,
              ),
            ),
            { quitEarly: c.quitEarly, changes: d }
          );
        }
      }
      n.SmartLinesDiffComputer = o;
      function f(w, l, g, r) {
        return new A.LcsDiff(w, l, g).ComputeDiff(r);
      }
      class N {
        constructor(l) {
          const g = [],
            r = [];
          for (let a = 0, s = l.length; a < s; a++)
            (g[a] = S(l[a], 1)), (r[a] = _(l[a], 1));
          (this.lines = l), (this.a = g), (this.b = r);
        }
        getElements() {
          const l = [];
          for (let g = 0, r = this.lines.length; g < r; g++)
            l[g] = this.lines[g].substring(this.a[g] - 1, this.b[g] - 1);
          return l;
        }
        getStrictElement(l) {
          return this.lines[l];
        }
        getStartLineNumber(l) {
          return l + 1;
        }
        getEndLineNumber(l) {
          return l + 1;
        }
        createCharSequence(l, g, r) {
          const a = [],
            s = [],
            c = [];
          let d = 0;
          for (let p = g; p <= r; p++) {
            const E = this.lines[p],
              R = l ? this.a[p] : 1,
              D = l ? this.b[p] : E.length + 1;
            for (let F = R; F < D; F++)
              (a[d] = E.charCodeAt(F - 1)), (s[d] = p + 1), (c[d] = F), d++;
            !l &&
              p < r &&
              ((a[d] = 10), (s[d] = p + 1), (c[d] = E.length + 1), d++);
          }
          return new e(a, s, c);
        }
      }
      class e {
        constructor(l, g, r) {
          (this.a = l), (this.b = g), (this.d = r);
        }
        toString() {
          return (
            '[' +
            this.a
              .map(
                (l, g) =>
                  (l === 10 ? '\\n' : String.fromCharCode(l)) +
                  `-(${this.b[g]},${this.d[g]})`,
              )
              .join(', ') +
            ']'
          );
        }
        e(l, g) {
          if (l < 0 || l >= g.length) throw new Error('Illegal index');
        }
        getElements() {
          return this.a;
        }
        getStartLineNumber(l) {
          return l > 0 && l === this.b.length
            ? this.getEndLineNumber(l - 1)
            : (this.e(l, this.b), this.b[l]);
        }
        getEndLineNumber(l) {
          return l === -1
            ? this.getStartLineNumber(l + 1)
            : (this.e(l, this.b), this.a[l] === 10 ? this.b[l] + 1 : this.b[l]);
        }
        getStartColumn(l) {
          return l > 0 && l === this.d.length
            ? this.getEndColumn(l - 1)
            : (this.e(l, this.d), this.d[l]);
        }
        getEndColumn(l) {
          return l === -1
            ? this.getStartColumn(l + 1)
            : (this.e(l, this.d), this.a[l] === 10 ? 1 : this.d[l] + 1);
        }
      }
      class C {
        constructor(l, g, r, a, s, c, d, p) {
          (this.originalStartLineNumber = l),
            (this.originalStartColumn = g),
            (this.originalEndLineNumber = r),
            (this.originalEndColumn = a),
            (this.modifiedStartLineNumber = s),
            (this.modifiedStartColumn = c),
            (this.modifiedEndLineNumber = d),
            (this.modifiedEndColumn = p);
        }
        static createFromDiffChange(l, g, r) {
          const a = g.getStartLineNumber(l.originalStart),
            s = g.getStartColumn(l.originalStart),
            c = g.getEndLineNumber(l.originalStart + l.originalLength - 1),
            d = g.getEndColumn(l.originalStart + l.originalLength - 1),
            p = r.getStartLineNumber(l.modifiedStart),
            E = r.getStartColumn(l.modifiedStart),
            R = r.getEndLineNumber(l.modifiedStart + l.modifiedLength - 1),
            D = r.getEndColumn(l.modifiedStart + l.modifiedLength - 1);
          return new C(a, s, c, d, p, E, R, D);
        }
      }
      function h(w) {
        if (w.length <= 1) return w;
        const l = [w[0]];
        let g = l[0];
        for (let r = 1, a = w.length; r < a; r++) {
          const s = w[r],
            c = s.originalStart - (g.originalStart + g.originalLength),
            d = s.modifiedStart - (g.modifiedStart + g.modifiedLength);
          Math.min(c, d) < v
            ? ((g.originalLength =
                s.originalStart + s.originalLength - g.originalStart),
              (g.modifiedLength =
                s.modifiedStart + s.modifiedLength - g.modifiedStart))
            : (l.push(s), (g = s));
        }
        return l;
      }
      class b {
        constructor(l, g, r, a, s) {
          (this.originalStartLineNumber = l),
            (this.originalEndLineNumber = g),
            (this.modifiedStartLineNumber = r),
            (this.modifiedEndLineNumber = a),
            (this.charChanges = s);
        }
        static createFromDiffResult(l, g, r, a, s, c, d) {
          let p, E, R, D, F;
          if (
            (g.originalLength === 0
              ? ((p = r.getStartLineNumber(g.originalStart) - 1), (E = 0))
              : ((p = r.getStartLineNumber(g.originalStart)),
                (E = r.getEndLineNumber(
                  g.originalStart + g.originalLength - 1,
                ))),
            g.modifiedLength === 0
              ? ((R = a.getStartLineNumber(g.modifiedStart) - 1), (D = 0))
              : ((R = a.getStartLineNumber(g.modifiedStart)),
                (D = a.getEndLineNumber(
                  g.modifiedStart + g.modifiedLength - 1,
                ))),
            c &&
              g.originalLength > 0 &&
              g.originalLength < 20 &&
              g.modifiedLength > 0 &&
              g.modifiedLength < 20 &&
              s())
          ) {
            const W = r.createCharSequence(
                l,
                g.originalStart,
                g.originalStart + g.originalLength - 1,
              ),
              B = a.createCharSequence(
                l,
                g.modifiedStart,
                g.modifiedStart + g.modifiedLength - 1,
              );
            if (W.getElements().length > 0 && B.getElements().length > 0) {
              let q = f(W, B, s, !0).changes;
              d && (q = h(q)), (F = []);
              for (let G = 0, k = q.length; G < k; G++)
                F.push(C.createFromDiffChange(q[G], W, B));
            }
          }
          return new b(p, E, R, D, F);
        }
      }
      class L {
        constructor(l, g, r) {
          (this.a = r.shouldComputeCharChanges),
            (this.b = r.shouldPostProcessCharChanges),
            (this.d = r.shouldIgnoreTrimWhitespace),
            (this.e = r.shouldMakePrettyDiff),
            (this.f = l),
            (this.g = g),
            (this.h = new N(l)),
            (this.j = new N(g)),
            (this.k = m(r.maxComputationTime)),
            (this.l = m(
              r.maxComputationTime === 0
                ? 0
                : Math.min(r.maxComputationTime, 5e3),
            ));
        }
        computeDiff() {
          if (this.h.lines.length === 1 && this.h.lines[0].length === 0)
            return this.j.lines.length === 1 && this.j.lines[0].length === 0
              ? { quitEarly: !1, changes: [] }
              : {
                  quitEarly: !1,
                  changes: [
                    {
                      originalStartLineNumber: 1,
                      originalEndLineNumber: 1,
                      modifiedStartLineNumber: 1,
                      modifiedEndLineNumber: this.j.lines.length,
                      charChanges: void 0,
                    },
                  ],
                };
          if (this.j.lines.length === 1 && this.j.lines[0].length === 0)
            return {
              quitEarly: !1,
              changes: [
                {
                  originalStartLineNumber: 1,
                  originalEndLineNumber: this.h.lines.length,
                  modifiedStartLineNumber: 1,
                  modifiedEndLineNumber: 1,
                  charChanges: void 0,
                },
              ],
            };
          const l = f(this.h, this.j, this.k, this.e),
            g = l.changes,
            r = l.quitEarly;
          if (this.d) {
            const d = [];
            for (let p = 0, E = g.length; p < E; p++)
              d.push(
                b.createFromDiffResult(
                  this.d,
                  g[p],
                  this.h,
                  this.j,
                  this.l,
                  this.a,
                  this.b,
                ),
              );
            return { quitEarly: r, changes: d };
          }
          const a = [];
          let s = 0,
            c = 0;
          for (let d = -1, p = g.length; d < p; d++) {
            const E = d + 1 < p ? g[d + 1] : null,
              R = E ? E.originalStart : this.f.length,
              D = E ? E.modifiedStart : this.g.length;
            for (; s < R && c < D; ) {
              const F = this.f[s],
                W = this.g[c];
              if (F !== W) {
                {
                  let B = S(F, 1),
                    q = S(W, 1);
                  for (; B > 1 && q > 1; ) {
                    const G = F.charCodeAt(B - 2),
                      k = W.charCodeAt(q - 2);
                    if (G !== k) break;
                    B--, q--;
                  }
                  (B > 1 || q > 1) && this.m(a, s + 1, 1, B, c + 1, 1, q);
                }
                {
                  let B = _(F, 1),
                    q = _(W, 1);
                  const G = F.length + 1,
                    k = W.length + 1;
                  for (; B < G && q < k; ) {
                    const T = F.charCodeAt(B - 1),
                      I = F.charCodeAt(q - 1);
                    if (T !== I) break;
                    B++, q++;
                  }
                  (B < G || q < k) && this.m(a, s + 1, B, G, c + 1, q, k);
                }
              }
              s++, c++;
            }
            E &&
              (a.push(
                b.createFromDiffResult(
                  this.d,
                  E,
                  this.h,
                  this.j,
                  this.l,
                  this.a,
                  this.b,
                ),
              ),
              (s += E.originalLength),
              (c += E.modifiedLength));
          }
          return { quitEarly: r, changes: a };
        }
        m(l, g, r, a, s, c, d) {
          if (this.n(l, g, r, a, s, c, d)) return;
          let p;
          this.a && (p = [new C(g, r, g, a, s, c, s, d)]),
            l.push(new b(g, g, s, s, p));
        }
        n(l, g, r, a, s, c, d) {
          const p = l.length;
          if (p === 0) return !1;
          const E = l[p - 1];
          return E.originalEndLineNumber === 0 || E.modifiedEndLineNumber === 0
            ? !1
            : E.originalEndLineNumber === g && E.modifiedEndLineNumber === s
            ? (this.a &&
                E.charChanges &&
                E.charChanges.push(new C(g, r, g, a, s, c, s, d)),
              !0)
            : E.originalEndLineNumber + 1 === g &&
              E.modifiedEndLineNumber + 1 === s
            ? ((E.originalEndLineNumber = g),
              (E.modifiedEndLineNumber = s),
              this.a &&
                E.charChanges &&
                E.charChanges.push(new C(g, r, g, a, s, c, s, d)),
              !0)
            : !1;
        }
      }
      n.DiffComputer = L;
      function S(w, l) {
        const g = i.firstNonWhitespaceIndex(w);
        return g === -1 ? l : g + 1;
      }
      function _(w, l) {
        const g = i.lastNonWhitespaceIndex(w);
        return g === -1 ? l : g + 2;
      }
      function m(w) {
        if (w === 0) return () => !0;
        const l = Date.now();
        return () => Date.now() - l < w;
      }
    }),
    Y(
      X[38],
      Q([0, 1, 9, 3, 2, 6, 36, 33, 34, 21]),
      function (U, n, A, M, i, u, y, v, o, f) {
        'use strict';
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.LineSequence =
            n.lineRangeMappingFromRangeMappings =
            n.StandardLinesDiffComputer =
              void 0);
        class N {
          constructor() {
            (this.b = new y.DynamicProgrammingDiffing()),
              (this.c = new o.MyersDiffAlgorithm());
          }
          computeDiff(g, r, a) {
            const s = new Map();
            function c(k) {
              let T = s.get(k);
              return T === void 0 && ((T = s.size), s.set(k, T)), T;
            }
            const d = g.map((k) => c(k.trim())),
              p = r.map((k) => c(k.trim())),
              E = new h(d, g),
              R = new h(p, r);
            let D = (() =>
              E.length + R.length < 1500
                ? this.b.compute(E, R, (k, T) =>
                    g[k] === r[T]
                      ? r[T].length === 0
                        ? 0.1
                        : 1 + Math.log(1 + r[T].length)
                      : 0.99,
                  )
                : this.c.compute(E, R))();
            D = (0, v.optimizeSequenceDiffs)(E, R, D);
            const F = [],
              W = (k) => {
                for (let T = 0; T < k; T++) {
                  const I = B + T,
                    V = q + T;
                  if (g[I] !== r[V]) {
                    const t = this.e(
                      g,
                      r,
                      new u.SequenceDiff(
                        new u.OffsetRange(I, I + 1),
                        new u.OffsetRange(V, V + 1),
                      ),
                    );
                    for (const ne of t) F.push(ne);
                  }
                }
              };
            let B = 0,
              q = 0;
            for (const k of D) {
              (0, A.assertFn)(
                () => k.seq1Range.start - B === k.seq2Range.start - q,
              );
              const T = k.seq1Range.start - B;
              W(T),
                (B = k.seq1Range.endExclusive),
                (q = k.seq2Range.endExclusive);
              const I = this.e(g, r, k);
              for (const V of I) F.push(V);
            }
            W(g.length - B);
            const G = e(F);
            return { quitEarly: !1, changes: G };
          }
          e(g, r, a) {
            const s = new L(g, a.seq1Range),
              c = new L(r, a.seq2Range),
              d =
                s.length + c.length < 500
                  ? this.b.compute(s, c)
                  : this.c.compute(s, c);
            let p = (0, v.optimizeSequenceDiffs)(s, c, d);
            return (
              (p = (0, v.smoothenSequenceDiffs)(s, c, p)),
              p.map(
                (R) =>
                  new f.RangeMapping(
                    s.translateRange(R.seq1Range).delta(a.seq1Range.start),
                    c.translateRange(R.seq2Range).delta(a.seq2Range.start),
                  ),
              )
            );
          }
        }
        n.StandardLinesDiffComputer = N;
        function e(l) {
          const g = [];
          for (const r of C(
            l,
            (a, s) =>
              s.originalRange.startLineNumber -
                (a.originalRange.endLineNumber -
                  (a.originalRange.endColumn > 1 ? 0 : 1)) <=
                1 ||
              s.modifiedRange.startLineNumber -
                (a.modifiedRange.endLineNumber -
                  (a.modifiedRange.endColumn > 1 ? 0 : 1)) <=
                1,
          )) {
            const a = r[0],
              s = r[r.length - 1];
            g.push(
              new f.LineRangeMapping(
                new f.LineRange(
                  a.originalRange.startLineNumber,
                  s.originalRange.endLineNumber +
                    (s.originalRange.endColumn > 1 ||
                    s.modifiedRange.endColumn > 1
                      ? 1
                      : 0),
                ),
                new f.LineRange(
                  a.modifiedRange.startLineNumber,
                  s.modifiedRange.endLineNumber +
                    (s.originalRange.endColumn > 1 ||
                    s.modifiedRange.endColumn > 1
                      ? 1
                      : 0),
                ),
                r,
              ),
            );
          }
          return (
            (0, A.assertFn)(() =>
              (0, A.checkAdjacentItems)(
                g,
                (r, a) =>
                  a.originalRange.startLineNumber -
                    r.originalRange.endLineNumberExclusive ===
                    a.modifiedRange.startLineNumber -
                      r.modifiedRange.endLineNumberExclusive &&
                  r.originalRange.endLineNumberExclusive <
                    a.originalRange.startLineNumber &&
                  r.modifiedRange.endLineNumberExclusive <
                    a.modifiedRange.startLineNumber,
              ),
            ),
            g
          );
        }
        n.lineRangeMappingFromRangeMappings = e;
        function* C(l, g) {
          let r, a;
          for (const s of l)
            a !== void 0 && g(a, s) ? r.push(s) : (r && (yield r), (r = [s])),
              (a = s);
          r && (yield r);
        }
        class h {
          constructor(g, r) {
            (this.b = g), (this.c = r);
          }
          getElement(g) {
            return this.b[g];
          }
          get length() {
            return this.b.length;
          }
          getBoundaryScore(g) {
            const r = g === 0 ? 0 : b(this.c[g - 1]),
              a = g === this.c.length ? 0 : b(this.c[g]);
            return 1e3 - (r + a);
          }
        }
        n.LineSequence = h;
        function b(l) {
          let g = 0;
          for (
            ;
            g < l.length && (l.charCodeAt(g) === 32 || l.charCodeAt(g) === 9);

          )
            g++;
          return g;
        }
        class L {
          constructor(g, r) {
            (this.lines = g), (this.lineRange = r);
            let a = 0;
            this.c = new Int32Array(r.length);
            for (let c = r.start; c < r.endExclusive; c++)
              (a += g[c].length), (this.c[c - r.start] = a + 1), a++;
            this.b = new Int32Array(a);
            let s = 0;
            for (let c = r.start; c < r.endExclusive; c++) {
              const d = g[c];
              for (let p = 0; p < d.length; p++)
                this.b[s + p] = d.charCodeAt(p);
              (s += d.length),
                c < g.length - 1 &&
                  ((this.b[s] = `
`.charCodeAt(0)),
                  (s += 1));
            }
          }
          getElement(g) {
            return this.b[g];
          }
          get length() {
            return this.b.length;
          }
          getBoundaryScore(g) {
            const r = m(g > 0 ? this.b[g - 1] : -1),
              a = m(g < this.b.length ? this.b[g] : -1);
            if (r === 6 && a === 7) return 0;
            let s = 0;
            return (
              r !== a && ((s += 10), a === 1 && (s += 1)),
              (s += _(r)),
              (s += _(a)),
              s
            );
          }
          translateOffset(g) {
            let r = 0,
              a = this.c.length;
            for (; r < a; ) {
              const c = Math.floor((r + a) / 2);
              this.c[c] > g ? (a = c) : (r = c + 1);
            }
            const s = r === 0 ? 0 : this.c[r - 1];
            return new M.Position(r + 1, g - s + 1);
          }
          translateRange(g) {
            return i.Range.fromPositions(
              this.translateOffset(g.start),
              this.translateOffset(g.endExclusive),
            );
          }
        }
        const S = {
          [0]: 0,
          [1]: 0,
          [2]: 0,
          [3]: 10,
          [4]: 2,
          [5]: 3,
          [6]: 10,
          [7]: 10,
        };
        function _(l) {
          return S[l];
        }
        function m(l) {
          return l === 10
            ? 7
            : l === 13
            ? 6
            : w(l)
            ? 5
            : l >= 97 && l <= 122
            ? 0
            : l >= 65 && l <= 90
            ? 1
            : l >= 48 && l <= 57
            ? 2
            : l === -1
            ? 3
            : 4;
        }
        function w(l) {
          return l === 32 || l === 9;
        }
      },
    ),
    Y(X[39], Q([0, 1, 37, 38]), function (U, n, A, M) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.linesDiffComputers = void 0),
        (n.linesDiffComputers = {
          smart: new A.SmartLinesDiffComputer(),
          experimental: new M.StandardLinesDiffComputer(),
        });
    }),
    Y(X[40], Q([0, 1, 19]), function (U, n, A) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.computeLinks = n.LinkComputer = n.StateMachine = void 0);
      class M {
        constructor(C, h, b) {
          const L = new Uint8Array(C * h);
          for (let S = 0, _ = C * h; S < _; S++) L[S] = b;
          (this.a = L), (this.rows = C), (this.cols = h);
        }
        get(C, h) {
          return this.a[C * this.cols + h];
        }
        set(C, h, b) {
          this.a[C * this.cols + h] = b;
        }
      }
      class i {
        constructor(C) {
          let h = 0,
            b = 0;
          for (let S = 0, _ = C.length; S < _; S++) {
            const [m, w, l] = C[S];
            w > h && (h = w), m > b && (b = m), l > b && (b = l);
          }
          h++, b++;
          const L = new M(b, h, 0);
          for (let S = 0, _ = C.length; S < _; S++) {
            const [m, w, l] = C[S];
            L.set(m, w, l);
          }
          (this.a = L), (this.b = h);
        }
        nextState(C, h) {
          return h < 0 || h >= this.b ? 0 : this.a.get(C, h);
        }
      }
      n.StateMachine = i;
      let u = null;
      function y() {
        return (
          u === null &&
            (u = new i([
              [1, 104, 2],
              [1, 72, 2],
              [1, 102, 6],
              [1, 70, 6],
              [2, 116, 3],
              [2, 84, 3],
              [3, 116, 4],
              [3, 84, 4],
              [4, 112, 5],
              [4, 80, 5],
              [5, 115, 9],
              [5, 83, 9],
              [5, 58, 10],
              [6, 105, 7],
              [6, 73, 7],
              [7, 108, 8],
              [7, 76, 8],
              [8, 101, 9],
              [8, 69, 9],
              [9, 58, 10],
              [10, 47, 11],
              [11, 47, 12],
            ])),
          u
        );
      }
      let v = null;
      function o() {
        if (v === null) {
          v = new A.CharacterClassifier(0);
          const e = ` 	<>'"\u3001\u3002\uFF61\uFF64\uFF0C\uFF0E\uFF1A\uFF1B\u2018\u3008\u300C\u300E\u3014\uFF08\uFF3B\uFF5B\uFF62\uFF63\uFF5D\uFF3D\uFF09\u3015\u300F\u300D\u3009\u2019\uFF40\uFF5E\u2026`;
          for (let h = 0; h < e.length; h++) v.set(e.charCodeAt(h), 1);
          const C = '.,;:';
          for (let h = 0; h < C.length; h++) v.set(C.charCodeAt(h), 2);
        }
        return v;
      }
      class f {
        static a(C, h, b, L, S) {
          let _ = S - 1;
          do {
            const m = h.charCodeAt(_);
            if (C.get(m) !== 2) break;
            _--;
          } while (_ > L);
          if (L > 0) {
            const m = h.charCodeAt(L - 1),
              w = h.charCodeAt(_);
            ((m === 40 && w === 41) ||
              (m === 91 && w === 93) ||
              (m === 123 && w === 125)) &&
              _--;
          }
          return {
            range: {
              startLineNumber: b,
              startColumn: L + 1,
              endLineNumber: b,
              endColumn: _ + 2,
            },
            url: h.substring(L, _ + 1),
          };
        }
        static computeLinks(C, h = y()) {
          const b = o(),
            L = [];
          for (let S = 1, _ = C.getLineCount(); S <= _; S++) {
            const m = C.getLineContent(S),
              w = m.length;
            let l = 0,
              g = 0,
              r = 0,
              a = 1,
              s = !1,
              c = !1,
              d = !1,
              p = !1;
            for (; l < w; ) {
              let E = !1;
              const R = m.charCodeAt(l);
              if (a === 13) {
                let D;
                switch (R) {
                  case 40:
                    (s = !0), (D = 0);
                    break;
                  case 41:
                    D = s ? 0 : 1;
                    break;
                  case 91:
                    (d = !0), (c = !0), (D = 0);
                    break;
                  case 93:
                    (d = !1), (D = c ? 0 : 1);
                    break;
                  case 123:
                    (p = !0), (D = 0);
                    break;
                  case 125:
                    D = p ? 0 : 1;
                    break;
                  case 39:
                  case 34:
                  case 96:
                    r === R
                      ? (D = 1)
                      : r === 39 || r === 34 || r === 96
                      ? (D = 0)
                      : (D = 1);
                    break;
                  case 42:
                    D = r === 42 ? 1 : 0;
                    break;
                  case 124:
                    D = r === 124 ? 1 : 0;
                    break;
                  case 32:
                    D = d ? 0 : 1;
                    break;
                  default:
                    D = b.get(R);
                }
                D === 1 && (L.push(f.a(b, m, S, g, l)), (E = !0));
              } else if (a === 12) {
                let D;
                R === 91 ? ((c = !0), (D = 0)) : (D = b.get(R)),
                  D === 1 ? (E = !0) : (a = 13);
              } else (a = h.nextState(a, R)), a === 0 && (E = !0);
              E &&
                ((a = 1), (s = !1), (c = !1), (p = !1), (g = l + 1), (r = R)),
                l++;
            }
            a === 13 && L.push(f.a(b, m, S, g, w));
          }
          return L;
        }
      }
      n.LinkComputer = f;
      function N(e) {
        return !e ||
          typeof e.getLineCount != 'function' ||
          typeof e.getLineContent != 'function'
          ? []
          : f.computeLinks(e);
      }
      n.computeLinks = N;
    }),
    Y(X[41], Q([0, 1]), function (U, n) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.BasicInplaceReplace = void 0);
      class A {
        constructor() {
          this.c = [
            ['true', 'false'],
            ['True', 'False'],
            [
              'Private',
              'Public',
              'Friend',
              'ReadOnly',
              'Partial',
              'Protected',
              'WriteOnly',
            ],
            ['public', 'protected', 'private'],
          ];
        }
        navigateValueSet(i, u, y, v, o) {
          if (i && u) {
            const f = this.a(u, o);
            if (f) return { range: i, value: f };
          }
          if (y && v) {
            const f = this.a(v, o);
            if (f) return { range: y, value: f };
          }
          return null;
        }
        a(i, u) {
          const y = this.b(i, u);
          return y !== null ? y : this.d(i, u);
        }
        b(i, u) {
          const y = Math.pow(10, i.length - (i.lastIndexOf('.') + 1));
          let v = Number(i);
          const o = parseFloat(i);
          return !isNaN(v) && !isNaN(o) && v === o
            ? v === 0 && !u
              ? null
              : ((v = Math.floor(v * y)), (v += u ? y : -y), String(v / y))
            : null;
        }
        d(i, u) {
          return this.e(this.c, i, u);
        }
        e(i, u, y) {
          let v = null;
          for (let o = 0, f = i.length; v === null && o < f; o++)
            v = this.f(i[o], u, y);
          return v;
        }
        f(i, u, y) {
          let v = i.indexOf(u);
          return v >= 0
            ? ((v += y ? 1 : -1),
              v < 0 ? (v = i.length - 1) : (v %= i.length),
              i[v])
            : null;
        }
      }
      (A.INSTANCE = new A()), (n.BasicInplaceReplace = A);
    }),
    Y(X[42], Q([0, 1, 11]), function (U, n, A) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.shouldSynchronizeModel =
          n.ApplyEditsResult =
          n.SearchData =
          n.ValidAnnotatedEditOperation =
          n.isITextSnapshot =
          n.FindMatch =
          n.TextModelResolvedOptions =
          n.InjectedTextCursorStops =
          n.MinimapPosition =
          n.OverviewRulerLane =
            void 0);
      var M;
      (function (h) {
        (h[(h.Left = 1)] = 'Left'),
          (h[(h.Center = 2)] = 'Center'),
          (h[(h.Right = 4)] = 'Right'),
          (h[(h.Full = 7)] = 'Full');
      })((M = n.OverviewRulerLane || (n.OverviewRulerLane = {})));
      var i;
      (function (h) {
        (h[(h.Inline = 1)] = 'Inline'), (h[(h.Gutter = 2)] = 'Gutter');
      })((i = n.MinimapPosition || (n.MinimapPosition = {})));
      var u;
      (function (h) {
        (h[(h.Both = 0)] = 'Both'),
          (h[(h.Right = 1)] = 'Right'),
          (h[(h.Left = 2)] = 'Left'),
          (h[(h.None = 3)] = 'None');
      })((u = n.InjectedTextCursorStops || (n.InjectedTextCursorStops = {})));
      class y {
        get originalIndentSize() {
          return this.a ? 'tabSize' : this.indentSize;
        }
        constructor(b) {
          (this._textModelResolvedOptionsBrand = void 0),
            (this.tabSize = Math.max(1, b.tabSize | 0)),
            b.indentSize === 'tabSize'
              ? ((this.indentSize = this.tabSize), (this.a = !0))
              : ((this.indentSize = Math.max(1, b.indentSize | 0)),
                (this.a = !1)),
            (this.insertSpaces = Boolean(b.insertSpaces)),
            (this.defaultEOL = b.defaultEOL | 0),
            (this.trimAutoWhitespace = Boolean(b.trimAutoWhitespace)),
            (this.bracketPairColorizationOptions =
              b.bracketPairColorizationOptions);
        }
        equals(b) {
          return (
            this.tabSize === b.tabSize &&
            this.a === b.a &&
            this.indentSize === b.indentSize &&
            this.insertSpaces === b.insertSpaces &&
            this.defaultEOL === b.defaultEOL &&
            this.trimAutoWhitespace === b.trimAutoWhitespace &&
            (0, A.equals)(
              this.bracketPairColorizationOptions,
              b.bracketPairColorizationOptions,
            )
          );
        }
        createChangeEvent(b) {
          return {
            tabSize: this.tabSize !== b.tabSize,
            indentSize: this.indentSize !== b.indentSize,
            insertSpaces: this.insertSpaces !== b.insertSpaces,
            trimAutoWhitespace:
              this.trimAutoWhitespace !== b.trimAutoWhitespace,
          };
        }
      }
      n.TextModelResolvedOptions = y;
      class v {
        constructor(b, L) {
          (this._findMatchBrand = void 0), (this.range = b), (this.matches = L);
        }
      }
      n.FindMatch = v;
      function o(h) {
        return h && typeof h.read == 'function';
      }
      n.isITextSnapshot = o;
      class f {
        constructor(b, L, S, _, m, w) {
          (this.identifier = b),
            (this.range = L),
            (this.text = S),
            (this.forceMoveMarkers = _),
            (this.isAutoWhitespaceEdit = m),
            (this._isTracked = w);
        }
      }
      n.ValidAnnotatedEditOperation = f;
      class N {
        constructor(b, L, S) {
          (this.regex = b), (this.wordSeparators = L), (this.simpleSearch = S);
        }
      }
      n.SearchData = N;
      class e {
        constructor(b, L, S) {
          (this.reverseEdits = b),
            (this.changes = L),
            (this.trimAutoWhitespaceLineNumbers = S);
        }
      }
      n.ApplyEditsResult = e;
      function C(h) {
        return !h.isTooLargeForSyncing() && !h.isForSimpleWidget;
      }
      n.shouldSynchronizeModel = C;
    }),
    Y(X[43], Q([0, 1, 24, 18]), function (U, n, A, M) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.PrefixSumIndexOfResult =
          n.ConstantTimePrefixSumComputer =
          n.PrefixSumComputer =
            void 0);
      class i {
        constructor(o) {
          (this.a = o),
            (this.b = new Uint32Array(o.length)),
            (this.c = new Int32Array(1)),
            (this.c[0] = -1);
        }
        insertValues(o, f) {
          o = (0, M.toUint32)(o);
          const N = this.a,
            e = this.b,
            C = f.length;
          return C === 0
            ? !1
            : ((this.a = new Uint32Array(N.length + C)),
              this.a.set(N.subarray(0, o), 0),
              this.a.set(N.subarray(o), o + C),
              this.a.set(f, o),
              o - 1 < this.c[0] && (this.c[0] = o - 1),
              (this.b = new Uint32Array(this.a.length)),
              this.c[0] >= 0 && this.b.set(e.subarray(0, this.c[0] + 1)),
              !0);
        }
        setValue(o, f) {
          return (
            (o = (0, M.toUint32)(o)),
            (f = (0, M.toUint32)(f)),
            this.a[o] === f
              ? !1
              : ((this.a[o] = f), o - 1 < this.c[0] && (this.c[0] = o - 1), !0)
          );
        }
        removeValues(o, f) {
          (o = (0, M.toUint32)(o)), (f = (0, M.toUint32)(f));
          const N = this.a,
            e = this.b;
          if (o >= N.length) return !1;
          const C = N.length - o;
          return (
            f >= C && (f = C),
            f === 0
              ? !1
              : ((this.a = new Uint32Array(N.length - f)),
                this.a.set(N.subarray(0, o), 0),
                this.a.set(N.subarray(o + f), o),
                (this.b = new Uint32Array(this.a.length)),
                o - 1 < this.c[0] && (this.c[0] = o - 1),
                this.c[0] >= 0 && this.b.set(e.subarray(0, this.c[0] + 1)),
                !0)
          );
        }
        getTotalSum() {
          return this.a.length === 0 ? 0 : this.d(this.a.length - 1);
        }
        getPrefixSum(o) {
          return o < 0 ? 0 : ((o = (0, M.toUint32)(o)), this.d(o));
        }
        d(o) {
          if (o <= this.c[0]) return this.b[o];
          let f = this.c[0] + 1;
          f === 0 && ((this.b[0] = this.a[0]), f++),
            o >= this.a.length && (o = this.a.length - 1);
          for (let N = f; N <= o; N++) this.b[N] = this.b[N - 1] + this.a[N];
          return (this.c[0] = Math.max(this.c[0], o)), this.b[o];
        }
        getIndexOf(o) {
          (o = Math.floor(o)), this.getTotalSum();
          let f = 0,
            N = this.a.length - 1,
            e = 0,
            C = 0,
            h = 0;
          for (; f <= N; )
            if (
              ((e = (f + (N - f) / 2) | 0),
              (C = this.b[e]),
              (h = C - this.a[e]),
              o < h)
            )
              N = e - 1;
            else if (o >= C) f = e + 1;
            else break;
          return new y(e, o - h);
        }
      }
      n.PrefixSumComputer = i;
      class u {
        constructor(o) {
          (this.a = o),
            (this.b = !1),
            (this.c = -1),
            (this.d = []),
            (this.e = []);
        }
        getTotalSum() {
          return this.g(), this.e.length;
        }
        getPrefixSum(o) {
          return this.g(), o === 0 ? 0 : this.d[o - 1];
        }
        getIndexOf(o) {
          this.g();
          const f = this.e[o],
            N = f > 0 ? this.d[f - 1] : 0;
          return new y(f, o - N);
        }
        removeValues(o, f) {
          this.a.splice(o, f), this.f(o);
        }
        insertValues(o, f) {
          (this.a = (0, A.arrayInsert)(this.a, o, f)), this.f(o);
        }
        f(o) {
          (this.b = !1), (this.c = Math.min(this.c, o - 1));
        }
        g() {
          if (!this.b) {
            for (let o = this.c + 1, f = this.a.length; o < f; o++) {
              const N = this.a[o],
                e = o > 0 ? this.d[o - 1] : 0;
              this.d[o] = e + N;
              for (let C = 0; C < N; C++) this.e[e + C] = o;
            }
            (this.d.length = this.a.length),
              (this.e.length = this.d[this.d.length - 1]),
              (this.b = !0),
              (this.c = this.a.length - 1);
          }
        }
        setValue(o, f) {
          this.a[o] !== f && ((this.a[o] = f), this.f(o));
        }
      }
      n.ConstantTimePrefixSumComputer = u;
      class y {
        constructor(o, f) {
          (this.index = o),
            (this.remainder = f),
            (this._prefixSumIndexOfResultBrand = void 0),
            (this.index = o),
            (this.remainder = f);
        }
      }
      n.PrefixSumIndexOfResult = y;
    }),
    Y(X[44], Q([0, 1, 4, 3, 43]), function (U, n, A, M, i) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.MirrorTextModel = void 0);
      class u {
        constructor(v, o, f, N) {
          (this.c = v),
            (this.d = o),
            (this.f = f),
            (this.g = N),
            (this.h = null),
            (this.j = null);
        }
        dispose() {
          this.d.length = 0;
        }
        get version() {
          return this.g;
        }
        getText() {
          return this.j === null && (this.j = this.d.join(this.f)), this.j;
        }
        onEvents(v) {
          v.eol && v.eol !== this.f && ((this.f = v.eol), (this.h = null));
          const o = v.changes;
          for (const f of o)
            this.n(f.range),
              this.o(
                new M.Position(f.range.startLineNumber, f.range.startColumn),
                f.text,
              );
          (this.g = v.versionId), (this.j = null);
        }
        k() {
          if (!this.h) {
            const v = this.f.length,
              o = this.d.length,
              f = new Uint32Array(o);
            for (let N = 0; N < o; N++) f[N] = this.d[N].length + v;
            this.h = new i.PrefixSumComputer(f);
          }
        }
        l(v, o) {
          (this.d[v] = o),
            this.h && this.h.setValue(v, this.d[v].length + this.f.length);
        }
        n(v) {
          if (v.startLineNumber === v.endLineNumber) {
            if (v.startColumn === v.endColumn) return;
            this.l(
              v.startLineNumber - 1,
              this.d[v.startLineNumber - 1].substring(0, v.startColumn - 1) +
                this.d[v.startLineNumber - 1].substring(v.endColumn - 1),
            );
            return;
          }
          this.l(
            v.startLineNumber - 1,
            this.d[v.startLineNumber - 1].substring(0, v.startColumn - 1) +
              this.d[v.endLineNumber - 1].substring(v.endColumn - 1),
          ),
            this.d.splice(
              v.startLineNumber,
              v.endLineNumber - v.startLineNumber,
            ),
            this.h &&
              this.h.removeValues(
                v.startLineNumber,
                v.endLineNumber - v.startLineNumber,
              );
        }
        o(v, o) {
          if (o.length === 0) return;
          const f = (0, A.splitLines)(o);
          if (f.length === 1) {
            this.l(
              v.lineNumber - 1,
              this.d[v.lineNumber - 1].substring(0, v.column - 1) +
                f[0] +
                this.d[v.lineNumber - 1].substring(v.column - 1),
            );
            return;
          }
          (f[f.length - 1] += this.d[v.lineNumber - 1].substring(v.column - 1)),
            this.l(
              v.lineNumber - 1,
              this.d[v.lineNumber - 1].substring(0, v.column - 1) + f[0],
            );
          const N = new Uint32Array(f.length - 1);
          for (let e = 1; e < f.length; e++)
            this.d.splice(v.lineNumber + e - 1, 0, f[e]),
              (N[e - 1] = f[e].length + this.f.length);
          this.h && this.h.insertValues(v.lineNumber, N);
        }
      }
      n.MirrorTextModel = u;
    }),
    Y(X[45], Q([0, 1, 4, 32, 3, 2, 42]), function (U, n, A, M, i, u, y) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.Searcher =
          n.isValidMatch =
          n.TextModelSearch =
          n.createFindMatch =
          n.isMultilineRegexSource =
          n.SearchParams =
            void 0);
      const v = 999;
      class o {
        constructor(m, w, l, g) {
          (this.searchString = m),
            (this.isRegex = w),
            (this.matchCase = l),
            (this.wordSeparators = g);
        }
        parseSearchRequest() {
          if (this.searchString === '') return null;
          let m;
          this.isRegex
            ? (m = f(this.searchString))
            : (m =
                this.searchString.indexOf(`
`) >= 0);
          let w = null;
          try {
            w = A.createRegExp(this.searchString, this.isRegex, {
              matchCase: this.matchCase,
              wholeWord: !1,
              multiline: m,
              global: !0,
              unicode: !0,
            });
          } catch {
            return null;
          }
          if (!w) return null;
          let l = !this.isRegex && !m;
          return (
            l &&
              this.searchString.toLowerCase() !==
                this.searchString.toUpperCase() &&
              (l = this.matchCase),
            new y.SearchData(
              w,
              this.wordSeparators
                ? (0, M.getMapForWordSeparators)(this.wordSeparators)
                : null,
              l ? this.searchString : null,
            )
          );
        }
      }
      n.SearchParams = o;
      function f(_) {
        if (!_ || _.length === 0) return !1;
        for (let m = 0, w = _.length; m < w; m++) {
          const l = _.charCodeAt(m);
          if (l === 10) return !0;
          if (l === 92) {
            if ((m++, m >= w)) break;
            const g = _.charCodeAt(m);
            if (g === 110 || g === 114 || g === 87) return !0;
          }
        }
        return !1;
      }
      n.isMultilineRegexSource = f;
      function N(_, m, w) {
        if (!w) return new y.FindMatch(_, null);
        const l = [];
        for (let g = 0, r = m.length; g < r; g++) l[g] = m[g];
        return new y.FindMatch(_, l);
      }
      n.createFindMatch = N;
      class e {
        constructor(m) {
          const w = [];
          let l = 0;
          for (let g = 0, r = m.length; g < r; g++)
            m.charCodeAt(g) === 10 && (w[l++] = g);
          this.a = w;
        }
        findLineFeedCountBeforeOffset(m) {
          const w = this.a;
          let l = 0,
            g = w.length - 1;
          if (g === -1 || m <= w[0]) return 0;
          for (; l < g; ) {
            const r = l + (((g - l) / 2) >> 0);
            w[r] >= m
              ? (g = r - 1)
              : w[r + 1] >= m
              ? ((l = r), (g = r))
              : (l = r + 1);
          }
          return l + 1;
        }
      }
      class C {
        static findMatches(m, w, l, g, r) {
          const a = w.parseSearchRequest();
          return a
            ? a.regex.multiline
              ? this.b(m, l, new S(a.wordSeparators, a.regex), g, r)
              : this.c(m, l, a, g, r)
            : [];
        }
        static a(m, w, l, g, r, a) {
          let s,
            c = 0;
          g
            ? ((c = g.findLineFeedCountBeforeOffset(r)), (s = w + r + c))
            : (s = w + r);
          let d;
          if (g) {
            const D = g.findLineFeedCountBeforeOffset(r + a.length) - c;
            d = s + a.length + D;
          } else d = s + a.length;
          const p = m.getPositionAt(s),
            E = m.getPositionAt(d);
          return new u.Range(p.lineNumber, p.column, E.lineNumber, E.column);
        }
        static b(m, w, l, g, r) {
          const a = m.getOffsetAt(w.getStartPosition()),
            s = m.getValueInRange(w, 1),
            c =
              m.getEOL() ===
              `\r
`
                ? new e(s)
                : null,
            d = [];
          let p = 0,
            E;
          for (l.reset(0); (E = l.next(s)); )
            if (((d[p++] = N(this.a(m, a, s, c, E.index, E[0]), E, g)), p >= r))
              return d;
          return d;
        }
        static c(m, w, l, g, r) {
          const a = [];
          let s = 0;
          if (w.startLineNumber === w.endLineNumber) {
            const d = m
              .getLineContent(w.startLineNumber)
              .substring(w.startColumn - 1, w.endColumn - 1);
            return (
              (s = this.d(
                l,
                d,
                w.startLineNumber,
                w.startColumn - 1,
                s,
                a,
                g,
                r,
              )),
              a
            );
          }
          const c = m
            .getLineContent(w.startLineNumber)
            .substring(w.startColumn - 1);
          s = this.d(l, c, w.startLineNumber, w.startColumn - 1, s, a, g, r);
          for (let d = w.startLineNumber + 1; d < w.endLineNumber && s < r; d++)
            s = this.d(l, m.getLineContent(d), d, 0, s, a, g, r);
          if (s < r) {
            const d = m
              .getLineContent(w.endLineNumber)
              .substring(0, w.endColumn - 1);
            s = this.d(l, d, w.endLineNumber, 0, s, a, g, r);
          }
          return a;
        }
        static d(m, w, l, g, r, a, s, c) {
          const d = m.wordSeparators;
          if (!s && m.simpleSearch) {
            const R = m.simpleSearch,
              D = R.length,
              F = w.length;
            let W = -D;
            for (; (W = w.indexOf(R, W + D)) !== -1; )
              if (
                (!d || L(d, w, F, W, D)) &&
                ((a[r++] = new y.FindMatch(
                  new u.Range(l, W + 1 + g, l, W + 1 + D + g),
                  null,
                )),
                r >= c)
              )
                return r;
            return r;
          }
          const p = new S(m.wordSeparators, m.regex);
          let E;
          p.reset(0);
          do
            if (
              ((E = p.next(w)),
              E &&
                ((a[r++] = N(
                  new u.Range(
                    l,
                    E.index + 1 + g,
                    l,
                    E.index + 1 + E[0].length + g,
                  ),
                  E,
                  s,
                )),
                r >= c))
            )
              return r;
          while (E);
          return r;
        }
        static findNextMatch(m, w, l, g) {
          const r = w.parseSearchRequest();
          if (!r) return null;
          const a = new S(r.wordSeparators, r.regex);
          return r.regex.multiline ? this.e(m, l, a, g) : this.f(m, l, a, g);
        }
        static e(m, w, l, g) {
          const r = new i.Position(w.lineNumber, 1),
            a = m.getOffsetAt(r),
            s = m.getLineCount(),
            c = m.getValueInRange(
              new u.Range(r.lineNumber, r.column, s, m.getLineMaxColumn(s)),
              1,
            ),
            d =
              m.getEOL() ===
              `\r
`
                ? new e(c)
                : null;
          l.reset(w.column - 1);
          const p = l.next(c);
          return p
            ? N(this.a(m, a, c, d, p.index, p[0]), p, g)
            : w.lineNumber !== 1 || w.column !== 1
            ? this.e(m, new i.Position(1, 1), l, g)
            : null;
        }
        static f(m, w, l, g) {
          const r = m.getLineCount(),
            a = w.lineNumber,
            s = m.getLineContent(a),
            c = this.g(l, s, a, w.column, g);
          if (c) return c;
          for (let d = 1; d <= r; d++) {
            const p = (a + d - 1) % r,
              E = m.getLineContent(p + 1),
              R = this.g(l, E, p + 1, 1, g);
            if (R) return R;
          }
          return null;
        }
        static g(m, w, l, g, r) {
          m.reset(g - 1);
          const a = m.next(w);
          return a
            ? N(new u.Range(l, a.index + 1, l, a.index + 1 + a[0].length), a, r)
            : null;
        }
        static findPreviousMatch(m, w, l, g) {
          const r = w.parseSearchRequest();
          if (!r) return null;
          const a = new S(r.wordSeparators, r.regex);
          return r.regex.multiline ? this.h(m, l, a, g) : this.j(m, l, a, g);
        }
        static h(m, w, l, g) {
          const r = this.b(
            m,
            new u.Range(1, 1, w.lineNumber, w.column),
            l,
            g,
            10 * v,
          );
          if (r.length > 0) return r[r.length - 1];
          const a = m.getLineCount();
          return w.lineNumber !== a || w.column !== m.getLineMaxColumn(a)
            ? this.h(m, new i.Position(a, m.getLineMaxColumn(a)), l, g)
            : null;
        }
        static j(m, w, l, g) {
          const r = m.getLineCount(),
            a = w.lineNumber,
            s = m.getLineContent(a).substring(0, w.column - 1),
            c = this.k(l, s, a, g);
          if (c) return c;
          for (let d = 1; d <= r; d++) {
            const p = (r + a - d - 1) % r,
              E = m.getLineContent(p + 1),
              R = this.k(l, E, p + 1, g);
            if (R) return R;
          }
          return null;
        }
        static k(m, w, l, g) {
          let r = null,
            a;
          for (m.reset(0); (a = m.next(w)); )
            r = N(
              new u.Range(l, a.index + 1, l, a.index + 1 + a[0].length),
              a,
              g,
            );
          return r;
        }
      }
      n.TextModelSearch = C;
      function h(_, m, w, l, g) {
        if (l === 0) return !0;
        const r = m.charCodeAt(l - 1);
        if (_.get(r) !== 0 || r === 13 || r === 10) return !0;
        if (g > 0) {
          const a = m.charCodeAt(l);
          if (_.get(a) !== 0) return !0;
        }
        return !1;
      }
      function b(_, m, w, l, g) {
        if (l + g === w) return !0;
        const r = m.charCodeAt(l + g);
        if (_.get(r) !== 0 || r === 13 || r === 10) return !0;
        if (g > 0) {
          const a = m.charCodeAt(l + g - 1);
          if (_.get(a) !== 0) return !0;
        }
        return !1;
      }
      function L(_, m, w, l, g) {
        return h(_, m, w, l, g) && b(_, m, w, l, g);
      }
      n.isValidMatch = L;
      class S {
        constructor(m, w) {
          (this._wordSeparators = m), (this.a = w), (this.b = -1), (this.c = 0);
        }
        reset(m) {
          (this.a.lastIndex = m), (this.b = -1), (this.c = 0);
        }
        next(m) {
          const w = m.length;
          let l;
          do {
            if (this.b + this.c === w || ((l = this.a.exec(m)), !l))
              return null;
            const g = l.index,
              r = l[0].length;
            if (g === this.b && r === this.c) {
              if (r === 0) {
                A.getNextCodePoint(m, w, this.a.lastIndex) > 65535
                  ? (this.a.lastIndex += 2)
                  : (this.a.lastIndex += 1);
                continue;
              }
              return null;
            }
            if (
              ((this.b = g),
              (this.c = r),
              !this._wordSeparators || L(this._wordSeparators, m, w, g, r))
            )
              return l;
          } while (l);
          return null;
        }
      }
      n.Searcher = S;
    }),
    Y(X[46], Q([0, 1, 2, 45, 4, 9, 20]), function (U, n, A, M, i, u, y) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.UnicodeTextModelHighlighter = void 0);
      class v {
        static computeUnicodeHighlights(C, h, b) {
          const L = b ? b.startLineNumber : 1,
            S = b ? b.endLineNumber : C.getLineCount(),
            _ = new f(h),
            m = _.getCandidateCodePoints();
          let w;
          m === 'allNonBasicAscii'
            ? (w = new RegExp('[^\\t\\n\\r\\x20-\\x7E]', 'g'))
            : (w = new RegExp(`${o(Array.from(m))}`, 'g'));
          const l = new M.Searcher(null, w),
            g = [];
          let r = !1,
            a,
            s = 0,
            c = 0,
            d = 0;
          e: for (let p = L, E = S; p <= E; p++) {
            const R = C.getLineContent(p),
              D = R.length;
            l.reset(0);
            do
              if (((a = l.next(R)), a)) {
                let F = a.index,
                  W = a.index + a[0].length;
                if (F > 0) {
                  const k = R.charCodeAt(F - 1);
                  i.isHighSurrogate(k) && F--;
                }
                if (W + 1 < D) {
                  const k = R.charCodeAt(W - 1);
                  i.isHighSurrogate(k) && W++;
                }
                const B = R.substring(F, W);
                let q = (0, y.getWordAtText)(
                  F + 1,
                  y.DEFAULT_WORD_REGEXP,
                  R,
                  0,
                );
                q && q.endColumn <= F + 1 && (q = null);
                const G = _.shouldHighlightNonBasicASCII(B, q ? q.word : null);
                if (G !== 0) {
                  G === 3
                    ? s++
                    : G === 2
                    ? c++
                    : G === 1
                    ? d++
                    : (0, u.assertNever)(G);
                  const k = 1e3;
                  if (g.length >= k) {
                    r = !0;
                    break e;
                  }
                  g.push(new A.Range(p, F + 1, p, W + 1));
                }
              }
            while (a);
          }
          return {
            ranges: g,
            hasMore: r,
            ambiguousCharacterCount: s,
            invisibleCharacterCount: c,
            nonBasicAsciiCharacterCount: d,
          };
        }
        static computeUnicodeHighlightReason(C, h) {
          const b = new f(h);
          switch (b.shouldHighlightNonBasicASCII(C, null)) {
            case 0:
              return null;
            case 2:
              return { kind: 1 };
            case 3: {
              const S = C.codePointAt(0),
                _ = b.ambiguousCharacters.getPrimaryConfusable(S),
                m = i.AmbiguousCharacters.getLocales().filter(
                  (w) =>
                    !i.AmbiguousCharacters.getInstance(
                      new Set([...h.allowedLocales, w]),
                    ).isAmbiguous(S),
                );
              return {
                kind: 0,
                confusableWith: String.fromCodePoint(_),
                notAmbiguousInLocales: m,
              };
            }
            case 1:
              return { kind: 2 };
          }
        }
      }
      n.UnicodeTextModelHighlighter = v;
      function o(e, C) {
        return `[${i.escapeRegExpCharacters(
          e.map((b) => String.fromCodePoint(b)).join(''),
        )}]`;
      }
      class f {
        constructor(C) {
          (this.b = C),
            (this.a = new Set(C.allowedCodePoints)),
            (this.ambiguousCharacters = i.AmbiguousCharacters.getInstance(
              new Set(C.allowedLocales),
            ));
        }
        getCandidateCodePoints() {
          if (this.b.nonBasicASCII) return 'allNonBasicAscii';
          const C = new Set();
          if (this.b.invisibleCharacters)
            for (const h of i.InvisibleCharacters.codePoints)
              N(String.fromCodePoint(h)) || C.add(h);
          if (this.b.ambiguousCharacters)
            for (const h of this.ambiguousCharacters.getConfusableCodePoints())
              C.add(h);
          for (const h of this.a) C.delete(h);
          return C;
        }
        shouldHighlightNonBasicASCII(C, h) {
          const b = C.codePointAt(0);
          if (this.a.has(b)) return 0;
          if (this.b.nonBasicASCII) return 1;
          let L = !1,
            S = !1;
          if (h)
            for (const _ of h) {
              const m = _.codePointAt(0),
                w = i.isBasicASCII(_);
              (L = L || w),
                !w &&
                  !this.ambiguousCharacters.isAmbiguous(m) &&
                  !i.InvisibleCharacters.isInvisibleCharacter(m) &&
                  (S = !0);
            }
          return !L && S
            ? 0
            : this.b.invisibleCharacters &&
              !N(C) &&
              i.InvisibleCharacters.isInvisibleCharacter(b)
            ? 2
            : this.b.ambiguousCharacters &&
              this.ambiguousCharacters.isAmbiguous(b)
            ? 3
            : 0;
        }
      }
      function N(e) {
        return (
          e === ' ' ||
          e ===
            `
` ||
          e === '	'
        );
      }
    }),
    Y(X[47], Q([0, 1]), function (U, n) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.WrappingIndent =
          n.TrackedRangeStickiness =
          n.TextEditorCursorStyle =
          n.TextEditorCursorBlinkingStyle =
          n.SymbolTag =
          n.SymbolKind =
          n.SignatureHelpTriggerKind =
          n.SelectionDirection =
          n.ScrollbarVisibility =
          n.ScrollType =
          n.RenderMinimap =
          n.RenderLineNumbersType =
          n.PositionAffinity =
          n.OverviewRulerLane =
          n.OverlayWidgetPositionPreference =
          n.MouseTargetType =
          n.MinimapPosition =
          n.MarkerTag =
          n.MarkerSeverity =
          n.KeyCode =
          n.InlineCompletionTriggerKind =
          n.InlayHintKind =
          n.InjectedTextCursorStops =
          n.IndentAction =
          n.EndOfLineSequence =
          n.EndOfLinePreference =
          n.EditorOption =
          n.EditorAutoIndentStrategy =
          n.DocumentHighlightKind =
          n.DefaultEndOfLine =
          n.CursorChangeReason =
          n.ContentWidgetPositionPreference =
          n.CompletionTriggerKind =
          n.CompletionItemTag =
          n.CompletionItemKind =
          n.CompletionItemInsertTextRule =
          n.CodeActionTriggerType =
          n.AccessibilitySupport =
            void 0);
      var A;
      (function (t) {
        (t[(t.Unknown = 0)] = 'Unknown'),
          (t[(t.Disabled = 1)] = 'Disabled'),
          (t[(t.Enabled = 2)] = 'Enabled');
      })((A = n.AccessibilitySupport || (n.AccessibilitySupport = {})));
      var M;
      (function (t) {
        (t[(t.Invoke = 1)] = 'Invoke'), (t[(t.Auto = 2)] = 'Auto');
      })((M = n.CodeActionTriggerType || (n.CodeActionTriggerType = {})));
      var i;
      (function (t) {
        (t[(t.None = 0)] = 'None'),
          (t[(t.KeepWhitespace = 1)] = 'KeepWhitespace'),
          (t[(t.InsertAsSnippet = 4)] = 'InsertAsSnippet');
      })(
        (i =
          n.CompletionItemInsertTextRule ||
          (n.CompletionItemInsertTextRule = {})),
      );
      var u;
      (function (t) {
        (t[(t.Method = 0)] = 'Method'),
          (t[(t.Function = 1)] = 'Function'),
          (t[(t.Constructor = 2)] = 'Constructor'),
          (t[(t.Field = 3)] = 'Field'),
          (t[(t.Variable = 4)] = 'Variable'),
          (t[(t.Class = 5)] = 'Class'),
          (t[(t.Struct = 6)] = 'Struct'),
          (t[(t.Interface = 7)] = 'Interface'),
          (t[(t.Module = 8)] = 'Module'),
          (t[(t.Property = 9)] = 'Property'),
          (t[(t.Event = 10)] = 'Event'),
          (t[(t.Operator = 11)] = 'Operator'),
          (t[(t.Unit = 12)] = 'Unit'),
          (t[(t.Value = 13)] = 'Value'),
          (t[(t.Constant = 14)] = 'Constant'),
          (t[(t.Enum = 15)] = 'Enum'),
          (t[(t.EnumMember = 16)] = 'EnumMember'),
          (t[(t.Keyword = 17)] = 'Keyword'),
          (t[(t.Text = 18)] = 'Text'),
          (t[(t.Color = 19)] = 'Color'),
          (t[(t.File = 20)] = 'File'),
          (t[(t.Reference = 21)] = 'Reference'),
          (t[(t.Customcolor = 22)] = 'Customcolor'),
          (t[(t.Folder = 23)] = 'Folder'),
          (t[(t.TypeParameter = 24)] = 'TypeParameter'),
          (t[(t.User = 25)] = 'User'),
          (t[(t.Issue = 26)] = 'Issue'),
          (t[(t.Snippet = 27)] = 'Snippet');
      })((u = n.CompletionItemKind || (n.CompletionItemKind = {})));
      var y;
      (function (t) {
        t[(t.Deprecated = 1)] = 'Deprecated';
      })((y = n.CompletionItemTag || (n.CompletionItemTag = {})));
      var v;
      (function (t) {
        (t[(t.Invoke = 0)] = 'Invoke'),
          (t[(t.TriggerCharacter = 1)] = 'TriggerCharacter'),
          (t[(t.TriggerForIncompleteCompletions = 2)] =
            'TriggerForIncompleteCompletions');
      })((v = n.CompletionTriggerKind || (n.CompletionTriggerKind = {})));
      var o;
      (function (t) {
        (t[(t.EXACT = 0)] = 'EXACT'),
          (t[(t.ABOVE = 1)] = 'ABOVE'),
          (t[(t.BELOW = 2)] = 'BELOW');
      })(
        (o =
          n.ContentWidgetPositionPreference ||
          (n.ContentWidgetPositionPreference = {})),
      );
      var f;
      (function (t) {
        (t[(t.NotSet = 0)] = 'NotSet'),
          (t[(t.ContentFlush = 1)] = 'ContentFlush'),
          (t[(t.RecoverFromMarkers = 2)] = 'RecoverFromMarkers'),
          (t[(t.Explicit = 3)] = 'Explicit'),
          (t[(t.Paste = 4)] = 'Paste'),
          (t[(t.Undo = 5)] = 'Undo'),
          (t[(t.Redo = 6)] = 'Redo');
      })((f = n.CursorChangeReason || (n.CursorChangeReason = {})));
      var N;
      (function (t) {
        (t[(t.LF = 1)] = 'LF'), (t[(t.CRLF = 2)] = 'CRLF');
      })((N = n.DefaultEndOfLine || (n.DefaultEndOfLine = {})));
      var e;
      (function (t) {
        (t[(t.Text = 0)] = 'Text'),
          (t[(t.Read = 1)] = 'Read'),
          (t[(t.Write = 2)] = 'Write');
      })((e = n.DocumentHighlightKind || (n.DocumentHighlightKind = {})));
      var C;
      (function (t) {
        (t[(t.None = 0)] = 'None'),
          (t[(t.Keep = 1)] = 'Keep'),
          (t[(t.Brackets = 2)] = 'Brackets'),
          (t[(t.Advanced = 3)] = 'Advanced'),
          (t[(t.Full = 4)] = 'Full');
      })((C = n.EditorAutoIndentStrategy || (n.EditorAutoIndentStrategy = {})));
      var h;
      (function (t) {
        (t[(t.acceptSuggestionOnCommitCharacter = 0)] =
          'acceptSuggestionOnCommitCharacter'),
          (t[(t.acceptSuggestionOnEnter = 1)] = 'acceptSuggestionOnEnter'),
          (t[(t.accessibilitySupport = 2)] = 'accessibilitySupport'),
          (t[(t.accessibilityPageSize = 3)] = 'accessibilityPageSize'),
          (t[(t.ariaLabel = 4)] = 'ariaLabel'),
          (t[(t.autoClosingBrackets = 5)] = 'autoClosingBrackets'),
          (t[(t.autoClosingDelete = 6)] = 'autoClosingDelete'),
          (t[(t.autoClosingOvertype = 7)] = 'autoClosingOvertype'),
          (t[(t.autoClosingQuotes = 8)] = 'autoClosingQuotes'),
          (t[(t.autoIndent = 9)] = 'autoIndent'),
          (t[(t.automaticLayout = 10)] = 'automaticLayout'),
          (t[(t.autoSurround = 11)] = 'autoSurround'),
          (t[(t.bracketPairColorization = 12)] = 'bracketPairColorization'),
          (t[(t.guides = 13)] = 'guides'),
          (t[(t.codeLens = 14)] = 'codeLens'),
          (t[(t.codeLensFontFamily = 15)] = 'codeLensFontFamily'),
          (t[(t.codeLensFontSize = 16)] = 'codeLensFontSize'),
          (t[(t.colorDecorators = 17)] = 'colorDecorators'),
          (t[(t.colorDecoratorsLimit = 18)] = 'colorDecoratorsLimit'),
          (t[(t.columnSelection = 19)] = 'columnSelection'),
          (t[(t.comments = 20)] = 'comments'),
          (t[(t.contextmenu = 21)] = 'contextmenu'),
          (t[(t.copyWithSyntaxHighlighting = 22)] =
            'copyWithSyntaxHighlighting'),
          (t[(t.cursorBlinking = 23)] = 'cursorBlinking'),
          (t[(t.cursorSmoothCaretAnimation = 24)] =
            'cursorSmoothCaretAnimation'),
          (t[(t.cursorStyle = 25)] = 'cursorStyle'),
          (t[(t.cursorSurroundingLines = 26)] = 'cursorSurroundingLines'),
          (t[(t.cursorSurroundingLinesStyle = 27)] =
            'cursorSurroundingLinesStyle'),
          (t[(t.cursorWidth = 28)] = 'cursorWidth'),
          (t[(t.disableLayerHinting = 29)] = 'disableLayerHinting'),
          (t[(t.disableMonospaceOptimizations = 30)] =
            'disableMonospaceOptimizations'),
          (t[(t.domReadOnly = 31)] = 'domReadOnly'),
          (t[(t.dragAndDrop = 32)] = 'dragAndDrop'),
          (t[(t.dropIntoEditor = 33)] = 'dropIntoEditor'),
          (t[(t.emptySelectionClipboard = 34)] = 'emptySelectionClipboard'),
          (t[(t.experimentalWhitespaceRendering = 35)] =
            'experimentalWhitespaceRendering'),
          (t[(t.extraEditorClassName = 36)] = 'extraEditorClassName'),
          (t[(t.fastScrollSensitivity = 37)] = 'fastScrollSensitivity'),
          (t[(t.find = 38)] = 'find'),
          (t[(t.fixedOverflowWidgets = 39)] = 'fixedOverflowWidgets'),
          (t[(t.folding = 40)] = 'folding'),
          (t[(t.foldingStrategy = 41)] = 'foldingStrategy'),
          (t[(t.foldingHighlight = 42)] = 'foldingHighlight'),
          (t[(t.foldingImportsByDefault = 43)] = 'foldingImportsByDefault'),
          (t[(t.foldingMaximumRegions = 44)] = 'foldingMaximumRegions'),
          (t[(t.unfoldOnClickAfterEndOfLine = 45)] =
            'unfoldOnClickAfterEndOfLine'),
          (t[(t.fontFamily = 46)] = 'fontFamily'),
          (t[(t.fontInfo = 47)] = 'fontInfo'),
          (t[(t.fontLigatures = 48)] = 'fontLigatures'),
          (t[(t.fontSize = 49)] = 'fontSize'),
          (t[(t.fontWeight = 50)] = 'fontWeight'),
          (t[(t.fontVariations = 51)] = 'fontVariations'),
          (t[(t.formatOnPaste = 52)] = 'formatOnPaste'),
          (t[(t.formatOnType = 53)] = 'formatOnType'),
          (t[(t.glyphMargin = 54)] = 'glyphMargin'),
          (t[(t.gotoLocation = 55)] = 'gotoLocation'),
          (t[(t.hideCursorInOverviewRuler = 56)] = 'hideCursorInOverviewRuler'),
          (t[(t.hover = 57)] = 'hover'),
          (t[(t.inDiffEditor = 58)] = 'inDiffEditor'),
          (t[(t.inlineSuggest = 59)] = 'inlineSuggest'),
          (t[(t.letterSpacing = 60)] = 'letterSpacing'),
          (t[(t.lightbulb = 61)] = 'lightbulb'),
          (t[(t.lineDecorationsWidth = 62)] = 'lineDecorationsWidth'),
          (t[(t.lineHeight = 63)] = 'lineHeight'),
          (t[(t.lineNumbers = 64)] = 'lineNumbers'),
          (t[(t.lineNumbersMinChars = 65)] = 'lineNumbersMinChars'),
          (t[(t.linkedEditing = 66)] = 'linkedEditing'),
          (t[(t.links = 67)] = 'links'),
          (t[(t.matchBrackets = 68)] = 'matchBrackets'),
          (t[(t.minimap = 69)] = 'minimap'),
          (t[(t.mouseStyle = 70)] = 'mouseStyle'),
          (t[(t.mouseWheelScrollSensitivity = 71)] =
            'mouseWheelScrollSensitivity'),
          (t[(t.mouseWheelZoom = 72)] = 'mouseWheelZoom'),
          (t[(t.multiCursorMergeOverlapping = 73)] =
            'multiCursorMergeOverlapping'),
          (t[(t.multiCursorModifier = 74)] = 'multiCursorModifier'),
          (t[(t.multiCursorPaste = 75)] = 'multiCursorPaste'),
          (t[(t.multiCursorLimit = 76)] = 'multiCursorLimit'),
          (t[(t.occurrencesHighlight = 77)] = 'occurrencesHighlight'),
          (t[(t.overviewRulerBorder = 78)] = 'overviewRulerBorder'),
          (t[(t.overviewRulerLanes = 79)] = 'overviewRulerLanes'),
          (t[(t.padding = 80)] = 'padding'),
          (t[(t.parameterHints = 81)] = 'parameterHints'),
          (t[(t.peekWidgetDefaultFocus = 82)] = 'peekWidgetDefaultFocus'),
          (t[(t.definitionLinkOpensInPeek = 83)] = 'definitionLinkOpensInPeek'),
          (t[(t.quickSuggestions = 84)] = 'quickSuggestions'),
          (t[(t.quickSuggestionsDelay = 85)] = 'quickSuggestionsDelay'),
          (t[(t.readOnly = 86)] = 'readOnly'),
          (t[(t.renameOnType = 87)] = 'renameOnType'),
          (t[(t.renderControlCharacters = 88)] = 'renderControlCharacters'),
          (t[(t.renderFinalNewline = 89)] = 'renderFinalNewline'),
          (t[(t.renderLineHighlight = 90)] = 'renderLineHighlight'),
          (t[(t.renderLineHighlightOnlyWhenFocus = 91)] =
            'renderLineHighlightOnlyWhenFocus'),
          (t[(t.renderValidationDecorations = 92)] =
            'renderValidationDecorations'),
          (t[(t.renderWhitespace = 93)] = 'renderWhitespace'),
          (t[(t.revealHorizontalRightPadding = 94)] =
            'revealHorizontalRightPadding'),
          (t[(t.roundedSelection = 95)] = 'roundedSelection'),
          (t[(t.rulers = 96)] = 'rulers'),
          (t[(t.scrollbar = 97)] = 'scrollbar'),
          (t[(t.scrollBeyondLastColumn = 98)] = 'scrollBeyondLastColumn'),
          (t[(t.scrollBeyondLastLine = 99)] = 'scrollBeyondLastLine'),
          (t[(t.scrollPredominantAxis = 100)] = 'scrollPredominantAxis'),
          (t[(t.selectionClipboard = 101)] = 'selectionClipboard'),
          (t[(t.selectionHighlight = 102)] = 'selectionHighlight'),
          (t[(t.selectOnLineNumbers = 103)] = 'selectOnLineNumbers'),
          (t[(t.showFoldingControls = 104)] = 'showFoldingControls'),
          (t[(t.showUnused = 105)] = 'showUnused'),
          (t[(t.snippetSuggestions = 106)] = 'snippetSuggestions'),
          (t[(t.smartSelect = 107)] = 'smartSelect'),
          (t[(t.smoothScrolling = 108)] = 'smoothScrolling'),
          (t[(t.stickyScroll = 109)] = 'stickyScroll'),
          (t[(t.stickyTabStops = 110)] = 'stickyTabStops'),
          (t[(t.stopRenderingLineAfter = 111)] = 'stopRenderingLineAfter'),
          (t[(t.suggest = 112)] = 'suggest'),
          (t[(t.suggestFontSize = 113)] = 'suggestFontSize'),
          (t[(t.suggestLineHeight = 114)] = 'suggestLineHeight'),
          (t[(t.suggestOnTriggerCharacters = 115)] =
            'suggestOnTriggerCharacters'),
          (t[(t.suggestSelection = 116)] = 'suggestSelection'),
          (t[(t.tabCompletion = 117)] = 'tabCompletion'),
          (t[(t.tabIndex = 118)] = 'tabIndex'),
          (t[(t.unicodeHighlighting = 119)] = 'unicodeHighlighting'),
          (t[(t.unusualLineTerminators = 120)] = 'unusualLineTerminators'),
          (t[(t.useShadowDOM = 121)] = 'useShadowDOM'),
          (t[(t.useTabStops = 122)] = 'useTabStops'),
          (t[(t.wordBreak = 123)] = 'wordBreak'),
          (t[(t.wordSeparators = 124)] = 'wordSeparators'),
          (t[(t.wordWrap = 125)] = 'wordWrap'),
          (t[(t.wordWrapBreakAfterCharacters = 126)] =
            'wordWrapBreakAfterCharacters'),
          (t[(t.wordWrapBreakBeforeCharacters = 127)] =
            'wordWrapBreakBeforeCharacters'),
          (t[(t.wordWrapColumn = 128)] = 'wordWrapColumn'),
          (t[(t.wordWrapOverride1 = 129)] = 'wordWrapOverride1'),
          (t[(t.wordWrapOverride2 = 130)] = 'wordWrapOverride2'),
          (t[(t.wrappingIndent = 131)] = 'wrappingIndent'),
          (t[(t.wrappingStrategy = 132)] = 'wrappingStrategy'),
          (t[(t.showDeprecated = 133)] = 'showDeprecated'),
          (t[(t.inlayHints = 134)] = 'inlayHints'),
          (t[(t.editorClassName = 135)] = 'editorClassName'),
          (t[(t.pixelRatio = 136)] = 'pixelRatio'),
          (t[(t.tabFocusMode = 137)] = 'tabFocusMode'),
          (t[(t.layoutInfo = 138)] = 'layoutInfo'),
          (t[(t.wrappingInfo = 139)] = 'wrappingInfo');
      })((h = n.EditorOption || (n.EditorOption = {})));
      var b;
      (function (t) {
        (t[(t.TextDefined = 0)] = 'TextDefined'),
          (t[(t.LF = 1)] = 'LF'),
          (t[(t.CRLF = 2)] = 'CRLF');
      })((b = n.EndOfLinePreference || (n.EndOfLinePreference = {})));
      var L;
      (function (t) {
        (t[(t.LF = 0)] = 'LF'), (t[(t.CRLF = 1)] = 'CRLF');
      })((L = n.EndOfLineSequence || (n.EndOfLineSequence = {})));
      var S;
      (function (t) {
        (t[(t.None = 0)] = 'None'),
          (t[(t.Indent = 1)] = 'Indent'),
          (t[(t.IndentOutdent = 2)] = 'IndentOutdent'),
          (t[(t.Outdent = 3)] = 'Outdent');
      })((S = n.IndentAction || (n.IndentAction = {})));
      var _;
      (function (t) {
        (t[(t.Both = 0)] = 'Both'),
          (t[(t.Right = 1)] = 'Right'),
          (t[(t.Left = 2)] = 'Left'),
          (t[(t.None = 3)] = 'None');
      })((_ = n.InjectedTextCursorStops || (n.InjectedTextCursorStops = {})));
      var m;
      (function (t) {
        (t[(t.Type = 1)] = 'Type'), (t[(t.Parameter = 2)] = 'Parameter');
      })((m = n.InlayHintKind || (n.InlayHintKind = {})));
      var w;
      (function (t) {
        (t[(t.Automatic = 0)] = 'Automatic'),
          (t[(t.Explicit = 1)] = 'Explicit');
      })(
        (w =
          n.InlineCompletionTriggerKind ||
          (n.InlineCompletionTriggerKind = {})),
      );
      var l;
      (function (t) {
        (t[(t.DependsOnKbLayout = -1)] = 'DependsOnKbLayout'),
          (t[(t.Unknown = 0)] = 'Unknown'),
          (t[(t.Backspace = 1)] = 'Backspace'),
          (t[(t.Tab = 2)] = 'Tab'),
          (t[(t.Enter = 3)] = 'Enter'),
          (t[(t.Shift = 4)] = 'Shift'),
          (t[(t.Ctrl = 5)] = 'Ctrl'),
          (t[(t.Alt = 6)] = 'Alt'),
          (t[(t.PauseBreak = 7)] = 'PauseBreak'),
          (t[(t.CapsLock = 8)] = 'CapsLock'),
          (t[(t.Escape = 9)] = 'Escape'),
          (t[(t.Space = 10)] = 'Space'),
          (t[(t.PageUp = 11)] = 'PageUp'),
          (t[(t.PageDown = 12)] = 'PageDown'),
          (t[(t.End = 13)] = 'End'),
          (t[(t.Home = 14)] = 'Home'),
          (t[(t.LeftArrow = 15)] = 'LeftArrow'),
          (t[(t.UpArrow = 16)] = 'UpArrow'),
          (t[(t.RightArrow = 17)] = 'RightArrow'),
          (t[(t.DownArrow = 18)] = 'DownArrow'),
          (t[(t.Insert = 19)] = 'Insert'),
          (t[(t.Delete = 20)] = 'Delete'),
          (t[(t.Digit0 = 21)] = 'Digit0'),
          (t[(t.Digit1 = 22)] = 'Digit1'),
          (t[(t.Digit2 = 23)] = 'Digit2'),
          (t[(t.Digit3 = 24)] = 'Digit3'),
          (t[(t.Digit4 = 25)] = 'Digit4'),
          (t[(t.Digit5 = 26)] = 'Digit5'),
          (t[(t.Digit6 = 27)] = 'Digit6'),
          (t[(t.Digit7 = 28)] = 'Digit7'),
          (t[(t.Digit8 = 29)] = 'Digit8'),
          (t[(t.Digit9 = 30)] = 'Digit9'),
          (t[(t.KeyA = 31)] = 'KeyA'),
          (t[(t.KeyB = 32)] = 'KeyB'),
          (t[(t.KeyC = 33)] = 'KeyC'),
          (t[(t.KeyD = 34)] = 'KeyD'),
          (t[(t.KeyE = 35)] = 'KeyE'),
          (t[(t.KeyF = 36)] = 'KeyF'),
          (t[(t.KeyG = 37)] = 'KeyG'),
          (t[(t.KeyH = 38)] = 'KeyH'),
          (t[(t.KeyI = 39)] = 'KeyI'),
          (t[(t.KeyJ = 40)] = 'KeyJ'),
          (t[(t.KeyK = 41)] = 'KeyK'),
          (t[(t.KeyL = 42)] = 'KeyL'),
          (t[(t.KeyM = 43)] = 'KeyM'),
          (t[(t.KeyN = 44)] = 'KeyN'),
          (t[(t.KeyO = 45)] = 'KeyO'),
          (t[(t.KeyP = 46)] = 'KeyP'),
          (t[(t.KeyQ = 47)] = 'KeyQ'),
          (t[(t.KeyR = 48)] = 'KeyR'),
          (t[(t.KeyS = 49)] = 'KeyS'),
          (t[(t.KeyT = 50)] = 'KeyT'),
          (t[(t.KeyU = 51)] = 'KeyU'),
          (t[(t.KeyV = 52)] = 'KeyV'),
          (t[(t.KeyW = 53)] = 'KeyW'),
          (t[(t.KeyX = 54)] = 'KeyX'),
          (t[(t.KeyY = 55)] = 'KeyY'),
          (t[(t.KeyZ = 56)] = 'KeyZ'),
          (t[(t.Meta = 57)] = 'Meta'),
          (t[(t.ContextMenu = 58)] = 'ContextMenu'),
          (t[(t.F1 = 59)] = 'F1'),
          (t[(t.F2 = 60)] = 'F2'),
          (t[(t.F3 = 61)] = 'F3'),
          (t[(t.F4 = 62)] = 'F4'),
          (t[(t.F5 = 63)] = 'F5'),
          (t[(t.F6 = 64)] = 'F6'),
          (t[(t.F7 = 65)] = 'F7'),
          (t[(t.F8 = 66)] = 'F8'),
          (t[(t.F9 = 67)] = 'F9'),
          (t[(t.F10 = 68)] = 'F10'),
          (t[(t.F11 = 69)] = 'F11'),
          (t[(t.F12 = 70)] = 'F12'),
          (t[(t.F13 = 71)] = 'F13'),
          (t[(t.F14 = 72)] = 'F14'),
          (t[(t.F15 = 73)] = 'F15'),
          (t[(t.F16 = 74)] = 'F16'),
          (t[(t.F17 = 75)] = 'F17'),
          (t[(t.F18 = 76)] = 'F18'),
          (t[(t.F19 = 77)] = 'F19'),
          (t[(t.NumLock = 78)] = 'NumLock'),
          (t[(t.ScrollLock = 79)] = 'ScrollLock'),
          (t[(t.Semicolon = 80)] = 'Semicolon'),
          (t[(t.Equal = 81)] = 'Equal'),
          (t[(t.Comma = 82)] = 'Comma'),
          (t[(t.Minus = 83)] = 'Minus'),
          (t[(t.Period = 84)] = 'Period'),
          (t[(t.Slash = 85)] = 'Slash'),
          (t[(t.Backquote = 86)] = 'Backquote'),
          (t[(t.BracketLeft = 87)] = 'BracketLeft'),
          (t[(t.Backslash = 88)] = 'Backslash'),
          (t[(t.BracketRight = 89)] = 'BracketRight'),
          (t[(t.Quote = 90)] = 'Quote'),
          (t[(t.OEM_8 = 91)] = 'OEM_8'),
          (t[(t.IntlBackslash = 92)] = 'IntlBackslash'),
          (t[(t.Numpad0 = 93)] = 'Numpad0'),
          (t[(t.Numpad1 = 94)] = 'Numpad1'),
          (t[(t.Numpad2 = 95)] = 'Numpad2'),
          (t[(t.Numpad3 = 96)] = 'Numpad3'),
          (t[(t.Numpad4 = 97)] = 'Numpad4'),
          (t[(t.Numpad5 = 98)] = 'Numpad5'),
          (t[(t.Numpad6 = 99)] = 'Numpad6'),
          (t[(t.Numpad7 = 100)] = 'Numpad7'),
          (t[(t.Numpad8 = 101)] = 'Numpad8'),
          (t[(t.Numpad9 = 102)] = 'Numpad9'),
          (t[(t.NumpadMultiply = 103)] = 'NumpadMultiply'),
          (t[(t.NumpadAdd = 104)] = 'NumpadAdd'),
          (t[(t.NUMPAD_SEPARATOR = 105)] = 'NUMPAD_SEPARATOR'),
          (t[(t.NumpadSubtract = 106)] = 'NumpadSubtract'),
          (t[(t.NumpadDecimal = 107)] = 'NumpadDecimal'),
          (t[(t.NumpadDivide = 108)] = 'NumpadDivide'),
          (t[(t.KEY_IN_COMPOSITION = 109)] = 'KEY_IN_COMPOSITION'),
          (t[(t.ABNT_C1 = 110)] = 'ABNT_C1'),
          (t[(t.ABNT_C2 = 111)] = 'ABNT_C2'),
          (t[(t.AudioVolumeMute = 112)] = 'AudioVolumeMute'),
          (t[(t.AudioVolumeUp = 113)] = 'AudioVolumeUp'),
          (t[(t.AudioVolumeDown = 114)] = 'AudioVolumeDown'),
          (t[(t.BrowserSearch = 115)] = 'BrowserSearch'),
          (t[(t.BrowserHome = 116)] = 'BrowserHome'),
          (t[(t.BrowserBack = 117)] = 'BrowserBack'),
          (t[(t.BrowserForward = 118)] = 'BrowserForward'),
          (t[(t.MediaTrackNext = 119)] = 'MediaTrackNext'),
          (t[(t.MediaTrackPrevious = 120)] = 'MediaTrackPrevious'),
          (t[(t.MediaStop = 121)] = 'MediaStop'),
          (t[(t.MediaPlayPause = 122)] = 'MediaPlayPause'),
          (t[(t.LaunchMediaPlayer = 123)] = 'LaunchMediaPlayer'),
          (t[(t.LaunchMail = 124)] = 'LaunchMail'),
          (t[(t.LaunchApp2 = 125)] = 'LaunchApp2'),
          (t[(t.Clear = 126)] = 'Clear'),
          (t[(t.MAX_VALUE = 127)] = 'MAX_VALUE');
      })((l = n.KeyCode || (n.KeyCode = {})));
      var g;
      (function (t) {
        (t[(t.Hint = 1)] = 'Hint'),
          (t[(t.Info = 2)] = 'Info'),
          (t[(t.Warning = 4)] = 'Warning'),
          (t[(t.Error = 8)] = 'Error');
      })((g = n.MarkerSeverity || (n.MarkerSeverity = {})));
      var r;
      (function (t) {
        (t[(t.Unnecessary = 1)] = 'Unnecessary'),
          (t[(t.Deprecated = 2)] = 'Deprecated');
      })((r = n.MarkerTag || (n.MarkerTag = {})));
      var a;
      (function (t) {
        (t[(t.Inline = 1)] = 'Inline'), (t[(t.Gutter = 2)] = 'Gutter');
      })((a = n.MinimapPosition || (n.MinimapPosition = {})));
      var s;
      (function (t) {
        (t[(t.UNKNOWN = 0)] = 'UNKNOWN'),
          (t[(t.TEXTAREA = 1)] = 'TEXTAREA'),
          (t[(t.GUTTER_GLYPH_MARGIN = 2)] = 'GUTTER_GLYPH_MARGIN'),
          (t[(t.GUTTER_LINE_NUMBERS = 3)] = 'GUTTER_LINE_NUMBERS'),
          (t[(t.GUTTER_LINE_DECORATIONS = 4)] = 'GUTTER_LINE_DECORATIONS'),
          (t[(t.GUTTER_VIEW_ZONE = 5)] = 'GUTTER_VIEW_ZONE'),
          (t[(t.CONTENT_TEXT = 6)] = 'CONTENT_TEXT'),
          (t[(t.CONTENT_EMPTY = 7)] = 'CONTENT_EMPTY'),
          (t[(t.CONTENT_VIEW_ZONE = 8)] = 'CONTENT_VIEW_ZONE'),
          (t[(t.CONTENT_WIDGET = 9)] = 'CONTENT_WIDGET'),
          (t[(t.OVERVIEW_RULER = 10)] = 'OVERVIEW_RULER'),
          (t[(t.SCROLLBAR = 11)] = 'SCROLLBAR'),
          (t[(t.OVERLAY_WIDGET = 12)] = 'OVERLAY_WIDGET'),
          (t[(t.OUTSIDE_EDITOR = 13)] = 'OUTSIDE_EDITOR');
      })((s = n.MouseTargetType || (n.MouseTargetType = {})));
      var c;
      (function (t) {
        (t[(t.TOP_RIGHT_CORNER = 0)] = 'TOP_RIGHT_CORNER'),
          (t[(t.BOTTOM_RIGHT_CORNER = 1)] = 'BOTTOM_RIGHT_CORNER'),
          (t[(t.TOP_CENTER = 2)] = 'TOP_CENTER');
      })(
        (c =
          n.OverlayWidgetPositionPreference ||
          (n.OverlayWidgetPositionPreference = {})),
      );
      var d;
      (function (t) {
        (t[(t.Left = 1)] = 'Left'),
          (t[(t.Center = 2)] = 'Center'),
          (t[(t.Right = 4)] = 'Right'),
          (t[(t.Full = 7)] = 'Full');
      })((d = n.OverviewRulerLane || (n.OverviewRulerLane = {})));
      var p;
      (function (t) {
        (t[(t.Left = 0)] = 'Left'),
          (t[(t.Right = 1)] = 'Right'),
          (t[(t.None = 2)] = 'None'),
          (t[(t.LeftOfInjectedText = 3)] = 'LeftOfInjectedText'),
          (t[(t.RightOfInjectedText = 4)] = 'RightOfInjectedText');
      })((p = n.PositionAffinity || (n.PositionAffinity = {})));
      var E;
      (function (t) {
        (t[(t.Off = 0)] = 'Off'),
          (t[(t.On = 1)] = 'On'),
          (t[(t.Relative = 2)] = 'Relative'),
          (t[(t.Interval = 3)] = 'Interval'),
          (t[(t.Custom = 4)] = 'Custom');
      })((E = n.RenderLineNumbersType || (n.RenderLineNumbersType = {})));
      var R;
      (function (t) {
        (t[(t.None = 0)] = 'None'),
          (t[(t.Text = 1)] = 'Text'),
          (t[(t.Blocks = 2)] = 'Blocks');
      })((R = n.RenderMinimap || (n.RenderMinimap = {})));
      var D;
      (function (t) {
        (t[(t.Smooth = 0)] = 'Smooth'), (t[(t.Immediate = 1)] = 'Immediate');
      })((D = n.ScrollType || (n.ScrollType = {})));
      var F;
      (function (t) {
        (t[(t.Auto = 1)] = 'Auto'),
          (t[(t.Hidden = 2)] = 'Hidden'),
          (t[(t.Visible = 3)] = 'Visible');
      })((F = n.ScrollbarVisibility || (n.ScrollbarVisibility = {})));
      var W;
      (function (t) {
        (t[(t.LTR = 0)] = 'LTR'), (t[(t.RTL = 1)] = 'RTL');
      })((W = n.SelectionDirection || (n.SelectionDirection = {})));
      var B;
      (function (t) {
        (t[(t.Invoke = 1)] = 'Invoke'),
          (t[(t.TriggerCharacter = 2)] = 'TriggerCharacter'),
          (t[(t.ContentChange = 3)] = 'ContentChange');
      })((B = n.SignatureHelpTriggerKind || (n.SignatureHelpTriggerKind = {})));
      var q;
      (function (t) {
        (t[(t.File = 0)] = 'File'),
          (t[(t.Module = 1)] = 'Module'),
          (t[(t.Namespace = 2)] = 'Namespace'),
          (t[(t.Package = 3)] = 'Package'),
          (t[(t.Class = 4)] = 'Class'),
          (t[(t.Method = 5)] = 'Method'),
          (t[(t.Property = 6)] = 'Property'),
          (t[(t.Field = 7)] = 'Field'),
          (t[(t.Constructor = 8)] = 'Constructor'),
          (t[(t.Enum = 9)] = 'Enum'),
          (t[(t.Interface = 10)] = 'Interface'),
          (t[(t.Function = 11)] = 'Function'),
          (t[(t.Variable = 12)] = 'Variable'),
          (t[(t.Constant = 13)] = 'Constant'),
          (t[(t.String = 14)] = 'String'),
          (t[(t.Number = 15)] = 'Number'),
          (t[(t.Boolean = 16)] = 'Boolean'),
          (t[(t.Array = 17)] = 'Array'),
          (t[(t.Object = 18)] = 'Object'),
          (t[(t.Key = 19)] = 'Key'),
          (t[(t.Null = 20)] = 'Null'),
          (t[(t.EnumMember = 21)] = 'EnumMember'),
          (t[(t.Struct = 22)] = 'Struct'),
          (t[(t.Event = 23)] = 'Event'),
          (t[(t.Operator = 24)] = 'Operator'),
          (t[(t.TypeParameter = 25)] = 'TypeParameter');
      })((q = n.SymbolKind || (n.SymbolKind = {})));
      var G;
      (function (t) {
        t[(t.Deprecated = 1)] = 'Deprecated';
      })((G = n.SymbolTag || (n.SymbolTag = {})));
      var k;
      (function (t) {
        (t[(t.Hidden = 0)] = 'Hidden'),
          (t[(t.Blink = 1)] = 'Blink'),
          (t[(t.Smooth = 2)] = 'Smooth'),
          (t[(t.Phase = 3)] = 'Phase'),
          (t[(t.Expand = 4)] = 'Expand'),
          (t[(t.Solid = 5)] = 'Solid');
      })(
        (k =
          n.TextEditorCursorBlinkingStyle ||
          (n.TextEditorCursorBlinkingStyle = {})),
      );
      var T;
      (function (t) {
        (t[(t.Line = 1)] = 'Line'),
          (t[(t.Block = 2)] = 'Block'),
          (t[(t.Underline = 3)] = 'Underline'),
          (t[(t.LineThin = 4)] = 'LineThin'),
          (t[(t.BlockOutline = 5)] = 'BlockOutline'),
          (t[(t.UnderlineThin = 6)] = 'UnderlineThin');
      })((T = n.TextEditorCursorStyle || (n.TextEditorCursorStyle = {})));
      var I;
      (function (t) {
        (t[(t.AlwaysGrowsWhenTypingAtEdges = 0)] =
          'AlwaysGrowsWhenTypingAtEdges'),
          (t[(t.NeverGrowsWhenTypingAtEdges = 1)] =
            'NeverGrowsWhenTypingAtEdges'),
          (t[(t.GrowsOnlyWhenTypingBefore = 2)] = 'GrowsOnlyWhenTypingBefore'),
          (t[(t.GrowsOnlyWhenTypingAfter = 3)] = 'GrowsOnlyWhenTypingAfter');
      })((I = n.TrackedRangeStickiness || (n.TrackedRangeStickiness = {})));
      var V;
      (function (t) {
        (t[(t.None = 0)] = 'None'),
          (t[(t.Same = 1)] = 'Same'),
          (t[(t.Indent = 2)] = 'Indent'),
          (t[(t.DeepIndent = 3)] = 'DeepIndent');
      })((V = n.WrappingIndent || (n.WrappingIndent = {})));
    }),
    Y(X[48], Q([23, 55]), function (U, n) {
      return U.create('vs/base/common/platform', n);
    }),
    Y(X[5], Q([0, 1, 48]), function (U, n, A) {
      'use strict';
      var M;
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.isAndroid =
          n.isEdge =
          n.isSafari =
          n.isFirefox =
          n.isChrome =
          n.isLittleEndian =
          n.OS =
          n.setTimeout0 =
          n.setTimeout0IsFaster =
          n.language =
          n.userAgent =
          n.isMobile =
          n.isIOS =
          n.isWebWorker =
          n.isWeb =
          n.isNative =
          n.isLinux =
          n.isMacintosh =
          n.isWindows =
          n.globals =
          n.LANGUAGE_DEFAULT =
            void 0),
        (n.LANGUAGE_DEFAULT = 'en');
      let i = !1,
        u = !1,
        y = !1,
        v = !1,
        o = !1,
        f = !1,
        N = !1,
        e = !1,
        C = !1,
        h = !1,
        b,
        L = n.LANGUAGE_DEFAULT,
        S,
        _;
      n.globals =
        typeof self == 'object'
          ? self
          : typeof global == 'object'
          ? global
          : {};
      let m;
      typeof n.globals.vscode < 'u' && typeof n.globals.vscode.process < 'u'
        ? (m = n.globals.vscode.process)
        : typeof process < 'u' && (m = process);
      const w =
          typeof ((M = m?.versions) === null || M === void 0
            ? void 0
            : M.electron) == 'string',
        l = w && m?.type === 'renderer';
      if (typeof navigator == 'object' && !l)
        (_ = navigator.userAgent),
          (i = _.indexOf('Windows') >= 0),
          (u = _.indexOf('Macintosh') >= 0),
          (e =
            (_.indexOf('Macintosh') >= 0 ||
              _.indexOf('iPad') >= 0 ||
              _.indexOf('iPhone') >= 0) &&
            !!navigator.maxTouchPoints &&
            navigator.maxTouchPoints > 0),
          (y = _.indexOf('Linux') >= 0),
          (h = _?.indexOf('Mobi') >= 0),
          (f = !0),
          (b =
            A.getConfiguredDefaultLocale(A.localize(0, null)) ||
            n.LANGUAGE_DEFAULT),
          (L = b);
      else if (typeof m == 'object') {
        (i = m.platform === 'win32'),
          (u = m.platform === 'darwin'),
          (y = m.platform === 'linux'),
          (v = y && !!m.env.SNAP && !!m.env.SNAP_REVISION),
          (N = w),
          (C = !!m.env.CI || !!m.env.BUILD_ARTIFACTSTAGINGDIRECTORY),
          (b = n.LANGUAGE_DEFAULT),
          (L = n.LANGUAGE_DEFAULT);
        const c = m.env.VSCODE_NLS_CONFIG;
        if (c)
          try {
            const d = JSON.parse(c),
              p = d.availableLanguages['*'];
            (b = d.locale),
              (L = p || n.LANGUAGE_DEFAULT),
              (S = d._translationsConfigFile);
          } catch {}
        o = !0;
      } else console.error('Unable to resolve platform.');
      let g = 0;
      u ? (g = 1) : i ? (g = 3) : y && (g = 2),
        (n.isWindows = i),
        (n.isMacintosh = u),
        (n.isLinux = y),
        (n.isNative = o),
        (n.isWeb = f),
        (n.isWebWorker = f && typeof n.globals.importScripts == 'function'),
        (n.isIOS = e),
        (n.isMobile = h),
        (n.userAgent = _),
        (n.language = L),
        (n.setTimeout0IsFaster =
          typeof n.globals.postMessage == 'function' &&
          !n.globals.importScripts),
        (n.setTimeout0 = (() => {
          if (n.setTimeout0IsFaster) {
            const c = [];
            n.globals.addEventListener('message', (p) => {
              if (p.data && p.data.vscodeScheduleAsyncWork)
                for (let E = 0, R = c.length; E < R; E++) {
                  const D = c[E];
                  if (D.id === p.data.vscodeScheduleAsyncWork) {
                    c.splice(E, 1), D.callback();
                    return;
                  }
                }
            });
            let d = 0;
            return (p) => {
              const E = ++d;
              c.push({ id: E, callback: p }),
                n.globals.postMessage({ vscodeScheduleAsyncWork: E }, '*');
            };
          }
          return (c) => setTimeout(c);
        })()),
        (n.OS = u || e ? 2 : i ? 1 : 3);
      let r = !0,
        a = !1;
      function s() {
        if (!a) {
          a = !0;
          const c = new Uint8Array(2);
          (c[0] = 1),
            (c[1] = 2),
            (r = new Uint16Array(c.buffer)[0] === (2 << 8) + 1);
        }
        return r;
      }
      (n.isLittleEndian = s),
        (n.isChrome = !!(n.userAgent && n.userAgent.indexOf('Chrome') >= 0)),
        (n.isFirefox = !!(n.userAgent && n.userAgent.indexOf('Firefox') >= 0)),
        (n.isSafari = !!(
          !n.isChrome &&
          n.userAgent &&
          n.userAgent.indexOf('Safari') >= 0
        )),
        (n.isEdge = !!(n.userAgent && n.userAgent.indexOf('Edg/') >= 0)),
        (n.isAndroid = !!(n.userAgent && n.userAgent.indexOf('Android') >= 0));
    }),
    Y(X[49], Q([0, 1, 5]), function (U, n, A) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.platform = n.env = n.cwd = void 0);
      let M;
      if (
        typeof A.globals.vscode < 'u' &&
        typeof A.globals.vscode.process < 'u'
      ) {
        const i = A.globals.vscode.process;
        M = {
          get platform() {
            return i.platform;
          },
          get arch() {
            return i.arch;
          },
          get env() {
            return i.env;
          },
          cwd() {
            return i.cwd();
          },
        };
      } else
        typeof process < 'u'
          ? (M = {
              get platform() {
                return process.platform;
              },
              get arch() {
                return process.arch;
              },
              get env() {
                return process.env;
              },
              cwd() {
                return process.env.VSCODE_CWD || process.cwd();
              },
            })
          : (M = {
              get platform() {
                return A.isWindows
                  ? 'win32'
                  : A.isMacintosh
                  ? 'darwin'
                  : 'linux';
              },
              get arch() {},
              get env() {
                return {};
              },
              cwd() {
                return '/';
              },
            });
      (n.cwd = M.cwd), (n.env = M.env), (n.platform = M.platform);
    }),
    Y(X[50], Q([0, 1, 49]), function (U, n, A) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.sep =
          n.extname =
          n.basename =
          n.dirname =
          n.relative =
          n.resolve =
          n.normalize =
          n.posix =
          n.win32 =
            void 0);
      const M = 65,
        i = 97,
        u = 90,
        y = 122,
        v = 46,
        o = 47,
        f = 92,
        N = 58,
        e = 63;
      class C extends Error {
        constructor(a, s, c) {
          let d;
          typeof s == 'string' && s.indexOf('not ') === 0
            ? ((d = 'must not be'), (s = s.replace(/^not /, '')))
            : (d = 'must be');
          const p = a.indexOf('.') !== -1 ? 'property' : 'argument';
          let E = `The "${a}" ${p} ${d} of type ${s}`;
          (E += `. Received type ${typeof c}`),
            super(E),
            (this.code = 'ERR_INVALID_ARG_TYPE');
        }
      }
      function h(r, a) {
        if (r === null || typeof r != 'object') throw new C(a, 'Object', r);
      }
      function b(r, a) {
        if (typeof r != 'string') throw new C(a, 'string', r);
      }
      const L = A.platform === 'win32';
      function S(r) {
        return r === o || r === f;
      }
      function _(r) {
        return r === o;
      }
      function m(r) {
        return (r >= M && r <= u) || (r >= i && r <= y);
      }
      function w(r, a, s, c) {
        let d = '',
          p = 0,
          E = -1,
          R = 0,
          D = 0;
        for (let F = 0; F <= r.length; ++F) {
          if (F < r.length) D = r.charCodeAt(F);
          else {
            if (c(D)) break;
            D = o;
          }
          if (c(D)) {
            if (!(E === F - 1 || R === 1))
              if (R === 2) {
                if (
                  d.length < 2 ||
                  p !== 2 ||
                  d.charCodeAt(d.length - 1) !== v ||
                  d.charCodeAt(d.length - 2) !== v
                ) {
                  if (d.length > 2) {
                    const W = d.lastIndexOf(s);
                    W === -1
                      ? ((d = ''), (p = 0))
                      : ((d = d.slice(0, W)),
                        (p = d.length - 1 - d.lastIndexOf(s))),
                      (E = F),
                      (R = 0);
                    continue;
                  } else if (d.length !== 0) {
                    (d = ''), (p = 0), (E = F), (R = 0);
                    continue;
                  }
                }
                a && ((d += d.length > 0 ? `${s}..` : '..'), (p = 2));
              } else
                d.length > 0
                  ? (d += `${s}${r.slice(E + 1, F)}`)
                  : (d = r.slice(E + 1, F)),
                  (p = F - E - 1);
            (E = F), (R = 0);
          } else D === v && R !== -1 ? ++R : (R = -1);
        }
        return d;
      }
      function l(r, a) {
        h(a, 'pathObject');
        const s = a.dir || a.root,
          c = a.base || `${a.name || ''}${a.ext || ''}`;
        return s ? (s === a.root ? `${s}${c}` : `${s}${r}${c}`) : c;
      }
      n.win32 = {
        resolve(...r) {
          let a = '',
            s = '',
            c = !1;
          for (let d = r.length - 1; d >= -1; d--) {
            let p;
            if (d >= 0) {
              if (((p = r[d]), b(p, 'path'), p.length === 0)) continue;
            } else
              a.length === 0
                ? (p = A.cwd())
                : ((p = A.env[`=${a}`] || A.cwd()),
                  (p === void 0 ||
                    (p.slice(0, 2).toLowerCase() !== a.toLowerCase() &&
                      p.charCodeAt(2) === f)) &&
                    (p = `${a}\\`));
            const E = p.length;
            let R = 0,
              D = '',
              F = !1;
            const W = p.charCodeAt(0);
            if (E === 1) S(W) && ((R = 1), (F = !0));
            else if (S(W))
              if (((F = !0), S(p.charCodeAt(1)))) {
                let B = 2,
                  q = B;
                for (; B < E && !S(p.charCodeAt(B)); ) B++;
                if (B < E && B !== q) {
                  const G = p.slice(q, B);
                  for (q = B; B < E && S(p.charCodeAt(B)); ) B++;
                  if (B < E && B !== q) {
                    for (q = B; B < E && !S(p.charCodeAt(B)); ) B++;
                    (B === E || B !== q) &&
                      ((D = `\\\\${G}\\${p.slice(q, B)}`), (R = B));
                  }
                }
              } else R = 1;
            else
              m(W) &&
                p.charCodeAt(1) === N &&
                ((D = p.slice(0, 2)),
                (R = 2),
                E > 2 && S(p.charCodeAt(2)) && ((F = !0), (R = 3)));
            if (D.length > 0)
              if (a.length > 0) {
                if (D.toLowerCase() !== a.toLowerCase()) continue;
              } else a = D;
            if (c) {
              if (a.length > 0) break;
            } else if (
              ((s = `${p.slice(R)}\\${s}`), (c = F), F && a.length > 0)
            )
              break;
          }
          return (s = w(s, !c, '\\', S)), c ? `${a}\\${s}` : `${a}${s}` || '.';
        },
        normalize(r) {
          b(r, 'path');
          const a = r.length;
          if (a === 0) return '.';
          let s = 0,
            c,
            d = !1;
          const p = r.charCodeAt(0);
          if (a === 1) return _(p) ? '\\' : r;
          if (S(p))
            if (((d = !0), S(r.charCodeAt(1)))) {
              let R = 2,
                D = R;
              for (; R < a && !S(r.charCodeAt(R)); ) R++;
              if (R < a && R !== D) {
                const F = r.slice(D, R);
                for (D = R; R < a && S(r.charCodeAt(R)); ) R++;
                if (R < a && R !== D) {
                  for (D = R; R < a && !S(r.charCodeAt(R)); ) R++;
                  if (R === a) return `\\\\${F}\\${r.slice(D)}\\`;
                  R !== D && ((c = `\\\\${F}\\${r.slice(D, R)}`), (s = R));
                }
              }
            } else s = 1;
          else
            m(p) &&
              r.charCodeAt(1) === N &&
              ((c = r.slice(0, 2)),
              (s = 2),
              a > 2 && S(r.charCodeAt(2)) && ((d = !0), (s = 3)));
          let E = s < a ? w(r.slice(s), !d, '\\', S) : '';
          return (
            E.length === 0 && !d && (E = '.'),
            E.length > 0 && S(r.charCodeAt(a - 1)) && (E += '\\'),
            c === void 0 ? (d ? `\\${E}` : E) : d ? `${c}\\${E}` : `${c}${E}`
          );
        },
        isAbsolute(r) {
          b(r, 'path');
          const a = r.length;
          if (a === 0) return !1;
          const s = r.charCodeAt(0);
          return (
            S(s) ||
            (a > 2 && m(s) && r.charCodeAt(1) === N && S(r.charCodeAt(2)))
          );
        },
        join(...r) {
          if (r.length === 0) return '.';
          let a, s;
          for (let p = 0; p < r.length; ++p) {
            const E = r[p];
            b(E, 'path'),
              E.length > 0 && (a === void 0 ? (a = s = E) : (a += `\\${E}`));
          }
          if (a === void 0) return '.';
          let c = !0,
            d = 0;
          if (typeof s == 'string' && S(s.charCodeAt(0))) {
            ++d;
            const p = s.length;
            p > 1 &&
              S(s.charCodeAt(1)) &&
              (++d, p > 2 && (S(s.charCodeAt(2)) ? ++d : (c = !1)));
          }
          if (c) {
            for (; d < a.length && S(a.charCodeAt(d)); ) d++;
            d >= 2 && (a = `\\${a.slice(d)}`);
          }
          return n.win32.normalize(a);
        },
        relative(r, a) {
          if ((b(r, 'from'), b(a, 'to'), r === a)) return '';
          const s = n.win32.resolve(r),
            c = n.win32.resolve(a);
          if (
            s === c ||
            ((r = s.toLowerCase()), (a = c.toLowerCase()), r === a)
          )
            return '';
          let d = 0;
          for (; d < r.length && r.charCodeAt(d) === f; ) d++;
          let p = r.length;
          for (; p - 1 > d && r.charCodeAt(p - 1) === f; ) p--;
          const E = p - d;
          let R = 0;
          for (; R < a.length && a.charCodeAt(R) === f; ) R++;
          let D = a.length;
          for (; D - 1 > R && a.charCodeAt(D - 1) === f; ) D--;
          const F = D - R,
            W = E < F ? E : F;
          let B = -1,
            q = 0;
          for (; q < W; q++) {
            const k = r.charCodeAt(d + q);
            if (k !== a.charCodeAt(R + q)) break;
            k === f && (B = q);
          }
          if (q !== W) {
            if (B === -1) return c;
          } else {
            if (F > W) {
              if (a.charCodeAt(R + q) === f) return c.slice(R + q + 1);
              if (q === 2) return c.slice(R + q);
            }
            E > W && (r.charCodeAt(d + q) === f ? (B = q) : q === 2 && (B = 3)),
              B === -1 && (B = 0);
          }
          let G = '';
          for (q = d + B + 1; q <= p; ++q)
            (q === p || r.charCodeAt(q) === f) &&
              (G += G.length === 0 ? '..' : '\\..');
          return (
            (R += B),
            G.length > 0
              ? `${G}${c.slice(R, D)}`
              : (c.charCodeAt(R) === f && ++R, c.slice(R, D))
          );
        },
        toNamespacedPath(r) {
          if (typeof r != 'string' || r.length === 0) return r;
          const a = n.win32.resolve(r);
          if (a.length <= 2) return r;
          if (a.charCodeAt(0) === f) {
            if (a.charCodeAt(1) === f) {
              const s = a.charCodeAt(2);
              if (s !== e && s !== v) return `\\\\?\\UNC\\${a.slice(2)}`;
            }
          } else if (
            m(a.charCodeAt(0)) &&
            a.charCodeAt(1) === N &&
            a.charCodeAt(2) === f
          )
            return `\\\\?\\${a}`;
          return r;
        },
        dirname(r) {
          b(r, 'path');
          const a = r.length;
          if (a === 0) return '.';
          let s = -1,
            c = 0;
          const d = r.charCodeAt(0);
          if (a === 1) return S(d) ? r : '.';
          if (S(d)) {
            if (((s = c = 1), S(r.charCodeAt(1)))) {
              let R = 2,
                D = R;
              for (; R < a && !S(r.charCodeAt(R)); ) R++;
              if (R < a && R !== D) {
                for (D = R; R < a && S(r.charCodeAt(R)); ) R++;
                if (R < a && R !== D) {
                  for (D = R; R < a && !S(r.charCodeAt(R)); ) R++;
                  if (R === a) return r;
                  R !== D && (s = c = R + 1);
                }
              }
            }
          } else
            m(d) &&
              r.charCodeAt(1) === N &&
              ((s = a > 2 && S(r.charCodeAt(2)) ? 3 : 2), (c = s));
          let p = -1,
            E = !0;
          for (let R = a - 1; R >= c; --R)
            if (S(r.charCodeAt(R))) {
              if (!E) {
                p = R;
                break;
              }
            } else E = !1;
          if (p === -1) {
            if (s === -1) return '.';
            p = s;
          }
          return r.slice(0, p);
        },
        basename(r, a) {
          a !== void 0 && b(a, 'ext'), b(r, 'path');
          let s = 0,
            c = -1,
            d = !0,
            p;
          if (
            (r.length >= 2 &&
              m(r.charCodeAt(0)) &&
              r.charCodeAt(1) === N &&
              (s = 2),
            a !== void 0 && a.length > 0 && a.length <= r.length)
          ) {
            if (a === r) return '';
            let E = a.length - 1,
              R = -1;
            for (p = r.length - 1; p >= s; --p) {
              const D = r.charCodeAt(p);
              if (S(D)) {
                if (!d) {
                  s = p + 1;
                  break;
                }
              } else
                R === -1 && ((d = !1), (R = p + 1)),
                  E >= 0 &&
                    (D === a.charCodeAt(E)
                      ? --E === -1 && (c = p)
                      : ((E = -1), (c = R)));
            }
            return (
              s === c ? (c = R) : c === -1 && (c = r.length), r.slice(s, c)
            );
          }
          for (p = r.length - 1; p >= s; --p)
            if (S(r.charCodeAt(p))) {
              if (!d) {
                s = p + 1;
                break;
              }
            } else c === -1 && ((d = !1), (c = p + 1));
          return c === -1 ? '' : r.slice(s, c);
        },
        extname(r) {
          b(r, 'path');
          let a = 0,
            s = -1,
            c = 0,
            d = -1,
            p = !0,
            E = 0;
          r.length >= 2 &&
            r.charCodeAt(1) === N &&
            m(r.charCodeAt(0)) &&
            (a = c = 2);
          for (let R = r.length - 1; R >= a; --R) {
            const D = r.charCodeAt(R);
            if (S(D)) {
              if (!p) {
                c = R + 1;
                break;
              }
              continue;
            }
            d === -1 && ((p = !1), (d = R + 1)),
              D === v
                ? s === -1
                  ? (s = R)
                  : E !== 1 && (E = 1)
                : s !== -1 && (E = -1);
          }
          return s === -1 ||
            d === -1 ||
            E === 0 ||
            (E === 1 && s === d - 1 && s === c + 1)
            ? ''
            : r.slice(s, d);
        },
        format: l.bind(null, '\\'),
        parse(r) {
          b(r, 'path');
          const a = { root: '', dir: '', base: '', ext: '', name: '' };
          if (r.length === 0) return a;
          const s = r.length;
          let c = 0,
            d = r.charCodeAt(0);
          if (s === 1)
            return S(d)
              ? ((a.root = a.dir = r), a)
              : ((a.base = a.name = r), a);
          if (S(d)) {
            if (((c = 1), S(r.charCodeAt(1)))) {
              let B = 2,
                q = B;
              for (; B < s && !S(r.charCodeAt(B)); ) B++;
              if (B < s && B !== q) {
                for (q = B; B < s && S(r.charCodeAt(B)); ) B++;
                if (B < s && B !== q) {
                  for (q = B; B < s && !S(r.charCodeAt(B)); ) B++;
                  B === s ? (c = B) : B !== q && (c = B + 1);
                }
              }
            }
          } else if (m(d) && r.charCodeAt(1) === N) {
            if (s <= 2) return (a.root = a.dir = r), a;
            if (((c = 2), S(r.charCodeAt(2)))) {
              if (s === 3) return (a.root = a.dir = r), a;
              c = 3;
            }
          }
          c > 0 && (a.root = r.slice(0, c));
          let p = -1,
            E = c,
            R = -1,
            D = !0,
            F = r.length - 1,
            W = 0;
          for (; F >= c; --F) {
            if (((d = r.charCodeAt(F)), S(d))) {
              if (!D) {
                E = F + 1;
                break;
              }
              continue;
            }
            R === -1 && ((D = !1), (R = F + 1)),
              d === v
                ? p === -1
                  ? (p = F)
                  : W !== 1 && (W = 1)
                : p !== -1 && (W = -1);
          }
          return (
            R !== -1 &&
              (p === -1 || W === 0 || (W === 1 && p === R - 1 && p === E + 1)
                ? (a.base = a.name = r.slice(E, R))
                : ((a.name = r.slice(E, p)),
                  (a.base = r.slice(E, R)),
                  (a.ext = r.slice(p, R)))),
            E > 0 && E !== c ? (a.dir = r.slice(0, E - 1)) : (a.dir = a.root),
            a
          );
        },
        sep: '\\',
        delimiter: ';',
        win32: null,
        posix: null,
      };
      const g = (() => {
        if (L) {
          const r = /\\/g;
          return () => {
            const a = A.cwd().replace(r, '/');
            return a.slice(a.indexOf('/'));
          };
        }
        return () => A.cwd();
      })();
      (n.posix = {
        resolve(...r) {
          let a = '',
            s = !1;
          for (let c = r.length - 1; c >= -1 && !s; c--) {
            const d = c >= 0 ? r[c] : g();
            b(d, 'path'),
              d.length !== 0 &&
                ((a = `${d}/${a}`), (s = d.charCodeAt(0) === o));
          }
          return (a = w(a, !s, '/', _)), s ? `/${a}` : a.length > 0 ? a : '.';
        },
        normalize(r) {
          if ((b(r, 'path'), r.length === 0)) return '.';
          const a = r.charCodeAt(0) === o,
            s = r.charCodeAt(r.length - 1) === o;
          return (
            (r = w(r, !a, '/', _)),
            r.length === 0
              ? a
                ? '/'
                : s
                ? './'
                : '.'
              : (s && (r += '/'), a ? `/${r}` : r)
          );
        },
        isAbsolute(r) {
          return b(r, 'path'), r.length > 0 && r.charCodeAt(0) === o;
        },
        join(...r) {
          if (r.length === 0) return '.';
          let a;
          for (let s = 0; s < r.length; ++s) {
            const c = r[s];
            b(c, 'path'),
              c.length > 0 && (a === void 0 ? (a = c) : (a += `/${c}`));
          }
          return a === void 0 ? '.' : n.posix.normalize(a);
        },
        relative(r, a) {
          if (
            (b(r, 'from'),
            b(a, 'to'),
            r === a ||
              ((r = n.posix.resolve(r)), (a = n.posix.resolve(a)), r === a))
          )
            return '';
          const s = 1,
            c = r.length,
            d = c - s,
            p = 1,
            E = a.length - p,
            R = d < E ? d : E;
          let D = -1,
            F = 0;
          for (; F < R; F++) {
            const B = r.charCodeAt(s + F);
            if (B !== a.charCodeAt(p + F)) break;
            B === o && (D = F);
          }
          if (F === R)
            if (E > R) {
              if (a.charCodeAt(p + F) === o) return a.slice(p + F + 1);
              if (F === 0) return a.slice(p + F);
            } else
              d > R &&
                (r.charCodeAt(s + F) === o ? (D = F) : F === 0 && (D = 0));
          let W = '';
          for (F = s + D + 1; F <= c; ++F)
            (F === c || r.charCodeAt(F) === o) &&
              (W += W.length === 0 ? '..' : '/..');
          return `${W}${a.slice(p + D)}`;
        },
        toNamespacedPath(r) {
          return r;
        },
        dirname(r) {
          if ((b(r, 'path'), r.length === 0)) return '.';
          const a = r.charCodeAt(0) === o;
          let s = -1,
            c = !0;
          for (let d = r.length - 1; d >= 1; --d)
            if (r.charCodeAt(d) === o) {
              if (!c) {
                s = d;
                break;
              }
            } else c = !1;
          return s === -1
            ? a
              ? '/'
              : '.'
            : a && s === 1
            ? '//'
            : r.slice(0, s);
        },
        basename(r, a) {
          a !== void 0 && b(a, 'ext'), b(r, 'path');
          let s = 0,
            c = -1,
            d = !0,
            p;
          if (a !== void 0 && a.length > 0 && a.length <= r.length) {
            if (a === r) return '';
            let E = a.length - 1,
              R = -1;
            for (p = r.length - 1; p >= 0; --p) {
              const D = r.charCodeAt(p);
              if (D === o) {
                if (!d) {
                  s = p + 1;
                  break;
                }
              } else
                R === -1 && ((d = !1), (R = p + 1)),
                  E >= 0 &&
                    (D === a.charCodeAt(E)
                      ? --E === -1 && (c = p)
                      : ((E = -1), (c = R)));
            }
            return (
              s === c ? (c = R) : c === -1 && (c = r.length), r.slice(s, c)
            );
          }
          for (p = r.length - 1; p >= 0; --p)
            if (r.charCodeAt(p) === o) {
              if (!d) {
                s = p + 1;
                break;
              }
            } else c === -1 && ((d = !1), (c = p + 1));
          return c === -1 ? '' : r.slice(s, c);
        },
        extname(r) {
          b(r, 'path');
          let a = -1,
            s = 0,
            c = -1,
            d = !0,
            p = 0;
          for (let E = r.length - 1; E >= 0; --E) {
            const R = r.charCodeAt(E);
            if (R === o) {
              if (!d) {
                s = E + 1;
                break;
              }
              continue;
            }
            c === -1 && ((d = !1), (c = E + 1)),
              R === v
                ? a === -1
                  ? (a = E)
                  : p !== 1 && (p = 1)
                : a !== -1 && (p = -1);
          }
          return a === -1 ||
            c === -1 ||
            p === 0 ||
            (p === 1 && a === c - 1 && a === s + 1)
            ? ''
            : r.slice(a, c);
        },
        format: l.bind(null, '/'),
        parse(r) {
          b(r, 'path');
          const a = { root: '', dir: '', base: '', ext: '', name: '' };
          if (r.length === 0) return a;
          const s = r.charCodeAt(0) === o;
          let c;
          s ? ((a.root = '/'), (c = 1)) : (c = 0);
          let d = -1,
            p = 0,
            E = -1,
            R = !0,
            D = r.length - 1,
            F = 0;
          for (; D >= c; --D) {
            const W = r.charCodeAt(D);
            if (W === o) {
              if (!R) {
                p = D + 1;
                break;
              }
              continue;
            }
            E === -1 && ((R = !1), (E = D + 1)),
              W === v
                ? d === -1
                  ? (d = D)
                  : F !== 1 && (F = 1)
                : d !== -1 && (F = -1);
          }
          if (E !== -1) {
            const W = p === 0 && s ? 1 : p;
            d === -1 || F === 0 || (F === 1 && d === E - 1 && d === p + 1)
              ? (a.base = a.name = r.slice(W, E))
              : ((a.name = r.slice(W, d)),
                (a.base = r.slice(W, E)),
                (a.ext = r.slice(d, E)));
          }
          return p > 0 ? (a.dir = r.slice(0, p - 1)) : s && (a.dir = '/'), a;
        },
        sep: '/',
        delimiter: ':',
        win32: null,
        posix: null,
      }),
        (n.posix.win32 = n.win32.win32 = n.win32),
        (n.posix.posix = n.win32.posix = n.posix),
        (n.normalize = L ? n.win32.normalize : n.posix.normalize),
        (n.resolve = L ? n.win32.resolve : n.posix.resolve),
        (n.relative = L ? n.win32.relative : n.posix.relative),
        (n.dirname = L ? n.win32.dirname : n.posix.dirname),
        (n.basename = L ? n.win32.basename : n.posix.basename),
        (n.extname = L ? n.win32.extname : n.posix.extname),
        (n.sep = L ? n.win32.sep : n.posix.sep);
    }),
    Y(X[22], Q([0, 1, 5]), function (U, n, A) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.StopWatch = void 0);
      const M =
        A.globals.performance && typeof A.globals.performance.now == 'function';
      class i {
        static create(y = !0) {
          return new i(y);
        }
        constructor(y) {
          (this.a = M && y), (this.b = this.d()), (this.c = -1);
        }
        stop() {
          this.c = this.d();
        }
        elapsed() {
          return this.c !== -1 ? this.c - this.b : this.d() - this.b;
        }
        d() {
          return this.a ? A.globals.performance.now() : Date.now();
        }
      }
      n.StopWatch = i;
    }),
    Y(X[7], Q([0, 1, 8, 13, 10, 15, 22]), function (U, n, A, M, i, u, y) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.Relay =
          n.EventBufferer =
          n.EventMultiplexer =
          n.MicrotaskEmitter =
          n.DebounceEmitter =
          n.PauseableEmitter =
          n.EventDeliveryQueue =
          n.Emitter =
          n.EventProfiling =
          n.Event =
            void 0);
      const v = !1,
        o = !1;
      var f;
      (function (c) {
        c.None = () => i.Disposable.None;
        function d(J) {
          if (o) {
            const { onDidAddListener: H } = J,
              $ = h.create();
            let j = 0;
            J.onDidAddListener = () => {
              ++j === 2 &&
                (console.warn(
                  'snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here',
                ),
                $.print()),
                H?.();
            };
          }
        }
        function p(J, H) {
          return k(J, () => {}, 0, void 0, !0, void 0, H);
        }
        c.defer = p;
        function E(J) {
          return (H, $ = null, j) => {
            let K = !1,
              ee;
            return (
              (ee = J(
                (te) => {
                  if (!K) return ee ? ee.dispose() : (K = !0), H.call($, te);
                },
                null,
                j,
              )),
              K && ee.dispose(),
              ee
            );
          };
        }
        c.once = E;
        function R(J, H, $) {
          return G(
            (j, K = null, ee) => J((te) => j.call(K, H(te)), null, ee),
            $,
          );
        }
        c.map = R;
        function D(J, H, $) {
          return G(
            (j, K = null, ee) =>
              J(
                (te) => {
                  H(te), j.call(K, te);
                },
                null,
                ee,
              ),
            $,
          );
        }
        c.forEach = D;
        function F(J, H, $) {
          return G(
            (j, K = null, ee) => J((te) => H(te) && j.call(K, te), null, ee),
            $,
          );
        }
        c.filter = F;
        function W(J) {
          return J;
        }
        c.signal = W;
        function B(...J) {
          return (H, $ = null, j) =>
            (0, i.combinedDisposable)(
              ...J.map((K) => K((ee) => H.call($, ee), null, j)),
            );
        }
        c.any = B;
        function q(J, H, $, j) {
          let K = $;
          return R(J, (ee) => ((K = H(K, ee)), K), j);
        }
        c.reduce = q;
        function G(J, H) {
          let $;
          const j = {
            onWillAddFirstListener() {
              $ = J(K.fire, K);
            },
            onDidRemoveLastListener() {
              $?.dispose();
            },
          };
          H || d(j);
          const K = new L(j);
          return H?.add(K), K.event;
        }
        function k(J, H, $ = 100, j = !1, K = !1, ee, te) {
          let ae,
            be,
            ve,
            le = 0,
            ce;
          const P = {
            leakWarningThreshold: ee,
            onWillAddFirstListener() {
              ae = J((x) => {
                le++,
                  (be = H(be, x)),
                  j && !ve && (O.fire(be), (be = void 0)),
                  (ce = () => {
                    const z = be;
                    (be = void 0),
                      (ve = void 0),
                      (!j || le > 1) && O.fire(z),
                      (le = 0);
                  }),
                  typeof $ == 'number'
                    ? (clearTimeout(ve), (ve = setTimeout(ce, $)))
                    : ve === void 0 && ((ve = 0), queueMicrotask(ce));
              });
            },
            onWillRemoveListener() {
              K && le > 0 && ce?.();
            },
            onDidRemoveLastListener() {
              (ce = void 0), ae.dispose();
            },
          };
          te || d(P);
          const O = new L(P);
          return te?.add(O), O.event;
        }
        c.debounce = k;
        function T(J, H = 0, $) {
          return c.debounce(
            J,
            (j, K) => (j ? (j.push(K), j) : [K]),
            H,
            void 0,
            !0,
            void 0,
            $,
          );
        }
        c.accumulate = T;
        function I(J, H = (j, K) => j === K, $) {
          let j = !0,
            K;
          return F(
            J,
            (ee) => {
              const te = j || !H(ee, K);
              return (j = !1), (K = ee), te;
            },
            $,
          );
        }
        c.latch = I;
        function V(J, H, $) {
          return [c.filter(J, H, $), c.filter(J, (j) => !H(j), $)];
        }
        c.split = V;
        function t(J, H = !1, $ = []) {
          let j = $.slice(),
            K = J((ae) => {
              j ? j.push(ae) : te.fire(ae);
            });
          const ee = () => {
              j?.forEach((ae) => te.fire(ae)), (j = null);
            },
            te = new L({
              onWillAddFirstListener() {
                K || (K = J((ae) => te.fire(ae)));
              },
              onDidAddFirstListener() {
                j && (H ? setTimeout(ee) : ee());
              },
              onDidRemoveLastListener() {
                K && K.dispose(), (K = null);
              },
            });
          return te.event;
        }
        c.buffer = t;
        class ne {
          constructor(H) {
            (this.event = H), (this.c = new i.DisposableStore());
          }
          map(H) {
            return new ne(R(this.event, H, this.c));
          }
          forEach(H) {
            return new ne(D(this.event, H, this.c));
          }
          filter(H) {
            return new ne(F(this.event, H, this.c));
          }
          reduce(H, $) {
            return new ne(q(this.event, H, $, this.c));
          }
          latch() {
            return new ne(I(this.event, void 0, this.c));
          }
          debounce(H, $ = 100, j = !1, K = !1, ee) {
            return new ne(k(this.event, H, $, j, K, ee, this.c));
          }
          on(H, $, j) {
            return this.event(H, $, j);
          }
          once(H, $, j) {
            return E(this.event)(H, $, j);
          }
          dispose() {
            this.c.dispose();
          }
        }
        function oe(J) {
          return new ne(J);
        }
        c.chain = oe;
        function de(J, H, $ = (j) => j) {
          const j = (...ae) => te.fire($(...ae)),
            K = () => J.on(H, j),
            ee = () => J.removeListener(H, j),
            te = new L({
              onWillAddFirstListener: K,
              onDidRemoveLastListener: ee,
            });
          return te.event;
        }
        c.fromNodeEventEmitter = de;
        function Le(J, H, $ = (j) => j) {
          const j = (...ae) => te.fire($(...ae)),
            K = () => J.addEventListener(H, j),
            ee = () => J.removeEventListener(H, j),
            te = new L({
              onWillAddFirstListener: K,
              onDidRemoveLastListener: ee,
            });
          return te.event;
        }
        c.fromDOMEventEmitter = Le;
        function pe(J) {
          return new Promise((H) => E(J)(H));
        }
        c.toPromise = pe;
        function ye(J, H) {
          return H(void 0), J(($) => H($));
        }
        c.runAndSubscribe = ye;
        function Se(J, H) {
          let $ = null;
          function j(ee) {
            $?.dispose(), ($ = new i.DisposableStore()), H(ee, $);
          }
          j(void 0);
          const K = J((ee) => j(ee));
          return (0, i.toDisposable)(() => {
            K.dispose(), $?.dispose();
          });
        }
        c.runAndSubscribeWithStore = Se;
        class Ne {
          constructor(H, $) {
            (this.obs = H), (this.c = 0), (this.d = !1);
            const j = {
              onWillAddFirstListener: () => {
                H.addObserver(this);
              },
              onDidRemoveLastListener: () => {
                H.removeObserver(this);
              },
            };
            $ || d(j), (this.emitter = new L(j)), $ && $.add(this.emitter);
          }
          beginUpdate(H) {
            this.c++;
          }
          handleChange(H, $) {
            this.d = !0;
          }
          endUpdate(H) {
            --this.c === 0 &&
              this.d &&
              ((this.d = !1), this.emitter.fire(this.obs.get()));
          }
        }
        function _e(J, H) {
          return new Ne(J, H).emitter.event;
        }
        c.fromObservable = _e;
      })((f = n.Event || (n.Event = {})));
      class N {
        constructor(d) {
          (this.listenerCount = 0),
            (this.invocationCount = 0),
            (this.elapsedOverall = 0),
            (this.durations = []),
            (this.name = `${d}_${N.c++}`),
            N.all.add(this);
        }
        start(d) {
          (this.d = new y.StopWatch(!0)), (this.listenerCount = d);
        }
        stop() {
          if (this.d) {
            const d = this.d.elapsed();
            this.durations.push(d),
              (this.elapsedOverall += d),
              (this.invocationCount += 1),
              (this.d = void 0);
          }
        }
      }
      (N.all = new Set()), (N.c = 0), (n.EventProfiling = N);
      let e = -1;
      class C {
        constructor(d, p = Math.random().toString(18).slice(2, 5)) {
          (this.threshold = d), (this.name = p), (this.d = 0);
        }
        dispose() {
          var d;
          (d = this.c) === null || d === void 0 || d.clear();
        }
        check(d, p) {
          const E = this.threshold;
          if (E <= 0 || p < E) return;
          this.c || (this.c = new Map());
          const R = this.c.get(d.value) || 0;
          if ((this.c.set(d.value, R + 1), (this.d -= 1), this.d <= 0)) {
            this.d = E * 0.5;
            let D,
              F = 0;
            for (const [W, B] of this.c) (!D || F < B) && ((D = W), (F = B));
            console.warn(
              `[${this.name}] potential listener LEAK detected, having ${p} listeners already. MOST frequent listener (${F}):`,
            ),
              console.warn(D);
          }
          return () => {
            const D = this.c.get(d.value) || 0;
            this.c.set(d.value, D - 1);
          };
        }
      }
      class h {
        static create() {
          var d;
          return new h(
            (d = new Error().stack) !== null && d !== void 0 ? d : '',
          );
        }
        constructor(d) {
          this.value = d;
        }
        print() {
          console.warn(
            this.value
              .split(
                `
`,
              )
              .slice(2).join(`
`),
          );
        }
      }
      class b {
        constructor(d, p, E) {
          (this.callback = d),
            (this.callbackThis = p),
            (this.stack = E),
            (this.subscription = new i.SafeDisposable());
        }
        invoke(d) {
          this.callback.call(this.callbackThis, d);
        }
      }
      class L {
        constructor(d) {
          var p, E, R, D, F;
          (this.j = !1),
            (this.d = d),
            (this.f =
              e > 0 ||
              ((p = this.d) === null || p === void 0
                ? void 0
                : p.leakWarningThreshold)
                ? new C(
                    (R =
                      (E = this.d) === null || E === void 0
                        ? void 0
                        : E.leakWarningThreshold) !== null && R !== void 0
                      ? R
                      : e,
                  )
                : void 0),
            (this.g =
              !((D = this.d) === null || D === void 0) && D._profName
                ? new N(this.d._profName)
                : void 0),
            (this.m =
              (F = this.d) === null || F === void 0 ? void 0 : F.deliveryQueue);
        }
        dispose() {
          var d, p, E, R;
          if (!this.j) {
            if (((this.j = !0), this.n)) {
              if (v) {
                const D = Array.from(this.n);
                queueMicrotask(() => {
                  var F;
                  for (const W of D)
                    W.subscription.isset() &&
                      (W.subscription.unset(),
                      (F = W.stack) === null || F === void 0 || F.print());
                });
              }
              this.n.clear();
            }
            (d = this.m) === null || d === void 0 || d.clear(this),
              (E =
                (p = this.d) === null || p === void 0
                  ? void 0
                  : p.onDidRemoveLastListener) === null ||
                E === void 0 ||
                E.call(p),
              (R = this.f) === null || R === void 0 || R.dispose();
          }
        }
        get event() {
          return (
            this.l ||
              (this.l = (d, p, E) => {
                var R, D, F;
                if (
                  (this.n || (this.n = new u.LinkedList()),
                  this.f && this.n.size > this.f.threshold * 3)
                )
                  return (
                    console.warn(
                      `[${this.f.name}] REFUSES to accept new listeners because it exceeded its threshold by far`,
                    ),
                    i.Disposable.None
                  );
                const W = this.n.isEmpty();
                W &&
                  ((R = this.d) === null || R === void 0
                    ? void 0
                    : R.onWillAddFirstListener) &&
                  this.d.onWillAddFirstListener(this);
                let B, q;
                this.f &&
                  this.n.size >= Math.ceil(this.f.threshold * 0.2) &&
                  ((q = h.create()), (B = this.f.check(q, this.n.size + 1))),
                  v && (q = q ?? h.create());
                const G = new b(d, p, q),
                  k = this.n.push(G);
                W &&
                  ((D = this.d) === null || D === void 0
                    ? void 0
                    : D.onDidAddFirstListener) &&
                  this.d.onDidAddFirstListener(this),
                  !((F = this.d) === null || F === void 0) &&
                    F.onDidAddListener &&
                    this.d.onDidAddListener(this, d, p);
                const T = G.subscription.set(() => {
                  var I, V;
                  B?.(),
                    this.j ||
                      ((V =
                        (I = this.d) === null || I === void 0
                          ? void 0
                          : I.onWillRemoveListener) === null ||
                        V === void 0 ||
                        V.call(I, this),
                      k(),
                      this.d &&
                        this.d.onDidRemoveLastListener &&
                        ((this.n && !this.n.isEmpty()) ||
                          this.d.onDidRemoveLastListener(this)));
                });
                return (
                  E instanceof i.DisposableStore
                    ? E.add(T)
                    : Array.isArray(E) && E.push(T),
                  T
                );
              }),
            this.l
          );
        }
        fire(d) {
          var p, E;
          if (this.n) {
            this.m || (this.m = new _());
            for (const R of this.n) this.m.push(this, R, d);
            (p = this.g) === null || p === void 0 || p.start(this.m.size),
              this.m.deliver(),
              (E = this.g) === null || E === void 0 || E.stop();
          }
        }
        hasListeners() {
          return this.n ? !this.n.isEmpty() : !1;
        }
      }
      n.Emitter = L;
      class S {
        constructor() {
          this.c = new u.LinkedList();
        }
        get size() {
          return this.c.size;
        }
        push(d, p, E) {
          this.c.push(new m(d, p, E));
        }
        clear(d) {
          const p = new u.LinkedList();
          for (const E of this.c) E.emitter !== d && p.push(E);
          this.c = p;
        }
        deliver() {
          for (; this.c.size > 0; ) {
            const d = this.c.shift();
            try {
              d.listener.invoke(d.event);
            } catch (p) {
              (0, A.onUnexpectedError)(p);
            }
          }
        }
      }
      n.EventDeliveryQueue = S;
      class _ extends S {
        clear(d) {
          this.c.clear();
        }
      }
      class m {
        constructor(d, p, E) {
          (this.emitter = d), (this.listener = p), (this.event = E);
        }
      }
      class w extends L {
        constructor(d) {
          super(d),
            (this.c = 0),
            (this.h = new u.LinkedList()),
            (this.k = d?.merge);
        }
        pause() {
          this.c++;
        }
        resume() {
          if (this.c !== 0 && --this.c === 0)
            if (this.k) {
              if (this.h.size > 0) {
                const d = Array.from(this.h);
                this.h.clear(), super.fire(this.k(d));
              }
            } else
              for (; !this.c && this.h.size !== 0; ) super.fire(this.h.shift());
        }
        fire(d) {
          this.n && (this.c !== 0 ? this.h.push(d) : super.fire(d));
        }
      }
      n.PauseableEmitter = w;
      class l extends w {
        constructor(d) {
          var p;
          super(d), (this.o = (p = d.delay) !== null && p !== void 0 ? p : 100);
        }
        fire(d) {
          this.p ||
            (this.pause(),
            (this.p = setTimeout(() => {
              (this.p = void 0), this.resume();
            }, this.o))),
            super.fire(d);
        }
      }
      n.DebounceEmitter = l;
      class g extends L {
        constructor(d) {
          super(d), (this.c = []), (this.h = d?.merge);
        }
        fire(d) {
          !this.hasListeners() ||
            (this.c.push(d),
            this.c.length === 1 &&
              queueMicrotask(() => {
                this.h
                  ? super.fire(this.h(this.c))
                  : this.c.forEach((p) => super.fire(p)),
                  (this.c = []);
              }));
        }
      }
      n.MicrotaskEmitter = g;
      class r {
        constructor() {
          (this.d = !1),
            (this.f = []),
            (this.c = new L({
              onWillAddFirstListener: () => this.g(),
              onDidRemoveLastListener: () => this.h(),
            }));
        }
        get event() {
          return this.c.event;
        }
        add(d) {
          const p = { event: d, listener: null };
          this.f.push(p), this.d && this.j(p);
          const E = () => {
            this.d && this.k(p);
            const R = this.f.indexOf(p);
            this.f.splice(R, 1);
          };
          return (0, i.toDisposable)((0, M.once)(E));
        }
        g() {
          (this.d = !0), this.f.forEach((d) => this.j(d));
        }
        h() {
          (this.d = !1), this.f.forEach((d) => this.k(d));
        }
        j(d) {
          d.listener = d.event((p) => this.c.fire(p));
        }
        k(d) {
          d.listener && d.listener.dispose(), (d.listener = null);
        }
        dispose() {
          this.c.dispose();
        }
      }
      n.EventMultiplexer = r;
      class a {
        constructor() {
          this.c = [];
        }
        wrapEvent(d) {
          return (p, E, R) =>
            d(
              (D) => {
                const F = this.c[this.c.length - 1];
                F ? F.push(() => p.call(E, D)) : p.call(E, D);
              },
              void 0,
              R,
            );
        }
        bufferEvents(d) {
          const p = [];
          this.c.push(p);
          const E = d();
          return this.c.pop(), p.forEach((R) => R()), E;
        }
      }
      n.EventBufferer = a;
      class s {
        constructor() {
          (this.c = !1),
            (this.d = f.None),
            (this.f = i.Disposable.None),
            (this.g = new L({
              onDidAddFirstListener: () => {
                (this.c = !0), (this.f = this.d(this.g.fire, this.g));
              },
              onDidRemoveLastListener: () => {
                (this.c = !1), this.f.dispose();
              },
            })),
            (this.event = this.g.event);
        }
        set input(d) {
          (this.d = d),
            this.c && (this.f.dispose(), (this.f = d(this.g.fire, this.g)));
        }
        dispose() {
          this.f.dispose(), this.g.dispose();
        }
      }
      n.Relay = s;
    }),
    Y(X[51], Q([0, 1, 7]), function (U, n, A) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.CancellationTokenSource = n.CancellationToken = void 0);
      const M = Object.freeze(function (v, o) {
        const f = setTimeout(v.bind(o), 0);
        return {
          dispose() {
            clearTimeout(f);
          },
        };
      });
      var i;
      (function (v) {
        function o(f) {
          return f === v.None || f === v.Cancelled || f instanceof u
            ? !0
            : !f || typeof f != 'object'
            ? !1
            : typeof f.isCancellationRequested == 'boolean' &&
              typeof f.onCancellationRequested == 'function';
        }
        (v.isCancellationToken = o),
          (v.None = Object.freeze({
            isCancellationRequested: !1,
            onCancellationRequested: A.Event.None,
          })),
          (v.Cancelled = Object.freeze({
            isCancellationRequested: !0,
            onCancellationRequested: M,
          }));
      })((i = n.CancellationToken || (n.CancellationToken = {})));
      class u {
        constructor() {
          (this.a = !1), (this.b = null);
        }
        cancel() {
          this.a ||
            ((this.a = !0), this.b && (this.b.fire(void 0), this.dispose()));
        }
        get isCancellationRequested() {
          return this.a;
        }
        get onCancellationRequested() {
          return this.a
            ? M
            : (this.b || (this.b = new A.Emitter()), this.b.event);
        }
        dispose() {
          this.b && (this.b.dispose(), (this.b = null));
        }
      }
      class y {
        constructor(o) {
          (this.a = void 0),
            (this.b = void 0),
            (this.b = o && o.onCancellationRequested(this.cancel, this));
        }
        get token() {
          return this.a || (this.a = new u()), this.a;
        }
        cancel() {
          this.a
            ? this.a instanceof u && this.a.cancel()
            : (this.a = i.Cancelled);
        }
        dispose(o = !1) {
          var f;
          o && this.cancel(),
            (f = this.b) === null || f === void 0 || f.dispose(),
            this.a
              ? this.a instanceof u && this.a.dispose()
              : (this.a = i.None);
        }
      }
      n.CancellationTokenSource = y;
    }),
    Y(X[12], Q([0, 1, 50, 5]), function (U, n, A, M) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.uriToFsPath = n.URI = void 0);
      const i = /^\w[\w\d+.-]*$/,
        u = /^\//,
        y = /^\/\//;
      function v(s, c) {
        if (!s.scheme && c)
          throw new Error(
            `[UriError]: Scheme is missing: {scheme: "", authority: "${s.authority}", path: "${s.path}", query: "${s.query}", fragment: "${s.fragment}"}`,
          );
        if (s.scheme && !i.test(s.scheme))
          throw new Error('[UriError]: Scheme contains illegal characters.');
        if (s.path) {
          if (s.authority) {
            if (!u.test(s.path))
              throw new Error(
                '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character',
              );
          } else if (y.test(s.path))
            throw new Error(
              '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")',
            );
        }
      }
      function o(s, c) {
        return !s && !c ? 'file' : s;
      }
      function f(s, c) {
        switch (s) {
          case 'https':
          case 'http':
          case 'file':
            c ? c[0] !== e && (c = e + c) : (c = e);
            break;
        }
        return c;
      }
      const N = '',
        e = '/',
        C = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
      class h {
        static isUri(c) {
          return c instanceof h
            ? !0
            : c
            ? typeof c.authority == 'string' &&
              typeof c.fragment == 'string' &&
              typeof c.path == 'string' &&
              typeof c.query == 'string' &&
              typeof c.scheme == 'string' &&
              typeof c.fsPath == 'string' &&
              typeof c.with == 'function' &&
              typeof c.toString == 'function'
            : !1;
        }
        constructor(c, d, p, E, R, D = !1) {
          typeof c == 'object'
            ? ((this.scheme = c.scheme || N),
              (this.authority = c.authority || N),
              (this.path = c.path || N),
              (this.query = c.query || N),
              (this.fragment = c.fragment || N))
            : ((this.scheme = o(c, D)),
              (this.authority = d || N),
              (this.path = f(this.scheme, p || N)),
              (this.query = E || N),
              (this.fragment = R || N),
              v(this, D));
        }
        get fsPath() {
          return w(this, !1);
        }
        with(c) {
          if (!c) return this;
          let { scheme: d, authority: p, path: E, query: R, fragment: D } = c;
          return (
            d === void 0 ? (d = this.scheme) : d === null && (d = N),
            p === void 0 ? (p = this.authority) : p === null && (p = N),
            E === void 0 ? (E = this.path) : E === null && (E = N),
            R === void 0 ? (R = this.query) : R === null && (R = N),
            D === void 0 ? (D = this.fragment) : D === null && (D = N),
            d === this.scheme &&
            p === this.authority &&
            E === this.path &&
            R === this.query &&
            D === this.fragment
              ? this
              : new L(d, p, E, R, D)
          );
        }
        static parse(c, d = !1) {
          const p = C.exec(c);
          return p
            ? new L(
                p[2] || N,
                a(p[4] || N),
                a(p[5] || N),
                a(p[7] || N),
                a(p[9] || N),
                d,
              )
            : new L(N, N, N, N, N);
        }
        static file(c) {
          let d = N;
          if (
            (M.isWindows && (c = c.replace(/\\/g, e)), c[0] === e && c[1] === e)
          ) {
            const p = c.indexOf(e, 2);
            p === -1
              ? ((d = c.substring(2)), (c = e))
              : ((d = c.substring(2, p)), (c = c.substring(p) || e));
          }
          return new L('file', d, c, N, N);
        }
        static from(c) {
          const d = new L(c.scheme, c.authority, c.path, c.query, c.fragment);
          return v(d, !0), d;
        }
        static joinPath(c, ...d) {
          if (!c.path)
            throw new Error(
              '[UriError]: cannot call joinPath on URI without path',
            );
          let p;
          return (
            M.isWindows && c.scheme === 'file'
              ? (p = h.file(A.win32.join(w(c, !0), ...d)).path)
              : (p = A.posix.join(c.path, ...d)),
            c.with({ path: p })
          );
        }
        toString(c = !1) {
          return l(this, c);
        }
        toJSON() {
          return this;
        }
        static revive(c) {
          if (c) {
            if (c instanceof h) return c;
            {
              const d = new L(c);
              return (
                (d._formatted = c.external),
                (d._fsPath = c._sep === b ? c.fsPath : null),
                d
              );
            }
          } else return c;
        }
      }
      n.URI = h;
      const b = M.isWindows ? 1 : void 0;
      class L extends h {
        constructor() {
          super(...arguments), (this._formatted = null), (this._fsPath = null);
        }
        get fsPath() {
          return this._fsPath || (this._fsPath = w(this, !1)), this._fsPath;
        }
        toString(c = !1) {
          return c
            ? l(this, !0)
            : (this._formatted || (this._formatted = l(this, !1)),
              this._formatted);
        }
        toJSON() {
          const c = { $mid: 1 };
          return (
            this._fsPath && ((c.fsPath = this._fsPath), (c._sep = b)),
            this._formatted && (c.external = this._formatted),
            this.path && (c.path = this.path),
            this.scheme && (c.scheme = this.scheme),
            this.authority && (c.authority = this.authority),
            this.query && (c.query = this.query),
            this.fragment && (c.fragment = this.fragment),
            c
          );
        }
      }
      const S = {
        [58]: '%3A',
        [47]: '%2F',
        [63]: '%3F',
        [35]: '%23',
        [91]: '%5B',
        [93]: '%5D',
        [64]: '%40',
        [33]: '%21',
        [36]: '%24',
        [38]: '%26',
        [39]: '%27',
        [40]: '%28',
        [41]: '%29',
        [42]: '%2A',
        [43]: '%2B',
        [44]: '%2C',
        [59]: '%3B',
        [61]: '%3D',
        [32]: '%20',
      };
      function _(s, c, d) {
        let p,
          E = -1;
        for (let R = 0; R < s.length; R++) {
          const D = s.charCodeAt(R);
          if (
            (D >= 97 && D <= 122) ||
            (D >= 65 && D <= 90) ||
            (D >= 48 && D <= 57) ||
            D === 45 ||
            D === 46 ||
            D === 95 ||
            D === 126 ||
            (c && D === 47) ||
            (d && D === 91) ||
            (d && D === 93) ||
            (d && D === 58)
          )
            E !== -1 &&
              ((p += encodeURIComponent(s.substring(E, R))), (E = -1)),
              p !== void 0 && (p += s.charAt(R));
          else {
            p === void 0 && (p = s.substr(0, R));
            const F = S[D];
            F !== void 0
              ? (E !== -1 &&
                  ((p += encodeURIComponent(s.substring(E, R))), (E = -1)),
                (p += F))
              : E === -1 && (E = R);
          }
        }
        return (
          E !== -1 && (p += encodeURIComponent(s.substring(E))),
          p !== void 0 ? p : s
        );
      }
      function m(s) {
        let c;
        for (let d = 0; d < s.length; d++) {
          const p = s.charCodeAt(d);
          p === 35 || p === 63
            ? (c === void 0 && (c = s.substr(0, d)), (c += S[p]))
            : c !== void 0 && (c += s[d]);
        }
        return c !== void 0 ? c : s;
      }
      function w(s, c) {
        let d;
        return (
          s.authority && s.path.length > 1 && s.scheme === 'file'
            ? (d = `//${s.authority}${s.path}`)
            : s.path.charCodeAt(0) === 47 &&
              ((s.path.charCodeAt(1) >= 65 && s.path.charCodeAt(1) <= 90) ||
                (s.path.charCodeAt(1) >= 97 && s.path.charCodeAt(1) <= 122)) &&
              s.path.charCodeAt(2) === 58
            ? c
              ? (d = s.path.substr(1))
              : (d = s.path[1].toLowerCase() + s.path.substr(2))
            : (d = s.path),
          M.isWindows && (d = d.replace(/\//g, '\\')),
          d
        );
      }
      n.uriToFsPath = w;
      function l(s, c) {
        const d = c ? m : _;
        let p = '',
          { scheme: E, authority: R, path: D, query: F, fragment: W } = s;
        if (
          (E && ((p += E), (p += ':')),
          (R || E === 'file') && ((p += e), (p += e)),
          R)
        ) {
          let B = R.indexOf('@');
          if (B !== -1) {
            const q = R.substr(0, B);
            (R = R.substr(B + 1)),
              (B = q.lastIndexOf(':')),
              B === -1
                ? (p += d(q, !1, !1))
                : ((p += d(q.substr(0, B), !1, !1)),
                  (p += ':'),
                  (p += d(q.substr(B + 1), !1, !0))),
              (p += '@');
          }
          (R = R.toLowerCase()),
            (B = R.lastIndexOf(':')),
            B === -1
              ? (p += d(R, !1, !0))
              : ((p += d(R.substr(0, B), !1, !0)), (p += R.substr(B)));
        }
        if (D) {
          if (
            D.length >= 3 &&
            D.charCodeAt(0) === 47 &&
            D.charCodeAt(2) === 58
          ) {
            const B = D.charCodeAt(1);
            B >= 65 &&
              B <= 90 &&
              (D = `/${String.fromCharCode(B + 32)}:${D.substr(3)}`);
          } else if (D.length >= 2 && D.charCodeAt(1) === 58) {
            const B = D.charCodeAt(0);
            B >= 65 &&
              B <= 90 &&
              (D = `${String.fromCharCode(B + 32)}:${D.substr(2)}`);
          }
          p += d(D, !0, !1);
        }
        return (
          F && ((p += '?'), (p += d(F, !1, !1))),
          W && ((p += '#'), (p += c ? W : _(W, !1, !1))),
          p
        );
      }
      function g(s) {
        try {
          return decodeURIComponent(s);
        } catch {
          return s.length > 3 ? s.substr(0, 3) + g(s.substr(3)) : s;
        }
      }
      const r = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
      function a(s) {
        return s.match(r) ? s.replace(r, (c) => g(c)) : s;
      }
    }),
    Y(X[56], Q([0, 1, 8, 7, 10, 11, 5, 4]), function (U, n, A, M, i, u, y, v) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.create =
          n.SimpleWorkerServer =
          n.SimpleWorkerClient =
          n.logOnceWebWorkerWarning =
            void 0);
      const o = '$initialize';
      let f = !1;
      function N(a) {
        !y.isWeb ||
          (f ||
            ((f = !0),
            console.warn(
              'Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes. Please see https://github.com/microsoft/monaco-editor#faq',
            )),
          console.warn(a.message));
      }
      n.logOnceWebWorkerWarning = N;
      class e {
        constructor(s, c, d, p) {
          (this.vsWorker = s),
            (this.req = c),
            (this.method = d),
            (this.args = p),
            (this.type = 0);
        }
      }
      class C {
        constructor(s, c, d, p) {
          (this.vsWorker = s),
            (this.seq = c),
            (this.res = d),
            (this.err = p),
            (this.type = 1);
        }
      }
      class h {
        constructor(s, c, d, p) {
          (this.vsWorker = s),
            (this.req = c),
            (this.eventName = d),
            (this.arg = p),
            (this.type = 2);
        }
      }
      class b {
        constructor(s, c, d) {
          (this.vsWorker = s),
            (this.req = c),
            (this.event = d),
            (this.type = 3);
        }
      }
      class L {
        constructor(s, c) {
          (this.vsWorker = s), (this.req = c), (this.type = 4);
        }
      }
      class S {
        constructor(s) {
          (this.a = -1),
            (this.g = s),
            (this.b = 0),
            (this.c = Object.create(null)),
            (this.d = new Map()),
            (this.f = new Map());
        }
        setWorkerId(s) {
          this.a = s;
        }
        sendMessage(s, c) {
          const d = String(++this.b);
          return new Promise((p, E) => {
            (this.c[d] = { resolve: p, reject: E }),
              this.o(new e(this.a, d, s, c));
          });
        }
        listen(s, c) {
          let d = null;
          const p = new M.Emitter({
            onWillAddFirstListener: () => {
              (d = String(++this.b)),
                this.d.set(d, p),
                this.o(new h(this.a, d, s, c));
            },
            onDidRemoveLastListener: () => {
              this.d.delete(d), this.o(new L(this.a, d)), (d = null);
            },
          });
          return p.event;
        }
        handleMessage(s) {
          !s ||
            !s.vsWorker ||
            (this.a !== -1 && s.vsWorker !== this.a) ||
            this.h(s);
        }
        h(s) {
          switch (s.type) {
            case 1:
              return this.j(s);
            case 0:
              return this.k(s);
            case 2:
              return this.l(s);
            case 3:
              return this.m(s);
            case 4:
              return this.n(s);
          }
        }
        j(s) {
          if (!this.c[s.seq]) {
            console.warn('Got reply to unknown seq');
            return;
          }
          const c = this.c[s.seq];
          if ((delete this.c[s.seq], s.err)) {
            let d = s.err;
            s.err.$isError &&
              ((d = new Error()),
              (d.name = s.err.name),
              (d.message = s.err.message),
              (d.stack = s.err.stack)),
              c.reject(d);
            return;
          }
          c.resolve(s.res);
        }
        k(s) {
          const c = s.req;
          this.g.handleMessage(s.method, s.args).then(
            (p) => {
              this.o(new C(this.a, c, p, void 0));
            },
            (p) => {
              p.detail instanceof Error &&
                (p.detail = (0, A.transformErrorForSerialization)(p.detail)),
                this.o(
                  new C(
                    this.a,
                    c,
                    void 0,
                    (0, A.transformErrorForSerialization)(p),
                  ),
                );
            },
          );
        }
        l(s) {
          const c = s.req,
            d = this.g.handleEvent(
              s.eventName,
              s.arg,
            )((p) => {
              this.o(new b(this.a, c, p));
            });
          this.f.set(c, d);
        }
        m(s) {
          if (!this.d.has(s.req)) {
            console.warn('Got event for unknown req');
            return;
          }
          this.d.get(s.req).fire(s.event);
        }
        n(s) {
          if (!this.f.has(s.req)) {
            console.warn('Got unsubscribe for unknown req');
            return;
          }
          this.f.get(s.req).dispose(), this.f.delete(s.req);
        }
        o(s) {
          const c = [];
          if (s.type === 0)
            for (let d = 0; d < s.args.length; d++)
              s.args[d] instanceof ArrayBuffer && c.push(s.args[d]);
          else s.type === 1 && s.res instanceof ArrayBuffer && c.push(s.res);
          this.g.sendMessage(s, c);
        }
      }
      class _ extends i.Disposable {
        constructor(s, c, d) {
          super();
          let p = null;
          (this.a = this.q(
            s.create(
              'vs/base/common/worker/simpleWorker',
              (W) => {
                this.c.handleMessage(W);
              },
              (W) => {
                p?.(W);
              },
            ),
          )),
            (this.c = new S({
              sendMessage: (W, B) => {
                this.a.postMessage(W, B);
              },
              handleMessage: (W, B) => {
                if (typeof d[W] != 'function')
                  return Promise.reject(
                    new Error('Missing method ' + W + ' on main thread host.'),
                  );
                try {
                  return Promise.resolve(d[W].apply(d, B));
                } catch (q) {
                  return Promise.reject(q);
                }
              },
              handleEvent: (W, B) => {
                if (w(W)) {
                  const q = d[W].call(d, B);
                  if (typeof q != 'function')
                    throw new Error(
                      `Missing dynamic event ${W} on main thread host.`,
                    );
                  return q;
                }
                if (m(W)) {
                  const q = d[W];
                  if (typeof q != 'function')
                    throw new Error(`Missing event ${W} on main thread host.`);
                  return q;
                }
                throw new Error(`Malformed event name ${W}`);
              },
            })),
            this.c.setWorkerId(this.a.getId());
          let E = null;
          typeof y.globals.require < 'u' &&
          typeof y.globals.require.getConfig == 'function'
            ? (E = y.globals.require.getConfig())
            : typeof y.globals.requirejs < 'u' &&
              (E = y.globals.requirejs.s.contexts._.config);
          const R = (0, u.getAllMethodNames)(d);
          this.b = this.c.sendMessage(o, [
            this.a.getId(),
            JSON.parse(JSON.stringify(E)),
            c,
            R,
          ]);
          const D = (W, B) => this.h(W, B),
            F = (W, B) => this.c.listen(W, B);
          this.g = new Promise((W, B) => {
            (p = B),
              this.b.then(
                (q) => {
                  W(l(q, D, F));
                },
                (q) => {
                  B(q), this.j('Worker failed to load ' + c, q);
                },
              );
          });
        }
        getProxyObject() {
          return this.g;
        }
        h(s, c) {
          return new Promise((d, p) => {
            this.b.then(() => {
              this.c.sendMessage(s, c).then(d, p);
            }, p);
          });
        }
        j(s, c) {
          console.error(s), console.info(c);
        }
      }
      n.SimpleWorkerClient = _;
      function m(a) {
        return (
          a[0] === 'o' && a[1] === 'n' && v.isUpperAsciiLetter(a.charCodeAt(2))
        );
      }
      function w(a) {
        return /^onDynamic/.test(a) && v.isUpperAsciiLetter(a.charCodeAt(9));
      }
      function l(a, s, c) {
        const d = (R) =>
            function () {
              const D = Array.prototype.slice.call(arguments, 0);
              return s(R, D);
            },
          p = (R) =>
            function (D) {
              return c(R, D);
            },
          E = {};
        for (const R of a) {
          if (w(R)) {
            E[R] = p(R);
            continue;
          }
          if (m(R)) {
            E[R] = c(R, void 0);
            continue;
          }
          E[R] = d(R);
        }
        return E;
      }
      class g {
        constructor(s, c) {
          (this.a = c),
            (this.b = null),
            (this.c = new S({
              sendMessage: (d, p) => {
                s(d, p);
              },
              handleMessage: (d, p) => this.d(d, p),
              handleEvent: (d, p) => this.f(d, p),
            }));
        }
        onmessage(s) {
          this.c.handleMessage(s);
        }
        d(s, c) {
          if (s === o) return this.g(c[0], c[1], c[2], c[3]);
          if (!this.b || typeof this.b[s] != 'function')
            return Promise.reject(
              new Error('Missing requestHandler or method: ' + s),
            );
          try {
            return Promise.resolve(this.b[s].apply(this.b, c));
          } catch (d) {
            return Promise.reject(d);
          }
        }
        f(s, c) {
          if (!this.b) throw new Error('Missing requestHandler');
          if (w(s)) {
            const d = this.b[s].call(this.b, c);
            if (typeof d != 'function')
              throw new Error(`Missing dynamic event ${s} on request handler.`);
            return d;
          }
          if (m(s)) {
            const d = this.b[s];
            if (typeof d != 'function')
              throw new Error(`Missing event ${s} on request handler.`);
            return d;
          }
          throw new Error(`Malformed event name ${s}`);
        }
        g(s, c, d, p) {
          this.c.setWorkerId(s);
          const D = l(
            p,
            (F, W) => this.c.sendMessage(F, W),
            (F, W) => this.c.listen(F, W),
          );
          return this.a
            ? ((this.b = this.a(D)),
              Promise.resolve((0, u.getAllMethodNames)(this.b)))
            : (c &&
                (typeof c.baseUrl < 'u' && delete c.baseUrl,
                typeof c.paths < 'u' &&
                  typeof c.paths.vs < 'u' &&
                  delete c.paths.vs,
                typeof c.trustedTypesPolicy !== void 0 &&
                  delete c.trustedTypesPolicy,
                (c.catchError = !0),
                y.globals.require.config(c)),
              new Promise((F, W) => {
                (y.globals.require || U)(
                  [d],
                  (q) => {
                    if (((this.b = q.create(D)), !this.b)) {
                      W(new Error('No RequestHandler!'));
                      return;
                    }
                    F((0, u.getAllMethodNames)(this.b));
                  },
                  W,
                );
              }));
        }
      }
      n.SimpleWorkerServer = g;
      function r(a) {
        return new g(a, null);
      }
      n.create = r;
    }),
    Y(X[52], Q([0, 1, 7, 10]), function (U, n, A, M) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.TokenizationRegistry = void 0);
      class i {
        constructor() {
          (this.a = new Map()),
            (this.b = new Map()),
            (this.c = new A.Emitter()),
            (this.onDidChange = this.c.event),
            (this.d = null);
        }
        fire(v) {
          this.c.fire({ changedLanguages: v, changedColorMap: !1 });
        }
        register(v, o) {
          return (
            this.a.set(v, o),
            this.fire([v]),
            (0, M.toDisposable)(() => {
              this.a.get(v) === o && (this.a.delete(v), this.fire([v]));
            })
          );
        }
        registerFactory(v, o) {
          var f;
          (f = this.b.get(v)) === null || f === void 0 || f.dispose();
          const N = new u(this, v, o);
          return (
            this.b.set(v, N),
            (0, M.toDisposable)(() => {
              const e = this.b.get(v);
              !e || e !== N || (this.b.delete(v), e.dispose());
            })
          );
        }
        getOrCreate(v) {
          return fe(this, void 0, void 0, function* () {
            const o = this.get(v);
            if (o) return o;
            const f = this.b.get(v);
            return !f || f.isResolved ? null : (yield f.resolve(), this.get(v));
          });
        }
        get(v) {
          return this.a.get(v) || null;
        }
        isResolved(v) {
          if (this.get(v)) return !0;
          const f = this.b.get(v);
          return !!(!f || f.isResolved);
        }
        setColorMap(v) {
          (this.d = v),
            this.c.fire({
              changedLanguages: Array.from(this.a.keys()),
              changedColorMap: !0,
            });
        }
        getColorMap() {
          return this.d;
        }
        getDefaultBackground() {
          return this.d && this.d.length > 2 ? this.d[2] : null;
        }
      }
      n.TokenizationRegistry = i;
      class u extends M.Disposable {
        get isResolved() {
          return this.c;
        }
        constructor(v, o, f) {
          super(),
            (this.g = v),
            (this.h = o),
            (this.i = f),
            (this.a = !1),
            (this.b = null),
            (this.c = !1);
        }
        dispose() {
          (this.a = !0), super.dispose();
        }
        resolve() {
          return fe(this, void 0, void 0, function* () {
            return this.b || (this.b = this.j()), this.b;
          });
        }
        j() {
          return fe(this, void 0, void 0, function* () {
            const v = yield Promise.resolve(this.i.createTokenizationSupport());
            (this.c = !0), v && !this.a && this.q(this.g.register(this.h, v));
          });
        }
      }
    }),
    Y(X[53], Q([0, 1, 30, 12, 2, 52]), function (U, n, A, M, i, u) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.TokenizationRegistry =
          n.InlayHintKind =
          n.Command =
          n.FoldingRangeKind =
          n.SymbolKinds =
          n.isLocationLink =
          n.DocumentHighlightKind =
          n.SignatureHelpTriggerKind =
          n.InlineCompletionTriggerKind =
          n.CompletionItemKinds =
          n.EncodedTokenizationResult =
          n.TokenizationResult =
          n.Token =
            void 0);
      class y {
        constructor(w, l, g) {
          (this.offset = w),
            (this.type = l),
            (this.language = g),
            (this._tokenBrand = void 0);
        }
        toString() {
          return '(' + this.offset + ', ' + this.type + ')';
        }
      }
      n.Token = y;
      class v {
        constructor(w, l) {
          (this.tokens = w),
            (this.endState = l),
            (this._tokenizationResultBrand = void 0);
        }
      }
      n.TokenizationResult = v;
      class o {
        constructor(w, l) {
          (this.tokens = w),
            (this.endState = l),
            (this._encodedTokenizationResultBrand = void 0);
        }
      }
      n.EncodedTokenizationResult = o;
      var f;
      (function (m) {
        const w = new Map();
        w.set(0, A.Codicon.symbolMethod),
          w.set(1, A.Codicon.symbolFunction),
          w.set(2, A.Codicon.symbolConstructor),
          w.set(3, A.Codicon.symbolField),
          w.set(4, A.Codicon.symbolVariable),
          w.set(5, A.Codicon.symbolClass),
          w.set(6, A.Codicon.symbolStruct),
          w.set(7, A.Codicon.symbolInterface),
          w.set(8, A.Codicon.symbolModule),
          w.set(9, A.Codicon.symbolProperty),
          w.set(10, A.Codicon.symbolEvent),
          w.set(11, A.Codicon.symbolOperator),
          w.set(12, A.Codicon.symbolUnit),
          w.set(13, A.Codicon.symbolValue),
          w.set(15, A.Codicon.symbolEnum),
          w.set(14, A.Codicon.symbolConstant),
          w.set(15, A.Codicon.symbolEnum),
          w.set(16, A.Codicon.symbolEnumMember),
          w.set(17, A.Codicon.symbolKeyword),
          w.set(27, A.Codicon.symbolSnippet),
          w.set(18, A.Codicon.symbolText),
          w.set(19, A.Codicon.symbolColor),
          w.set(20, A.Codicon.symbolFile),
          w.set(21, A.Codicon.symbolReference),
          w.set(22, A.Codicon.symbolCustomColor),
          w.set(23, A.Codicon.symbolFolder),
          w.set(24, A.Codicon.symbolTypeParameter),
          w.set(25, A.Codicon.account),
          w.set(26, A.Codicon.issues);
        function l(a) {
          let s = w.get(a);
          return (
            s ||
              (console.info('No codicon found for CompletionItemKind ' + a),
              (s = A.Codicon.symbolProperty)),
            s
          );
        }
        m.toIcon = l;
        const g = new Map();
        g.set('method', 0),
          g.set('function', 1),
          g.set('constructor', 2),
          g.set('field', 3),
          g.set('variable', 4),
          g.set('class', 5),
          g.set('struct', 6),
          g.set('interface', 7),
          g.set('module', 8),
          g.set('property', 9),
          g.set('event', 10),
          g.set('operator', 11),
          g.set('unit', 12),
          g.set('value', 13),
          g.set('constant', 14),
          g.set('enum', 15),
          g.set('enum-member', 16),
          g.set('enumMember', 16),
          g.set('keyword', 17),
          g.set('snippet', 27),
          g.set('text', 18),
          g.set('color', 19),
          g.set('file', 20),
          g.set('reference', 21),
          g.set('customcolor', 22),
          g.set('folder', 23),
          g.set('type-parameter', 24),
          g.set('typeParameter', 24),
          g.set('account', 25),
          g.set('issue', 26);
        function r(a, s) {
          let c = g.get(a);
          return typeof c > 'u' && !s && (c = 9), c;
        }
        m.fromString = r;
      })((f = n.CompletionItemKinds || (n.CompletionItemKinds = {})));
      var N;
      (function (m) {
        (m[(m.Automatic = 0)] = 'Automatic'),
          (m[(m.Explicit = 1)] = 'Explicit');
      })(
        (N =
          n.InlineCompletionTriggerKind ||
          (n.InlineCompletionTriggerKind = {})),
      );
      var e;
      (function (m) {
        (m[(m.Invoke = 1)] = 'Invoke'),
          (m[(m.TriggerCharacter = 2)] = 'TriggerCharacter'),
          (m[(m.ContentChange = 3)] = 'ContentChange');
      })((e = n.SignatureHelpTriggerKind || (n.SignatureHelpTriggerKind = {})));
      var C;
      (function (m) {
        (m[(m.Text = 0)] = 'Text'),
          (m[(m.Read = 1)] = 'Read'),
          (m[(m.Write = 2)] = 'Write');
      })((C = n.DocumentHighlightKind || (n.DocumentHighlightKind = {})));
      function h(m) {
        return (
          m &&
          M.URI.isUri(m.uri) &&
          i.Range.isIRange(m.range) &&
          (i.Range.isIRange(m.originSelectionRange) ||
            i.Range.isIRange(m.targetSelectionRange))
        );
      }
      n.isLocationLink = h;
      var b;
      (function (m) {
        const w = new Map();
        w.set(0, A.Codicon.symbolFile),
          w.set(1, A.Codicon.symbolModule),
          w.set(2, A.Codicon.symbolNamespace),
          w.set(3, A.Codicon.symbolPackage),
          w.set(4, A.Codicon.symbolClass),
          w.set(5, A.Codicon.symbolMethod),
          w.set(6, A.Codicon.symbolProperty),
          w.set(7, A.Codicon.symbolField),
          w.set(8, A.Codicon.symbolConstructor),
          w.set(9, A.Codicon.symbolEnum),
          w.set(10, A.Codicon.symbolInterface),
          w.set(11, A.Codicon.symbolFunction),
          w.set(12, A.Codicon.symbolVariable),
          w.set(13, A.Codicon.symbolConstant),
          w.set(14, A.Codicon.symbolString),
          w.set(15, A.Codicon.symbolNumber),
          w.set(16, A.Codicon.symbolBoolean),
          w.set(17, A.Codicon.symbolArray),
          w.set(18, A.Codicon.symbolObject),
          w.set(19, A.Codicon.symbolKey),
          w.set(20, A.Codicon.symbolNull),
          w.set(21, A.Codicon.symbolEnumMember),
          w.set(22, A.Codicon.symbolStruct),
          w.set(23, A.Codicon.symbolEvent),
          w.set(24, A.Codicon.symbolOperator),
          w.set(25, A.Codicon.symbolTypeParameter);
        function l(g) {
          let r = w.get(g);
          return (
            r ||
              (console.info('No codicon found for SymbolKind ' + g),
              (r = A.Codicon.symbolProperty)),
            r
          );
        }
        m.toIcon = l;
      })((b = n.SymbolKinds || (n.SymbolKinds = {})));
      class L {
        static fromValue(w) {
          switch (w) {
            case 'comment':
              return L.Comment;
            case 'imports':
              return L.Imports;
            case 'region':
              return L.Region;
          }
          return new L(w);
        }
        constructor(w) {
          this.value = w;
        }
      }
      (L.Comment = new L('comment')),
        (L.Imports = new L('imports')),
        (L.Region = new L('region')),
        (n.FoldingRangeKind = L);
      var S;
      (function (m) {
        function w(l) {
          return !l || typeof l != 'object'
            ? !1
            : typeof l.id == 'string' && typeof l.title == 'string';
        }
        m.is = w;
      })((S = n.Command || (n.Command = {})));
      var _;
      (function (m) {
        (m[(m.Type = 1)] = 'Type'), (m[(m.Parameter = 2)] = 'Parameter');
      })((_ = n.InlayHintKind || (n.InlayHintKind = {}))),
        (n.TokenizationRegistry = new u.TokenizationRegistry());
    }),
    Y(
      X[54],
      Q([0, 1, 51, 7, 27, 12, 3, 2, 31, 53, 47]),
      function (U, n, A, M, i, u, y, v, o, f, N) {
        'use strict';
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.createMonacoBaseAPI = n.KeyMod = void 0);
        class e {
          static chord(b, L) {
            return (0, i.KeyChord)(b, L);
          }
        }
        (e.CtrlCmd = 2048),
          (e.Shift = 1024),
          (e.Alt = 512),
          (e.WinCtrl = 256),
          (n.KeyMod = e);
        function C() {
          return {
            editor: void 0,
            languages: void 0,
            CancellationTokenSource: A.CancellationTokenSource,
            Emitter: M.Emitter,
            KeyCode: N.KeyCode,
            KeyMod: e,
            Position: y.Position,
            Range: v.Range,
            Selection: o.Selection,
            SelectionDirection: N.SelectionDirection,
            MarkerSeverity: N.MarkerSeverity,
            MarkerTag: N.MarkerTag,
            Uri: u.URI,
            Token: f.Token,
          };
        }
        n.createMonacoBaseAPI = C;
      },
    ),
    Y(
      X[57],
      Q([0, 1, 16, 5, 12, 3, 2, 44, 20, 40, 41, 54, 22, 46, 39, 11]),
      function (U, n, A, M, i, u, y, v, o, f, N, e, C, h, b, L) {
        'use strict';
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.create = n.EditorSimpleWorker = void 0);
        class S extends v.MirrorTextModel {
          get uri() {
            return this.c;
          }
          get eol() {
            return this.f;
          }
          getValue() {
            return this.getText();
          }
          getLinesContent() {
            return this.d.slice(0);
          }
          getLineCount() {
            return this.d.length;
          }
          getLineContent(l) {
            return this.d[l - 1];
          }
          getWordAtPosition(l, g) {
            const r = (0, o.getWordAtText)(
              l.column,
              (0, o.ensureValidWordDefinition)(g),
              this.d[l.lineNumber - 1],
              0,
            );
            return r
              ? new y.Range(
                  l.lineNumber,
                  r.startColumn,
                  l.lineNumber,
                  r.endColumn,
                )
              : null;
          }
          words(l) {
            const g = this.d,
              r = this.p.bind(this);
            let a = 0,
              s = '',
              c = 0,
              d = [];
            return {
              *[Symbol.iterator]() {
                for (;;)
                  if (c < d.length) {
                    const p = s.substring(d[c].start, d[c].end);
                    (c += 1), yield p;
                  } else if (a < g.length)
                    (s = g[a]), (d = r(s, l)), (c = 0), (a += 1);
                  else break;
              },
            };
          }
          getLineWords(l, g) {
            const r = this.d[l - 1],
              a = this.p(r, g),
              s = [];
            for (const c of a)
              s.push({
                word: r.substring(c.start, c.end),
                startColumn: c.start + 1,
                endColumn: c.end + 1,
              });
            return s;
          }
          p(l, g) {
            const r = [];
            let a;
            for (g.lastIndex = 0; (a = g.exec(l)) && a[0].length !== 0; )
              r.push({ start: a.index, end: a.index + a[0].length });
            return r;
          }
          getValueInRange(l) {
            if (((l = this.q(l)), l.startLineNumber === l.endLineNumber))
              return this.d[l.startLineNumber - 1].substring(
                l.startColumn - 1,
                l.endColumn - 1,
              );
            const g = this.f,
              r = l.startLineNumber - 1,
              a = l.endLineNumber - 1,
              s = [];
            s.push(this.d[r].substring(l.startColumn - 1));
            for (let c = r + 1; c < a; c++) s.push(this.d[c]);
            return s.push(this.d[a].substring(0, l.endColumn - 1)), s.join(g);
          }
          offsetAt(l) {
            return (
              (l = this.r(l)),
              this.k(),
              this.h.getPrefixSum(l.lineNumber - 2) + (l.column - 1)
            );
          }
          positionAt(l) {
            (l = Math.floor(l)), (l = Math.max(0, l)), this.k();
            const g = this.h.getIndexOf(l),
              r = this.d[g.index].length;
            return {
              lineNumber: 1 + g.index,
              column: 1 + Math.min(g.remainder, r),
            };
          }
          q(l) {
            const g = this.r({
                lineNumber: l.startLineNumber,
                column: l.startColumn,
              }),
              r = this.r({ lineNumber: l.endLineNumber, column: l.endColumn });
            return g.lineNumber !== l.startLineNumber ||
              g.column !== l.startColumn ||
              r.lineNumber !== l.endLineNumber ||
              r.column !== l.endColumn
              ? {
                  startLineNumber: g.lineNumber,
                  startColumn: g.column,
                  endLineNumber: r.lineNumber,
                  endColumn: r.column,
                }
              : l;
          }
          r(l) {
            if (!u.Position.isIPosition(l)) throw new Error('bad position');
            let { lineNumber: g, column: r } = l,
              a = !1;
            if (g < 1) (g = 1), (r = 1), (a = !0);
            else if (g > this.d.length)
              (g = this.d.length), (r = this.d[g - 1].length + 1), (a = !0);
            else {
              const s = this.d[g - 1].length + 1;
              r < 1 ? ((r = 1), (a = !0)) : r > s && ((r = s), (a = !0));
            }
            return a ? { lineNumber: g, column: r } : l;
          }
        }
        class _ {
          constructor(l, g) {
            (this.c = l),
              (this.d = Object.create(null)),
              (this.f = g),
              (this.g = null);
          }
          dispose() {
            this.d = Object.create(null);
          }
          h(l) {
            return this.d[l];
          }
          j() {
            const l = [];
            return Object.keys(this.d).forEach((g) => l.push(this.d[g])), l;
          }
          acceptNewModel(l) {
            this.d[l.url] = new S(
              i.URI.parse(l.url),
              l.lines,
              l.EOL,
              l.versionId,
            );
          }
          acceptModelChanged(l, g) {
            if (!this.d[l]) return;
            this.d[l].onEvents(g);
          }
          acceptRemovedModel(l) {
            !this.d[l] || delete this.d[l];
          }
          computeUnicodeHighlights(l, g, r) {
            return fe(this, void 0, void 0, function* () {
              const a = this.h(l);
              return a
                ? h.UnicodeTextModelHighlighter.computeUnicodeHighlights(
                    a,
                    g,
                    r,
                  )
                : {
                    ranges: [],
                    hasMore: !1,
                    ambiguousCharacterCount: 0,
                    invisibleCharacterCount: 0,
                    nonBasicAsciiCharacterCount: 0,
                  };
            });
          }
          computeDiff(l, g, r, a) {
            return fe(this, void 0, void 0, function* () {
              const s = this.h(l),
                c = this.h(g);
              return !s || !c ? null : _.k(s, c, r, a);
            });
          }
          static k(l, g, r, a) {
            const s =
                a === 'experimental'
                  ? b.linesDiffComputers.experimental
                  : b.linesDiffComputers.smart,
              c = l.getLinesContent(),
              d = g.getLinesContent(),
              p = s.computeDiff(c, d, r);
            return {
              identical: p.changes.length > 0 ? !1 : this.l(l, g),
              quitEarly: p.quitEarly,
              changes: p.changes.map((R) => {
                var D;
                return [
                  R.originalRange.startLineNumber,
                  R.originalRange.endLineNumberExclusive,
                  R.modifiedRange.startLineNumber,
                  R.modifiedRange.endLineNumberExclusive,
                  (D = R.innerChanges) === null || D === void 0
                    ? void 0
                    : D.map((F) => [
                        F.originalRange.startLineNumber,
                        F.originalRange.startColumn,
                        F.originalRange.endLineNumber,
                        F.originalRange.endColumn,
                        F.modifiedRange.startLineNumber,
                        F.modifiedRange.startColumn,
                        F.modifiedRange.endLineNumber,
                        F.modifiedRange.endColumn,
                      ]),
                ];
              }),
            };
          }
          static l(l, g) {
            const r = l.getLineCount(),
              a = g.getLineCount();
            if (r !== a) return !1;
            for (let s = 1; s <= r; s++) {
              const c = l.getLineContent(s),
                d = g.getLineContent(s);
              if (c !== d) return !1;
            }
            return !0;
          }
          computeMoreMinimalEdits(l, g) {
            return fe(this, void 0, void 0, function* () {
              const r = this.h(l);
              if (!r) return g;
              const a = [];
              let s;
              g = g.slice(0).sort((c, d) => {
                if (c.range && d.range)
                  return y.Range.compareRangesUsingStarts(c.range, d.range);
                const p = c.range ? 0 : 1,
                  E = d.range ? 0 : 1;
                return p - E;
              });
              for (let { range: c, text: d, eol: p } of g) {
                if ((typeof p == 'number' && (s = p), y.Range.isEmpty(c) && !d))
                  continue;
                const E = r.getValueInRange(c);
                if (((d = d.replace(/\r\n|\n|\r/g, r.eol)), E === d)) continue;
                if (Math.max(d.length, E.length) > _.n) {
                  a.push({ range: c, text: d });
                  continue;
                }
                const R = (0, A.stringDiff)(E, d, !1),
                  D = r.offsetAt(y.Range.lift(c).getStartPosition());
                for (const F of R) {
                  const W = r.positionAt(D + F.originalStart),
                    B = r.positionAt(D + F.originalStart + F.originalLength),
                    q = {
                      text: d.substr(F.modifiedStart, F.modifiedLength),
                      range: {
                        startLineNumber: W.lineNumber,
                        startColumn: W.column,
                        endLineNumber: B.lineNumber,
                        endColumn: B.column,
                      },
                    };
                  r.getValueInRange(q.range) !== q.text && a.push(q);
                }
              }
              return (
                typeof s == 'number' &&
                  a.push({
                    eol: s,
                    text: '',
                    range: {
                      startLineNumber: 0,
                      startColumn: 0,
                      endLineNumber: 0,
                      endColumn: 0,
                    },
                  }),
                a
              );
            });
          }
          computeLinks(l) {
            return fe(this, void 0, void 0, function* () {
              const g = this.h(l);
              return g ? (0, f.computeLinks)(g) : null;
            });
          }
          textualSuggest(l, g, r, a) {
            return fe(this, void 0, void 0, function* () {
              const s = new C.StopWatch(!0),
                c = new RegExp(r, a),
                d = new Set();
              e: for (const p of l) {
                const E = this.h(p);
                if (!!E) {
                  for (const R of E.words(c))
                    if (
                      !(R === g || !isNaN(Number(R))) &&
                      (d.add(R), d.size > _.o)
                    )
                      break e;
                }
              }
              return { words: Array.from(d), duration: s.elapsed() };
            });
          }
          computeWordRanges(l, g, r, a) {
            return fe(this, void 0, void 0, function* () {
              const s = this.h(l);
              if (!s) return Object.create(null);
              const c = new RegExp(r, a),
                d = Object.create(null);
              for (let p = g.startLineNumber; p < g.endLineNumber; p++) {
                const E = s.getLineWords(p, c);
                for (const R of E) {
                  if (!isNaN(Number(R.word))) continue;
                  let D = d[R.word];
                  D || ((D = []), (d[R.word] = D)),
                    D.push({
                      startLineNumber: p,
                      startColumn: R.startColumn,
                      endLineNumber: p,
                      endColumn: R.endColumn,
                    });
                }
              }
              return d;
            });
          }
          navigateValueSet(l, g, r, a, s) {
            return fe(this, void 0, void 0, function* () {
              const c = this.h(l);
              if (!c) return null;
              const d = new RegExp(a, s);
              g.startColumn === g.endColumn &&
                (g = {
                  startLineNumber: g.startLineNumber,
                  startColumn: g.startColumn,
                  endLineNumber: g.endLineNumber,
                  endColumn: g.endColumn + 1,
                });
              const p = c.getValueInRange(g),
                E = c.getWordAtPosition(
                  { lineNumber: g.startLineNumber, column: g.startColumn },
                  d,
                );
              if (!E) return null;
              const R = c.getValueInRange(E);
              return N.BasicInplaceReplace.INSTANCE.navigateValueSet(
                g,
                p,
                E,
                R,
                r,
              );
            });
          }
          loadForeignModule(l, g, r) {
            const a = (d, p) => this.c.fhr(d, p),
              c = {
                host: (0, L.createProxyObject)(r, a),
                getMirrorModels: () => this.j(),
              };
            return this.f
              ? ((this.g = this.f(c, g)),
                Promise.resolve((0, L.getAllMethodNames)(this.g)))
              : new Promise((d, p) => {
                  U(
                    [l],
                    (E) => {
                      (this.g = E.create(c, g)),
                        d((0, L.getAllMethodNames)(this.g));
                    },
                    p,
                  );
                });
          }
          fmr(l, g) {
            if (!this.g || typeof this.g[l] != 'function')
              return Promise.reject(
                new Error('Missing requestHandler or method: ' + l),
              );
            try {
              return Promise.resolve(this.g[l].apply(this.g, g));
            } catch (r) {
              return Promise.reject(r);
            }
          }
        }
        (_.n = 1e5), (_.o = 1e4), (n.EditorSimpleWorker = _);
        function m(w) {
          return new _(w, null);
        }
        (n.create = m),
          typeof importScripts == 'function' &&
            (M.globals.monaco = (0, e.createMonacoBaseAPI)());
      },
    );
}).call(this);

//# sourceMappingURL=../../../../min-maps/vs/base/worker/workerMain.js.map
