"use strict";

window.addEventListener("resize", () => {
    if (window.innerHeight <= (document.querySelector("main").hidden ? document.querySelector("main:last-child") : document.querySelector("main")).clientHeight + window.innerHeight * 0.128) {
        for (const element of document.querySelectorAll("main")) {
            element.className = "static";
        }
    }
    else {
        for (const element of document.querySelectorAll("main")) {
            element.className = "";
        }
    }
});

let rating;

for (const option of document.querySelectorAll("menu button")) {
    option.addEventListener("click", (event) => {
        if (event.target.className == "") {
            if (rating != undefined) {
                document.querySelector(`li:nth-child(${rating})`).firstElementChild.className = "";
            }
            event.target.className = "selected";
            rating = event.target.innerText;
        }
        else {
            event.target.className = "";
            rating = undefined;
        }
    });
}

document.querySelector("main > button").addEventListener("click", () => {
    if (rating == undefined) {
        alert("Please select a rating.");
    }
    else {
        document.querySelector("span").innerText = rating;
        document.querySelector("main").hidden = true;
        document.querySelector("main:last-child").hidden = false;
    }
});