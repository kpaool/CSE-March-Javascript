
let heading = document.getElementById("heading")
let clickmeBtn = document.querySelector("#clickme")

let imageElem = document.querySelector("img")

let usernameInputField = document.querySelector("#username")
let passwordInputField = document.querySelector("#password")

// console.log(heading)

console.dir(clickmeBtn)

clickmeBtn.setAttribute("disabled", "true")

// clickmeBtn.style.backgroundColor = "green"
// clickmeBtn.style.borderColor = "yellow"

const URALOGO = "https://ura.go.ug/storage/2022/10/URA-logo.png"

setTimeout(() => {
    clickmeBtn.removeAttribute("disabled")

    imageElem.setAttribute("src", URALOGO)

}, 5000)







usernameInputField.value = "Maria"


usernameInputField.addEventListener("blur", () => {
    // how to read the value

    let username = usernameInputField.value

    usernameInputField.value = username.toUpperCase()

    console.log(username)
})

passwordInputField.addEventListener("blur", () => {
    let password = passwordInputField.value
    console.log(password)


})


heading.textContent = "<script src='https://malicous.js'></script>Username"

// console.log(heading.innerText)

heading.innerHTML = "<script src='https://example.com/malicous.js'></script>Username"

// heading.innerText = "Sorry, this is the correct text"


let elements = document.getElementsByClassName("btn")

console.log(elements)


elements[1].innerText = elements[1].innerText.toUpperCase()


let submitBtn = document.querySelector(".btn")


let buttons = document.querySelectorAll(".btn")

console.log(buttons)

let listElems = document.querySelectorAll("li")

console.log("list element 1", listElems[0])

let parentList = listElems[0].parentNode
console.log("parent list", parentList)

console.log("parent list children", parentList.children)

console.log("next element sibling", listElems[0].nextElementSibling)
console.log("previous element sibling", listElems[0].previousElementSibling)



/**
 * Web storages
 */



localStorage.setItem("app_name", "CSE MARCH 2026")


const APP_NAME = localStorage.getItem("app_name")
// heading.innerText = APP_NAME


localStorage.setItem("app_name", "Javascript Class")

// localStorage.removeItem("app_name")



let records = [
    { name: "Irene", age: 25 },
    { name: "Sherinah", age: 76 },
    { name: "Faith", age: 21 },
    { name: "Martha", age: 50 },
    { name: "Tendo", age: 12 }
]

let stringRecords = JSON.stringify(records)

// localStorage.setItem("table",stringRecords)








