

catchInnerHtmlById('donation-toggle-btn').addEventListener('click',function(){

    const donationContainer = catchInnerHtmlById('docation-section');
    const historyContainer = catchInnerHtmlById('history-container');
    const donationToggleBtn = catchInnerHtmlById('donation-toggle-btn');
    const historyToggleBtn = catchInnerHtmlById('history-toggle-btn');

    historyContainer.classList.add('hidden');
    donationContainer.classList.remove('hidden');

    // add and remove bg style style

    donationToggleBtn.classList.remove('px-8', 'py-3','text-xl','font-bold', 'rounded-lg', 'text-gray-500', 'border-2', 'border-gray-300');
    donationToggleBtn.classList.add('bg-primaryColor', 'px-8', 'py-3', 'text-xl', 'font-bold', 'rounded-lg');
    historyToggleBtn.classList.remove('bg-primaryColor', 'px-8', 'py-3', 'text-xl', 'font-bold', 'rounded-lg');
    historyToggleBtn.classList.add('px-8', 'py-3','text-xl','font-bold', 'rounded-lg', 'text-gray-500', 'border-2', 'border-gray-300');
})

catchInnerHtmlById('history-toggle-btn').addEventListener('click',function(){

    const donationContainer = catchInnerHtmlById('docation-section');
    const historyContainer = catchInnerHtmlById('history-container');
    const donationToggleBtn = catchInnerHtmlById('donation-toggle-btn');
    const historyToggleBtn = catchInnerHtmlById('history-toggle-btn');

    donationContainer.classList.add('hidden');
    historyContainer.classList.remove('hidden');

    // add and remove bg style style
    historyToggleBtn.classList.remove('px-8', 'py-3','text-xl','font-bold', 'rounded-lg', 'text-gray-500', 'border-2', 'border-gray-300');
    historyToggleBtn.classList.add('bg-primaryColor', 'px-8', 'py-3', 'text-xl', 'font-bold', 'rounded-lg');
    donationToggleBtn.classList.remove('bg-primaryColor', 'px-8', 'py-3', 'text-xl', 'font-bold', 'rounded-lg');
    donationToggleBtn.classList.add('px-8', 'py-3','text-xl','font-bold', 'rounded-lg', 'text-gray-500', 'border-2', 'border-gray-300');
})

