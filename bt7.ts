const myFirstPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve("Success!");
    }, 1000); 
});

myFirstPromise
    .then((message) => console.log(message))
    .catch(error => console.log(error))
