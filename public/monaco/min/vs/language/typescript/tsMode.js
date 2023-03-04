'use strict';
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.36.1(6c56744c3419458f0dd48864520b759d1a3a1ca8)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
define('vs/language/typescript/tsMode', ['require', 'require'], (require) => {
  var moduleExports = (() => {
    var ee = Object.create;
    var I = Object.defineProperty;
    var te = Object.getOwnPropertyDescriptor;
    var ie = Object.getOwnPropertyNames;
    var re = Object.getPrototypeOf,
      se = Object.prototype.hasOwnProperty;
    var ne = (s, e, t) =>
      e in s
        ? I(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (s[e] = t);
    var $ = ((s) =>
      typeof require != 'undefined'
        ? require
        : typeof Proxy != 'undefined'
        ? new Proxy(s, {
            get: (e, t) => (typeof require != 'undefined' ? require : e)[t],
          })
        : s)(function (s) {
      if (typeof require != 'undefined') return require.apply(this, arguments);
      throw new Error('Dynamic require of "' + s + '" is not supported');
    });
    var oe = (s, e) => () => (
        e || s((e = { exports: {} }).exports, e), e.exports
      ),
      ae = (s, e) => {
        for (var t in e) I(s, t, { get: e[t], enumerable: !0 });
      },
      V = (s, e, t, i) => {
        if ((e && typeof e == 'object') || typeof e == 'function')
          for (let l of ie(e))
            !se.call(s, l) &&
              l !== t &&
              I(s, l, {
                get: () => e[l],
                enumerable: !(i = te(e, l)) || i.enumerable,
              });
        return s;
      },
      z = (s, e, t) => (V(s, e, 'default'), t && V(t, e, 'default')),
      J = (s, e, t) => (
        (t = s != null ? ee(re(s)) : {}),
        V(
          e || !s || !s.__esModule
            ? I(t, 'default', { value: s, enumerable: !0 })
            : t,
          s,
        )
      ),
      le = (s) => V(I({}, '__esModule', { value: !0 }), s);
    var b = (s, e, t) => (ne(s, typeof e != 'symbol' ? e + '' : e, t), t);
    var q = oe((ye, G) => {
      var ce = J($('vs/editor/editor.api'));
      G.exports = ce;
    });
    var be = {};
    ae(be, {
      Adapter: () => S,
      CodeActionAdaptor: () => N,
      DefinitionAdapter: () => M,
      DiagnosticsAdapter: () => D,
      FormatAdapter: () => R,
      FormatHelper: () => w,
      FormatOnTypeAdapter: () => E,
      InlayHintsAdapter: () => H,
      Kind: () => c,
      LibFiles: () => P,
      OccurrencesAdapter: () => L,
      OutlineAdapter: () => O,
      QuickInfoAdapter: () => F,
      ReferenceAdapter: () => A,
      RenameAdapter: () => W,
      SignatureHelpAdapter: () => _,
      SuggestAdapter: () => v,
      WorkerManager: () => T,
      flattenDiagnosticMessageText: () => K,
      getJavaScriptWorker: () => de,
      getTypeScriptWorker: () => fe,
      setupJavaScript: () => pe,
      setupTypeScript: () => ge,
    });
    var r = {};
    z(r, J(q()));
    var T = class {
      constructor(e, t) {
        this._modeId = e;
        this._defaults = t;
        (this._worker = null),
          (this._client = null),
          (this._configChangeListener = this._defaults.onDidChange(() =>
            this._stopWorker(),
          )),
          (this._updateExtraLibsToken = 0),
          (this._extraLibsChangeListener = this._defaults.onDidExtraLibsChange(
            () => this._updateExtraLibs(),
          ));
      }
      _configChangeListener;
      _updateExtraLibsToken;
      _extraLibsChangeListener;
      _worker;
      _client;
      dispose() {
        this._configChangeListener.dispose(),
          this._extraLibsChangeListener.dispose(),
          this._stopWorker();
      }
      _stopWorker() {
        this._worker && (this._worker.dispose(), (this._worker = null)),
          (this._client = null);
      }
      async _updateExtraLibs() {
        if (!this._worker) return;
        let e = ++this._updateExtraLibsToken,
          t = await this._worker.getProxy();
        this._updateExtraLibsToken === e &&
          t.updateExtraLibs(this._defaults.getExtraLibs());
      }
      _getClient() {
        return (
          this._client ||
            (this._client = (async () => (
              (this._worker = r.editor.createWebWorker({
                moduleId: 'vs/language/typescript/tsWorker',
                label: this._modeId,
                keepIdleModels: !0,
                createData: {
                  compilerOptions: this._defaults.getCompilerOptions(),
                  extraLibs: this._defaults.getExtraLibs(),
                  customWorkerPath:
                    this._defaults.workerOptions.customWorkerPath,
                  inlayHintsOptions: this._defaults.inlayHintsOptions,
                },
              })),
              this._defaults.getEagerModelSync()
                ? await this._worker.withSyncedResources(
                    r.editor
                      .getModels()
                      .filter((e) => e.getLanguageId() === this._modeId)
                      .map((e) => e.uri),
                  )
                : await this._worker.getProxy()
            ))()),
          this._client
        );
      }
      async getLanguageServiceWorker(...e) {
        let t = await this._getClient();
        return this._worker && (await this._worker.withSyncedResources(e)), t;
      }
    };
    var Q = $('./monaco.contribution');
    var a = {};
    a['lib.d.ts'] = !0;
    a['lib.dom.d.ts'] = !0;
    a['lib.dom.iterable.d.ts'] = !0;
    a['lib.es2015.collection.d.ts'] = !0;
    a['lib.es2015.core.d.ts'] = !0;
    a['lib.es2015.d.ts'] = !0;
    a['lib.es2015.generator.d.ts'] = !0;
    a['lib.es2015.iterable.d.ts'] = !0;
    a['lib.es2015.promise.d.ts'] = !0;
    a['lib.es2015.proxy.d.ts'] = !0;
    a['lib.es2015.reflect.d.ts'] = !0;
    a['lib.es2015.symbol.d.ts'] = !0;
    a['lib.es2015.symbol.wellknown.d.ts'] = !0;
    a['lib.es2016.array.include.d.ts'] = !0;
    a['lib.es2016.d.ts'] = !0;
    a['lib.es2016.full.d.ts'] = !0;
    a['lib.es2017.d.ts'] = !0;
    a['lib.es2017.full.d.ts'] = !0;
    a['lib.es2017.intl.d.ts'] = !0;
    a['lib.es2017.object.d.ts'] = !0;
    a['lib.es2017.sharedmemory.d.ts'] = !0;
    a['lib.es2017.string.d.ts'] = !0;
    a['lib.es2017.typedarrays.d.ts'] = !0;
    a['lib.es2018.asyncgenerator.d.ts'] = !0;
    a['lib.es2018.asynciterable.d.ts'] = !0;
    a['lib.es2018.d.ts'] = !0;
    a['lib.es2018.full.d.ts'] = !0;
    a['lib.es2018.intl.d.ts'] = !0;
    a['lib.es2018.promise.d.ts'] = !0;
    a['lib.es2018.regexp.d.ts'] = !0;
    a['lib.es2019.array.d.ts'] = !0;
    a['lib.es2019.d.ts'] = !0;
    a['lib.es2019.full.d.ts'] = !0;
    a['lib.es2019.object.d.ts'] = !0;
    a['lib.es2019.string.d.ts'] = !0;
    a['lib.es2019.symbol.d.ts'] = !0;
    a['lib.es2020.bigint.d.ts'] = !0;
    a['lib.es2020.d.ts'] = !0;
    a['lib.es2020.full.d.ts'] = !0;
    a['lib.es2020.intl.d.ts'] = !0;
    a['lib.es2020.promise.d.ts'] = !0;
    a['lib.es2020.sharedmemory.d.ts'] = !0;
    a['lib.es2020.string.d.ts'] = !0;
    a['lib.es2020.symbol.wellknown.d.ts'] = !0;
    a['lib.es2021.d.ts'] = !0;
    a['lib.es2021.full.d.ts'] = !0;
    a['lib.es2021.intl.d.ts'] = !0;
    a['lib.es2021.promise.d.ts'] = !0;
    a['lib.es2021.string.d.ts'] = !0;
    a['lib.es2021.weakref.d.ts'] = !0;
    a['lib.es5.d.ts'] = !0;
    a['lib.es6.d.ts'] = !0;
    a['lib.esnext.d.ts'] = !0;
    a['lib.esnext.full.d.ts'] = !0;
    a['lib.esnext.intl.d.ts'] = !0;
    a['lib.esnext.promise.d.ts'] = !0;
    a['lib.esnext.string.d.ts'] = !0;
    a['lib.esnext.weakref.d.ts'] = !0;
    a['lib.scripthost.d.ts'] = !0;
    a['lib.webworker.d.ts'] = !0;
    a['lib.webworker.importscripts.d.ts'] = !0;
    a['lib.webworker.iterable.d.ts'] = !0;
    function K(s, e, t = 0) {
      if (typeof s == 'string') return s;
      if (s === void 0) return '';
      let i = '';
      if (t) {
        i += e;
        for (let l = 0; l < t; l++) i += '  ';
      }
      if (((i += s.messageText), t++, s.next))
        for (let l of s.next) i += K(l, e, t);
      return i;
    }
    function x(s) {
      return s ? s.map((e) => e.text).join('') : '';
    }
    var S = class {
        constructor(e) {
          this._worker = e;
        }
        _textSpanToRange(e, t) {
          let i = e.getPositionAt(t.start),
            l = e.getPositionAt(t.start + t.length),
            { lineNumber: u, column: g } = i,
            { lineNumber: p, column: n } = l;
          return {
            startLineNumber: u,
            startColumn: g,
            endLineNumber: p,
            endColumn: n,
          };
        }
      },
      P = class {
        constructor(e) {
          this._worker = e;
          (this._libFiles = {}),
            (this._hasFetchedLibFiles = !1),
            (this._fetchLibFilesPromise = null);
        }
        _libFiles;
        _hasFetchedLibFiles;
        _fetchLibFilesPromise;
        isLibFile(e) {
          return e && e.path.indexOf('/lib.') === 0 ? !!a[e.path.slice(1)] : !1;
        }
        getOrCreateModel(e) {
          let t = r.Uri.parse(e),
            i = r.editor.getModel(t);
          if (i) return i;
          if (this.isLibFile(t) && this._hasFetchedLibFiles)
            return r.editor.createModel(
              this._libFiles[t.path.slice(1)],
              'typescript',
              t,
            );
          let l = Q.typescriptDefaults.getExtraLibs()[e];
          return l ? r.editor.createModel(l.content, 'typescript', t) : null;
        }
        _containsLibFile(e) {
          for (let t of e) if (this.isLibFile(t)) return !0;
          return !1;
        }
        async fetchLibFilesIfNecessary(e) {
          !this._containsLibFile(e) || (await this._fetchLibFiles());
        }
        _fetchLibFiles() {
          return (
            this._fetchLibFilesPromise ||
              (this._fetchLibFilesPromise = this._worker()
                .then((e) => e.getLibFiles())
                .then((e) => {
                  (this._hasFetchedLibFiles = !0), (this._libFiles = e);
                })),
            this._fetchLibFilesPromise
          );
        }
      };
    var D = class extends S {
        constructor(t, i, l, u) {
          super(u);
          this._libFiles = t;
          this._defaults = i;
          this._selector = l;
          let g = (o) => {
              if (o.getLanguageId() !== l) return;
              let f = () => {
                  let { onlyVisible: k } =
                    this._defaults.getDiagnosticsOptions();
                  k
                    ? o.isAttachedToEditor() && this._doValidate(o)
                    : this._doValidate(o);
                },
                d,
                m = o.onDidChangeContent(() => {
                  clearTimeout(d), (d = window.setTimeout(f, 500));
                }),
                h = o.onDidChangeAttached(() => {
                  let { onlyVisible: k } =
                    this._defaults.getDiagnosticsOptions();
                  k &&
                    (o.isAttachedToEditor()
                      ? f()
                      : r.editor.setModelMarkers(o, this._selector, []));
                });
              (this._listener[o.uri.toString()] = {
                dispose() {
                  m.dispose(), h.dispose(), clearTimeout(d);
                },
              }),
                f();
            },
            p = (o) => {
              r.editor.setModelMarkers(o, this._selector, []);
              let f = o.uri.toString();
              this._listener[f] &&
                (this._listener[f].dispose(), delete this._listener[f]);
            };
          this._disposables.push(r.editor.onDidCreateModel((o) => g(o))),
            this._disposables.push(r.editor.onWillDisposeModel(p)),
            this._disposables.push(
              r.editor.onDidChangeModelLanguage((o) => {
                p(o.model), g(o.model);
              }),
            ),
            this._disposables.push({
              dispose() {
                for (let o of r.editor.getModels()) p(o);
              },
            });
          let n = () => {
            for (let o of r.editor.getModels()) p(o), g(o);
          };
          this._disposables.push(this._defaults.onDidChange(n)),
            this._disposables.push(this._defaults.onDidExtraLibsChange(n)),
            r.editor.getModels().forEach((o) => g(o));
        }
        _disposables = [];
        _listener = Object.create(null);
        dispose() {
          this._disposables.forEach((t) => t && t.dispose()),
            (this._disposables = []);
        }
        async _doValidate(t) {
          let i = await this._worker(t.uri);
          if (t.isDisposed()) return;
          let l = [],
            {
              noSyntaxValidation: u,
              noSemanticValidation: g,
              noSuggestionDiagnostics: p,
            } = this._defaults.getDiagnosticsOptions();
          u || l.push(i.getSyntacticDiagnostics(t.uri.toString())),
            g || l.push(i.getSemanticDiagnostics(t.uri.toString())),
            p || l.push(i.getSuggestionDiagnostics(t.uri.toString()));
          let n = await Promise.all(l);
          if (!n || t.isDisposed()) return;
          let o = n
              .reduce((d, m) => m.concat(d), [])
              .filter(
                (d) =>
                  (
                    this._defaults.getDiagnosticsOptions()
                      .diagnosticCodesToIgnore || []
                  ).indexOf(d.code) === -1,
              ),
            f = o
              .map((d) => d.relatedInformation || [])
              .reduce((d, m) => m.concat(d), [])
              .map((d) => (d.file ? r.Uri.parse(d.file.fileName) : null));
          await this._libFiles.fetchLibFilesIfNecessary(f),
            !t.isDisposed() &&
              r.editor.setModelMarkers(
                t,
                this._selector,
                o.map((d) => this._convertDiagnostics(t, d)),
              );
        }
        _convertDiagnostics(t, i) {
          let l = i.start || 0,
            u = i.length || 1,
            { lineNumber: g, column: p } = t.getPositionAt(l),
            { lineNumber: n, column: o } = t.getPositionAt(l + u),
            f = [];
          return (
            i.reportsUnnecessary && f.push(r.MarkerTag.Unnecessary),
            i.reportsDeprecated && f.push(r.MarkerTag.Deprecated),
            {
              severity: this._tsDiagnosticCategoryToMarkerSeverity(i.category),
              startLineNumber: g,
              startColumn: p,
              endLineNumber: n,
              endColumn: o,
              message: K(
                i.messageText,
                `
`,
              ),
              code: i.code.toString(),
              tags: f,
              relatedInformation: this._convertRelatedInformation(
                t,
                i.relatedInformation,
              ),
            }
          );
        }
        _convertRelatedInformation(t, i) {
          if (!i) return [];
          let l = [];
          return (
            i.forEach((u) => {
              let g = t;
              if (
                (u.file &&
                  (g = this._libFiles.getOrCreateModel(u.file.fileName)),
                !g)
              )
                return;
              let p = u.start || 0,
                n = u.length || 1,
                { lineNumber: o, column: f } = g.getPositionAt(p),
                { lineNumber: d, column: m } = g.getPositionAt(p + n);
              l.push({
                resource: g.uri,
                startLineNumber: o,
                startColumn: f,
                endLineNumber: d,
                endColumn: m,
                message: K(
                  u.messageText,
                  `
`,
                ),
              });
            }),
            l
          );
        }
        _tsDiagnosticCategoryToMarkerSeverity(t) {
          switch (t) {
            case 1:
              return r.MarkerSeverity.Error;
            case 3:
              return r.MarkerSeverity.Info;
            case 0:
              return r.MarkerSeverity.Warning;
            case 2:
              return r.MarkerSeverity.Hint;
          }
          return r.MarkerSeverity.Info;
        }
      },
      v = class extends S {
        get triggerCharacters() {
          return ['.'];
        }
        async provideCompletionItems(e, t, i, l) {
          let u = e.getWordUntilPosition(t),
            g = new r.Range(
              t.lineNumber,
              u.startColumn,
              t.lineNumber,
              u.endColumn,
            ),
            p = e.uri,
            n = e.getOffsetAt(t),
            o = await this._worker(p);
          if (e.isDisposed()) return;
          let f = await o.getCompletionsAtPosition(p.toString(), n);
          return !f || e.isDisposed()
            ? void 0
            : {
                suggestions: f.entries.map((m) => {
                  let h = g;
                  if (m.replacementSpan) {
                    let C = e.getPositionAt(m.replacementSpan.start),
                      U = e.getPositionAt(
                        m.replacementSpan.start + m.replacementSpan.length,
                      );
                    h = new r.Range(
                      C.lineNumber,
                      C.column,
                      U.lineNumber,
                      U.column,
                    );
                  }
                  let k = [];
                  return (
                    m.kindModifiers !== void 0 &&
                      m.kindModifiers.indexOf('deprecated') !== -1 &&
                      k.push(r.languages.CompletionItemTag.Deprecated),
                    {
                      uri: p,
                      position: t,
                      offset: n,
                      range: h,
                      label: m.name,
                      insertText: m.name,
                      sortText: m.sortText,
                      kind: v.convertKind(m.kind),
                      tags: k,
                    }
                  );
                }),
              };
        }
        async resolveCompletionItem(e, t) {
          let i = e,
            l = i.uri,
            u = i.position,
            g = i.offset,
            n = await (
              await this._worker(l)
            ).getCompletionEntryDetails(l.toString(), g, i.label);
          return n
            ? {
                uri: l,
                position: u,
                label: n.name,
                kind: v.convertKind(n.kind),
                detail: x(n.displayParts),
                documentation: { value: v.createDocumentationString(n) },
              }
            : i;
        }
        static convertKind(e) {
          switch (e) {
            case c.primitiveType:
            case c.keyword:
              return r.languages.CompletionItemKind.Keyword;
            case c.variable:
            case c.localVariable:
              return r.languages.CompletionItemKind.Variable;
            case c.memberVariable:
            case c.memberGetAccessor:
            case c.memberSetAccessor:
              return r.languages.CompletionItemKind.Field;
            case c.function:
            case c.memberFunction:
            case c.constructSignature:
            case c.callSignature:
            case c.indexSignature:
              return r.languages.CompletionItemKind.Function;
            case c.enum:
              return r.languages.CompletionItemKind.Enum;
            case c.module:
              return r.languages.CompletionItemKind.Module;
            case c.class:
              return r.languages.CompletionItemKind.Class;
            case c.interface:
              return r.languages.CompletionItemKind.Interface;
            case c.warning:
              return r.languages.CompletionItemKind.File;
          }
          return r.languages.CompletionItemKind.Property;
        }
        static createDocumentationString(e) {
          let t = x(e.documentation);
          if (e.tags)
            for (let i of e.tags)
              t += `

${X(i)}`;
          return t;
        }
      };
    function X(s) {
      let e = `*@${s.name}*`;
      if (s.name === 'param' && s.text) {
        let [t, ...i] = s.text;
        (e += `\`${t.text}\``),
          i.length > 0 && (e += ` \u2014 ${i.map((l) => l.text).join(' ')}`);
      } else
        Array.isArray(s.text)
          ? (e += ` \u2014 ${s.text.map((t) => t.text).join(' ')}`)
          : s.text && (e += ` \u2014 ${s.text}`);
      return e;
    }
    var _ = class extends S {
        signatureHelpTriggerCharacters = ['(', ','];
        static _toSignatureHelpTriggerReason(e) {
          switch (e.triggerKind) {
            case r.languages.SignatureHelpTriggerKind.TriggerCharacter:
              return e.triggerCharacter
                ? e.isRetrigger
                  ? { kind: 'retrigger', triggerCharacter: e.triggerCharacter }
                  : {
                      kind: 'characterTyped',
                      triggerCharacter: e.triggerCharacter,
                    }
                : { kind: 'invoked' };
            case r.languages.SignatureHelpTriggerKind.ContentChange:
              return e.isRetrigger
                ? { kind: 'retrigger' }
                : { kind: 'invoked' };
            case r.languages.SignatureHelpTriggerKind.Invoke:
            default:
              return { kind: 'invoked' };
          }
        }
        async provideSignatureHelp(e, t, i, l) {
          let u = e.uri,
            g = e.getOffsetAt(t),
            p = await this._worker(u);
          if (e.isDisposed()) return;
          let n = await p.getSignatureHelpItems(u.toString(), g, {
            triggerReason: _._toSignatureHelpTriggerReason(l),
          });
          if (!n || e.isDisposed()) return;
          let o = {
            activeSignature: n.selectedItemIndex,
            activeParameter: n.argumentIndex,
            signatures: [],
          };
          return (
            n.items.forEach((f) => {
              let d = { label: '', parameters: [] };
              (d.documentation = { value: x(f.documentation) }),
                (d.label += x(f.prefixDisplayParts)),
                f.parameters.forEach((m, h, k) => {
                  let C = x(m.displayParts),
                    U = {
                      label: C,
                      documentation: { value: x(m.documentation) },
                    };
                  (d.label += C),
                    d.parameters.push(U),
                    h < k.length - 1 && (d.label += x(f.separatorDisplayParts));
                }),
                (d.label += x(f.suffixDisplayParts)),
                o.signatures.push(d);
            }),
            { value: o, dispose() {} }
          );
        }
      },
      F = class extends S {
        async provideHover(e, t, i) {
          let l = e.uri,
            u = e.getOffsetAt(t),
            g = await this._worker(l);
          if (e.isDisposed()) return;
          let p = await g.getQuickInfoAtPosition(l.toString(), u);
          if (!p || e.isDisposed()) return;
          let n = x(p.documentation),
            o = p.tags
              ? p.tags.map((d) => X(d)).join(`  

`)
              : '',
            f = x(p.displayParts);
          return {
            range: this._textSpanToRange(e, p.textSpan),
            contents: [
              { value: '```typescript\n' + f + '\n```\n' },
              {
                value:
                  n +
                  (o
                    ? `

` + o
                    : ''),
              },
            ],
          };
        }
      },
      L = class extends S {
        async provideDocumentHighlights(e, t, i) {
          let l = e.uri,
            u = e.getOffsetAt(t),
            g = await this._worker(l);
          if (e.isDisposed()) return;
          let p = await g.getOccurrencesAtPosition(l.toString(), u);
          if (!(!p || e.isDisposed()))
            return p.map((n) => ({
              range: this._textSpanToRange(e, n.textSpan),
              kind: n.isWriteAccess
                ? r.languages.DocumentHighlightKind.Write
                : r.languages.DocumentHighlightKind.Text,
            }));
        }
      },
      M = class extends S {
        constructor(t, i) {
          super(i);
          this._libFiles = t;
        }
        async provideDefinition(t, i, l) {
          let u = t.uri,
            g = t.getOffsetAt(i),
            p = await this._worker(u);
          if (t.isDisposed()) return;
          let n = await p.getDefinitionAtPosition(u.toString(), g);
          if (
            !n ||
            t.isDisposed() ||
            (await this._libFiles.fetchLibFilesIfNecessary(
              n.map((f) => r.Uri.parse(f.fileName)),
            ),
            t.isDisposed())
          )
            return;
          let o = [];
          for (let f of n) {
            let d = this._libFiles.getOrCreateModel(f.fileName);
            d &&
              o.push({
                uri: d.uri,
                range: this._textSpanToRange(d, f.textSpan),
              });
          }
          return o;
        }
      },
      A = class extends S {
        constructor(t, i) {
          super(i);
          this._libFiles = t;
        }
        async provideReferences(t, i, l, u) {
          let g = t.uri,
            p = t.getOffsetAt(i),
            n = await this._worker(g);
          if (t.isDisposed()) return;
          let o = await n.getReferencesAtPosition(g.toString(), p);
          if (
            !o ||
            t.isDisposed() ||
            (await this._libFiles.fetchLibFilesIfNecessary(
              o.map((d) => r.Uri.parse(d.fileName)),
            ),
            t.isDisposed())
          )
            return;
          let f = [];
          for (let d of o) {
            let m = this._libFiles.getOrCreateModel(d.fileName);
            m &&
              f.push({
                uri: m.uri,
                range: this._textSpanToRange(m, d.textSpan),
              });
          }
          return f;
        }
      },
      O = class extends S {
        async provideDocumentSymbols(e, t) {
          let i = e.uri,
            l = await this._worker(i);
          if (e.isDisposed()) return;
          let u = await l.getNavigationBarItems(i.toString());
          if (!u || e.isDisposed()) return;
          let g = (n, o, f) => {
              let d = {
                name: o.text,
                detail: '',
                kind: y[o.kind] || r.languages.SymbolKind.Variable,
                range: this._textSpanToRange(e, o.spans[0]),
                selectionRange: this._textSpanToRange(e, o.spans[0]),
                tags: [],
              };
              if (
                (f && (d.containerName = f),
                o.childItems && o.childItems.length > 0)
              )
                for (let m of o.childItems) g(n, m, d.name);
              n.push(d);
            },
            p = [];
          return u.forEach((n) => g(p, n)), p;
        }
      },
      c = class {};
    b(c, 'unknown', ''),
      b(c, 'keyword', 'keyword'),
      b(c, 'script', 'script'),
      b(c, 'module', 'module'),
      b(c, 'class', 'class'),
      b(c, 'interface', 'interface'),
      b(c, 'type', 'type'),
      b(c, 'enum', 'enum'),
      b(c, 'variable', 'var'),
      b(c, 'localVariable', 'local var'),
      b(c, 'function', 'function'),
      b(c, 'localFunction', 'local function'),
      b(c, 'memberFunction', 'method'),
      b(c, 'memberGetAccessor', 'getter'),
      b(c, 'memberSetAccessor', 'setter'),
      b(c, 'memberVariable', 'property'),
      b(c, 'constructorImplementation', 'constructor'),
      b(c, 'callSignature', 'call'),
      b(c, 'indexSignature', 'index'),
      b(c, 'constructSignature', 'construct'),
      b(c, 'parameter', 'parameter'),
      b(c, 'typeParameter', 'type parameter'),
      b(c, 'primitiveType', 'primitive type'),
      b(c, 'label', 'label'),
      b(c, 'alias', 'alias'),
      b(c, 'const', 'const'),
      b(c, 'let', 'let'),
      b(c, 'warning', 'warning');
    var y = Object.create(null);
    y[c.module] = r.languages.SymbolKind.Module;
    y[c.class] = r.languages.SymbolKind.Class;
    y[c.enum] = r.languages.SymbolKind.Enum;
    y[c.interface] = r.languages.SymbolKind.Interface;
    y[c.memberFunction] = r.languages.SymbolKind.Method;
    y[c.memberVariable] = r.languages.SymbolKind.Property;
    y[c.memberGetAccessor] = r.languages.SymbolKind.Property;
    y[c.memberSetAccessor] = r.languages.SymbolKind.Property;
    y[c.variable] = r.languages.SymbolKind.Variable;
    y[c.const] = r.languages.SymbolKind.Variable;
    y[c.localVariable] = r.languages.SymbolKind.Variable;
    y[c.variable] = r.languages.SymbolKind.Variable;
    y[c.function] = r.languages.SymbolKind.Function;
    y[c.localFunction] = r.languages.SymbolKind.Function;
    var w = class extends S {
        static _convertOptions(e) {
          return {
            ConvertTabsToSpaces: e.insertSpaces,
            TabSize: e.tabSize,
            IndentSize: e.tabSize,
            IndentStyle: 2,
            NewLineCharacter: `
`,
            InsertSpaceAfterCommaDelimiter: !0,
            InsertSpaceAfterSemicolonInForStatements: !0,
            InsertSpaceBeforeAndAfterBinaryOperators: !0,
            InsertSpaceAfterKeywordsInControlFlowStatements: !0,
            InsertSpaceAfterFunctionKeywordForAnonymousFunctions: !0,
            InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: !1,
            InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: !1,
            InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: !1,
            PlaceOpenBraceOnNewLineForControlBlocks: !1,
            PlaceOpenBraceOnNewLineForFunctions: !1,
          };
        }
        _convertTextChanges(e, t) {
          return { text: t.newText, range: this._textSpanToRange(e, t.span) };
        }
      },
      R = class extends w {
        async provideDocumentRangeFormattingEdits(e, t, i, l) {
          let u = e.uri,
            g = e.getOffsetAt({
              lineNumber: t.startLineNumber,
              column: t.startColumn,
            }),
            p = e.getOffsetAt({
              lineNumber: t.endLineNumber,
              column: t.endColumn,
            }),
            n = await this._worker(u);
          if (e.isDisposed()) return;
          let o = await n.getFormattingEditsForRange(
            u.toString(),
            g,
            p,
            w._convertOptions(i),
          );
          if (!(!o || e.isDisposed()))
            return o.map((f) => this._convertTextChanges(e, f));
        }
      },
      E = class extends w {
        get autoFormatTriggerCharacters() {
          return [
            ';',
            '}',
            `
`,
          ];
        }
        async provideOnTypeFormattingEdits(e, t, i, l, u) {
          let g = e.uri,
            p = e.getOffsetAt(t),
            n = await this._worker(g);
          if (e.isDisposed()) return;
          let o = await n.getFormattingEditsAfterKeystroke(
            g.toString(),
            p,
            i,
            w._convertOptions(l),
          );
          if (!(!o || e.isDisposed()))
            return o.map((f) => this._convertTextChanges(e, f));
        }
      },
      N = class extends w {
        async provideCodeActions(e, t, i, l) {
          let u = e.uri,
            g = e.getOffsetAt({
              lineNumber: t.startLineNumber,
              column: t.startColumn,
            }),
            p = e.getOffsetAt({
              lineNumber: t.endLineNumber,
              column: t.endColumn,
            }),
            n = w._convertOptions(e.getOptions()),
            o = i.markers
              .filter((h) => h.code)
              .map((h) => h.code)
              .map(Number),
            f = await this._worker(u);
          if (e.isDisposed()) return;
          let d = await f.getCodeFixesAtPosition(u.toString(), g, p, o, n);
          return !d || e.isDisposed()
            ? { actions: [], dispose: () => {} }
            : {
                actions: d
                  .filter(
                    (h) => h.changes.filter((k) => k.isNewFile).length === 0,
                  )
                  .map((h) => this._tsCodeFixActionToMonacoCodeAction(e, i, h)),
                dispose: () => {},
              };
        }
        _tsCodeFixActionToMonacoCodeAction(e, t, i) {
          let l = [];
          for (let g of i.changes)
            for (let p of g.textChanges)
              l.push({
                resource: e.uri,
                versionId: void 0,
                textEdit: {
                  range: this._textSpanToRange(e, p.span),
                  text: p.newText,
                },
              });
          return {
            title: i.description,
            edit: { edits: l },
            diagnostics: t.markers,
            kind: 'quickfix',
          };
        }
      },
      W = class extends S {
        constructor(t, i) {
          super(i);
          this._libFiles = t;
        }
        async provideRenameEdits(t, i, l, u) {
          let g = t.uri,
            p = g.toString(),
            n = t.getOffsetAt(i),
            o = await this._worker(g);
          if (t.isDisposed()) return;
          let f = await o.getRenameInfo(p, n, { allowRenameOfImportPath: !1 });
          if (f.canRename === !1)
            return { edits: [], rejectReason: f.localizedErrorMessage };
          if (f.fileToRename !== void 0)
            throw new Error('Renaming files is not supported.');
          let d = await o.findRenameLocations(p, n, !1, !1, !1);
          if (!d || t.isDisposed()) return;
          let m = [];
          for (let h of d) {
            let k = this._libFiles.getOrCreateModel(h.fileName);
            if (k)
              m.push({
                resource: k.uri,
                versionId: void 0,
                textEdit: {
                  range: this._textSpanToRange(k, h.textSpan),
                  text: l,
                },
              });
            else throw new Error(`Unknown file ${h.fileName}.`);
          }
          return { edits: m };
        }
      },
      H = class extends S {
        async provideInlayHints(e, t, i) {
          let l = e.uri,
            u = l.toString(),
            g = e.getOffsetAt({
              lineNumber: t.startLineNumber,
              column: t.startColumn,
            }),
            p = e.getOffsetAt({
              lineNumber: t.endLineNumber,
              column: t.endColumn,
            }),
            n = await this._worker(l);
          return e.isDisposed()
            ? null
            : {
                hints: (await n.provideInlayHints(u, g, p)).map((d) => ({
                  ...d,
                  label: d.text,
                  position: e.getPositionAt(d.position),
                  kind: this._convertHintKind(d.kind),
                })),
                dispose: () => {},
              };
        }
        _convertHintKind(e) {
          switch (e) {
            case 'Parameter':
              return r.languages.InlayHintKind.Parameter;
            case 'Type':
              return r.languages.InlayHintKind.Type;
            default:
              return r.languages.InlayHintKind.Type;
          }
        }
      };
    var B, j;
    function ge(s) {
      j = Y(s, 'typescript');
    }
    function pe(s) {
      B = Y(s, 'javascript');
    }
    function de() {
      return new Promise((s, e) => {
        if (!B) return e('JavaScript not registered!');
        s(B);
      });
    }
    function fe() {
      return new Promise((s, e) => {
        if (!j) return e('TypeScript not registered!');
        s(j);
      });
    }
    function Y(s, e) {
      let t = [],
        i = [],
        l = new T(e, s);
      t.push(l);
      let u = (...n) => l.getLanguageServiceWorker(...n),
        g = new P(u);
      function p() {
        let { modeConfiguration: n } = s;
        Z(i),
          n.completionItems &&
            i.push(r.languages.registerCompletionItemProvider(e, new v(u))),
          n.signatureHelp &&
            i.push(r.languages.registerSignatureHelpProvider(e, new _(u))),
          n.hovers && i.push(r.languages.registerHoverProvider(e, new F(u))),
          n.documentHighlights &&
            i.push(r.languages.registerDocumentHighlightProvider(e, new L(u))),
          n.definitions &&
            i.push(r.languages.registerDefinitionProvider(e, new M(g, u))),
          n.references &&
            i.push(r.languages.registerReferenceProvider(e, new A(g, u))),
          n.documentSymbols &&
            i.push(r.languages.registerDocumentSymbolProvider(e, new O(u))),
          n.rename &&
            i.push(r.languages.registerRenameProvider(e, new W(g, u))),
          n.documentRangeFormattingEdits &&
            i.push(
              r.languages.registerDocumentRangeFormattingEditProvider(
                e,
                new R(u),
              ),
            ),
          n.onTypeFormattingEdits &&
            i.push(
              r.languages.registerOnTypeFormattingEditProvider(e, new E(u)),
            ),
          n.codeActions &&
            i.push(r.languages.registerCodeActionProvider(e, new N(u))),
          n.inlayHints &&
            i.push(r.languages.registerInlayHintsProvider(e, new H(u))),
          n.diagnostics && i.push(new D(g, s, e, u));
      }
      return p(), t.push(me(i)), u;
    }
    function me(s) {
      return { dispose: () => Z(s) };
    }
    function Z(s) {
      for (; s.length; ) s.pop().dispose();
    }
    return le(be);
  })();
  return moduleExports;
});
