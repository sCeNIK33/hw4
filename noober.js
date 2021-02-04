
function renderRide(ride, levelOfService, border, color) {
  document.querySelector('.rides').insertAdjacentHTML('beforeend', `
    <div class="border-4 ${border} p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${ride.passengerDetails.first} ${ride.passengerDetails.last}</h2>
          <p class="font-bold text-gray-600">${ride.passengerDetails.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl ${color} text-white p-2">
            ${ride.numberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${ride.pickupLocation.address}</p>
        <p>${ride.pickupLocation.city}, ${ride.pickupLocation.state} ${ride.pickupLocation.zip}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${ride.dropoffLocation.address}</p>
        <p>${ride.dropoffLocation.city}, ${ride.dropoffLocation.state} ${ride.dropoffLocation.zip}</p>
        </div>
      </div>
    </div>
    `)
}
async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)

  // 🔥 start here: write code to loop through the rides  

  for (let i = 0; i < json.length; i++) {
    let ride = json[i]
    for (let j = 0; j < ride.length; j++) {
      let legRide = ride[j]
      if (legRide.length > 1) {
        levelOfService = 'Noober Pool'
        border = `border-gray-900`
        color = `bg-gray-600`
        document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService}</span>
        </h1>`)
        renderRide(legRide, levelOfService, border, color)
      } else if (ride[0].purpleRequested) {
        levelOfService = 'Noober Purple'
        border = `border-purple-500`
        color = `bg-purple-600`
        renderRide(legRide, levelOfService, border, color)
      } else if (ride[0].numberOfPassengers > 3) {
        levelOfService = 'Noober XL'
        border = `border-gray-900`
        color = `bg-gray-600`
        renderRide(legRide, levelOfService, border, color)
      } else {
        levelOfService = 'Noober X'
        border = `border-gray-900`
        color = `bg-gray-600`
        renderRide(legRide, levelOfService, border, color)
      }
    }
  }
}
window.addEventListener('DOMContentLoaded', pageLoaded)

//////////
//   for(let i=0; i<json.length;i++) {
//   if(json[i].length > 1) {
//     levelOfService = "Noober Pool"
//   } else if(json[i].purpleRequested) {
//     levelOfService = "Noober Purple"
//   } else if(json[i].numberOfPassengers > 3) {
//     levelOfService = "Noober XL"
//   } else {
//     levelOfService = "Noober X"
//     outputElement.insertAdjacentHTML("beforeend",`



//   <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
//     <i class="fas fa-car-side"></i>
//     <span>${levelOfService}</span>
//   </h1>    
//     `)

//       // } else if(json[i].purpleRequested) {
//   //   levelOfService = "Noober Purple"
//   // } else if(json[i].numberOfPassengers > 3) {
//   //   levelOfService = "Noober XL"
//   // } else {
//   //   levelOfService = "Noober X"
//   // }

//       for(let j=0; j<json[i].length; j++) {
//       passengerName = json[i][j].passengerDetails.first + [" "] + json[i][j].passengerDetails.last
//       passengerPhone = json[i][j].passengerDetails.phoneNumber
//       passengerNumberOfPassengers = json[i][j].numberOfPassengers
//       passengerPickupAddressLine1 = json[i][j].pickupLocation.address
//       passengerPickupAddressLine2 = json[i][j].pickupLocation.city + ', ' + json[i][j].pickupLocation.state + ' ' + json[i][j].pickupLocation.zip
//       passengerDropoffAddressLine1 = json[i][j].dropoffLocation.address
//       passengerDropoffAddressLine2 = json[i][j].dropoffLocation.city + ', ' + json[i][j].dropoffLocation.state + ' ' + json[i][j].dropoffLocation.zip

//     outputElement.insertAdjacentHTML("beforeend",`

//   <div class="border-4 border-gray-900 p-4 my-4 text-left">
//     <div class="flex">
//       <div class="w-1/2">
//         <h2 class="text-2xl py-1">${passengerName}</h2>
//         <p class="font-bold text-gray-600">${passengerPhone}</p>
//       </div>
//       <div class="w-1/2 text-right">
//         <span class="rounded-xl bg-gray-600 text-white p-2">
//           ${passengerNumberOfPassengers}
//         </span>
//       </div>
//     </div>
//     <div class="mt-4 flex">
//       <div class="w-1/2">
//         <div class="text-sm font-bold text-gray-600">PICKUP</div>
//         <p>${passengerPickupAddressLine1}</p>
//         <p>${passengerPickupAddressLine2}</p>
//       </div>
//       <div class="w-1/2">
//         <div class="text-sm font-bold text-gray-600">DROPOFF</div>
//         <p>${passengerDropoffAddressLine1}</p>
//         <p>${passengerDropoffAddressLine2}</p>
//       </div>
//     </div>
//   </div> `)

//   } if (levelOfService = "Noober Purple") {
//     outputElement.insertAdjacentHTML("beforeend",`

//     <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
//     <i class="fas fa-car-side"></i>
//     <span>${levelOfService}</span>
//   </h1>    
//     `)

//       passengerNamePurp = json[i].passengerDetails.first + [" "] + json[i].passengerDetails.last
//       passengerPhonePurp = json[i].passengerDetails.phoneNumber
//       passengerNumberOfPassengersPurp = json[i].numberOfPassengers
//       passengerPickupAddressLine1Purp = json[i].pickupLocation.address
//       passengerPickupAddressLine2Purp = json[i].pickupLocation.city + ', ' + json[i].pickupLocation.state + ' ' + json[i].pickupLocation.zip
//       passengerDropoffAddressLine1Purp = json[i].dropoffLocation.address
//       passengerDropoffAddressLine2Purp = json[i].dropoffLocation.city + ', ' + json[i].dropoffLocation.state + ' ' + json[i].dropoffLocation.zip

//     outputElement.insertAdjacentHTML("beforeend",`
//     <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
//       <i class="fas fa-car-side"></i>
//       <span>Noober Purple</span>
//     </h1>

//     <div class="border-4 border-purple-500 p-4 my-4 text-left">
//       <div class="flex">
//         <div class="w-1/2">
//           <h2 class="text-2xl py-1">${passengerNamePurp}</h2>
//           <p class="font-bold text-gray-600">${passengerPhonePurp}</p>
//         </div>
//         <div class="w-1/2 text-right">
//           <span class="rounded-xl bg-purple-600 text-white p-2">
//           ${passengerNumberOfPassengersPurp}
//           </span>
//         </div>
//       </div>
//       <div class="mt-4 flex">
//         <div class="w-1/2">
//           <div class="text-sm font-bold text-gray-600">PICKUP</div>
//           <p>${passengerPickupAddressLine1Purp}</p>
//           <p>${passengerPickupAddressLine2Purp}</p>
//         </div>
//         <div class="w-1/2">
//           <div class="text-sm font-bold text-gray-600">DROPOFF</div>
//           <p>${passengerDropoffAddressLine1Purp}</p>
//           <p>${passengerDropoffAddressLine2Purp}</p>
//         </div>
//       </div>
//     </div>
//     `)


//   } if(levelOfService = "Noober XL") {
//     outputElement.insertAdjacentHTML("beforeend",`

//     <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
//       <i class="fas fa-car-side"></i>
//       <span>${levelOfService}</span>
//     </h1>
//     `)

//     outputElement.insertAdjacentHTML("beforeend",`
//     <div class="border-4 border-gray-900 p-4 my-4 text-left">
//       <div class="flex">
//         <div class="w-1/2">
//           <h2 class="text-2xl py-1">${passengerName}</h2>
//           <p class="font-bold text-gray-600">${passengerPhone}</p>
//         </div>
//         <div class="w-1/2 text-right">
//           <span class="rounded-xl bg-gray-600 text-white p-2">
//           ${passengerNumberOfPassengers}
//           </span>
//         </div>
//       </div>
//       <div class="mt-4 flex">
//         <div class="w-1/2">
//           <div class="text-sm font-bold text-gray-600">PICKUP</div>
//           <p>${passengerPickupAddressLine1}</p>
//           <p>${passengerPickupAddressLine2}</p>
//         </div>
//         <div class="w-1/2">
//           <div class="text-sm font-bold text-gray-600">DROPOFF</div>
//           <p>${passengerDropoffAddressLine1}</p>
//           <p>${passengerDropoffAddressLine2}</p>
//         </div>
//       </div>
//     </div>
//       `)

//   } if(levelOfService = "Noober X") {
//     outputElement.insertAdjacentHTML("beforeend",`

//     <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
//       <i class="fas fa-car-side"></i>
//       <span>${levelOfService}</span>
//     </h1>
//     `)

//     outputElement.insertAdjacentHTML("beforeend",`
//     <div class="border-4 border-gray-900 p-4 my-4 text-left">
//     <div class="flex">
//       <div class="w-1/2">
//         <h2 class="text-2xl py-1">${passengerName}</h2>
//         <p class="font-bold text-gray-600">${passengerPhone}</p>
//       </div>
//       <div class="w-1/2 text-right">
//         <span class="rounded-xl bg-gray-600 text-white p-2">
//         ${passengerNumberOfPassengers}
//         </span>
//       </div>
//     </div>
//     <div class="mt-4 flex">
//       <div class="w-1/2">
//         <div class="text-sm font-bold text-gray-600">PICKUP</div>
//         <p>${passengerPickupAddressLine1}</p>
//         <p>${passengerPickupAddressLine2}</p>
//       </div>
//       <div class="w-1/2">
//         <div class="text-sm font-bold text-gray-600">DROPOFF</div>
//         <p>${passengerDropoffAddressLine1}</p>
//         <p>${passengerDropoffAddressLine2}</p>
//       </div>
//     </div>
//   </div>
//   `)

//   }
// }
// }
// window.addEventListener('DOMContentLoaded', pageLoaded)


  // for (let i = 0; i < json.length; i++) {
  //   if (json.length > 1) {
  //     levelOfService = 'Noober Pool'
  //   } else if (json[i].purpleRequested) {
  //     levelOfService = 'Noober Purple'
  //   } else if (json[i].numberOfPassengers > 3) {
  //     levelOfService = 'Noober XL'
  //   } else {
  //     levelOfService = 'Noober X'
  //   }
  //   }


  //     document.querySelector('.rides').insertAdjacentHTML('beforeend', `
  //       <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
  //         <i class="fas fa-car-side"></i>
  //         <span>${levelOfService}</span>
  //       </h1>
  //     `)

  //     let borderClass
  //     let backgroundClass
  //     if (levelOfService = 'Noober Purple') {
  //       borderClass = 'border-purple-500'
  //       backgroundClass = 'bg-purple-600'
  //     } else {
  //       borderClass = 'border-gray-900'
  //       backgroundClass = 'bg-gray-600'
  //     }

  //  for (let j = 0; j < json[i].length; j++) {
  //   let leg = json[i][j]

  //       document.querySelector('.rides').insertAdjacentHTML('beforeend', `
  //         <div class="border-4 ${borderClass} p-4 my-4 text-left">
  //           <div class="flex">
  //             <div class="w-1/2">
  //               <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
  //               <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
  //             </div>
  //             <div class="w-1/2 text-right">
  //               <span class="rounded-xl ${backgroundClass} text-white p-2">
  //                 ${leg.numberOfPassengers} passengers
  //               </span>
  //             </div>
  //           </div>
  //           <div class="mt-4 flex">
  //             <div class="w-1/2">
  //               <div class="text-sm font-bold text-gray-600">PICKUP</div>
  //               <p>${leg.pickupLocation.address}</p>
  //               <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
  //             </div>
  //             <div class="w-1/2">
  //               <div class="text-sm font-bold text-gray-600">DROPOFF</div>
  //               <p>${leg.dropoffLocation.address}</p>
  //               <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
  //             </div>
  //           </div>
  //         </div>
  //       `)
  //     }
  //   }


  // window.addEventListener('DOMContentLoaded', pageLoaded)

//   for(let i=0; i<json.length;i++) {
//     if(json[i].length > 1) {
//     levelOfService = "Noober Pool"
//   } else if(json[i].purpleRequested) {
//     levelOfService = "Noober Purple"
//   } else if(json[i].numberOfPassengers > 3) {
//     levelOfService = "Noober XL"
//   } else {
//     levelOfService = "Noober X"
//   }
//     outputElement.insertAdjacentHTML("beforeend",`

//   <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
//     <i class="fas fa-car-side"></i>
//     <span>${levelOfService}</span>
//   </h1>    
//     `)

//       for(let j=0; j<json[i].length; j++) {
//       passengerName = json[i][j].passengerDetails.first + [" "] + json[i][j].passengerDetails.last
//       passengerPhone = json[i][j].passengerDetails.phoneNumber
//       passengerNumberOfPassengers = json[i][j].numberOfPassengers
//       passengerPickupAddressLine1 = json[i][j].pickupLocation.address
//       passengerPickupAddressLine2 = json[i][j].pickupLocation.city + ', ' + json[i][j].pickupLocation.state + ' ' + json[i][j].pickupLocation.zip
//       passengerDropoffAddressLine1 = json[i][j].dropoffLocation.address
//       passengerDropoffAddressLine2 = json[i][j].dropoffLocation.city + ', ' + json[i][j].dropoffLocation.state + ' ' + json[i][j].dropoffLocation.zip

//     outputElement.insertAdjacentHTML("beforeend",`

//   <div class="border-4 border-gray-900 p-4 my-4 text-left">
//     <div class="flex">
//       <div class="w-1/2">
//         <h2 class="text-2xl py-1">${passengerName}</h2>
//         <p class="font-bold text-gray-600">${passengerPhone}</p>
//       </div>
//       <div class="w-1/2 text-right">
//         <span class="rounded-xl bg-gray-600 text-white p-2">
//           ${passengerNumberOfPassengers}
//         </span>
//       </div>
//     </div>
//     <div class="mt-4 flex">
//       <div class="w-1/2">
//         <div class="text-sm font-bold text-gray-600">PICKUP</div>
//         <p>${passengerPickupAddressLine1}</p>
//         <p>${passengerPickupAddressLine2}</p>
//       </div>
//       <div class="w-1/2">
//         <div class="text-sm font-bold text-gray-600">DROPOFF</div>
//         <p>${passengerDropoffAddressLine1}</p>
//         <p>${passengerDropoffAddressLine2}</p>
//       </div>
//     </div>
//   </div> `)
//       }
//   // } else if(json[i].purpleRequested == true) {
//   //   levelOfService = "Noober Purple"
//   //   outputElement.insertAdjacentHTML("beforeend",`

//   //   <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
//   //   <i class="fas fa-car-side"></i>
//   //   <span>${levelOfService}</span>
//   // </h1>    
//   //   `)

//   //     passengerNamePurp = json[i].passengerDetails.first + [" "] + json[i].passengerDetails.last
//   //     passengerPhonePurp = json[i].passengerDetails.phoneNumber
//   //     passengerNumberOfPassengersPurp = json[i].numberOfPassengers
//   //     passengerPickupAddressLine1Purp = json[i].pickupLocation.address
//   //     passengerPickupAddressLine2Purp = json[i].pickupLocation.city + ', ' + json[i].pickupLocation.state + ' ' + json[i].pickupLocation.zip
//   //     passengerDropoffAddressLine1Purp = json[i].dropoffLocation.address
//   //     passengerDropoffAddressLine2Purp = json[i].dropoffLocation.city + ', ' + json[i].dropoffLocation.state + ' ' + json[i].dropoffLocation.zip

//   //   outputElement.insertAdjacentHTML("beforeend",`
//   //   <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
//   //     <i class="fas fa-car-side"></i>
//   //     <span>Noober Purple</span>
//   //   </h1>

//   //   <div class="border-4 border-purple-500 p-4 my-4 text-left">
//   //     <div class="flex">
//   //       <div class="w-1/2">
//   //         <h2 class="text-2xl py-1">${passengerNamePurp}</h2>
//   //         <p class="font-bold text-gray-600">${passengerPhonePurp}</p>
//   //       </div>
//   //       <div class="w-1/2 text-right">
//   //         <span class="rounded-xl bg-purple-600 text-white p-2">
//   //         ${passengerNumberOfPassengersPurp}
//   //         </span>
//   //       </div>
//   //     </div>
//   //     <div class="mt-4 flex">
//   //       <div class="w-1/2">
//   //         <div class="text-sm font-bold text-gray-600">PICKUP</div>
//   //         <p>${passengerPickupAddressLine1Purp}</p>
//   //         <p>${passengerPickupAddressLine2Purp}</p>
//   //       </div>
//   //       <div class="w-1/2">
//   //         <div class="text-sm font-bold text-gray-600">DROPOFF</div>
//   //         <p>${passengerDropoffAddressLine1Purp}</p>
//   //         <p>${passengerDropoffAddressLine2Purp}</p>
//   //       </div>
//   //     </div>
//   //   </div>
//   //   `)


//   // } else if(json[i].numberOfPassengers > 3) {
//   //   levelOfService = "Noober XL"
//   //   outputElement.insertAdjacentHTML("beforeend",`

//   //   <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
//   //     <i class="fas fa-car-side"></i>
//   //     <span>${levelOfService}</span>
//   //   </h1>
//   //   `)

//   //   outputElement.insertAdjacentHTML("beforeend",`
//   //   <div class="border-4 border-gray-900 p-4 my-4 text-left">
//   //     <div class="flex">
//   //       <div class="w-1/2">
//   //         <h2 class="text-2xl py-1">${passengerName}</h2>
//   //         <p class="font-bold text-gray-600">${passengerPhone}</p>
//   //       </div>
//   //       <div class="w-1/2 text-right">
//   //         <span class="rounded-xl bg-gray-600 text-white p-2">
//   //         ${passengerNumberOfPassengers}
//   //         </span>
//   //       </div>
//   //     </div>
//   //     <div class="mt-4 flex">
//   //       <div class="w-1/2">
//   //         <div class="text-sm font-bold text-gray-600">PICKUP</div>
//   //         <p>${passengerPickupAddressLine1}</p>
//   //         <p>${passengerPickupAddressLine2}</p>
//   //       </div>
//   //       <div class="w-1/2">
//   //         <div class="text-sm font-bold text-gray-600">DROPOFF</div>
//   //         <p>${passengerDropoffAddressLine1}</p>
//   //         <p>${passengerDropoffAddressLine2}</p>
//   //       </div>
//   //     </div>
//   //   </div>
//   //     `)

//   // } else {
//   //   levelOfService = "Noober X"
//   //   outputElement.insertAdjacentHTML("beforeend",`

//   //   <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
//   //     <i class="fas fa-car-side"></i>
//   //     <span>${levelOfService}</span>
//   //   </h1>
//   //   `)

//   //   outputElement.insertAdjacentHTML("beforeend",`
//   //   <div class="border-4 border-gray-900 p-4 my-4 text-left">
//   //   <div class="flex">
//   //     <div class="w-1/2">
//   //       <h2 class="text-2xl py-1">${passengerName}</h2>
//   //       <p class="font-bold text-gray-600">${passengerPhone}</p>
//   //     </div>
//   //     <div class="w-1/2 text-right">
//   //       <span class="rounded-xl bg-gray-600 text-white p-2">
//   //       ${passengerNumberOfPassengers}
//   //       </span>
//   //     </div>
//   //   </div>
//   //   <div class="mt-4 flex">
//   //     <div class="w-1/2">
//   //       <div class="text-sm font-bold text-gray-600">PICKUP</div>
//   //       <p>${passengerPickupAddressLine1}</p>
//   //       <p>${passengerPickupAddressLine2}</p>
//   //     </div>
//   //     <div class="w-1/2">
//   //       <div class="text-sm font-bold text-gray-600">DROPOFF</div>
//   //       <p>${passengerDropoffAddressLine1}</p>
//   //       <p>${passengerDropoffAddressLine2}</p>
//   //     </div>
//   //   </div>
//   // </div>
//   // `)

//   // }
// }
// }
// window.addEventListener('DOMContentLoaded', pageLoaded)