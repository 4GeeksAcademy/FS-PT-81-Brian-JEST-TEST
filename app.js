
const sum = (sum1, sum2) => {
    return sum1 + sum2
}

const resta = (resta1, resta2) => {
    return resta1 - resta2
}
console.log(resta(6, 5));
console.log(sum(4, 6));

module.exports = { sum, resta };

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD;
}

const fromDollarToYen = (dollars) => {
    const euros = dollars / oneEuroIs.USD;
    const yenes = euros * oneEuroIs.JPY;
    return yenes;
}

const fromYenToPound = (yenes) => {
    const euros = yenes / oneEuroIs.JPY;
    const pounds = euros * oneEuroIs.GBP;
    return pounds
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }