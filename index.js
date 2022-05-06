import ruKeys from './ru.json' assert { type: "json" };

const body = document.querySelector('body');
function createKeyboard() {
  const area = document.createElement('input');
  area.type = 'textarea';
  area.style.rows = '100';
  area.style.overflow = 'hidden';
  area.classList.add('textarea');
  body.append(area);

  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  const secondLine = document.createElement('div');
  secondLine.classList.add('line');
  for (let i = 0; i < 14; i++) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.style.width = ruKeys[i].width;
    button.innerText = ruKeys[i].ru;
    secondLine.append(button);
  }
  keyboard.append(secondLine);
  const thirdLine = document.createElement('div');
  thirdLine.classList.add('line');
  for (let i = 14; i < 27; i++) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.style.width = ruKeys[i].width;
    button.innerText = ruKeys[i].ru;
    thirdLine.append(button);
  }
  keyboard.append(thirdLine);
  const span = document.createElement('span');
  span.classList.add('descript');
  span.innerHTML = 'MacOS system';
  body.append(keyboard);
  body.append(span);
}

createKeyboard();

document.addEventListener("keydown", function(event) {
    console.log(event.keyCode);
  })
