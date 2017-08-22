var bf = require('../dist/beardfondle');

describe('beard', function () {
    it('should convert a single character', function () {
        expect('a'.beard()).toEqual(bf.symbols.a);
    });

    it('should convert all valid characters', function () {
        expect(Object.keys(bf.symbols).join('').beard()).toBe(Object.values(bf.symbols).join('+'));
    });

    it('should not convert bad letters', function () {
        expect(function () {
            'aaaaaaaaaqaaaaaaaaa'.beard();
        }).toThrow('Bad character somewhere');
    });
});

describe('fondle', function () {
    it('should convert a single letter back to a character', function () {
        expect(bf.symbols.a.fondle()).toBe('a');
    });

    it('should convert all encoded characters back to string', function () {
        expect(Object.values(bf.symbols).join('+').fondle()).toBe(Object.keys(bf.symbols).join(''));
    });

    it('should not allow any characters not supported by package', function () {
        expect(function () {
            'console.log("You should not see me!")'.fondle();
        }).toThrow('Bad character somewhere');
    });
});