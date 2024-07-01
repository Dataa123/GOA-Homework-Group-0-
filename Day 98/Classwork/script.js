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