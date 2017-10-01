function calculator() {
  var total = 0;
  var itemPrice = document.getElementById('a1').value;
  var itemNumber = document.getElementById('a2').value;
  var itemDiscount = document.getElementById('a3').value;
  while(itemPrice !== 0){
    total = itemPrice*itemNumber*(itemDiscount/100);
    console.log(total);
  }
  return total;
}
document.getElementById("calculate").innerHTML=calculator();