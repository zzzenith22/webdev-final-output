const unitPrice = 4999;
const cleaningFee = 500;
const serviceFee = 500;

const checkIn = document.getElementById("check_in");
const checkOut = document.getElementById("check_out");

const unitPriceText = document.getElementById("unitPrice");
const cleaningPriceText = document.getElementById("cleaningPrice");
const serviceFeeText = document.getElementById("serviceFee");
const totalPriceText = document.getElementById("totalPrice");

function calculateTotal() {
    const inDate = new Date(checkIn.value);
    const outDate = new Date(checkOut.value);

    if (isNaN(inDate) || isNaN(outDate) || outDate <= inDate) {
        totalPriceText.textContent = "Php 0";
        return;
    }

    const diffTime = outDate - inDate;
    const nights = diffTime / (1000 * 60 * 60 * 24);

    const total = (unitPrice * nights) + cleaningFee + serviceFee;

    unitPriceText.textContent = `Php ${unitPrice * nights}`;
    cleaningPriceText.textContent = `Php ${cleaningFee}`;
    serviceFeeText.textContent = `Php ${serviceFee}`;
    totalPriceText.textContent = `Php ${total}`;
}

checkIn.addEventListener("change", calculateTotal);
checkOut.addEventListener("change", calculateTotal);
