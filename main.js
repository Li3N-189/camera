document.addEventListener('DOMContentLoaded',() => {
  const userVideo = document.querySelector('video');
  navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(stream => {
      userVideo.srcObject = stream;
    })
    .catch(err => {
      console.error(err);
    });
});

function takePicture() {
  const canvas = document.createElement('canvas');
  const video = document.querySelector('video');
  canvas.width = video.clientWidth;
  canvas.height = video.clientHeight;
  const context = canvas.getContext('2d');
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  const image = new Image();
  canvas.toBlob(blob => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.download = `picture_${new Date().toISOString()}.png`;
    a.target = '_blank';
    a.href = url;
    a.click();
  });
}
