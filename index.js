import ruKeys from './ru.json' assert { type: "json" };
let symbols = []
let langFlag = 'ru';
const body = document.querySelector('body');
function createKeyboard(langFlag) {
  const area = document.createElement('textarea');
  area.style.rows = '100';
  area.style.overflow = 'auto';
  area.autofocus = 'autofocus'
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
        button.value = ruKeys[i].ru;
        shiftSymbol.innerHTML = ruKeys[i].rushift;
       
    }
   else{
    button.innerText = ruKeys[i].en;
    shiftSymbol.innerHTML = ruKeys[i].enshift;
    button.value = ruKeys[i].en;
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
    
    button.dataset.dataId = ruKeys[i].keyCode;
    if (langFlag == 'ru'){
        button.innerText = ruKeys[i].ru;
        button.value = ruKeys[i].ru
    }
  else{
    button.innerText = ruKeys[i].en;
    button.value = ruKeys[i].en
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
    button.dataset.dataId = ruKeys[i].keyCode;
    
    if (langFlag == 'ru'){
        button.innerText = ruKeys[i].ru;
        button.value = ruKeys[i].ru
    }
  else{
    button.innerText = ruKeys[i].en;
    button.value = ruKeys[i].en
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
    button.dataset.dataId = ruKeys[i].keyCode;
    
    if (langFlag == 'ru'){
        button.innerText = ruKeys[i].ru;
        button.value = ruKeys[i].ru
    }
  else{
    button.innerText = ruKeys[i].en;
    button.value = ruKeys[i].en
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
    button.dataset.dataId = ruKeys[i].keyCode;
   
    if (langFlag == 'ru'){
        button.innerText = ruKeys[i].ru;
        button.value = ruKeys[i].ru
    }
  else{
    button.innerText = ruKeys[i].en;
    button.value = ruKeys[i].en
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
  button.value = ruKeys[61].ru
  button.innerHTML = ruKeys[61].ru;
  arrows.append(button);
  const lastLine = document.createElement('div');
  lastLine.classList.add('last-line');
for (let i = 62; i < 65; i++){
    const button = document.createElement('button');
    button.classList.add('button');
    button.value = ruKeys[i].ru;
    button.style.width = ruKeys[i].width;
    button.style.height = ruKeys[i].height;
    button.style.fontSize = ruKeys[i].font;
    button.dataset.dataId = ruKeys[i].keyCode;
    button.innerHTML = ruKeys[i].ru;
    lastLine.append(button)
}
arrows.append(lastLine)
fiveLine.append(arrows)
  keyboard.append(fiveLine);
  const container = document.createElement('div')
  container.classList.add('container')
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

  4.

  </pre>`;
  container.append(span)
  body.append(keyboard);
  body.append(container);
}

createKeyboard(langFlag);
document.addEventListener("keydown", function(event) {
    const area = document.querySelector('textarea')
    console.log(event);
    console.log(this)
    if (event.key == 'CapsLock'){
        if (langFlag == 'ru'){
            langFlag = 'en'
        }
       else{
           langFlag = 'ru'
       }
        body.innerHTML = ''
        createKeyboard(langFlag);

    }
    else if(event.key == 'Backspace'){
        symbols.pop()
        area.textContent = symbols.join('')
    }
    else if (event.key == 'Space'){
        symbols.push(' ')
        area.textContent = symbols.join('')
    }
    else{
       
        symbols.push(event.key)
        area.textContent = symbols.join('')
    }
  })


  function setLocalStorage(){

            localStorage.setItem(`keyboard-language`, langFlag)
        
         
     
 }
 
 window.addEventListener('beforeunload', setLocalStorage)
 
 
 function getLocalStorage(){
    
             if (localStorage.getItem(`keyboard-language`)){
                body.innerHTML = ''
                langFlag = localStorage.getItem(`keyboard-language`)
                createKeyboard(langFlag);
         }
     
     }
     window.addEventListener('load', getLocalStorage)


document.addEventListener('click', function(event){

console.log(event.target)
const area = document.querySelector('textarea')
const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    if (button == event.target && button.textContent == 'capslock'){
        console.log('change')
        if (langFlag == 'ru'){
            langFlag = 'en'
        }
       else{
           langFlag = 'ru'
       }
        body.innerHTML = ''
        createKeyboard(langFlag);
    }
    else if(button == event.target && button.textContent == 'backspace'){
        symbols.pop()
        area.textContent = symbols.join('')
    }
    else if(button == event.target && button.textContent == 'SPACE'){
        symbols.push(' ')
        area.textContent = symbols.join('')
    }
    else if((button.dataset.dataId == 'ArrowUp' || button.dataset.dataId == 'ArrowDown' || button.dataset.dataId == 'ArrowLeft' || button.dataset.dataId == 'ArrowRight') && button == event.target){
symbols.push(button.textContent)
area.textContent = symbols.join('')
    }
    else if (button == event.target){
        console.log('add')
        symbols.push(button.value)
        console.log(symbols)
    area.textContent = symbols.join('')
    
    }
    
})
})

document.addEventListener('keydown', addAnimate)

function addAnimate(){
    console.log(event)
    const area = document.querySelector('textarea');
const buttons = document.querySelectorAll('button');
buttons.forEach(button =>{
  
    if(event.code == button.dataset.dataId){
    button.classList.add('pressed')
    }
})
}
 
document.addEventListener('keyup', removeAnimate)

function removeAnimate(){
    const area = document.querySelector('textarea');
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button =>{
       
        if(event.code == button.dataset.dataId){
        button.classList.remove('pressed')
        }
    })
}