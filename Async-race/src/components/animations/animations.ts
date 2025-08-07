import makeDisabled from '../../helpers/makeDisabled';
import removeDisabled from '../../helpers/removeDisabled';
import { CarsObjData } from '../../types';
import Server from '../../server/server';

class Animations {
  movingCars: number[];

  server: Server;

  constructor() {
    this.movingCars = [];
    this.server = new Server();
  }

  startRace(carsOnPage: number[]): void {
    // when all engines are started
    Promise.all(carsOnPage.map(async (carID: number) => {
      const carContainer = document.getElementById(`${carID}`) as HTMLDivElement;
      return [await this.server.startEngine(carID), carID, carContainer];
    }))

      .then((values) => {
      // set/remove buttons to disable state
        values.forEach((value) => {
          this.movingCars.push(value[1]);
          makeDisabled(value[2], ['start']);
          makeDisabled(document, ['start-race']);
          removeDisabled(value[2], ['stop']);
        });

        // switch cars to drive and start animation; when one of cars reaches finish show
        // message that it wins
        Promise.any(values.map(async (data) => {
          const intervalID: NodeJS.Timer = this.animateCarMoving(data[2], data[0], data[1]);
          return [await this.server.switchToDrive(data[1]).catch((e:Error): Error => {
            clearInterval(intervalID);
            throw e;
          }), data[1], data[0]];
        }))
          .then((value) => {
            const carContainer = document.getElementById(value[1]) as HTMLDivElement;
            const winnerNameSpan = carContainer.querySelector('.car-name') as HTMLSpanElement;
            const winnerName: string | null = winnerNameSpan.textContent;
            const time = Number((value[2].distance / value[2].velocity / 1000).toFixed(2));

            const winnerMessage: HTMLParagraphElement = document.createElement('p');
            winnerMessage.className = 'winner-message';
            winnerMessage.textContent = `${winnerName} wins the race in ${time}s!`;

            carContainer.appendChild(winnerMessage);
          });
      });
  }

  resetRace(carsOnPage: number[]) : void {
    // remove winners message if there any
    const winnerMessage = document.querySelector('.winner-message') as HTMLParagraphElement;
    if (winnerMessage) {
      winnerMessage.remove();
    }

    // stop all engines - return cars on their places, change buttons ability
    Promise.all(carsOnPage.map(async (id: number) : Promise<number> => {
      await this.server.stopEngine(id);
      return id;
    })).then((carsOnPage2: number[]) => {
      carsOnPage2.forEach((id: number) => {
        const carContainer = document.getElementById(`${id}`) as HTMLDivElement;
        this.returnCarOnStart(id, carContainer);
        makeDisabled(carContainer, ['stop']);
        removeDisabled(carContainer, ['start']);
      });
      removeDisabled(document, ['start-race']);
    });
  }

  animateCarMoving(carContainer: HTMLDivElement, parObj: CarsObjData, id: number): NodeJS.Timer {
    const raceContainer = carContainer.querySelector('.race-container') as HTMLDivElement;
    const raceWidth: number = raceContainer.clientWidth - 133;
    const car = raceContainer.querySelector('svg') as SVGElement;
    this.movingCars.push(id);

    let currentX = 0;
    const intervalDistance: number = raceWidth / ((parObj.distance / parObj.velocity) / 30);

    const intervalID: NodeJS.Timer = setInterval(() => {
      // if user presses stop, the car is being removed from movingCarsArr,
      // animation is stopped and car returns to its place
      if (!this.movingCars.includes(id)) {
        clearInterval(intervalID);
        setTimeout(() => { car.style.transform = 'translateX(0px)'; }, 1000);
      }

      currentX += intervalDistance;

      // when car reaches finish, animation is stopped
      if (currentX >= raceWidth) {
        clearInterval(intervalID);
      }
      car.style.transform = `translateX(${currentX}px)`;
    }, 30);

    return intervalID;
  }

  returnCarOnStart(id: number, carContainer: HTMLDivElement) : void {
    const raceContainer = carContainer.querySelector('.race-container') as HTMLDivElement;
    const car = raceContainer.querySelector('svg') as SVGElement;

    const index: number = this.movingCars.indexOf(id);
    this.movingCars.splice(index, 1);

    car.style.transform = 'none';
  }
}

export default Animations;
