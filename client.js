$( document ).ready( readyNow);

const budget = 25000;
let purchases = [];

function addPurchase() {
  console.log( 'in addPurchase');
  // get user input create a new object
  let newPurchase = {
    name: $( '#purchaseNameIn' ).val(),
    price: $( '#purchasePriceIn' ).val()
  }
  // push the new purchase into the array
  purchases.push( newPurchase );
  // empty inputs
  $( '#purchaseNameIn' ).val( '' );
  $( '#purchasePriceIn' ).val( '' );
  // calculate remainingBudget
  calculateRemainingBudget();
  // update DOM
  displayPurchases();
} // end addPurchase

function calculateRemainingBudget() {
  console.log( 'calculateRemainingBudget');
  // loop through purchases array
  let totalPrices = 0;
  for( let i = 0; i< purchases.length; i++){
    //  for each purchase, add up total of all prices
    // subtract totalPrices from budget for remainingBudget
    totalPrices += Number( purchases[ i ].price);
  } // end for loop
  console.log( 'totalPrices:', totalPrices );
  // subtract totalPrices from budget for remainingBudget
  const remainingBudget = budget - totalPrices;
  // display remainingBudget
  let el = $( '#remainingBudgetOut');
  el.empty();
  el.append( remainingBudget );
} // end of calculateRemainingBudget

function displayPurchases(){
  console.log( 'in displayPurchases' );
// target output by ID
let el = $( '#purchasesOut' );
// empty
el.empty();
// loop through purchases array
for( purchase of purchases ){
  // for each purchase, create a list item
    el.append( `<li>` + purchase.name + `: $` + purchase.price +`</li>`);
  } // end for of loop
} // end of displayPurchases

function readyNow() {
  // display budget
  // target budgetOut by ID
  let el = $( '#budgetOut');
  el.empty();
  el.append(budget);
  // handle click event
  $( '#addPurchaseButton').on('click', addPurchase);
  // initalize display
  calculateRemainingBudget();
} // end ready now
