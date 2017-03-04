var SandwichMaker = (function (oldSandwichMaker) {
	
	//Private array to store bread prices
	var breadPrice = {
		rye: 1.00,
		sourdough: 1.50,
		pita: 2.00,
		sevengrain: 2.50,
		italian: 3.00
	}

	oldSandwichMaker.getBreadPrice = function(bread){
			return breadPrice[bread]
		};
	
	return oldSandwichMaker;
})(SandwichMaker || {});

//console.log(SandwichMaker.value);