// Exercice 8 - Déstructuration d'objets
const user = { id: 1, name: "Ali", city: "Rabat" };

// Déstructuration simple
const { name, city } = user;
console.log(`${name} habite à ${city}`);   // "Ali habite à Rabat"

// Renommage et rest operator
const { name: fullName, ...rest } = user;
console.log(fullName);                     // "Ali"
console.log(rest);      