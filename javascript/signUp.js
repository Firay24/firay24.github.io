function done(){
    var hasil = confirm("Apa Anda yakin mengisi data dengan baik?");
    if (hasil) {
        window.location = "../html/signIn.html";
    }
}

var buttonSignIn = document.getElementById("signup");
buttonSignIn.addEventListener("click", done);