    // Parent Animal constructor
    function Animal(name, height, weight, diet){
        this.name = name;
        this.name = height;
        this.weight = weight;
        this.diet = diet;
    }
    // Create Dino Constructor
    function Dino(name, height, weight, diet, species, where, when, fact){
        Animal.call(this, name, height, weight, diet);
        this.species = species;
        this.where = where;
        this.when = when;
        this.fact = fact;
    }
    // Create Dino Objects
    let dinoArray = [];
    fetch("./dino.json").then(res=>{
        if(res.ok) {
            return res.json()
        }else {
            throw new Error('Oops! Something went wrong! Please try again.');
        }
    }).then(data=>{
        //TODO: remove log
        console.log(data);
        dinoArray = [...data.Dinos];
        console.log(dinoArray);
    }).catch(error=>{
        console.log(error);
    });

    // Create Human Object

    // Use IIFE to get human data from form


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
button.addEventListener("click", event=>{
    console.log("button clicked!");
    //TODO: Hide form & display grid
})