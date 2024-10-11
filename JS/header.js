document.addEventListener('DOMContentLoaded', () => {
    fetch('header.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Errore nel caricamento dell\'header');
        }
        return response.text();
      })
      .then(html => {
        // Crea un contenitore temporaneo per il contenuto HTML
        const headerContainer = document.createElement('div');
        headerContainer.innerHTML = html;
  
        // Estrai solo la parte del tag <header>
        const headerElement = headerContainer.querySelector('header');
        if (headerElement) {
          // Inserisci il contenuto nel body all'inizio
          document.body.insertBefore(headerElement, document.body.firstChild);
        }
  
        // Aggiungi il CSS dell'header manualmente
        const styleLink = document.createElement('link');
        styleLink.rel = 'stylesheet';
        styleLink.href = 'Style/header.css'; 
        document.head.appendChild(styleLink);
  
        // Aggiungi lo script del menu manualmente
        const scriptElement = document.createElement('script');
        scriptElement.src = 'JS/menu.js';
        document.body.appendChild(scriptElement);
      })
      .catch(error => {
        console.error('Errore durante il caricamento dell\'header:', error);
      });
  });
  