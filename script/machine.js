function getValueFromInput(Id) {

    const input = document.getElementById(Id);
    const value = input.value;
    console.log(Id, value);
    return value;
}
function getBalance() {
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log("Current Balance:", balance);
    return Number(balance);
}       

function setBalance(value){
    const balanceElement = document.getElementById("balance");  
    balanceElement.innerText = value;
}

// machine id > hide all >show all 
 function showOnly(id){

    const addMoney = document.getElementById("add-money");
    const cashOut = document.getElementById("cash-out");
    const history = document.getElementById("history");
    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");  
    history.classList.add("hidden");
      

    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
    
 }