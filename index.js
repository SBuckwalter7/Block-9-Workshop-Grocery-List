const items = [
  { id: 1, name: "apple", price: 1.75, categoryId: 1, inventory: 100 },
  { id: 2, name: "banana", price: 0.25, categoryId: 1, inventory: 100 },
  { id: 3, name: "orange", price: 1.0, categoryId: 1, inventory: 100 },
  { id: 4, name: "broccoli", price: 3.0, categoryId: 2, inventory: 100 },
  { id: 5, name: "cucumber", price: 1.0, categoryId: 2, inventory: 100 },
  { id: 6, name: "milk", price: 5.75, categoryId: 3, inventory: 100 },
  { id: 7, name: "cheddar cheese", price: 4.0, categoryId: 3, inventory: 100 },
  { id: 8, name: "sourdough loaf", price: 5.5, categoryId: 4, inventory: 100 },
];

const cart = [];

// ------------------ Complete the functions written below ------------------------------ //

function logItemNames() {
  //TODO: use the .forEach() method to log out the name of each item

//My Answer below is the same as the teachers
  items.forEach(item => {
    console.log(item.name);
  });

}

/**
 * @param {number} id
 * @returns {{id: number, name: string, price: number, category: string, inventory: number}} item
 */
function findItemById(id) {
  // TODO: Use the .find() method to return the item who's id matches the passed in id

  //took me a long time to find this code that works,
  //it shows the whole row of categories though, not just one specific one
  //My Answer Below: we can use 2 or 3 = signs here
  //return items.find(item => item.id === id);

  //Teachers answer below
   return items.find(item => item.id == id);

}

/**
 * @returns {items[]} Returns a new array with capitalized names
 */
function capitalizeNames() {
  // TODO:  Use the .map() and possibly .slice() methods and return a new items array with the item names capitalized
  // DO NOT MUTATE THE ORIGINAL ARRAY IN YOU LOGIC

  //My Answer Below ---------------------------------------
  // MAP is used to match things up, i don't understand how it can be used to Capitalize something??
// I dont think we ever went over the .slice method??

  /** This is code i was working on trying to figure out how to Capitalize them
   * I can't figure out how to do it with a MAP at all
  let newItems = [];
  items.forEach(name => {
    let capitalizedItems = items.name.toUpperCase();
    newItems.push(capitalizedItems);
  });
  console.log(newItems);
*/

//Finally found this code and got it to work! Not quite sure how map is used here but I do get the gist of it.
// item.name.chartAt(0) = grab the first character of the word in that name category
//.toUpperCase() = just means uppercase it
//+ item.name.slice(1) = connects that 0 character back to the rest of the word at character 1

//My Answer works too
//return items.map(item => item.name.charAt(0).toUpperCase() + item.name.slice(1));

//Teachers Answer Below ----------------------------------------------

//variableName.toUpperCase()
//map

return items.map(item=>{
  let name = item.name //apple
  //to pull letter out from string
  //option 1 = use charAt
  //option 2 = use bracket notation

  // let firstLetter = name.charAt(0)
  let firstLetter = name [0]
  let capitalizedLetter = firstLetter.toUpperCase()
  let modifiedWord = capitalizedLetter+name.slice(1)
  return modifiedWord
//slice(start, end)
})



}

/**
 * @returns {number} the sum of all inventory items
 */

function calculateTotalInventory() {
  // TODO Use the .reduce() method to return the total number of items in inventory

  //My Answer Below
  return items.reduce((total, item) => total + item.inventory, 0);

  //Teachers Answer
  //return items.reduce((sum, item)=>{sum+item["inventory"]},0)

}

/**
 * @returns {number} the total price of all inventory items combined
 */
function calculateAllInventoryPrice() {
  // TODO Use the .reduce() method to return the total price of all the items in inventory
//my answer below
  return items.reduce((total, item) => total + (item.price * item.inventory), 0);

  //Teachers Answer
  // return items.reduce((sum, item)=>{sum+item["inventory"]*item["price"]},0)

}

