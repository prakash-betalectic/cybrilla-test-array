const getAllLeaders = arr => {
    
  let listOfLeaders = [];

  for (let a = 0; a < arr.length; a++) {
    
    let isASmaller = false; 
    
    for (let b = a+1; b < arr.length; b++) {
      
       
      if (a === 0 && b === 0) {
          continue;
      }
      
      if (arr[a] < arr[b]) {
        isASmaller = true;
        break;
      }
      
    }

    if (!isASmaller) {
      listOfLeaders.push(arr[a]);
    }

  }

  return listOfLeaders;
}

console.log(getAllLeaders([16, 17, 4, 3, 5, 2]))
