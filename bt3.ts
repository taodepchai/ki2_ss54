function sumWithPromise(arr: number[]): Promise<number> {
    return new Promise((resolve, reject) => {
        const sum = arr.reduce((acc, num) => acc + num, 0);
        resolve(sum);
    });
}
let arr = [1, 2, 3, 8, 67, 6, 7]
sumWithPromise(arr)
    .then(result => console.log(result))  
    .catch(error => console.log(error))
