/* function calculateCartesianProduct() {
    var setA = document.getElementById("setA").value.split(",");
    var setB = document.getElementById("setB").value.split(",");
    var cartesianProduct = [];
  
    for (var i = 0; i < setA.length; i++) {
      for (var j = 0; j < setB.length; j++) {
        cartesianProduct.push("(" + setA[i] + ", " + setB[j] + ")");
      }
    }
  
    cartesianProduct = removeInnerBrackets(cartesianProduct);
  
    document.getElementById("result").innerHTML = "Cartesian Product: {" + cartesianProduct.join(", ") + "}";
  } */
  function calculateCartesianProduct() {
    var input = document.getElementById("set").value;
    
    if (!input.includes(",")) {
      alert("Please enter two sets separated by a comma (e.g. '1,5,1,2')");
      return;
    }
    
    var sets = input.split(" , ");
    var setA = sets[0].trim().split(",");
    var setB = sets[1].trim().split(",");
    var cartesianProduct = [];
  
    for (var i = 0; i < setA.length; i++) {
      for (var j = 0; j < setB.length; j++) {
        cartesianProduct.push("(" + setA[i] + ", " + setB[j] + ")");
      }
    }
  
    document.getElementById("result").innerHTML = "Cartesian Product: {" + cartesianProduct.join(", ") + "}";
  }
  

  
  
  function removeInnerBrackets(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      var str = arr[i];
      str = str.replace("{", "");
      str = str.replace("}", "");
      str = str.replace("{", "");
      str = str.replace("}", "");
      result.push(str);
    }
    return result;
  }
  