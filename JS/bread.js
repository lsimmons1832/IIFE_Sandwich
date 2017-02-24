var SandwichMaker = (function (chooseBread) {
	var breadSelection = document.getElementById('bread');
	var breadPrice = [
	{name: "rye", price: 2.50},	{name: "sourdough", price: 3.00},
	{name: "pita", price: 3.50},{name: "sevengrain", price: 4.00},
	{name: "italian", price: 4.50}
	]

	var cost = 0;

	return {
		getbreadPrice: function(){
			for (var i = 0; i < breadPrice.name; i++) {
				//breadPrice[i]
				return breadPrice.price;
			}
	},
	setbreadPrice: function(value){
		breadPrice = cost;
	}

};

	return value;
})(SandwichMaker.getbreadPrice || {});

console.log(SandwichMaker.value);