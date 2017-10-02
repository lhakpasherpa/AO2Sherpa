function calculation() {
  var total = 0;
  var itemPrice = parseFloat(document.getElementById("a1").value);
  var itemNumber = parseFloat(document.getElementById("a2").value);
  var itemDiscount =parseFloat(document.getElementById("a3").value);
 if (isNaN(itemPrice)) 
  {
    alert("Your input must be a numbers");
    return false;
  }
  else if (isNaN(itemNumber)) 
  {
    alert("Your input must be a numbers");
    return false;
  }
  else if (isNaN(itemDiscount)) 
  {
    alert("Your input must be a numbers");
    return false;
  }
    else if(itemNumber == 0){
    alert("You can't have item number zero");
     }
    else if(itemPrice == 0){
    alert("You cant have item price zero");
     }

     else if(itemPrice <0){
      alert("You cant have item price smaller than zero");
     }

     else if(itemDiscount <0){
      alert("You cant have item discount smaller than zero");
     }
     else if(itemNumber <0){
      alert("You cant have item numner smaller than zero");
     }

     else{
      $("#Calculate").html("The price of the item is: "+ calculator(itemPrice, itemNumber, itemDiscount));
  }
}
function calculator(itemPrice, itemNumber, itemDiscount){
  return (itemPrice*itemNumber-(itemPrice*itemDiscount/100));
  

}

