const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const btnTakePicture = document.getElementById("btnTakePicture");
const context = canvas.getContext("2d");
const btnSubmit = document.getElementById("btnSubmit");

// Request permission to access user's camera
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    // If user granted access
    btnTakePicture.removeAttribute("disabled");
    btnSubmit.removeAttribute("disabled");
    video.srcObject = stream;
    video.play();
  })
  .catch((err) => {
    // If user did not grant access or an error occurred.
    console.log("An error occurred: " + err);
  });

// Capture the image when the button is clicked
btnTakePicture.addEventListener("click", () => {
  // Set the canvas dimensions to match the video
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  // Draw the video frame to the canvas
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
});
