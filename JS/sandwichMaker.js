var SandwichMaker = (function() {
  var totalPrice = 0;
  var finalPrice = document.getElementById('finalPrice');
  // Return the public interface that other code can interact with
  return {
    modifyPrice: function(math, price) {
      if (math === "increase"){
        totalPrice += price;
    }
      if (math === "decrease"){
        totalPrice -= price;
    }
      finalPrice.innerHTML = "$" + totalPrice.toFixed(2);
    },
  };
})();