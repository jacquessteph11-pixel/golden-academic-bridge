// ===== 1. Navbar Active Link Highlight =====
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// ===== 2. Hero Section Fade-in Animation =====
const heroText = document.querySelector('.hero-text');
if (heroText) {
  heroText.style.opacity = 0;
  heroText.style.transition = 'opacity 1.5s ease-in-out';
  window.addEventListener('load', () => {
    heroText.style.opacity = 1;
  });
}
// Hover effect already included in CSS
// Optional: Click teacher card to show contact modal
const teacherCards = document.querySelectorAll('.teacher-card');

teacherCards.forEach(card => {
  card.addEventListener('click', () => {
    const name = card.querySelector('h3').textContent;
    const email = card.querySelector('p:nth-child(3)').textContent;
    alert(`Contact ${name} at ${email}`);
  });
});

// ===== 3. Featured Books Toggle (Show More / Show Less) =====
const toggleButton = document.getElementById('toggle-books');
const bookGallery = document.querySelector('.book-gallery');

if (toggleButton && bookGallery) {
  toggleButton.addEventListener('click', () => {
    bookGallery.classList.toggle('expanded');
    toggleButton.textContent = bookGallery.classList.contains('expanded') ? 'Show Less' : 'Show More';
  });
}

// ===== 4. Book Hover Effects =====
const bookCards = document.querySelectorAll('.book-card');
bookCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.transition = 'transform 0.3s ease';
    card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = 'none';
  });
});

// ===== 5. Optional: Book Search/Filter =====
const searchInput = document.getElementById('book-search');
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    bookCards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const desc = card.querySelector('p').textContent.toLowerCase();
      if (title.includes(query) || desc.includes(query)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
}
