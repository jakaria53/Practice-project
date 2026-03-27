 document.getElementById("cashout-btn").addEventListener("click", function() {
     const cashOutNumber = getValueFromInput("cashout-number");
     if(cashOutNumber.length !== 11 ){
        alert("Invalid phone number. Please enter an 11-digit number.");
        return;
      }
     const cashOutAmount = getValueFromInput("cashout-amount");

     const currentBalance = getBalance();   
    
     const newBalance = currentBalance - Number(cashOutAmount);
        console.log(newBalance);
        if (newBalance < 0) {
            alert("Insufficient balance. Please try again.");
            return;
        }
        const Pin = getValueFromInput("cashout-pin");
        if (Pin === "1234") {

         alert("Cash out successful! Your new balance is: " + newBalance);
            setBalance(newBalance);
        }
        else {
         alert("Invalid PIN. Please try again.");
         return;
        }
});
    // document.getElementById("cashout-btn").addEventListener("click", function() {

//     const cashOutNumberInput = document.getElementById("cashout-number");
//      const cashOutNumber = cashOutNumberInput.value;
//      console.log(cashOutNumber);
//      if(cashOutNumber.length !== 11 ){
//         alert("Invalid phone number. Please enter an 11-digit number.");
//         return;
//      }

//     const cashOutAmountInput = document.getElementById("cashout-amount");
//     const cashOutAmount = cashOutAmountInput.value;
//     console.log(cashOutAmount);

//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;
//     console.log(balance);

//     const newBalance = Number(balance) - Number(cashOutAmount);
//     console.log(newBalance);
//     if (newBalance < 0) {
//         alert("Insufficient balance. Please try again.");
//         return;
//     }
//        console.log("New Balance:",newBalance);


//        const cashOutPinInput = document.getElementById("cashout-pin");
//        const Pin = cashOutPinInput.value;
//        if (Pin === "1234") {

//         alert("Cash out successful! Your new balance is: " + newBalance);
//         balanceElement.innerText = newBalance;
//        }
//        else {
//         alert("Invalid PIN. Please try again.");
//         return;
//        }


// });