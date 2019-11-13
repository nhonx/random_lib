# random_lib
 A tiny Javascript library for generate any random stuffs.
## Installations:
  * Run `npm install rand-lib` to install from NPM.
  * Usage:
    ```javascript
    var rand = require('rand-lib');
    rand.string(12); //[]2Sf1aLt'/4
    rand.string(12, { number:true, lower:true}); //mwzj338km816
    ```
## Features:
  1. Basic functions:
  * `fromTo(f,t)`: pick a random number from "f" to "t".
  * `pickIn(arr)`: pick a random element in an array.
  * `inRanges(arr)`: pick a random number in a number of given ranges.
    E.g: `rand.inRanges([[1,5],[7,15]])` give a random number between (1,5) and between (7,15)
  2. Characters:
  * `char()`: generate a random character
  * `digit()`: generate a random digit number from 0-9
  * `specialChar()`: 
  * `letter()`: generate a random character from a-z, can be capital or not
  * `upperLetter()`: no need to explain
  * `lowerLetter()`: same above
  * `string(length,option)`: generate a random string with customize option
    ```json
    {
      number: true,
      lower: true,
      upper: true,
      special: true
    }
    ```
  3. Misclaneous:
  * `color()`: return hexadecimal code of a random color
  * `card(mode)`: pick a random card in a deck
  
  
