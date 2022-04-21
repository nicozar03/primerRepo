function randomIntFromInterval( max) { // min and max included 
    return Math.floor(Math.random() * (max - 1 + 1) + 1)
  }
  
  const rndInt = randomIntFromInterval(6)
  console.log(rndInt)