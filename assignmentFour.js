// problem number: 1
function anaToVori(ana) {
  if (ana < 1) {
    // valid input checker
    return "Invalid Input";
  } else {
    const vori = ana * 0.0625;
    return vori;
  }
}
const vori = anaToVori(16);
console.log(vori);

// problem number: 2
function pandaCost(senggaraQuantity, samusaquantity, jelapiQuantity) {
  if (senggaraQuantity < 0 || samusaquantity < 0 || jelapiQuantity < 0) {
    // valid input checker
    return "Invalid input";
  } else {
    const senggaraPrice = senggaraQuantity * 7;
    const samusaPrice = samusaquantity * 10;
    const jelapiPrice = jelapiQuantity * 15;
    const totalPrice = senggaraPrice + samusaPrice + jelapiPrice;
    return totalPrice;
  }
}
const totalPrice = pandaCost(1, 1, 1);
console.log(totalPrice);

// problem number: 3
function picnicBudget(persons) {
  var firstBatchInitialCost = 5000;
  var secondBatchInitialCost = 4000;
  var thirdBatchInitialCost = 3000;
  if (persons < 0) {
    // testing invalid input
    return "Invalid Input..! Please enter positive value";
  } else if (persons <= 100) {
    // when total person is smaller then 100
    const firstBatchCost = persons * firstBatchInitialCost;
    return firstBatchCost;
  } else if (persons <= 200) {
    // when total person is smaller then 200
    const firstBatchCost = firstBatchInitialCost * 100;
    const restPerson = persons - 100;
    const secondBatchCost = restPerson * secondBatchInitialCost;
    const totalPersonCost = firstBatchCost + secondBatchCost;
    return totalPersonCost;
  } else {
    // when total person is bigger then 200
    const firstBatchCost = firstBatchInitialCost * 100;
    const secondBatchCost = secondBatchInitialCost * 100;
    const restPerson = persons - 200;
    const thirdBatchCost = restPerson * thirdBatchInitialCost;
    const totalPersonCost = firstBatchCost + secondBatchCost + thirdBatchCost;
    return totalPersonCost;
  }
}
const totalCost = picnicBudget(45);
console.log(totalCost);

// problem number: 4
function oddFriend(friends) {
  for (const friend of friends) {
    if (friend.length == 0) {
      // invalid input checker
      return "Invalid input";
    } else if (friend.length % 2 != 0) {
      return friend;
    }
  }
}
var friends = ["badhon", "shanto", "raju", "ullash", "utsho", "nayan", "tusar"];
const targetFriend = oddFriend(friends);
console.log(targetFriend);
