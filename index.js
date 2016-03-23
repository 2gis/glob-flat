var glob = require("glob");

exports.sync = function sync(arr) {
    var result = [];
    arr = flatten(arr);

    var i = -1;
    var len = arr.length;

    while (++i < len) {
        if (arr[i].indexOf('*') == -1) {
            result.push(arr[i]);
            continue;
        }

        result.push(glob.sync(arr[i]));
    }

    return unique(flatten(result));
};

function unique(arr) {
    var dict = {};
    var result = [];

    var i = -1, len = arr.length;
    while (++i < len) {
        if (dict[arr[i]]) {
            continue;
        }

        dict[arr[i]] = true;
        result.push(arr[i]);
    }

    return result;
}

function flatten(list, result) {
    if(!Array.isArray(list)) {
        return list;
    }

    var i = -1;
    var len = list.length;

    result || (result = []);

    while (++i < len) {
        if (!Array.isArray(list[i])) {
            result.push(list[i]);
            continue;
        }

        flatten(list[i], result);
    }

    return result;
}
