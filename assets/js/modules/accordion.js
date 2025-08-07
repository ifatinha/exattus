export function accordion() {
  const buttons = document.querySelectorAll(".accordion-button");
  const panels = document.querySelectorAll(".accordion-collapse");

  if (!buttons.length || !panels.length) {
    console.warn("Accordion buttons or panels not found.");
    return;
  }

  // Fecha todos os painéis e remove classes de estado
  const closeAllAccortionds = () => {
    buttons.forEach((button) => button.classList.remove("collapsed"));
    panels.forEach((panel) => {
      panel.classList.remove("show");
      panel.style.maxHeight = null; // Reseta a altura máxima
    });
  };

  // Abre o painel correspondente ao botão clicado
  const toggleAccordionPanel = (event) => {
    const button = event.currentTarget;
    const targetSelect = button.dataset.bsTarget;
    const panel = document.querySelector(targetSelect);

    if (!panel) {
      console.warn("Accordion panel not found for target:", targetSelect);
      return;
    }

    const isOpen = button.classList.contains("collapsed");
    closeAllAccortionds();

    // Se estava fechado, então abre
    if (!isOpen) {
      button.classList.add("collapsed");
      //panel.classList.add("show");
      panel.style.maxHeight = panel.scrollHeight + "px"; // Define a altura máxima para o conteúdo
      console.log("Panel opened with height:", panel.scrollHeight);
    }
  };

  buttons.forEach((button) => {
    button.addEventListener("click", toggleAccordionPanel);
  });
}