/**
 * @param {string} name
 * @returns {number} the price of the item passed in
 */
function getItemPriceByName(name) {
  // TODO: Use your knowledge of objects and arrays to get the price of the item passed in

  //it shows the whole row of categories though, not just one specific one
  //My answer below
  return items.find(item => items.price === items.price);

  //teachers answer
  //let foundItem = items.find(item=>items.name==name)
  //return foundItem.price

}

/**
 * @param {categoryId} id of category to find
 * @returns {items[]} array of all items which belong to the given category
 */
function filterItemsByCategoryId(categoryId) {
  // TODO: use the .filter() method to filter out all items which don't belong the passed in category

  //Still need review of this I am 60/40 in getting it
  //My Answer
  return items.filter(item => item.categoryId === categoryId);

  //Teachers Answer
  //return items.filter(item=>item.categoryId==categoryID)

}

function logCartItems() {
  // TODO: Loop through your cart and use the indexes to log the names of all items in your cart

  /** I have been stuck on this for an hour... I really can't figure out how to do this
  I did find some complicated looking answers on stack overflow, but I am so far from understanding
  that i didn't want to use something I dont know how it works
*/

//Teachers Answer

//for each loop
cart.forEach((itemId)=>{
  //we need to get the item object using the id
  //we can then console log the item name
  let item= findItemById(itemId)
  //console.log(item)
  console.log(item.name)
})





}

/**
 * @returns { number } returns the total price of items in your cart
 */
function calculateTotalCartPrice() {
  // TODO: Loop through your cart and return the total price of all items in your cart


  /** I have been stuck on this for an hour... I really can't figure out how to do this
  I did find some complicated looking answers on stack overflow, but I am so far from understanding
  that i didn't want to use something I dont know how it works

*/

//Teachers Answer

//how to get array of objects for all the items in the cart?
// we can reuse logCartItems logic and save objects in an array

let cartItems = []
cart.forEach((itemId)=>{
  //we need to get the item object using the id
  //we can then console log the item name
  let item= findItemById(itemId)
  //console.log(item.name)
  cartItems.push(item)
})
// console.log(cartItems) ----you can console log to find if your array is empty or not
  return cartItems.reduce((sum, item)=>{
    return sum+item["price"]},0)
// if you use { } you must use return... if no { } you don't need to have return

}

// --------------------- DO NOT CHANGE THE CODE BELOW ------------------------ //

const ids = prompt(
  "enter numbers separated by commas for the ids of the items you want to add to your cart",
  "1, 3, 5"
);
// Split the string of numbers into an array of strings.
const idArr = ids.split(", ");

idArr.forEach((id) => cart.push(id));
console.log(`The names of all the items are: `);
logItemNames();
const itemId = prompt("enter the id of an item you are trying to find", "1");
console.log(
  `The item with id ${itemId} is  ${JSON.stringify(
    findItemById(+itemId),
    null,
    2
  )}`
);
console.log(
  "We can map over an array and return a new array with the names capitalized like so: ",
  capitalizeNames()
);
console.log(
  "The total inventory of all grocery items is: ",
  calculateTotalInventory()
);
console.log(
  "The total price of all items in inventory is: ",
  calculateAllInventoryPrice()
);

const itemToFind = prompt(
  "Enter the name of an item to find the price of",
  "apple"
);
console.log(`The price of ${itemToFind} is: `, getItemPriceByName(itemToFind));

const categoryId = prompt(
  "Enter a number between 1-4 to filter only items with that categoryId",
  2
);
console.log(
  `The items in category ${categoryId} are: `,
  filterItemsByCategoryId(+categoryId)
);

console.log("Cart items: ");
logCartItems();

console.log(
  `The total price of the items in your cart is: `,
  calculateTotalCartPrice()
);
