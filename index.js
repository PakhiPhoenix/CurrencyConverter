let sel1 = document.querySelector("#countryInput");
let sel2 = document.querySelector("#countryOutput");



for (let i = 0; i < arr.length; i++) {

    let opt1 = new Option(arr[i], arr[i]);
    let opt2 = new Option(arr[i], arr[i]);
    sel1.add(opt1);
    sel2.add(opt2);
//      opt[i].innerText = arr[i];
//   opt[i].value = arr[i];
//     console.log(opt[i].value);

}


 //sel1.addEventListener("change", changeName(sel1.selected));
sel1.addEventListener("change", () => {
    changeInput(sel1.value);
});


let changeInput = (val) => {
    console.log(val);

}
sel2.addEventListener("change", () => {
    changeOutput(sel2.value);
});


let changeOutput = (val) => {
    console.log(val);

}
