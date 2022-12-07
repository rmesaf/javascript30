(() => {

  function groove(e) {
    const pressedKey = document.querySelector(`.drum-kit__key[data-key="${e.keyCode}"]`)
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (sound) {
      console.log(pressedKey.classList);
      pressedKey.classList.add('playing');
      sound.currentTime = 0; // Restart audio in every key stroke
      sound.play();
    }
  }

  function togglePlaying(e) {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.drum-kit__key');
  keys.forEach(key => {
    key.addEventListener('transitionend', togglePlaying)
  });

  document.addEventListener('keypress', groove);
}) ();