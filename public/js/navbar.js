var navbar = document.querySelector(".navbarkismi");

document.addEventListener("click", function () {
  navbar.style.background = " #fffaf2";

  setTimeout(function () {
    navbar.style.background = "#fffaf230";
  }, 4000);
});

document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".indexsection1");
  const backgrounds = [
    "url('img/arkaplan1.png')",
    "url('img/arkaplan2.png')",
    "url('img/arkaplanresmi.png')",
  ];
  let currentIndex = 0;

  function changeBackground() {
    // Geçerli arka planı ayarla
    section.style.backgroundImage = backgrounds[currentIndex];

    // İndeksi güncelle
    currentIndex = (currentIndex + 1) % backgrounds.length; // İndeksi döngüsel hale getir

    // 4 saniye sonra bir sonraki resmi değiştir
    setTimeout(changeBackground, 4000); // 4 saniye bekle ve tekrar başlat
  }

  // İlk resmi ayarla ve döngüyü başlat
  section.style.backgroundImage = backgrounds[currentIndex];
  setTimeout(changeBackground, 4000); // 4 saniye bekle, ardından başla
});
