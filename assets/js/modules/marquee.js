export function animateMarquee() {
  const marqueeInner = document.querySelector(".marquee-inner");
  const itemsEl = Array.from(marqueeInner.children);
  let speed = 60;
  let position = 0;

  if (!marqueeInner) {
    console.warn("Element not found.");
    return;
  }

  // duplica conteúdo para loop suave
  itemsEl.forEach((item) => {
    marqueeInner.appendChild(item.cloneNode(true));
  });

  function animation() {
    // considerando ~60fps
    position -= speed / 60;

    // quando metade sai, reseta para 0 sem pulo
    if (Math.abs(position) >= marqueeInner.scrollWidth / 2) {
      position = 0;
    }

    marqueeInner.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animation);
  }

  animation();
}
