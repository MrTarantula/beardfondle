"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.beard = function () {
    var builder = '';
    for (var i = 0, len = this.length; i < len; i++) {
        if (exports.symbols[this[i]]) {
            builder += exports.symbols[this[i]];
            if (i !== len - 1) {
                builder += '+';
            }
        }
        else {
            throw 'Bad character somewhere';
        }
    }
    return builder;
};
String.prototype.fondle = function () {
    var acceptable = '!+({[:]})';
    for (var i = 0, len = this.length; i < len; i++) {
        if (acceptable.indexOf(this[i]) < 0) {
            throw 'Bad character somewhere';
        }
    }
    // tslint:disable-next-line:no-eval
    return eval('(' + this + ')');
};
/**
 * Representation of characters supported by beardfondle
 */
exports.symbols = {
    'a': '(![]+[])[+!+[]]',
    'b': '({}+[])[!+[]+!+[]]',
    'c': '({}+[])[!+[]+!+[]+!+[]+!+[]+!+[]]',
    'd': '([][[]]+[])[+!+[]+!+[]]',
    'e': '(!![]+[])[!+[]+!+[]+!+[]]',
    'f': '(![]+[])[+[]]',
    'j': '({}+[])[!+[]+!+[]+!+[]]',
    'i': '([][[]]+[])[+!+[]+!+[]+!+[]+!+[]+!+[]]',
    'l': '(![]+[])[!+[]+!+[]]',
    'n': '([][[]]+[])[+!+[]]',
    'N': '(+{}+[])[+[]]',
    'o': '({}+[])[+!+[]]',
    'O': '({}+[])[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]',
    'r': '(!![]+[])[+!+[]]',
    's': '(![]+[])[!+[]+!+[]+!+[]]',
    't': '(!![]+[])[+[]]',
    'u': '(!![]+[])[!+[]+!+[]]',
    '0': '[+[]]',
    '1': '[+!+[]]',
    '2': '[+!+[]+!+[]]',
    '3': '[+!+[]+!+[]+!+[]]',
    '4': '[+!+[]+!+[]+!+[]+!+[]]',
    '5': '[+!+[]+!+[]+!+[]+!+[]+!+[]]',
    '6': '[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]',
    '7': '[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]',
    '8': '[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]',
    '9': '[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]',
    ' ': '({}+[])[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]',
    '[': '({}+[])[+[]]',
    ']': '({}+[])[+!+[]+[+!+[]+!+[]+!+[]+!+[]]]'
};
//# sourceMappingURL=beardfondle.js.map