import sounds from './sounds.js';

let cellsQuantity = 100;
let minesQuantity = 10;
let cellsOpened = 0;
let movesQuantity = 0;
let flagUsed = 0;
let arrMinesweeper = [];
let minesArr = [];
let interval;
let isPlay = 'true';
let whichTheme = 'light';
let cellsPerRow = 'ten';


 

//таймер
let seconds = 0;


function setLocalStorage(bodyInput, cellsOpened, movesQuantity, flagUsed, arrMinesweeper,
  minesArr, isPlay, whichTheme, cellsPerRow, seconds, cellsQuantity, minesQuantity) {
      // console.log('body Input', bodyInput)
      let data = [cellsOpened, movesQuantity, flagUsed, isPlay, whichTheme, cellsPerRow, seconds, cellsQuantity, minesQuantity]
    localStorage.setItem('minesweeperData', data);
    localStorage.setItem('htmlPage', bodyInput);
    localStorage.setItem('arrMinesweeper', arrMinesweeper);
    localStorage.setItem('minesArr', minesArr);

}


function getLocalStorage() {
  if(localStorage.getItem('htmlPage')) {
    let contentToInsert = localStorage.getItem('htmlPage');
    while(document.body.firstChild){
      document.body.removeChild(document.body.firstChild);
    }   
    document.body.innerHTML = contentToInsert;
    
    let data = localStorage.getItem('minesweeperData').split(',');
    cellsOpened = Number(data[0]);
    movesQuantity = Number(data[1]);
    flagUsed = Number(data[2]);
    isPlay = data[3];
    whichTheme = data[4];
    cellsPerRow = data[5];
    seconds = Number(data[6]);
    cellsQuantity = Number(data[7]);
    minesQuantity = Number(data[8]);

    minesArr = localStorage.getItem('minesArr').split(',');
    for( let i = 0; i<minesArr.length; i++){
      minesArr[i] = Number(minesArr[i]);
    }

    arrMinesweeper = localStorage.getItem('arrMinesweeper').split(',');

      createStartListenersFirstClick();
      createStartListenersAddition();
  } else {
    createLayout(minesQuantity);
    createMinesweeper(cellsQuantity, whichTheme);
    createStartListenersFirstClick();
    createStartListenersAddition();
  }
  interval = setInterval(setTime, 1000);
}

    
function setTime (){
  let info = document.querySelectorAll('.info')
  seconds++;

  info[3].innerHTML = `Game duration: ${seconds}s`
}



function playAudio(eventSound){
  const audio = new Audio();
  if(isPlay === 'true'){
    if(eventSound === 'mine'){
      audio.src = sounds[2].src;
      audio.currentTime = 0;
      audio.play();
    }
    if(eventSound === 'flag'){
      audio.src = sounds[1].src;
      audio.currentTime = 0;
      audio.play();
    }
    if(eventSound === 'click'){
      audio.src = sounds[0].src;
      audio.currentTime = 0;
      audio.play();
    }
    if(eventSound === 'win'){
      audio.src = sounds[3].src;
      audio.currentTime = 0;
      audio.play();
    }
  }
}

