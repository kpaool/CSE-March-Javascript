

let sales = new Map()

let date = new Date("2025-03-31")
sales.set("Maria", 350_000)
    .set("Priscilla", 400_000)
    .set(new Date("2025-03-31"), 500_000)
    .set([0, 1], "test")

console.log(sales)


console.log(sales.get("Maria"))


console.log(sales.get("maria"))

if (sales.has("maria")) {
    console.log(sales.get("maria"))
} else {
    sales.set("maria", 750_000)
}

console.log(sales)

sales.delete("maria")

console.log(sales)

console.log(sales.size)




let inventory = new Map([
    ["cement", 100],
    ["nails", 1000],
    ["bricks", 3500],
    ["paint", 40]
])

// console.log(inventory)


console.log("getting map value", inventory.get("nails"))


for (const item of inventory) {
    // console.log(item)
    // console.log(item[0])
    // console.log(item[0], item[1])
}





