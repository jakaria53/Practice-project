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