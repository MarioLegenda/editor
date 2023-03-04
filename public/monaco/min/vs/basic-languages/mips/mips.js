'use strict';
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.36.1(6c56744c3419458f0dd48864520b759d1a3a1ca8)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
define('vs/basic-languages/mips/mips', ['require', 'require'], (require) => {
  var moduleExports = (() => {
    var s = Object.defineProperty;
    var a = Object.getOwnPropertyDescriptor;
    var o = Object.getOwnPropertyNames;
    var g = Object.prototype.hasOwnProperty;
    var l = (t, e) => {
        for (var n in e) s(t, n, { get: e[n], enumerable: !0 });
      },
      d = (t, e, n, i) => {
        if ((e && typeof e == 'object') || typeof e == 'function')
          for (let r of o(e))
            !g.call(t, r) &&
              r !== n &&
              s(t, r, {
                get: () => e[r],
                enumerable: !(i = a(e, r)) || i.enumerable,
              });
        return t;
      };
    var m = (t) => d(s({}, '__esModule', { value: !0 }), t);
    var x = {};
    l(x, { conf: () => p, language: () => u });
    var p = {
        wordPattern:
          /(-?\d*\.\d\w*)|([^\`\~\!\@\#%\^\&\*\(\)\=\$\-\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
        comments: { blockComment: ['###', '###'], lineComment: '#' },
        folding: {
          markers: {
            start: new RegExp('^\\s*#region\\b'),
            end: new RegExp('^\\s*#endregion\\b'),
          },
        },
      },
      u = {
        defaultToken: '',
        ignoreCase: !1,
        tokenPostfix: '.mips',
        regEx: /\/(?!\/\/)(?:[^\/\\]|\\.)*\/[igm]*/,
        keywords: [
          '.data',
          '.text',
          'syscall',
          'trap',
          'add',
          'addu',
          'addi',
          'addiu',
          'and',
          'andi',
          'div',
          'divu',
          'mult',
          'multu',
          'nor',
          'or',
          'ori',
          'sll',
          'slv',
          'sra',
          'srav',
          'srl',
          'srlv',
          'sub',
          'subu',
          'xor',
          'xori',
          'lhi',
          'lho',
          'lhi',
          'llo',
          'slt',
          'slti',
          'sltu',
          'sltiu',
          'beq',
          'bgtz',
          'blez',
          'bne',
          'j',
          'jal',
          'jalr',
          'jr',
          'lb',
          'lbu',
          'lh',
          'lhu',
          'lw',
          'li',
          'la',
          'sb',
          'sh',
          'sw',
          'mfhi',
          'mflo',
          'mthi',
          'mtlo',
          'move',
        ],
        symbols: /[\.,\:]+/,
        escapes:
          /\\(?:[abfnrtv\\"'$]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
        tokenizer: {
          root: [
            [/\$[a-zA-Z_]\w*/, 'variable.predefined'],
            [
              /[.a-zA-Z_]\w*/,
              {
                cases: {
                  this: 'variable.predefined',
                  '@keywords': { token: 'keyword.$0' },
                  '@default': '',
                },
              },
            ],
            [/[ \t\r\n]+/, ''],
            [/#.*$/, 'comment'],
            ['///', { token: 'regexp', next: '@hereregexp' }],
            [/^(\s*)(@regEx)/, ['', 'regexp']],
            [/(\,)(\s*)(@regEx)/, ['delimiter', '', 'regexp']],
            [/(\:)(\s*)(@regEx)/, ['delimiter', '', 'regexp']],
            [/@symbols/, 'delimiter'],
            [/\d+[eE]([\-+]?\d+)?/, 'number.float'],
            [/\d+\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/0[xX][0-9a-fA-F]+/, 'number.hex'],
            [/0[0-7]+(?!\d)/, 'number.octal'],
            [/\d+/, 'number'],
            [/[,.]/, 'delimiter'],
            [/"""/, 'string', '@herestring."""'],
            [/'''/, 'string', "@herestring.'''"],
            [
              /"/,
              {
                cases: {
                  '@eos': 'string',
                  '@default': { token: 'string', next: '@string."' },
                },
              },
            ],
            [
              /'/,
              {
                cases: {
                  '@eos': 'string',
                  '@default': { token: 'string', next: "@string.'" },
                },
              },
            ],
          ],
          string: [
            [/[^"'\#\\]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\./, 'string.escape.invalid'],
            [/\./, 'string.escape.invalid'],
            [
              /#{/,
              {
                cases: {
                  '$S2=="': {
                    token: 'string',
                    next: 'root.interpolatedstring',
                  },
                  '@default': 'string',
                },
              },
            ],
            [
              /["']/,
              {
                cases: {
                  '$#==$S2': { token: 'string', next: '@pop' },
                  '@default': 'string',
                },
              },
            ],
            [/#/, 'string'],
          ],
          herestring: [
            [
              /("""|''')/,
              {
                cases: {
                  '$1==$S2': { token: 'string', next: '@pop' },
                  '@default': 'string',
                },
              },
            ],
            [/[^#\\'"]+/, 'string'],
            [/['"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\./, 'string.escape.invalid'],
            [/#{/, { token: 'string.quote', next: 'root.interpolatedstring' }],
            [/#/, 'string'],
          ],
          comment: [
            [/[^#]+/, 'comment'],
            [/#/, 'comment'],
          ],
          hereregexp: [
            [/[^\\\/#]+/, 'regexp'],
            [/\\./, 'regexp'],
            [/#.*$/, 'comment'],
            ['///[igm]*', { token: 'regexp', next: '@pop' }],
            [/\//, 'regexp'],
          ],
        },
      };
    return m(x);
  })();
  return moduleExports;
});
