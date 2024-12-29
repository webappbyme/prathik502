function calculateMortgage() {
    const loan = parseFloat(document.getElementById('loan').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
    const term = parseFloat(document.getElementById('term').value) * 12;

    const monthlyPayment = (loan * rate) / (1 - Math.pow(1 + rate, -term));
    document.getElementById('result').innerText = monthlyPayment
        ? `Your monthly payment is $${monthlyPayment.toFixed(2)}`
        : 'Invalid input';
}
