/* =====================
# TABS (horizontal y vertical)
Un solo bloque para ambas variantes, ya que comparten las mismas
clases (.tab-button / .tab-pane); cada grupo se resuelve por separado
gracias al atributo [data-tabs], así que puede haber varios en la
misma página sin que se interfieran entre sí.
===================== */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-tabs]').forEach((tabGroup) => {
    const buttons = tabGroup.querySelectorAll('.tab-button');
    const panes = tabGroup.querySelectorAll('.tab-pane');

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        buttons.forEach((btn) => {
          btn.classList.remove('active');
          btn.setAttribute('aria-selected', 'false');
        });
        panes.forEach((pane) => pane.setAttribute('hidden', ''));

        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');

        const target = document.getElementById(button.dataset.target);
        target?.removeAttribute('hidden');
      });
    });
  });
});
