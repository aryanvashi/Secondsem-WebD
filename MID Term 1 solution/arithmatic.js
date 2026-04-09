
    function calculate(){
      let a = parseFloat(document.getElementById("num1").value);
      let b = parseFloat(document.getElementById("num2").value);

      if(isNaN(a) || isNaN(b)){
        document.getElementById("result").innerText = "Please enter valid numbers!";
        return;
      }

      let sum = a + b;
      let diff = a - b;
      let prod = a * b;

      document.getElementById("result").innerHTML =
        "Sum = " + sum + "<br>" +
        "Difference = " + diff + "<br>" +
        "Product = " + prod;
    }