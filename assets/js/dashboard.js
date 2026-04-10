let user = localStorage.getItem("user")
if (user === null) {
    window.location.href = "login.html"
}




let elementSelector = "#downloadBtn"
let downloadButton = document.querySelector(elementSelector)
let darkmodeBtn = document.querySelector("#darkmodeBtn")
let logoutBtn = document.querySelector("#logoutBtn")

let body = document.querySelector("body")


darkmodeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode")
})

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("user")
    window.location.href = "login.html"
})


let stockIndicator = document.querySelector("#stockIndicator")

function checkTonnage(tonnage) {
    return tonnage > 1000
}


if (checkTonnage(100)) {
    stockIndicator.style.display = "none"
}

if (downloadButton) {
    console.log(downloadButton)


    downloadButton.addEventListener("click", () => {
        alert("Your report has been downloaded successfully")

        downloadReport()
    })



    function downloadReport() {
        //implement the logic to download the report
    }


} else {
    console.warn(`The element with selector ${elementSelector} was not found`)
}

