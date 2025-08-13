export function initServiceRouter() {
  const buttons = document.querySelectorAll(".service-card .btn-arrow");
  const targetPage = "assets/pages/service.html";

  const onClick = (ev) => {
    // Evita o comportamento padrão do link recarregar página/ir ao topo.
    ev.preventDefault();

    // Sobe na árvore do DOM para achar o card de serviço que contém o button.
    const card = ev.currentTarget.closest(".service-card");

    // Se não estiver dentro de um card, sai.
    if (!card) {
      console.warn("Card não encontrado para o botão clicado.");
      return;
    }

    // Lê os atributos de dados do card: id numérico e/ou slug textual.
    const cardId = card.dataset.serviceId;
    if (!cardId) {
      console.warn("service-router: data-service-id ausente no card", card);
      return;
    }

    const params = new URLSearchParams({ id: cardId });
    const url = `${targetPage}?${params.toString()}`;

    // Abrir na mesma aba (mais seguro e menos bloqueios)
    window.location.href = url;
  };

  buttons.forEach((button) => {
    button.addEventListener("click", onClick);
  });

  // Retorna uma função de limpeza para remover o listener quando não for mais necessário.
  return function destroy() {
    buttons.forEach((button) => button.removeEventListener("click", onClick));
  };
}
