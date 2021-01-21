function roundCurrency(number) {
  return Math.ceil(number * 100) / 100;
}

function getAverage(array){
  let result = 0;
  for (let element of array) {
    result += element["price"];
  };
  let average = result / array.length;
  return roundCurrency(average); //rounds average to the nearest hundredth
};

console.log(`The average price is \$${getAverage(items)}`);

function findPriceRange(array) {
  let list_of_titles = [];
  for (let element of array) {
    if ((element["price"] >= 14) && (element["price"] <= 18)) {
      list_of_titles.push(`${element["price"]}: ${element["title"]}`);
    };
  };
  return list_of_titles;
}

console.log(findPriceRange(items));

function findGBP(array) {
  let list_of_titles = [];
  for (let element of array) {
    if (element["currency_code"] === "GBP") {
      list_of_titles.push(`${element["title"]} is £${element["price"]}`);
    };
  };
  return list_of_titles;
}

console.log(findGBP(items));

function findWood(array) {
  let list_of_titles = [];
  for (let element of array) {
    if (element["materials"].includes("wood")) {
      list_of_titles.push(`'${element["title"]}' is made of wood.`);
    };
  };
  return list_of_titles;
}

console.log(findWood(items));

function eightOrMore(array) {
  let list_of_titles = [];
  for (let element of array) {
    if (element["materials"].length >= 8) {
      list_of_titles.push(`'${element["title"]}' is made of ${element["materials"].length} different materials.`);
    };
  };
  return list_of_titles;
}

console.log(eightOrMore(items));
