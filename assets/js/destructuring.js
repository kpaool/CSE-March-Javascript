

let numbers = [1, 2, 3]

// console.log(numbers[0])
// console.log(numbers[1])
// console.log(numbers[2])

const [a, b, c] = numbers

// console.log(a, b, c)
// console.log(b)
// console.log(c)

// the shape or the dimension of the array you are working with
let sale = ["Maria", "Cement", 50, 35_000, 0.18, true]
let sale2 = [undefined, "Cement", 50, 35_000, 0.18, true]


let sales = [sale, sale2]

const calcTotalCost = (quantity, costPrice, tax) => quantity * costPrice * (1 + tax)
console.log(sale[0])
console.log(sale[4])



sales.reduce((acc, sale) => {
    const [customer, product, quantity, costPrice, tax, isCredit] = sale
    return acc + calcTotalCost(quantity, costPrice, tax)
}, 0)


// const [customer, product, quantity, costPrice, tax, isCredit] = sale

//skip elements
const [customer, , quantity] = sale
const [customer2 = "Our customer", , quantity2] = sale2

// console.log(customer)
// console.log(customer2)

// console.log(sale)


let procurement = ["nails", 50]

const [item, productQuantity, costPrice = 0] = procurement

// console.log(item)
// console.log(productQuantity)
// console.log(costPrice)



//-- destructing objects  ------


let user = { name: "Faith", age: 19, email: "faith@student.refactory.academy", idempotencyKey: "sd23sdfn233" }

const { email: userEmail, name, age, gender = "F", idempotencyKey: uniqueKey } = user

console.log(age, userEmail, gender, uniqueKey)


let userInformation = {
    name: "Paul",
    age: 25,
    email: "[EMAIL_ADDRESS]",
    loading: false
}

let branchInformation = {
    branchName: "Nairobi Branch",
    branchCode: "NB",
    branchLocation: "Nairobi",
    loading: false
}

const { loading: userLoading } = userInformation

const { loading: branchLoading } = branchInformation





