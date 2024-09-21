function InterestCalculator(){
    const Principal = document.getElementById("principalInput")
    const Rate = document.getElementById("rateInput")
    const Year = document.getElementById("yearInput")
    const Output= document.getElementById("output")
    const Balance= document.getElementById("Balance")

    principal = Number(Principal.value);
    year = Number(Year.value);
    rate = Number(Rate.value/100);

    if (isNaN(principal)){
        alert("Enter a valid Principal Amount") 
    } else if(Principal.value.trim() === ""){
        alert("Your Principal Amount has to be greater than 0") 
    }else if( principal <= 0){
        alert("Principal amount cannot be empty")
    }
    else if(isNaN(rate)){
        alert("Enter a valid Interest Rate Number")
    }else if(rate <= 0){
        alert("Please, Interest rate has to be greater than 0")
    }else if(isNaN(year)){
        alert("Enter a valid Year")
    }else if(year <= 0){
        alert("Please, Year has to be greater than 0")
    }
    else{
        let Interest = Number(principal * rate
            * year);

        let Sum = principal + Interest;

        Interest = Interest.toLocaleString ("en-US", {style: "currency", currency: "USD"})

        Sum = Sum.toLocaleString ("en-US", {style: "currency", currency: "USD"})

         Output.textContent = `Total interest: ${Interest}`
         Balance.textContent = `Total Balance: ${Sum}`
     }


   
    
   
             
}

