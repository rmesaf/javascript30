(() => {

  const secondsHand = document.querySelector('.seconds');
  const minutesHand = document.querySelector('.minutes');
  const hoursHand = document.querySelector('.hours');
  const secondsDigital = document.querySelector('.digital-seconds');
  const minutesDigital = document.querySelector('.digital-minutes');
  const hoursDigital = document.querySelector('.digital-hours');

  function getDegrees(time, type) {
    const getConversionRate = {
      seconds: 60,
      minutes: 60,
      hours: 12,
    };

    return ((Number(time) * 360) / getConversionRate[type]) + 90;
  }

  function setAnalog(hours, minutes, seconds) {
    const secondDegrees = getDegrees(seconds, 'seconds');
    secondsHand.style.transform = `rotate(${secondDegrees}deg)`;
    const minutesDegrees = getDegrees(minutes, 'minutes');
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    const hoursDegrees = getDegrees(hours, 'hours');
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
  }

  function setDigital(hours, minutes, seconds) {
    secondsDigital.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    minutesDigital.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    hoursDigital.innerHTML = hours < 10 ? `0${hours}` : hours;
  }

  function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    setAnalog(hours, minutes, seconds);
    setDigital(hours, minutes, seconds);
  }

  setInterval(setDate, 1000);
}) ()