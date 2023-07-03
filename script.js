const calculate = document.querySelector('.calculate');
const reset = document.querySelector('.reset');

calculate.addEventListener('click', (e) => {
    e.preventDefault();

    let billAmt = document.getElementById('amount').value;
    let percentage = document.getElementById('discount-percentage').value;
    let discountAmt = document.getElementById('discount-amount');
    let finalPay = document.getElementById('pay');

    discountAmt.value = billAmt * percentage / 100;
    finalPay.value = billAmt - discountAmt.value;
})

reset.addEventListener('click', () => {
    window.location.reload();
})