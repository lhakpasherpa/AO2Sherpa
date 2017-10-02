function calculator() {
  var total = 0;
  var itemPrice = (document.getElementById("a1").value);
  var itemNumber = (document.getElementById("a2").value);
  var itemDiscount =(document.getElementById("a3").value);
  if (isNaN(itemPrice)) 
  {
    alert("Your input must be a numbers");
    return false;
  }
  if (isNaN(itemNumber)) 
  {
    alert("Your input must be a numbers");
    return false;
  }
  if (isNaN(itemDiscount)) 
  {
    alert("Your input must be a numbers");
    return false;
  }
    else if(itemNumber == 0){
    alert("You can't have item number zero");
     }
    else if(itemPrice == 0){
     window.alert("You cant have item price zero");
     }
     else{
     var  total = (itemPrice*itemNumber-(itemPrice*itemDiscount/100));
    document.getElementById("Calculate").innerHTML="The price of the item is: "+ total;
  
  }
}
