const container = document.querySelector(".container");
console.log(container);

function showTime() {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hours = checkTime(hours);

  container.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function checkTime(time) {
  if (time > 12) {
    time = time - 12;
  }
  if (time === 0) {
    time = 12;
  }
  return time;
}

function formatTime(time) {}
showTime();

setInterval(showTime, 1000);
