// This SandwichMaker IIFE augments the original one
 var SandwichMaker = (function(oldSandwichMaker) {

// Private variable to store the different meat prices
   var veggiesPrice = {
   	lettuce: 0.25,
   	tomato: 0.50,
   	pickle: 0.15,
   	onions: 0.20,
   	olives: 0.50,
   	mushrooms: 0.30,
   	bananapepper: 0.75,
   	bellpepper: 0.35
   }

   oldSandwichMaker.getVeggiesPrice = function(veggies){
         return veggiesPrice[veggies]
      };
   
   return oldSandwichMaker;
})(SandwichMaker);