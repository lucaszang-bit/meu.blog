// Dados dos artigos do blog (Postagens com título, data, imagem e conteúdo)
const posts = [
  {
    titulo: "O Primeiro Bug da História Era um Inseto de Verdade!",
    data: "25 de Agosto de 2026",
    imagem: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    conteudo: "Você sabia que o termo 'bug' usado na programação veio literalmente de um inseto? Em 1947, a pioneira da computação Grace Hopper encontrou uma mariposa presa nos relés do computador Harvard Mark II. O inseto foi removido e colado no diário de bordo com a anotação: 'Primeiro caso atual de bug sendo encontrado'."
  },
  {
    titulo: "Por que a Linguagem Python tem esse Nome?",
    data: "20 de Agosto de 2026",
    imagem: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",
    conteudo: "Ao contrário do que muitos pensam, a linguagem Python não foi batizada por causa da cobra pitão. Seu criador, Guido van Rossum, era grande fã do grupo de comédia britânico 'Monty Python's Flying Circus'. Ele queria um nome curto, único e ligeiramente misterioso para a linguagem."
  }
];

// Função para renderizar os posts na tela
function carregarPosts() {
  const container = document.getElementById("blog-posts");

  posts.forEach(post => {
    const postElement = document.createElement("article");
    postElement.classList.add("post");

    postElement.innerHTML = `
      <img src="${post.imagem}" alt="${post.titulo}" class="post-img">
      <div class="post-content">
        <h2 class="post-title">${post.titulo}</h2>
        <div class="post-meta">Publicado em ${post.data}</div>
        <p class="post-text">${post.conteudo}</p>
      </div>
    `;

    container.appendChild(postElement);
  });
}

// Executa a função quando o documento estiver carregado
document.addEventListener("DOMContentLoaded", carregarPosts);
