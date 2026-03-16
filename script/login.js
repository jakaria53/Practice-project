console.log("Hello World");
document.getElementById("login-btn").addEventListener("click", function() {
    //get the phone number from the input field
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    console.log(contactNumber);

    //get the pin from the input field
    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;
    console.log(pin);

    if(contactNumber ==="01798354063"  && pin === "1234"){
        alert("Login successful!");
        window.location.assign("/home.html");
    } else {
        alert("Invalid number or PIN. Please try again.");
        return;
    }


});