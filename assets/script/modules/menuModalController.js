import { updateAriaAttributes } from "../util/ariaAttributesUtils.js";

export const openModal = () => {
  const buttonModal = document.querySelector("#navbarOpenButton");
  const menuModal = document.querySelector("#menuModal");

  if (!buttonModal || !menuModal) return;

  const openMenu = (event) => {
    if (event?.type === "touchstart") event.preventDefault();
    menuModal.classList.add("modal__active");

    const isOpen = buttonModal.classList.contains("burger__active");
    updateAriaAttributes(isOpen, buttonModal);
  };

  ["touchstart", "click"].forEach((eventType) => {
    buttonModal.addEventListener(eventType, openMenu);
  });
};

export const closeModal = () => {
  const buttonModal = document.querySelector("#menuModalCloseButton");
  const modal = document.querySelector("#menuModal");

  if (!buttonModal || !modal) return;

  const closeMenu = (event) => {
    if (event?.type === "touchstart") event.preventDefault();
    menuModal.classList.remove("modal__active");
  };

  ["touchstart", "click"].forEach((eventType) => {
    buttonModal.addEventListener(eventType, closeMenu);
  });
};
