document.addEventListener('DOMContentLoaded', () => {
  // Fecha todos os detalhes dentro de uma seção
  function collapseSection(section) {
    const toggles = section.querySelectorAll('.toggle-detail');
    const details = section.querySelectorAll('.detail');
    toggles.forEach(btn => btn.setAttribute('aria-expanded', 'false'));
    details.forEach(d => d.hidden = true);
  }

  // Para cada seção do portfólio que tenha toggles…
  document.querySelectorAll('.portfolio-section').forEach(section => {
    const toggles = section.querySelectorAll('.toggle-detail');
    if (toggles.length === 0) return;

    // 1. Colapsa tudo e expande o primeiro
    collapseSection(section);
    const firstBtn = toggles[0];
    firstBtn.setAttribute('aria-expanded', 'true');
    const firstDetail = section.querySelector('#' + firstBtn.getAttribute('aria-controls'));
    if (firstDetail) firstDetail.hidden = false;

    // 2. Adiciona listener a cada botão “Ver detalhes”
    toggles.forEach(btn => {
      btn.addEventListener('click', () => {
        // a. Fecha tudo
        collapseSection(section);
        // b. Expande o clicado
        btn.setAttribute('aria-expanded', 'true');
        const detail = document.getElementById(btn.getAttribute('aria-controls'));
        if (detail) detail.hidden = false;

        // c. Atualiza classe .active no card correspondente
        //    Funciona tanto para .card, .project-card ou .production-card
        const card = btn.closest('.card, .project-card, .production-card');
        if (card) {
          // Remove de todos os peer-cards
          section.querySelectorAll('.card, .project-card, .production-card')
            .forEach(c => c.classList.remove('active'));
          card.classList.add('active');
        }
      });
    });
  });
});
