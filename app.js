log("Hello")
var click_btn = document.querySelector("#click-btn");
var text_area = document.querySelector("#txt-area");
var output_box = document.querySelector("#output-box");

var url = "https://api.funtranslations.com/translate/minion.json"

function log(msg) {
    console.log(msg);
};

function urlConstructor(msg) {
    return url + "?text=" + msg;
}

function errorHandler(error) {
    log("An error has occured")
    alert("Server is down. Please try again later")
}

log(text_area)

function buttonClickFunc() {
    log("Clicked");
    fetch(urlConstructor(text_area.value))
        .then(response => response.json())
        .then(json => {
            var translated = json.contents.translated
            output_box.innerText = translated
        })
    .catch(errorHandler)
};

click_btn.addEventListener("click", buttonClickFunc);
