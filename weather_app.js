//I want the background to change according to the weather data
// example: rain (then the background of the rain)



// we first capture all the html classes that exist.
const menu = document.querySelector('.menu');
const calender = document.querySelector('.calender');
const menu = document.queryElector('.angka');
const description = document.querySelector('.remarks');



































const popup = document.getElementById("bdycookies");
const button = document.getElementById("okay");

// Tampilkan popup jika belum pernah disetujui
if (!localStorage.getItem("cookieAccepted")) {
    setTimeout(() => {
        popup.style.display = "block";
    }, 3000);
}

// Simpan persetujuan
button.addEventListener("click", () => {
    popup.style.display = "none";
    localStorage.setItem("cookieAccepted", "true");
});
