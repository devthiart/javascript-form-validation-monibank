const buttonStartCamera = document.querySelector('[data-video-botao]');
const fieldCamera = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');
const buttonTakeAPicture = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
const message = document.querySelector('[data-mensagem]');
const buttonSendPicture = document.querySelector('[data-enviar]');

let imageURL = '';

buttonStartCamera.addEventListener('click', async function () {
  const startVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false});

  buttonStartCamera.style.display = "none";
  fieldCamera.style.display = "block";

  video.srcObject = startVideo;
});

buttonTakeAPicture.addEventListener('click', function() {
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

  imageURL = canvas.toDataURL("image/jpeg");

  fieldCamera.style.display = "none";
  message.style.display = "block";
});

buttonSendPicture.addEventListener('click', () => {
  const receiveExistingData = localStorage.getItem("cadastro");
  const returnConverted = JSON.parse(receiveExistingData);

  returnConverted.imagem = imageURL;

  localStorage.setItem('cadastro', JSON.stringify(returnConverted));

  window.location.href = "./abrir-conta-form-3.html";
});
