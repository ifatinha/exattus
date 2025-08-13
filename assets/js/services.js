import { openModal, closeModal } from "./modules/modalController.js";
import { toTop } from "./modules/toTop.js";
import { initServiceRouter } from "./modules/service-router.js";

document.addEventListener("DOMContentLoaded", () => {
  const functionsToCall = [
    { name: "openModal", func: openModal },
    { name: "closeModal", func: closeModal },
    { name: "toTop", func: toTop },
    { name: "initServiceRouter", func: initServiceRouter },
  ];

  functionsToCall.forEach(({ name, func }) => {
    if (typeof func === "function") {
      try {
        func();
      } catch (error) {
        console.log(`Erro ao executar ${name}: `, error);
      }
    } else {
      console.error(`${name} não é uma função válida.`);
    }
  });
});
