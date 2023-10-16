// Función para mostrar la interfaz de subida de documentos
function mostrarInterfazSubida() {
    // Ocultar la lista de documentos
    document.querySelector('.lista-documentos').style.display = 'none';

    // Mostrar la interfaz de subida de documentos
    document.querySelector('.upload-interface').style.display = 'block';
}

// Función para volver a la lista de documentos
function volverAListaDocumentos() {
    // Ocultar la interfaz de subida de documentos
    document.querySelector('.upload-interface').style.display = 'none';

    // Mostrar la lista de documentos
    document.querySelector('.lista-documentos').style.display = 'table-row-group';
}
