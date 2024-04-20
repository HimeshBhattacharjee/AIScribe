

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const predictionDiv = document.getElementById('prediction');
const fileInput = document.getElementById('fileInput');

let isDrawing = false;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

function startDrawing(event) {
  isDrawing = true;
  draw(event);
}

function draw(event) {
  if (!isDrawing) return;

  const x = event.offsetX;
  const y = event.offsetY;

  ctx.fillRect(x, y, 5, 5);
}

function stopDrawing() {
  isDrawing = false;
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  predictionDiv.innerText = '';
}

function predictDigit() {
  const imageData = canvas.toDataURL();
  const digit = document.createElement('img');
  digit.src = imageData;

  // Send imageData to backend for prediction
  // Display prediction result
  predictionDiv.innerText = 'Predicting...';
}

// function uploadImage() {
//   const file = fileInput.files[0];
//   const reader = new FileReader();

//   reader.onload = function(event) {
//     const img = new Image();
//     img.onload = function() {
//       ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//     };
//     img.src = event.target.result;
//   };

//   reader.readAsDataURL(file);
// }