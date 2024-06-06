"use strict";
function isPrimeWithPromise(num) {
    return new Promise((resolve, reject) => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                resolve(false);
                return;
            }
        }
        resolve(true);
    });
}
isPrimeWithPromise(2)
    .then(result => console.log(result))
    .catch(error => console.log(error));
