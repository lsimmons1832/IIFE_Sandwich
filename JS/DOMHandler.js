var SandwichMaker = (function (oldSandwichMaker) {

	var sandwich = document.querySelector("input.selection")

	for (var i = 0; i < sandwich.length; i++) {
		sandwich[i].addEventListener("change", function(e){
			toppingPrice(e);
		});
	};

	function toppingPrice(e){
		switch (e.target.name){
			case "bread":
				SandwichMaker.getBreadPrice(e.target.id, e.target.checked);
			break;
			case "meat":
				SandwichMaker.getMeatPrice(e.target.id, e.target.checked);
			break;
			case "cheese":
				SandwichMaker.getCheesePrice(e.target.id, e.target.checked);
			break;
			case "condiments":
				SandwichMaker.getCondimentsPrice(e.target.id, e.target.checked);
			break;
			case "veggies":
				SandwichMaker.getVeggiesPrice(e.target.id, e.target.checked);
			break;
		}
	}


	return oldSandwichMaker
})(SandwichMaker || {})

var button = document.getElementById("makeMySandwich");
button.addEventListener("click", SandwichMaker);