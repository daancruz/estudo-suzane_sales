const loading = document.createElement("div");

loading.id = 'loading__message';
loading.innerHTML = 'Carregando...';

document.body.appendChild(loading)

window.addEventListener('load', () => {
    setTimeout(() => {
        loading.style.display = 'none'
    }, 5000)
});
