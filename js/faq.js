document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;

    fetch("data/faqs.json")
        .then(res => res.json())
        .then(dados => {
        const section = document.querySelector("#accordionExample");

        dados.forEach(dado => {
            const divCol = document.createElement("div");

            if(path === "/faq.html") {
                divCol.className = "accordion-item"
                divCol.innerHTML = `
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#${dado.id}" aria-expanded="true" aria-controls="${dado.id}">
                            ${dado.question}
                        </button>
                    </h2>
                    <div id="${dado.id}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            ${dado.answer}
                        </div>
                    </div>
                `
                section.appendChild(divCol);
            };
        });
    })
    .catch(error => console.log("Erro ao tentar obter os dados", error))
});
