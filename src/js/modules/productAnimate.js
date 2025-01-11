document.addEventListener('scroll', () => {
  const productSection = document.querySelector('.product');
  const images = document.querySelectorAll('.product__img');
  
  const rect = productSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Рассчитываем прогресс скролла секции в процентах
  const scrollProgress = Math.min(
    Math.max((windowHeight - rect.top) / windowHeight, 0),
    1
  );

  const centerIndex = Math.floor(images.length / 2);

  images.forEach((img, index) => {
    if (index < centerIndex) {
      // Левые изображения сдвигаются влево
      img.style.transform = `translateX(-${(centerIndex - index) * scrollProgress * 100}px)`;
    } else if (index > centerIndex) {
      // Правые изображения сдвигаются вправо
      img.style.transform = `translateX(${(index - centerIndex) * scrollProgress * 100}px)`;
    } else {
      // Центральное изображение остается на месте
      img.style.transform = 'translateX(0)';
    }
  });
});
