// Exercice 9 – Promise simple
const p = new Promise((resolve) => {
    setTimeout(() => resolve("Opération terminée !"), 2000);
});
p.then(result => console.log(result));

// Exercice 10 – async/await (fetch)
async function getUsers() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        console.log("Users récupérés :", data);
    } catch (e) {
        console.error("Erreur :", e.message);
    }
}

getUsers();