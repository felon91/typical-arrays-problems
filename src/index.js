exports.min = function min(array) {
    if (!array || array.length === 0) return 0;
    return array.reduce((prev, item) => {
        return (prev > item) ? item : prev;
    });
}

exports.max = function max(array) {
    if (!array || array.length === 0) return 0;
    return array.reduce((prev, item) => {
        return (prev > item) ? prev : item;
    });
}

exports.avg = function avg(array) {
    if (!array || array.length === 0) return 0;
    return array.reduce((prev, item) => {
        return prev += item;
    }) / array.length;
}
