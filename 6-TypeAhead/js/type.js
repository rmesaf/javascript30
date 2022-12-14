(() => {
  const searchBox = document.querySelector('.search');
  const suggestions = document.querySelector('.suggestions');
  const cities = [];
  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

  fetch(endpoint).then(response => response.json()).then(data => cities.push(...data));

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  
  function filterData(text) {
    const regex = new RegExp(text, 'gi');
    const filtered = cities.filter(place =>
      place.city.match(regex) || place.state.match(regex)
    );
    return filtered;
  }

  function renderInfo(e) {
    const data = filterData(this.value);
    const regex = new RegExp(this.value, 'gi');
    const content = data?.map(item => {
      const city = item.city.replace(regex, `<span class="hl">${this.value}</span>`);
      const state = item.state.replace(regex, `<span class="hl">${this.value}</span>`);
      const population = numberWithCommas(item.population)
      return (
        `<li>
          <span class="name">${city}, ${state}</span>
          <span class="population">${population}</span>
        </li>`
      );
    }).join('');
    suggestions.innerHTML = content;
  }

  searchBox.addEventListener('change', renderInfo);
  searchBox.addEventListener('keyup', renderInfo);
})();