const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const compareButton = document.getElementById('compare');

function compare(){

    const number1 =number1Input.value;
    const number2=number2Input.value;

    if(number1===number2){
        result.innerHTML='<h1>Equal</h1>';
    }
     else if(number1<number2){
        result.innerHTML='<h1>number 1 is less than number 2</h1>';
       }
    else{
        result.innerHTML='<h1>number 1 is greater than number 2</h1>';
    }
}

compareButton.addEventListener('click', compare);


