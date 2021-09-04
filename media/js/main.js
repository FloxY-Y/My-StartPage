window.addEventListener("keyup", FUCK_GIT);

let keyNumber = 0;
/**
 * go to ohshitgit.com when konami code press
 * @param {KeyboardEvent} key
 */
function FUCK_GIT(key) {
    let konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    if (konami[keyNumber] == key.key) {
        keyNumber++;
    } else {
        keyNumber = 0;
    }

    if (keyNumber == konami.length) {
        document.querySelector(".FUCK-GIT").classList.add("show");
        setTimeout(() => { document.querySelector(".FUCK-GIT i").classList.add("show"); }, 10);
        setTimeout(() => { location.href = "https://ohshitgit.com"; }, 500);
    }
}

let button_list = document.querySelectorAll(".opt");
button_list.forEach(e => { e.addEventListener("click", () => serviceSelect(e.attributes["data-service"].value)); });

let serviceSelected = "ddg";

/**
 * @param {MouseEvent} e 
 */
function serviceSelect(e) {
    button_list.forEach(e => e.classList.remove("selected"));
    if (e == serviceSelected) {
        serviceSelected = "ddg";
        return;
    } else {
        serviceSelected = e;
        document.querySelector('[data-service="' + e + '"]').classList.add("selected");
    }
}

document.forms[0].addEventListener("submit", () => {
    document.forms[0][0].value = "!" + serviceSelected + " " + document.forms[0][0].value;
});
