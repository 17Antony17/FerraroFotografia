// Seleziona il video e il div "volume"
const video = document.querySelector('video.video-bg');

const volumeDiv = document.getElementById('volume');

// Gestione scorrimento scritte home con aggiunto o rimozione di "in-page"
// elements
let elements_to_watch = document.querySelectorAll('.watch');

// callback 
let callback = function(items) {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("in-page");
      
      // Se l'elemento osservato è il div con id "volume", riattiva il volume del video
      if (item.target.id === 'volume' && video) {
        
          video.muted = false;
      
      }

      // Se l'elemento osservato è il div con id "imgStop", disattiva il volume del video
      if (item.target.id === 'imgStop' && video) {
        video.muted = true;
      }
    } else {
      item.target.classList.remove("in-page");
    }
  });
};

//  listener per il clic sul div "volume"
volumeDiv.addEventListener('click', function() {
  
  if (!video.paused) {
      video.pause();
      video.muted = true;
  } else {
      video.play();
      video.muted = false ;
  }
});

// Rileva quando la pagina diventa visibile o nascosta
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
      // La pagina è nascosta, metti in pausa il video
      video.pause();
  } else {
      // La pagina è visibile, riprendi il video solo se non è in modalità muted
      if (!video.muted) {
          video.play();
      }
  }
});

// observer
let observer = new IntersectionObserver(callback, { threshold: 0.1 });

// apply
elements_to_watch.forEach((element) => {
  observer.observe(element);
});
