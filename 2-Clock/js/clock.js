(() => {

  const secondsHand = document.querySelector('.seconds');
  const minutesHand = document.querySelector('.minutes');
  const hoursHand = document.querySelector('.hours');

  function getDegrees(time, type) {
    const getConversionRate = {
      seconds: 60,
      minutes: 60,
      hours: 12,
    };

    return ((Number(time) * 360) / getConversionRate[type]) + 90;
  }

  function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = getDegrees(seconds, 'seconds');
    secondsHand.style.transform = `rotate(${secondDegrees}deg)`;
    const minutes = now.getMinutes();
    const minutesDegrees = getDegrees(minutes, 'minutes');
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    const hours = now.getHours()
    const hoursDegrees = getDegrees(hours, 'hours');
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
  }

  setInterval(setDate, 1000);
}) ()