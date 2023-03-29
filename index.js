function calculateCartesianProduct() {
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
  