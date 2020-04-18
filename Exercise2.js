const testNum = num => {
    return new Promise((resolve, reject) => {
      if (num > 50) {
        resolve(num + ' is greater than 50');
      } else {
        reject(num + ' is less than 50');
      } 
    //   if (num === 50) {
    //     resolve(num + ' is equal to 50');
    //   }
    });
  };
  
  testNum(29)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  testNum(60)
    .then(result => console.log(result))
    .catch(error => console.log(error));

    testNum(50)
     .then(result => console.log(result))
     .catch(error => console.log(error));