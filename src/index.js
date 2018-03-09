module.exports = function longestConsecutiveLength(array) {

    let count = 0;
    let start = 1;

    if (array.length < 2) {
        return array;
    }

    array = array.sort((a, b) => a - b);

    for (let i = 0; i < array.length; i++) {
        if (array[i] + 1 === array [i + 1]) {
            start++
        } else if (array[i] !== array[i + 1]) {
            count = Math.max(count, start);
            start = 1;
        }

    }
    return count;

};
