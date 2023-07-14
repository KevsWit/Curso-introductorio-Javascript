document.addEventListener("DOMContentLoaded", function() {
  var currentFile = window.location.pathname.split("/").pop();

  if (currentFile === "index.html") {
    var playlist = [
      { name: "Franz Ferdinand - This Fire", source: "../audio/this_fire.mp3" },
      { name: "K'NAAN - Bang Bang ft. Adam Levine", source: "../audio/k_naan_bang_bang.mp3" },
      { name: "Madcon - Beggin", source: "../audio/madcon_beggin.mp3" },
      { name: "Queens Of The Stone Age - No One Knows", source: "../audio/no_one_knows.mp3" },
      { name: "The White Stripes - Seven Nation Army", source: "../audio/the_white_stripes_seven_nation_army.mp3" }
    ];

    var audio = document.getElementById("audio");
    var playlistElement = document.getElementById("playlist");

    // Cargar la primera canción de la lista de reproducción
    audio.src = playlist[0].source;

    // Generar los elementos <li> en base al array 'playlist'
    playlist.forEach(function(song) {
      var listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
      listItem.textContent = song.name;

      listItem.addEventListener("click", function() {
        audio.src = song.source;
        audio.play();
      });

      playlistElement.appendChild(listItem);
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var currentFile = window.location.pathname.split("/").pop();

  if (currentFile === "index.html") {
    var enviarCorreoLink = document.getElementById("enviar-correo-link");
    var encuestaForm = document.getElementById("encuesta-form");
    var opinionInput = document.getElementById("opinion");
    var tiktokInput = document.getElementById("tiktok");
    var instagramInput = document.getElementById("instagram");
  
    enviarCorreoLink.addEventListener("click", function(event) {
      event.preventDefault(); // Evita que el enlace redirija
  
      var opinion = opinionInput.value;
      var tiktok = tiktokInput.value;
      var instagram = instagramInput.value;
  
      var subject = encodeURIComponent("Encuesta de Baloncesto");
      var body = encodeURIComponent("Opinión:\n" + opinion + "\n\nTikTok:\n" + tiktok + "\n\nInstagram:\n" + instagram);
  
      var mailtoURL = "mailto:kev.gcastillo@outlook.com?subject=" + subject + "&body=" + body;
  
      window.location.href = mailtoURL;
    });
  }
});
  
  
  