
document.addEventListener('DOMContentLoaded', function() {
    const tituloElement = document.querySelector('.ola-titulo');
    const tituloText = "Cristina Abreu";
    let tituloIndex = 0;
    let nomeIndex = 0;
    let subtituloCompleto = nomeText + ".";
    let subtituloIndex = 0;
    const typingSpeed = 100;

    function typeTitulo() {
        if (tituloIndex < tituloText.length) {
            tituloElement.textContent += tituloText[tituloIndex];
            tituloIndex++;
            setTimeout(typeTitulo, typingSpeed);
        } else {
            setTimeout(typeSubtitulo, typingSpeed);
        }
    }

    function typeSubtitulo() {
        if (subtituloIndex < meChamoText.length) {
            subtituloElement.textContent = meChamoText.substring(0, subtituloIndex + 1);
            subtituloIndex++;
            setTimeout(typeSubtitulo, typingSpeed);
        } else if (nomeIndex < nomeText.length && nomeDestacadoElement) {
            nomeDestacadoElement.textContent += nomeText[nomeIndex];
            nomeIndex++;
            setTimeout(typeSubtitulo, typingSpeed);
        } else if (subtituloElement && nomeDestacadoElement && subtituloElement.textContent === meChamoText + nomeText) {
            subtituloElement.textContent += "."; // Add the final dot
        }
    }

    typeTitulo();
    function toggleInfo(id) {
        const elemento = document.getElementById(id);
        if (elemento.style.display === "block") {
            elemento.style.display = "none";
        } else {
            elemento.style.display = "block";
        }
    }
});
window.addEventListener('load', function() {
    const header = document.querySelector('header');
    const body = document.body;
    body.style.paddingTop = header.offsetHeight + 'px';
});
document.addEventListener('DOMContentLoaded', function() {
    const elementosParaBarra = document.querySelectorAll('#projetos h2, #sobre h2, #contato h2');
    elementosParaBarra.forEach(elemento => {
        const barra = document.createElement('span');
        barra.textContent = '| ';
        barra.classList.add('barra-antes-texto');
        elemento.insertBefore(barra, elemento.firstChild);
    });
});
window.onload = function() {
    Particles.init({
      selector: '#particles-js',
      // ... outras configurações ...
      color: ['#ff8a00', '#da1b60'], // Array com as cores do seu degradê
      // ... outras configurações ...
    });
  }

