let text = document.getElementsByClassName("color")[0].textContent;
let color = document.body.style.backgroundColor;

function changeColors(){
    if(text === "Background: #292929"){
        text = "Background: #F2F2F2"
        color = "#F2F2F2"
    }else if(text === "Background: #F2F2F2"){
        text = "Background: #C7C7C7"
        color = "#C7C7C7"
    }else if(text === "Background: #C7C7C7"){
        text = "Background: #292929"
        color = "#292929"
    }
    document.getElementsByClassName("color")[0].textContent = text;
    document.body.style.backgroundColor = color;
}

document.getElementsByClassName("change")[0].addEventListener("click", changeColors);