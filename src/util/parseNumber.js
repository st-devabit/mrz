'use strict';

module.exports = function parseNumber(source) {
    var result={
        error: [],
        source
    };
    if (! source.match(/^[0-9]+$/)) {
        result.error.push('It may only be composed of numbers');
    }

    return result;
};