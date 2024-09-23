

// get value from input 

function getInputValue(id){
    return parseFloat(document.getElementById(id).value);  
}

function catchInnerHtmlById(id){
    return document.getElementById(id);
}

function catchInnerTextById(id){

    const accountStringValue = document.getElementById(id).innerText;
    return parseFloat(accountStringValue);
}

function errorMsgShow(id){
    document.getElementById(id).addEventListener('input', function () {
        const NoakhaliInputValue = parseFloat(document.getElementById('donateForNoakhaliInput').value);
    
        if (NoakhaliInputValue < 0) {
            return document.getElementById(errorMsg).classList.remove('hidden');
        } else {
            return document.getElementById(errorMsg).classList.add('hidden');
        }
    })
}