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
const icon = document.querySelector('.weather2')
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

//background cuaca
//kita ambil dulu body html
const body = document.querySelector('body');

const weatherBackgrounds = {
 hujan: "url('https://i.pinimg.com/736x/c4/95/aa/c495aa26106581c4cb270dfa14267e70.jpg')",
 salju: "url('https://i.pinimg.com/1200x/3c/8b/74/3c8b74895e4d2664a2e73bde8efdf3b4.jpg')",
 awan: "url('https://i.pinimg.com/736x/02/27/04/022704323991c25aef91e80883b4f86c.jpg')",
 cerah: "url('https://i.pinimg.com/736x/26/5d/4b/265d4ba78bde5abec2d40881ca94838d.jpg')"
};


//icon cuaca
const weatherIcons = {
  rain: "bx-cloud-rain",
  snow: "bx-snowflake",
  cloudy: "bx-cloud",
  overcast: "bx-clouds",
  sunny: "bx-sun"
};

// 3. Fungsi yang memproses teks bahasa Inggris dari API
function updateWeatherIcon(conditionText) {
  // Ubah teks ke huruf kecil agar pemeriksaan tidak sensitif huruf besar/kecil
  //const kondisiTeks = data.current.condition.text;
  let bgUrl = weatherBackgrounds.awan;
  const condition = conditionText.toLowerCase();

  if (condition.includes("rain") || condition.includes("drizzle")) {
    
    icon.className = `weather2 bx ${weatherIcons.rain}`;
    bgUrl = weatherBackgrounds.hujan;

    //icon.textContent=weatherIcons.rain;
  } 
  else if (condition.includes("snow") || condition.includes("ice") || condition.includes("blizzard")) {

     icon.className = `weather2 bx ${weatherIcons.snow}`;
    bgUrl= weatherBackgrounds.salju;

    //icon.textContent = weatherIcons.snow;
  } 
  else if (condition.includes("overcast") || condition.includes("mist") || condition.includes("fog")) {
    
    icon.className = `weather2 bx ${weatherIcons.overcast}`;
    bgUrl = weatherBackgrounds.awan;

    
    //icon.textContent = weatherIcons.overcast;
  } 
  else if (condition.includes("cloud")) {

    icon.className = `weather2 bx ${weatherIcons.cloudy}`;
    bgUrl=weatherBackgrounds.awan;

    //icon.textContent= weatherIcons.cloudy;
  } 
  else if (condition.includes("clear") || condition.includes("sunny")) {
   
    icon.className = `weather2 bx ${weatherIcons.sunny}`;
    bgUrl=weatherBackgrounds.cerah;
    
    // icon.textContent = weatherIcons.sunny;
  } 
  else {
    // Default jika kata kunci tidak terdeteksi
   icon.className = `weather2 bx ${weatherIcons.cloudy}`;
    bgUrl=weatherBackgrounds.awan;
    
    //icon.textContent = weatherIcons.cloudy; 

  }
  body.style.backgroundImage = bgUrl;
}



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


   //icon cuaca
   const kondisiTeks = data.current.condition.text;

    //if (remarks) {
     // icon.textContent = kondisiTeks;
   // }

    // Ubah ikon sesuai kondisi yang didapat!
    updateWeatherIcon(kondisiTeks);
    

  } catch (err) {
    console.log("Error:", err);
  }
}
window.addEventListener("DOMContentLoaded", () => {
    getWeather("maumere");
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