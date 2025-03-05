const kmElement = document.getElementById('km-user');
const ageElement = document.getElementById('age-user');
const formElement = document.querySelector('form');
const priceText = document.getElementById('price-text');
const btnCancel = document.getElementById('btn-cancel');
const ticketElement = document.querySelector('.container-ticket');
const nameElement = document.getElementById('name-user');
const nameTicketElement = document.getElementById('name-ticket');
const offerTicketElement = document.getElementById('class-ticket');
const carriageTicketElement = document.getElementById('carriage-number');
const codeCPElement = document.getElementById('code-cp');

formElement.addEventListener('submit', function (e) {
    e.preventDefault();
    const userKm = parseFloat(kmElement.value);
    const userAge = ageElement.value;
    const userName = nameElement.value;
    const priceKm = 0.21;

    //se i dati sono validi, quindi numerici
    const isDataValid = !isNaN(userKm);
    //se i dati sono maggiori di zero
    const isDataBiggerThanZero = userKm > 0;


    const validCondition = isDataValid && isDataBiggerThanZero;

    if (validCondition) {

        //calcolo del prezzo base
        let basePrice = priceKm * userKm;
        //calcolo della percentuale
        let discountPercentage = 0;

        // Assegnazione sconto
        if (userAge === 'minorenne') {
            discountPercentage = 20;
            offerTicketElement.innerText = 'Biglietto Junior';
        } else if (userAge === 'over65') {
            discountPercentage = 40;
            offerTicketElement.innerText = 'Biglietto Senior';
        } else {
            offerTicketElement.innerText = 'Biglietto Standard';
        }

        let discount = (basePrice * discountPercentage) / 100;
        //valore dello sconto da sottrarre al prezzo finale
        basePrice = basePrice - discount;
        //calcolo del prezzo formattato in euro
        let formattedPrice = basePrice.toFixed(2);

        //stampa del prezzo
        priceText.innerText = `${formattedPrice} €`;
        nameTicketElement.innerText = userName;
        carriageTicketElement.innerText = generateRandomNumb(1, 10);
        codeCPElement.innerText = generateRandomNumb(10000, 99999);
        ticketElement.classList.add('show');

    }
});

btnCancel.addEventListener('click', function () {
    ticketElement.classList.remove('show');
});

function generateRandomNumb(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}