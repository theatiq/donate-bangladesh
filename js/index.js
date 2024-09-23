document.getElementById("donate-noakhali").addEventListener("click", function () {
    const donationNoakhali = parseFloat(document.getElementById("donate-amount-noakhali").value)
    console.log(typeof donationNoakhali);
    console.log(donationNoakhali);
})

document.getElementById("donate-feni").addEventListener("click", function () {
    const donationFeni = parseFloat(document.getElementById("donate-amount-feni").value)
    console.log(typeof donationFeni);
    console.log(donationFeni);
})

document.getElementById("donate-quota").addEventListener("click", function () {
    const donationQuota = parseFloat(document.getElementById("donate-amount-quota").value)
    console.log(typeof donationQuota);
    console.log(donationQuota);
})