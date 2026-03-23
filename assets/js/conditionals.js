
let colorOfLight = "yellow"

if (colorOfLight === "green") {
    console.log("The traffic light is currently green")
} else if (colorOfLight === "red") {
    console.log("The traffic light is currently red, please stop ")
} else if (colorOfLight === "pedestrian_cross") {
    console.log("Pedestrians can now cross the road")
} else {
    console.log("The traffic is currently yellow, please be careful")
}

let reportedAge = 18
let gender = "M"

// if (reportedAge >= 18) {
//     console.log("These are adults")
//     if (gender == "M") {
//         console.log("These are men")
//     } else if (gender = "LGBTQ") {
//         console.log("These are lgbtq")
//     } else {
//         console.log("These are women")
//     }
// } else {
//     // console.log("These are children")
// }


let dayOfWeek = 0

switch (dayOfWeek) {
    case 0: console.log("Today is Monday");
        break;
    case 1: console.log("Today is Tuesday");
        break;
    case 2: console.log("Today is Wednesday");
        break;
    default: console.log("Today is not known");
        break;
}

// 0000 2359
let timeOfDay = "2300"
let customWelcomeMessage

// switch (timeOfDay){
//     case "0000": customWelcomeMessage="Welcome, you night owl"
//     break;
//     case "0800" : customWelcomeMessage = "Its not true, the early bird, doesnt catch the worm"
//     break;
//     case "1200" : customWelcomeMessage = "Good afternoon, I hope you have lunch money";
//     break;
//     default: customWelcomeMessage = "Please fix you clock"
//     break
// }

customWelcomeMessage = timeOfDay === "1200" ? "Good morning, I hope you have a great day" : "Have a good evening"
console.log(customWelcomeMessage)

let discount = gender === "M" ? 0.1 : 0.4

// cost of the product minus the discount
/**
 *  45000 X 10% = 45000
 * 
 *  45000-4500 = 40500
 * 
 * (1-0.1) = 0.9
 * 
 * 45000 X 0.9 
 */


let priceOfCurtains = 45000
console.log(priceOfCurtains * (1 - discount))





