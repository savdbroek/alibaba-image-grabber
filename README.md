# Alibaba Product Image Downloader
A simple JavaScript script to download all the images of an Alibaba product. This script is meant to be pasted and run in the browser's console while you are on the Alibaba product page you are interested in.

## How to use
1. Navigate to the Alibaba product page of your choice.
2. Open your browser's console.
3. Copy and paste the script into the console.
4. Press Enter and watch the images download.

```javascript/* Copy and paste this into your browser console */
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
```
## Compatibility
This script was tested in Brave and Firefox browsers. It only works correctly in Firefox to our knowledge. Please keep in mind that the script's functionality may vary based on the browser and the specific Alibaba product page you are on.

## Disclaimer
This script is provided "as is" for educational purposes only. The user is responsible for ensuring that they are compliant with Alibaba's terms of service and any relevant copyright or legal regulations when using this script. The author does not take responsibility for any consequences that may arise from the use of this script.