const button = document.querySelector("#btn");
const info = document.querySelector("#info");

button.addEventListener("click", () => {
    let pStatus = info.className;

    if (pStatus !== "avalible") {
        info.classList.replace("notAvalible", "avalible");
        button.textContent = "LESS INFORMATION";

    } else {
        info.classList.replace("avalible", "notAvalible");
        button.textContent = "MORE INFORMATION";

    }
})