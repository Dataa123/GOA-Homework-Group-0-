const form = document.getElementById("form");
const submit = document.getElementById("submit");
class Account {
    constructor(name, code, pass, money){
        this.name = name;
        this.code = code;
        this.pass = pass;
        this.money = money;
    }
    add(listn) {
        listn.push({
            name: this.name,
            code: this.code,
            pass: this.pass,
            money: this.money
        });
    }
}
const listn = Array();
submit.addEventListener("click", function(e) {
    e.preventDefault();
    let acc = new Account(form.elements.name.value, form.elements.code.value, form.elements.password.value);
    form.elements.name.value = "";
    form.elements.code.value = "";
    form.elements.password.value = "";
    acc.add(listn);
    console.log(listn);
});

//# sourceMappingURL=index.44983732.js.map
