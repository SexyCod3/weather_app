//I want the background to change according to the weather data
// example: rain (then the background of the rain)
//kita persiapkan dulu API weathernya
const apiKey = "0421d0456f4c466ab94133440262607";


// we first capture all the html classes that exist.

//ini bagian untuk keperluan lain
const navbar = document.querySelector('.navbar');
const presentage = document.querySelector('.presentage');
const content = document.querySelector('.content');
const holiday = document.querySelector('.holiday');
const searching_c = document.querySelector('.searching_colom');
const forecast =document.querySelector('.forecast');
const navfooter = document.querySelector('.navfooter');



//ini bagian untuk tampil API
const angka = document.querySelector('.angka');
const remarks = document.querySelector('.remarks');
const kota = document.querySelector('.kota');
const speed = document.querySelector('.speed');
const lembab = document.querySelector('.lembab');


//kita ambil search 
const search = document.querySelector('.search');
 /*kita kasi fungsi agar saat search ini 
 ditekan semua atau property yang lain displaynya none!
 */

search.onclick = function (){
 // navbar.style.display = 'none';
  presentage.style.display = 'none';
  content.style.display = 'none';
  holiday.style.display = 'none';
  searching_c.style.display = 'block';
  forecast.style.display = 'none';
  navfooter.style.display = 'none';
}



//mengembalikan hasil submit nama kota
const cityInput = document.getElementById("cityInput");
const submit = document.querySelector('.submit');

submit.addEventListener("click", () => {

 presentage.style.display = 'grid';
  content.style.display = 'flex';
  holiday.style.display = 'flex';
  searching_c.style.display = 'none';
  forecast.style.display = 'block';
  navfooter.style.display = 'flex';

  const city = cityInput.value;
 
   getWeather(city);
});






async function getWeather(city) {
  try {
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);


//pengecekan akses atau kendala request API
    if (!res.ok) {
      throw new Error("Gagal mengambil data");
    }


    const data = await res.json();
    //ambil nama lokasi
    kota.textContent = `${data.location.name}, ${data.location.country}`;

    //ambil temperatur
    if (angka) {
    angka.textContent = `${data.current.temp_c}°C`;
    }

    //ambil keterangan
    if(remarks){
    remarks.textContent = data.current.condition.text;
    }

    //ambil kecepatan angin
    speed.textContent = `${data.current.wind_kph} /kph`;

  //ambil kelembaban udara
   lembab.textContent = `${data.current.humidity} %`;

  } catch (err) {
    console.log("Error:", err);
  }
}
window.addEventListener("DOMContentLoaded", () => {
    getWeather("Jakarta");
});











































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