import Tasks from './blocks/tasks'
import LineNumbers from './blocks/lineNumbers'

class AppView {
  lineNumbers: LineNumbers;
  tasks: Tasks;

  constructor (){
    this.lineNumbers = new LineNumbers();
    this.tasks = new Tasks();
  }

  drawBlocks() : void{
    this.lineNumbers.insertLineNumbers(0);
    this.lineNumbers.insertLineNumbers(1);
  } 
  
  changeMark(result:1|2, level: number): void {
    const checkMarkBlock4 = document.querySelector('.checkmark__block4') as HTMLDivElement;
    const checkMarkSideMenu = document.querySelectorAll('.checkmark__side-menu')[level-1] as HTMLDivElement;
    checkMarkBlock4.classList.remove('checkmark_color_grey');
    checkMarkSideMenu.classList.remove('checkmark_color_grey');
    if(result === 1){
      checkMarkBlock4.classList.add('checkmark_color_blue');
      checkMarkSideMenu.classList.add('checkmark_color_blue');
    }
    if(result === 2){
      checkMarkBlock4.classList.add('checkmark_color_green');
      checkMarkSideMenu.classList.add('checkmark_color_green');
    }
  }
}

export default AppView;