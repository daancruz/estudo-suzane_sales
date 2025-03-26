document.addEventListener("DOMContentLoaded", () => {

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if(id) {
        fetch('../data/noticias.json')
        .then(res => res.json())
        .then(dados => {
            const noticia = dados.find(dado => dado.id == id);

            if(noticia) {
                const conteudo = document.querySelector('#conteudo');
                const divCol = 
                conteudo.innerHTML = `
                    <h2>${noticia.title}</h2>
                    <img src="../img/noticia${noticia.id}.png" alt="${noticia.title}" class="img-fluid">
                    <p>${noticia.subtitle}</p>
                    <p>${noticia.content}</p> <!-- Supondo que você tenha uma propriedade 'content' no JSON -->
                `
            }else{
                document.getElementById("conteudo").innerHTML = "<p>Notícia não encontrada.</p>";
            }
        })
        .catch(error => console.error("Erro ao carregar o conteúdo: ", error));
    };
});
