(function () {
    var root = this;
    var previousrand = root.rand;
    var rand = function (obj) {
        if (obj instanceof rand) return obj;
        if (!(this instanceof rand)) return new rand(obj);
        this.randwrapped = obj;
    };
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = rand;
        }
        exports.rand = rand;
    } else {
        root.rand = rand;
    }
    rand.VERSION = '1.0.0';

    /**
     * =================================================
     **/
    /**
    Generate random number from multi specific ranges.
    E.g: pick a random num which is between 0-30 and 50-70: rand.inRanges([[0,30],[50,70]])
    **/
    rand.fromTo = function (from, to) {
        return Math.floor(Math.random() * (to - from + 1)) + from;
    };
    rand.pickIn = function (array) {
        if (array == null || array.length == 0) return;
        return array[rand.fromTo(0, array.length - 1)];
    };
    /**
    Generate random number from multi specific ranges.
    E.g: pick a random num which is between 0-30 and 50-70: rand.inRanges([[0,30],[50,70]])
    **/
    rand.inRanges = function (arr) {
        var final_arr = [];
        for (var i = 0; i <= arr.length - 1; i++) {
            final_arr.push(rand.fromTo(arr[i][0], arr[i][1]));
        }
        return rand.pickIn(final_arr);
    };
    rand.color = function () {
        var a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        var rs = [];
        for (var i = 1; i <= 6; i++) {
            rs.push(rand.pickIn(a));
        }
        return "#" + rs.join('');
    };
    rand.digit = function () {
        return rand.fromTo(0, 9);
    }
    rand.char = function (opt) {
        var pre_select = [];
        if (!opt) {
            return String.fromCharCode(rand.fromTo(33, 126));
        } else {
            if (opt.number === true) {
                pre_select.push(rand.digit());
            }
            if (opt.lower === true) {
                pre_select.push(rand.lowerLetter());
            }
            if (opt.upper === true) {
                pre_select.push(rand.upperLetter());
            }
            if (opt.special === true) {
                pre_select.push(rand.specialChar());
            }
            if (pre_select.length > 0) {
                return rand.pickIn(pre_select);
            } else {
                return null;
            }
        }

    };
    rand.specialChar = function () {
        var code = rand.inRanges([
            [33, 47],
            [58, 64],
            [91, 96],
            [123, 126]
        ]);
        return String.fromCharCode(code);
    };
    rand.letter = function () {
        var code = rand.inRanges([
            [65, 90],
            [97, 122]
        ]);
        return String.fromCharCode(code);
    };
    rand.upperLetter = function () {
        var code = rand.fromTo(65, 90);
        return String.fromCharCode(code);
    };
    rand.lowerLetter = function () {
        var code = rand.fromTo(97, 122);
        return String.fromCharCode(code);
    };
    rand.string = function (length, opt) {
        var def_opt = {
            number: true,
            lower: true,
            upper: true,
            special: true
        };
        var option = opt || def_opt;

        var rs = [];
        for (var i = 1; i <= length; i++) {
            rs.push(rand.char(option));
        }
        return rs.join('');
    };
    /**
     * mode:["long","short","symbol"]
     */
    rand.card = function (mode) { //Need implements for Joker and Black/Red
        var num = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        var type = mode == "short" ? ["S", "H", "D", "C"] : (mode == "symbol" ? ["♠", "♥", "♦", "♣"] : ["Spade", "Heart", "Diamond", "Club"]);
        return rand.pickIn(num) + (mode != "symbol" ? "." : "") + rand.pickIn(type);
    };
    /**
     * =================================================
     **/
    if (typeof define === 'function' && define.amd) {
        define('rand', [], function () {
            return rand;
        });
    }
}.call(this));