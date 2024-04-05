"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var sortById = function (array, sortDirection) {
    return __spreadArray([], array, true).sort(function (a, b) {
        if (sortDirection === 'ascending')
            return a.id - b.id;
        if (sortDirection === 'descending')
            return b.id - a.id;
        return 0;
    });
};
var a = [
    { id: 1, name: 'Ivan' },
    { id: 110, name: 'Ivan2' },
    { id: 20, name: 'Ivan3' },
    { id: 2, name: 'Ivan4' },
    { id: 116, name: 'Ivan4' },
];
var b = sortById(a, 'descending');
console.log(sortById(a, 'ascending'));
