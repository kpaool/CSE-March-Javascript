
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
        super(customerName,itemName,quantity,costPrice,tax,isCredit)
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




let sale = new Sale("Irene", "Cement", 10, 350000, 0.18, false)
let sale_1 = new Sale("Paul", "Iron", 20, 35000, 0.18, false)

console.log(sale)
console.log(sale_1)

console.log(sale.calculateTotalCost())
console.log(sale_1.calculateTotalCost())

// console.log(sale.customerName, sale.costPrice)
// console.log(sale_1.customerName, sale_1.costPrice)

let creditSale = new CreditSale("Irene", "Cement", 10, 350000, 0.18, true, "2026-04-10", "pending")

console.log(creditSale, creditSale.calculateTotalCost() , creditSale.getDaysDue())

