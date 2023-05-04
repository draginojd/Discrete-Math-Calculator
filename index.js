
  function calculateCartesianProduct() {
    let input = document.getElementById("set").value;
    
    if (!input.includes(" , ")) {
      alert("Please enter two sets separated by a comma and a space (e.g. '{1, 5} , {1, 2}')");
      return;
    }
    
    let sets = input.split(", ");
    let setA = sets[0].trim().replace("{", "").replace("}", "").split(",");
    let setB = sets[1].trim().replace("{", "").replace("}", "").split(",");
    let cartesianProduct = [];
  
    for (let i = 0; i < setA.length; i++) {
      for (let j = 0; j < setB.length; j++) {
        cartesianProduct.push("(" + setA[i] + ", " + setB[j] + ")");
      }
    }
  
    document.getElementById("result").innerHTML = "Cartesian Product: {" + cartesianProduct.join(", ") + "}";
  }
  
  
  function removeInnerBrackets(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      let str = arr[i];
      str = str.replace("{", "");
      str = str.replace("}", "");
      str = str.replace("{", "");
      str = str.replace("}", "");
      result.push(str);
    }
    return result;
  }
  
  
  function appendToDisplay(value) {
    document.getElementById("set").value += value;
  }
  
  function clearDisplay() {
    document.getElementById("set").value = "";
  }
  
  function performAddition() {
    let input = document.getElementById("set").value;
  
    // Split the input string into two numbers
    let numbers = input.split(",");
    let a = Number(numbers[0]);
    let b = Number(numbers[1]);
  
    // Perform addition
    let result = addition(a, b);
  
    // Display the result in the result div
    document.getElementById("result").innerHTML = "Addition: " + result;
  }
  