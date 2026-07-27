//I want the background to change according to the weather data
// example: rain (then the background of the rain)



// we first capture all the html classes that exist.
const angka = document.querySelector('.angka');
const remarks = document.querySelector('.remarks');
const kota = document.querySelector('.kota');
const speed = document.querySelector('.speed');
const lembab = document.querySelector('.lembab');



//kita persiapkan dulu API weathernya
const apiKey = "0421d0456f4c466ab94133440262607";


async function getWeather() {
  try {
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=samarinda`);


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
    remarks.textContent = data.current.condition.text;

    //ambil kecepatan angin
    speed.textContent = `${data.current.wind_kph} /kph`;

  //ambil kelembaban udara
   lembab.textContent = `${data.current.humidity} %`;
    
  } catch (err) {
    console.log("Error:", err);
  }
}

getWeather();







































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
