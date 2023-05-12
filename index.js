const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  return (seconds) => {
    const interval = setInterval(() => {
      if (seconds <= 0) {
        clearInterval(interval);
        timerEl.textContent = 0;
      } else {
        timerEl.textContent = seconds;
      }
      seconds -= 1;
    }, 1000);
  };
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
