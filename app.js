// Parent Animal class
class Animal {
    constructor(name, height, weight, diet) {
        this.name = name;
        this.name = height;
        this.weight = weight;
        this.diet = diet;
    }
    getName() {
        return this.name;
    }
}
// Child Dino class
class Dino extends Animal {
    constructor(name, height, weight, diet, species, where, when, fact) {
        super(name, height, weight, diet);
        this.species = species;
        this.where = where;
        this.when = when;
        this.fact = fact;
    }
}
// Create Dino Objects
let dinoArray = [];
fetch("./dino.json").then(res => {
    if (res.ok) {
        return res.json()
    } else {
        throw new Error('Oops! Something went wrong! Please try again.');
    }
}).then(data => {
    //TODO: remove log
    console.log(data);
    dinoArray = [...data.Dinos];
    console.log(dinoArray);
}).catch(error => {
    console.log(error);
});

// Create Human Object
class Human extends Animal {
    constructor(name, height, weight, diet) {
        super(name, height, weight, diet);
    }
}
// Use IIFE to get human data from form
let HumanData = (function () {
    let name = document.getElementById("name");
    let height = document.getElementById("height");
    let weight = document.getElementById("weight");
    let diet = document.getElementById("diet");

    function getName() {
        if (!name || !name.value || name.value === "") {
            throw new Error("Name filed can not be empty!");
        }
        return name;
    }
    function getHeight() {
        if (!height || !height.value || height.value === "") {
            throw new Error("Height filed can not be empty!");
        }
        return height;
    }
    function getWeight() {
        if (!weight || !weight.value || weight.value === "") {
            throw new Error("Weight filed can not be empty!");
        }
        return weight;
    }
    function getDiet() {
        if (!diet || !diet.value || diet.value === "") {
            throw new Error("Diet filed can not be empty!");
        }
        return diet;
    }
    return {
        getName: getName,
        getHeight: getHeight,
        getWeight: getWeight,
        getDiet: getDiet
    }
})();

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 


// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.


// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen


// On button click, prepare and display infographic
const button = document.getElementById('btn');
button.addEventListener("click", function (event) {
    console.log("button clicked!");
    //TODO: Hide form & display grid
})