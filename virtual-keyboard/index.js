// eslint-disable-next-line no-unused-vars
const keys = [
  {
    rushift: '<',
    enshift: '±',
    ru: '>',
    en: '§',
    keyCode: 'Backquote',
    width: '50px',
  },
  {
    rushift: '!',
    ru: '1',
    enshift: '!',
    en: '1',
    keyCode: 'Digit1',
    width: '50px',
  },
  {
    rushift: '"',
    ru: '2',
    enshift: '@',
    en: '2',
    keyCode: 'Digit2',
    width: '50px',
  },
  {
    rushift: '№',
    ru: '3',
    enshift: '#',
    en: '3',
    keyCode: 'Digit3',
    width: '50px',
  },
  {
    rushift: '%',
    ru: '4',
    enshift: '$',
    en: '4',
    keyCode: 'Digit4',
    width: '50px',
  },
  {
    rushift: ':',
    ru: '5',
    enshift: '%',
    en: '5',
    keyCode: 'Digit5',
    width: '50px',
  },
  {
    rushift: ',',
    ru: '6',
    enshift: '^',
    en: '6',
    keyCode: 'Digit6',
    width: '50px',
  },
  {
    rushift: '.',
    ru: '7',
    enshift: '&',
    en: '7',
    keyCode: 'Digit7',
    width: '50px',
  },
  {
    rushift: ';',
    ru: '8',
    enshift: '*',
    en: '8',
    keyCode: 'Digit8',
    width: '50px',
  },
  {
    rushift: '(',
    ru: '9',
    enshift: '(',
    en: '9',
    keyCode: 'Digit9',
    width: '50px',
  },
  {
    rushift: ')',
    ru: '0',
    enshift: ')',
    en: '0',
    keyCode: 'Digit0',
    width: '50px',
  },
  {
    rushift: '_',
    ru: '-',
    enshift: '_',
    en: '-',
    keyCode: 'Minus',
    width: '50px',
  },
  {
    rushift: '+',
    ru: '=',
    enshift: '+',
    en: '=',
    keyCode: 'Equal',
    width: '50px',
  },
  {
    rushift: null,
    ru: 'backspace',
    enshift: null,
    en: 'backspace',
    keyCode: 'Backspace',
    width: '100px',
  },
  {
    rushift: null,
    ru: 'tab',
    enshift: null,
    en: 'tab',
    keyCode: 'Tab',
    width: '70px',
  },
  {
    rushift: 'Й',
    ru: 'й',
    enshift: 'Q',
    en: 'q',
    keyCode: 'KeyQ',
    width: '50px',
  },
  {
    rushift: 'Ц',
    ru: 'ц',
    enshift: 'W',
    en: 'w',
    keyCode: 'KeyW',
    width: '50px',
  },
  {
    rushift: 'У',
    ru: 'у',
    enshift: 'E',
    en: 'e',
    keyCode: 'KeyE',
    width: '50px',
  },
  {
    rushift: 'К',
    ru: 'к',
    enshift: 'R',
    en: 'r',
    keyCode: 'KeyR',
    width: '50px',
  },
  {
    rushift: 'Е',
    ru: 'е',
    enshift: 'T',
    en: 't',
    keyCode: 'KeyT',
    width: '50px',
  },
  {
    rushift: 'Н',
    ru: 'н',
    enshift: 'Y',
    en: 'y',
    keyCode: 'KeyY',
    width: '50px',
  },
  {
    rushift: 'Г',
    ru: 'г',
    enshift: 'U',
    en: 'u',
    keyCode: 'KeyU',
    width: '50px',
  },
  {
    rushift: 'Ш',
    ru: 'ш',
    enshift: 'I',
    en: 'i',
    keyCode: 'KeyI',
    width: '50px',
  },
  {
    rushift: 'Щ',
    ru: 'щ',
    enshift: 'O',
    en: 'o',
    keyCode: 'KeyO',
    width: '50px',
  },
  {
    rushift: 'З',
    ru: 'з',
    enshift: 'P',
    en: 'p',
    keyCode: 'KeyP',
    width: '50px',
  },
  {
    rushift: 'Х',
    ru: 'х',
    enshift: '{',
    en: '[',
    keyCode: 'BracketLeft',
    width: '50px',
  },
  {
    rushift: 'Ъ',
    ru: 'ъ',
    enshift: '}',
    en: ']',
    keyCode: 'BracketRight',
    width: '50px',
  },
  {
    rushift: null,
    ru: 'enter',
    enshift: null,
    en: 'enter',
    keyCode: 'Enter',
    width: '100px',
  },
  {
    rushift: null,
    ru: 'capslock',
    enshift: null,
    en: 'capslock',
    keyCode: 'CapsLock',
    width: '120px',
  },
  {
    rushift: 'Ф',
    ru: 'ф',
    enshift: 'A',
    en: 'a',
    keyCode: 'KeyA',
    width: '50px',
  },
  {
    rushift: 'Ы',
    ru: 'ы',
    enshift: 'S',
    en: 's',
    keyCode: 'KeyS',
    width: '50px',
  },
  {
    rushift: 'В',
    ru: 'в',
    enshift: 'D',
    en: 'd',
    keyCode: 'KeyD',
    width: '50px',
  },
  {
    rushift: 'А',
    ru: 'а',
    enshift: 'F',
    en: 'f',
    keyCode: 'KeyF',
    width: '50px',
  },
  {
    rushift: 'П',
    ru: 'п',
    enshift: 'G',
    en: 'g',
    keyCode: 'KeyG',
    width: '50px',
  },
  {
    rushift: 'Р',
    ru: 'р',
    enshift: 'H',
    en: 'h',
    keyCode: 'KeyH',
    width: '50px',
  },
  {
    rushift: 'О',
    ru: 'о',
    enshift: 'J',
    en: 'j',
    keyCode: 'KeyJ',
    width: '50px',
  },
  {
    rushift: 'Л',
    ru: 'л',
    enshift: 'K',
    en: 'k',
    keyCode: 'KeyK',
    width: '50px',
  },
  {
    rushift: 'Д',
    ru: 'д',
    enshift: 'L',
    en: 'l',
    keyCode: 'KeyL',
    width: '50px',
  },
  {
    rushift: 'Ж',
    ru: 'ж',
    enshift: ':',
    en: ';',
    keyCode: 'Semicolon',
    width: '50px',
  },
  {
    rushift: 'Э',
    ru: 'э',
    enshift: '"',
    en: "'",
    keyCode: 'Quote',
    width: '50px',
  },
  {
    rushift: 'Ё',
    ru: 'ё',
    enshift: '|',
    en: '\\',
    keyCode: 'Backslash',
    width: '50px',
  },
  {
    rushift: null,
    ru: 'shift',
    enshift: null,
    en: 'shift',
    keyCode: 'ShiftLeft',
    width: '70px',
  },
  {
    rushift: '[',
    ru: ']',
    enshift: '~',
    en: '`',
    keyCode: 'IntlBackslash',
    width: '50px',
  },
  {
    rushift: 'Я',
    ru: 'я',
    enshift: 'Z',
    en: 'z',
    keyCode: 'KeyZ',
    width: '50px',
  },
  {
    rushift: 'Ч',
    ru: 'ч',
    enshift: 'X',
    en: 'x',
    keyCode: 'KeyX',
    width: '50px',
  },
  {
    rushift: 'С',
    ru: 'с',
    enshift: 'C',
    en: 'c',
    keyCode: 'KeyC',
    width: '50px',
  },
  {
    rushift: 'М',
    ru: 'м',
    enshift: 'V',
    en: 'v',
    keyCode: 'KeyV',
    width: '50px',
  },
  {
    rushift: 'И',
    ru: 'и',
    enshift: 'B',
    en: 'b',
    keyCode: 'KeyB',
    width: '50px',
  },
  {
    rushift: 'Т',
    ru: 'т',
    enshift: 'N',
    en: 'n',
    keyCode: 'KeyN',
    width: '50px',
  },
  {
    rushift: 'Ь',
    ru: 'ь',
    enshift: 'M',
    en: 'm',
    keyCode: 'KeyM',
    width: '50px',
  },
  {
    rushift: 'Б',
    ru: 'б',
    enshift: '<',
    en: ',',
    keyCode: 'Comma',
    width: '50px',
  },
  {
    rushift: 'Ю',
    ru: 'ю',
    enshift: '>',
    en: '.',
    keyCode: 'Period',
    width: '50px',
  },
  {
    rushift: '?',
    ru: '/',
    enshift: '?',
    en: '/',
    keyCode: 'Slash',
    width: '100px',
  },
  {
    rushift: null,
    ru: 'shift',
    enshift: null,
    en: 'shift',
    keyCode: 'ShiftRight',
    width: '120px',
  },
  {
    rushift: null,
    ru: 'fn',
    enshift: null,
    en: 'fn',
    keyCode: '1000',
    width: '50px',
  },
  {
    rushift: null,
    ru: 'ctrl',
    enshift: null,
    en: 'ctrl',
    keyCode: 'ControlLeft',
    width: '50px',
  },
  {
    rushift: null,
    ru: 'option',
    enshift: null,
    en: 'option',
    keyCode: 'AltLeft',
    width: '80px',
  },
  {
    rushift: null,
    ru: 'command',
    enshift: null,
    en: 'command',
    keyCode: 'MetaLeft',
    width: '90px',
  },
  {
    rushift: null,
    ru: 'SPACE',
    enshift: null,
    en: 'SPACE',
    keyCode: 'Space',
    width: '200px',
  },
  {
    rushift: null,
    ru: 'command',
    enshift: null,
    en: 'command',
    keyCode: 'MetaRight',
    width: '90px',
  },
  {
    rushift: null,
    ru: 'option',
    enshift: null,
    en: 'option',
    keyCode: 'AltRight',
    width: '80px',
  },
  {
    rushift: null,
    ru: '&#x25b2;',
    enshift: null,
    en: '&#x25b2;',
    keyCode: 'ArrowUp',
    width: '50px',
    height: '20px',
    font: '10px',
  },
  {
    rushift: null,
    ru: '&#x25c0;',
    enshift: null,
    en: '&#x25c0;',
    keyCode: 'ArrowLeft',
    width: '50px',
    height: '20px',
    font: '10px',
  },
  {
    rushift: null,
    ru: '&#x25bc;',
    enshift: null,
    en: '&#x25bc;',
    keyCode: 'ArrowDown',
    width: '50px',
    height: '20px',
    font: '10px',
  },
  {
    rushift: null,
    ru: '&#x25ba;',
    enshift: null,
    en: '&#x25ba;',
    keyCode: 'ArrowRight',
    width: '50px',
    height: '20px',
    font: '10px',
  },
];

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
    button.style.width = keys[i].width;
    button.dataset.dataId = keys[i].keyCode;
    const shiftSymbol = document.createElement('span');
    if (flag === 'ru') {
      button.innerText = keys[i].ru;
      button.value = keys[i].ru;
      shiftSymbol.innerHTML = keys[i].rushift;
    } else {
      button.innerText = keys[i].en;
      shiftSymbol.innerHTML = keys[i].enshift;
      button.value = keys[i].en;
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
    button.style.width = keys[i].width;
    button.dataset.dataId = keys[i].keyCode;
    if (flag === 'ru') {
      button.innerText = keys[i].ru;
      button.value = keys[i].ru;
    } else {
      button.innerText = keys[i].en;
      button.value = keys[i].en;
    }
    secondLine.append(button);
  }
  keyboard.append(secondLine);
  const thirdLine = document.createElement('div');
  thirdLine.classList.add('line');
  for (let i = 28; i < 41; i += 1) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.style.width = keys[i].width;
    button.dataset.dataId = keys[i].keyCode;
    if (flag === 'ru') {
      button.innerText = keys[i].ru;
      button.value = keys[i].ru;
    } else {
      button.innerText = keys[i].en;
      button.value = keys[i].en;
    }
    thirdLine.append(button);
  }
  keyboard.append(thirdLine);
  const fourLine = document.createElement('div');
  fourLine.classList.add('line');
  for (let i = 41; i < 54; i += 1) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.style.width = keys[i].width;
    button.dataset.dataId = keys[i].keyCode;
    if (flag === 'ru') {
      button.innerText = keys[i].ru;
      button.value = keys[i].ru;
    } else {
      button.innerText = keys[i].en;
      button.value = keys[i].en;
    }
    fourLine.append(button);
  }
  keyboard.append(fourLine);

  const fiveLine = document.createElement('div');
  fiveLine.classList.add('line');
  for (let i = 54; i < 61; i += 1) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.style.width = keys[i].width;
    button.dataset.dataId = keys[i].keyCode;
    if (flag === 'ru') {
      button.innerText = keys[i].ru;
      button.value = keys[i].ru;
    } else {
      button.innerText = keys[i].en;
      button.value = keys[i].en;
    }
    fiveLine.append(button);
  }
  const arrows = document.createElement('div');
  arrows.classList.add('arrows');
  const button = document.createElement('button');
  button.classList.add('button');
  button.style.width = keys[61].width;
  button.style.height = keys[61].height;
  button.style.fontSize = keys[61].font;
  button.dataset.dataId = keys[61].keyCode;
  button.value = keys[61].ru;
  button.innerHTML = keys[61].ru;
  arrows.append(button);
  const lastLine = document.createElement('div');
  lastLine.classList.add('last-line');
  for (let i = 62; i < 65; i += 1) {
    const button1 = document.createElement('button');
    button1.classList.add('button');
    button1.value = keys[i].ru;
    button1.style.width = keys[i].width;
    button1.style.height = keys[i].height;
    button1.style.fontSize = keys[i].font;
    button1.dataset.dataId = keys[i].keyCode;
    button1.innerHTML = keys[i].ru;
    lastLine.append(button1);
  }
  arrows.append(lastLine);
  fiveLine.append(arrows);
  keyboard.append(fiveLine);
  const container = document.createElement('div');
  container.classList.add('container');
  const span = document.createElement('span');
  span.classList.add('descript');
  span.innerHTML = `<pre>   MACOS SYSTEM, смена языка на Capslock
  
   общая оценка 80/110

  1. Генерация клавиатуры выполнена полностью посредством js, 
  body пустой и содержить в себе только script тег. +20б

  2. Cмена клавиатуры на маке меняется посредством короткого нажатия на capslock,
  не сделала нажатие обычных для винды клавиш для смены языка
  при перезагрузке страницы выбранный язык сохраняется и клавиатура соотвествует раскладке +10б

  3.Анимация  и выделение кнопок на виртуальной клавиатуре при нажатии на физическую клавиатуру, 
  работает на всех клавишах кроме fn, потому что на нее нет ивента, я не придумала что с ней сделать, 
  поэтому она там просто есть:/ не уверена про два пункта (подсветка и анимация)  всего за эти два пункта дается 25 баллов, +15б

  4. features Es6 - использованы let и const, Стрелочные функции,модули, не использовала классы и как то не понадобился спред  и другие возможности es6 +10

  5.usage of ESLint: (использован, в ветке разработки он есть)+10

  6. в поле ввода появляются символы при нажатии на виртуальную и обычную клавиатуру, но не работают нажатия на несколько клавиш, не работаую символы стрелок при нажатии на физическую клавиатуру +5б

  7.Требования к репозиторию выполнены + 10б

  8. ошибки вроде все убрала, все должно работать

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
    area.textContent = symbols.join('');
  } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    symbols.push(event.key);
    area.textContent = symbols.join('');
  } else {
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
      area.textContent = symbols.join('');
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
