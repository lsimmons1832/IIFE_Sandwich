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
	if(event.target.checked === true){
  var selectedTopping = SandwichMaker.getMeatPrice(event.target.value);
    SandwichMaker.addTopping(selectedTopping);
  } else if(event.target.checked === false){
  var selectedTopping = SandwichMaker.getMeatPrice(event.target.value);
   SandwichMaker.removeTopping(selectedTopping);
  }
	finalSandwichPrice = SandwichMaker.getTotalPrice();
    //finalPrice.innerHTML = finalSandwichPrice;
});

breadChooser.addEventListener("change", function(event) {
  if(event.target.checked === true){
  var selectedTopping = SandwichMaker.getBreadPrice(event.target.value);
    SandwichMaker.addTopping(selectedTopping);
    } else if(event.target.checked === false){
    var selectedTopping = SandwichMaker.getBreadPrice(event.target.value);
    SandwichMaker.removeTopping(selectedTopping); 
    }
	finalSandwichPrice = SandwichMaker.getTotalPrice();
    //finalPrice.innerHTML = finalSandwichPrice;
});

cheeseChooser.addEventListener("change", function(event) {
  if(event.target.checked === true){
  var selectedTopping = SandwichMaker.getCheesePrice(event.target.value);
    SandwichMaker.addTopping(selectedTopping);
    } else if (event.target.checked === false){
    var selectedTopping = SandwichMaker.getCheesePrice(event.target.value);
    SandwichMaker.removeTopping(selectedTopping);
  }
	finalSandwichPrice = SandwichMaker.getTotalPrice();
    //finalPrice.innerHTML = finalSandwichPrice;
});


condimentsChooser.addEventListener("change", function(event) {
  if(event.target.checked === true){
  var selectedTopping = SandwichMaker.getCondimentsPrice(event.target.value);
    SandwichMaker.addTopping(selectedTopping);
  } else if (event.target.checked === false){
    var selectedTopping = SandwichMaker.getCondimentsPrice(event.target.value);
   SandwichMaker.removeTopping(selectedTopping);
  }
	finalSandwichPrice = SandwichMaker.getTotalPrice();
    //finalPrice.innerHTML = finalSandwichPrice;
});

veggiesChooser.addEventListener("change", function(event) {
  if(event.target.checked === true){
  var selectedTopping = SandwichMaker.getVeggiesPrice(event.target.value);
    SandwichMaker.addTopping(selectedTopping);
  } else if (event.target.checked === false){
    var selectedTopping = SandwichMaker.getVeggiesPrice(event.target.value);
    SandwichMaker.removeTopping(selectedTopping);
  }
	finalSandwichPrice = SandwichMaker.getTotalPrice();
    //finalPrice.innerHTML = finalSandwichPrice;
});

 button.addEventListener("click", function(){
    finalSandwichPrice = SandwichMaker.getTotalPrice();
    finalPrice.innerHTML = `Total: ${finalSandwichPrice}`;
 });

