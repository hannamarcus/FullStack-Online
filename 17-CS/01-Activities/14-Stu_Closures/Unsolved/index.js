// TODO: Complete the 'counter' function below.
function counter() {}
    let count;
    return function() {
        return count++;
    }

console.log(counter);

module.exports = counter;
