function calculate()
{
    const units = document.getElementById("unit").value;
     const final = document.getElementById("granfinal");
     const toTal = document.getElementById("total");
     const surCh = document.getElementById("sur");
    
console.log(units);

if(units<0)
{
    alert("Please enter positive integer");
}
    let bill = 0;
    if (units<=50)
    {
        bill = units*0.50;
    }

    else if(50<units && units<=200)
    {
        bill = (50*0.50) + ((units-50)*0.75);
    }
     else if(200<units && units<=450)
    {
        bill =(50*0.50) + (150*0.75) + ((units-200)*0.75);
    }
    else if(450<units )
    {
        bill =(50*0.50) + (150*0.75) + (250*0.75)+ ((units-450)*1.50);
    }

    let finbill = bill+(bill*0.20);
    let surcharge = (bill*0.20);
    console.log(finbill);
    console.log(surcharge);

    toTal.innerText =`Subtotal = ${bill.toFixed(2)} ₹`;
    surCh.innerText =`Surcharge amount = ${surcharge.toFixed(2)} ₹`;
    final.innerText = `Grand total = ${finbill.toFixed(2)} ₹`;


}

function reset()
{
    const units = document.getElementById("unit");
     const final = document.getElementById("granfinal");
     const toTal = document.getElementById("total");
     const surCh = document.getElementById("sur");

    units.value ="";
    toTal.innerText =" Sub Total = 0 ₹";
    surCh.innerText ="Surcharge amount = 0 ₹";
    final.innerText ="Grand total = 0 ₹";

}