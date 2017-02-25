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
var condimentChooser = document.getElementById("condiment");
var veggiesChooser = document.getElementById("veggies");

/* 
  A <select> element broadcasts a"click event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
var sandwichMaker = (function(addDOM){
meatChooser.addEventListener("click", sandichMaker) 
  // Get the value chosen from the DOM
  selectedTopping = event.meatChooser.value;
  	sandichMaker.addMeat(selectedTopping);

	if (event.target.checked === false){
		selectedTopping = event.meatChooser.value;
		sandichMaker.removeMeat(selectedTopping);
	}
	finalSandwichPrice = sandichMaker.getTotalPrice();
    finalPrice.innerHTML = finalSandwichPrice;
});

var sandwichMaker = (function(addDOM){
breadChooser.addEventListener("click", sandichMaker) 
  // Get the value chosen from the DOM
  selectedTopping = event.breadChooser.value;
    sandichMaker.addBread(selectedTopping);
	
	if (event.target.checked === false){
		selectedTopping = event.breadChooser.value;
		sandichMaker.removeBread(selectedTopping);
	}
	finalSandwichPrice = sandichMaker.getTotalPrice();
    finalPrice.innerHTML = finalSandwichPrice;
});

var sandwichMaker = (function(addDOM){
cheeseChooser.addEventListener("click", sandichMaker) 
  // Get the value chosen from the DOM
  selectedTopping = event.cheeseChooser.value;
  sandichMaker.addCheese(selectedTopping);

	if (event.target.checked === false){
		selectedTopping = event.cheeseChooser.value;
		sandichMaker.removeCheese(selectedTopping);
	}
	finalSandwichPrice = sandichMaker.getTotalPrice();
    finalPrice.innerHTML = finalSandwichPrice;
});

var sandwichMaker = (function(addDOM){
condimentChooser.addEventListener("click", sandichMaker) 
  // Get the value chosen from the DOM
  selectedTopping = event.condimentChooser.value;
  sandichMaker.addCondiment(selectedTopping);

	if (event.target.checked === false){
		selectedTopping = event.condimentChooser.value;
		sandichMaker.removeCondiments(selectedTopping);
	}
	finalSandwichPrice = sandichMaker.getTotalPrice();
    finalPrice.innerHTML = finalSandwichPrice;
});

var sandwichMaker = (function(addDOM){
veggiesChooser.addEventListener("click", sandichMaker) 
  // Get the value chosen from the DOM
  selectedTopping = event.veggiesChooser.value;
  sandichMaker.addVeggies(selectedTopping);
	
	if (event.target.checked === false){
		selectedTopping = event.veggiesChooser.value;
		sandichMaker.removeVeggies(selectedTopping);
	}
	finalSandwichPrice = sandichMaker.getTotalPrice();
    finalPrice.innerHTML = finalSandwichPrice;
});

button.addEventListener("click", addDOM);