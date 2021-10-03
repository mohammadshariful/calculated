
// selection button

const addButton = document.querySelector(".add");
const subButton = document.querySelector(".sub");
const mulButton = document.querySelector(".multi");
const divButton = document.querySelector(".div");
// selection result

const resultName = document.querySelector(".result-Name");
const showResult = document.querySelector(".show-result");

let resName = "Result is";
// add

addButton.addEventListener("click",function (e) {
    e.preventDefault();
    const firstInput = Number( document.querySelector("#input-one").value);
    
    const secondInput = Number(document.querySelector("#input-two").value);
    let result = firstInput + secondInput;
    

    if ((firstInput === 0) && (secondInput === 0) ) {
        alert('Please input a valid number');
    } else {
        showResult.innerText = result;
        resultName.innerText = "Sum " + resName;

    }

})
// sub
subButton.addEventListener("click",function (e) {
    e.preventDefault();
    const firstInput = Number( document.querySelector("#input-one").value);
    
    const secondInput = Number(document.querySelector("#input-two").value);
    let result = firstInput - secondInput;
    

    if ((firstInput === 0) && (secondInput === 0) ) {
        alert('Please input a valid number');
    } else {
        showResult.innerText = result;
        resultName.innerText = "Sub " + resName;
    }

})

// multiplication
mulButton.addEventListener("click",multiplication);

function multiplication (e) {
    e.preventDefault();
    const firstInput = Number( document.querySelector("#input-one").value);
    
    const secondInput = Number(document.querySelector("#input-two").value);
    let result = firstInput * secondInput;
    

    if ((firstInput === 0) && (secondInput === 0) ) {
        alert('Please input a valid number');
    } else {
        showResult.innerText = result;
        resultName.innerText = "Multiplication " + resName;
    }
}

// division

divButton.addEventListener("click",division);
function division (e) {
    e.preventDefault();
    const firstInput = Number( document.querySelector("#input-one").value);
    
    const secondInput = Number(document.querySelector("#input-two").value);
    let result = firstInput / secondInput;
    

    if ((firstInput === 0) && (secondInput === 0) ) {
        alert('Please input a valid number');
    } else {
        showResult.innerText = result;
        resultName.innerText = "division " + resName;
    }
}
  