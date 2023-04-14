let screen=document.getElementById("screen");
var str="";
var buttons=document.querySelectorAll("button")
for(i of buttons){
    i.addEventListener('click',(x)=>{
        buttonText=x.target.innerText;
        console.log("button text :",buttonText);
        if(buttonText=="AC"){
           screen.value="";
           str="";
        }
        else if(buttonText=='*'){
            str+=buttonText;
            screen.value=str;
        }
        else if(buttonText=='+'){
            str+=buttonText;
            screen.value=str;
        }
        else if(buttonText=='-'){
            str+=buttonText;
            screen.value=str;
        }
        else if(buttonText=='/'){
            str+=buttonText;
            screen.value=str;
        }
        else if(buttonText=='Del'){
            str=str.substring(0,str.length-1);
            screen.value=str;
        }
        else if(buttonText=='='){
            screen.value=eval(str);
            str="";
        }
        else{
            str+=buttonText;
            screen.value=str;
        }
        
    });
}


