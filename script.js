function compute()
    {
    let p=document.getElementById("rate").value;
    let q=document.getElementById("principal").value;
    let r=document.getElementById("years").value;
    let s=p*q*r;
        if(q<=0 && q=" "){
            alert("Enter a Positive Number");
            q.focus();
        }

    
    document.getElementById("result").innerHTML="If you deposit "+q+",<br>at an interest rate of "+p+".<br>You will receive an amount of "+s+",<br>in the year";
    }
