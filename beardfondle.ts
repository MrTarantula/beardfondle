declare global {
    interface String {
        /**
         * Converts string into string representation of beardfondle 'encoding'
         */
        beard: () => string;
        /**
         * Converts 'encoded' symbols back to a string
         */
        fondle: () => string;
    }
}

String.prototype.beard = function (): string {
    let builder: string = '';
    for (let i = 0, len = this.length; i < len; i++) {
        if (symbols[this[i]]) {
            builder += symbols[this[i]];
            if (i !== len - 1) {
                builder += '+';
            }
        } else {
            throw 'Bad character somewhere';
        }
    }
    return builder;
};

String.prototype.fondle = function (): string {
    const acceptable = '!+({[:]})';
    for (let i = 0, len = this.length; i < len; i++) {
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
export const symbols: { [s: string]: string; } = {
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