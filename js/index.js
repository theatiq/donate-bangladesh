function getAmount(id) {
    return document.getElementById(id)
}

function addHistory(donation, place) {
    const historyItem = document.createElement("div")
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    const today = new Date()
    const dayName = days[today.getDay()]
    historyItem.classList = "border border2 rounded-lg mt-6 p-5"
    historyItem.innerHTML = `
        <h1 class="text-2xl font-bold">${donation} Taka is ${place}</h1>
        <p class="font-bold">Date: ${dayName} ${new Date().toLocaleString()}</p>
    `
    const historyContainer = document.getElementById("history-list")
    historyContainer.insertBefore(historyItem, historyContainer.firstChild)
}



// Noakhali
document.getElementById("donate-noakhali").addEventListener("click", function () {
    const donationNoakhali = parseFloat(getAmount("donate-amount-noakhali").value)
    const donationPlace = getAmount("at-noakhali").innerText
    const myPrevBalance = parseFloat(getAmount("my-prev-balance").innerText)
    const noakhaliPrevBalance = parseFloat(getAmount("noakhali-prev-balance").innerText)
    const myAfterBalance = myPrevBalance - donationNoakhali
    const noakhaliAfterBalance = noakhaliPrevBalance + donationNoakhali
    if (isNaN(donationNoakhali) || donationNoakhali < 0) {
        alert("Please enter only positive number!")
        document.getElementById("sorry").innerText = "Please enter only positive number!"
        document.getElementById("humankind").innerText = ""
        document.getElementById("unsuccessful").innerText = ""
        document.getElementById("donate-amount-noakhali").value = ""
        return
    }
    if (donationNoakhali > myPrevBalance) {
        alert("You do not have sufficient amount to donate.")
        document.getElementById("sorry").innerText = "You do not have sufficient amount to donate.!"
        document.getElementById("humankind").innerText = ""
        document.getElementById("unsuccessful").innerText = ""
        document.getElementById("donate-amount-noakhali").value = ""
        return
    }
    document.getElementById("my-prev-balance").innerText = myAfterBalance.toFixed(2)
    document.getElementById("noakhali-prev-balance").innerText = noakhaliAfterBalance.toFixed(2)
    document.getElementById("donate-amount-noakhali").value = ""
    document.getElementById("sorry").innerText = "Congrats!"
    document.getElementById("humankind").innerText = "You have donated for humankind"
    document.getElementById("unsuccessful").innerText = "Successfully"
    addHistory(donationNoakhali.toFixed(2), donationPlace)
})

// Feni

document.getElementById("donate-feni").addEventListener("click", function () {
    const donationFeni = parseFloat(getAmount("donate-amount-feni").value)
    const donationPlace = getAmount("at-feni").innerText
    const myPrevBalance = parseFloat(getAmount("my-prev-balance").innerText)
    const feniPrevBalance = parseFloat(getAmount("feni-prev-balance").innerText)
    const myAfterBalance = myPrevBalance - donationFeni
    const feniAfterBalance = feniPrevBalance + donationFeni
    if (isNaN(donationFeni) || donationFeni < 0) {
        alert("Please enter only positive number!")
        document.getElementById("sorry2").innerText = "Please enter only positive number!"
        document.getElementById("humankind2").innerText = ""
        document.getElementById("unsuccessful2").innerText = ""
        document.getElementById("donate-amount-feni").value = ""
        return
    }
    if (donationFeni > myPrevBalance) {
        alert("You do not have sufficient amount to donate.")
        document.getElementById("sorry2").innerText = "You do not have sufficient amount to donate.!"
        document.getElementById("humankind2").innerText = ""
        document.getElementById("unsuccessful2").innerText = ""
        document.getElementById("donate-amount-feni").value = ""
        return
    }

    document.getElementById("my-prev-balance").innerText = myAfterBalance.toFixed(2)
    document.getElementById("feni-prev-balance").innerText = feniAfterBalance.toFixed(2)
    document.getElementById("donate-amount-feni").value = ""
    document.getElementById("sorry2").innerText = "Congrats!"
    document.getElementById("humankind2").innerText = "You have donated for humankind"
    document.getElementById("unsuccessful2").innerText = "Successfully"
    addHistory(donationFeni.toFixed(2), donationPlace)
})

// Quota
document.getElementById("donate-quota").addEventListener("click", function () {
    const donationQuota = parseFloat(getAmount("donate-amount-quota").value)
    const donationPlace = getAmount("at-quota").innerText
    const myPrevBalance = parseFloat(getAmount("my-prev-balance").innerText)
    const quotaPrevBalance = parseFloat(getAmount("quota-prev-balance").innerText)
    const myAfterBalance = myPrevBalance - donationQuota
    const quotaAfterBalance = quotaPrevBalance + donationQuota
    if (isNaN(donationQuota) || donationQuota < 0) {
        alert("Please enter only positive number!")
        document.getElementById("sorry3").innerText = "Please enter only positive number!"
        document.getElementById("humankind3").innerText = ""
        document.getElementById("unsuccessful3").innerText = ""
        document.getElementById("donate-amount-quota").value = ""
        return
    }
    if (donationQuota > myPrevBalance) {
        alert("You do not have sufficient amount to donate.")
        document.getElementById("sorry3").innerText = "You do not have sufficient amount to donate.!"
        document.getElementById("humankind3").innerText = ""
        document.getElementById("unsuccessful3").innerText = ""
        document.getElementById("donate-amount-quota").value = ""
        return
    }
    document.getElementById("my-prev-balance").innerText = myAfterBalance.toFixed(2)
    document.getElementById("quota-prev-balance").innerText = quotaAfterBalance.toFixed(2)
    document.getElementById("donate-amount-quota").value = ""
    document.getElementById("sorry3").innerText = "Congrats!"
    document.getElementById("humankind3").innerText = "You have donated for humankind"
    document.getElementById("unsuccessful3").innerText = "Successfully"
    addHistory(donationQuota.toFixed(2), donationPlace)
})


// Transaction History


