const btn= document.querySelector('button');
const input= document.querySelectorAll('input');
const inputMail = document.querySelector('input:nth-child(5)');
const paragrahpsEmptyField = document.querySelectorAll('.emptyField');
const wrongEmail = document.querySelector('.wrongEmail');
const reg =
/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;


function checkEmail(){
    if (!reg.test(inputMail.value) && inputMail.value!="") {
        event.preventDefault();
        
        wrongEmail.classList.add('activep');
        inputMail.classList.add('activei');
      }else {
        wrongEmail.classList.remove('activep');
        
        return null;
      }
    }

function checkEmptyFields(){
    for(let i=0; i<input.length; i++){
        if(input[i].value == ""){
            event.preventDefault();
            input[i].classList.add('activei');
            paragrahpsEmptyField[i].classList.add('activep')
                     
        }else{
            input[i].classList.remove('activei');
            paragrahpsEmptyField[i].classList.remove('activep') 
        }
    }
    return null
}

btn.addEventListener('click',function(){
    checkEmptyFields();
    checkEmail(); 
   
    })

