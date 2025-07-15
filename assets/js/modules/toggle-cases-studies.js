import { toggleClass } from "../modules/toggle.js";

export const toggleCasesStudies = () => {
  const casesList = document.querySelectorAll(".case-studies-wrapper");

  if (!casesList.length) {
    console.error("Elements not found!");
    return;
  }

  // Ativa o terceiro elemento da lista como padrão
  toggleClass(casesList[2], "case-studies-active");

  // Função para remover a classe de todos os elementos
  const removeActiveClassFromAll = () => {
    casesList.forEach((element) =>
      element.classList.remove("case-studies-active")
    );
  };

  // Função para adicionar classe ativa no hover
  function handleActivate(ev) {
    removeActiveClassFromAll();
    ev.currentTarget.classList.add("case-studies-active");
  }

  // Função para manter a classe ativa ao sair do hover (não desativa ao sair)
  function handleDeactivate() {
    removeActiveClassFromAll();
    // Mantém o terceiro ativo como default após sair do hover
    toggleClass(casesList[2], "case-studies-active");
  }

  casesList.forEach((element) => {
    element.addEventListener("mouseenter", handleActivate);
    element.addEventListener("mouseleave", handleDeactivate);
    element.addEventListener("touchstart", (ev) => {
      handleActivate(ev);
      // Evita disparar o clique junto no mobile
      ev.preventDefault();
    });
    //element.addEventListener("touchend", handleDeactivate);
  });
};
