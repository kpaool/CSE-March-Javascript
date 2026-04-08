
let heading = document.getElementById("heading")

console.log(heading)

console.log(heading.innerText)

heading.innerText = "Sorry, this is the correct text"


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
heading.innerText = APP_NAME


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








