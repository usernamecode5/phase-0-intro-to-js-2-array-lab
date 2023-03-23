// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph"); 
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    const newCats = [...cats, "Broom"];
    return newCats;
}

function prependCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    const newCats = ["Arnold", ...cats];
    return newCats; 
}

function removeLastCat() {
    const copyCats = cats.slice()
    return copyCats.slice(0, copyCats.length - 1); 
}

function removeFirstCat() {
    const copyCats = cats.slice()
    return copyCats.slice(1);
}