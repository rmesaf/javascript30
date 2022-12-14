(()=> {
  const inputs = document.querySelectorAll(".css-variables__form input");
  function onChange (e) {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
  }
  inputs?.forEach(input => input.addEventListener('change', onChange))
  inputs?.forEach(input => input.addEventListener('mousemove', onChange))
})()