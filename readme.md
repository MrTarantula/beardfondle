# beardfondle

Inspired by [WTFJS](https://github.com/denysdovhan/wtfjs). This library extends `String.prototype` to encode and decode strings.

## How to Use

```js
var foo = 'ocelot';
var bar = foo.beard();

console.log(bar);
// ({[{}]:{}}+[])[+!+[]]+({[{}]:{}}+[])[!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]]+({[{}]:{}}+[])[+!+[]]+(!![]+[])[+[]]

var baz = bar.fondle();

console.log(baz);
// ocelot

```

The individual symbols can be accessed by importing the package and accessing the `symbols` object:

```js
var bf = require('../dist/index.min');

console.log(bf.symbols.a);
// (![]+[])[+!+[]]

console.log(bf.symbols[" "]);
// ({[{}]:{}}+[])[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]
```

Currently the only characters supported are:
```
a
b
c
d
e
f
j
i
l
n
o  (lower)
O  (upper)
r
s
t
u
0
1
2
3
4
5
6
7
8
9
   (space)
[
]
```

## FAQ

### How does it work?

#### TODO

That's why only certain letters are supported. So far I've only figured out `true`, `false`, `undefined`, and `[object Object]`.

### Why did you make this?

Because I wanted to, and nobody else has yet.

### What's with the name?

It can be constructed using only this library.

```
({[{}]:{}}+[])[!+[]+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+(![]+[])[+[]]+({[{}]:{}}+[])[+!+[]]+([![]]+[][[]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([![]]+[][[]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]
```

I originally chose `(![]+[])[+[]]+(![]+[])[+!+[]]+(!![]+[])[+!+[]]+(!![]+[])[+[]]+({[{}]:{}}+[])[!+[]+!+[]+!+[]]+(!![]+[])[!+[]+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+({[{}]:{}}+[])[!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]` but ultimately decided against it.