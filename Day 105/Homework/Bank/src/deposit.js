import { submit, Account, form } from "./script.js";

const listn = Array();

submit.addEventListener('click', function(e){
    e.preventDefault()
    let acc = new Account(form.elements.name.value, form.elements.code.value, form.elements.password.value);
    form.elements.name.value = "";
    form.elements.code.value = "";
    form.elements.password.value = "";
    acc.add(listn);
    console.log(listn);
})

console.log(listn)