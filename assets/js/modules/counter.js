export function counter() {
  const counterEl = document.querySelector("#counter");
  const start = 0;
  const end = 100;
  const duration = 2000; // duração da animação em milissegundos (2 segundos)
  let startTime = null;

  function easeInOutQuad(t) {
    return t * (2 - t);
  }

  function animateCounter(timestamp) {
    if (!startTime) startTime = timestamp;

    const progress = timestamp - startTime;
    const normalizedTime = Math.min(progress / duration, 1);
    const easedProgress = easeInOutQuad(normalizedTime);
    const currentValue = Math.floor(start + (end - start) * easedProgress);
    counterEl.textContent = `${currentValue}%`;

    if (progress < duration) {
      requestAnimationFrame(animateCounter);
    } else {
      counterEl.textContent = `${end}%`; // Garante que o contador termine exatamente no valor final
    }
  }

  setTimeout(() => {
    requestAnimationFrame(animateCounter);
  }, 9000); // Inicia a animação após 1 segundo
}
