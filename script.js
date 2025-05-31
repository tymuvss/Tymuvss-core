function playlista() {
  const container = document.getElementById('spotifyContainer');
  container.innerHTML = `
    <iframe 
      class="hidden-iframe" 
      style="border-radius:12px; width:100%; height:352px; opacity:0;" 
      src="https://open.spotify.com/embed/playlist/0YhYD34hQep5956cc6voIo?utm_source=generator&theme=0" 
      frameborder="0" 
      allowfullscreen 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy">
    </iframe>
  `;

  // Dodaj animację po wstawieniu iframe do DOM
  const iframe = container.querySelector('iframe');
  // Małe opóźnienie, żeby przeglądarka zauważyła zmianę stylu i uruchomiła animację
  setTimeout(() => {
    iframe.classList.add('appear');
  }, 50);
}
