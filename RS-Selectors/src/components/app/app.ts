import AppView from '../view/appView';
import LocalStorage from './functionality/determine-level/localStorage';
import Level from './functionality/determine-level/level';
import Listeners from './functionality/listeners/listeners';
import tasksData from '../view/blocks/tasksData';
//import LevelListeners from './functionality/listeners/levelListeners';


class App {
  view: AppView;
  localStorage: LocalStorage;
  level: Level;
  listeners: Listeners;

  constructor() {
    this.view = new AppView();
    this.localStorage = new LocalStorage();
    this.level = new Level();
    this.listeners = new Listeners();
  }

  start() : void {

    // проверяем есть ли что-то в локал, и устанавливаем значение уровня и результатов; если нет, устанавливаем уровень 1 и стартовые результаты
    const localStorageLevel: number = this.localStorage.getLocalStorageLevel();
    this.level.setLevel(localStorageLevel);
    const localStorageLevelResults: number[] = this.localStorage.getLocalStorageResults();
    this.level.setResults(localStorageLevelResults);

    // дорисовываем некоторые блоки
    this.view.drawBlocks();
    this.level.insertLevelsResult();
    
    //устанавливаем слушатели
    this.level.setPaginationListeners();
    this.listeners.setBurgerMenuListener();

    //добавляем сохранение данных в LocalStorage перед перезагрузкой
    window.addEventListener('beforeunload', () => {
      const level: number = this.level.getLevel();
      this.localStorage.setLocalStorageLevel(level);
      const levelResults : number[] = this.level.getLevelResults();
      this.localStorage.setLocalStorageResults(levelResults);
    })

    //добавляем слушатель для обработки ввода селектора
    const maxLevel: number = this.level.getMaxLevel();
    const form = document.querySelector('.selector-form') as HTMLFormElement;
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const selectorInput = document.querySelector('.css-selector-input') as HTMLInputElement;
      const level: number = this.level.getLevel();
      if(selectorInput.value === tasksData[level-1].selector ){
        const animatedItems: NodeListOf<Element> = document.querySelectorAll('.animation-swing');
        animatedItems.forEach((item) => {
          item.classList.add('animation-swing-away');
        })
        this.level.setResult(maxLevel,level,2);
        this.view.changeMark(2, level);
      setTimeout(() => this.level.nextLevel(), 2000); 
      selectorInput.value = '';
      } else {
        const message: HTMLDivElement = document.createElement('div');
        message.textContent = "try one more time";
        message.className = 'message';
        document.body.appendChild(message);
        setTimeout(()=> message.remove(), 1000)
      }
    })
  }
}

export default App;