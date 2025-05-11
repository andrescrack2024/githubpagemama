function mostrarSorpresa() {
  // Mostrar el div de sorpresa general si lo tienes
  document.getElementById("sorpresa").style.display = "block";

  // Reproducir la música
  const audio = document.getElementById("audioMadre");
  audio.play();

  // Mostrar el div con el contenido extra (imágenes, mensaje, etc.)
  document.getElementById("extraSorpresa").style.display = "block";
}
