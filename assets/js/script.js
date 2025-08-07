import { openModal, closeModal } from "./modules/modalController.js";
import { counter } from "./modules/counter.js";
import { initLoader } from "./modules/preloader.js";
import { toTop } from "./modules/toTop.js";
import { toggleCasesStudies } from "./modules/toggle-cases-studies.js";
import { carouselTestimonial } from "./owlcarousel/carousel.js";
import { accordion } from "./modules/accordion.js";

document.addEventListener("DOMContentLoaded", () => {
  const functionsToCall = [
    { name: "openModal", func: openModal },
    { name: "closeModal", func: closeModal },
    { name: "counter", func: counter },
    { name: "initLoader", func: initLoader },
    { name: "toTop", func: toTop },
    { name: "toggleCasesStudies", func: toggleCasesStudies },
    { name: "carouselTestimonial", func: carouselTestimonial },
    { name: "accordion", func: accordion },
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
