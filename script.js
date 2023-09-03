var audio = document.createElement('audio');
audio.setAttribute('src','sound.mp3');
audio.loop=true;
audio.play();

 // in the js code unmute the audio once the event happened
 // document.getElementById('notification').muted = false;
 // document.getElementById('notification').play();