
let calcu = document.getElementById("result");

function display(number){
    calcu.value +=number;
    
          
}

function calculate(){
    let finalNumber = calcu.value;
    let finalResult = eval(finalNumber)
    calcu.value = finalResult
}
function empty(){
    calcu.value="";
}
function del(){
    calcu.value=calcu.value.slice(0,-1)
}
