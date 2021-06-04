function compute()
{
    var p = document.getElementById("rate").value;
    var q=document.getElementById("principal").value;
    var r=document.getElementById("years").value;
  
  document.getElementById("result").innerHTML="If you deposit "+q+",\nat an interest rate of "+p+".\nYou will receive an amount of "+((q*r*p)/100)+",\nin the year "+r;
    
}    
