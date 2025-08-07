import cancelCarSelection from '../../helpers/cancelCarSelection';
import clearCreateInput from '../../helpers/clearCreateInput';
import Garage from './Garage';

class AppView {
  garage: Garage;

  carNameCreateValue: string;

  carColorCreateValue: string;

  carNameUpdateValue: string;

  carColorUpdateValue: string;

  garagePage: number;

  constructor() {
    this.garage = new Garage();
    this.carNameCreateValue = '';
    this.carColorCreateValue = '#0C3AC4';
    this.carNameUpdateValue = '';
    this.carColorUpdateValue = '#0C3AC4';
    this.garagePage = 1;
  }

  createPageNavigationButtons(): void {
    document.body.insertAdjacentHTML('afterbegin', `
    <header class="header">
            <button type="submit" class="garage">Garage</button>
            <button type="submit" class="winners">Winners</button>
    </header>
    <main class="main">
    </main>`);
  }

  createGaragePage(): void {
    const main = document.querySelector('.main') as HTMLElement;
    main.insertAdjacentHTML('afterbegin', `    
            <input type="text" class="car-name-create-input" value=${this.carNameCreateValue}>
            <input type="color" class="color-create-input" value=${this.carColorCreateValue}>
            <button type="submit" class="button-create-car">Create</button>
            <br>
            <input type="text" class="car-name-update-input">
            <input type="color" class="color-update-input" value="#0C3AC4">
            <button type="submit" class="button-update-car">Update</button>
            <br>
            <div class="garage-block">
            <h1 class="garage">Garage<span class="garage__cars-amount">()</span></h1>
            
            <button class="generate-cars" >Generate cars</button>
            <button class="start-race" >Start race</button>
            <button class="reset" >Reset</button>
            <hr>
            <div class="garage-container">
            </div>
      <div class="pagination-block">
        <button class="pagination pagination-left"><</button>
        <span class="page-number">1 page</span>
        <button class="pagination pagination-right">></button>
       </div>
            </div>
            `);
    this.garage.drawGarageBlock(this.garagePage);
    this.addGarageListeners();

    const paginationLeft = document.querySelector('.pagination-left') as HTMLDivElement;
    if (this.garagePage === 1) {
      paginationLeft.setAttribute('disabled', '');
    }
  }

  removeMainContent(): void {
    const main = document.querySelector('.main') as HTMLElement;
    while (main.firstElementChild) {
      main.firstElementChild.remove();
    }
  }

  private addGarageListeners(): void {
    const carNameInput = document.querySelector('.car-name-create-input') as HTMLInputElement;
    carNameInput.addEventListener('blur', () => { this.carNameCreateValue = carNameInput.value; });

    const carColorInput = document.querySelector('.color-create-input') as HTMLInputElement;
    carColorInput.addEventListener('blur', () => { this.carColorCreateValue = carColorInput.value; });

    const carNameUpdateInput = document.querySelector('.car-name-update-input') as HTMLInputElement;
    carNameUpdateInput.addEventListener('blur', () => { this.carNameUpdateValue = carNameUpdateInput.value; });

    const carColorUpdateInput = document.querySelector('.color-update-input') as HTMLInputElement;
    carColorUpdateInput.addEventListener('blur', () => { this.carColorUpdateValue = carColorUpdateInput.value; });

    const startRace = document.querySelector('.start-race') as HTMLButtonElement;
    startRace.addEventListener('click', () => { this.garage.animations.startRace(this.garage.carsOnPage); });

    const resetRace = document.querySelector('.reset') as HTMLButtonElement;
    resetRace.addEventListener('click', () => this.garage.animations.resetRace(this.garage.carsOnPage));

    const buttonCreateCar = document.querySelector('.button-create-car') as HTMLButtonElement;
    buttonCreateCar.addEventListener('click', () => {
      this.garage.createCar(
        this.garagePage,
        { name: this.carNameCreateValue, color: this.carColorCreateValue },
      );
      clearCreateInput();
    });

    const buttonUpdateCar = document.querySelector('.button-update-car') as HTMLButtonElement;
    buttonUpdateCar.addEventListener('click', () => {
      // if a car is selected to be update - get input update values and update the car
      if (buttonUpdateCar.classList.contains('selected')) {
        const idToUpdate = Number(buttonUpdateCar.className.split(' ')[2]);
        const updatedName: string = this.carNameUpdateValue;
        const updatedColor: string = this.carColorUpdateValue;
        this.garage.updateCar(idToUpdate, updatedName, updatedColor);
        cancelCarSelection();
      }
    });

    const paginationLeft = document.querySelector('.pagination-left') as HTMLDivElement;
    const paginationRight = document.querySelector('.pagination-right') as HTMLDivElement;

    paginationLeft.addEventListener('click', () => {
      if (this.garagePage === 2) {
        paginationLeft.setAttribute('disabled', '');
      }

      if (this.garagePage === this.garage.getPagesAmount()) {
        paginationRight.removeAttribute('disabled');
      }

      this.garagePage -= 1;
      this.garage.removeCars();
      this.garage.drawCars(this.garagePage);
      cancelCarSelection();
    });

    paginationRight.addEventListener('click', () => {
      if (this.garagePage === 1) {
        paginationLeft.removeAttribute('disabled');
      }

      if (this.garagePage === this.garage.getPagesAmount() - 1) {
        paginationRight.setAttribute('disabled', '');
      }

      this.garagePage += 1;
      this.garage.removeCars();
      this.garage.drawCars(this.garagePage);
      cancelCarSelection();
    });

    const generateCarsButton = document.querySelector('.generate-cars') as HTMLButtonElement;
    generateCarsButton.addEventListener('click', () => this.garage.generateCars());
  }

  createWinnersPage(): void {
    const main = document.querySelector('.main') as HTMLElement;
    main.insertAdjacentHTML('afterbegin', `
    <h1 class="winners">Winners</h1>
    <hr>
    <table>
    <thead>
        <tr>
            <th class="number">Number</th>
            <th class="car-name">Name</th>
            <th class="wins-quantity">Wins quantity</th>
            <th class="best-result">Best result</th>
        </tr>
    </thead>
    <tbody>
        <tr class = row-1>
            <td class="number">1</td>
            <td class="car-name">Name</td>
            <td class="wins-quantity">Wins quantity</td>
            <td class="best-result">Best result</td>
        </tr>
    </tbody>
  </table>
  <div class="pagination-block">
    <button class="pagination pagination-left"><</button>
    <span class="page-number">1 page</span>
    <button class="pagination pagination-right">></button>
  </div>`);
  }
  // private addWinnersListeners(){}

  createStartView(): void {
    this.createPageNavigationButtons();
    this.createGaragePage();
  }
}

export default AppView;
