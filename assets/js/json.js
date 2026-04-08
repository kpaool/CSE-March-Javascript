class Sale {
    constructor(customerName, itemName, quantity, costPrice, tax, isCredit) {
        this.customerName = customerName
        this.itemName = itemName
        this.quantity = quantity
        this.costPrice = costPrice
        this.tax = tax
        this.isCredit = isCredit
    }

    calculateTotalCost() {
        return this.quantity * this.costPrice * (1 + this.tax)
    }
}

class CreditSale extends Sale {

    constructor(customerName, itemName, quantity, costPrice, tax, isCredit, dueDate, status) {
        super(customerName, itemName, quantity, costPrice, tax, isCredit)
        this.dueDate = dueDate
        this.status = status
    }

    getDaysDue() {
        let today = new Date()
        let dueDate = new Date(this.dueDate)
        let diffInTime = dueDate.getTime() - today.getTime()
        let diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24))
        return diffInDays
    }
}



const user = {
    firstName: "Paul",
    age: 40
}

// console.log(user, typeof user)


let jsonUser = '{"firstName":"Paul","age":40,"isCredit":true}'


try {
    let parsedJson = JSON.parse(jsonUser)
} catch (error) {
    console.error(error.message)
}



console.log(jsonUser, typeof jsonUser)
// console.log(parsedJson, typeof parsedJson)


// console.log(jsonUser.age)
// console.log(parsedJson.age, typeof parsedJson.age)
// console.log(parsedJson.isCredit, typeof parsedJson.isCredit)



function login(username, password) {
    let user = { username, password }
    let stringUser = JSON.stringify(user)
    console.log(stringUser, typeof stringUser)
}


// login("Lilian", "qwerty1234")

let creditSale = new CreditSale("Irene", "Cement", 10, 350000, 0.18, true, "2026-04-10", "pending")

console.log(creditSale)

let stringifiedSale = JSON.stringify(creditSale)

// console.log(stringifiedSale)

let order = {
    orderItems: [],
    customerName: "Ishimwe",
    cartTotal: 50000,
    currency: "UGX"
}


let mtnRequestToPay = {
    "msisdn": '256781000000',
    amount: order.cartTotal,
    currency: order.currency,
}

let mtnRequest = JSON.stringify(mtnRequestToPay)

// console.log(mtnRequest)














