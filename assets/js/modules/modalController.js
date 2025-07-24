import { handleToggle, getElements } from "./initializeModal.js";

// Adiciona listeners de toque e clique para fechar o menu/modal
const setupCloseMenuListeners = (element) => {
  ["touchstart", "click"].forEach((eventType) => {
    element.addEventListener(eventType, handleToggle);
  });
};

// Função para abrir o modal do menu ao clicar/tocar no botão do menu (burger)
export function openModal() {
  const { buttonBurger } = getElements();

  if (!buttonBurger) {
    console.error("Burger button not found");
    return;
  }

  ["touchstart", "click"].forEach((eventType) => {
    buttonBurger.addEventListener(eventType, handleToggle);
  });
}

// Função para fechar o modal menu ao clicar/tocar fora ou no botão de fechar, ou pressionar ESC
export function closeModal() {
  const { modal, sidebarCloseBtn } = getElements();

  if (!modal || !sidebarCloseBtn) {
    console.error("Modal or sidebar close button not found");
    return;
  }

  ["touchstart", "click"].forEach((eventType) => {
    modal.addEventListener(eventType, handleToggle);

    setupCloseMenuListeners(sidebarCloseBtn);
    setupCloseMenuListeners(modal);
  });

  // Fecha o modal menu ao pressionar a tecla Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      handleToggle();
    }
  });
}
