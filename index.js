let sel1 = document.querySelector("#countryInput");
let sel2 = document.querySelector("#countryOutput");
let theform = document.querySelector("#theForm");

let inputCountry="USD";
let outputCountry;

for (let i = 0; i < arr.length; i++) {
  let opt1 = new Option(arr[i], arr[i]);
  let opt2 = new Option(arr[i], arr[i]);
  sel1.add(opt1);
  sel2.add(opt2);
}

sel1.addEventListener("change", () => {
  changeInput(sel1.value);
});

let changeInput = (val) => {
  inputCountry = val;
};
sel2.addEventListener("change", () => {
    changeOutput(sel2.value);

});

let changeOutput = (val) => {

    outputCountry = val;
    console.log(outputCountry);
};


theform.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("page submitted without reloading");
    getCurrency();
})
console.log(
  `https://v6.exchangerate-api.com/v6/0624643e7f549a5386b0c65b/latest/${inputCountry}`
);
async function getCurrency() {


    try {
        const res = await fetch(
          `https://v6.exchangerate-api.com/v6/0624643e7f549a5386b0c65b/latest/${inputCountry}`
        );
        const data = await res.json();
        console.log(data.conversion_rates[outputCountry]);
    }

    catch (error) {
        console.log(error);
    }
}


//getCurrency();