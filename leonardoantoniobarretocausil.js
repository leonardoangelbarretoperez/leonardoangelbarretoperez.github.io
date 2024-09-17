// Mostrar botón al hacer scroll hacia abajo
window.addEventListener('scroll', function () {
    const scrollButton = document.getElementById('scroll-to-subtitle');
    if (window.scrollY > 300) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  });
  
  // Scroll suave al subtítulo
  document.getElementById('scroll-to-subtitle').addEventListener('click', function () {
    document.querySelector('.subtitle').scrollIntoView({
      behavior: 'smooth'
    });
  });
  
  // Cargar el botón en el DOM
  const scrollButtonHTML = document.createElement('div');
  scrollButtonHTML.id = 'scroll-to-subtitle';
  scrollButtonHTML.innerText = 'Go to Subtitle';
  document.body.appendChild(scrollButtonHTML);
  