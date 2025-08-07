function makeDisabled(carContainer: HTMLDivElement | Document, buttons: string[]): void {
  buttons.forEach((item: string): void => {
    const button = carContainer.querySelector(`.${item}`) as HTMLButtonElement;
    button.setAttribute('disabled', '');
  });
}

export default makeDisabled;
