function submit()
{
    const bill = document.getElementById("amount").value.trim();
    const ser = document.getElementById("service").value.trim();
    const pers = document.getElementById("person").value.trim();

    if(!bill || !ser || !pers)
    {
        alert("Please enter correct data");
        return;
    }

    let amt = 0;

    if(ser==="25")
    {
        amt = bill*0.25;
        
    }
    else if(ser==="20")
    {
        amt = bill*0.20;
        
    }
    else if(ser==="15")
    {
        amt = bill*0.15;
        
    }
    else if(ser==="10")
    {
        amt = bill*0.10;
        
    }
    else 
    {
        amt = bill*0.05;
        
    }

    amt = amt/pers;
   const newbill= Math.floor(amt);

    const res = document.getElementById("result");

    res.innerText = `Tip Amount \n  ${newbill} ₹  Each`;




}