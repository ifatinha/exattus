export function toTop() {
  const buttonToTop = document.querySelector("#backToTopBtn");

  if (!buttonToTop) {
    console.error("button element not found");
    return;
  }

  const handleTop = (ev) => {
    if (ev?.type === "touchstart") ev.preventDefault();

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleButtonVisibility = () => {
    const shouldShowButton =
      document.body.scrollTop > 500 || document.documentElement.scrollTop > 500;

    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;

    buttonToTop.classList.toggle("active", shouldShowButton);

    // Atualiza a borda de progresso
    buttonToTop.style.setProperty("--scroll-progress", `${scrollPercent}%`);
  };

  ["touchstar", "click"].forEach((eventType) => {
    buttonToTop.addEventListener(eventType, handleTop);
  });

  window.addEventListener("scroll", toggleButtonVisibility);
}
