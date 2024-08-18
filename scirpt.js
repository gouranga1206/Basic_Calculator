let inputData = document.getElementById("number_input");
let numberKey = document.querySelectorAll("#numberBox");
let operatorKey= document.querySelectorAll("#operatorBox");

let currTxt = "";
let oprTxt = "";
let prevTxt = "";
numberKey.forEach((element)=>{
    element.addEventListener("click",(e)=>{
        e.preventDefault();
        if(element.innerHTML != "clr"){
            currTxt+= element.innerHTML;
            inputData.value = currTxt;
        }
        else{
            inputData.value = "";
            oprTxt = "";
            prevTxt ="";
            currTxt ="";
        }
       
        
    })   
})

operatorKey.forEach((element)=>{
    element.addEventListener("click",(e)=>{
        e.preventDefault();
        if(element.innerHTML == "="){
            console.log(prevTxt,currTxt,oprTxt);
            
        calculation(prevTxt,currTxt,oprTxt);
            
        }else{
        prevTxt = currTxt;
        currTxt = "";
        oprTxt = element.innerHTML;    
        }    
    })
    
})


function calculation(firstVal,secondVal,operator){
    let result;
    let num1 = parseFloat(firstVal);
    let num2 = parseFloat(secondVal);
    console.log(num1,num2,operator);
    
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = "Error";
    }

    inputData.value = result;

    currTxt = result.toString();
    oprTxt = "";
    prevTxt = "";
}



