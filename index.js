import ruKeys from './ru.json';

const symbols = [];
let langFlag = 'ru';
const body = document.querySelector('body');
function createArea() {
  const area = document.createElement('textarea');
  area.style.rows = '100';
  area.style.overflow = 'auto';
  area.rows = '5';
  area.cols = '60';
  area.classList.add('textarea');
  body.append(area);
}

function createKeyboard(flag) {
  createArea();
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  const firstLine = document.createElement('div');
  firstLine.classList.add('line');
  for (let i = 0; i < 14; i += 1) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.style.width = ruKeys[i].width;
    button.dataset.dataId = ruKeys[i].keyCode;
    const shiftSymbol = document.createElement('span');
    if (flag === 'ru') {
      button.innerText = ruKeys[i].ru;
      button.value = ruKeys[i].ru;
      shiftSymbol.innerHTML = ruKeys[i].rushift;
    } else {
      button.innerText = ruKeys[i].en;
      shiftSymbol.innerHTML = ruKeys[i].enshift;
      button.value = ruKeys[i].en;
    }
    shiftSymbol.classList.add('shift-symbol');
    button.append(shiftSymbol);
    firstLine.append(button);
  }
  keyboard.append(firstLine);
  const secondLine = document.createElement('div');
  secondLine.classList.add('line');
  for (let i = 14; i < 28; i += 1) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.style.width = ruKeys[i].width;
    button.dataset.dataId = ruKeys[i].keyCode;
    if (flag === 'ru') {
      button.innerText = ruKeys[i].ru;
      button.value = ruKeys[i].ru;
    } else {
      button.innerText = ruKeys[i].en;
      button.value = ruKeys[i].en;
    }
    secondLine.append(button);
  }
  keyboard.append(secondLine);
  const thirdLine = document.createElement('div');
  thirdLine.classList.add('line');
  for (let i = 28; i < 41; i += 1) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.style.width = ruKeys[i].width;
    button.dataset.dataId = ruKeys[i].keyCode;
    if (flag === 'ru') {
      button.innerText = ruKeys[i].ru;
      button.value = ruKeys[i].ru;
    } else {
      button.innerText = ruKeys[i].en;
      button.value = ruKeys[i].en;
    }
    thirdLine.append(button);
  }
  keyboard.append(thirdLine);
  const fourLine = document.createElement('div');
  fourLine.classList.add('line');
  for (let i = 41; i < 54; i += 1) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.style.width = ruKeys[i].width;
    button.dataset.dataId = ruKeys[i].keyCode;
    if (flag === 'ru') {
      button.innerText = ruKeys[i].ru;
      button.value = ruKeys[i].ru;
    } else {
      button.innerText = ruKeys[i].en;
      button.value = ruKeys[i].en;
    }
    fourLine.append(button);
  }
  keyboard.append(fourLine);

  const fiveLine = document.createElement('div');
  fiveLine.classList.add('line');
  for (let i = 54; i < 61; i += 1) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.style.width = ruKeys[i].width;
    button.dataset.dataId = ruKeys[i].keyCode;
    if (flag === 'ru') {
      button.innerText = ruKeys[i].ru;
      button.value = ruKeys[i].ru;
    } else {
      button.innerText = ruKeys[i].en;
      button.value = ruKeys[i].en;
    }
    fiveLine.append(button);
  }
  const arrows = document.createElement('div');
  arrows.classList.add('arrows');
  const button = document.createElement('button');
  button.classList.add('button');
  button.style.width = ruKeys[61].width;
  button.style.height = ruKeys[61].height;
  button.style.fontSize = ruKeys[61].font;
  button.dataset.dataId = ruKeys[61].keyCode;
  button.value = ruKeys[61].ru;
  button.innerHTML = ruKeys[61].ru;
  arrows.append(button);
  const lastLine = document.createElement('div');
  lastLine.classList.add('last-line');
  for (let i = 62; i < 65; i += 1) {
    const button1 = document.createElement('button');
    button1.classList.add('button');
    button1.value = ruKeys[i].ru;
    button1.style.width = ruKeys[i].width;
    button1.style.height = ruKeys[i].height;
    button1.style.fontSize = ruKeys[i].font;
    button1.dataset.dataId = ruKeys[i].keyCode;
    button1.innerHTML = ruKeys[i].ru;
    lastLine.append(button1);
  }
  arrows.append(lastLine);
  fiveLine.append(arrows);
  keyboard.append(fiveLine);
  const container = document.createElement('div');
  container.classList.add('container');
  const span = document.createElement('span');
  span.classList.add('descript');
  span.innerHTML = `<pre>   MacOS system
  1. Генерация клавиатуры выполнена полностью посредством js, 
  body пустой и содержить в себе только script тег. +20б

  2. Cмена клавиатуры на маке меняется посредством короткого нажатия на capslock, долгое нажатие включает capslock, 
  соответственно, если вы проверяете на винде, то при нажатии shift alt должен подсветиться капслок и переключится на другой язык
  при перезагрузке страницы выбранный язык сохраняется и клавиатура соотвествует раскладке +15б

  3.Анимация кнопок на виртуальной клавиатуре при нажатии на физическую клавиатуру, 
  работает на всех клавишах кроме fn, потому что на нее нет ивента, я не придумала что с ней сделать, 
  поэтому она там просто есть:/  +10б

  4. features Es6 - использованы let и const, Стрелочные функции,модули, не использовала классы и как то не понадобился спред  и другие возможности es6 +10

  5.usage of ESLint: (использован, в ветке разработки он есть)+10

  </pre>`;
  container.append(span);
  body.append(keyboard);
  body.append(container);
}

