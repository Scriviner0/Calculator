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
    return "Nope , Divide by zero!";
  }
  return a / b;
}
function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);

  if (operator === "+") return add(a, b);
  if (operator === "-") return subtract(a, b);
  if (operator === "*") return multiply(a, b);
  if (operator === "/") return divide(a, b);
}



const buttons = document.querySelectorAll(".grid");
const display = document.getElementById('display');

let first =null;
let current="0";
let operatorSel=null;
let justEvaluated=false;

function updateDisplay(current) { display.textContent = current; }

updateDisplay(current);

function isOp(k){ return k ==="+"  || k ==="-" || k === "*" || k ==="/";}





buttons.forEach(element => {
    
    element.addEventListener("click",function()  {     const text = this.textContent;
    if (text =='Ac')
    {  first = null; current ="0" ; operatorSel=null; justEvaluated=false;
      updateDisplay(current);
    }
    else if (text == '=')  { 
        if (first != null && operatorSel && current !=""){
          const res = operate(operatorSel,first,current);
          updateDisplay(String(res));
          current = String(res);
          first = (typeof res ==="number" ? current : null);
         operatorSel = null;
         justEvaluated = true;
        }
        return;
    }
   
    if(isOp(text)){
      if(operatorSel && (current === "" || justEvaluated )) { operatorSel = text; return;}
      
      if(first === null) {
          first = current;
        }
      else if (current != ""){
             const res = operate(operatorSel, first, current);
        current = String(res);
        first = current;
        updateDisplay(current);
           }


           operatorSel = text;
           current="";
           justEvaluated = false;
           return;
        
      
    }
 if (text >= "0" && text <= "9")
{
  if(justEvaluated && operatorSel === null) {
     
    current = text;
    justEvaluated = false; 
  }
  else {
    current = current === "0" ? text : current+text ;   /* if the numbers are being read for the first time just replace it otherwise append it */
  }

  updateDisplay(current);
}


    
    });
    
});