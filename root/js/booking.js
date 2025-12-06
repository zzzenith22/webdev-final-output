const unitPrice = 4999;
const cleaningFee = 500;
const serviceFee = 500;

const checkIn = document.getElementById("check_in");
const checkOut = document.getElementById("check_out");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const phone = document.getElementById("phone_number");
const cardNum = document.getElementById("card_number");
const expiry = document.getElementById("expiry");
const cvv = document.getElementById("cvv");
const terms = document.getElementById("terms_conditions");

const unitPriceText = document.getElementById("unitPrice");
const cleaningPriceText = document.getElementById("cleaningPrice");
const serviceFeeText = document.getElementById("serviceFee");
const totalPriceText = document.getElementById("totalPrice");

const form = document.getElementById("bookingForm");
const bookBtn = document.getElementById("bookNow");

function calculateTotal() {
    const inDate = new Date(checkIn.value);
    const outDate = new Date(checkOut.value);

    if (isNaN(inDate) || isNaN(outDate) || outDate <= inDate) {
        totalPriceText.textContent = "Php 0";
        return;
    }

    const nights = (outDate - inDate) / (1000 * 60 * 60 * 24);
    const total = (unitPrice * nights) + cleaningFee + serviceFee;

    unitPriceText.textContent = `Php ${unitPrice * nights}`;
    cleaningPriceText.textContent = `Php ${cleaningFee}`;
    serviceFeeText.textContent = `Php ${serviceFee}`;
    totalPriceText.textContent = `Php ${total}`;
}

checkIn.addEventListener("change", calculateTotal);
checkOut.addEventListener("change", calculateTotal);

function markInvalid(input, msg) {
    input.style.border = "2px solid red";
    input.placeholder = msg;
}

function reset(input) {
    input.style.border = "1px solid #ccc";
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let valid = true;

    reset(checkIn); reset(checkOut); reset(firstName); reset(lastName);
    reset(email); reset(phone); reset(cardNum); reset(expiry); reset(cvv);

    if (!checkIn.value) { markInvalid(checkIn, "Required"); valid = false; }
    if (!checkOut.value) { markInvalid(checkOut, "Required"); valid = false; }
    if (!firstName.value.trim()) { markInvalid(firstName, "Required"); valid = false; }
    if (!lastName.value.trim()) { markInvalid(lastName, "Required"); valid = false; }
    if (!email.value.trim()) { markInvalid(email, "Required"); valid = false; }
    if (!phone.value.trim()) { markInvalid(phone, "Required"); valid = false; }
    if (!cardNum.value.trim()) { markInvalid(cardNum, "Required"); valid = false; }
    if (!expiry.value.trim()) { markInvalid(expiry, "Required"); valid = false; }
    if (!cvv.value.trim()) { markInvalid(cvv, "Required"); valid = false; }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value && !emailPattern.test(email.value)) { markInvalid(email, "Invalid Email"); valid = false; }

    if (phone.value && !/^\d{11}$/.test(phone.value)) { markInvalid(phone, "11 digits only"); valid = false; }
    if (cardNum.value && !/^\d{16}$/.test(cardNum.value)) { markInvalid(cardNum, "16 digits only"); valid = false; }
    if (cvv.value && !/^\d{3}$/.test(cvv.value)) { markInvalid(cvv, "3-digit CVV"); valid = false; }

    const inDate = new Date(checkIn.value);
    const outDate = new Date(checkOut.value);
    if (outDate <= inDate) { markInvalid(checkOut, "Invalid date"); valid = false; }

    if (!terms.checked) { alert("You must accept Terms & Conditions."); valid = false; }

    if (valid) {
        alert("Booking Successful!");
        console.log("Booking Completed");
    }
});
