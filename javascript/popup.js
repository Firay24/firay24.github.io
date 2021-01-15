document.getElementsByClassName(".notif").addEventListener("click", function(){
    document.querySelector(".uppop").style.display = "flex";
})

document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".uppop").style.display = "none";
})