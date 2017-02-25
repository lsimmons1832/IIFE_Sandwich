var SandwichMaker = (function (maker) {
	
	//Private array to store bread prices
	var cheesePrices = {
		swiss: 0.15,
		cheedar: 0.25,
		mozzarella: 0.10,
		ricotta: 0.20,
		gouda: 0.75,
		pepperjack: 0.25
	};

	maker.addCheese = function(cheese){
		console.log(cheesePrices[cheese])
			return cheesePrices[cheese];
		};
	
	return maker;
})(SandwichMaker);