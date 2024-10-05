
let myLeads = []
// myLeads = JSON.parse(myLeads)
// myLeads = JSON.stringify(myLeads)
// myLeads.push("i know how to code")
// console.log(typeof myLeads)
let inputEl = document.getElementById("input-el")
let saveBtn = document.getElementById("inout-btn")
const ulEl = document.getElementById("ul-el")



saveBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLead()
})

function renderLead(){
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++){
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
        <li>
            <a target='_blank' href=${myLeads[i]}>
                ${myLeads[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}


let containerEl = document.getElementById("container")

containerEl.innerHTML = "<button onclick='Buy()'>" + "Buy!" + "</button>"

function Buy(){
    containerEl.innerHTML += "<p>Thank you for buying</p>"
}







let openBox = document.getElementById("box")

openBox.addEventListener("click", function (){
    console.log("I want to open the box!")
})


// If possible, use const. If not, use let.

// Which variables below should be changed from let to const?

// The customer wants to order some stuff. Here are the details:
const basePrice = 520
const discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"

// Whops! Turns out the shipping will be a bit more complex
shippingCost = 15
shippingTime = "7-14 days"

// Calculating the full price
const fullPrice = basePrice - discount + shippingCost

// Finally, notifying the customer
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)


// template strings/literals

const recipient = "James"
const sender = "Shegz"

// Refactor the email string to use template strings
const email = `
 Hey ${recipient}
 ! How is it going? 
 Cheers ${sender}`

console.log(email)