function changeTheme(){
  let container = document.querySelector(`.container_${whichTheme}`),
      minesweeper = document.querySelector(`.minesweeper_${whichTheme}`),
      upper_section = document.querySelector(`.upper-section_${whichTheme}`),
      emoji = document.querySelector(`.emoji_${whichTheme}`),
      lower_section = document.querySelector(`.lower-section_${whichTheme}`),
      cells = document.querySelectorAll(`.cell_${whichTheme}`),
      cells_closed = document.querySelectorAll(`.cell_closed_${whichTheme}`);

  container.classList.remove(`container_${whichTheme}`),
  minesweeper.classList.remove(`minesweeper_${whichTheme}`),
  upper_section.classList.remove(`upper-section_${whichTheme}`),
  emoji.classList.remove(`emoji_${whichTheme}`),
  lower_section.classList.remove(`lower-section_${whichTheme}`),
  cells.forEach((cell) => {
    cell.classList.remove(`cell_${whichTheme}`)
  }),
  cells_closed.forEach((cell) => {
    cell.classList.remove(`cell_closed_${whichTheme}`)
  });

  if (whichTheme === 'light'){
    whichTheme = 'dark'
  } else {
    whichTheme = 'light'
  }
  
  container.classList.add(`container_${whichTheme}`),
  minesweeper.classList.add(`minesweeper_${whichTheme}`),
  upper_section.classList.add(`upper-section_${whichTheme}`),
  emoji.classList.add(`emoji_${whichTheme}`),
  lower_section.classList.add(`lower-section_${whichTheme}`),
  cells.forEach((cell) => {
    cell.classList.add(`cell_${whichTheme}`)
  }),
  cells_closed.forEach((cell) => {
    cell.classList.add(`cell_closed_${whichTheme}`)
  });

}

function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}



