  const calculateButton = document.getElementById("calculate-button");
  const operationSelect = document.getElementById("operation");
  const h2Element = document.querySelector(".option-main-title");

  function changeTitle(e){

    const operation = operationSelect.value;
    switch (operation) {
      case "show-elements-of-a-set":
        
        h2Element.innerHTML = "Show Elements of a Set/Is Not a Set";
        break;
        
      case "axiom-of-extension":
        
        h2Element.innerHTML = "Axiom of Extension & Cardinal Number of a Set";
        // Call the function to calculate the axiom of extension and cardinal number of a set
        break;
      case "union":
        h2Element.innerHTML = "Set Union";
        // Call the function to calculate the union of two sets
        break;
      case "intersection":
        h2Element.innerHTML = "Set Intersection";
        // Call the function to calculate the intersection of two sets
        break;
      case "cartesian-product":
        h2Element.innerHTML = "Cartesian Product";
        break;
      case "complement":
        h2Element.innerHTML = "Set Complement";
        // Call the function to calculate the complement of a set
        break;
      case "permutations":
        h2Element.innerHTML = "Permutations";
        // Call the function to calculate permutations
        break;
      case "combinations":
        h2Element.innerHTML = "Combinations";
        // Call the function to calculate combinations
        break;
      case "normal":
        h2Element.innerHTML = "Classic Calculator";
        // Call the function to perform normal calculator operations
        break;
      }
      console.log(e);
  };

  calculateButton.addEventListener("click", function() {
    const operation = operationSelect.value;
    console.log("Selected operation: " + operation);

    switch (operation) {
      case "show-elements-of-a-set":
        showElementsOfASet();
        break;
      case "axiom-of-extension":
        // Call the function to calculate the axiom of extension and cardinal number of a set
        break;
      case "union":
        // Call the function to calculate the union of two sets
        break;
      case "intersection":
        // Call the function to calculate the intersection of two sets
        break;
      case "cartesian-product":
        calculateCartesianProduct();
        break;
      case "complement":
        // Call the function to calculate the complement of a set
        break;
      case "permutations":
        // Call the function to calculate permutations
        break;
      case "combinations":
        // Call the function to calculate combinations
        break;
      case "normal":
        // Call the function to perform normal calculator operations
        break;
      default:
        
    }
  });


  

  function showElementsOfASet() {
    let input = document.getElementById("set").value;
    
    let totalSet = input.split("= ");
    let setName = totalSet[0].trim();
    let set = totalSet[1].trim().replace("{", "").replace("}", "").split(",");
    let showElementsOfASet = [];

    for(let i = 0; i < set.length; i++)  {
    showElementsOfASet.push(set[i].trim());
    }
    
    document.getElementById("result").innerHTML = "Set name: " + "<br>" + setName + "<br>" + "Elements: " + "<br>" + showElementsOfASet.join(" , ") + "<br>" + "Anything that is not displayed over this text is not an element '∉'  of " + setName;

  }


  function calculateCartesianProduct() {
    let input = document.getElementById("set").value;
    
    if (!input.includes(" , ")) {
      alert("Please enter two sets separated by a comma and a space (e.g. '{1, 5} , {1, 2}')");
      return;
    }
    
    //input -> sets -> setA -> setB -> cartesianProduct
    let sets = input.split(", "); //spliting the input variable into an
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
  