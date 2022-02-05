function pandaCost(senggaraQuantity, samusaQuantity, jelapiQuantity) {
  // valid input checker
  if (senggaraQuantity < 0 || samusaQuantity < 0 || jelapiQuantity < 0) {
    return "Invalid input";
  } else {
    const senggaraPrice = senggaraQuantity * 7;
    const samusaPrice = samusaQuantity * 10;
    const jelapiPrice = jelapiQuantity * 15;
    const totalPrice = senggaraPrice + samusaPrice + jelapiPrice;
    return totalPrice;
  }
}

const totalPrice = pandaCost(1, 1, 1);
console.log(totalPrice);
