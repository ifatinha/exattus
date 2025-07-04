// Função utilitária para alternar (adicionar/remover) uma classe em um elemento HTML
export function toggleClass(element, className) {
  element.classList.toggle(className); // Adiciona a classe se não existir, remove se já existir
}
