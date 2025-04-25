document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.portfolio-section');

  sections.forEach(section => {
    const wrappers = section.querySelectorAll('.card-wrapper');

    wrappers.forEach(wrapper => {
      const cards = wrapper.querySelectorAll('.card');
      const details = wrapper.querySelectorAll('.detail');

      cards.forEach((card, index) => {
        card.addEventListener('click', () => {
          details.forEach(detail => {
            detail.style.display = 'none';
          });

          details[index].style.display = 'block';

          cards.forEach((btn, btnIndex) => {
            if (index === btnIndex) {
              btn.classList.add('active');
            } else {
              btn.classList.remove('active');
            }
          });
        });
      });

      if (cards.length > 0) {
        details[0].style.display = 'block';
        cards[0].classList.add('active');
      }
    });
  });
});
