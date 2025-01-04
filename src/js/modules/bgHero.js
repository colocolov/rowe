document.addEventListener("DOMContentLoaded", () => {
    // Найти все элементы с классом `hero__slide`
    const hero = document.querySelector(".hero");
    const heroSlides = document.querySelectorAll(".hero__slide");

    heroSlides.forEach(slide => {
        // Получить значение атрибута `data-bgHero`
        const bgHero = slide.dataset.bghero;

        // console.log(slide);

        if (bgHero) {
            // Установить CSS-переменную `--bgHero` на элемент
            slide.style.setProperty("--bgHero", bgHero);
        }
    });
});
