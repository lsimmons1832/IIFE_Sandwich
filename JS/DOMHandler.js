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
meatChooser.addEventListener("click", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  	sandichMaker.addMeat(selectedTopping);
}
	// if (event.target.checked === false){
	// 	selectedTopping = event.target.value;
	// 	sandichMaker.removeMeat(selectedTopping);
	// }
	finalSandwichPrice = sandichMaker.getTotalPrice();
    finalPrice.innerHTML = finalSandwichPrice;
});

breadChooser.addEventListener("click", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
    sandichMaker.addBread(selectedTopping);
	}
	// if (event.target.checked === false){
	// 	selectedTopping = event.target.value;
	// 	sandichMaker.removeMeat(selectedTopping);
	// }
	finalSandwichPrice = sandichMaker.getTotalPrice();
    finalPrice.innerHTML = finalSandwichPrice;
});

cheeseChooser.addEventListener("click", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  sandichMaker.addCheese(selectedTopping);
	}
	// if (event.target.checked === false){
	// 	selectedTopping = event.target.value;
	// 	sandichMaker.removeMeat(selectedTopping);
	// }
	finalSandwichPrice = sandichMaker.getTotalPrice();
    finalPrice.innerHTML = finalSandwichPrice;
});

condimentChooser.addEventListener("click", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  sandichMaker.addCondiment(selectedTopping);
	}
	// if (event.target.checked === false){
	// 	selectedTopping = event.target.value;
	// 	sandichMaker.removeMeat(selectedTopping);
	// }
	finalSandwichPrice = sandichMaker.getTotalPrice();
    finalPrice.innerHTML = finalSandwichPrice;
});

veggiesChooser.addEventListener("click", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  sandichMaker.addVeggies(selectedTopping);
	}
	// if (event.target.checked === false){
	// 	selectedTopping = event.target.value;
	// 	sandichMaker.removeMeat(selectedTopping);
	// }
	finalSandwichPrice = sandichMaker.getTotalPrice();
    finalPrice.innerHTML = finalSandwichPrice;
});

button.addEventListener("click", function(event)){

}