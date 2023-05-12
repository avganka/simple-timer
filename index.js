const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  return (seconds) => {
    const interval = setInterval(() => {
      if (seconds <= 0) {
        clearInterval(interval);
        timerEl.textContent = formatTime(0);
      } else {
        timerEl.textContent = formatTime(seconds);
      }
      seconds -= 1;
    }, 1000);
  };
};

// Функия для форматирования времени в формат hh:mm:ss
const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${addZeroToNumber(hours)}:${addZeroToNumber(minutes)}:${addZeroToNumber(
    remainingSeconds
  )}`;
};

// Вспомогательная функция для добавления 0 к числам, если они меньше 10
const addZeroToNumber = (number) => {
  return number < 10 ? '0' + number : number;
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (evt) => {
  evt.target.value = evt.target.value.replace(/[^0-9]/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
