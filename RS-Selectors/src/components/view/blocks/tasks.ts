import tasksData from "./tasksData";
import '../../../css/tasks.css';
import '../../../css/animation.css';

class Tasks {

  insertTask (maxLevel:number, level:number, levelResults: number[]) : void {
    
    const taskToDo = document.querySelector('.task-to-do') as HTMLDivElement;
    const table = document.querySelector('.table') as HTMLDivElement;
    const block = document.querySelector('.block3-column-1st') as HTMLParagraphElement;
    const levelNumber = document.querySelector('.level-number') as HTMLHeadingElement;
    const checkmarkBlock4 = document.querySelector('.checkmark__block4') as HTMLDivElement;
    //const rightColumn = document.querySelector('.right-column') as HTMLDivElement;

    taskToDo.innerHTML = tasksData[level-1].taskName;
    table.insertAdjacentHTML('afterbegin', `${tasksData[level-1].htmlBlock1}`);
    block.insertAdjacentHTML ('afterend', `${tasksData[level-1].htmlBlock3}`);
    levelNumber.textContent = `Level ${level} of ${maxLevel}`;
    const checkMarkColorClass: string = checkmarkBlock4.className.split(' ')[2];
    if(levelResults[level-1] === 0){
      if(!(checkMarkColorClass === 'checkmark_color_grey')){
        checkmarkBlock4.classList.remove(checkMarkColorClass);
        checkmarkBlock4.classList.add('checkmark_color_grey');
      }     
    } 
    if(levelResults[level-1] === 1){
      if(!(checkMarkColorClass === 'checkmark_color_blue')){
        checkmarkBlock4.classList.remove(checkMarkColorClass);
        checkmarkBlock4.classList.add('checkmark_color_blue');
      } 
    }
    if(levelResults[level-1] === 2){
      if(!(checkMarkColorClass === 'checkmark_color_green')){
        checkmarkBlock4.classList.remove(checkMarkColorClass);
        checkmarkBlock4.classList.add('checkmark_color_green');
      } 
    }
  }
  
   // rightColumn.insertAdjacentHTML('beforeend', `<button type="button" class="button button-help">Help</button>`)
    //this.listeners.setHelpListener(level);


  deleteTask(): void {
    const table = document.querySelector('.table') as HTMLDivElement;
    const block : NodeListOf<HTMLDivElement> = document.querySelectorAll('.block3-column-2nd');

    while (table.firstChild){
      table.firstChild.remove();
    }
    
    block.forEach(item => item.remove());

    //const helpButton = document.querySelector('.button-help') as HTMLButtonElement;
    //helpButton.remove();
  }
}



export default Tasks;