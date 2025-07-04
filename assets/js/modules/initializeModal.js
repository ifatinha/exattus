import { toggleClass } from "./toggle.js";
import {
  updateAriaAttributes,
  updateAriaHidden,
} from "../util/ariaAttributesUtils.js";

// Função que retorna os principais elementos do modal e sidebar
export function getElements() {
  const buttonBurger = document.querySelector("#navbarOpenButton"); // Botão do menu (hambúrguer)
  const modal = document.querySelector("#modal"); // Elemento do modal
  const sidebarMenu = document.querySelector("#sidebarMenu"); // Sidebar lateral
  const sidebarCloseBtn = document.querySelector("#sidebarCloseBtn"); // Botão de fechar a sidebar

  // Se algum elemento não for encontrado, retorna undefined
  if (!buttonBurger || !modal || !sidebarMenu || !sidebarCloseBtn) {
    console.error("Um ou mais elementos não foram encontrados no DOM");
    return {
      buttonBurger: undefined,
      modal: undefined,
      sidebarMenu: undefined,
      sidebarCloseBtn: undefined,
    };
  }

  // Retorna todos os elementos em um objeto
  return { buttonBurger, modal, sidebarMenu, sidebarCloseBtn };
}

// Função que alterna o estado aberto/fechado do modal, sidebar e botão burger
export function handleToggle(event) {
  // Previne o duplo disparo em dispositivos touch
  if (event?.type === "touchstart") event.preventDefault();

  const { buttonBurger, modal, sidebarMenu } = getElements();

  // Alterna as classes de ativo para cada elemento
  [modal, buttonBurger, sidebarMenu].forEach((element, index) => {
    const classList = ["modal__active", "burger__active", "sidebar__active"];

    toggleClass(element, classList[index]);

    // Atualiza atributos ARIA para acessibilidade
    const isOpen = buttonBurger.classList.contains("burger__active");
    updateAriaAttributes(isOpen, buttonBurger);

    const isOpenSidebar = sidebarMenu.classList.contains("sidebar__active");
    updateAriaHidden(!isOpenSidebar, sidebarMenu);
  });
}
