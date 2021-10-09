let takeInput = document.getElementById('takeInput');
buttons = document.querySelectorAll('button');
let inputValue='';
for(item of buttons){
    item.addEventListener('click', (a) => {
        buttonText = a.target.innerText;
        if(buttonText == 'X'){
        buttonText = '*';
        inputValue += buttonText;
        takeInput.value = inputValue;
        }

        else if(buttonText=='C'){
            inputValue = "";
            takeInput.value = inputValue;
        }
        else if(buttonText=='AC'){
            inputValue = "";
            takeInput.value = inputValue;
        }
        else if(buttonText=='='){
            takeInput.value = eval(inputValue);
        }
        else{
            inputValue += buttonText;
            takeInput.value = inputValue;
        }
    })
}