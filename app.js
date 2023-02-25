var btntranslate = document.querySelector("#btn-translate");
var textarea = document.querySelector("#txt-input");

function btnclicked() {
    console.log("button clicked.");
    console.log("input",textarea.value);
}

btntranslate.addEventListener("click",btnclicked);
textarea.addEventListener()