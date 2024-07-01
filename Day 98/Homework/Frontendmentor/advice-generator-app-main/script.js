const adviceNum = document.querySelector('#adviceId');
const adviceText = document.querySelector('#advice');
const myBtn = document.querySelector('#findQuote');


myBtn.addEventListener('click', function(){
    fetch('https://api.adviceslip.com/advice').then(response => {
        return response.json();
    }).then(adviceData => {
        const quote = adviceData.slip;
        adviceNum.innerHTML = `<p>ADVICE # ${quote.id}</p>`;
        adviceText.innerHTML = `<p>"${quote.advice}"</p>`;
    }).catch(error => {
        console.error(error)
    })
})