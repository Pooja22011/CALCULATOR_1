let textfield=document.getElementById("textfield");
let buttons=document.querySelectorAll('.click');

let string="";
  let arr=Array.from(buttons);
   arr.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "="){
            string=eval(string);
            document.querySelector("input").value=string;
        }
        else if(e.target.innerHTML == "AC"){
            string="";
            document.querySelector("input").value=string;
        }
        else if(e.target.innerHTML == "/"){
           string=string.length-1;
            document.querySelector("input").value=string;
        }
        else{
        string=string+e.target.innerHTML;
        document.querySelector("input").value=string;
        }
    })
   })

   