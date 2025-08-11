function counter(id, endCounter, icon) {
  const counterEl = document.querySelector(`#${id}`);
  const start = 0;
  const end = endCounter;
  const duration = 3000; // duração da animação em milissegundos (2 segundos)
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
    counterEl.textContent = `${currentValue}${icon}`;

    if (progress < duration) {
      requestAnimationFrame(animateCounter);
    } else {
      counterEl.textContent = `${end}${icon}`; // Garante que o contador termine exatamente no valor final
    }
  }

  setTimeout(() => {
    requestAnimationFrame(animateCounter);
  }, 1000); // Inicia a animação após 1 segundo
}

export function counterMain() {
  counter("counter", 100, "%");
}

export function counterAbout1() {
  counter("counterAbout1", 250, "+");
}

export function counterAbout2() {
  counter("counterAbout2", 100, "%");
}
