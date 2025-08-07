export function accordion() {
  const buttons = document.querySelectorAll(".accordion-button");
  const panels = document.querySelectorAll(".accordion-body");

  if (!buttons.length || !panels.length) {
    console.warn("Accordion buttons or panels not found.");
    return;
  }

  // Fecha todos os painéis e remove classes de estado
  const closeAllAccortionds = () => {
    buttons.forEach((button) => button.classList.remove("collapsed"));
    panels.forEach((panel) => (panel.style.maxHeight = null));
  };

  // Abre o painel correspondente ao botão clicado
  const toggleAccordion = (event) => {
    const button = event.currentTarget;
    const targetId = button.dataset.bsTarget;
    const panel = document
      .querySelector(targetId)
      ?.querySelector(".accordion-body");

    if (!panel) {
      console.warn(
        `Accordion: Painel não encontrado para o seletor "${targetId}".`
      );
      return;
    }

    const isOpen = panel.style.maxHeight;
    closeAllAccortionds();

    // Se estava fechado, então abre
    if (!isOpen) {
      button.classList.add("collapsed");
      panel.style.maxHeight = `${panel.scrollHeight}px`; // Define a altura máxima para o conteúdo
    }
  };

  buttons.forEach((btn) => btn.addEventListener("click", toggleAccordion));
}
