let sel1 = document.querySelector("#countryInput");
let sel2 = document.querySelector("#countryOutput");
let theform = document.querySelector("#theForm");
let Amount = document.querySelector("#Amount");
let ans = document.querySelector("p");
let amount;

let inputCountry="USD";
let outputCountry='USD';


 // Populating the options

for (let i = 0; i < arr.length; i++) {
  let opt1 = new Option(arr[i], arr[i]);
  let opt2 = new Option(arr[i], arr[i]);
  sel1.add(opt1);
  sel2.add(opt2);
}


// Taking input of amount


Amount.addEventListener("change", () => {
  amount = Amount.innerText;
  console.log(amount);
});



//Adding event listener on Currency


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


// Form submission

theform.addEventListener("submit", function (e) {
    e.preventDefault();


    getCurrency();
})


// API call

async function getCurrency() {


    try {
        //  console.log("both values can't be same");
        // if (inputCountry === outputCountry) {

        //     alert("Both values can't be same");
        // }
        const res = await fetch(
          `https://v6.exchangerate-api.com/v6/0624643e7f549a5386b0c65b/latest/${inputCountry}`
        );
        const data = await res.json();
        console.log(data.conversion_rates[outputCountry]);
        ans.innerText = data.conversion_rates[outputCountry] * Amount.value + outputCountry;
    }

    catch (error) {
        console.log(error);
    }
}




