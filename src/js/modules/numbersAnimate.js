document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.numbers__count'); // Цифры
  const numbersSection = document.querySelector('.numbers'); // Секция numbers
  const numbersVideo = document.querySelector('.numbers__video video');
  const duration = 1500; // Длительность анимации чисел в миллисекундах
  let hasAnimated = false; // Флаг для запуска анимации один раз

  function animateNumbers() {
    counters.forEach(counter => {
      const target = +counter.textContent; // Конечное значение
      const increment = target / (duration / 20); // Шаг увеличения числа

      const updateCount = () => {
        const current = +counter.innerText; // Текущее значение
        if (current < target) {
          counter.innerText = Math.ceil(current + increment); // Обновляем значение
          setTimeout(updateCount, 20); // Частота обновления (20 мс)
        } else {
          counter.innerText = target; // Устанавливаем конечное значение
        }
      };

      counter.innerText = '0'; // Устанавливаем начальное значение
      updateCount();
    });
  }

  function handleScroll() {
    const sectionTop = numbersSection.getBoundingClientRect().top; // Верх секции относительно окна
    const sectionHeight = numbersSection.offsetHeight; // Высота секции
    const screenHeight = window.innerHeight; // Высота окна

    // Проверяем, видна ли секция на 80%
    if (!hasAnimated && sectionTop < screenHeight * 0.95 && sectionTop + sectionHeight > 0) {
      hasAnimated = true; // Устанавливаем флаг, чтобы не запускать анимацию повторно
      // console.log(numbersVideo);
      animateNumbers(); // Запускаем анимацию чисел
      numbersVideo.load();
      numbersVideo.play();
    }
  }

  window.addEventListener('scroll', handleScroll); // Отслеживаем прокрутку
});
