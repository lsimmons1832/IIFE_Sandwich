var SandwichMaker = (function (oldSandwichMaker) {
	//var breadChooser = document.getElementById('bread');
	var breadPrice = {
		rye: 1.00,
		sourdough: 1.50,
		pita: 2.00,
		sevengrain: 2.50,
		italian: 3.00
	};

	oldSandwichMaker.getBreadPrice = function(){
		console.log(breadPrice)
		return breadPrice;
	}

	oldSandwichMaker.addBread = function(id,checked){
		if(checked === true){
			SandwichMaker.modifyPrice("increase", breadPrice[id]);
		} else {
			SandwichMaker.modifyPrice("decrease", breadPrice[id]);
		}
	};

	return oldSandwichMaker;
})(SandwichMaker || {});

//console.log(SandwichMaker.cost);

