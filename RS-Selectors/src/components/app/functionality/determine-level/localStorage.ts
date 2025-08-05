import Level from "./level";

class LocalStorage {

  level: Level;

  constructor(){
    this.level = new Level();
  }

  setLocalStorageLevel(level: number) : void {
    localStorage.setItem('level', level.toString());
  }

  getLocalStorageLevel(): number {
    const getItem : string | null = localStorage.getItem('level');
    if(getItem !== null) {
      return JSON.parse(getItem);
    } else return 1;  
  }

  setLocalStorageResults(results: number[]) : void {
    localStorage.setItem('results', JSON.stringify(results));
  }

  getLocalStorageResults(): number[] {
    const getItem : string | null = localStorage.getItem('results');
    if(getItem !== null){
      return JSON.parse(getItem);
    } else {
      const maxLevel: number = this.level.getMaxLevel();
      const startArr: number[] = [];
      for (let i=1; i<=maxLevel; i+=1){
        startArr.push(0);
      }
      return startArr;
    }
  }
}

export default LocalStorage;