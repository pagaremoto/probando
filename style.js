const ESP32_IP = "http://192.168.1.41";

async function obtenerEstadoInicial() {
    try {
        const response = await fetch(`${ESP32_IP}/estado`);
        ...
    } catch (error) {
        console.error('Error al obtener el estado inicial:', error);
        alert(`Error al cargar el estado inicial: ${error.message}`);
    }
}

async function toggleLED(route, led) {
    ...
    const response = await fetch(`${ESP32_IP}/${route}`, { method: 'GET' });
    ...
}
