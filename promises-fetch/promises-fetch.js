const promise = new Promise((resolve, reject) => {
    resolve();
});
promise
    .then(() => console.log("finally finished!"))
    .then(() => console.log("something else ran!"))
    .catch(() => console.log("something went wrong!"))
console.log(promise)