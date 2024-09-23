


// live validation


document.getElementById('donateForNoakhaliInput').addEventListener('input', function () {
    const NoakhaliInputValue = parseFloat(document.getElementById('donateForNoakhaliInput').value);

    if (NoakhaliInputValue < 0) {
        return document.getElementById('error-msg').classList.remove('hidden');
    } else {
        return document.getElementById('error-msg').classList.add('hidden');
    }
})


// Blog Button click event

catchInnerHtmlById('blog-btn').addEventListener('click',function(){
    window.location.href = './blog.html'
})


// click event for noakhali donation
document.getElementById('donateForNoakhaliBtn')
    .addEventListener('click', function () {
        const donationValue = getInputValue('donateForNoakhaliInput');
        const donationForNoakhali = catchInnerTextById('noakhali-donation');
        const mainAccountValue = catchInnerTextById('account-balannce');
        // validation

        if (donationForNoakhali < 0) {
            return alert('Please Give Positive Number');
        }

        // calculation new balance
        const newMainAccountValue = mainAccountValue - donationValue;
        const newDonationForNoakhaliValue = donationForNoakhali + donationValue;

        document.getElementById('noakhali-donation').innerText = `${newDonationForNoakhaliValue} BDT`;
        document.getElementById('account-balannce').innerText = `${newMainAccountValue} BDT`;

        // History Add

        const historyContainer = catchInnerHtmlById('history-container');
        const createDiv = document.createElement('div');
        createDiv.innerHTML = ` <div class="border-2 p-8 mb-4 rounded-lg">
                <h1 class="font-bold">${donationValue} Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
                <br>
                <p>${new Date().toLocaleDateString()}     ${new Date().toLocaleTimeString()}</p>
            </div>
        `;
        historyContainer.insertBefore(createDiv, historyContainer.firstChild);

        catchInnerHtmlById('donateForNoakhaliInput').value = '';
        my_modal_3.showModal();
    })


// click event for Feni donation

document.getElementById('donateForFeniBtn')
    .addEventListener('click', function () {
        const donationValueFeni = getInputValue('donateForFeniInput');
        const donationForFeni = catchInnerTextById('feni-donation');
        const mainAccountValue = catchInnerTextById('account-balannce');
        // validation

        if (donationValueFeni < 0) {
            return alert('Please Give Positive Number');
        }

        // calculation new balance
        const newMainAccountValue = mainAccountValue - donationValueFeni;
        const newDonationForfeni = donationForFeni + donationValueFeni;

        document.getElementById('feni-donation').innerText = `${newDonationForfeni} BDT`;
        document.getElementById('account-balannce').innerText = `${newMainAccountValue} BDT`;

        // History Add

        const historyContainer = catchInnerHtmlById('history-container');
        const createDiv = document.createElement('div');
        createDiv.innerHTML = `<div class="border-2 p-8 mb-4 rounded-lg">
                <h1 class="font-bold">${newDonationForfeni} Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
                <br>
                <p>${new Date().toLocaleDateString()}     ${new Date().toLocaleTimeString()}</p>
            </div>
        `;
        historyContainer.insertBefore(createDiv, historyContainer.firstChild);

        catchInnerHtmlById('donateForFeniInput').value = '';
        my_modal_3.showModal();
    })


// click event for quota donation

document.getElementById('donateForQuotaBtn')
    .addEventListener('click', function () {
        const donationValueQuota = getInputValue('donateForQuotaInput');
        const donationForQuota = catchInnerTextById('quota-donation');
        const mainAccountValue = catchInnerTextById('account-balannce');
        // validation

        if (donationValueFeni < 0) {
            return alert('Please Give Positive Number');
        }

        // calculation new balance
        const newMainAccountValue = mainAccountValue - donationValueQuota;
        const newDonationForQuota = donationForQuota + donationValueQuota;

        document.getElementById('quota-donation').innerText = `${newDonationForQuota} BDT`;
        document.getElementById('account-balannce').innerText = `${newMainAccountValue} BDT`;

        // History Add

        const historyContainer = catchInnerHtmlById('history-container');
        const createDiv = document.createElement('div');
        createDiv.innerHTML = `<div class="border-2 p-8 mb-4 rounded-lg">
                <h1 class="font-bold">${newDonationForQuota} Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
                <br>
                <p>${new Date().toLocaleDateString()}     ${new Date().toLocaleTimeString()}</p>
            </div>
        `;
        historyContainer.insertBefore(createDiv, historyContainer.firstChild);

        catchInnerHtmlById('donateForQuotaInput').value = '';
        my_modal_3.showModal();
    })








