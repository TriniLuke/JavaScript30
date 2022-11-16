function playSound(e) { 
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    if(!audio) return; //stop the function from running
    audio.currentTime = 0; //rewind a sound
    audio.play(); //play the sound method
    key.classList.add('playing');
    
  }
  
  function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //remove the transition from each key
  window.addEventListener('keydown', playSound);