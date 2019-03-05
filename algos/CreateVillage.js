function createVillage(num_of_families) {
  let village = [];
  let currentFamilyCombos = 
  
  for (let i = 0; i < num_of_families; i++) {
    let currentFam = [];
    let currentChild = createChild(75);
    
    if(currentChild === '') {
      currentFam.push(currentChild);
    } else {
      
      while(currentChild !== 'boy' && currentChild !== '') {
        currentFam.push(currentChild);
        currentChild = createChild(25);
      }
      
      if(currentChild !== '') {
        currentFam.push(currentChild);  
      }
      
    }
    village.push(currentFam);
  }
  
  return village;
}

function createChild(max) {
  
  let noChild = getRandomInt(101)
  
  if(noChild > max) {
    return ''
  }
  
  let gender = getRandomInt(2);
  
  if(gender) {
    return 'boy'
  } 
  
  return 'girl'
  
}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// I would go through each family and make sure that when I hit a boy or no child there's no more children 

function testVillage(families) {
  let output = true;
  families.forEach(family => {
    for(let i = 0; i < family.length; i++) {
      if(family[i] === 'boy' || family[i] === '') {
        if(family[i + 1] !== undefined) {
          output = false;
          break;
        }
      }
    }
  })
  
  return output; 
}

let villages = createVillage(10);

console.log(testVillage(villages));