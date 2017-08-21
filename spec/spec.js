var bf = require('../index');

describe('beard', function () {
    it('should convert string to craziness', function () {
        expect('aa'.beard()).toEqual(bf.symbols.a + '+' + bf.symbols.a);
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
    it('should convert back to string', function () {
        expect(bf.symbols.a.fondle()).toEqual('a');
    });

    it('should not allow for malicious use of eval()', function () {
        expect(function () {
            'console.log("You should not see me!")'.fondle();
        }).toThrow('Bad character somewhere');
    });
});