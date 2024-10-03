function lowerCaseWords(inputArray) {
    return new Promise((resolve) => {
        const filteredArray = inputArray.filter(item => typeof item === 'string');
        const lowerCasedArray = filteredArray.map(item => item.toLowerCase());
        resolve(lowerCasedArray);
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error));