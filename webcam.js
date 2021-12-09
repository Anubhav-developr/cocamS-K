//screen recording ke liye
// const recordScreen = async function() {
// //  window.alert("hello")
// const stream = await navigator.mediaDevices.getDisplayMedia({
//   video : {
//     mediaSource : "screen"
//   }
// })
// const data = [];
// const mediaRecorder = MediaRecorder(stream);
// mediaRecorder.ondataavailable = (e) =>{
//   data.push(e.data);
// }
// mediaRecorder.start();
// mediaRecorder.onstop = (e) =>{
// document.getElementById("screenVideo").src = URL.createObjectURL(
//   new Blob(data,{
//     type: data[0].type,
//   }) 
// )
// }
// }
// const recordScreen = () =>{
//   let btn = document.querySelector(".record-btn")

// btn.addEventListener("click", async function () {
//   let stream = await navigator.mediaDevices.getDisplayMedia({
//     video: true
//   })

//   //needed for better browser support
//   const mime = MediaRecorder.isTypeSupported("video/webm; codecs=vp9") 
//              ? "video/webm; codecs=vp9" 
//              : "video/webm"
//     let mediaRecorder = new MediaRecorder(stream, {
//         mimeType: mime
//     })

//     let chunks = []
//     mediaRecorder.addEventListener('dataavailable', function(e) {
//         chunks.push(e.data)
//     })

//     mediaRecorder.addEventListener('stop', function(){
//       let blob = new Blob(chunks, {
//           type: chunks[0].type
//       })
//       let url = URL.createObjectURL(blob)

//       let videon = document.querySelector(".videoScreen")
//       videon.srcObject = url

//       let a = document.createElement('a')
//       a.href = url
//       a.download = 'video.webm'
//       a.click()
//       window.alert("hello")
//   })

//     //we have to start the recorder manually
//     mediaRecorder.start()
// })
// }

//audio ke liye
var startA = function () {
  navigator.mediaDevices.getUserMedia({ audio: true })
  .then(stream => {
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();

    const audioChunks = [];
    mediaRecorder.addEventListener("dataavailable", event => {
      audioChunks.push(event.data);
    });

    mediaRecorder.addEventListener("stop", () => {
      const audioBlob = new Blob(audioChunks);
    });

    setTimeout(() => {
      mediaRecorder.stop();
    }, 9000);
  });
};


function capture() {
   
    var video = document.getElementById("video");
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
   let width = canvas.width;
   let height = canvas.height;
    context.drawImage(video, 0, 0, width, height);
   
    window.confirm("Are you sure you want to capture?");   

  
}

var save = function (el){
  var canvas = document.getElementById('canvas');
  
  document.getElementById("el").style.boxShadow = "0";
  var data = canvas.toDataURL('image/jpg');
  el.href=data;

}



var stop = function () {
  var stream = video.srcObject;
  var tracks = stream.getTracks();
  for (var i = 0; i < tracks.length; i++) {
    var track = tracks[i];
    track.stop();
  }
  navigator.mediaDevices.getUserMedia({ video: false });
  video.srcObject = null;
};
var start = function () {
  var video = document.getElementById("video"),
    vendorUrl = window.URL || window.webkitURL;
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        video.srcObject = stream;
      })
      .catch(function (error) {
        console.log("Something went wrong!");
      });
  }
};
$(function () {
  start();
});

