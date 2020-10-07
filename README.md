# random_lib

A tiny Javascript library for generate any random stuffs. It focus on how to quickly pick a random enough stuff without caring too much about correct probabilities or etc..xD

## Installations:

* Run `npm install rand-lib` to install from NPM.
* Usage:
  ```javascript
  var rand = require('rand-lib');
  rand.string(12); //[]2Sf1aLt'/4
  rand.string(12, { number:true, lower:true}); //mwzj338km816
  ```

## Features:

1. **Basic functions**:

* `fromTo(f,t)`: pick a random number from "f" to "t".
* `pickIn(arr)`: pick a random element in an array.
* `inRanges(arr)`: pick a random number in a number of given ranges.
  E.g: `rand.inRanges([[1,5],[7,15]])` give a random number between (1,5) and between (7,15)
* `rand.give(arr).<func>()`: prepare your custom set/array and give you ability to chaining next with `pick()` and `shuffle()`.
  E.g: `rand.give(['rock','paper','scissor']).pick();`
  `rand.give([2,4,5,6,7]).shuffle();`

2. **Numbers**:

* Currently support random integer up to 32-bit with signed/unsigned type.E.g:
  - `rand.int8()` / `rand.uint8()`
  - `rand.int16()` / `rand.uint16()`

3. **Characters**:

* `char()`: generate a random character
* `digit()`: generate a random digit number from 0-9
* `specialChar()`:
* `letter()`: generate a random character from a-z, can be capital or not
* `upperLetter()`: no need to explain
* `lowerLetter()`: same above
* `string(length,option)`: generate a random string with customize option
  ```json
  {
    "number": true,
    "lower": true,
    "upper": true,
    "special": true
  }
  ```

4. **Misclaneous**:

* `uuid()`: return a random UUID (v4).
* `color()`: return hexadecimal code of a random color
* `contrastColor(hexcolor)`: return a random color which is contrast to given color. It's useful when you need to generate a pair of background/foreground color or a set of color scheme for charts.
* `card(mode)`: pick a random card in a deck.
  * `mode`:
    + `long`: *default* - "Spade", "Heart", "Diamond", "Club"

