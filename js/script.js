function Init(){
    for(let index = 1; index < 10; index++) {
        document.getElementById("img" + index).style.backgroundImage = document.getElementById("img" + index).getAttribute("data-off");
        document.getElementById("img" + index).addEventListener('mouseenter', displayOnPort)
        document.getElementById("img" + index).addEventListener('mouseleave', displayOffPort)
    }
        for(let index = 1; index < 3; index++){
            document.getElementById("btn-h" + index).addEventListener('mouseenter', displayOnBtn)
            document.getElementById("btn-h" + index).addEventListener('mouseleave', displayOffBtn)
            document.getElementById("btn-h" + index).addEventListener('click', clickBtn)
    }


}

function displayOnPort(){
    this.style.backgroundImage = this.getAttribute("data-on");
    console.log("test")
}
function displayOffPort(){
    this.style.backgroundImage = this.getAttribute("data-off");
}

function displayOnBtn(){
    this.style.backgroundColor = "#3E162E";
    this.style.border = "none";
    this.style.paddingTop = "140px"
}
function displayOffBtn(){
    this.style.backgroundColor = "#4D243D";
    this.style.borderTop = "70px solid #5E2C4A";
    this.style.paddingTop = "70px"
}
function clickBtn(){
    let lien = this.getAttribute("data-lien");
    window.location.href = "#" + lien;
    console.log(lien);
}

/* function testOn(){
    this.style.backgroundImage = "url('images/p-hover/p-chien-hover.png')"
}
function testOff(){
    this.style.backgroundImage = "url('images/p/p-chien.png')"
} */