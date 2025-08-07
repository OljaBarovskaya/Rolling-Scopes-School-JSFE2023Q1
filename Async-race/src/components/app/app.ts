import AppView from '../view/appView';

class App {
  view: AppView;

  constructor() {
    this.view = new AppView();
  }

  start() {
    this.view.createStartView();

    const garage = document.querySelector('.garage') as HTMLButtonElement;
    const winners = document.querySelector('.winners') as HTMLButtonElement;

    garage.addEventListener('click', () => {
      this.view.removeMainContent();
      this.view.createGaragePage();
    });

    winners.addEventListener('click', () => {
      this.view.removeMainContent();
      this.view.createWinnersPage();
    });
  }
}

export default App;
