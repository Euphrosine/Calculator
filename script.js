function add(a, b) {
    return a + b;
  }
  
  
  function subtract(a, b) {
    return a - b;
  }
  
  
  function multiply(a, b) {
    return a * b;
  }
  

  function divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
  
  
  console.log(add(5, 3));      
  console.log(subtract(8, 3)); 
  console.log(multiply(4, 6)); 
  console.log(divide(15, 3));  
  