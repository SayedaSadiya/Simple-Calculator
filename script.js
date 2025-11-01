function add(a,b){return a + b;}
        function subtract(a,b){return a - b;}
        function multiply(a,b){return a * b;}
        function divide(a,b){return a / b;}
       
        function StartCalculator(){
            let num1 = Number(prompt("Enter first number:"));
            let num2 = Number(prompt("Enter second number:"));
            let operation = prompt("Enter operation( +, -, *, /):");

            let result;

            if(operation === "+"){
                result = add(num1,num2)
            }
            else if(operation === "-"){
                result = subtract(num1,num2);
            }
            else if(operation === "*"){
                result = multiply(num1,num2);
            }
            else if(operation === "/"){
                result = subtract(num1,num2);
            }
            else{
                alert("Invalid operation");
                return;
            }
            alert(`Result = ${result}`)
        }