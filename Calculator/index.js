let Text = document.getElementById("Text");
let Buttons = document.querySelectorAll("button")
let equal = document.getElementById("Equal");
let Ac = document.getElementById("Ac");
let De = document.getElementById("De")
let count = 1 ; 

Buttons.forEach((Button)=>{
    Button.onclick=()=>{
        
        Text.value += (Button.value)
        if(Text.value.length>=1){
            equal.classList.remove("nonactive")
        }
    }
    equal.onclick=()=>{
        Text.value=eval(Text.value);
        console.log(Text.value)
        if(Text.value==="undefined"){
            Text.value="";
            equal.classList.add("nonactive")
        }

    }
    Ac.onclick=()=>{
        Text.value=""
        if(Text.value===""){
            equal.classList.add("nonactive")
        }

    };
    De.onclick=()=>{
    Text.value =Text.value.slice(0,-1)
    if(Text.value===""){
        equal.classList.add("nonactive")
    }
    console.log(Text.value);
    };
})

if(Text.value===""){
    equal.classList.add("nonactive")
}




