// Tehlikeli dosya imzalarını simüle eden bir dizi
const dangerousSignatures = [
    'malware-signature-1',
    'virus-signature-2',
    'trojan-signature-3'
];

// Dosya içeriğini analiz eden bir fonksiyon
async function analyzeFileContent(file) {
    const reader = new FileReader();
    
    // Dosya okuma işlemi tamamlandığında
    reader.onload = function(event) {
        const fileContent = event.target.result;

        // Zararlı imzaları kontrol et
        let isDangerous = false;
        for (const signature of dangerousSignatures) {
            if (fileContent.includes(signature)) {
                isDangerous = true;
                break;
            }
        }

        // Sonucu kullanıcıya göster
        if (isDangerous) {
            document.getElementById('result').innerText = 'Detaylı tarama: Zararlı dosya tespit edildi!';
        } else {
            document.getElementById('result').innerText = 'Detaylı tarama: Dosya temiz.';
        }
    };

    // Dosyayı metin olarak oku (örneğin, metin dosyaları için)
    reader.readAsText(file);
}

// Detaylı tarama fonksiyonu
function detailedScan(file) {
    const fileName = file.name;

    // Dosya içeriğini analiz et
    document.getElementById('result').innerText = 'Detaylı tarama yapılıyor...';
    setTimeout(() => {
        analyzeFileContent(file);
    }, 2000); // Simülasyon için 2 saniye bekleme
}

// Hızlı tarama fonksiyonu ile aynı kalabilir
function quickScan(file) {
    const fileName = file.name;
    const fileExtension = fileName.split('.').pop().toLowerCase();
    const dangerousExtensions = ['exe', 'bat', 'cmd', 'js', 'vbs', 'scr', 'pif', 'com', 'msi', 'jar', 'sh'];

    if (dangerousExtensions.includes(fileExtension)) {
        document.getElementById('result').innerText = 'Hızlı tarama: Bu dosya potansiyel olarak zararlıdır!';
    } else {
        document.getElementById('result').innerText = 'Hızlı tarama: Dosya temiz.';
    }
}
