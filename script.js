// Função para rolar a página e ativar as animações das fotos
document.getElementById("startBtn").addEventListener("click", function () {
  // Oculta o título e o botão
  document.getElementById("title").classList.add("hidden");
  this.classList.add("hidden");

  // Rola a página até a seção das fotos
  setTimeout(() => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });

    // Ativa as animações das fotos após a rolagem
    setTimeout(() => {
      const photos = document.querySelectorAll(".photo");
      photos.forEach((photo, index) => {
        setTimeout(() => {
          photo.style.opacity = 1;
          photo.style.transform = "translateY(0)";
        }, index * 300); // Delay de 200ms entre cada foto
      });
    }, 500); // Delay para garantir que a rolagem terminou
  }, 1000);
});

// Função para abrir a foto em tela cheia
function openPhoto(photo) {
  const fullscreen = document.getElementById("fullscreen");
  const fullImage = document.getElementById("fullImage");
  const caption = document.querySelector(".caption");

  fullImage.src = photo.src;
  caption.textContent = photo.getAttribute("data-caption");

  fullscreen.style.display = "flex";
  fullscreen.classList.remove("closing");
}

function closeModal() {
  const fullscreen = document.getElementById("fullscreen");

  fullscreen.classList.add("closing");

  setTimeout(() => {
    fullscreen.style.display = "none";
  }, 500);
}

// Fecha o modal ao clicar no botão de fechar ou fora da imagem
document.querySelector(".close-btn").addEventListener("click", () => {
  document.getElementById("fullscreen").style.display = "none";
});

document.getElementById("fullscreen").addEventListener("click", (e) => {
  if (e.target === document.getElementById("fullscreen")) {
    document.getElementById("fullscreen").style.display = "none";
  }
});

// Reinicia as animações ao voltar ao topo
window.addEventListener("scroll", function () {
  if (window.scrollY === 0) {
    let title = document.getElementById("title");
    let button = document.getElementById("startBtn");

    // Remove as classes de esconder e reativa as animações
    title.classList.remove("hidden");
    button.classList.remove("hidden");

    // Força a reexecução da animação
    void title.offsetWidth;
    void button.offsetWidth;

    title.classList.add("fadeInDown");
    button.classList.add("fadeInDown");

    // Reseta as fotos para o estado inicial
    const photos = document.querySelectorAll(".photo");
    photos.forEach((photo) => {
      photo.style.opacity = 0;
      photo.style.transform = "translateY(50px)";
    });
  }
});
