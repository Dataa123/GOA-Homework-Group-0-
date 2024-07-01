// 1.

fetch('https://fakestoreapi.com/products')
    .then((res) => console.log(res))

// 2.

fetch('https://fakestoreapi.com/products')
    .then((result) => result.json())
    .then((json) => console.log(json));

// 3.

fetch('https://fakestoreapi.com/products')
    .then((result) => result.json())
    .then((json) => console.log(json))
    .catch((err) => console.log("Error reason", err));

// 4.

fetch('https://fakestoreapi.com/products')
    .then((result) => result.json())
    .then((json) => console.log(json))
    .catch((err) => console.log("Error reason", err))
    .finally(() => console.log("Process ended"));

// 5. (in index.html)

// 6. (same as 4)

// 7. (in index.html)

// 8.

setTimeout(() => {
    fetch('https://fakestoreapi.com/products');
}, 2000);

// 9.

setTimeout(() => {
    fetch('https://fakestoreapi.com/products')
        .then((result) => result.json());
}, 2000);

// 10.

setTimeout(() => {
    fetch('https://fakestoreapi.com/products')
        .then((result) => result.json())
        .then((json) => console.log(json));
}, 2000);

// 11.

setTimeout(() => {
    fetch('https://fakestoreapi.com/products')
        .then((result) => result.json())
        .then((json) => console.log(json))
        .catch((err) => console.log("Error reason", err));
}, 2000);

// 12.

setTimeout(() => {
    fetch('https://fakestoreapi.com/products')
        .then((result) => result.json())
        .then((json) => console.log(json))
        .catch((err) => console.log("Error reason", err))
        .finally(() => console.log("Process ended"));
}, 2000);

// 13.

setTimeout(() => {
    fetch('https://fakestoreapi.com/products/1')
        .then((result) => result.json())
        .then((json) => alert(json))
        .catch((err) => console.log("Error reason", err))
        .finally(() => console.log("Process ended"));
}, 2000);

// 14.

const div = document.querySelector("#main");

fetch('https://fakestoreapi.com/products')
    .then((res) => {return res.json()})
    .then((json) => {
        for(const product of json){
            const html = `
                <div id="${product.id}">
                    <p>${product.title}</p>
                    <img src="${product.image}" />
                    <p>${product.price}</p>
                </div>
            `
            main.insertAdjacentHTML('afterbegin', html);
        }
    })
    .catch((err) => console.log("Error reason:", err))
    .finally(() => console.log("Process ended"));

// 15???