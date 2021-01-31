async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
  
}

window.addEventListener('DOMContentLoaded', pageLoaded)

if (ride.length > 1) {
  levelOfService = 'Noober Pool'
} else if (ride[0].purpleRequested) {
  levelOfService = 'Noober Purple'
} else if (ride[0].numberOfPassengers > 3) {
  levelOfService = 'Noober XL'
} else {
  levelOfService = 'Noober X'
}

passenger1Name = `${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}`
passenger1Phone = ride[0].passengerDetails.phoneNumber
passenger1NumberOfPassengers = ride[0].numberOfPassengers
passenger1PickupAddressLine1 = ride[0].pickupLocation.address
passenger1PickupAddressLine2 = `${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}`
passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address
passenger1DropoffAddressLine2 = `${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}`

if (ride.length > 1) {
  passenger2Name = `${ride[1].passengerDetails.first} ${ride[1].passengerDetails.last}`
  passenger2Phone = ride[1].passengerDetails.phoneNumber
  passenger2NumberOfPassengers = ride[1].numberOfPassengers
  passenger2PickupAddressLine1 = ride[1].pickupLocation.address
  passenger2PickupAddressLine2 = `${ride[1].pickupLocation.city}, ${ride[1].pickupLocation.state} ${ride[1].pickupLocation.zip}`
  passenger2DropoffAddressLine1 = ride[1].dropoffLocation.address
  passenger2DropoffAddressLine2 = `${ride[1].dropoffLocation.city}, ${ride[1].dropoffLocation.state} ${ride[1].dropoffLocation.zip}`

}
if (ride.length > 2) {
  passenger3Name = `${ride[2].passengerDetails.first} ${ride[2].passengerDetails.last}`
  passenger3Phone = ride[2].passengerDetails.phoneNumber
  passenger3NumberOfPassengers = ride[2].numberOfPassengers
  passenger3PickupAddressLine1 = ride[2].pickupLocation.address
  passenger3PickupAddressLine2 = `${ride[2].pickupLocation.city}, ${ride[2].pickupLocation.state} ${ride[2].pickupLocation.zip}`
  passenger3DropoffAddressLine1 = ride[2].dropoffLocation.address
  passenger3DropoffAddressLine2 = `${ride[2].dropoffLocation.city}, ${ride[2].dropoffLocation.state} ${ride[2].dropoffLocation.zip}`
}




function renderProduct(product) {
  document.querySelector('.products').insertAdjacentHTML('beforeend', `
    <div class="p-4 w-full md:w-1/2 lg:w-1/3">
      <div class="border h-full p-4 flex flex-col">
        <h2 class="text-lg font-bold mb-4">${product.name}</h2>
        <div class="mb-4">
          <img src="${product.image}">
        </div>
        <div class="mb-4 text-gray-900">${product.description}</div>
        <div class="mt-auto text-purple-500 text-2xl">$${product.price}</div>
      </div>
    </div>
  `)
}

async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/products.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.log(json)
  
  // start here: write code to loop through the products; each iteration
  // of the loop should call your renderProduct function
  // make it work first; then extract to the separate renderProduct
  // function after it's 100% working without it

  let products = json.products

  for (let i = 0; i < products.length; i++) {
    let eachProduct = products[i]
    renderProduct(eachProduct)
  }
}

window.addEventListener('DOMContentLoaded', pageLoaded)



///


// 4-loops.js
​
for (let i = 0; i < burger.length; i++) {
  let ingredient = burger[i]
  console.log(ingredient)
}
​
// 4-practice.js
​
for (let i = 0; i < blockchain.length; i++) {
  let transaction = blockchain[i]
  let message = `${transaction.fromUser} transferred ${transaction.amount} KelloggCoin to ${transaction.toUser}`
  console.log(message)
}
​
// 5-functions.js
//  1) Before refactor:
​
function pageLoaded() {
  for (let i = 0; i < quotes.length; i++) {
    let quote = quotes[i]
    let outputElement = document.querySelector('.output')
    outputElement.insertAdjacentHTML('beforeend', `
      <h1 class="font-bold my-8 text-xl text-blue-300">${quote}</h1>
    `)
  }
}
​
//  2) After refactor:
​
function appendQuote(string) {
  let outputElement = document.querySelector('.output')
  outputElement.insertAdjacentHTML('beforeend', `
    <h1 class="font-bold my-8 text-xl text-blue-300">${string}</h1>
  `)
}
​
function pageLoaded() {
  for (let i = 0; i < quotes.length; i++) {
    let quote = quotes[i]
    appendQuote(quote)
  }
}
​
window.addEventListener('DOMContentLoaded', pageLoaded)