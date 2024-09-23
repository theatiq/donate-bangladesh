function getAmount(id) {
    return document.getElementById(id)
}

document.getElementById("donate-noakhali").addEventListener("click", function () {
    const donationNoakhali = parseFloat(getAmount("donate-amount-noakhali").value)
    const myPrevBalance = parseFloat(getAmount("my-prev-balance").innerText)
    const noakhaliPrevBalance = parseFloat(getAmount("noakhali-prev-balance").innerText)
    const myAfterBalance = myPrevBalance - donationNoakhali
    const noakhaliAfterBalance = noakhaliPrevBalance + donationNoakhali
    if (isNaN(donationNoakhali) || donationNoakhali < 0) {
        alert("Please enter only positive number!")
        document.getElementById("sorry").innerText = "Please enter only positive number!"
        document.getElementById("humankind").innerText = ""
        document.getElementById("unsuccessful").innerText = ""
        return
    }
    document.getElementById("my-prev-balance").innerText = myAfterBalance.toFixed(2)
    document.getElementById("noakhali-prev-balance").innerText = noakhaliAfterBalance.toFixed(2)
    document.getElementById("donate-amount-noakhali").value = ""
})

document.getElementById("donate-feni").addEventListener("click", function () {
    const donationFeni = parseFloat(getAmount("donate-amount-feni").value)
    const myPrevBalance = parseFloat(getAmount("my-prev-balance").innerText)
    const feniPrevBalance = parseFloat(getAmount("feni-prev-balance").innerText)
    const myAfterBalance = myPrevBalance - donationFeni
    const feniAfterBalance = feniPrevBalance + donationFeni
    document.getElementById("my-prev-balance").innerText = myAfterBalance.toFixed(2)
    document.getElementById("feni-prev-balance").innerText = feniAfterBalance.toFixed(2)
    document.getElementById("donate-amount-feni").value = ""
})

document.getElementById("donate-quota").addEventListener("click", function () {
    const donationQuota = parseFloat(getAmount("donate-amount-quota").value)
    const myPrevBalance = parseFloat(getAmount("my-prev-balance").innerText)
    const quotaPrevBalance = parseFloat(getAmount("quota-prev-balance").innerText)
    const myAfterBalance = myPrevBalance - donationQuota
    const quotaAfterBalance = quotaPrevBalance + donationQuota
    document.getElementById("my-prev-balance").innerText = myAfterBalance.toFixed(2)
    document.getElementById("quota-prev-balance").innerText = quotaAfterBalance.toFixed(2)
    document.getElementById("donate-amount-quota").value = ""
})