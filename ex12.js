const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log("Array with spread:", arr2);

function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
console.log("Sum with rest params:", sum(1, 2, 3, 4));
