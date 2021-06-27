function compute()
    {
    p=document.getElementById("rate").value;
    q=document.getElementById("principal").value;
    r=document.getElementById("years").value;
        /*if(q<=0 && q=" "){
            alert("Enter a Positive Number");
            q.focus();
        }*/

    
    document.getElementById("result").innerHTML="If you deposit "+q+",<br>at an interest rate of "+p+".<br>You will receive an amount of "+(p*r*q/100)+",<br>in the year";
    }
