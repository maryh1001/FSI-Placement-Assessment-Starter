// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Mary Hodges" // HINT: Replace this with your own name!

//--We'll use these variables to track the counts of each cookie type
//--let gb = 0 // Gingerbread
//--let cc = 0 // Chocolate Chip
//--let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
// --- const gbPlusBtn = document.querySelector('#add-gb')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
// --- gbPlusBtn.addEventListener('click', function() {
// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked


// TODO: Hook up event listeners for the rest of the buttons

// breaking page for my own code
// --- initializing variables ---

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = gb + cc + sugar // Total number of cookies


// Names for buttons for eventListeners - references the html id tags
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

function updateQuantitygb(displayQuantitygb){
    let quantitygb = document.querySelector("#qty-gb")
    quantitygb.innerHTML = displayQuantitygb
}

function updateQuantitycc(displayQuantitycc){
    let quantitycc = document.querySelector("#qty-cc")
    quantitycc.innerHTML = displayQuantitycc
}

function updateQuantitysugar(displayQuantitysugar){
    let quantitysugar = document.querySelector("#qty-sugar")
    quantitysugar.innerHTML = displayQuantitysugar
}

function updateQuantitytotal(displayQuantitytotal){
    let quantitytotal = document.querySelector("#qty-total")
    quantitytotal.innerHTML = displayQuantitytotal
}

// Event Listeners
gbPlusBtn.addEventListener('click', function() {
    gb++
    total++
    // to do make it update total gb on page
    updateQuantitygb(gb)
    updateQuantitytotal(total)
    // update total cookies on page
// console.log(`gb; ${gb}`)
})

ccPlusBtn.addEventListener('click', function() {
    cc++
    total++
    // to do make it update total gb on page
    updateQuantitycc(cc)
    updateQuantitytotal(total)
    // update total cookies on page
// console.log(`cc; ${cc}`)
})

sugarPlusBtn.addEventListener('click', function() {
    sugar++
    total++
    // to do make it update total gb on page
    updateQuantitysugar(sugar)
    updateQuantitytotal(total)
    // update total cookies on page
// console.log(`sugar; ${sugar}`)
})

gbMinusBtn.addEventListener('click', function() {
    if(gb > 0){
        gb--
        total--
    } else { gb = 0, total = gb + cc + sugar}
    // to do make it update total gb on page
    updateQuantitygb(gb)
    updateQuantitytotal(total)
    // update total cookies on page
})

ccMinusBtn.addEventListener('click', function() {
    if(cc > 0){
        cc--
        total--
    } else { cc = 0, total = gb + cc + sugar}
    // to do make it update total gb on page
    updateQuantitycc(cc)
    updateQuantitytotal(total)
    // update total cookies on page
})

sugarMinusBtn.addEventListener('click', function() {
    if(sugar > 0){
        sugar--
        total--
    } else { sugar = 0, total = gb + cc + sugar}
    // to do make it update total gb on page
    updateQuantitysugar(sugar)
    updateQuantitytotal(total)
    // update total cookies on page
})