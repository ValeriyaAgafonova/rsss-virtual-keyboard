import ruKeys from './ru.json' assert { type: "json" };

let langFlag = 'ru';
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
  const firstLine = document.createElement('div');
  firstLine.classList.add('line');
  for (let i = 0; i < 14; i++) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.style.width = ruKeys[i].width;
    button.dataset.dataId = ruKeys[i].keyCode;
    const shiftSymbol = document.createElement('span');
    if (langFlag == 'ru'){
        button.innerText = ruKeys[i].ru;
        shiftSymbol.innerHTML = ruKeys[i].rushift;
    }
   else{
    button.innerText = ruKeys[i].en;
    shiftSymbol.innerHTML = ruKeys[i].enshift;
   }
    shiftSymbol.classList.add('shift-symbol');
   
    button.append(shiftSymbol)
    firstLine.append(button);
  }
  keyboard.append(firstLine);
  const secondLine = document.createElement('div');
  secondLine.classList.add('line');
  for (let i = 14; i < 28; i++) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.style.width = ruKeys[i].width;
    if (langFlag == 'ru'){
        button.innerText = ruKeys[i].ru;
    }
  else{
    button.innerText = ruKeys[i].en;
  }
    secondLine.append(button);
  }
  keyboard.append(secondLine);
  const thirdLine = document.createElement('div');
  thirdLine.classList.add('line');
  for (let i = 28; i < 41; i++) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.style.width = ruKeys[i].width;
    if (langFlag == 'ru'){
        button.innerText = ruKeys[i].ru;
    }
  else{
    button.innerText = ruKeys[i].en;
  }
    thirdLine.append(button);
  }
  keyboard.append(thirdLine);
  const fourLine = document.createElement('div');
  fourLine.classList.add('line');
  for (let i = 41; i < 54; i++) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.style.width = ruKeys[i].width;
    if (langFlag == 'ru'){
        button.innerText = ruKeys[i].ru;
    }
  else{
    button.innerText = ruKeys[i].en;
  }
    fourLine.append(button);
  }
  keyboard.append(fourLine);

  const fiveLine = document.createElement('div');
  fiveLine.classList.add('line');
  for (let i = 54; i < 61; i++) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.style.width = ruKeys[i].width;
    if (langFlag == 'ru'){
        button.innerText = ruKeys[i].ru;
    }
  else{
    button.innerText = ruKeys[i].en;
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
  button.innerHTML = ruKeys[61].ru;
  arrows.append(button);
  const lastLine = document.createElement('div');
  lastLine.classList.add('last-line');
for (let i = 62; i < 65; i++){
    const button = document.createElement('button');
    button.classList.add('button');
    button.style.width = ruKeys[i].width;
    button.style.height = ruKeys[i].height;
    button.style.fontSize = ruKeys[i].font;
    button.innerHTML = ruKeys[i].ru;
    lastLine.append(button)
}
arrows.append(lastLine)
fiveLine.append(arrows)
  keyboard.append(fiveLine);
  const span = document.createElement('span');
  span.classList.add('descript');
  span.innerHTML = `MacOS system
  1. Cмена клавиатуры на маке меняется посредством короткого нажатия на capslock, долгое нажатие включает capslock, 
  соответственно, если вы проверяете на винде, то при нажатии shift alt должен подсветиться капслок и переключится на другой язык`;
  body.append(keyboard);
  body.append(span);
}

createKeyboard();
document.addEventListener("keydown", function(event) {
    console.log(typeof event.keyCode);
    console.log(this)
    if (event.keyCode == 20){
        if (langFlag == 'ru'){
            langFlag = 'en'
        }
       else{
           langFlag = 'ru'
       }
        body.innerHTML = ''
        createKeyboard();

    }
  })



