// document.addEventListener("DOMContentLoaded", () => {
//   const video = document.getElementById("videoAbout");
//   const playPauseButton = document.getElementById("playPauseButton");
//   const videoBackground = document.getElementById("videoBackground");

//   // Play/Pause on button click
//   playPauseButton.addEventListener("click", (event) => {
//     console.log(event);
//     event.preventDefault();
//     if (video.paused) {
//       videoBackground.style.display = "none"; // Убираем фон
//       video.style.display = "block"; // Показываем видео
//       playPauseButton.style.display = "none";
//       video.play();
//     } else {
//       video.pause();
//       playPauseButton.style.display = "block";
//     }
//   });

//   // Pause video on click during playback
//   video.addEventListener("click", () => {
//     if (!video.paused) {
//       video.pause();
//     }
//   });
// });


document.addEventListener("DOMContentLoaded", () => {
  // Находим все блоки .about__content
  const aboutContents = document.querySelectorAll(".about__content");

  aboutContents.forEach((content) => {
    const playButton = content.querySelector(".about__play");
    const videoBackground = content.querySelector(".about__bg");
    const video = content.querySelector("video");

    // Обработчик клика на кнопку Play
    playButton.addEventListener("click", () => {
      // playButton.style.display = "none"; // Скрыть кнопку Play
      playButton.style.opacity = "0"; // Скрыть кнопку Play
      playButton.style.pointerEvents = "none"; // Отключить взаимодействие с кнопкой
      videoBackground.style.display = "none"; // Скрыть фоновую картинку
      video.load(); // Загрузить видео
      video.play(); // Воспроизвести видео
    });

    // Обработчик клика на само видео
    video.addEventListener("click", () => {
      if (video.paused) {
        video.play(); // Воспроизвести видео
        // playButton.style.display = "none"; // Скрыть кнопку Play
        playButton.style.opacity = "0"; // Скрыть кнопку Play
        playButton.style.pointerEvents = "none"; // Отключить взаимодействие с кнопкой
        videoBackground.style.display = "none"; // Скрыть фоновую картинку
      } else {
        video.pause(); // Остановить видео
        // playButton.style.display = "block"; // Показать кнопку Play
        playButton.style.opacity = "1"; // Показать кнопку Play
        playButton.style.pointerEvents = "auto"; // Отключить взаимодействие с кнопкой
        // videoBackground.style.display = "block"; // Показать фоновую картинку
      }
    });
  });
});
