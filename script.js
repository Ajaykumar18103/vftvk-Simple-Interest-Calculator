function compute()
{
    var p = document.getElementById("rate").value;
    var q=document.getElementById("principal").value;
    var r=document.getElementById("years").value;
  
  document.getElementById("result").innerHTML="If you deposit "+q+","+\n+"at an interest rate of "+p+"."+\n+"You will receive an amount of "+((q*r*p)/100)+","+\n+"in the year "+((2020+r)*100)/100;
    
}    
