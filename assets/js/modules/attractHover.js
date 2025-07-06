function attractHover(selector, options = {}) {
  const settings = {
    proximity: 30,
    magnetism: 3,
    attractClass: "attract-hover",
    attractEasingClass: "attract-hover-easing",
    attractAttractedClass: "attract-hover-attracted",
    ...options,
  };

  const elements = document.querySelectorAll(selector);

  elements.forEach((el) => {
    // Criação das divs wrapper e easing
    const easingWrapper = document.createElement("div");
    easingWrapper.classList.add(settings.attractEasingClass);

    const wrapper = document.createElement("div");
    wrapper.classList.add(settings.attractClass);

    // Clona o elemento original
    const clone = el.cloneNode(true);
    easingWrapper.appendChild(clone);
    wrapper.appendChild(easingWrapper);
    el.parentNode.replaceChild(wrapper, el);

    // Evento de movimentação do mouse
    document.addEventListener("mousemove", (event) => {
      const mouseX = event.pageX;
      const mouseY = event.pageY;

      const rect = wrapper.getBoundingClientRect();
      const wrapperCenterX = rect.left + rect.width / 2 + window.scrollX;
      const wrapperCenterY = rect.top + rect.height / 2 + window.scrollY;

      const deltaX = mouseX - wrapperCenterX;
      const deltaY = mouseY - wrapperCenterY;

      const distance =
        Math.floor(Math.sqrt(deltaX * deltaX + deltaY * deltaY)) -
        Math.round(rect.width / 2);

      const easing = wrapper.querySelector("." + settings.attractEasingClass);

      if (distance < settings.proximity) {
        wrapper.classList.add(settings.attractAttractedClass);
        easing.style.transform = `translate(${deltaX / settings.magnetism}px, ${
          deltaY / settings.magnetism
        }px)`;
      } else {
        wrapper.classList.remove(settings.attractAttractedClass);
        easing.style.transform = "translate(0)";
      }
    });
  });
}
