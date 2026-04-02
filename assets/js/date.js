

let now = new Date()

console.log(now)

const year = now.getFullYear()
const month = now.getMonth() + 1
const date = now.getDate()

const hour = now.getHours()
const minutes = now.getMinutes()



// console.log("02.04.2026 09:43")
// console.log(`${date}.${month}.${year} ${hour}:${minutes}`)


console.log(now.toLocaleDateString('en-GB'))


// console.log(now.getTime())



let sale = {
    customerName: "Paul",
    itemName: "Cement",
    quantity: 1000,
    costPrice: 35_000,
    tax: 0.18,
    dueDate: new Date("2026-04-30")
}

// console.log(sale)

/**
 * 
 * @param {Date} date1 
 * @param {Date} date2 
 */
const getTimeDifference = (date1, date2) => {
    const difference = date1.getTime() - date2.getTime()

    const seconds = difference / 1000
    const minutes = seconds / 60
    const hours = Math.round(minutes / 60)
    const days = Math.round(hours / 24)
    const weeks = Math.round(days / 7)
    const months = Math.round(days / 30)

    return { seconds, minutes, hours, days }
}


const { days, hours } = getTimeDifference(sale.dueDate, now)

console.log(`${days} days remaining till sale is due`)
console.log(`${hours} hours remaining till sale is due`)
