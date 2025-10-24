
const nums = [1, 2, 3, 4, 5];

console.log(nums.map(n => n * 2));         

console.log(nums.filter(n => n % 2 === 0)); 


console.log(nums.reduce((sum, n) => sum + n, 0)); 
// Exercice 7 - Méthodes find, some, every
console.log(nums.find(n => n > 3));    
console.log(nums.some(n => n < 0));    
console.log(nums.every(n => n > 0));   
