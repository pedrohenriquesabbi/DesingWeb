window.revelar = ScrollReveal({reset: false})

revelar.reveal('.efeito-home', {
    duration: 2000,
    distance: '90px',
    origin: 'left'
    
})

revelar.reveal('.efeito-about', {
    duration: 2000,
    distance: '90px',
    delay: 500,
    origin: 'left'
})

revelar.reveal('.efeito-education', {
    duration: 2000,
    distance: '90px',
    delay: 500,
    origin: 'left'
})

revelar.reveal('.efeito-experience', {
    duration: 2000,
    distance: '90px',
    delay: 500,
    origin: 'left'
})

revelar.reveal('.efeito-projects', {
    duration: 2000,
    distance: '90px',
    delay: 500,
    origin: 'left'
})

revelar.reveal('.efeito-production', {
    duration: 2000,
    distance: '90px',
    delay: 500,
    origin: 'left'
})

revelar.reveal('.efeito-contact', {
    duration: 2000,
    distance: '90px',
    delay: 500
})

document.addEventListener('DOMContentLoaded', () => {
  // Fecha todos os detalhes dentro de uma seção
  function collapseSection(section) {
    const toggles = section.querySelectorAll('.toggle-detail');
    const details = section.querySelectorAll('.detail');
    toggles.forEach(btn => btn.setAttribute('aria-expanded', 'false'));
    details.forEach(d => d.hidden = true);
    section.querySelectorAll('.card, .project-card, .production-card')
      .forEach(c => c.classList.remove('active'));
  }

  // Para cada seção do portfólio que tenha toggles…
  document.querySelectorAll('.portfolio-section').forEach(section => {
    const toggles = section.querySelectorAll('.toggle-detail');
    if (toggles.length === 0) return;

    // Inicia tudo fechado
    collapseSection(section);

    // Adiciona listener a cada botão “Ver detalhes”
    toggles.forEach(btn => {
      btn.addEventListener('click', () => {
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
        const detail = document.getElementById(btn.getAttribute('aria-controls'));
        const card = btn.closest('.card, .project-card, .production-card');

        if (isExpanded) {
          // Se já está aberto, fecha
          btn.setAttribute('aria-expanded', 'false');
          if (detail) detail.hidden = true;
          if (card) card.classList.remove('active');
        } else {
          // Fecha todos antes de abrir o clicado
          collapseSection(section);

          btn.setAttribute('aria-expanded', 'true');
          if (detail) detail.hidden = false;
          if (card) card.classList.add('active');
        }
      });
    });
  });
});