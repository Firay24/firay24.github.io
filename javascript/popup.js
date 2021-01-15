document.getElementById("im3").addEventListener("click", tampil);
function tampil(){
    document.querySelector(".uppop").style.display = "flex";
}

document.querySelector(".close").addEventListener("click", sembunyi);
function sembunyi(){
    document.querySelector(".uppop").style.display = "none";
}