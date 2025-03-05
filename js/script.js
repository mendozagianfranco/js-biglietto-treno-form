const kmElement = document.getElementById('km-user');
const ageElement = document.getElementById('age-user');
const formElement = document.querySelector('form');

formElement.addEventListener('submit', function (e) {
    e.preventDefault();
    const userKm = parseFloat(kmElement.value);
    const userAge = parseInt(ageElement.value);
    const priceKm = 0.21;

    //se i dati sono validi, quindi numerici
    const isDataValid = !isNaN(userKm) && !isNaN(userAge);
    //se i dati sono maggiori di zero
    const isDataBiggerThanZero = userAge > 0 && userKm > 0;
    //se età compresa tra valori specifici
    const isAgeValid = userAge > 5 && userAge < 99;

    const validCondition = isDataValid && isDataBiggerThanZero && isAgeValid;

    if (validCondition) {

        //calcolo del prezzo base
        let basePrice = priceKm * userKm;
        //calcolo della percentuale
        let discountPercentage = 0;

        if (userAge < 18) {
            discountPercentage = 20;
        } else if (userAge >= 65) {
            discountPercentage = 40;
        }

        let discount = (basePrice * discountPercentage) / 100;
        //valore dello sconto da sottrarre al prezzo finale
        basePrice = basePrice - discount;
        //calcolo del prezzo formattato in euro
        let formattedPrice = basePrice.toFixed(2);

        //stampa del prezzo
        console.log(`Il prezzo finale del biglietto è ${formattedPrice} €`);

    } else {
        console.error('I dati inseriti non sono corretti');
    }
})

