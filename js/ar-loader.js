// URL'den model parametresini al
const urlParams = new URLSearchParams(window.location.search);
const modelParam = urlParams.get('model');

// Model parametresine göre doğru modeli yükle
window.onload = function() {
    const modelViewer = document.querySelector('model-viewer');
    if (modelParam) {
        modelViewer.src = `models/${modelParam}.gltf`;
    }
} 