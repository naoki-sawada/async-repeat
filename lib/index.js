"use strict";
function repeat(callback, options) {
    return new Promise((resolve, reject) => {
        options = options || {};
        options.maxCount = options.maxCount || 10;
        options.delay = options.delay || 3000;
        options.defaultResult = options.defaultResult || null;
        const { maxCount, delay, defaultResult } = options;
        let count = 0;
        const intervalId = setInterval(() => {
            if (maxCount < count) {
                clearInterval(intervalId);
                resolve(defaultResult);
            }
            else {
                count++;
                callback(utils.resolve, utils);
            }
        }, delay);
        const utils = {
            checkCount: () => {
                return count <= maxCount;
            },
            reject: (err) => {
                clearInterval(intervalId);
                reject(err);
            },
            resolve: (data) => {
                clearInterval(intervalId);
                resolve(data);
            },
        };
    });
}
module.exports = repeat;
