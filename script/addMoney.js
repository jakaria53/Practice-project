document.getElementById("add-money-btn").addEventListener("click", function() {
    const bankAccount = getValueFromInput("add-money-bank");
    if (bankAccount === "Select a Bank") {
        alert("Please enter a bank.");
        return;
    }


    const accno = getValueFromInput("add-money-account");
    if (accno.length != 11) {
        alert("Please enter a valid bank account number.");
        return;
    }

    const amount = getValueFromInput("add-money-amount");
    const currentBalance =getBalance();
    const newBalance = currentBalance + Number(amount);
    const pin =getValueFromInput("add-money-pin");
    if (pin === "1234") {
        alert(`Money added successfully! Add money from ${bankAccount} at ${new Date} ` + newBalance);
        setBalance(newBalance);
    
        //  history container
    const history= document.getElementById("history-container");
    const newHistory = document.createElement("div");
    newHistory.innerHTML= `
    <div class="transaction-card p-5 bg-base-100">
                 Add MOney Success from ${bankAccount} , accno ${accno} at ${new Date()} 

         </div>
         `;
         history.append(newHistory);

     } else { 
        alert("Invalid PIN. Please try again.");
        return;
    }
});