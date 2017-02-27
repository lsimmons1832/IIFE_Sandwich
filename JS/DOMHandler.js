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
var breadChooser = document.getElementsByName("bread");
var cheeseChooser = document.getElementById("cheese");
var condimentChooser = document.getElementById("condiments");
var veggiesChooser = document.getElementById("veggies");

/* 
  A <select> element broadcasts a"click event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
// var SandwichMaker = (function(addDOM){
// meatChooser.addEventListener("click", SandwichMaker) 
// alert("I made it inside meat");
//   // Get the value chosen from the DOM
//   selectedTopping = event.meatChooser.value;
//   	SandwichMaker.addMeat(selectedTopping);

// 	if (event.target.checked === false){
// 		selectedTopping = event.meatChooser.value;
// 		SandwichMaker.removeMeat(selectedTopping);
// 	}
// 	finalSandwichPrice = SandwichMaker.getTotalPrice();
//     finalPrice.innerHTML = finalSandwichPrice;
// });
var SandwichMaker = (function(breadPrice){
breadChooser.addEventListener("change", SandwichMaker)
alert("I made it inside bread");
  // Get the value chosen from the DOM
  selectedTopping = breadChooser.value;
    SandwichMaker(selectedTopping);
	
	// if (event.target.checked === false){
	// 	selectedTopping = event.breadChooser.value;
	// 	SandwichMaker.removeBread(selectedTopping);
	// }
	finalSandwichPrice = SandwichMaker.getTotalPrice();
    finalPrice.innerHTML = finalSandwichPrice;
});

// var SandwichMaker = (function(addDOM){
// cheeseChooser.addEventListener("click", SandwichMaker) 
// alert("I made it inside cheese");
//   // Get the value chosen from the DOM
//   selectedTopping = event.cheeseChooser.value;
//   SandwichMaker.addCheese(selectedTopping);

// 	if (event.target.checked === false){
// 		selectedTopping = event.cheeseChooser.value;
// 		SandwichMaker.removeCheese(selectedTopping);
// 	}
// 	finalSandwichPrice = SandwichMaker.getTotalPrice();
//     finalPrice.innerHTML = finalSandwichPrice;
// });

// var SandwichMaker = (function(addDOM){
// condimentChooser.addEventListener("click", SandwichMaker) 
// alert("I made it inside condiments");
//   // Get the value chosen from the DOM
//   selectedTopping = event.condimentChooser.value;
//   SandwichMaker.addCondiment(selectedTopping);

// 	if (event.target.checked === false){
// 		selectedTopping = event.condimentChooser.value;
// 		SandwichMaker.removeCondiments(selectedTopping);
// 	}
// 	finalSandwichPrice = SandwichMaker.getTotalPrice();
//     finalPrice.innerHTML = finalSandwichPrice;
// });

// var SandwichMaker = (function(addDOM){
// veggiesChooser.addEventListener("click", SandwichMaker) 
// alert("I made it inside veggies");
//   // Get the value chosen from the DOM
//   selectedTopping = event.veggiesChooser.value;
//   SandwichMaker.addVeggies(selectedTopping);
	
// 	if (event.target.checked === false){
// 		selectedTopping = event.veggiesChooser.value;
// 		SandwichMaker.removeVeggies(selectedTopping);
// 	}
// 	finalSandwichPrice = SandwichMaker.getTotalPrice();
//     finalPrice.innerHTML = finalSandwichPrice;
// });

button.addEventListener("click", SandwichMaker);