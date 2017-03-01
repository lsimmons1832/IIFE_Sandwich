// This SandwichMaker IIFE augments the original one
 var SandwichMaker = (function(oldSandwichMaker) {

// Private variable to store the different meat prices
   var condimentsPrice = {
   	ketchup: 0.25,
   	yellowmustard: 0.50,
   	spicymustard: 0.15,
   	mayo: 0.20,
   	relish: 0.50,
   	honeymustard: 0.30,
   	ranch: 0.35
   };

   oldSandwichMaker.getCondimentsPrice = function(condiments){
         return condimentsPrice[condiments]
      };

   // Return the new, augmented object with the new method on it
   return oldSandwichMaker;
 })(SandwichMaker || {});