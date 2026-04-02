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

let sales = [sale1, sale2]



// sales = sales.filter((sale) => sale.isCredit == true)

// console.log(sales)

sales.push({
    customerName: 'Maria',
    itemName: 'Cement',
    itemCost: 35_000,
    quantity: 1000,
    tax: 0.18,
    isCredit: true
})

let customers = sales.map((sale) => sale.customerName)
console.log(customers)

let availableCustomers = new Set(customers)
console.log(availableCustomers)

let availableItems = new Set(["cement", "nails", "paint", "cement", "nails", "paint", "sand paper", "gloss paint"])

availableItems.add("cement")
availableItems.add("nails")
availableItems.add("paint")

console.log(availableItems)

console.log(availableItems.has("cement bags"))

availableItems.delete("paint")

console.log(availableItems.size)

for (const item of availableItems) {
    console.log(item)
}

let salesData = [
    {
    customerName: "Priscilla",
    itemName: "Cement",
    itemCost: 35_000,
    quantity: 1000,
    tax: 0.18,
    isCredit: false,
    phoneNumbers: ['07823234422', '07012353232'],
    "purchase Date": new Date()
},
    {
    customerName: "Priscilla",
    itemName: "Cement",
    itemCost: 35_000,
    quantity: 1000,
    tax: 0.18,
    isCredit: false,
    phoneNumbers: ['07823234422', '07012353232'],
    "purchase Date": new Date()
},
    {
    customerName: "Priscilla",
    itemName: "Cement",
    itemCost: 35_000,
    quantity: 1000,
    tax: 0.18,
    isCredit: false,
    phoneNumbers: ['07823234422', '07012353232'],
    "purchase Date": new Date()
},
    {
    customerName: "Priscilla",
    itemName: "Cement",
    itemCost: 35_000,
    quantity: 1000,
    tax: 0.18,
    isCredit: false,
    phoneNumbers: ['07823234422', '07012353232'],
    "purchase Date": new Date()
}
]


// console.log(salesData)
console.table(salesData)

