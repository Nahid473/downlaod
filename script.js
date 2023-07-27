const downloadBtn = document.getElementById('downloadBtn');

downloadBtn.addEventListener('click', () => {
  downloadImage('img.jpg'); 
});

function downloadImage(imageFileName) {
  const link = document.createElement('a');
  link.href = imageFileName;
  link.download = getFileNameFromUrl(imageFileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function getFileNameFromUrl(url) {
  
  return url.substring(url.lastIndexOf('/') + 1);
}
