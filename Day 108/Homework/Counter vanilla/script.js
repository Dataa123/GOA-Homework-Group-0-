const addBtn = document.getElementById('add');
const minusBtn = document.getElementById('minus');
const countP = document.getElementById('count');

let count = 0;

countP.textContent = `Count: ${count}`

addBtn.addEventListener('click', () => {
    count++;
    countP.textContent = `Count: ${count}`
})

minusBtn.addEventListener('click', () => {
    count--;
    countP.textContent = `Count: ${count}`
})


// Imperative and Declarative Codes

// Imperative code is more detailed and it focuses on the way the result should be achived.
// Declarative code is focused about the outcome, like what should our program result in.

// So differences are: Details, Focused things.
// Simmilarities are: The result is the same.