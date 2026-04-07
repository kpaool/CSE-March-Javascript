

let userName = "Irene"
let customerName = undefined
let password = "ds4@#4"

if (typeof userName !== "string") {
    console.log("Please provide a valid name")
}

let userAge = 25

// console.log(userName)


try {
    userAge.toUpperCase()
} catch (error) {
    // console.log(error)
    userAge = 0
    // console.log("before", password)
} finally {
    password = ""
}

// console.log("after", password)



// for (let i = userAge; i < 10; i++) {
//     console.log(i)
// }


let tonnage = 900

//business requirement states that the tonnage of any new procurement should be above 1000 tons



function checkTonnage(tonnage) {
    setupDatabaseConnection()
    if (tonnage < 1000) {
        // console.log("Tonnage is below the required amount")
        throw new Error("Tonnage is below the required amount")
    }

    if (tonnage > 10_000) {
        // console.log("Tonnage is above the required amount")
        throw new Error("Tonnage is above the required amount")
    }
}

let db = null
function setupDatabaseConnection() {
    db = "Connected to database"   // reserve 50MB of RAM & 300MB of storage for cache (quick access)
    return db
}

function closeDatabaseConnection() {
    db = null
}



try {
    checkTonnage(tonnage)
} catch (error) {
    // console.log(error)

    if (error.message === "Tonnage is below the required amount") {
        console.log("Please provide a higher valid tonnage")
        tonnage = 1000
    } else if (error.message === "Tonnage is above the required amount") {
        console.log("Please provide a lower valid tonnage")
        tonnage = 10_000
    }

}


function login(username, password) {

    let db = [
        {
            username: "martha",
            password: '12345'
        },
        {
            username: "paul",
            password: '4332'
        },
        {
            username: "irene",
            password: '5343'
        },
        {
            username: "magret",
            password: 'password'
        },
        {
            username: "ishimwe",
            password: 'qwert'
        }
    ]

    let user = db.find((user) => user.username == username)

    if (!user) {
        throw new Error("User not not found")
    }

    if (user.password !== password) {
        throw new Error("User password is incorrect")
    }

    return user

}


try {
    let user = login("martha", "12345")
    console.log(user)
} catch (error) {
    console.log(error.message)
}













