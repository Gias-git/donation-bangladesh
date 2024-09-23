// live validation check function

function errorMsgShow(id,errorId){
    document.getElementById(id).addEventListener('input', function () {
        const inputValue = parseFloat(document.getElementById(id).value);
    
        if (inputValue < 0) {
            return document.getElementById(errorId).classList.remove('hidden');
        } else {
            return document.getElementById(errorId).classList.add('hidden');
        }
    })
}

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

