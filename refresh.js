document.addEventListener("DOMContentLoaded", () => {
    refreshDatos();
    refreshId = setInterval(refreshDatos, 10000);
});

function refreshDatos() {
    // Update temperature
    let tempValor = document.querySelector("#temp-int");
    tempValor.innerHTML = String(parseInt(tempValor.innerHTML) + 1).padStart(2, '0');
    
    // Update humidity
    let humedadValor = document.querySelector("#humedad-int");
    humedadValor.innerHTML = String(parseInt(humedadValor.innerHTML) + 1).padStart(2, '0');
    
    // Update wind
    let vientoValor = document.querySelector("#viento-int");
    vientoValor.innerHTML = String(parseInt(vientoValor.innerHTML) + 1).padStart(2, '0');
    
    // Update fire level
    let incendioValor = document.querySelector("#incendio-int");
    incendioValor.innerHTML = String(parseInt(incendioValor.innerHTML) + 1).padStart(2, '0');
}