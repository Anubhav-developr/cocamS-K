
function capture() {
   
    var video = document.getElementById("video")
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
   let width = canvas.width;
   let height = canvas.height;
    context.drawImage(video, 0, 0, width, height);
    var data = canvas.toDataURL('image/png');
    window.confirm("Are you sure you want to capture?");   

  
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
