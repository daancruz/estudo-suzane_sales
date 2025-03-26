document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;

    fetch("data/noticias.json")
        .then(res => res.json())
        .then(dados => {
        const section = document.querySelector("#noticias");
        
        // DADOS DOS CARDS
        dados.forEach(dado => {
            const divCol = document.createElement("div");

            // NOTICIAS DA HOME
            if (path === "/" || path.endsWith("/index.html") || path === "/faq.html") {
                divCol.className = "swiper-slide";
                divCol.innerHTML = `
                    <a href="/blog/detalhes/${dado.id}" class="swiper-slide" id="${dado.id}">
                        <div class="custom__card" style="background-image: url(img/noticia${dado.id}.png);">
                            <div class="content card-overlay position-absolute bottom-0 px-3">
                                <h6 class="title">${dado.title}</h6>
                                <p class="text">${dado.subtitle}</p>
                            </div>
                        </div>
                    </a>
                `
                section.appendChild(divCol);
            }

            // NOTICIAS DO BLOG
            if (path === "/blog.html") {
                divCol.className = "col-12 col-md-4";
                divCol.innerHTML = `
                    <div class="custom__card position-relative shadow p-0" id="${dado.id}">
                        <img class="img-fluid" src="img/noticia${dado.id}.png" alt="${dado.title}">
                        <div class="content px-2 mt-2">
                            <h6 class="title">${dado.title}</h6>
                            <p class="text">${dado.subtitle}</p>
                        </div>
                        <a class="link position-absolute bottom-0 my-3" href="/blog/detalhes.html?id=${dado.id}">Ler mais</a>
                    </div>
                `;
                section.appendChild(divCol);
            }
        });
    })
    .catch(error => console.error("Erro ao carregar o conteúdo: ", error))
});
