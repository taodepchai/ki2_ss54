function sortArrayWithPromise(arr: number[]): Promise<number[]> {
    return new Promise((resolve, reject) => {
        const sortArr = arr.sort((a, b) => a - b);
        resolve(sortArr);
    });
}
let arr2 = [1, 2, 3, 8, 67, 6, 7]
sortArrayWithPromise(arr2)
    .then(result => console.log(result))  
    .catch(error => console.log(error))
