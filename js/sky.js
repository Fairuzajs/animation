document.addEventListener("DOMContentLoaded", function() {
  const modules = document.querySelectorAll('.module');
  const container = document.querySelector('.module-container');
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;
  const placedModules = [];

  function checkCollision(x, y, width, height) {
      for (let i = 0; i < placedModules.length; i++) {
          const existing = placedModules[i];
          if (
              x < existing.x + existing.width &&
              x + width > existing.x &&
              y < existing.y + existing.height &&
              y + height > existing.y
          ) {
              return true;
          }
      }
      return false;
  }

  function findPosition(element) {
      const elementWidth = element.offsetWidth;
      const elementHeight = element.offsetHeight;
      let randomX, randomY;
      let attempts = 0;

      do {
          randomX = Math.random() * (containerWidth - elementWidth);
          randomY = Math.random() * (containerHeight - elementHeight);
          attempts++;
      } while (checkCollision(randomX, randomY, elementWidth, elementHeight) && attempts < 100);

      if (attempts < 100) {
          placedModules.push({ x: randomX, y: randomY, width: elementWidth, height: elementHeight });
          element.style.left = `${randomX}px`;
          element.style.top = `${randomY}px`;
      } else {
          console.warn('Could not place element without overlap after 100 attempts.');
      }
  }

  modules.forEach((module, index) => {
      findPosition(module);
      module.style.animationDelay = `${index * 0.5}s`;
      module.style.opacity = 1;
  });
});



document.addEventListener('DOMContentLoaded', function (event) {
  function typeEffect(element, text, delay, callback) {
      let i = 0;
      function typing() {
          if (i < text.length) {
              element.textContent += text.charAt(i);
              i++;
              setTimeout(typing, delay);
          } else if (callback) {
              callback();
          }
      }
      typing();
  }

  function startAnimation() {
      const modules = document.querySelectorAll('.module-2');
      modules.forEach((module, index) => {
          const text = module.textContent;
          module.textContent = ''; // Очистить текст
          module.style.opacity = '1'; // Сделать видимым
          module.style.animationDelay = `${index * 0.2}s`; // Задержка перед началом анимации
          setTimeout(() => {
              typeEffect(module, text, 50);
          }, index * 200); // Задержка перед началом печати
      });
  }

  startAnimation();
});

// 3 






