/* Copy and paste this into your browser console */
const layoutLeftDiv = document.querySelector('.layout-left');
const images = Array.from(layoutLeftDiv.querySelectorAll('img'));
const urls = images.map(img => img.src)
    .filter(src => src.startsWith('https://s.alicdn.com/') && src.endsWith('.jpg'))
    .map(url => url.split('.jpg')[0] + '.jpg');

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
