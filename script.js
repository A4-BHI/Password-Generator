const inputSlider=document.querySelector("[data-lengthslider]");
const lengthDisplay=document.querySelector("[ data-length-number]");
const passwordDisplay=document.querySelector("[ data-passworddisplay]");
const copyBtn=document.querySelector("[ data-copy]");
const copyMsg=document.querySelector("[ data-copyMsg]");
const uppercaseCheck=document.querySelector("#uppercase");
const lowercaseCheck=document.querySelector("#lowercase");
const numberCheck=document.querySelector("#numbers");
const symbolsCheck=document.querySelector("#symbols");
const indicator=document.querySelector("[data-indicator]");
const generateBtn=document.querySelector(".generateBtn");
const allCheckBox=document.querySelectorAll("input[ type=checkbox]");
const symbols='!@#$%^&*()_+<>?":}{|\';/.,~`';
let password="";
let passwordlength=10;
let checkcount=1;
handleSlider();
function handleSlider(){
    inputSlider.value=passwordlength;
    lengthDisplay.innerText=passwordlength;
}

function setindicator(color){
     indicator.style.backgroundColor=color;
}

function getRndInteger(min,max){
    Math.floor(Math.random()*(max-min))+min;
}

function generateRndInteger(){
    return getRndInteger(0,9);
}

function generateLowerCase(){
   string.fromCharCode(getRndInteger(97,123));
}

function generateUpperCase(){
    string.fromCharCode(getRndInteger(65,91));
 }

 function generateSymbol(){
   const randNum=getRndInteger(0,symbols.length);
   return symbols.charAt[randNum];
 }

function calcStrength(){
    let hasupper=false;
    let haslower=false;
    let hasNum=false;
    let hasSym=false;
    if(uppercaseCheck.checked)hasupper=true;
    if(lowercaseCheck.checked)haslower=true;
    if(numberCheck.checked)hasNum=true;
    if(symbolsCheck.checked)hasSym=true;

    if(hasupper && haslower && (hasNum || hasSym) && passwordlength>=8){
        setindicator("#0f0");
    }
    else if((haslower || hasupper) && (hasNum || hasSym) && passwordlength>=6){
        setindicator("#ff0");
    }
    else{
        setindicator("#f00");
    }
}

async function copyContent(){
    try{
       await navigator.clipboard.writeText(passwordDisplay.value);
       copyMsg.innerText="copied";
    }
    catch(e){
      copyMsg.innerText="fail"
    }

    copyMsg.classList.add("active");
    setTimeout(() => {
        copyMsg.classList.remove("active");
    }, 2000);
}

function handlecheckboxchange(){
    checkcount=0;
    allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked){
            checkcount++;
        }
    })

    if(passwordlength<checkcount){
        passwordlength=checkcount;
        handleSlider();
    }
}

 allCheckBox.forEach((checkbox)=>{
    checkbox.addEventListener('change',handlecheckboxchange);
 })


inputSlider.addEventListener('input',(e)=>{
    passwordlength=e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click',()=>{
    if(passwordDisplay.value){
        copyContent();
    }
})

generateBtn.addEventListener('click',(e)=>{

})
 