function createMinesweeperArr (cells, mines, pressedCell){
  for (let i = 0; i<cells; i++) {
    arrMinesweeper[i] = '0';
  }

  for (let i = 0; i<mines; i++) {

    let mineCell = randomInteger(0, (cellsQuantity-1))
    
      while (pressedCell === mineCell){
        //console.log('test2', mineCell, pressedCell)
        mineCell = randomInteger(0, (cellsQuantity-1))
      }
  
    //let mineCell;
    // function createMineCells (){
    //   mineCell = randomInteger(0, (cellsQuantity-1))
    //   if (pressedCell === mineCell){
    //     createMineCells();
    //   }
    // }
    // createMineCells ()
    if (minesArr.includes(mineCell)){
      i--;
    } else {
      arrMinesweeper[mineCell] = 'mine';
      minesArr.push(mineCell);
    }   
  }
  // console.log(minesArr)

  // заменить на определение массивов исходя из размера поля
  let arrTopLine,
      arrLeftLine,
      arrRightLine,
      arrBottomLine,
      rightTop,
      leftBottom,
      rightBottom,
      step

  if (cells === 100){
    arrTopLine = [1,2,3,4,5,6,7,8];
    arrLeftLine = [10, 20, 30,40,50,60,70,80];
    arrRightLine = [19,29,39,49,59,69,79,89];
    arrBottomLine = [91,92,93,94,95,96,97,98];
    rightTop = 9;
    leftBottom = 90;
    rightBottom = 99;
    step = 10;
  }

  if (cells === 225){
    arrTopLine = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    arrLeftLine = [15,30,45,60,75,90,105,120,135,150,165,180,195];
    arrRightLine = [29,44,59,74,89,104,119,134,149,164,179,194,209];
    arrBottomLine = [211,212,213,214,215,216,217,218,219,220,221,222,223];
    rightTop = 14;
    leftBottom = 210;
    rightBottom = 224;
    step = 15;
  }

  if (cells === 625){
      arrTopLine = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
      arrLeftLine = [25,50,75,100,125,150,175,200,225,250,275,300,325,350,375,400,425,450,475,500,525,550,575];
      arrRightLine = [49,74,99,124,149,174,199,224,249,274,299,324,349,374,399,424,449,474,499,524,549,574,599];
      arrBottomLine = [601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623];
      rightTop = 24;
      leftBottom = 600;
      rightBottom = 624;
      step = 25;
  }

  

  arrMinesweeper.forEach((cell, index) => {
    if (cell === 'mine'){
      if (index === 0){
        if (arrMinesweeper[index+1] !== 'mine') {
          arrMinesweeper[index+1]++
        };
        if (arrMinesweeper[index+step] !== 'mine') {
          arrMinesweeper[index+step]++
        };
        if (arrMinesweeper[index+step+1] !== 'mine') {
          arrMinesweeper[index+step+1]++
        };
      } else {

        if (index === rightTop) {
          if (arrMinesweeper[index-1] !== 'mine') {
            arrMinesweeper[index-1]++
          };
          if (arrMinesweeper[index+step-1] !== 'mine') {
            arrMinesweeper[index+step-1]++
          };
          if (arrMinesweeper[index+step] !== 'mine') {
            arrMinesweeper[index+step]++
          };
        } else {

          if (index === leftBottom) {
            if (arrMinesweeper[index-step+1] !== 'mine') {
              arrMinesweeper[index-step+1]++
            };
            if (arrMinesweeper[index+1] !== 'mine') {
              arrMinesweeper[index+1]++
            };
            if (arrMinesweeper[index-step] !== 'mine') {
              arrMinesweeper[index-step]++
            };
          } else {
            
            if (index === rightBottom) {
              if (arrMinesweeper[index-1] !== 'mine') {
                arrMinesweeper[index-1]++
              };
              if (arrMinesweeper[index-step-1] !== 'mine') {
                arrMinesweeper[index-step-1]++
              };
              if (arrMinesweeper[index-step] !== 'mine') {
                arrMinesweeper[index-step]++
              };
            } else {

              if (arrTopLine.includes(index)){
                if (arrMinesweeper[index-1] !== 'mine') {
                  arrMinesweeper[index-1]++
                };
                if (arrMinesweeper[index+step-1] !== 'mine') {
                  arrMinesweeper[index+step-1]++
                };
                if (arrMinesweeper[index+step] !== 'mine') {
                  arrMinesweeper[index+step]++
                };
                if (arrMinesweeper[index+step+1] !== 'mine') {
                  arrMinesweeper[index+step+1]++
                };
                if (arrMinesweeper[index+1] !== 'mine') {
                  arrMinesweeper[index+1]++
                };
              } else {

                if (arrLeftLine.includes(index)){
                  if (arrMinesweeper[index-step+1] !== 'mine') {
                    arrMinesweeper[index-step+1]++
                  };
                  if (arrMinesweeper[index-step] !== 'mine') {
                    arrMinesweeper[index-step]++
                  };
                  if (arrMinesweeper[index+step+1] !== 'mine') {
                    arrMinesweeper[index+step+1]++
                  };
                  if (arrMinesweeper[index+step] !== 'mine') {
                    arrMinesweeper[index+step]++
                  };
                  if (arrMinesweeper[index+1] !== 'mine') {
                    arrMinesweeper[index+1]++
                  };
                } else {

                  if (arrRightLine.includes(index)){
                    if (arrMinesweeper[index-1] !== 'mine') {
                      arrMinesweeper[index-1]++
                    };
                    if (arrMinesweeper[index+step-1] !== 'mine') {
                      arrMinesweeper[index+step-1]++
                    };
                    if (arrMinesweeper[index+step] !== 'mine') {
                      arrMinesweeper[index+step]++
                    };
                    if (arrMinesweeper[index-step-1] !== 'mine') {
                      arrMinesweeper[index-step-1]++
                    };
                    if (arrMinesweeper[index-step] !== 'mine') {
                      arrMinesweeper[index-step]++
                    };
                  } else {

                    if (arrBottomLine.includes(index)){
                      if (arrMinesweeper[index-1] !== 'mine') {
                        arrMinesweeper[index-1]++
                      };
                      if (arrMinesweeper[index-step+1] !== 'mine') {
                        arrMinesweeper[index-step+1]++
                      };
                      if (arrMinesweeper[index-step-1] !== 'mine') {
                        arrMinesweeper[index-step-1]++
                      };
                      if (arrMinesweeper[index-step] !== 'mine') {
                        arrMinesweeper[index-step]++
                      };
                      if (arrMinesweeper[index+1] !== 'mine') {
                         arrMinesweeper[index+1]++
                      };
                    } else {

                      if (arrMinesweeper[index-1] !== 'mine') {
                        arrMinesweeper[index-1]++
                      };
                      if (arrMinesweeper[index-step+1] !== 'mine') {
                        arrMinesweeper[index-step+1]++
                      };
                      if (arrMinesweeper[index-step-1] !== 'mine') {
                        arrMinesweeper[index-step-1]++
                      };
                      if (arrMinesweeper[index-step] !== 'mine') {
                        arrMinesweeper[index-step]++
                      };
                      if (arrMinesweeper[index+1] !== 'mine') {
                        arrMinesweeper[index+1]++
                      };
                      if (arrMinesweeper[index+step] !== 'mine') {
                        arrMinesweeper[index+step]++
                      };
                      if (arrMinesweeper[index+step+1] !== 'mine') {
                        arrMinesweeper[index+step+1]++
                      };
                      if (arrMinesweeper[index+step-1] !== 'mine') {
                        arrMinesweeper[index+step-1]++
                      };
                    }
                  }
                }  
              }              
            }           
          }         
        }       
      }     
    }
  })
}

