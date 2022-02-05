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
const totalCost = picnicBudget(101);
console.log(totalCost);
