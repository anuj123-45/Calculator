let screen=document.getElementById('screen');
document.getElementById('screen').disabled=true;
buttons=document.querySelectorAll('button');
let screenValue='';


for(item of buttons){
    item.addEventListener('click', (e)=>{
      
        buttonText=e.target.innerText;
        console.log("Button text is",buttonText);
        if(buttonText=='X'){
            buttonText='*';
            screenValue+=buttonText;
            screen.value=screenValue;
           
        }

         else if(buttonText=='C'){
          screenValue="";
          screen.value=screenValue;
         }

         else if(buttonText=='='){
           screen.value=eval(screenValue);
           
         }

         else {
          screenValue=screen.value+buttonText;
          screen.value=screenValue;


         }
        }
    )};


    function myf(){
        screen.value=screen.value.slice(0,-1);
    }


        
        