function removeEventListener(){
 // console.log('removeEventLis')
  let cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    cell.removeEventListener('click', listener);
  })
}


function gameOver (){
  playAudio('mine');
  let cells = document.querySelectorAll('.cell');
  let element = document.querySelector('.message-game-result')
  element.textContent = "Game over. Try again"
  cells.forEach((cell,index) => {
    if (minesArr.includes(index) && cell.classList.contains('cell_mine')){
      cell.classList.remove('cell_mine')
      cell.classList.add('cell_mine_background_red');
    } else {
        if (minesArr.includes(index)){
        cell.classList.add('cell_mine');
      } 
    }
  })
  clearInterval(interval);
}

function gameWin (){
  let cells = document.querySelectorAll('.cell');
  let element = document.querySelector('.message-game-result')
  element.textContent = `Hooray! You found all mines in ${seconds} seconds and ${movesQuantity} moves!`
  
  cells.forEach((cell,index) => {
    if (minesArr.includes(index) && cell.classList.contains('cell_mine')){
      cell.classList.remove('cell_mine')
      cell.classList.add('cell_mine_background_red');
    } else {
        if (minesArr.includes(index)){
        cell.classList.add('cell_mine');
      } 
    }
  })
  clearInterval(interval);
}

function checkCellsOpened(){
  if (cellsOpened === (cellsQuantity-minesQuantity)){
    gameWin();
    playAudio('win');
  } else {
    playAudio('click');
  }
};

