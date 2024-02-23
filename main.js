/* Copy and paste this into your browser console */
const productImageDiv = document.querySelector('.module_productImage');
const images = Array.from(productImageDiv.querySelectorAll('img'));
let urls = images.map(img => img.src)
    .filter(src => src.startsWith('https://s.alicdn.com/') && src.endsWith('.jpg'))
    .map(url => url.split('.jpg')[0] + '.jpg');

urls = [...new Set(urls)];

urls.forEach(url => {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const a = document.createElement('a');
            const blobUrl = URL.createObjectURL(blob);
            a.href = blobUrl;
            a.download = url.split('/').pop();
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(blobUrl);
        });
});
