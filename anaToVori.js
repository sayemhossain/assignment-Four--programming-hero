function anaToVori(ana) {
  if (ana < 1 || typeof ana != "number") {
    return "Invalid Input";
  } else {
    const vori = ana * 0.0625;
    return vori;
  }
}
const vori = anaToVori(32);
console.log(vori);
