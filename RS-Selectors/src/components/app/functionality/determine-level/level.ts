import Tasks from "../../../view/blocks/tasks";
import tasksData from "../../../view/blocks/tasksData";
import '../../../../css/side-menu.css'

class Level {
  level: number;
  maxLevel: number;
  tasks: Tasks;
  results: number[];

  constructor(){
    this.level = 1;
    this.maxLevel = 10;
    this.tasks = new Tasks ();
    this.results = [0,0,0,0,0,0,0,0,0,0];
  }

  increaseLevel(): void {
    if (this.level < this.maxLevel) {
      this.level = this.level + 1;
    }
  }

  decreaseLevel(): void {
    if (this.level > 1){ 
      this.level = this.level - 1;
    }
  }

  nextLevel(): void {
    this.increaseLevel();
    this.tasks.deleteTask();
    this.tasks.insertTask(this.maxLevel, this.level, this.results);
  }

  previousLevel(): void {
    this.decreaseLevel();
    this.tasks.deleteTask();
    this.tasks.insertTask(this.maxLevel, this.level, this.results);
  }

  chooseLevel(level: number): void {
    this.level = level;
  }

  setLevel(level:number) : void {
    this.level = level;
    this.tasks.deleteTask();
    this.tasks.insertTask(this.maxLevel, this.level, this.results);
  }

  getLevel() : number {
    return this.level;
  }

  getLevelResults() : number[] {
    return this.results;
  }

  getMaxLevel() : number {
    return this.maxLevel;
  }

  setPaginationListeners() : void {
    const arrows : NodeListOf<Element> = document.querySelectorAll('.pagination');
    arrows[0].addEventListener('click', () => this.previousLevel());
    arrows[1].addEventListener('click', () => this.nextLevel());
  }

  removePaginationListeners() : void {
    const arrows : NodeListOf<Element> = document.querySelectorAll('.pagination');
    arrows[0].removeEventListener('click', () => this.previousLevel());
    arrows[1].removeEventListener('click', () => this.nextLevel());
  }

  setResults(results:number[]) : void {
    this.results = results;
  }

  setResult(maxLevel: number, index: number, result: 0|1|2) : void{
    if(index < maxLevel-1){
      this.results[index-1] = result;
    }
  }

  insertLevelsResult() : void {
    const levelsList = document.querySelector('.levels-list') as HTMLUListElement;
    for (let i =1; i<= this.maxLevel; i+=1){
      const listItem : HTMLLIElement = document.createElement("li");
      listItem.className = 'levels-list__item';
      let checkMarkColor = 'grey';
      if(this.results[i-1] === 1) {
        checkMarkColor ='blue';
      } else {if(this.results[i-1] === 2){
        checkMarkColor = 'green';
      }
      }
      listItem.insertAdjacentHTML('afterbegin',`
        <div class="checkmark checkmark__side-menu checkmark_color_${checkMarkColor}"></div> ${i} <span class="task-description" >${tasksData[i-1].taskName}</span>
      `)

      listItem.addEventListener('click',()=>{
        this.setLevel(i);
        this.tasks.deleteTask();
        this.tasks.insertTask(this.maxLevel, i, this.results);
      })

      levelsList.appendChild(listItem);
    }
  }
}

export default Level;