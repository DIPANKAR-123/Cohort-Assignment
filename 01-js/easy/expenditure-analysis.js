/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};
  const transac = new Map();
  for(var i =0;i<transactions.length;i++) 
  { 
    const {category,price}=transactions[i];
    console.log(price,category);
    if(transac.has(category)){
      var currval=transac.get(category);
      transac.set(category,currval+price);
    }else{

      transac.set(category,price);
    }
  }
  console.log(transac);
  const ans =[]
  for (const x of transac.keys()) {
     
    var totalPrice=transac.get(x);
    const obj1={category:x,totalSpent:totalPrice};
    ans.push(obj1);
    console.log(totalPrice);
  }
  return ans;
 
}
calculateTotalSpentByCategory([
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656076800000,
    price: 20,
    category: 'Food',
    itemName: 'Pizza',
  },
])

module.exports = calculateTotalSpentByCategory;
