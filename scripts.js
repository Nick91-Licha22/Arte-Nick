
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");

    function updateMenuState() {
        if (window.innerWidth > 650) {
            nav.classList.remove("visible"); 
            abrir.style.display = 'none'; 
            cerrar.style.display = 'none'; 
        } else {
            if (!nav.classList.contains('visible')) {
                abrir.style.display = 'block';
                cerrar.style.display = 'none';
            } 
        }
    }

    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
        abrir.style.display = 'none'; 
        cerrar.style.display = 'block'; 
    });

    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
        abrir.style.display = 'block'; 
        cerrar.style.display = 'none'; 
    });

    updateMenuState();
    window.addEventListener('resize', updateMenuState);
});