document.addEventListener("DOMContentLoaded", function () {
  const numbers = document.querySelectorAll(".number-value");

  // Sayı artırma fonksiyonu
  function startCounting(number) {
    const target = parseInt(number.textContent, 10); // Hedef sayı
    let count = 0; // Başlangıç değeri
    const duration = 2000; // Animasyon süresi (ms)
    const interval = duration / target; // Her bir artış için süre

    const intervalId = setInterval(() => {
      if (count < target) {
        count++;
        number.textContent = count; // Sayıyı güncelle
      } else {
        clearInterval(intervalId); // Hedefe ulaştığında durdur
      }
    }, interval);
  }

  // Görünürlük kontrol fonksiyonu
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Element görünür hale geldiğinde sayıları başlat
        startCounting(entry.target);
        observer.unobserve(entry.target); // Gözlemeyi durdur
      }
    });
  }

  // Intersection Observer'ı oluşturun
  const observer = new IntersectionObserver(handleIntersection);

  // Her bir sayı için gözlemeyi başlat
  numbers.forEach((number) => {
    observer.observe(number);
  });
});
