const selectHour = document.querySelector('.select-hour'),
  selectMinute = document.querySelector('.select-minute'),
  selectSecond = document.querySelector('.select-second'),
  startButton = document.querySelector('.start'),
  pauseButton = document.querySelector('.pause'),
  stopButton = document.querySelector('.stop');

let inputHour = document.querySelector('.input-hour'),
  inputMinute = document.querySelector('.input-minute'),
  inputSecond = document.querySelector('.input-second'),
  isStarted = false,
  interval;

selectSecond.addEventListener('change', function () {
  if (this.value < 10) inputSecond.value = '0' + this.value;
  else inputSecond.value = this.value;
});
selectMinute.addEventListener('change', function () {
  if (this.value < 10) inputMinute.value = '0' + this.value;
  else inputMinute.value = this.value;
});
selectHour.addEventListener('change', function () {
  if (this.value < 10) inputHour.value = '0' + this.value;
  else inputHour.value = this.value;
});

function startTimer() {
  if (!isStarted && (inputHour.value > 0 || inputMinute.value > 0 || inputSecond.value > 0)) {
    isStarted = true;
    interval = setInterval(() => {
      inputSecond.value--;
      if (inputHour.value == 0 && inputMinute.value == 0 && inputSecond.value == 0)
        clearInterval(interval);

      if (inputSecond.value < 0) {
        inputMinute.value--;

        if (inputMinute.value < 0) {
          inputHour.value--;
          if (inputHour.value < 10) inputHour.value = '0' + inputHour.value;
          inputMinute.value = 59;
        }
        if (inputMinute.value < 10) inputMinute.value = '0' + inputMinute.value;
        inputSecond.value = 59;
      }
      if (inputSecond.value < 10) inputSecond.value = '0' + inputSecond.value;
    }, 1000);
  }
}

function pauseTimer() {
  if (isStarted) {
    isStarted = false;
    clearInterval(interval);
  }
}

function stopTimer() {
  isStarted = false;
  inputHour.value = '00';
  inputMinute.value = '00';
  inputSecond.value = '00';
  selectHour.value = 0;
  selectMinute.value = 0;
  selectSecond.value = 0;
  clearInterval(interval);
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
stopButton.addEventListener('click', stopTimer);
