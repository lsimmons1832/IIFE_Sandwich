var SandwichMaker = (function (oldSandwichMaker) {
	
	//Private array to store bread prices
	var cheesePrice = {
		swiss: 0.15,
		cheedar: 0.25,
		mozzarella: 0.10,
		ricotta: 0.20,
		gouda: 0.75,
		pepperjack: 0.25
	};

	oldSandwichMaker.getCheesePrice = function(cheese){
			return cheesePrice[cheese]
		};
	
	return oldSandwichMaker;
})(SandwichMaker || {});