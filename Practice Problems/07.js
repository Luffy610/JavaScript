/* Q7. For a given array with prices of 5 items -> [250,645,300,900,50]
All items have an offer of 10% OFF on them. Change the array to store the final price after
applying offer
*/

let prices = [250,645,300,900,50]
let final_prices = []

for(let price of prices){
    discount = price * 0.10;
    final_prices.push(price-discount);
}

console.log(final_prices)