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
}

function readyNow() {
  // display budget
  // target budgetOut by ID
  let el = $( '#budgetOut');
  el.empty();
  el.append(budget);
  // handle click event
  $( '#addPurchaseButton').on('click', addPurchase);
} // end ready now
