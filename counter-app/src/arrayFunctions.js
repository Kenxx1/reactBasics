const items = [
  { name: "Bike", price: 100 },
  { name: "car", price: 5000 },
  { name: "thing", price: 0 },
  { name: "comp", price: 100 },
  { name: "chair", price: 50 }
];

const filterLowCost = items.filter(item => item.price < 200);
// Equivalent syntax
// const filterLowCost = items.filter(item => {
//   return item.price < 200;
// });
console.log(filterLowCost);

const itemPrices = items.map(item => item.price);
console.log(itemPrices);

// === checks data type and value
const foundItem = items.find(
  item => item.price === 100 && item.name !== "Bike"
);
console.log(foundItem);

// can use every/some to check against all items
const anyFreeItems = items.some(item => item.price <= 0);
console.log(anyFreeItems);

// pass in inital value for accumlator '0'
const total = items.reduce((accumulator, item) => {
  return accumulator + item.price;
}, 0);
console.log(total);
