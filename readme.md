# beardfondle

Inspired by [WTFJS](https://github.com/denysdovhan/wtfjs). This library extends `String.prototype` to encode and decode strings.

## How to Use

```js
//JavaScript
var bf = require('beardfondle');

//TypeScript
import bf = require('beardfondle');

var foo = 'ocelot';
var bar = foo.beard();

console.log(bar);
// ({[{}]:{}}+[])[+!+[]]+({[{}]:{}}+[])[!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]]+({[{}]:{}}+[])[+!+[]]+(!![]+[])[+[]]

var baz = bar.fondle();

console.log(baz);
// ocelot

```

`String.fondle()` is not needed to decode the library. Just open any browser console and type `console.log((![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+({[{}]:{}}+[])[!+[]+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([![]]+[][[]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+({[{}]:{}}+[])[+!+[]])`. Through the magic of JavaScript you will get a string back.

**NOTE:** `String.fondle()` does not simply decode they symbols back to characters. The method is a wrapper for `eval()` with some basic checks to prevent malicious use. ***DO NOT USE THIS LIBRARY IN PRODUCTION. `eval()` IS ALMOST NEVER SAFE.*** 

The individual symbols can be accessed by importing the package and accessing the `symbols` object:

```js
var bf = require('beardfondle');

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

According to [WTFS](https://github.com/denysdovhan/wtfjs#its-a-fail):

> So we try adding `[]` to `false`. But due to a number of internal function calls (`binary + Operator` -> `ToPrimitive` -> `[[DefaultValue]]`) we end up > converting the right operand to a string:
> 
> ```js
> (![]+[].toString()) // 'false'
> ```
> 
> Thinking of a string as an array we can access its first character via `[0]`:
> 
> ```js
> 'false'[0] // -> 'f'
> ```

That's why only certain letters are supported. So far I've only figured out `true`, `false`, `undefined`, and `[object Object]`.

### Why did you make this?

Because I wanted to, and nobody else has yet.

### What's with the name?

It can be constructed using only this library.

```
({[{}]:{}}+[])[!+[]+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+(![]+[])[+[]]+({[{}]:{}}+[])[+!+[]]+([![]]+[][[]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([![]]+[][[]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]
```

I originally chose `(![]+[])[+[]]+(![]+[])[+!+[]]+(!![]+[])[+!+[]]+(!![]+[])[+[]]+({[{}]:{}}+[])[!+[]+!+[]+!+[]]+(!![]+[])[!+[]+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+({[{}]:{}}+[])[!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]` but ultimately decided against it.