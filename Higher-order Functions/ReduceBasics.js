var orders = [
    {amount: 100},
    {amount: 340},
    {amount: 630},
    {amount: 400},
    {amount: 130},
    {amount: 840},
];

// TODO: get the total amount of the orders.

/*// solved by a for loop
var totalAmount = 0;
for (var i = 0; i < orders.length; i++) {
    totalAmount += orders[i].amount;
}

console.log(totalAmount);*/

// solved by reduce function with normal func
// reduce require an object.
var totalAmount = orders.reduce(function (sum, order){
    return sum + order.amount;
}, 0); // 0 means starting point of the sum
console.log("Normal reduce function");
console.log("total orders amount: " + totalAmount);

// solved by reduce function with arrow func
var totalAmount2 = orders.reduce((sum, order) => sum + order.amount, 0); // 0 means starting point of the sum
console.log("\nReduce with arrow function");
console.log("total orders amount: " + totalAmount2);
