document.getElementById("send-btn").addEventListener("click", function () {

    const receiverNumber = getValueFromInput("send-number");

    if (receiverNumber.length !== 11) {
        alert("Invalid number. Enter 11 digit number.");
        return;
    }

    const amount = Number(getValueFromInput("send-amount"));

    if (amount <= 0) {
        alert("Enter valid amount");
        return;
    }

    const charge = 5; //  fixed charge
    const total = amount + charge;

    const currentBalance = getBalance();

    if (total > currentBalance) {
        alert("Not enough balance (including 5 taka charge)");
        return;
    }

    const pin = getValueFromInput("send-pin");

    if (pin === "1234") {

        const newBalance = currentBalance - total;

        setBalance(newBalance);

        alert(`Send Money Successful!
Amount: ${amount}
Charge: 5 taka
Total Deducted: ${total}
New Balance: ${newBalance}`);

        //  History add
        const history = document.getElementById("history-container");

        const newHistory = document.createElement("div");

        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
            Send ${amount} tk to ${receiverNumber} <br>
            Charge: 5 tk <br>
            Total: ${total} tk <br>
            Time: ${new Date()}
        </div>
        `;

        history.append(newHistory);

    } else {
        alert("Wrong PIN");
    }
});