const div = document.getElementById("parent");

// fetch("https://fakestoreapi.com/products/category/jewelery")
//     .then((response) => response.json())
//     .then((products) => {
//         for(const product of products){
//             const html = `
//                 <div id=${product.id}>
//                     <p id="title">${product.title}</p>
//                     <img id="product-image" src="${product.image}" />
//                     <p id="price">${product.price}</p>
//                 </div>
//             `;

//             div.insertAdjacentHTML("afterbegin", html);
//         }
//     })
//     .catch((err) => console.log(err));

// const fetchData = async (apiUrl) => {
//     try {
//         const res = await fetch(apiUrl);
//         const data = await res.json();
        
//         for(const product of data){
//             const html = `
//                 <div id=${product.id}>
//                     <p id="title">${product.title}</p>
//                     <img id="product-image" src="${product.image}" />
//                     <p id="price">${product.price}</p>
//                 </div>
//             `;

//             div.insertAdjacentHTML("afterbegin", html);
//         }
//     } catch(err) {
//         console.log(err);
//     }
// }

// const api = "https://fakestoreapi.com/products/category/jewelery";

// fetchData(api);

const myForm = document.getElementById("form");
const postsContainer = document.getElementById("posts");

const addNewPost = (postObj) => {
    const html = `
        <article id="${postObj.id}">
            <h1>${postObj.title}</h1>
            <p>${postObj.body}</p>
            <img src="${postObj.image}" />
        </article>
    `;

    postsContainer.insertAdjacentHTML('afterbegin', html);
}

const postFunction = async (body, apiUrl) => {
    try {
        const res = await fetch(apiUrl, body);
        const data = await res.json();

        addNewPost(data)
    } catch(err) {
        console.log(err);
    }
}

myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const body = {
        method: "POST",
        body: JSON.stringify({
            title: myForm.elements.title.value,
            body: myForm.elements.body.value,
            userID: 1,
            image: "https://www.apple.com/v/apple-events/home/af/images/meta/overview__bcphzsdb4fpu_og.png?202406081017"
        }),
        headers: {
            "Content-type": "application/json"
        }
    }

    postFunction(body, "https://jsonplaceholder.typicode.com/posts");
})