function openEmptyCells(index2){
  function openCell (iN, cells2, checkedCells2,step2, arrTopLine, arrLeftLine, arrRightLine, arrBottomLine){
    if(checkedCells2.includes(iN)){
      return
    }
    if(!checkedCells2.includes(iN)){
      // console.log(iN, checkedCells2,step2)
      checkedCells2.push(iN)
    
      let topLeft = iN-step2-1,
        top = iN-step2,
        topRight =iN-step2+1,
        left = iN-1,
        right = iN+1,
        bottomLeft = iN + step2 - 1,
        bottom = iN+step2,
        bottomRight = iN+step2+1,
        matrixArr = [];
        if(iN === 0){
          matrixArr = [right,bottom,bottomRight];
        } else {
          if(iN === (cellsQuantity-1)) {
            matrixArr = [topLeft,top,left];
          } else {
            if(iN === (step-1)){
              matrixArr = [left,bottomLeft,bottom];
            } else {
              if(iN === (cellsQuantity-step)){
                matrixArr = [top,topRight,right];
              } else {
                if(arrTopLine.includes(iN)){
                  matrixArr = [left,right,bottomLeft,bottom,bottomRight];
                } else {
                  if(arrLeftLine.includes(iN)){
                    matrixArr = [top,topRight,right,bottom,bottomRight];
                  } else {
                    if(arrRightLine.includes(iN)){
                      matrixArr = [topLeft,top,left,bottomLeft,bottom];
                    } else {
                      if(arrBottomLine.includes(iN)){
                        matrixArr = [topLeft,top,topRight,left,right];
                      } else {
                        matrixArr = [topLeft,top,topRight,left,right,bottomLeft,bottom,bottomRight];
                      }
                    }
                  }
                }
              }
            }
          }
        }

        
        
        // console.log('matrix-arr', matrixArr)
    
        let matrixArrActual=[];
        matrixArr.forEach((item) => {
          if(item >= 0 && item < cellsQuantity) {
            
            matrixArrActual.push(item);
          }
        })
    
        // console.log(matrixArrActual)
  
        matrixArrActual.forEach((item) => {
          // console.log( 'новый квадрат, c индексом', item)
          if(!(arrMinesweeper[item] === 'mine')){
            if (arrMinesweeper[item] === '0'){
              if(cells2[item].classList.contains(`cell_closed_${whichTheme}`)){
                // console.log('она не открыта ', cells2[item])
                if (cells2[item].classList.contains(`cell_closed_${whichTheme}`)){
                  cellsOpened++
                //console.log(cellsOpened)
                };
                cells2[item].classList.remove(`cell_closed_${whichTheme}`);
                cells2[item].classList.add(`cell_null`);
                let cellsCurrent = document.querySelectorAll('.cell')
                openCell(item, cellsCurrent, checkedCells2, step2, arrTopLine, arrLeftLine, arrRightLine, arrBottomLine)
              }
            } else {
              if(cells2[item].classList.contains(`cell_closed_${whichTheme}`)){
                // console.log('она не открыта ', cells2[item])
                  cellsOpened++
                //console.log(cellsOpened);
                cells2[item].classList.remove(`cell_closed_${whichTheme}`);
                cells2[item].classList.add(`cell_${arrMinesweeper[item]}`);
              }
            }
          }  
        })                              
    }
  }
  // console.log('получен пустой индекс', index2)
  let step;

  let arrTopLine,
      arrLeftLine,
      arrRightLine,
      arrBottomLine;

  if (cellsQuantity === 100){
    arrTopLine = [1,2,3,4,5,6,7,8];
    arrLeftLine = [10, 20, 30,40,50,60,70,80];
    arrRightLine = [19,29,39,49,59,69,79,89];
    arrBottomLine = [91,92,93,94,95,96,97,98];
    step = 10;
  }

  if (cellsQuantity === 225){
    arrTopLine = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    arrLeftLine = [15,30,45,60,75,90,105,120,135,150,165,180,195];
    arrRightLine = [29,44,59,74,89,104,119,134,149,164,179,194,209];
    arrBottomLine = [211,212,213,214,215,216,217,218,219,220,221,222,223];
    step = 15;
  }

  if (cellsQuantity === 625){
      arrTopLine = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
      arrLeftLine = [25,50,75,100,125,150,175,200,225,250,275,300,325,350,375,400,425,450,475,500,525,550,575];
      arrRightLine = [49,74,99,124,149,174,199,224,249,274,299,324,349,374,399,424,449,474,499,524,549,574,599];
      arrBottomLine = [601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623];
      step = 25;
  }

  let cells = document.querySelectorAll('.cell');
  let checkedCells=[];

  openCell (index2, cells, checkedCells, step, arrTopLine, arrLeftLine, arrRightLine, arrBottomLine)

  }

