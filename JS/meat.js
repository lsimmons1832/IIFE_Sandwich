// This SandwichMaker IIFE augments the original one
 var SandwichMaker = (function(oldSandwichMaker) {

// Private variable to store the different meat prices
   var meat = {"ham": 1.00,"turkey": 1.50,"salami": 1.50,"prosciutto": 2.00,"bacon": 0.50,"chicken": 1.50,"bologna": 0.75,"pepperoni": 2.00,"steak": 3.00};

// Augment the original object with another method
   oldSandwichMaker.getmeatPrices = function() {
     	return meat;
   };

   oldSandwichMaker.getmeatPrices = function(selectedTopping){
      return meat[meat]
   }

   // Return the new, augmented object with the new method on it
   return oldSandwichMaker;
 })(SandwichMaker || {});