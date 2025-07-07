export function initLoader() {
  window.addEventListener("load", () => {
    setTimeout(() => {
      const loader = document.querySelector("#loader");

      if (!loader) {
        console.error("Loader element not found");
        return;
      }

      loader.style.opacity = "0";
      loader.style.transition = "opacity 5s ease-in-out";

      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }, 8000);
  });
}