function createListeners(){
  //console.log('createListners')
  let cells = document.querySelectorAll('.cell');

  //задание события при нажатии на ячейку
  cells.forEach((cell,index) => {

    //нажатие на пустую ячейку
    if (arrMinesweeper[index] === '0'){
      cell.addEventListener('click', () => {
        if (cell.classList.contains(`cell_closed_${whichTheme}`)){
          cellsOpened++
        //console.log(cellsOpened);
        movesQuantity++;
        };
        cell.classList.remove(`cell_closed_${whichTheme}`);
        
        let info = document.querySelectorAll('.info')
        
        info[2].innerHTML = `Number of clicks: ${movesQuantity}`;
        cell.classList.add(`cell_null`);
        openEmptyCells(index);
        checkCellsOpened();
      })
    } else {

      //нажатие на мину
      if (arrMinesweeper[index] === 'mine') {
        cell.addEventListener('click', () => {
          cell.classList.remove(`cell_closed_${whichTheme}`);
          let info = document.querySelectorAll('.info')
          cell.classList.add('cell_mine');
          movesQuantity++;
          info[2].innerHTML = `Number of clicks: ${movesQuantity}`; 
        })
        cell.addEventListener('click', gameOver)
      } else {

        //нажатие на цифру
        cell.addEventListener('click', () => {
          if (cell.classList.contains(`cell_closed_${whichTheme}`)){
            cellsOpened++
          //console.log(cellsOpened)
          movesQuantity++;
          };
          cell.classList.remove(`cell_closed_${whichTheme}`);
          
          checkCellsOpened();
          let info = document.querySelectorAll('.info')
          cell.classList.add(`cell_${arrMinesweeper[index]}`);
          info[2].innerHTML = `Number of clicks: ${movesQuantity}`;
        })
        }
      }
  })
}

function listener(event){
  //console.log('listener')
  //console.log(event.target)
  interval = setInterval(setTime, 1000);
  playAudio('click');

  let info = document.querySelectorAll('.info')

  /*********************************************************************/
  let pressedCell = event.target.className.split(' ')[1].slice(-3);
  if(pressedCell[0] === '_'){
    pressedCell = pressedCell.slice(-2);
  }
  if(pressedCell[0] === 'r'){
    pressedCell = pressedCell.slice(-1);
  }
  pressedCell = Number(pressedCell);
  //console.log(pressedCell)

  // console.log(pressedCell)
 
  
  removeEventListener()

  createMinesweeperArr (cellsQuantity, minesQuantity, pressedCell);
  // console.log(arrMinesweeper)
  createListeners();
  cellsOpened++
  //console.log(cellsOpened) 
  movesQuantity++;
  checkCellsOpened();
  
  event.target.classList.remove(`cell_closed_${whichTheme}`);
  
  info[2].innerHTML = `Number of clicks: ${movesQuantity}`

  if(arrMinesweeper[pressedCell] === '0'){
      event.target.classList.add(`cell_null`);
          openEmptyCells(pressedCell);
    } else {
      event.target.classList.add(`cell_${arrMinesweeper[pressedCell]}`);
    }
}

function restartGame(){
 
  let emoji = document.querySelector('.emoji')
  
  emoji.removeEventListener('click', restartGame)

  while (document.body.firstElementChild){
    document.body.removeChild(document.body.firstElementChild);
  }

  cellsOpened = 0;
  movesQuantity = 0;
  flagUsed = 0;
  arrMinesweeper = [];
  minesArr = [];
  clearInterval(interval);
  seconds = 0;
    
  
  createLayout(minesQuantity);
  createMinesweeper(cellsQuantity, whichTheme);
  createStartListenersFirstClick();
  createStartListenersAddition();
}

function createStartListenersFirstClick(){
  let cells = document.querySelectorAll('.cell')
  // console.log('createStartListeners')

  //слушатель на первое нажатие
  cells.forEach((cell) => {
    cell.addEventListener('click', listener)
  })
}

