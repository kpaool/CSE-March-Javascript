function isPrime(num) {
    if (num <= 1) return false; // 1 and negative numbers are not prime
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false; // Found a divisor
    }
    return true;
}

function hardMath(count = 10) {

    return new Promise((resolve, reject) => {
        try {
            //find out the first 10 prime numbers
            console.time("prime")
            let primes = []
            for (let i = 0; i <= count; i++) {
                if (isPrime(i)) {
                    primes.push(i)
                }
            }
            console.log("Hello, this log 2")
            console.timeEnd("prime")
            resolve(primes)
        } catch (error) {
            reject(error)
        }

    })

}

// console.log("Hello, this log 1")


// let asyncHardMath = new Promise((resolve, reject) => {
//     resolve(hardMath(100000))
// })



let logMessage = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (false) {
            reject(new Error("We failed to resolve the string"))
        }
        resolve("This is a resolved string")
    }, 2000)
})

// logMessage
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// hardMath(200000)

// asyncHardMath
//     .then((result) => {
//         console.log(result)
//     })


// console.log("Hello, this log 3")





fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
        // console.log(response)
        // lines of code that a take while to resolve
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })



    


