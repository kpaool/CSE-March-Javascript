
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

console.log("list element 1",listElems[0])

let parentList = listElems[0].parentNode
console.log("parent list",parentList)

console.log("parent list children",parentList.children)

console.log("next element sibling",listElems[0].nextElementSibling)
console.log("previous element sibling",listElems[0].previousElementSibling)




