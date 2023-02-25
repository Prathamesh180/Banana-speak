var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var textOutput = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(inputValue){
    return serverURL + "?" + "text=" + inputValue
}


function errorHandler(error){
    console.log("error occured" + error);
    alert("something went wrong please try after sometime")
}

function btnclicked() {
    var inputText = textInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json=>{
        var translatedText = json.contents.translated;
        textOutput.innerText = translatedText;
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click",btnclicked);