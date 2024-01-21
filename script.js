let value = 0;
function inc(){
    document.querySelector(".value").textContent = ++value;
    if(value % 2 == 0){
        document.querySelector(".value").style.color = "red";
    }
    else{
        document.querySelector(".value").style.color = "blue";
    }
}

function dec(){
    document.querySelector(".value").textContent = --value;
    if(value % 2 == 0){
        document.querySelector(".value").style.color = "red";
    }
    else{
        document.querySelector(".value").style.color = "blue";
    }
}