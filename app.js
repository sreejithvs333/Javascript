//taking reference of form & grid content div
let humanDataForm = document.getElementById('dino-compare');
let gridContentContainer = document.getElementById('grid');
// Parent Animal class
class Animal {
    constructor(height, weight, diet) {
        this.height = height;
        this.weight = weight;
        this.diet = diet;
    }
    getHeight() {
        return this.height;
    }
    getWeight() {
        return this.weight;
    }
    getDiet() {
        return this.diet;
    }
}
// Child Dino class
class Dino extends Animal {
    constructor(height, weight, diet, species, where, when, fact) {
        super(height, weight, diet);
        this.species = species;
        this.where = where;
        this.when = when;
        this.fact = fact;
    }
    getSpecies() {
        return this.species;
    }

    getHeightComparisonResult() {
        compareHeight().call(this);
    }

    getRandomFact() {
        //TODO: return random fact here
        return "sample fact";
    }

    getHTMLContent() {
        return `<div class="grid-item"> <h3>${this.species}</h3> <img src="./images/${this.species}.png" alt="dino image"> <p>${this.getRandomFact()}</p> </div>`;
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
    dinoArray = data.Dinos.map((dino) => {
        return new Dino(dino.height, dino.weight, dino.diet, dino.species, dino.where, dino.when, dino.fact);
    });
    console.log(dinoArray);
}).catch(error => {
    console.log(error);
});

// Child Human class
class Human extends Animal {
    constructor(name, height, weight, diet) {
        super(height, weight, diet);
        this.name = name;
    }
    getName() {
        return this.name;
    }

    getHTMLContent() {
        return `<div class="grid-item"> <h3>${this.name}</h3> <img src="./images/human.png" alt="dino image"> </div>`;
    }
}
// Use IIFE to get human data from form
let HumanData = (function () {
    let name = document.getElementById("name");
    let heightInFeet = document.getElementById("feet");
    let heightInInches = document.getElementById("inches");
    let weight = document.getElementById("weight");
    let diet = document.getElementById("diet");

    function getName() {
        if (!name || !name.value || name.value === "") {
            throw new Error("Name filed can not be empty!");
        }
        return name.value;
    }
    function getHeight() {
        if (!heightInFeet
            || !heightInInches
            || !heightInFeet.value
            || !heightInInches.value
            || heightInFeet.value === ""
            || !heightInInches.value === ""
        ) {
            throw new Error("Height fileds can not be empty!");
        }
        return getHeightInInches(heightInFeet.value, heightInInches.value);
    }
    function getWeight() {
        if (!weight || !weight.value || weight.value === "") {
            throw new Error("Weight filed can not be empty!");
        }
        return weight.value;
    }
    function getDiet() {
        if (!diet || !diet.value || diet.value === "") {
            throw new Error("Diet filed can not be empty!");
        }
        return diet.value;
    }
    return {
        getName: getName,
        getHeight: getHeight,
        getWeight: getWeight,
        getDiet: getDiet
    }
})();

function getHeightInInches(feet, inches) {
    return (feet * 12) + inches;
}

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 
function compareHeight() {
    if (HumanData.getHeight() < this.getHeight()) {
        console.log(`${this.getSpecies()} is taller than you!`);
    } else if (HumanData.getHeight() === this.getHeight()) {
        console.log(`You and ${this.getSpecies()} have same height!`);
    } else {
        console.log(`You are taller than ${this.getSpecies()}!`);
    }
}

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.


// Generate Tiles for each Dino in Array
function buildUI(human) {
    let completeArray = [...dinoArray];
    // Reference: https://stackoverflow.com/questions/586182/how-to-insert-an-item-into-an-array-at-a-specific-index-javascript
    
    completeArray.splice(4, 0, human);
    console.log(completeArray);
    //TODO: Build and append complete UI for grid here
    let completeHTML = "";
    completeArray.map(function (gridItem) {
        completeHTML += gridItem.getHTMLContent();
    });
    //TODO: remove log
    console.log(completeHTML);
    hideFormAndShowGrid();
    appendHTMLContent(completeHTML);
}
// Add tiles to DOM
function appendHTMLContent(htmlContent) {
    gridContentContainer.innerHTML = htmlContent;
}
// Remove form from screen
function hideFormAndShowGrid(){
    humanDataForm.style.display = "none";
    gridContentContainer.style.display = "flex";
}

// On button click, prepare and display infographic
const button = document.getElementById('btn');
button.addEventListener("click", function (event) {
    console.log("button clicked!");
    try {
        let human = new Human(HumanData.getName(), HumanData.getHeight(), HumanData.getWeight(), HumanData.getDiet());
        buildUI(human);
    } catch (error) {
        alert(error.message);
    }
    //TODO: Hide form & display grid

});

