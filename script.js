


    let pass1 = document.querySelector("#password");
    let pass2 = document.querySelector("#passwordCfm");
    let txt =  document.createElement("div");
    txt.style.fontSize = "9px";
    txt.style.color = "red";
    txt.innerText = "passwords do not match!";
    txt.style.display = 'none';
    pass1.parentNode.appendChild(txt);
    let state = true

    function passMatch(){
        
        if(pass1.value!=pass2.value)
        {
            pass1.style.border='2px solid red';
            pass2.style.border='2px solid red';
            state = false;
            txt.style.display = 'block';
        }
        else
        {
            txt.style.display = 'none';
            console.log("hey");
            pass1.style.border='0.9px solid black';
            pass2.style.border='0.9px solid black';
            state = true;

        }
    }




    pass1.addEventListener('blur',()=>{
        passMatch();
    });

    pass2.addEventListener('blur',()=>{
        passMatch();
    });

    function validateMyForm(){
        return state
    }
    



