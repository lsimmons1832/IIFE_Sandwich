// This SandwichMaker IIFE augments the original one
 var SandwichMaker = (function(maker) {

// Private variable to store the different meat prices
   var condimentsPrices = {
   	ketchup: 0.25,
   	yellowmustard: 0.50,
   	spicymustard: 0.15,
   	mayo: 0.20,
   	relish: 0.50,
   	honeymustard: 0.30,
   	ranch: 0.35
   };

// Augment the original object with another method
   maker.addCondiments = function() {
   		console.log(condimentsPrices[condiments])
     	return condimentsPrices[condiments];
   };

   // Return the new, augmented object with the new method on it
   return maker;
 })(SandwichMaker);