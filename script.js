// Üç nokta menüsünün durumu
let threeDotMenuState = {
    isOpen: false,
};

// Üç nokta menüsünü açıp kapatmak için dinleyici
document.getElementById('toggle-menu').addEventListener('click', function() {
    threeDotMenuState.isOpen = !threeDotMenuState.isOpen; // Durumu değiştir
    renderThreeDotMenu(); // Menüyü yeniden oluştur
});

// Üç nokta menüsünü render etme fonksiyonu
function renderThreeDotMenu() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = threeDotMenuState.isOpen ? 'block' : 'none';
}

// Hakkında butonuna tıklama olayı
document.getElementById('about-button').addEventListener('click', function() {
    alert('Hakkında bilgileri burada gösterilecek.');
});

// Ayarlar butonuna tıklama olayı
document.getElementById('settings-button').addEventListener('click', function() {
    alert('Ayarlar sayfası açılıyor.');
});

// Dosya yükleme formu için dinleyici
document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Sayfa yenilemesini önler
    
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];

    if (!file) {
        document.getElementById('result').innerText = 'Lütfen bir dosya seçin.';
        return;
    }

    // Dosya uzantısını kontrol et
    const fileName = file.name;
    const fileExtension = fileName.split('.').pop().toLowerCase();

    // Tehlikeli uzantılar
    const dangerousExtensions = ['exe', 'bat', 'cmd', 'js', 'vbs', 'scr', 'pif', 'com', 'msi', 'jar', 'sh'];
    
    if (dangerousExtensions.includes(fileExtension)) {
        document.getElementById('result').innerText = 'Bu dosya potansiyel olarak zararlıdır!';
    } else {
        document.getElementById('result').innerText = 'Dosya temiz.';
    }
});

// Tarama modunu başlatma
document.getElementById('start-scan').addEventListener('click', function() {
    const mode = document.getElementById('scan-mode').value;
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];

    if (!file) {
        alert('Lütfen bir dosya seçin.');
        return;
    }

    if (mode === 'quick') {
        alert('Hızlı tarama başlatılıyor...');
        // Hızlı tarama işlemleri
        quickScan(file);
    } else {
        alert('Detaylı tarama başlatılıyor...');
        // Detaylı tarama işlemleri
        detailedScan(file);
    }
});

// Hızlı tarama fonksiyonu
function quickScan(file) {
    // Hızlı tarama mantığı burada uygulanacak
    // Örneğin, sadece dosya uzantısını kontrol et
    const fileName = file.name;
    const fileExtension = fileName.split('.').pop().toLowerCase();
    const dangerousExtensions = ['exe', 'bat', 'cmd', 'js', 'vbs', 'scr', 'pif', 'com', 'msi', 'jar', 'sh'];

    if (dangerousExtensions.includes(fileExtension)) {
        document.getElementById('result').innerText = 'Hızlı tarama: Bu dosya potansiyel olarak zararlıdır!';
    } else {
        document.getElementById('result').innerText = 'Hızlı tarama: Dosya temiz.';
    }
}

// Detaylı tarama fonksiyonu
function detailedScan(file) {
    // Detaylı tarama mantığı burada uygulanacak
    // Örneğin, dosyanın içeriğini analiz etme
    setTimeout(() => {
        document.getElementById('result').innerText = 'Detaylı tarama tamamlandı: Dosya temiz.';
    }, 3000); // Simülasyon için 3 saniye bekletme
}