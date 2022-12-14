(() => {
  function onClick(e) {
    this.classList.toggle('open');
  }

  function onTransitionEnd(e) {
    if(e.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    }
  }

  const panels = document.querySelectorAll('.panel');
  panels.forEach(panel => {
    panel.addEventListener('click', onClick);
    panel.addEventListener('transitionend', onTransitionEnd);
  })
})()