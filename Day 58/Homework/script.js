let form = document.getElementById('form');
let submit = document.getElementById('btn');

function createObject(name, gmail, password){
    this.name = name
    this.gmail = gmail
    this.password = password
}

submit.addEventListener('click', function(inputs){
    let nameInp = form.elements.name.value
    let gmailInp = form.elements.gmail.value
    let passwordInp = form.elements.password.value

    inputs = new createObject(nameInp, gmailInp, passwordInp)
    
    const para = document.createElement('p')
    const node1 = document.createTextNode("Hello " + inputs.name + ". ")
    const node2 = document.createTextNode("We sent the information on this gmail: " + inputs.gmail + ". ")
    const node3 = document.createTextNode("Confirm password: " + inputs.password + ". ")
    para.appendChild(node1)
    para.appendChild(node2)
    para.appendChild(node3)
    const element = document.getElementById('div1')
    element.appendChild(para)
});