createKeyboard(langFlag);

function keyboardKey(event) {
  const area = document.querySelector('textarea');
  if (event.key === 'CapsLock') {
    if (langFlag === 'ru') {
      langFlag = 'en';
    } else {
      langFlag = 'ru';
    }
    body.innerHTML = '';
    createKeyboard(langFlag);
  } else if (event.key === 'Enter') {
    symbols.push('                                                                        ');
    area.textContent = symbols.join('');
  } else if (event.key === 'Backspace') {
    symbols.pop();
    area.textContent = symbols.join('');
  } else if (event.key === 'Space') {
    symbols.push(' ');
    area.textContent = symbols.join('');
  } else if (event.key === 'Tab') {
    symbols.push('    ');
    area.textContent = symbols.join('');
  } else if (event.key === 'Ctrl' || event.key === 'Shift' || event.key === 'Alt' || event.key === 'Control' || event.key === 'Meta') {
    return;
  } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    symbols.push(button.textContent);
    area.textContent = symbols.join('');
  } else {
    console.log('else');
    symbols.push(event.key);
    area.textContent = symbols.join('');
  }
}
document.addEventListener('keydown', keyboardKey);

function setLocalStorage() {
  localStorage.setItem('keyboard-language', langFlag);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('keyboard-language')) {
    body.innerHTML = '';
    langFlag = localStorage.getItem('keyboard-language');
    createKeyboard(langFlag);
  }
}
window.addEventListener('load', getLocalStorage);

function virtualClick(event) {
  console.log(event.target);
  const area = document.querySelector('textarea');
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    if (button === event.target && button.textContent === 'capslock') {
      console.log('change');
      if (langFlag === 'ru') {
        langFlag = 'en';
      } else {
        langFlag = 'ru';
      }
      body.innerHTML = '';
      createKeyboard(langFlag);
    } else if (button === event.target && button.textContent === 'backspace') {
      symbols.pop();
      area.textContent = symbols.join('');
    } else if (button === event.target && button.textContent === 'SPACE') {
      symbols.push(' ');
      area.textContent = symbols.join('');
    } else if ((button.dataset.dataId === 'ArrowUp' || button.dataset.dataId === 'ArrowDown' || button.dataset.dataId === 'ArrowLeft' || button.dataset.dataId === 'ArrowRight') && button === event.target) {
      symbols.push(button.textContent);
      area.textContent = symbols.join('');
    } else if (button === event.target && button.value === 'tab') {
      symbols.push('    ');
      area.textContent = symbols.join('');
    } else if (button.value === 'shift' || button.value === 'command' || button.value === 'option' || button.value === 'ctrl') {
      return
    } else if (button.value === 'enter' && button === event.target) {
      symbols.push('                                                                        ');
      area.textContent = symbols.join('');
    } else if (button === event.target) {
      symbols.push(button.value);
      area.textContent = symbols.join('');
    }
  });
}
document.addEventListener('click', virtualClick);

function addAnimate(event) {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    if (event.code === button.dataset.dataId) {
      button.classList.add('pressed');
    }
  });
}
document.addEventListener('keydown', addAnimate);

function removeAnimate(event) {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    if (event.code === button.dataset.dataId) {
      button.classList.remove('pressed');
    }
  });
}
document.addEventListener('keyup', removeAnimate);
