function calcular() {
    let n = parseInt(document.getElementById("lados").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(n) || n < 3) {
        resultado.innerHTML = "<p>Por favor, ingresa un número válido (mínimo 3).</p>";
        return;
    }

    let sumaAngulosInternos = (n - 2) * 180;
    let anguloInterno = Math.round(sumaAngulosInternos / n);
    let anguloExterno = Math.round(360 / n);

    resultado.innerHTML = `
        <p><strong>Suma de ángulos internos:</strong> ${sumaAngulosInternos}°</p>
        <p><strong>Ángulo interno (si es regular):</strong> ${anguloInterno}°</p>
        <p><strong>Ángulo externo (si es regular):</strong> ${anguloExterno}°</p>
    `;
}

function limpiar() {
    document.getElementById("lados").value = "";
    document.getElementById("resultado").innerHTML = "";
}
