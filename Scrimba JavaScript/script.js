// // // // // // // // // // // // // // // // //document.getElementById("counter").innerText = 5

// // // // // // // // // // // // // // // // let myAge = 19

// // // // // // // // // // // // // // // // console.log(myAge)

// // // // // // // // // // // // // // // // let myName = "Sheriff"

// // // // // // // // // // // // // // // // console.log(myName)

// // // // // // // // // // // // // // // let myAge = 15

// // // // // // // // // // // // // // // let humanDogRatio = 10

// // // // // // // // // // // // // // // let myDog = myAge * humanDogRatio

// // // // // // // // // // // // // // // console.log(myDog)

// // // // // // // // // // // // // // let count = 5

// // // // // // // // // // // // // // count = count + 1

// // // // // // // // // // // // // // console.log(count)

// // // // // // // // // // // // // let bonusPoint = 50

// // // // // // // // // // // // // bonusPoint = bonusPoint + 50

// // // // // // // // // // // // // bonusPoint = bonusPoint - 75

// // // // // // // // // // // // // bonusPoint = bonusPoint + 45

// // // // // // // // // // // // // console.log(bonusPoint)

// // // // // // // // // // // // function increment() {
// // // // // // // // // // // //     console.log("The button was clicked")
// // // // // // // // // // // // }

// // // // // // // // // // // // increment()

// // // // // // // // // // // function countdown(){
// // // // // // // // // // //     console.log(5)
// // // // // // // // // // //     console.log(4)
// // // // // // // // // // //     console.log(3)
// // // // // // // // // // //     console.log(2)
// // // // // // // // // // //     console.log(1)
// // // // // // // // // // // }

// // // // // // // // // // // countdown()

// // // // // // // // // // function numbers(){
// // // // // // // // // //     console.log(42)
// // // // // // // // // // }

// // // // // // // // // // numbers()

// // // // // // // // // let lap1 = 31
// // // // // // // // // let lap2 = 33
// // // // // // // // // let lap3 = 36

// // // // // // // // // function logger(){
// // // // // // // // //     console.log( lap1 + lap2 + lap3)
// // // // // // // // // }

// // // // // // // // // logger()

// // // // // // // // let loggercomplete = 0

// // // // // // // // function logger(){
// // // // // // // //     loggercomplete = loggercomplete + 1
// // // // // // // // }

// // // // // // // // logger()
// // // // // // // // logger()
// // // // // // // // logger()

// // // // // // // // console.log(loggercomplete)

// // // // // // // let counter = document.getElementById("counter")
// // // // // // // let count = 0

// // // // // // // function increment(){
// // // // // // //     count = count + 1
// // // // // // //     counter.innerText = count
// // // // // // // }

// // // // // // // function save(){
// // // // // // //     console.log(count)
// // // // // // // }

// // // // // // // save()



// // // // // //  //Strigs  

// // // // // //  let username = "per"

// // // // // //  let message = "you have three notification"

// // // // // //  console.log(message + ", " + username)

// // // // // //  let messageToUser = message + ", " + username

// // // // // //  console.log(messageToUser)

// // // // // let name = "Sheriff"
// // // // // let greeting = "Hello, My name is "
// // // // // let myGreeting = greeting + name 

// // // // // console.log(myGreeting)

// // // // console.log(4 + 5)
// // // // console.log("2" + "4")
// // // // console.log("5" + 1)
// // // // console.log(100 + "100")

let welcomeEl = document.getElementById("welcome-el")

let name = "Sheriff"
let greeting = "Hi, welcome to SHEGZY WEB "

welcomeEl.innerText = greeting + name

welcomeEl.innerText += " Good"

let saveEl = document.getElementById("save-el")


let counterEl = document.getElementById("counter")
let count = 0

function increment(){
    count += 1 
    counterEl.textContent = count
}


function save(){
    let saveBoth = count + " - "
    saveEl.textContent += saveBoth
    counterEl.textContent = 0
    count = 0
}

// // // // practice

// // // let firstName = "Sheriff "
// // // let lastName = "Olamilekan"
// // // let fullName = firstName + lastName

// // // console.log(fullName)

// // // let name = "Sheriff"
// // // let greeting = "Hi there"

// // // function hellO(){
// // //     console.log(greeting + ", "+ name + "! ")
// // // }

// // // hellO()

// // let myPoint = 3

// // function add3Point(){
// //     myPoint += 3
// // }

// // function add1Point(){
// //     myPoint -= 1
// // }

// // add3Point()
// // add3Point()
// // add3Point()

// // add1Point()
// // add1Point()

// // console.log(myPoint)

let Error = document.getElementById("error")

function buy(){
    Error.innerText = "Something went wrong, Try again later"
}

let num1 = 8 
let num2 = 2 
let sum = document.getElementById("sum-el")

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add(){
    num1 += num2
    sum.textContent = "Sum: " + num1
}

function substract(){
    num1 -= num2
    sum.textContent = "Sum: " + num1
}

function divide(){
    num1 /= num2
    sum.textContent = "Sum: " + num1
}

function multiply(){
    num1 *= num2
    sum.textContent = "Sum: " + num1
}





















