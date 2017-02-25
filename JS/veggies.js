// This SandwichMaker IIFE augments the original one
 var SandwichMaker = (function(maker) {

// Private variable to store the different meat prices
   var veggiesPrices = {
   	lettuce: 0.25,
   	tomato: 0.50,
   	pickle: 0.15,
   	onions: 0.20,
   	olives: 0.50,
   	mushrooms: 0.30,
   	bananapepper: 0.75,
   	bellpepper: 0.35
   };

// Augment the original object with another method
   maker.addVeggies = function() {
   		console.log(veggiesPrices[veggies])
     	return veggiesPrices[veggies];
   };

   // Return the new, augmented object with the new method on it
   return maker;
 })(SandwichMaker);