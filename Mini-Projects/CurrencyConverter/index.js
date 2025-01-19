
const from_selects = document.querySelector("#from-dropdown");
const to_selects = document.querySelector("#to-dropdown");
const from_img = document.querySelector(".from-img");
const to_img = document.querySelector(".to-img");
const converter_space = document.querySelector(".converter-rate");
const exchange_button = document.querySelector(".exchange-btn");
const arrow = document.querySelector(".bi-directional-arrow");

for (currCode in countryList){
    let newOptionFrom = document.createElement("option");
    let newOptionTo = document.createElement("option");
    newOptionFrom.innerText = currCode;
    newOptionFrom.value = currCode;
    newOptionTo.innerText = currCode;
    newOptionTo.value = currCode;
    to_selects.append(newOptionTo);
    from_selects.append(newOptionFrom);
    if (currCode == "USD"){
        newOptionFrom.selected = "selected";
    }
    if (currCode == "INR"){
        newOptionTo.selected = "selected";
    }
};

let updateFlagFrom = (countryCode) => {
    from_img.src = `https://flagsapi.com/${countryList[countryCode]}/flat/64.png`;
};

from_selects.addEventListener("change", (evt) => {
    updateFlagFrom(evt.target.value);
    getExchangeRate();
});

let updateFlagTo = (countryCode) => {
    to_img.src = `https://flagsapi.com/${countryList[countryCode]}/flat/64.png`;
};

to_selects.addEventListener("change", (evt) => {
    updateFlagTo(evt.target.value);
    getExchangeRate();
});

let getExchangeRate = async () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    console.log(formattedDate)
    url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${formattedDate}/v1/currencies/${from_selects.value.toLowerCase()}.json`
    let response = await fetch(url);
    let data =  await response.json();
    console.log(data)
    console.log(from_selects.value.toLowerCase())
    let rate = data[from_selects.value.toLowerCase()][to_selects.value.toLowerCase()].toFixed(2);
    converter_space.innerText = `1 ${from_selects.value} = ${rate} ${to_selects.value}`
    return rate;
}

let finalAmount = async () => {
    let rate = await getExchangeRate();
    let amount_field = document.querySelector(".amount-field");
    let amount = amount_field.value;
    let final_amount = (amount * rate).toFixed(2);
    converter_space.innerText = `${amount} ${from_selects.value} = ${final_amount} ${to_selects.value}`
}

exchange_button.addEventListener("click", () => {
    finalAmount();
})

arrow.addEventListener("click", () => {
    let temp = from_selects.value;
    from_selects.value = to_selects.value;
    to_selects.value = temp;
    updateFlagFrom(from_selects.value);
    updateFlagTo(to_selects.value);
    getExchangeRate();
})

window.addEventListener("load", () => {
    let amount_field = document.querySelector(".amount-field");
    amount_field.value = "1";
    getExchangeRate();  
})