// var SandwichMaker = (function (maker) {
	
// 	//Private array to store bread prices
// 	var breadPrices = {
// 		rye: 1.00,
// 		sourdough: 1.50,
// 		pita: 2.00,
// 		sevengrain: 2.50,
// 		italian: 3.00
// 	};

// 	maker.addBread = function(bread){
// 		console.log(breadPrices[bread])
// 			return breadPrices[bread];
// 		};
	
// 	return maker;
// })(SandwichMaker);

// //console.log(SandwichMaker.value);

var SandwichMaker = (function (oldSandwichMaker) {
	//var breadChooser = document.getElementById('bread');
	var breadPrices = {
		rye: 1.00,
		sourdough: 1.50,
		pita: 2.00,
		sevengrain: 2.50,
		italian: 3.00
	};

	
		oldSandwichMaker.getbread = function(){
				return breadPrice;
		},
	
	oldSandwichMaker.getBreadPrice = function(bread){
		return breadPrice[bread];
	}


	return oldSandwichMaker;
})(SandwichMaker.getBreadPrice || {});

//console.log(SandwichMaker.cost);

