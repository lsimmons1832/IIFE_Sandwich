// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Variable to hold final price
var finalPrice = document.getElementById("finalPrice");

// Define button
var button = document.getElementById("makeMySandwich");

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat");
var breadChooser = document.getElementById("bread");
var cheeseChooser = document.getElementById("cheese");
var condimentChooser = document.getElementById("condiments");
var veggiesChooser = document.getElementById("veggies");

/* 
  A <select> element broadcasts a"click event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
var sandwichMaker = (function(addDOM){
meatChooser.addEventListener("click", sandwichMaker) 
alert("I made it inside meat");
  // Get the value chosen from the DOM
  selectedTopping = event.meatChooser.value;
  	sandwichMaker.addMeat(selectedTopping);

	if (event.target.checked === false){
		selectedTopping = event.meatChooser.value;
		sandwichMaker.removeMeat(selectedTopping);
	}
	finalSandwichPrice = sandwichMaker.getTotalPrice();
    finalPrice.innerHTML = finalSandwichPrice;
});

var sandwichMaker = (function(addDOM){
breadChooser.addEventListener("click", sandwichMaker) 
alert("I made it inside bread");
  // Get the value chosen from the DOM
  selectedTopping = event.breadChooser.value;
    sandwichMaker.addBread(selectedTopping);
	
	if (event.target.checked === false){
		selectedTopping = event.breadChooser.value;
		sandwichMaker.removeBread(selectedTopping);
	}
	finalSandwichPrice = sandwichMaker.getTotalPrice();
    finalPrice.innerHTML = finalSandwichPrice;
});

var sandwichMaker = (function(addDOM){
cheeseChooser.addEventListener("click", sandwichMaker) 
alert("I made it inside cheese");
  // Get the value chosen from the DOM
  selectedTopping = event.cheeseChooser.value;
  sandwichMaker.addCheese(selectedTopping);

	if (event.target.checked === false){
		selectedTopping = event.cheeseChooser.value;
		sandwichMaker.removeCheese(selectedTopping);
	}
	finalSandwichPrice = sandwichMaker.getTotalPrice();
    finalPrice.innerHTML = finalSandwichPrice;
});

var sandwichMaker = (function(addDOM){
condimentChooser.addEventListener("click", sandwichMaker) 
alert("I made it inside condiments");
  // Get the value chosen from the DOM
  selectedTopping = event.condimentChooser.value;
  sandwichMaker.addCondiment(selectedTopping);

	if (event.target.checked === false){
		selectedTopping = event.condimentChooser.value;
		sandwichMaker.removeCondiments(selectedTopping);
	}
	finalSandwichPrice = sandwichMaker.getTotalPrice();
    finalPrice.innerHTML = finalSandwichPrice;
});

var sandwichMaker = (function(addDOM){
veggiesChooser.addEventListener("click", sandwichMaker) 
alert("I made it inside veggies");
  // Get the value chosen from the DOM
  selectedTopping = event.veggiesChooser.value;
  sandwichMaker.addVeggies(selectedTopping);
	
	if (event.target.checked === false){
		selectedTopping = event.veggiesChooser.value;
		sandwichMaker.removeVeggies(selectedTopping);
	}
	finalSandwichPrice = sandwichMaker.getTotalPrice();
    finalPrice.innerHTML = finalSandwichPrice;
});

button.addEventListener("click", sandwichMaker);