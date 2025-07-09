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

    buttonToTop.classList.toggle("active", shouldShowButton);

    ["touchstar", "click"].forEach((eventType) => {
      buttonToTop.addEventListener(eventType, handleTop);
    });
  };

  window.addEventListener("scroll", toggleButtonVisibility);
}
