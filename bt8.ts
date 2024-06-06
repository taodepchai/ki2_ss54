function countDown(n: number): Promise<string> {
    return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
            console.log(n);
            n--;
            if (n < 1) {
                clearInterval(interval);
                resolve('Hoàn thành quá trình đếm');
            }
        }, 1000);
    });
}

countDown(5)
    .then((message: string) => console.log(message))
    .catch(error => console.log(error))
