function convertToKilograms() {
    const pounds = document.getElementById('pounds').value;
    if (pounds !== "") {
        const kilograms = pounds * 0.453592;
        document.getElementById('kilograms').value = kilograms.toFixed(2);
        document.getElementById('result').innerText = `${pounds} pounds is equal to ${kilograms.toFixed(2)} kilograms.`;
    } else {
        document.getElementById('kilograms').value = "";
        document.getElementById('result').innerText = "";
    }
}

function convertToPounds() {
    const kilograms = document.getElementById('kilograms').value;
    if (kilograms !== "") {
        const pounds = kilograms / 0.453592;
        document.getElementById('pounds').value = pounds.toFixed(2);
        document.getElementById('result').innerText = `${kilograms} kilograms is equal to ${pounds.toFixed(2)} pounds.`;
    } else {
        document.getElementById('pounds').value = "";
        document.getElementById('result').innerText = "";
    }
}

function convertToKilometers() {
    const miles = document.getElementById('miles').value;
    if (miles !== "") {
        const kilometers = miles * 1.60934;
        document.getElementById('kilometers').value = kilometers.toFixed(2);
        document.getElementById('result').innerText = `${miles} miles is equal to ${kilometers.toFixed(2)} kilometers.`;
    } else {
        document.getElementById('kilometers').value = "";
        document.getElementById('result').innerText = "";
    }
}

function convertToMiles() {
    const kilometers = document.getElementById('kilometers').value;
    if (kilometers !== "") {
        const miles = kilometers / 1.60934;
        document.getElementById('miles').value = miles.toFixed(2);
        document.getElementById('result').innerText = `${kilometers} kilometers is equal to ${miles.toFixed(2)} miles.`;
    } else {
        document.getElementById('miles').value = "";
        document.getElementById('result').innerText = "";
    }
}


// function convertPace() {
//     const minPerMile = document.getElementById('minPerMile').value;
//     const minPerKm = document.getElementById('minPerKm').value;

//     if (minPerMile !== "") {
//         // Convert min/mile to min/km and mph
//         const minPerKmValue = minPerMile * 0.621371;
//         const mphValue = 60 / minPerMile;
//         const kmphValue = mphValue * 1.60934;
//         const hoursValue = minPerMile / 60;

//         document.getElementById('minPerKm').value = minPerKmValue.toFixed(2);
//         document.getElementById('mph').value = mphValue.toFixed(2);
//         document.getElementById('kmph').value = kmphValue.toFixed(2);
//         document.getElementById('hours').value = hoursValue.toFixed(2);

//         document.getElementById('result').innerText = `${minPerMile} min/mile is equal to ${minPerKmValue.toFixed(2)} min/km and ${hoursValue.toFixed(2)} hours.`;

//         document.getElementById('result').innerText = `${minPerMile} min/mile is equal to ${minPerKmValue.toFixed(2)} min/km, ${mphValue.toFixed(2)} mph, and ${kmphValue.toFixed(2)} km/h.`;
//     } else if (minPerKm !== "") {
//         // Convert min/km to min/mile and km/h
//         const minPerMileValue = minPerKm / 0.621371;
//         const kmphValue = 60 / minPerKm;
//         const mphValue = kmphValue / 1.60934;

//         document.getElementById('minPerMile').value = minPerMileValue.toFixed(2);
//         document.getElementById('mph').value = mphValue.toFixed(2);
//         document.getElementById('kmph').value = kmphValue.toFixed(2);

//         document.getElementById('result').innerText = `${minPerKm} min/km is equal to ${minPerMileValue.toFixed(2)} min/mile, ${mphValue.toFixed(2)} mph, and ${kmphValue.toFixed(2)} km/h.`;
//     } else {
//         document.getElementById('mph').value = "";
//         document.getElementById('kmph').value = "";
//         document.getElementById('result').innerText = "";
//     }
// }

function convertValues() {
    const mph = parseFloat(document.getElementById('mph').value);
    const kmph = parseFloat(document.getElementById('kmph').value);
    const minPerMile = parseFloat(document.getElementById('minPerMile').value);
    const minPerKm = parseFloat(document.getElementById('minPerKm').value);

    if (!isNaN(mph)) {
        document.getElementById('kmph').value = (mph * 1.60934).toFixed(2);
        if (isNaN(minPerMile)) {
            document.getElementById('minPerMile').value = (60 / mph).toFixed(2);
        }
    }

    if (!isNaN(kmph)) {
        document.getElementById('mph').value = (kmph / 1.60934).toFixed(2);
        if (isNaN(minPerKm)) {
            document.getElementById('minPerKm').value = (60 / kmph).toFixed(2);
        }
    }

    if (!isNaN(minPerMile)) {
        document.getElementById('minPerKm').value = (minPerMile / 1.60934).toFixed(2);
        document.getElementById('hours').value = (minPerMile / 60).toFixed(2);
    }

    if (!isNaN(minPerKm)) {
        document.getElementById('minPerMile').value = (minPerKm * 1.60934).toFixed(2);
        document.getElementById('hours').value = (minPerKm / 60).toFixed(2);
    }

    calculateWaterIntake();
}

function convertOuncesToLiters(ounces) {
    const ozToLiter = 0.0295735;  // Conversion factor: 1 ounce = 0.0295735 liters
    const liters = ounces * ozToLiter;
    return liters.toFixed(2);  // Return the result rounded to 2 decimal places
}

function convertAndDisplay() {
    const ounces = parseFloat(document.getElementById('ouncesInput').value);
    if (!isNaN(ounces)) {
        const litersResult = convertOuncesToLiters(ounces);
        document.getElementById('litersResult').value = ` ${litersResult}`;
        document.getElementById('highO').value = ` ${litersResult} ` * 2;
        document.getElementById('highL').value = ` ${ounces}`  * 2;
    } else {
        document.getElementById('litersResult').value = 'Invalid input';
    }
}
