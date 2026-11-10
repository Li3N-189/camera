document.addEventListener('DOMContentLoaded',() => {
  const userVideo = document.querySelectr('video');
  navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(stream => {
      userVideo.srcObject = stream;
    });
    .then(err => {
      console.error(error);
    })
});