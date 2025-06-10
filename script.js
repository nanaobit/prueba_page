function reproducirVid(){
  const video = document.getElementById("mivideo");
  if (video.paused){
    video.play();
  }else{
    video.pause();
  }
}
