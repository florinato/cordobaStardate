function calcularFechaEstelar(fecha) {
    const epoca = document.getElementById('epocaSelector').value;
    let stardate;
    
    if (epoca === 'TNG') {
        const yearBase = 2323;
        const currentYear = fecha.getFullYear();
        const startOfYear = new Date(currentYear, 0, 0);
        const diff = fecha - startOfYear;
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);

        stardate = 1000 * (currentYear - yearBase) + (dayOfYear * 1000 / 365.25);
    } else if (epoca === 'TOS') {
        const yearBase = 2265;
        const currentYear = fecha.getFullYear();
        const stardateBase = 1312.3;
        const startOfYear = new Date(currentYear, 0, 0);
        const diff = fecha - startOfYear;
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);

        stardate = stardateBase + ((currentYear - yearBase) * 1000) + (dayOfYear * 1000 / 365.25);
    }

    return stardate.toFixed(2);
}

function convertirFecha() {
    const fechaInput = document.getElementById('fechaEspecifica').value;
    if (fechaInput) {
        const fecha = new Date(fechaInput);
        const stardate = calcularFechaEstelar(fecha);
        document.getElementById('stardateEspecifico').textContent = "Fecha específica estelar: " + stardate;
    } else {
        document.getElementById('stardateEspecifico').textContent = "Por favor selecciona una fecha.";
    }
}

function actualizarStardate() {
    const hoy = new Date();
    document.getElementById('stardate').textContent = "Fecha estelar: " + calcularFechaEstelar(hoy);
}

document.addEventListener('DOMContentLoaded', () => {
    actualizarStardate();
});


