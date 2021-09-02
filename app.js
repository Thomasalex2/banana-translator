log("Hello")
var click_btn = document.querySelector("#click-btn");
var text_area = document.querySelector("#txt-area");
var output_box = document.querySelector("#output-box");

function log(msg) {
    console.log(msg);
};

log(text_area)

function buttonClickFunc() {
    log("Clicked");
    log(text_area.value);
    output_box.innerText = text_area.value
};

click_btn.addEventListener("click", buttonClickFunc);
