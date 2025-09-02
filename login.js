document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.getElementById('openLogin');
  const closeBtn = document.getElementById('closeLogin');
  const modal = document.getElementById('loginModal');
  const form = document.getElementById('loginForm');

  openBtn.addEventListener('click', function (e) {
    e.preventDefault();
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

form.addEventListener('submit', function (e) {
  e.preventDefault();
  modal.style.display = 'none';
});
  
});
document.getElementById('LoginBoton').addEventListener('click', function() {
    window.location.href = 'https://www.ejemplo.com';
