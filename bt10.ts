function findElement(arr: number[], valueToFind: number): Promise<number | string> {
    return new Promise((resolve, reject) => {
      const foundIndex = arr.findIndex(element => element === valueToFind);
      if (foundIndex !== -1) {
        resolve(arr[foundIndex]);
      } else {
        reject(`Không tìm thấy phần tử ${valueToFind}`);
      }
    });
  }
  
  const arrayToSearch = [1, 2, 3, 4, 5];
  const valueToFind = 9;
  findElement(arrayToSearch, valueToFind)
    .then(result => console.log(result))
    .catch(error => console.log(error))
