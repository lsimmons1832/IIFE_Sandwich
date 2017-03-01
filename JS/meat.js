// This SandwichMaker IIFE augments the original one
 var SandwichMaker = (function(oldSandwichMaker) {

// Private variable to store the different meat prices
   var meatPrice = {"ham": 1.00,"turkey": 1.50,"salami": 1.50,"prosciutto": 2.00,"bacon": 0.50,"chicken": 1.50,"bologna": 0.75,"pepperoni": 2.00,"steak": 3.00};

	oldSandwichMaker.getMeatPrice = function(meat){
			return meatPrice[meat]
		};
	
	return oldSandwichMaker;
})(SandwichMaker || {});
