const menuLeque = document.getElementById('menuLeque');

if (menuLeque) {
  menuLeque.addEventListener('click', (e) => {
    menuLeque.classList.toggle('active');
    e.stopPropagation();
  });
  
  // Fechar menu ao clicar em qualquer lugar da tela
  document.addEventListener('click', () => {
    menuLeque.classList.remove('active');
  });
}

// Revelar elementos ao rolar (Animação suave)
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'all 0.6s ease-out';
  observer.observe(card);
});