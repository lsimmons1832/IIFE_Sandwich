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
var condimentsChooser = document.getElementById("condiments");
var veggiesChooser = document.getElementById("veggies");

meatChooser.addEventListener("change", function(event) {
  var selectedTopping = SandwichMaker.getMeatPrice(event.target.value);
    SandwichMaker.addTopping(selectedTopping);
	alert("I'm in the meat");
	finalSandwichPrice = SandwichMaker.getTotalPrice();
    finalPrice.innerHTML = finalSandwichPrice;
});

breadChooser.addEventListener("change", function(event) {
  var selectedTopping = SandwichMaker.getBreadPrice(event.target.value);
    SandwichMaker.addTopping(selectedTopping);
	alert("I'm in the bread");
	finalSandwichPrice = SandwichMaker.getTotalPrice();
    finalPrice.innerHTML = finalSandwichPrice;
});

cheeseChooser.addEventListener("change", function(event) {
  var selectedTopping = SandwichMaker.getCheesePrice(event.target.value);
    SandwichMaker.addTopping(selectedTopping);
	alert("I'm in the cheese");
	finalSandwichPrice = SandwichMaker.getTotalPrice();
    finalPrice.innerHTML = finalSandwichPrice;
});


condimentsChooser.addEventListener("change", function(event) {
  var selectedTopping = SandwichMaker.getCondimentsPrice(event.target.value);
    SandwichMaker.addTopping(selectedTopping);
	alert("I'm in the condiments");
	finalSandwichPrice = SandwichMaker.getTotalPrice();
    finalPrice.innerHTML = finalSandwichPrice;
});

veggiesChooser.addEventListener("change", function(event) {
  var selectedTopping = SandwichMaker.getVeggiesPrice(event.target.value);
    SandwichMaker.addTopping(selectedTopping);
	alert("I'm in the veggies");
	finalSandwichPrice = SandwichMaker.getTotalPrice();
    finalPrice.innerHTML = finalSandwichPrice;
});

// cheeseChooser.addEventListener("click", function(event) {
//   // Get the value chosen from the DOM
//   selectedTopping = event.target.value;
//   Sandwichevent.addCheese(selectedTopping);
// 	}
// 	if (event.target.checked === false){
// 		selectedTopping = event.target.value;
// 		Sandwichevent.removeMeat(selectedTopping);
// 	}
// 	finalSandwichPrice = Sandwichevent.getTotalPrice();
//     finalPrice.innerHTML = finalSandwichPrice;
// });

// condimentChooser.addEventListener("click", function(event) {
//   // Get the value chosen from the DOM
//   selectedTopping = event.target.value;
//   Sandwichevent.addCondiment(selectedTopping);
// 	}
// 	if (event.target.checked === false){
// 		selectedTopping = event.target.value;
// 		Sandwichevent.removeMeat(selectedTopping);
// 	}
// 	finalSandwichPrice = Sandwichevent.getTotalPrice();
//     finalPrice.innerHTML = finalSandwichPrice;
// });

// veggiesChooser.addEventListener("click", function(event) {
//   // Get the value chosen from the DOM
//   selectedTopping = event.target.value;
//   Sandwichevent.addVeggies(selectedTopping);
// 	}
// 	if (event.target.checked === false){
// 		selectedTopping = event.target.value;
// 		Sandwichevent.removeMeat(selectedTopping);
// 	}
// 	finalSandwichPrice = Sandwichevent.getTotalPrice();
//     finalPrice.innerHTML = finalSandwichPrice;
// });

// button.addEventListener("click", sandwichMaker);

