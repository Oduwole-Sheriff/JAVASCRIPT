
// let firstCard = 5,
// secondCard = 16,
// sum = firstCard + secondCard;
// console.log(sum)

// if (sum < 21){
//     console.log("Do you want to draw a new card?")
// } else if(sum === 21){
//     console.log("Wohoo!, You have got blackjack")
// } else if(sum > 21){
//     console.log("You're out of the game")
// }



// let age = 21

// if (age < 21){
//     console.log("You cannot enter the club")
// } else {
//     console.log("Welcome")
// }

// let age = 100

// if (age < 100){
//     console.log("Not eligible")
// } else if(age === 100){
//     console.log("Here is your birthday card from the king")
// }else{
//     console.log("Not elegible, you have already gotten one")
// }

// console.log(4 === 3)  // false
// console.log(5 > 2)    // true
// console.log(12 > 12)  //false
// console.log(3 < 0)    //false
// console.log(3 >= 3)   // false
// console.log(11 <= 11) // false
// console.log(3 <= 2)   // false

let player = {
    name: "Sheriff",
    chip: 1000
}
let card = [],
sum = 0,
hasBlackjack = false,
isAlive = false
let message = "",
messageEl = document.getElementById("message-el"),
sumEl = document.getElementById("sum-el"),
cardEl = document.getElementById("card-el"),
playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chip

function getRandomCard(){

    let randomCard = Math.floor(Math.random() * 13) + 1

    if (randomCard > 10){
        return 10
    } else if (randomCard === 1){
        return 11
    } else{
        return randomCard
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard =  getRandomCard()
    let sum = firstCard + secondCard
    card = [firstCard, secondCard]
    renderGame()
}

function renderGame(){
    cardEl.textContent = "Cards: "
    for (let i = 0; i < card.length; i++){
    cardEl.textContent += card[i] + " " 
    }

    if (sum <= 20){
        message = "Do you want to draw a new card"
    } else if (sum === 21){
        message = "You have a blackjack"
        hasBlackjack = true
    } else{
        message = "You're out of the game"
        isAlive = false
    }
    
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum

}

function newCard(){

    console.log("Drawing a new card from the deck!")

    if (isAlive === true && hasBlackjack === false){
        let Card = getRandomCard()
        sum += Card
        card.push(Card)
        renderGame()
    }
    
}

// console.log(isAlive)

// let myPersonality = [
//     "CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"
// ]

// console.log(myPersonality[1])
// console.log(myPersonality[2])
// console.log(myPersonality[0])
// console.log(myPersonality.length)

// let mySelf = ["My name is Sheriff, i am", 18, true]

// console.log(mySelf[2])

// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here!"

// messages.push(newMessage)

// console.log(messages)

// messages.pop()

// console.log(messages)


// for (let count = 10; count = 21; count += 1){
//     console.log(count)
// }

// for (let i = 0; i < 101; i += 10) {
//     console.log(i)
// }

let sentence = ["Hello", "my","name", "is", "Per"]
let greetingEl = document.getElementById("greeting-el")

for (let i = 0; i < sentence.length; i ++) {
    greetingEl.textContent += sentence[i] + " "
}

// let excellent = [7, 3, 9]

// for (let i = 0; i < excellent.length; i ++) {
//     console.log(excellent[i])
// }

let player1Time = 102
let player2Time = 107

function getFatestRaceTime(){
    if (player1Time < player2Time) {
        return player1Time
    }
    else if (player2Time < player1Time) {
        return player2Time
    }
    else {
        return player1Time
    }
}

// let fastest = getFatestRaceTime()
// console.log(fastest)

function TotalRaceTime(){
   return player1Time + player2Time
}

let total = TotalRaceTime()

console.log(total)

// let randomNumber = Math.random() * 6
// console.log(randomNumber)

// let flooredNumber = Math.floor(3.718)
// console.log(flooredNumber)

// let randomNumber = Math.floor(Math.random() * 6)
// console.log(randomNumber)

// let randomNumber = Math.floor(Math.random() * 6) + 1
// console.log(randomNumber)

// function rollDice(){
//     let randomNumber = Math.floor(Math.random() * 6) + 1
//     return randomNumber
// }

// console.log(rollDice())

let hasSolvedChallenge = false,
hasHintsLeft = false

if (hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution ()
}

function showSolution (){
    console.log ("Showing the solution....")
}

let likesDocumentaries = true,
likesStartups = false

if (likesDocumentaries === true || likesStartups === true){
    recommendMovie()
}

function recommendMovie(){
    console.log("Hey, check out this new film we think you will like!")
}








