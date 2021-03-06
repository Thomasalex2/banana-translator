var click_btn = document.querySelector("#click-btn");
var text_area = document.querySelector("#txt-area");
var output_box = document.querySelector("#output-box");

var url = "https://api.funtranslations.com/translate/minion.json"

let log = msg => console.log(msg);
let urlConstructor = msg => url + "?text=" + msg;

function errorHandler(error) {
    log("An error has occurred")
    alert("Server is down. Please try again later")
}

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