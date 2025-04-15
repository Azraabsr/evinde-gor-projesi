function showARModal() {
    // Ürün bilgilerini al
    const productId = document.getElementById('product-id').value;
    const productName = document.getElementById('product-name').innerText;
    
    // AR URL'ini oluştur
    const arUrl = `${window.location.origin}/ar-viewer.html?model=${productId}`;
    
    // QR kodu oluştur
    const qr = qrcode(0, 'M');
    qr.addData(arUrl);
    qr.make();
    const qrImage = qr.createImgTag(5);
    
    // Modal HTML'i
    const modalHtml = `
        <div class="ar-modal-overlay" onclick="closeARModal()">
            <div class="ar-modal-content" onclick="event.stopPropagation()">
                <span class="ar-modal-close" onclick="closeARModal()">&times;</span>
                <h3>${productName} ürününü evinizde görün</h3>
                <div class="qr-container">
                    ${qrImage}
                </div>
                <p>Mobil cihazınızla QR kodu tarayın ve ürünü AR ile evinizde görün!</p>
            </div>
        </div>
    `;
    
    // Modal'ı sayfaya ekle
    const modalContainer = document.createElement('div');
    modalContainer.id = 'ar-modal';
    modalContainer.innerHTML = modalHtml;
    document.body.appendChild(modalContainer);
}

function closeARModal() {
    const modal = document.getElementById('ar-modal');
    if (modal) {
        document.body.removeChild(modal);
    }
}
