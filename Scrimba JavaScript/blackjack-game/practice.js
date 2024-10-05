
// practice

let person = {
    name: "Sheriff",
    age: 18,
    country: "Nigeria"
}
function logData(){
    console.log(person.name + " is " + person.age + " years old and leaving in " + person.country)
}

logData()

let age = 18

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if (age <= 5){
    console.log("free")
} else if (age <= 17){
    console.log("child discount")
} else if (age <= 26){
    console.log("student discount")
} else if (age <= 66){
    console.log("full price")
} else{
    console.log("senior citizen discount")
}

let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/

console.log("The 5 largest countries in the world:")
for (let i = 0; i < largeCountries.length; i++ ){
    console.log("- " + largeCountries[i])
}

let largeCountry = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()
largeCountry.shift()
let first = "China"
largeCountry.unshift(first)
largeCountry.pop()
largeCountry.push("Pakistan")

console.log(largeCountry)


let dayOfMonth = 13
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

if (dayOfMonth === 13 && weekday === "Friday"){
    console.log( "😱")
}

let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function getHand(){
    let randomIndex = Math.floor(Math.random() * 3)
    return hands[randomIndex]
}

console.log(getHand())


let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let pickFighter = Math.floor(Math.random() * fighters.length)
    let pickFighter2 = Math.floor(Math.random() * fighters.length)
    stageEl.textContent = fighters[pickFighter] +" vs "+ fighters[pickFighter2]
})


let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function fruitBasket(){
    for (let i = 0; i < fruit.length; i++){
        if (fruit[i] === "🍎"){
            appleShelf.textContent += "🍎" 
        }else if (fruit[i] === "🍊"){
            orangeShelf.textContent += "🍊"
        }
    }
}

fruitBasket()
