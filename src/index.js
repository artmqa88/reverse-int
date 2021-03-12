module.exports = function reverseInt (n) {
    let reverseInt

    if (n < 0) {
        n = Math.abs(n);
        reverseInt = n.toString().split('').reverse().join('');
    }
    reverseInt = n.toString().split('').reverse().join('');
    return reverseInt;
}