function createStartListenersAddition(){
  let cells = document.querySelectorAll('.cell')
  let emoji = document.querySelector('.emoji')
  // console.log('createStartListeners')
  let info = document.querySelectorAll('.info')

  //слушатель на флажок
  cells.forEach((cell) => {
    cell.addEventListener('contextmenu', (event) => {
        playAudio('flag');
        event.preventDefault();
        cell.classList.toggle('cell_flag')
        movesQuantity++;
        if(cell.classList.contains('cell_flag')) {
          flagUsed++
        } else {
          flagUsed--;
        }
        //обновление информации по флагам
        info[0].innerHTML = `Number of mines remaining: ${minesQuantity - flagUsed}`;
        info[1].innerHTML = `Number of used flags: ${flagUsed}`
        info[2].innerHTML = `Number of clicks: ${movesQuantity}`
    })
  })

   //слушатель на перезагрузку игры
   emoji.addEventListener('click', restartGame);

   //аудио
  let audio = document.querySelector('.sound')
 
  audio.addEventListener('click', () => {
    audio.classList.toggle('sound_off')
    if(isPlay === 'true'){
      isPlay = 'false';
    } else {
      isPlay = 'true';
    }
  })

  let button = document.querySelector('.button');

  button.addEventListener('click', changeTheme)

  // слушатель на изменение уровня сложности
  
  let levelButtons = document.querySelectorAll('.level__button');

  levelButtons[0].addEventListener('click',() => {
    cellsQuantity = 100;
    cellsPerRow = 'ten';
    restartGame();
  })

  levelButtons[1].addEventListener('click',() => {
    cellsQuantity = 225;
    cellsPerRow = 'fifteen';
    restartGame();
  })

  levelButtons[2].addEventListener('click',() => {
    cellsQuantity = 625;
    cellsPerRow = 'twenty-five';
    restartGame();
  })

  let minesQuantitySubmit = document.querySelector('.mines-quantity__submit-button');
  let quantityInput = document.querySelector('.mines-quantity__input');

  minesQuantitySubmit.addEventListener('click', () => {
    // console.log(quantityInput.value)
    minesQuantity = quantityInput.value;
    restartGame();
  })
}



let createMinesweeper = function(quantity, theme){
  let element = document.querySelector('.lower-section')
  for (let i=0; i<quantity; i++){
    let cellItem=document.createElement("div");
    cellItem.className=`cell number_${i} cell_closed_${theme} cell_${theme}`;
    element.appendChild(cellItem)
  }
}

function createLayout(quantityMines) {
  // console.log('createLayout')
  
  document.body.insertAdjacentHTML(
    'afterbegin',
    ` <div class = "container container_light">
    <header class="header">
    <div class="settings">
      <div class ="sound"></div>
      <button class="button">Change theme</button>   
    </div>
    <h1 class="header">
        Minesweeper
    </h1>
</header>
<main class="main">
  <div class="difficulcy-block">
    <div class = "level main__level">
      <button class="button level__button">Easy</button>
      <button class="button level__button">Medium</button>
      <button class="button level__button">Hard</button>
    </div>
    <div class="mines-quantity difficulcy-block__mines-quantity">
      <label for="mines-qnt" class="label">Количество мин от 10 до 99 </label>
      <input type="number" id="mines-qnt" class="mines-quantity__input" name="quantity" value=${quantityMines} min="10" max="99">
      <button type="submit" class = "mines-quantity__submit-button"> Submit </button>
    </div>
  </div>
    <div class="minesweeper minesweeper_${whichTheme}">
        <div class="upper-section upper-section_${whichTheme}">
        <div class="emoji emoji_${whichTheme}">
          <img class="emoji-img" src="assets/img/emoji.png" alt="emoji">
        </div>
           
        </div>
        <div class="lower-section lower-section_${whichTheme} lower-section_${cellsPerRow}">
        </div>     
</div>
  <div class="message-game-result"></div>    
<div class="info-block">
  <p class="info">Number of mines remaining: ${minesQuantity}</p>
  <p class="info">Number of used flags: ${flagUsed} </p>
  <p class="info">Number of clicks: ${movesQuantity} </p>
  <p class="info">Game duration: 0s </p>
</div>
</main>
    </div>
    `,
  );
}

window.addEventListener('load', getLocalStorage)
window.addEventListener('beforeunload', () => {
let arrOfValues = []
 setLocalStorage(document.body.outerHTML, cellsOpened, movesQuantity, flagUsed, arrMinesweeper,
   minesArr, isPlay, whichTheme, cellsPerRow, seconds, cellsQuantity, minesQuantity)
})



// createLayout(minesQuantity)
// createMinesweeper(cellsQuantity, whichTheme)
// createStartListeners();


// window.addEventListener('beforeunload', () => {
//   setLocalStorage(document.body.outerHTML)
// })



















