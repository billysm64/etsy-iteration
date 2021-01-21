//I originally did not use .map, .reduce, .filter. Refactored code is below the original solutions.

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

const prices = items.map(function(item) {
  return item.price;
})

const totalPrice = prices.reduce(function(acc, i) {
  return acc + i;
});

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

const filterPrices = items.filter(function(item) {
  return item.price >= 14 && item.price <=18 && item["currency_code"] === 'USD';
})

console.log(filterPrices);

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

const GBPItems = items.filter(function(item) {
  let x = "";
  return item["currency_code"] === 'GBP';
})

GBPItem.forEach(function(item) {
  console.log(`${item.title} costs £${item.price}`);
});

function findWood(array) {
  let list_of_titles = [];
  for (let element of array) {
    if (element["materials"].includes("wood")) {
      list_of_titles.push(`'${element["title"]}' is made of wood.`);
    };
  };
  return list_of_titles;
}

const woodItems = items.filter(function(item) {
  return items.materials.includes('wood');
});

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

const eightOrMore = items.filter(function(item) {
  return item.materials.length >= 8;
});

//----

const madeBySellers = items.filter(function(item) {
  return item.who_made === 'i_did';
});

console.log(`${madeBySellers.length} were made by their sellers.`)
