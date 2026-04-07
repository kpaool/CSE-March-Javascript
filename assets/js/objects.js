let sale1 = {
    customerName: "Maria",
    itemName: "Paint",
    itemCost: 50_000,
    quantity: 5,
    tax: 0.18,
    isCredit: true
}

let sale2 = {
    customerName: "Priscilla",
    itemName: "Cement",
    itemCost: 35_000,
    quantity: 1000,
    tax: 0.18,
    isCredit: false,
    phoneNumbers: ['07823234422', '07012353232'],
    "purchase Date": new Date()
}











let _varX = "purchase Date"

console.log(sale2[_varX]
)
// console.log(sale1)
// console.log(sale2)

console.log(sale1.customerName, sale1.itemName, sale1.quantity, sale2.purchaseDate)



const calcTotalCost = (quantity, costPrice, tax) => quantity * costPrice * (1 + tax)

console.log(calcTotalCost(sale1.quantity, sale1.itemCost, sale1.tax))


// console.log(sale2)
// modify an existing property
sale2.isCredit = !sale2.isCredit

console.log(sale2)

if (sale2.isCredit == true) {
    // add new property

    sale2.dueDate = new Date()
}

// console.log(sale2)


delete sale2["purchase Date"]

// console.log(sale2)


let user = {
    firstName: "Paul",
    lastName: "Kanyesigye",
    age: 30,
    password: "home@Adre55",
    username: "paulkanyesigye"
}

delete user.password
// console.log(user)




// array 
// for (const value of array)



for (const key in sale2) {
    if (typeof sale2[key] == "boolean") {
        // console.log(key)
    }
}

const keys = Object.keys(sale2)
const values = Object.values(sale2)
const entries = Object.entries(sale2)

// console.log(keys)
// console.log(values)
// console.log(entries)

const sales = [
    sale1,
    sale2
]


let payment = {
    id: 12,
    amount: 50_000,
    currency: "UGX"
}

// for(const key of Object.keys(payment)){
//     console.log(key)
// }






let sale = {
    customerName: "",
    itemName: "",
    quantity: 0,
    costPrice: 1000,
    tax: 0.18,
    isCredit: false
}


let sale_1 = {
    customerName: "",
    itemName: "",
    quantity: 0,
    costPrice: 1000,
    tax: 0.18,
    isCredit: false
}

let sale_2 = {
    customerName: "",
    itemName: "",
    quantity: 0,
    costPrice: 1000,
    tax: 0.18,
    isCredit:false
}



console.log(sale)